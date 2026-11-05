// A 2560×1440 exhibition canvas gets its full 5120×2880 Retina buffer.
// Cap extreme physical resolutions; the live renderer can reduce quality only
// after sustained slow frames, while screen-space strokes retain their width.
export function renderPixelRatio(width, height, deviceRatio, legacy = false) {
  const budget = 16000000;
  return Math.min(deviceRatio || 1, 2,
    Math.sqrt(budget / Math.max(1, width * height)));
}

export function createGraphicsContext(createCanvas = () => document.createElement('canvas')) {
  const options = { alpha: false, antialias: true, preserveDrawingBuffer: false, powerPreference: 'high-performance' };
  for (const type of ['webgl2', 'webgl', 'experimental-webgl']) {
    const canvas = createCanvas();
    try {
      const context = canvas.getContext(type, options);
      if (context) return { canvas, context, legacy: type !== 'webgl2', type };
    } catch { /* Some drivers throw instead of returning null. */ }
  }
  return null;
}
