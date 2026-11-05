let picoLoading, cascadeLoading;

export function canUseFaceWorker() {
  if (typeof OffscreenCanvas === 'undefined' || typeof createImageBitmap !== 'function') return false;
  const safari = navigator.userAgent.match(/Version\/(\d+).*Safari/);
  return !safari || Number(safari[1]) >= 17;
}

// Safari 14 lacks worker canvases and WebGL 2. Use a CPU detector on a regular
// 2D canvas, without WebGL, WASM or SIMD. Frames stay local and are not retained.
export async function createMainThreadFaceDetector(base) {
  if (!picoLoading) picoLoading = new Promise((resolve, reject) => {
    if (window.pico) { resolve(window.pico); return; }
    const script = document.createElement('script'); script.src = new URL('presence/pico.js', base).href;
    script.onload = () => window.pico ? resolve(window.pico) : reject(new Error('Face detector did not initialize'));
    script.onerror = () => reject(new Error('Face detector could not load'));
    document.head.append(script);
  }).catch(error => { picoLoading = null; throw error; });
  if (!cascadeLoading) cascadeLoading = fetch(new URL('presence/facefinder', base)).then(response => {
    if (!response.ok) throw new Error('Face model HTTP ' + response.status);
    return response.arrayBuffer();
  }).catch(error => { cascadeLoading = null; throw error; });
  const [pico, cascade] = await Promise.all([picoLoading, cascadeLoading]);
  const classify = pico.unpack_cascade(new Int8Array(cascade));
  const canvas = document.createElement('canvas'), context = canvas.getContext('2d');
  if (!context) throw new Error('Camera image canvas unavailable');
  let gray;
  return {
    detect(source) {
      const width = source.videoWidth || source.naturalWidth || source.width;
      const height = source.videoHeight || source.naturalHeight || source.height;
      if (!width || !height) return 0;
      const scale = Math.min(320 / width, 240 / height);
      const cols = Math.max(1, Math.round(width * scale)), rows = Math.max(1, Math.round(height * scale));
      if (canvas.width !== cols || canvas.height !== rows) { canvas.width = cols; canvas.height = rows; gray = new Uint8Array(cols * rows); }
      context.drawImage(source, 0, 0, cols, rows);
      const rgba = context.getImageData(0, 0, cols, rows).data;
      for (let i = 0; i < gray.length; i++) gray[i] = (2 * rgba[i * 4] + 7 * rgba[i * 4 + 1] + rgba[i * 4 + 2]) / 10;
      const detections = pico.cluster_detections(pico.run_cascade({ pixels: gray, nrows: rows, ncols: cols, ldim: cols }, classify,
        { shiftfactor: .1, minsize: 20, maxsize: Math.min(cols, rows), scalefactor: 1.1 }), .2);
      return Math.max(0, ...detections.filter(face => face[3] >= 20).map(face => face[2] / cols));
    },
    close() { canvas.width = canvas.height = 0; gray = null; },
  };
}
