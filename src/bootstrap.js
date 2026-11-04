import './style.css';
import './exhibition.css';
import { createGraphicsContext } from './graphics-support.js';

async function dataView(reason) {
  const { showDataView } = await import('./fallback-view.js');
  showDataView(reason);
}

async function start() {
  const graphics = createGraphicsContext();
  if (!graphics) {
    await dataView('이 브라우저에서 3D 그래픽을 사용할 수 없어 데이터 보기로 열었습니다.');
    return;
  }
  window.__ATLAS_GRAPHICS__ = graphics;
  if (graphics.legacy) {
    const base = new URL(import.meta.env.BASE_URL, location.href);
    await new Promise((resolve, reject) => {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = new URL('compat/style.css', base).href;
      style.onload = resolve;
      style.onerror = reject;
      document.head.append(style);
    });
    await import(/* @vite-ignore */ new URL('compat/app.js', base).href);
  } else {
    await import('./main.js');
  }
}

start().catch(async error => {
  console.error('[atlas startup]', error);
  try { await dataView('3D 화면을 시작하지 못해 데이터 보기로 열었습니다.'); }
  catch {
    const message = document.getElementById('webgl-error');
    message.hidden = false;
    message.textContent = '화면을 불러오지 못했습니다. 인터넷 연결을 확인한 뒤 새로고침해 주세요.';
  }
});
