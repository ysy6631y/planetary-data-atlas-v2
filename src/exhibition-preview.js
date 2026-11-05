const WIDTH = 2560, HEIGHT = 1440;

// A real fixed viewport, rather than browser zoom, keeps the scene camera and
// all media-query breakpoints identical to the 27-inch exhibition captures.
export function mountExhibitionPreview() {
  const url = new URL(location.href);
  // The public exhibition uses the same fixed stage as the laptop preview.
  // Only the iframe content / explicit window layout can use viewport breakpoints.
  if (url.searchParams.get('stage') === 'content' || url.searchParams.get('layout') === 'window') return false;
  const preview = url.searchParams.get('preview') === 'exhibition';
  url.searchParams.delete('preview');
  url.searchParams.set('stage', 'content');
  url.searchParams.set('stageScale', String(Math.min(1, innerWidth / WIDTH)));
  // Fill the actual browser area. Fitting a 16:9 rectangle by height added
  // large side gutters on the iMac when Safari's chrome reduced its height.
  const stageHeight = () => preview ? HEIGHT : Math.max(900, Math.round(innerHeight * WIDTH / Math.max(1, innerWidth)));
  url.searchParams.set('stageHeight', String(stageHeight()));
  const frame = document.createElement('iframe');
  frame.id = 'exhibition-preview-frame';
  frame.title = '2560 × 1440 전시 화면';
  frame.allow = 'camera; autoplay';
  frame.src = url.href;
  const tools = document.createElement('div');
  tools.id = 'exhibition-preview-tools';
  tools.innerHTML = `<span>2560 × 1440 · 전시 구도 미리보기 <output id="preview-scale"></output></span><button type="button">창 크기에 맞춰 보기</button>`;
  tools.querySelector('button').onclick = () => { url.searchParams.delete('stage'); url.searchParams.set('layout', 'window'); location.assign(url.href); };
  document.body.className = 'exhibition-preview';
  document.body.replaceChildren(...(preview ? [frame, tools] : [frame]));
  const resize = () => {
    const toolbarHeight = preview ? 44 : 0;
    const availableHeight = Math.max(1, innerHeight - toolbarHeight);
    const logicalHeight = stageHeight();
    const scale = preview ? Math.min(innerWidth / WIDTH, availableHeight / HEIGHT) : innerWidth / WIDTH;
    frame.style.width = `${WIDTH}px`; frame.style.height = `${logicalHeight}px`;
    frame.style.transform = `scale(${scale})`;
    frame.style.left = `${(innerWidth - WIDTH * scale) / 2}px`;
    frame.style.top = `${toolbarHeight + Math.max(0, (availableHeight - logicalHeight * scale) / 2)}px`;
    frame.contentWindow?.postMessage({ type: 'atlas-stage-scale', scale: Math.min(1, scale) }, location.origin);
    tools.querySelector('output').textContent = ` / ${Math.round(scale * 100)}%`;
  };
  let resizeTimers = [];
  const settleSize = () => {
    resizeTimers.forEach(clearTimeout);
    resize();
    resizeTimers = [100, 350, 1000].map(delay => setTimeout(resize, delay));
  };
  window.addEventListener('resize', settleSize);
  window.visualViewport?.addEventListener('resize', settleSize);
  document.addEventListener('fullscreenchange', settleSize);
  document.addEventListener('webkitfullscreenchange', settleSize);
  window.addEventListener('pageshow', settleSize);
  resize();
  document.body.addEventListener('pointerdown', () => frame.contentWindow?.focus());
  window.addEventListener('keydown', event => {
    if (event.repeat || event.metaKey || event.ctrlKey || event.altKey || !['0', '1'].includes(event.key)) return;
    const sound = frame.contentWindow?.__PB_AUDIO__;
    if (!sound) return;
    event.preventDefault();
    sound.setMode(event.key === '0' ? 'muted' : !sound.snapshot().continuous && sound.snapshot().mode === 'ambient' ? 'auto' : 'ambient', event);
  });
  const header = installIdleHeader();
  frame.addEventListener('load', () => { frame.contentWindow.focus(); frame.contentWindow.addEventListener('pointermove', header.activity, { passive: true }); });
  if (import.meta.hot) import.meta.hot.dispose(() => {
    resizeTimers.forEach(clearTimeout);
    window.removeEventListener('resize', settleSize);
    window.visualViewport?.removeEventListener('resize', settleSize);
    document.removeEventListener('fullscreenchange', settleSize);
    document.removeEventListener('webkitfullscreenchange', settleSize);
    window.removeEventListener('pageshow', settleSize);
  });
  return true;
}

export function addExhibitionPreviewButton() {
  if (window.parent !== window) return;
  const button = document.createElement('button');
  button.id = 'exhibition-preview-toggle'; button.type = 'button';
  button.textContent = '27″ VIEW';
  button.title = '2560 × 1440 전시 구도를 이 창에 축소해서 보기';
  button.onclick = () => {
    const url = new URL(location.href);
    url.searchParams.set('preview', 'exhibition');
    location.assign(url.href);
  };
  document.querySelector('.observation-toolbar').append(button);
}
import { installIdleHeader } from './idle-header.js';
