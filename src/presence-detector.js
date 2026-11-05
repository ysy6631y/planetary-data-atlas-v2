import { canUseFaceWorker, createMainThreadFaceDetector } from './presence-engine.js';
// Relative face width, not a calibrated distance in metres.
export const PRESENCE_CONFIG = { enter: .10, exit: .075, enterMs: 500, exitMs: 1200, lostMs: 1800 };

export function createPresenceGate(onChange, config = PRESENCE_CONFIG) {
  let near = false, candidateSince = null;
  return {
    update(ratio, now) {
      const candidate = near ? ratio >= config.exit : ratio >= config.enter;
      if (candidate === near) candidateSince = null;
      else {
        candidateSince ??= now;
        const delay = candidate ? config.enterMs : ratio === 0 ? config.lostMs : config.exitMs;
        if (now - candidateSince >= delay) { near = candidate; candidateSince = null; onChange(near); }
      }
      return near;
    },
    reset() { near = false; candidateSince = null; onChange(false); },
  };
}

export function createPresenceDetector({ button, status, sound, onState = () => {}, autoStart = true, keepCameraOn = false }) {
  let worker, stream, timer, startupTimer, video, busy = false, active = false, generation = 0, lastResult = 0;
  let disposed = false;
  let detector, backend = null, switching = false;
  let lastVideoTime = -1;
  let cameraState = { phase: 'starting', ratio: 0, near: false };
  function report(message, details = {}) {
    cameraState = { ...cameraState, ...details, message };
    status.textContent = message;
    onState({ ...cameraState });
  }
  const gate = createPresenceGate(near => sound.setPresence(near));
  sound.setPresence(false, true);

  function stop(message = '카메라 꺼짐 · 소리 대기') {
    generation++; active = false; busy = false; lastVideoTime = -1;
    clearInterval(timer); clearTimeout(startupTimer); worker?.terminate(); worker = null;
    stream?.getTracks().forEach(track => track.stop()); stream = null;
    if (video) { video.pause(); video.srcObject = null; video.remove(); video = null; }
    gate.reset(); sound.setPresence(false, true);
    button.disabled = false; button.textContent = '카메라 시작'; button.setAttribute('aria-pressed', 'false');
    detector?.close(); detector = null; backend = null; switching = false;
    report(message, { phase: 'off', ratio: 0, near: false, backend: null });
  }

  async function start() {
    const token = ++generation;
    button.disabled = true; button.textContent = '카메라 연결 중'; report('접근 감지를 준비하고 있습니다', { phase: 'starting', ratio: 0, near: false });
    sound.unlock();
    try {
      if (!navigator.mediaDevices?.getUserMedia) throw new Error('HTTPS 또는 localhost에서 카메라를 사용할 수 있습니다');
      const camera = await navigator.mediaDevices.getUserMedia({ video: { width: { ideal: keepCameraOn ? 320 : 640 }, height: { ideal: keepCameraOn ? 240 : 480 }, ...(keepCameraOn ? { frameRate: { ideal: 5 } } : {}), facingMode: 'user' }, audio: false });
      if (token !== generation) { camera.getTracks().forEach(track => track.stop()); return; }
      stream = camera;
      video = document.createElement('video'); video.muted = true; video.playsInline = true;
      video.setAttribute('playsinline', ''); video.setAttribute('muted', ''); video.autoplay = true;
      video.className = 'presence-video'; video.setAttribute('aria-hidden', 'true');
      document.body.append(video); video.srcObject = stream;
      if (keepCameraOn) {
        // Keep a real local camera track open for the hardware indicator.
        // No recorder, upload, face model or pixel processing is involved.
        active = true; backend = 'camera';
        button.disabled = false; button.textContent = '카메라 중지'; button.setAttribute('aria-pressed', 'true');
        report('카메라 켜짐 · 녹화·전송 없음', { phase: 'active', backend, ratio: 0, near: false });
        camera.getVideoTracks()[0].addEventListener('ended', () => {
          if (token !== generation) return;
          stop('카메라 연결이 끊겼습니다 · 재연결 중');
          startupTimer = setTimeout(() => { if (!disposed) void start(); }, 1500);
        });
        void video.play().catch(() => {
          if (token === generation) report('카메라 켜짐 · 영상 재생 대기 · 녹화·전송 없음', { phase: 'active', backend });
        });
        return;
      }
      let videoTimer;
      try { await Promise.race([video.play(), new Promise((_, reject) => { videoTimer = setTimeout(() => reject(new Error('영상 재생 대기 · 카메라 시작 버튼을 눌러 주세요')), 10000); })]); }
      finally { clearTimeout(videoTimer); }
      if (token !== generation) return;
      const base = new URL(import.meta.env.BASE_URL, location.href);
      async function mainThread(reason = '') {
        if (switching || token !== generation) return;
        switching = true; active = false; busy = false; backend = 'main';
        clearInterval(timer); worker?.terminate(); worker = null;
        report('호환 감지 엔진 준비 중', { phase: 'loading', backend: 'main', lastError: reason });
        try {
          const engine = await createMainThreadFaceDetector(base);
          if (token !== generation) { engine.close(); return; }
          detector = engine; backend = 'main'; switching = false;
          clearTimeout(startupTimer); active = true; lastResult = performance.now();
          button.disabled = false; button.textContent = '카메라 중지'; button.setAttribute('aria-pressed', 'true');
          report('접근 감지 중', { phase: 'active', backend });
          timer = setInterval(capture, 240);
        } catch (error) { if (token === generation) stop('감지 엔진 오류 · ' + error.message); }
      }
      startupTimer = setTimeout(() => { if (token === generation) stop('감지 준비 시간이 초과됐습니다 · 다시 시작해 주세요'); }, 30000);
      stream.getVideoTracks()[0].addEventListener('ended', () => { if (token === generation) stop('카메라 연결이 끊겼습니다 · 다시 시작해 주세요'); });
      if (!canUseFaceWorker()) { await mainThread(); return; }
      try { worker = new Worker(new URL('mediapipe/presence-worker.js', base)); }
      catch (error) { await mainThread(error.message); return; }
      backend = 'worker';
      worker.onerror = event => { if (token === generation) void mainThread(event.message || 'Worker initialization failed'); };
      worker.onmessage = ({ data }) => {
        if (token !== generation || backend !== 'worker') return;
        if (data.type === 'error') { console.warn('[presence]', data.message); void mainThread(data.message); return; }
        if (data.type === 'ready') {
          clearTimeout(startupTimer);
          active = true; lastResult = performance.now();
          button.disabled = false; button.textContent = '카메라 중지'; button.setAttribute('aria-pressed', 'true');
          report('접근 감지 중 · 가까이 오면 소리가 켜집니다', { phase: 'active', backend });
          timer = setInterval(capture, 100);
        }
        if (data.type === 'result') {
          busy = false; lastResult = performance.now();
          publishResult(data.ratio);
        }
      };
      worker.postMessage({ type: 'init', wasm: new URL('mediapipe/wasm', base).href, model: new URL('mediapipe/models/face-detector.tflite', base).href });
    } catch (error) {
      if (token === generation) stop(error.name === 'NotAllowedError' ? '카메라 권한을 허용한 뒤 다시 시작해 주세요' : error.name === 'NotFoundError' ? '연결된 카메라가 없습니다' : error.message);
    }
  }

  function publishResult(ratio) {
    lastResult = performance.now();
    const near = document.hidden ? false : gate.update(ratio, lastResult);
    report(document.hidden ? '화면 비활성 · 소리 대기' : near ? '사람 감지 · 근접' : ratio > 0 ? '사람 감지 · 거리 대기' : '사람을 기다리는 중', { phase: 'active', ratio, near, backend });
  }

  async function capture() {
    if (!active || document.hidden) return;
    if (performance.now() - lastResult > 2500) {
      gate.reset(); sound.setPresence(false, true);
      report('영상 확인 중 · 소리 대기', { ratio: 0, near: false });
    }
    if (busy || video?.readyState < 2 || video.currentTime === lastVideoTime) return;
    lastVideoTime = video.currentTime;
    busy = true;
    const token = generation;
    try {
      if (detector) { publishResult(detector.detect(video, performance.now())); busy = false; return; }
      const frame = await createImageBitmap(video);
      if (token !== generation || document.hidden) { frame.close(); busy = false; return; }
      worker.postMessage({ type: 'frame', frame, time: performance.now() }, [frame]);
    } catch (error) { if (token === generation) stop('영상 처리 오류 · ' + error.message); }
  }
  const toggle = () => { if (active) stop(); else void start(); };
  const visibility = () => { gate.reset(); sound.setPresence(false, true); if (active) report(document.hidden ? '화면 비활성 · 소리 대기' : '접근 감지 중 · 소리 대기', { ratio: 0, near: false }); };
  const pagehide = () => stop();
  button.addEventListener('click', toggle);
  document.addEventListener('visibilitychange', visibility);
  window.addEventListener('pagehide', pagehide);
  if (autoStart) void start();
  else stop('카메라 대기 · 연속 사운드 사용');
  return { start, stop, snapshot: () => ({ ...cameraState }), dispose() {
    if (disposed) return; disposed = true; stop();
    button.removeEventListener('click', toggle);
    document.removeEventListener('visibilitychange', visibility);
    window.removeEventListener('pagehide', pagehide);
  } };
}
