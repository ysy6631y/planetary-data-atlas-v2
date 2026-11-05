import './style.css';
import './exhibition.css';
import { createGraphicsContext } from './graphics-support.js';
import { mountSoundOperator } from './sound-operator.js';
import { mountExhibitionPreview, addExhibitionPreviewButton } from './exhibition-preview.js';
import { installIdleHeader } from './idle-header.js';

async function dataView(reason) {
  const { showDataView } = await import('./fallback-view.js');
  showDataView(reason);
}

async function start() {
  if (mountExhibitionPreview()) return;
  const alignLayout = () => document.documentElement.style.setProperty('--layout-y', String(Math.min(1.2, Math.max(.65, innerHeight / 1440))));
  alignLayout(); window.addEventListener('resize', alignLayout);
  // Operator audio stays available even if graphics startup falls back to tables.
  mountSoundOperator();
  installIdleHeader();
  addExhibitionPreviewButton();
  const graphics = createGraphicsContext();
  if (!graphics) {
    await dataView('이 브라우저에서 3D 그래픽을 사용할 수 없어 데이터 보기로 열었습니다.');
    return;
  }
  window.__ATLAS_GRAPHICS__ = graphics;
  if (graphics.legacy) {
    const base = new URL(import.meta.env.BASE_URL, location.href);
    const stylesheet = new URL('compat/style.css', base);
    const script = new URL('compat/app.js', base);
    stylesheet.searchParams.set('v', __ATLAS_BUILD_ID__);
    script.searchParams.set('v', __ATLAS_BUILD_ID__);
    await new Promise((resolve, reject) => {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = stylesheet.href;
      style.onload = resolve;
      style.onerror = reject;
      document.head.append(style);
    });
    await import(/* @vite-ignore */ script.href);
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
