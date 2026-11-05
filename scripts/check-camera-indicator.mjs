import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { chromium } from 'playwright';

const browser = await chromium.launch({ channel: 'chrome', headless: true,
  args: ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream'] });
const origin = process.env.ATLAS_TEST_URL || 'http://127.0.0.1:4174/';
try {
  const page = await browser.newPage({ viewport: { width: 2560, height: 1440 } });
  const errors = [], requests = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('request', request => requests.push({ url: request.url(), method: request.method() }));
  await page.addInitScript(() => {
    window.__cameraStopped = 0;
    const stop = MediaStreamTrack.prototype.stop;
    MediaStreamTrack.prototype.stop = function(...args) { window.__cameraStopped++; return stop.apply(this, args); };
  });
  await page.goto(origin, { waitUntil: 'domcontentloaded', timeout: 60000 });
  const frame = await (await page.waitForSelector('#exhibition-preview-frame')).contentFrame();
  const wait = predicate => frame.waitForFunction(predicate, null, { polling: 100, timeout: 60000 });
  await wait(() => window.__PB_SOUND_OPERATOR__?.presence.snapshot().backend === 'camera');
  await wait(() => document.querySelector('.presence-video')?.readyState >= 2);
  await page.keyboard.press('1');
  await wait(() => window.__PB_AUDIO__.snapshot().ambientVolume > .039 && !window.__PB_AUDIO__.snapshot().ambientPaused);
  const state = await frame.evaluate(() => {
    const video = document.querySelector('.presence-video');
    const track = video.srcObject.getVideoTracks()[0];
    return { camera: window.__PB_SOUND_OPERATOR__.presence.snapshot(), track: { kind: track.kind, readyState: track.readyState, enabled: track.enabled, settings: track.getSettings() },
      audioTracks: video.srcObject.getAudioTracks().length, audioMode: window.__PB_AUDIO__.snapshot().mode, mode: window.__PB_EXPLORATION__.getState().mode };
  });
  assert.equal(state.track.readyState, 'live'); assert.equal(state.track.enabled, true);
  assert.equal(state.audioTracks, 0); assert.equal(state.audioMode, 'ambient'); assert.equal(state.mode, 'AUTO');
  await page.keyboard.press('0');
  assert.equal(await frame.evaluate(() => document.querySelector('.presence-video').srcObject.getVideoTracks()[0].readyState), 'live');
  assert.equal(await frame.evaluate(() => window.__PB_EXPLORATION__.getState().mode), 'AUTO');
  assert.equal(requests.some(r => /presence\/pico|presence\/facefinder|mediapipe\//.test(r.url)), false, 'Camera light mode must not load an analysis engine');
  assert.equal(requests.some(r => r.method !== 'GET'), false, 'No camera upload or POST');
  await frame.evaluate(() => window.__PB_SOUND_OPERATOR__.presence.dispose());
  assert(await frame.evaluate(() => window.__cameraStopped >= 1));
  assert.equal(await frame.locator('.presence-video').count(), 0);
  assert.deepEqual(errors, []);
  const report = { origin, fakeCameraTransport: true, ...state, mutedKeepsCameraLive: true, noAnalysisEngine: true, cleanupStopsTrack: true, errors };
  await mkdir('validation/camera-indicator', { recursive: true });
  await writeFile('validation/camera-indicator/report.json', JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report));
} finally { await browser.close(); }
