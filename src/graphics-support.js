// Limit total drawing-buffer pixels on Retina/5K screens.
export function renderPixelRatio(width, height, deviceRatio, legacy = false) {
  const budget = legacy ? 1800000 : 4000000;
  return Math.min(deviceRatio || 1, legacy ? 1.25 : 2,
    Math.sqrt(budget / Math.max(1, width * height)));
}

export function createGraphicsContext(createCanvas = () => document.createElement('canvas')) {
  const options = { alpha: false, antialias: false, preserveDrawingBuffer: false, powerPreference: 'default' };
  for (const type of ['webgl2', 'webgl', 'experimental-webgl']) {
    const canvas = createCanvas();
    try {
      const context = canvas.getContext(type, options);
      if (context) return { canvas, context, legacy: type !== 'webgl2', type };
    } catch { /* Some drivers throw instead of returning null. */ }
  }
  return null;
}
