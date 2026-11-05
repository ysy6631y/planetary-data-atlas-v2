import { createSoundSystem } from './sound-system.js';
import { createPresenceDetector } from './presence-detector.js';

export function mountSoundOperator() {
  // Bootstrap and the WebGL 1 bundle share one player, never two audio graphs.
  if (window.__PB_SOUND_OPERATOR__) return window.__PB_SOUND_OPERATOR__;
  const ambient = document.getElementById('ambient-track');
  document.body.append(ambient);
  const sound = createSoundSystem(ambient);
  const panel = document.createElement('details');
  panel.id = 'sound-operator'; panel.lang = 'ko';
  panel.innerHTML = `<summary aria-label="운영자 사운드 설정">
    <span id="sound-mode-status" role="status" aria-live="polite">AUDIO · AUTO / 대기</span>
    <span class="sound-shortcuts"><kbd>1</kbd> AMBIENT ↔ AUTO · <kbd>0</kbd> MUTE</span>
  </summary><div class="sound-operator-body">
    <p id="sound-playback-status">소리가 안 나면 숫자 1을 누르세요.</p>
    <label for="ambient-volume">AMBIENT 음량 <output id="ambient-volume-label" for="ambient-volume">15%</output></label>
    <input id="ambient-volume" type="range" min="0" max="100" step="1" value="15" aria-label="Ambient 모드 음량" />
    <div class="sound-operator-actions"><button type="button" id="ambient-start">AMBIENT 시작 / 재시도</button><button type="button" id="audio-auto">AUTO 복귀</button><button type="button" id="audio-mute">음소거</button></div>
    <p>1 재입력: 카메라 자동 감지 복귀 · 0: 즉시 음소거</p>
  </div>`;
  document.body.append(panel);
  const monitor = document.createElement('div'); monitor.id = 'exhibition-status';
  monitor.innerHTML = '<span id="camera-monitor">CAM 준비 중</span><span id="audio-monitor">AUTO · 대기</span><button type="button" id="audio-activate">오디오 허용</button><span>1 AMBIENT · 0 MUTE</span>';
  document.body.append(monitor);
  let cameraState = { phase: 'starting', ratio: 0, near: false };
  const renderMonitor = (state = sound.snapshot()) => {
    const camera = cameraState.phase === 'active'
      ? cameraState.ratio > 0 ? `CAM 인식 · ${cameraState.near ? '근접' : '거리 대기'} · ${Math.round(cameraState.ratio * 100)}%` : 'CAM 사람 대기'
      : cameraState.phase === 'starting' ? 'CAM 연결 중' : `CAM ${cameraState.message || '꺼짐'}`;
    const playing = state.playback === 'playing' && !state.ambientPaused && !state.ambientMuted && state.ambientVolume > 0;
    const blocked = state.playback === 'blocked' || (!state.unlocked && state.present);
    const audio = !state.enabled ? 'AUDIO 음소거' : playing ? `${state.mode.toUpperCase()} · 재생 ${Math.round(state.ambientVolume * 100)}%`
      : state.playback === 'error' ? 'AUDIO 오류' : blocked ? 'AUDIO 차단 · 클릭 필요'
      : !state.unlocked || state.contextState === 'suspended' ? 'AUDIO 클릭 필요' : state.mode === 'auto' && !state.present ? 'AUTO · 근접 대기' : 'AUDIO 준비 중';
    const setText = (selector, value) => { const node = monitor.querySelector(selector); if (node.textContent !== value) node.textContent = value; };
    setText('#camera-monitor', camera); setText('#audio-monitor', audio);
    monitor.dataset.playing = String(playing); monitor.dataset.blocked = String(blocked);
    monitor.querySelector('button').hidden = playing;
  };
  monitor.querySelector('button').onclick = event => sound.snapshot().enabled ? sound.unlock(event) : sound.setMode('ambient', event);
  const cameraControls = document.querySelector('.presence-controls');
  cameraControls.hidden = false;
  panel.querySelector('.sound-operator-body').append(cameraControls);
  const volume = panel.querySelector('#ambient-volume');
  try {
    const saved = localStorage.getItem('atlas-ambient-volume');
    if (saved !== null && Number.isFinite(Number(saved))) sound.setAmbientVolume(Number(saved));
  } catch { /* Private browsing/storage restrictions do not block playback. */ }
  const changeVolume = () => {
    sound.setAmbientVolume(Number(volume.value) / 100);
    try { localStorage.setItem('atlas-ambient-volume', String(Number(volume.value) / 100)); } catch { /* Optional preference. */ }
  };
  volume.addEventListener('input', changeVolume);
  panel.querySelector('#ambient-start').onclick = event => sound.setMode('ambient', event);
  panel.querySelector('#audio-auto').onclick = event => sound.setMode('auto', event);
  panel.querySelector('#audio-mute').onclick = () => sound.setMode('muted');
  const toggle = document.getElementById('sound-toggle');
  const toggleSound = event => sound.setMode(sound.snapshot().enabled ? 'muted' : 'auto', event);
  toggle.addEventListener('click', toggleSound);
  const unsubscribe = sound.subscribe(state => {
    renderMonitor(state);
    const mode = state.mode.toUpperCase();
    const playing = state.playback === 'playing' && !state.ambientPaused && state.ambientVolume > 0 && !state.ambientMuted;
    const label = !state.enabled ? '음소거' : state.playback === 'error' ? '오디오 오류' : state.playback === 'blocked' ? '재생 차단 · 1 또는 시작 버튼' : playing ? `재생 ${Math.round(state.ambientVolume * 100)}%` : state.mode === 'auto' && !state.present ? '감지 대기' : state.playback === 'buffering' ? '불러오는 중' : '소리 대기 · 1로 시작';
    panel.dataset.mode = state.mode;
    panel.querySelector('#sound-mode-status').textContent = `AUDIO · ${mode} / ${label}`;
    panel.querySelector('#sound-playback-status').textContent = state.playback === 'error'
      ? '오디오 파일을 재생하지 못했습니다. 연결을 확인한 뒤 시작 버튼으로 재시도하세요.'
      : state.playback === 'blocked' ? 'Safari에서 재생이 차단됐습니다. 위 시작 버튼을 클릭하거나 숫자 1로 다시 활성화하세요.'
      : playing ? '반복 재생 중 · 시스템 출력 음량은 iMac에서 조정하세요.' : '소리가 안 나면 숫자 1 또는 AMBIENT 시작 버튼을 누르세요.';
    volume.value = String(Math.round(state.manualAmbientVolume * 100));
    panel.querySelector('#ambient-volume-label').textContent = `${volume.value}%`;
    toggle.setAttribute('aria-pressed', String(state.enabled));
    toggle.textContent = state.enabled ? 'SOUND ON' : 'SOUND OFF';
    toggle.setAttribute('aria-label', state.enabled ? 'Turn sound off' : 'Return to automatic sound');
    toggle.title = `AUDIO ${mode} · 1 Ambient / Auto · 0 Mute`;
  });
  const presence = createPresenceDetector({ button: document.getElementById('presence-start'), status: document.getElementById('presence-status'), sound,
    onState(state) { cameraState = state; renderMonitor(); } });
  const monitorTimer = setInterval(renderMonitor, 500);
  window.__PB_AUDIO__ = sound;
  const operator = { sound, presence, dispose() {
    clearInterval(monitorTimer); unsubscribe(); presence.dispose(); sound.dispose(); toggle.removeEventListener('click', toggleSound);
    cameraControls.hidden = true; document.body.append(cameraControls);
    panel.remove(); monitor.remove(); delete window.__PB_SOUND_OPERATOR__;
  } };
  window.__PB_SOUND_OPERATOR__ = operator;
  if (import.meta.hot) import.meta.hot.dispose(() => operator.dispose());
  return operator;
}
