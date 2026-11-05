const WIDTH = 2560, HEIGHT = 1440;

// A real fixed viewport, rather than browser zoom, keeps the scene camera and
// all media-query breakpoints identical to the 27-inch exhibition captures.
export function mountExhibitionPreview() {
  const url = new URL(location.href);
  if (url.searchParams.get('preview') !== 'exhibition') return false;
  url.searchParams.delete('preview');
  const frame = document.createElement('iframe');
  frame.id = 'exhibition-preview-frame';
  frame.title = '2560 × 1440 전시 화면';
  frame.allow = 'camera; autoplay';
  frame.src = url.href;
  const tools = document.createElement('div');
  tools.id = 'exhibition-preview-tools';
  tools.innerHTML = `<span>2560 × 1440 · 전시 구도 미리보기 <output id="preview-scale"></output></span><button type="button">창 크기에 맞춰 보기</button>`;
  tools.querySelector('button').onclick = () => location.assign(url.href);
  document.body.className = 'exhibition-preview';
  document.body.replaceChildren(frame, tools);
  const resize = () => {
    const availableHeight = Math.max(1, innerHeight - 44);
    const scale = Math.min(innerWidth / WIDTH, availableHeight / HEIGHT);
    frame.style.width = `${WIDTH}px`; frame.style.height = `${HEIGHT}px`;
    frame.style.transform = `scale(${scale})`;
    frame.style.left = `${(innerWidth - WIDTH * scale) / 2}px`;
    frame.style.top = `${44 + (availableHeight - HEIGHT * scale) / 2}px`;
    tools.querySelector('output').textContent = ` / ${Math.round(scale * 100)}%`;
  };
  window.addEventListener('resize', resize); resize();
  const header = installIdleHeader();
  frame.addEventListener('load', () => { frame.contentWindow.focus(); frame.contentWindow.addEventListener('pointermove', header.activity, { passive: true }); });
  if (import.meta.hot) import.meta.hot.dispose(() => window.removeEventListener('resize', resize));
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
