export function installIdleHeader() {
  if (window.__ATLAS_IDLE_HEADER__) return window.__ATLAS_IDLE_HEADER__;
  let timer;
  const activity = () => {
    clearTimeout(timer); document.body.classList.remove('header-idle');
    timer = setTimeout(() => {
      if (document.getElementById('sound-operator')?.open) { activity(); return; }
      document.body.classList.add('header-idle');
    }, 2400);
  };
  const events = ['pointermove', 'pointerdown', 'keydown', 'focusin'];
  events.forEach(event => window.addEventListener(event, activity, { passive: true }));
  activity();
  const controller = { activity, dispose() { clearTimeout(timer); events.forEach(event => window.removeEventListener(event, activity)); delete window.__ATLAS_IDLE_HEADER__; } };
  window.__ATLAS_IDLE_HEADER__ = controller;
  if (import.meta.hot) import.meta.hot.dispose(() => controller.dispose());
  return controller;
}
