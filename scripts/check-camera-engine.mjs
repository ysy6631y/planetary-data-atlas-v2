import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, extname } from 'node:path';
import { chromium } from 'playwright';

const output = 'validation/camera-engine';
await mkdir(output, { recursive: true });
const portraitPath = 'validation/field-reference/portrait.jpg';
let portrait;
try { portrait = await readFile(portraitPath); }
catch { const response = await fetch('https://storage.googleapis.com/mediapipe-assets/portrait.jpg'); assert(response.ok); portrait = Buffer.from(await response.arrayBuffer()); }
const types = { '.js': 'text/javascript', '.wasm': 'application/wasm', '.tflite': 'application/octet-stream' };
const server = createServer(async (request, response) => {
  const path = new URL(request.url, 'http://localhost').pathname;
  try {
    if (path === '/') { response.setHeader('Content-Type', 'text/html'); response.end('<!doctype html><body></body>'); return; }
    if (path === '/portrait.jpg') { response.setHeader('Content-Type', 'image/jpeg'); response.end(portrait); return; }
    if (path === '/favicon.ico') { response.writeHead(204).end(); return; }
    if (path === '/detector.js') { response.setHeader('Content-Type', 'text/javascript'); response.end((await readFile('src/presence-detector.js', 'utf8')).replace('./presence-engine.js', './engine.js').replace('import.meta.env.BASE_URL', "'/'")); return; }
    if (path === '/mediapipe/legacy-worker.js') { response.setHeader('Content-Type', 'text/javascript'); response.end('self.OffscreenCanvas=undefined;importScripts("/mediapipe/presence-worker.js");'); return; }
    const file = path === '/engine.js' ? resolve('src/presence-engine.js') : resolve('public', '.' + path);
    assert(path === '/engine.js' || file.startsWith(resolve('public/mediapipe') + '/') || file.startsWith(resolve('public/presence') + '/'));
    response.setHeader('Content-Type', types[extname(file)] || 'application/octet-stream'); response.end(await readFile(file));
  } catch { response.writeHead(404).end(); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}/`;
const engines = [['chrome', chromium, { channel: 'chrome' }]];
if (process.env.ATLAS_WEBKIT_MODULE) engines.push(['webkit', (await import(process.env.ATLAS_WEBKIT_MODULE)).webkit, {}]);
const reports = [];
try {
  for (const [engine, driver, options] of engines) {
    const browser = await driver.launch({ headless: true, ...options });
    try {
      const page = await browser.newPage();
      page.on('console', message => { if (message.type() === 'error') console.log(engine, message.text().slice(0, 1800)); });
      const errors = []; page.on('pageerror', error => errors.push(error.message));
      await page.addInitScript(() => {
        window.OffscreenCanvas = undefined; window.createImageBitmap = undefined;
        const getContext = HTMLCanvasElement.prototype.getContext;
        HTMLCanvasElement.prototype.getContext = function (type, ...args) { return type === 'webgl2' ? null : getContext.call(this, type, ...args); };
      });
      await page.goto(origin);
      const result = await page.evaluate(async () => {
        const base = new URL('/', location.href);
        const previousWorkerError = await new Promise(resolve => {
          const worker = new Worker('/mediapipe/legacy-worker.js');
          worker.onmessage = ({ data }) => { if (data.type === 'error') { worker.terminate(); resolve(data.message); } };
          worker.onerror = error => { worker.terminate(); resolve(error.message); };
          worker.postMessage({ type: 'init', wasm: new URL('/mediapipe/wasm', base).href, model: new URL('/mediapipe/models/face-detector.tflite', base).href });
        });
        const { createMainThreadFaceDetector, canUseFaceWorker } = await import('/engine.js');
        const start = performance.now();
        const detector = await createMainThreadFaceDetector(base);
        const image = new Image(); image.src = '/portrait.jpg'; await image.decode();
        const faceRatio = detector.detect(image, 1000);
        const blank = document.createElement('canvas'); blank.width = 640; blank.height = 480;
        blank.getContext('2d').fillRect(0, 0, 640, 480);
        const blankRatio = detector.detect(blank, 1200);
        const repeatRatio = detector.detect(image, 1400);
        detector.close();
        const elapsedMs = performance.now() - start;
        // Feed actual portrait pixels through the complete video capture loop
        // and presence gate. Only the physical camera transport is substituted.
        let showFace = true, present = false;
        const transitions = [], cameraStates = [];
        const originalDraw = CanvasRenderingContext2D.prototype.drawImage;
        CanvasRenderingContext2D.prototype.drawImage = function(source, ...args) {
          return originalDraw.call(this, source.classList?.contains('presence-video') ? (showFace ? image : blank) : source, ...args);
        };
        navigator.mediaDevices.getUserMedia = async () => ({ getTracks: () => [{ stop() {} }], getVideoTracks: () => [{ addEventListener() {} }] });
        Object.defineProperty(HTMLVideoElement.prototype, 'srcObject', { configurable: true, get() { return null; }, set() {} });
        for (const [key, get] of Object.entries({ videoWidth: () => image.naturalWidth, videoHeight: () => image.naturalHeight, readyState: () => 4, currentTime: () => performance.now() / 1000 })) Object.defineProperty(HTMLVideoElement.prototype, key, { configurable: true, get });
        HTMLVideoElement.prototype.play = () => Promise.resolve(); HTMLVideoElement.prototype.pause = () => {};
        const button = document.createElement('button'), status = document.createElement('span'); document.body.append(button, status);
        const { createPresenceDetector } = await import('/detector.js');
        const presence = createPresenceDetector({ button, status, sound: { unlock() {}, setPresence(value) { present = value; transitions.push(value); } }, onState: state => cameraStates.push(state) });
        const waitFor = async predicate => { const deadline = performance.now() + 8000; while (!predicate()) { if (performance.now() > deadline) throw new Error('Presence integration timed out: ' + status.textContent); await new Promise(resolve => setTimeout(resolve, 60)); } };
        await waitFor(() => present);
        const near = presence.snapshot(); showFace = false;
        await waitFor(() => !present);
        const absent = presence.snapshot(); presence.dispose();
        return { previousWorkerError, workerSupported: canUseFaceWorker(), faceRatio, blankRatio, repeatRatio, elapsedMs, near, absent, transitions };
      });
      assert.match(result.previousWorkerError, /document|OffscreenCanvas/i);
      assert.equal(result.workerSupported, false); assert(result.faceRatio > .1); assert.equal(result.blankRatio, 0); assert(result.repeatRatio > .1);
      assert.equal(result.near.near, true); assert.equal(result.near.backend, 'main'); assert.equal(result.absent.near, false); assert.equal(result.absent.ratio, 0);
      assert.deepEqual(errors, []); reports.push({ engine, ...result, errors }); console.log(JSON.stringify({ engine, ...result }));
    } finally { await browser.close(); }
  }
  await writeFile(`${output}/report.json`, JSON.stringify(reports, null, 2));
} finally { await new Promise(resolve => server.close(resolve)); }
