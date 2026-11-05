export function installIdleHeader() {
  if (window.__ATLAS_IDLE_HEADER__) return window.__ATLAS_IDLE_HEADER__;
  // Exhibition operators asked for the header to remain visible at all times.
  const activity = () => document.body.classList.remove('header-idle');
  activity();
  const controller = { activity, dispose() { delete window.__ATLAS_IDLE_HEADER__; } };
  window.__ATLAS_IDLE_HEADER__ = controller;
  if (import.meta.hot) import.meta.hot.dispose(() => controller.dispose());
  return controller;
}
