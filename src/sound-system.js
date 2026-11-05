import manifest from './signal-samples.generated.json';
import { SOUND_CONFIG } from './sound-config.js';
import { soundShortcut } from './sound-shortcuts.js';

export function createSoundSystem(ambient, overrides = {}) {
  // Configuration contains only JSON values; support Safari before 15.4.
  const settings = JSON.parse(JSON.stringify(SOUND_CONFIG));
  for (const [key, value] of Object.entries(overrides)) settings[key] = typeof value === 'object' && !Array.isArray(value) ? { ...settings[key], ...value } : value;
  const controller = new AbortController();
  const samples = new Map(), buffers = new Map(), voices = new Set();
  const history = [], errors = [], inputWindow = [];
  const previousSamples = new Map();
  const listeners = new Set();
  let context, master, flowBus, detailBus, limiter, loading;
  let mode = 'auto', playback = 'waiting', playRequest = null, playGeneration = 0;
  let fadeFrame = 0, fade = null;
  let recoveryTimer = 0;
  let enabled = true, disposed = false, unlocked = false, suspended = document.hidden, wasRunning = false;
  let present = true, presenceGain = 1;
  let nextFlow = Infinity, nextDetail = Infinity, nextMicro = Infinity, quietUntil = 0;
  let nearCount = 0, lastGlitch = -Infinity;
  let lastOnset = -Infinity, lastFlowEnd = -Infinity;
  let activity = 0, windowActivity = 0, peakVoices = 0, lastDetailGain = -1;
  let observation = null, lastObservation = -Infinity;
  const range = ([min, max]) => min + Math.random() * (max - min);
  const seconds = () => performance.now() / 1000;
  const report = message => { if (!errors.includes(message)) { errors.push(message); console.warn('[audio] ' + message); } };
  // One media element remains connected directly to the speakers. Manual
  // ambient must work even if Web Audio or camera detection cannot initialize.
  ambient.loop = true;
  ambient.volume = 0;
  const audible = () => enabled && !suspended && !disposed && (mode === 'ambient' || present);
  const mediaVolume = () => audible() ? (mode === 'ambient' ? settings.manualAmbientVolume : settings.volumes.ambient) : 0;
  const effectsGain = () => audible() ? 1 : 0;
  const notify = () => listeners.forEach(listener => listener(snapshot()));

  function finishSilence() {
    if (!audible()) { ambient.pause(); playGeneration++; playRequest = null; }
    if (mode !== 'auto' || !present) stopVoices();
  }

  function fadeToMode(immediate = false, seconds = settings.modeFadeSeconds) {
    cancelAnimationFrame(fadeFrame); fadeFrame = 0;
    const duration = immediate ? 0 : seconds * 1000;
    const destination = mediaVolume(), gainTarget = effectsGain();
    if (master) {
      master.gain.cancelScheduledValues(context.currentTime);
      master.gain.setValueAtTime(master.gain.value, context.currentTime);
      if (duration) master.gain.setTargetAtTime(gainTarget, context.currentTime, duration / 3000);
      else master.gain.setValueAtTime(gainTarget, context.currentTime);
    }
    fade = { start: performance.now(), from: ambient.volume, to: destination, gainFrom: presenceGain, gainTo: gainTarget, duration };
    const step = now => {
      const t = duration ? Math.min(1, Math.max(0, (now - fade.start) / duration)) : 1;
      const eased = t * t * (3 - 2 * t);
      ambient.volume = fade.from + (fade.to - fade.from) * eased;
      presenceGain = fade.gainFrom + (fade.gainTo - fade.gainFrom) * eased;
      if (t < 1) fadeFrame = requestAnimationFrame(step);
      else { fadeFrame = 0; fade = null; finishSilence(); notify(); }
    };
    if (duration) fadeFrame = requestAnimationFrame(step);
    else step(performance.now());
  }

  function resetSchedule(now) {
    nextFlow = now + range(settings.flow.first);
    nextDetail = settings.primaryFamily === 'detail' ? Infinity : now + range(settings.detail.first || settings.detail.interval);
    nextMicro = Infinity;
    quietUntil = 0;
    nearCount = 0;
  }

  function clearActivity() { inputWindow.length = 0; activity = 0; windowActivity = 0; }

  function updateActivity(now, dt, inputSpeed) {
    const elapsed = Math.min(.1, Math.max(0, dt));
    const speed = Number.isFinite(inputSpeed) ? Math.max(0, inputSpeed - settings.activity.deadzone) : 0;
    const value = Math.min(1, speed / settings.activity.fullScale);
    if (value > 0) inputWindow.push({ time: now, value, duration: elapsed });
    const cutoff = now - settings.activity.window;
    while (inputWindow.length && inputWindow[0].time <= cutoff) inputWindow.shift();
    windowActivity = Math.min(1, inputWindow.reduce((sum, entry) => sum + entry.value * Math.min(entry.duration, entry.time - cutoff), 0) / settings.activity.window);
    const smoothing = windowActivity > activity ? settings.activity.attack : settings.activity.release;
    activity += (windowActivity - activity) * (1 - Math.exp(-elapsed / smoothing));
  }

  function stopVoices() {
    for (const voice of [...voices]) {
      try { voice.source.stop(); } catch { /* Source already ended. */ }
      voice.source.disconnect(); voice.gain.disconnect(); voice.filter.disconnect();
      voices.delete(voice);
    }
  }

  function makeBus(destination, highpass = settings.eq.highpass) {
    const gain = context.createGain(), hp = context.createBiquadFilter(), shelf = context.createBiquadFilter(), lp = context.createBiquadFilter();
    hp.type = 'highpass'; hp.frequency.value = highpass; hp.Q.value = .5;
    shelf.type = 'highshelf'; shelf.frequency.value = settings.eq.shelfFrequency; shelf.gain.value = settings.eq.shelfGain;
    lp.type = 'lowpass'; lp.frequency.value = settings.eq.lowpass; lp.Q.value = .5;
    gain.connect(hp).connect(shelf).connect(lp).connect(destination);
    return gain;
  }

  function loadSamples() {
    if (loading) return loading;
    loading = Promise.all(manifest.samples.map(async sample => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}${sample.file.replace(/^\//, '')}`, { signal: controller.signal });
        if (!response.ok) throw new Error('HTTP ' + response.status);
        const buffer = await context.decodeAudioData(await response.arrayBuffer());
        if (!disposed) { samples.set(sample.id, sample); buffers.set(sample.id, buffer); }
      } catch (error) {
        if (!disposed && error.name !== 'AbortError') report(sample.id + ': ' + error.message);
      }
    }));
    return loading;
  }

  function ensureContext() {
    if (context || disposed) return;
    const Constructor = window.AudioContext || window.webkitAudioContext;
    if (!Constructor) { report('Web Audio unavailable; ambient remains available.'); return; }
    try { context = new Constructor({ latencyHint: 'interactive' }); }
    catch (error) { report('Audio context: ' + error.message); return; }
    master = context.createGain(); master.gain.value = effectsGain();
    limiter = context.createDynamicsCompressor();
    limiter.threshold.value = -12; limiter.knee.value = 6; limiter.ratio.value = 10;
    limiter.attack.value = .006; limiter.release.value = .16;
    flowBus = makeBus(limiter); detailBus = makeBus(limiter, settings.eq.detailHighpass);
    flowBus.gain.value = settings.volumes.flow;
    detailBus.gain.value = settings.volumes.detail * (1 - settings.activity.detailDepth);
    limiter.connect(master).connect(context.destination);
  }

  function playAmbient(prime = false) {
    if (!enabled || disposed || suspended || (!prime && !audible())) return;
    if (playRequest || (!ambient.paused && playback === 'playing')) return;
    const generation = ++playGeneration;
    playback = 'starting';
    try {
      // This call must stay synchronous inside the key/click event. Awaiting
      // resume(), sample fetching, or camera permission loses Safari activation.
      if (ambient.error) ambient.load();
      const request = ambient.play();
      playRequest = Promise.resolve(request).then(() => {
        if (generation !== playGeneration || disposed) return;
        playRequest = null;
        if (!audible() && !fade) ambient.pause();
        else playback = ambient.paused ? 'waiting' : 'playing';
        notify();
      }, error => {
        if (generation !== playGeneration || disposed) return;
        playRequest = null;
        playback = error.name === 'NotAllowedError' ? 'blocked' : error.name === 'AbortError' ? 'waiting' : 'error';
        if (!['NotAllowedError', 'AbortError'].includes(error.name)) report('Ambient: ' + error.message);
        notify();
      });
    } catch (error) { playback = 'error'; report('Ambient: ' + error.message); }
    notify();
  }

  function unlock(event) {
    if (!enabled || disposed) return;
    unlocked = true;
    // HTML audio is the independent safety path, even without AudioContext.
    playAmbient(Boolean(event?.isTrusted));
    ensureContext();
    if (context && !document.hidden) context.resume().then(() => {
      // Safari may keep resume pending until a real user gesture. Do not fetch
      // or decode the sample bank while browser audio is still blocked.
      if (!disposed && context.state === 'running') void loadSamples();
    }).catch(error => report(error.message));
    notify();
  }

  function keyboard(event) {
    const command = soundShortcut(event);
    if (command) {
      event.preventDefault();
      setMode(command === 'ambient' && mode === 'ambient' ? 'auto' : command, event);
    } else if (!event.repeat) unlock(event);
  }

  function choose(family) {
    let options = [...samples.values()].filter(sample => sample.family === family);
    const different = options.filter(sample => sample.id !== previousSamples.get(family));
    if (different.length) options = different;
    return options[Math.floor(Math.random() * options.length)];
  }

  function cutoffFor(family) {
    const bounds = settings.eq[family + 'Cutoff'];
    return bounds[0] + (bounds[1] - bounds[0]) * activity;
  }

  function playSample(sample, gainScale = 1, now = seconds(), trigger = 'autonomous', cue = {}) {
    if (!sample || !audible() || context?.state !== 'running') return false;
    if (trigger !== 'zoom' && (mode !== 'auto' || !present)) return false;
    if (trigger !== 'zoom' && !settings.enabledFamilies.includes(sample.family)) return false;
    if (voices.size >= settings.maxVoices) return false;
    const previous = history[history.length - 1];
    if (previous?.family === sample.family && now - lastOnset < settings.minOnsetGap) return false;
    if ([...voices].some(voice => voice.family === sample.family)) return false;
    const source = context.createBufferSource(), gain = context.createGain(), filter = context.createBiquadFilter();
    source.buffer = buffers.get(sample.id);
    filter.type = 'lowpass'; filter.Q.value = .5;
    const targetCutoff = cue.cutoff || cutoffFor(sample.family);
    filter.frequency.value = targetCutoff;
    const start = context.currentTime + (cue.delay || 0);
    source.playbackRate.value = cue.rate || 1;
    const excerpt = Math.min(source.buffer.duration, cue.duration || range(settings.fragments[sample.family] || [source.buffer.duration, source.buffer.duration]));
    const duration = excerpt / source.playbackRate.value;
    const offset = range([0, Math.max(0, source.buffer.duration - excerpt)]);
    const level = gainScale * range(sample.family === 'detail' ? [.88, 1.06] : sample.family === 'micro' ? [.9, 1.05] : [.58, 1.02]);
    const attack = Math.min(sample.family === 'micro' ? .004 : .015, duration * .15);
    const release = Math.min(sample.family === 'micro' ? .012 : .045, duration * .25);
    gain.gain.setValueAtTime(0, start);
    gain.gain.linearRampToValueAtTime(level, start + attack);
    gain.gain.setValueAtTime(level, start + duration - release);
    gain.gain.linearRampToValueAtTime(0, start + duration);
    source.connect(gain).connect(filter).connect(sample.family === 'detail' ? detailBus : flowBus);
    const voice = { source, gain, filter, family: sample.family, targetCutoff,
      tailAt: start + duration - range(settings.micro.tailLead), endAt: start + duration, tailChecked: false };
    voices.add(voice); peakVoices = Math.max(peakVoices, voices.size);
    source.onended = () => { source.disconnect(); gain.disconnect(); filter.disconnect(); voices.delete(voice); };
    source.start(start, offset, excerpt); lastOnset = now;
    if (sample.family === 'micro') lastGlitch = now;
    if (sample.family === settings.primaryFamily) lastFlowEnd = now + duration;
    previousSamples.set(sample.family, sample.id);
    history.push({ family: sample.family, id: sample.id, trigger, time: now, duration, offset, level, activityAtStart: activity, cutoffAtStart: targetCutoff });
    if (history.length > 100) history.shift();
    return true;
  }

  function updateModulation() {
    // Activity only changes already-scheduled audio. It never starts a source.
    const detailLevel = settings.volumes.detail * (1 - settings.activity.detailDepth + settings.activity.detailDepth * activity);
    if (Math.abs(detailLevel - lastDetailGain) > .0005) {
      detailBus.gain.setTargetAtTime(detailLevel, context.currentTime, settings.activity.filterSmoothing);
      lastDetailGain = detailLevel;
    }
    for (const voice of voices) {
      const target = cutoffFor(voice.family);
      if (Math.abs(target - voice.targetCutoff) > 2) {
        voice.filter.frequency.setTargetAtTime(target, context.currentTime, settings.activity.filterSmoothing);
        voice.targetCutoff = target;
      }
    }
  }

  function update(nowMs, dt, inputSpeed = 0) {
    const now = nowMs / 1000;
    if (disposed || !enabled || suspended) return;
    if (observation && now > observation.expires) observation = null;
    if (observation && audible() && context?.state === 'running' && samples.size === manifest.samples.length && voices.size === 0) {
      const strength = observation.strength;
      const acquired = playSample(choose('flow'), .38 + strength * .12, now, 'zoom', { duration: .3 + strength * .12, cutoff: 4700, rate: range([.94, 1.04]) });
      if (acquired) {
        playSample(choose('detail'), .5 + strength * .12, now, 'zoom', { delay: .08, duration: .24 + strength * .09, cutoff: 6200 });
        lastObservation = now; observation = null;
        nextFlow = Math.max(nextFlow, now + .9); nextDetail = Math.max(nextDetail, now + .9);
      }
    }
    if (mode !== 'auto' || !present) return;
    updateActivity(now, dt, inputSpeed);
    if (context?.state !== 'running' || !samples.size) return;
    if (!wasRunning) { resetSchedule(now); wasRunning = true; }
    updateModulation();
    // Movement admits a quiet glitch only inside an existing reveal's tail.
    for (const voice of [...voices]) {
      if (voice.family !== 'detail' || voice.tailChecked || context.currentTime < voice.tailAt) continue;
      voice.tailChecked = true;
      if (context.currentTime >= voice.endAt - .015 || now - lastGlitch < settings.micro.cooldown) continue;
      if (windowActivity > settings.activity.tailThreshold && activity > settings.activity.tailThreshold &&
          Math.random() < settings.activity.tailChance * Math.min(1, .3 + activity)) {
        playSample(choose('micro'), settings.micro.gain, now, 'activity-tail');
      }
    }
    // Autonomous flow mixes long silences with occasional near neighbours.
    if (now >= nextFlow) {
      const sample = choose(settings.primaryFamily);
      const played = playSample(sample, 1, now);
      if (!played) { nextFlow = now + range([.3, 1.1]); }
      else if (Math.random() < settings.flow.quietChance) {
        quietUntil = now + (sample?.duration || 0) + range(settings.flow.quietInterval);
        nextFlow = quietUntil;
        nearCount = 0;
      } else {
        quietUntil = 0;
        const near = Math.random() < settings.flow.nearChance * Math.pow(.8, nearCount);
        nextFlow = now + range(near ? settings.flow.nearInterval : settings.flow.interval);
        nearCount = near ? nearCount + 1 : 0;
      }
    }
    if (now >= nextDetail) {
      if (now < quietUntil) nextDetail = quietUntil + range([1, 3]);
      else if (now - lastOnset > settings.detail.clearance && playSample(choose('detail'), 1, now)) nextDetail = now + range(settings.detail.interval);
      else nextDetail = now + range([.2, .9]);
    }
  }

  function setMode(value, event) {
    if (disposed || !['auto', 'ambient', 'muted'].includes(value)) return;
    const changed = mode !== value;
    mode = value; enabled = mode !== 'muted';
    // Muting is immediate. Keep the context alive to avoid an asynchronous
    // suspend racing the next key's resume on older Safari.
    ambient.muted = !enabled;
    if (changed) { clearActivity(); wasRunning = false; }
    fadeToMode(!enabled);
    if (!enabled) { observation = null; stopVoices(); ambient.pause(); }
    else unlock(event);
    notify();
  }

  function setEnabled(value) { setMode(value ? 'auto' : 'muted'); }

  function setVolumes(volumes) {
    if (disposed) return;
    for (const key of ['ambient', 'flow', 'detail']) if (Number.isFinite(volumes[key])) settings.volumes[key] = Math.min(1, Math.max(0, volumes[key]));
    lastDetailGain = -1; fadeToMode();
    if (context && !disposed) flowBus.gain.setTargetAtTime(settings.volumes.flow, context.currentTime, .1);
    notify();
  }

  function setAmbientVolume(value) {
    if (!Number.isFinite(value) || disposed) return;
    settings.manualAmbientVolume = Math.min(1, Math.max(0, value));
    fadeToMode(); notify();
  }

  function setPresence(value, immediate = false) {
    if (disposed) return;
    const changed = present !== Boolean(value);
    present = Boolean(value);
    // Camera resets, permission failures and lost faces cannot mute Ambient.
    if (mode !== 'auto') { notify(); return; }
    if (changed || immediate) {
      clearActivity(); wasRunning = false;
      fadeToMode(immediate, present ? .8 : 1.5);
      if (present && unlocked) playAmbient();
      notify();
    }
  }

  function visibilityChanged() {
    if (disposed) return;
    suspended = document.hidden; stopVoices(); clearActivity(); wasRunning = false;
    fadeToMode(suspended);
    if (suspended) { ambient.pause(); context?.suspend().catch(() => {}); }
    else if (enabled && unlocked) unlock();
    notify();
  }
  function pageHidden(event) {
    if (!event.persisted) dispose();
    else {
      suspended = true; fadeToMode(true); stopVoices(); clearActivity();
      context?.suspend().catch(() => {}); ambient.pause(); wasRunning = false;
    }
  }
  function pageShown() { visibilityChanged(); }
  function ambientError() { playback = 'error'; report('Ambient load failed: ' + (ambient.currentSrc || ambient.src)); notify(); }
  function mediaChanged(event) {
    if (event.type === 'playing') playback = 'playing';
    else if (event.type === 'waiting' || event.type === 'stalled') playback = 'buffering';
    else if (event.type === 'pause' && playback !== 'blocked' && playback !== 'error') playback = 'waiting';
    // An external media interruption must not leave manual Ambient silently
    // stopped. Reuse this player; an intentional mute or hidden page wins.
    if ((event.type === 'pause' || event.type === 'ended') && mode === 'ambient' && audible() && unlocked) {
      clearTimeout(recoveryTimer);
      recoveryTimer = setTimeout(() => {
        recoveryTimer = 0;
        if (mode === 'ambient' && audible() && unlocked && ambient.paused && !ambient.error && playback !== 'blocked') playAmbient();
      }, 200);
    }
    notify();
  }
  const mediaEvents = ['playing', 'waiting', 'stalled', 'pause', 'ended', 'loadedmetadata'];
  function snapshot() {
    return {
      mode, enabled, disposed, suspended, present, presenceGain, unlocked,
      playback, ambientPaused: ambient.paused, ambientMuted: ambient.muted,
      ambientVolume: ambient.volume, manualAmbientVolume: settings.manualAmbientVolume,
      ambientTime: ambient.currentTime, ambientReadyState: ambient.readyState,
      contextState: context?.state || 'not-created', loaded: samples.size, expected: manifest.samples.length,
      voices: voices.size, peakVoices, activity, windowActivity, inputFrames: inputWindow.length, nextFlow, nextDetail, nextMicro, quietUntil,
      activeVoices: [...voices].map(voice => ({ family: voice.family, cutoff: voice.filter.frequency.value, targetCutoff: voice.targetCutoff })),
      volumes: { ...settings.volumes }, history: [...history], errors: [...errors],
    };
  }
  function subscribe(listener) { listeners.add(listener); listener(snapshot()); return () => listeners.delete(listener); }
  function observe(strength = .5) {
    const now = seconds();
    if (!audible() || now - lastObservation < .8) return;
    // Keep just the latest camera acquisition; never queue a chorus of clicks.
    observation = { strength: Math.max(0, Math.min(1, strength)), expires: now + 1.2 };
  }
  function dispose() {
    if (disposed) return;
    disposed = true; controller.abort(); cancelAnimationFrame(fadeFrame); clearTimeout(recoveryTimer); stopVoices(); clearActivity(); ambient.pause();
    window.removeEventListener('pointerdown', unlock, true); window.removeEventListener('keydown', keyboard, true);
    window.removeEventListener('pagehide', pageHidden); window.removeEventListener('pageshow', pageShown);
    document.removeEventListener('visibilitychange', visibilityChanged); ambient.removeEventListener('error', ambientError);
    mediaEvents.forEach(type => ambient.removeEventListener(type, mediaChanged));
    if (context) { master.disconnect(); flowBus.disconnect(); detailBus.disconnect(); limiter.disconnect(); context.close().catch(() => {}); }
    buffers.clear(); samples.clear(); listeners.clear();
  }
  window.addEventListener('pointerdown', unlock, true); window.addEventListener('keydown', keyboard, true);
  window.addEventListener('pagehide', pageHidden); window.addEventListener('pageshow', pageShown);
  document.addEventListener('visibilitychange', visibilityChanged); ambient.addEventListener('error', ambientError);
  mediaEvents.forEach(type => ambient.addEventListener(type, mediaChanged));
  return {
    update, observe, setEnabled, setMode, setVolumes, setAmbientVolume, setPresence, unlock, dispose, subscribe, snapshot,
    ready: () => loading || Promise.resolve(),
    audition: id => playSample(samples.get(id)),
  };
}
