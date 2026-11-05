const MAX_LINES = 140;
const MAX_QUEUE = 180;

// EVENT is actual application activity. TRACE continuously replays already-read
// source records: never pretend a cached row is a new network download.
export function createDataStream() {
  const host = document.getElementById('stream-lines');
  const stage = document.getElementById('stream-stage');
  const count = document.getElementById('stream-count');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const queue = [];
  const track = document.createElement('div'); track.className = 'stream-track'; host.append(track);
  let sequence = 0, source = null, disposed = false, emitted = 0;
  let readout = null, reference = null, animation = null, rowHeight = 25;
  let viewportHeight = 0;
  let headOffset = 0, lastReducedStep = 0, scenePhase = 'initializing', motionScale = 1;
  let holdUntil = 0, nextHold = 0;
  let nextBatch = 0, lastUpdate = 0, rate = .8, batchRate = .8, busyUntil = 0;
  let referenceAfter = 28, recordsSinceReference = 0;
  const velocity = () => rowHeight * 8 * motionScale;
  const travel = () => animation ? Number(animation.currentTime || 0) / 1000 * velocity() : 0;
  function startFlight() {
    if (animation || reducedMotion.matches || document.hidden || !track.childElementCount) return;
    animation = track.animate([{ transform: 'translate3d(0,0,0)' }, { transform: 'translate3d(0,-60000px,0)' }], { duration: 60000 / velocity() * 1000, easing: 'linear', fill: 'forwards' });
    animation.playbackRate = rate;
  }
  function rebase() {
    headOffset -= travel(); animation?.cancel(); animation = null;
    track.style.top = `${headOffset}px`; startFlight();
  }
  function nextTrace() {
    // Interleave the selected boundary's actual R values with its source
    // projections. National source rows do not have an invented risk threshold.
    if (readout?.records.length && reference?.length && recordsSinceReference >= referenceAfter) {
      recordsSinceReference = 0; referenceAfter = 24 + Math.floor(Math.random() * 30);
      const row = reference.shift(); reference.push(row);
      const item = row();
      return typeof item === 'string' ? { kind: 'TRACE', message: item } : { kind: 'TRACE', ...item };
    }
    if (!readout?.records.length) {
      if (!reference?.length) return null;
      const row = reference.shift(); reference.push(row);
      const item = row();
      return typeof item === 'string' ? { kind: 'TRACE', important: false, message: item } : { kind: 'TRACE', ...item };
    }
    const { records, positions, pass, project } = readout;
    const index = readout.index++;
    recordsSinceReference++;
    const row = records[index];
    const values = positions[index]?.map(value => Number(value.toFixed(3))).join(' / ');
    const coordinates = values ? `DISPLAY XYZ ${values}` : row.plotted ? `SOURCE XYZ ${row.xyz.join(' / ')}` : 'SOURCE RECORD / NO SPATIAL COORDINATES';
    if (readout.index === records.length) { readout.index = 0; readout.pass++; }
    const projected = project && positions[index] ? project(index) : null;
    if (projected) {
      const detail = projected.visible
        ? `SCREEN ${projected.x.toFixed(1)} / ${projected.y.toFixed(1)} · DEPTH ${projected.depth.toFixed(3)}`
        : `OUTSIDE VIEW · DEPTH ${projected.depth.toFixed(3)}`;
      return { kind: 'TRACE', important: projected.selected,
        message: `${projected.visible ? 'PROJECT' : 'CLIP'} / ${source.slice(0, 8)} / ROW ${row.sourceRow} / ${row.code} / ${detail}` };
    }
    return { kind: 'TRACE', important: false, message: `REPLAY ${source.slice(0, 8)} / ROW ${row.sourceRow} / ${row.code} / ${coordinates} / READOUT ${pass}` };
  }

  function append(item) {
    const line = document.createElement('div');
    const texture = [...item.message].reduce((hash, letter) => ((hash * 31) ^ letter.charCodeAt(0)) >>> 0, 7);
    line.className = `stream-line ${item.kind.toLowerCase()}${item.important ? ' important' : ''}${item.exceeded ? ' exceeded' : ''} tone-${texture % 3}`;
    line.dataset.kind = item.kind;
    const number = document.createElement('span');
    number.className = 'stream-sequence'; number.textContent = String(++sequence).padStart(6, '0');
    const type = document.createElement('span'); type.className = 'stream-type'; type.textContent = item.kind;
    const message = document.createElement('span'); message.textContent = item.message;
    line.append(number, type, message); track.append(line); emitted++;
  }

  // Only recycle rows above the clipping window. WAAPI owns the fractional-pixel
  // motion, so DOM updates and WebGL work cannot produce scrollTop catch-up jumps.
  function fill() {
    const required = Math.min(MAX_LINES, Math.ceil(viewportHeight / rowHeight) + 32);
    while (track.childElementCount < required) {
      const item = queue.shift() || nextTrace();
      if (!item) break;
      append(item);
      if (track.childElementCount === 1) rowHeight = track.firstElementChild.offsetHeight || rowHeight;
    }
    const label = `${sequence.toLocaleString('en')} LINES / ${track.childElementCount} BUFFERED`;
    if (count.textContent !== label) count.textContent = label;
    startFlight();
  }
  function update(now, phase = 'observing', scale = 1) {
    if (disposed || document.hidden || !viewportHeight) { animation?.pause(); return; }
    if (scale !== motionScale) { rebase(); animation?.cancel(); animation = null; motionScale = scale; startFlight(); }
    if (phase !== scenePhase) { scenePhase = phase; host.dataset.scenePhase = phase; }
    const dt = lastUpdate ? Math.min(.1, Math.max(0, (now - lastUpdate) / 1000)) : 0;
    lastUpdate = now;
    if (now >= nextBatch) {
      // Vary throughput in small batches rather than delivering one mechanical
      // row per tick. WAAPI keeps the motion continuous as the rate changes.
      batchRate = .6 + Math.random() * .62;
      nextBatch = now + 950 + Math.random() * 2450;
    }
    const processing = phase === 'camera' || phase === 'projection' || now < busyUntil;
    const targetRate = processing ? Math.max(1.05, batchRate) : batchRate;
    rate += (targetRate - rate) * (1 - Math.exp(-dt / .22));
    if (animation && Math.abs(animation.playbackRate - rate) > .015) {
      // Updating a pending play's playbackRate every frame can keep its start
      // time unresolved. Preserve the current timeline when changing speed.
      if (animation.updatePlaybackRate) animation.updatePlaybackRate(rate);
      else if (!animation.pending) animation.playbackRate = rate;
    }
    if (!nextHold) nextHold = now + 3500 + Math.random() * 3500;
    if (!reducedMotion.matches && now >= nextHold) {
      holdUntil = now + 100 + Math.random() * 280;
      nextHold = holdUntil + 2600 + Math.random() * 5100;
    }
    if (now < holdUntil) { animation?.pause(); host.dataset.flow = 'waiting'; return; }
    if (animation?.playState === 'paused') animation.play();
    fill();
    const distance = reducedMotion.matches ? (now - lastReducedStep >= 350 ? rowHeight : 0) : travel() - headOffset;
    if (reducedMotion.matches && distance) lastReducedStep = now;
    let removed = 0;
    while (track.childElementCount && distance - removed >= rowHeight) {
      track.firstElementChild.remove(); removed += rowHeight;
    }
    if (removed) {
      if (!reducedMotion.matches) headOffset += removed;
      if (!reducedMotion.matches && !track.childElementCount) headOffset = Math.floor(travel() / rowHeight) * rowHeight;
      track.style.top = `${headOffset}px`;
      fill();
    }
    if (travel() > 10000) rebase();
    if (!track.childElementCount) { animation?.cancel(); animation = null; headOffset = 0; track.style.top = '0px'; }
    host.dataset.flow = 'continuous';
  }
  function add(message, { kind = 'EVENT', important = false } = {}) {
    if (disposed) return;
    if (queue.length >= MAX_QUEUE) queue.shift();
    queue.push({ message, kind, important });
  }
  function clearTrace() {
    for (let i = queue.length - 1; i >= 0; i--) if (queue[i].kind === 'TRACE') queue.splice(i, 1);
    readout = null;
  }
  function process(event) {
    busyUntil = performance.now() + (event.stage === 'READY' ? 450 : 850);
    const labels = { READING: 'READING SOURCE RECORDS', PARSING: 'PARSING SOURCE RECORDS', RENDERING: 'UPDATING SPATIAL GEOMETRY', READY: 'SCENE READY', ERROR: 'SOURCE ERROR', 'NO LOCAL DATA': 'PLANETARY REFERENCE ONLY' };
    stage.textContent = labels[event.stage] || event.stage;
    add(`${labels[event.stage] || event.stage} / ${event.source}${event.rows != null ? ` / ${event.rows.toLocaleString('en')} ROWS` : ''}${event.error ? ` / ${event.error}` : ''}`, { important: event.stage === 'ERROR' || event.stage === 'READY' });
  }
  function dataset(data, positions, project) {
    // Keep already-visible history and its animation. A source change only
    // changes future records, instead of wiping/restarting the entire panel.
    clearTrace(); source = data.id; recordsSinceReference = 0;
    add(`SOURCE LOADED / ${data.records.length.toLocaleString('en')} ROWS / ${data.observations.length.toLocaleString('en')} OBSERVATIONS`, { important: true });
    add(`MAPPING / ${data.axes.join(' / ') || 'SOURCE RECORDS / NO XYZ'}`);
    for (const entry of data.sources) add(`SOURCE / ${entry.archive} / ${entry.path}`, { kind: 'TRACE' });
    const records = data.observations.length ? data.observations : data.records;
    readout = records.length ? { records, positions, project, index: 0, pass: 1 } : null;
    if (reference?.length) for (const row of reference) {
      const item = row();
      if (typeof item !== 'string') queue.push({ kind: 'TRACE', ...item });
    }
    fill();
  }
  function exploration(state, metadata) {
    document.getElementById('stream-mode').textContent = state.mode;
    stage.textContent = state.stage;
    add(`${state.mode} / ${state.stage}${metadata.boundary ? ` / ${metadata.boundary}` : ''}${state.controlId ? ` / ${state.controlId}` : ''}${metadata.dataset ? ` / ${metadata.dataset}` : ''}`, { important: state.stage === 'SELECTING BOUNDARY' || state.stage === 'MANUAL' });
  }
  const visibility = () => { if (document.hidden) animation?.pause(); else animation?.play(); };
  const resize = new ResizeObserver(entries => {
    if (disposed) return;
    viewportHeight = entries[0].contentRect.height;
    rebase();
    rowHeight = track.firstElementChild?.offsetHeight || rowHeight;
    animation?.cancel(); animation = null; fill();
  });
  resize.observe(host);
  const motionChanged = () => { rebase(); if (reducedMotion.matches) { animation?.cancel(); animation = null; } };
  reducedMotion.addEventListener('change', motionChanged);
  document.addEventListener('visibilitychange', visibility);
  add('SYSTEM INITIALIZED / PLANETARY DATA ATLAS');
  return {
    add, process, dataset, exploration, update,
    reference(rows, { preserveSource = false } = {}) {
      reference = rows;
      if (preserveSource) return;
      clearTrace(); source = null;
      queue.unshift(...rows.map(row => { const item = row(); return typeof item === 'string' ? { kind: 'TRACE', message: item } : { kind: 'TRACE', ...item }; }));
      if (queue.length > MAX_QUEUE) queue.length = MAX_QUEUE;
      fill();
    },
    selection(label, mode = 'MANUAL') { add(`${mode} / SELECTING ${label}`); },
    getSnapshot: () => ({ lines: track.childElementCount, queued: queue.length, maxLines: MAX_LINES, maxQueue: MAX_QUEUE, source, sequence, emitted, replay: Boolean(readout), pass: readout?.pass || 0, scenePhase, velocity: velocity() * rate, flow: host.dataset.flow, offset: headOffset - travel() }),
    dispose() { disposed = true; animation?.cancel(); resize.disconnect(); queue.length = 0; readout = null; document.removeEventListener('visibilitychange', visibility); reducedMotion.removeEventListener('change', motionChanged); },
  };
}
