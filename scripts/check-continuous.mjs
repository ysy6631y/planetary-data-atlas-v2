import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { chromium } from 'playwright';

const origin = process.env.ATLAS_TEST_URL || 'http://127.0.0.1:4174/';
const output = process.env.ATLAS_CONTINUOUS_OUTPUT || 'validation/continuous';
await mkdir(output, { recursive: true });
const engines = [['chrome', chromium, { channel: 'chrome' }]];
if (process.env.ATLAS_WEBKIT_MODULE) engines.push(['webkit', (await import(process.env.ATLAS_WEBKIT_MODULE)).webkit, {}]);
const reports = [];
for (const [engine, driver, options] of engines) {
  const browser = await driver.launch({ headless: true, ...options });
  try {
    const page = await browser.newPage({ viewport: { width: 2560, height: 1320 }, deviceScaleFactor: 1 });
    const errors = [], failures = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => { if (response.status() >= 400) failures.push(response.url()); });
    await page.addInitScript(legacy => {
      window.__cameraRequests = 0;
      navigator.mediaDevices.getUserMedia = () => { window.__cameraRequests++; return Promise.reject(new DOMException('Camera denied', 'NotAllowedError')); };
      if (legacy) {
        window.OffscreenCanvas = undefined; window.createImageBitmap = undefined;
        window.structuredClone = undefined; Array.prototype.at = undefined;
        const get = HTMLCanvasElement.prototype.getContext;
        HTMLCanvasElement.prototype.getContext = function(type, ...args) { return type === 'webgl2' ? null : get.call(this, type, ...args); };
      }
    }, engine === 'webkit');
    await page.goto(origin, { waitUntil: 'domcontentloaded', timeout: 60000 });
    const frame = await (await page.waitForSelector('#exhibition-preview-frame')).contentFrame();
    const wait = (fn, arg) => frame.waitForFunction(fn, arg, { polling: 100, timeout: 60000 });
    await wait(() => window.__PB_DEBUG__?.overview().ready);
    assert.equal(await frame.evaluate(() => window.__cameraRequests), 0, 'Continuous exhibition must not open a camera permission prompt');
    await page.keyboard.press('1');
    await wait(() => { const s = window.__PB_AUDIO__.snapshot(); return !s.ambientPaused && s.loaded === s.expected; });
    await frame.evaluate(() => {
      window.__continuousSync = [];
      window.__continuousProbe = setInterval(() => {
        const m = window.__PB_DEBUG__.motion(), h = window.__PB_AUDIO__.snapshot().history;
        if (!m.focusStartedAt) return;
        const cue = h.find(v => v.trigger === 'zoom' && v.time * 1000 >= m.focusStartedAt);
        if (cue && !window.__continuousSync.some(v => v.start === m.focusStartedAt)) window.__continuousSync.push({ start: m.focusStartedAt, delay: cue.time * 1000 - m.focusStartedAt });
      }, 25);
    });
    // Repeated operator keys, a menu click and a wheel must never take over.
    for (const key of ['1', '1', '0', '1']) {
      await page.keyboard.press(key);
      assert.equal(await frame.evaluate(() => window.__PB_EXPLORATION__.getState().mode), 'AUTO');
    }
    await page.mouse.click(120, 220); await page.mouse.wheel(0, 500);
    for (const selector of ['header', '.observation-toolbar', '.scene-top', '#sound-operator', '#exhibition-status']) assert.equal(await frame.locator(selector).isVisible(), false, selector);
    await wait(() => window.__PB_AUDIO__.snapshot().history.filter(v => v.trigger === 'zoom').length >= 4 && window.__PB_AUDIO__.snapshot().history.filter(v => v.trigger === 'autonomous').length >= 6);
    await wait(() => window.__continuousSync.length > 0);
    const state = await frame.evaluate(() => ({ exploration: window.__PB_EXPLORATION__.getState(), audio: window.__PB_AUDIO__.snapshot(), sync: window.__continuousSync,
      menu: { control: document.querySelector('.control').getBoundingClientRect().height, groupPadding: getComputedStyle(document.querySelector('.group')).paddingTop,
        width: document.getElementById('boundaries').getBoundingClientRect().width, height: document.querySelector('.index-sheet').getBoundingClientRect().height } }));
    assert.equal(state.exploration.mode, 'AUTO'); assert.equal(state.audio.mode, 'ambient'); assert.equal(state.audio.manualAmbientVolume, .04);
    assert(state.sync.every(cue => cue.delay < 120), JSON.stringify(state.sync));
    assert(state.audio.history.some(v => v.family === 'micro')); assert(state.audio.peakVoices <= 2);
    assert(state.menu.control <= 14); assert.equal(state.menu.width, 224); assert(state.menu.height < 460);
    for (const height of [1440, 1320]) {
      await page.setViewportSize({ width: 2560, height });
      await wait(expected => innerHeight === expected && document.getElementById('scene').clientHeight === expected, height);
      const box = await page.locator('#exhibition-preview-frame').boundingBox();
      assert.equal(box.x, 0); assert.equal(box.y, 0); assert.equal(box.height, height);
    }
    await frame.evaluate(() => clearInterval(window.__continuousProbe));
    await page.screenshot({ path: `${output}/${engine}.png`, scale: 'css' });
    await page.keyboard.press('0');
    const muted = await frame.evaluate(() => window.__PB_AUDIO__.snapshot());
    assert.equal(muted.ambientVolume, 0); assert.equal(muted.voices, 0);
    assert.equal(await frame.evaluate(() => window.__PB_EXPLORATION__.getState().mode), 'AUTO');
    assert.deepEqual(errors, []); assert.deepEqual(failures, []);
    reports.push({ engine, origin, ...state, errors, failures });
    console.log(JSON.stringify({ engine, passed: true, packets: state.audio.history.length, zoomSync: state.sync, menu: state.menu }));
  } finally { await browser.close(); }
}
await writeFile(`${output}/report.json`, JSON.stringify(reports, null, 2));
