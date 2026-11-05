import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { chromium } from 'playwright';

const origin = process.env.ATLAS_TEST_URL || 'http://127.0.0.1:4174/';
const output = 'validation/installation';
await mkdir(output, { recursive: true });
const engines = [['chrome', chromium, { channel: 'chrome' }]];
if (process.env.ATLAS_WEBKIT_MODULE) engines.push(['webkit', (await import(process.env.ATLAS_WEBKIT_MODULE)).webkit, {}]);
const reports = [];
for (const [engine, driver, options] of engines) {
  if (process.env.ATLAS_INSTALL_ENGINE && process.env.ATLAS_INSTALL_ENGINE !== engine) continue;
  const browser = await driver.launch({ headless: true, ...options });
  try {
    const page = await browser.newPage({ viewport: { width: 2560, height: 1440 }, deviceScaleFactor: 2 });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.addInitScript(legacy => {
      if (legacy) {
        navigator.mediaDevices.getUserMedia = () => Promise.reject(new DOMException('Camera denied', 'NotAllowedError'));
        window.structuredClone = undefined; Array.prototype.at = undefined;
        const getContext = HTMLCanvasElement.prototype.getContext;
        HTMLCanvasElement.prototype.getContext = function (type, ...args) { return type === 'webgl2' ? null : getContext.call(this, type, ...args); };
        return;
      }
      // Exercise the detector's actual worker-result / hysteresis / sound path.
      // These are controlled face results, not a claim of camera-model accuracy.
      window.__faceRatio = .12;
      navigator.mediaDevices.getUserMedia = async () => ({ getTracks: () => [], getVideoTracks: () => [{ addEventListener() {} }] });
      Object.defineProperty(HTMLVideoElement.prototype, 'srcObject', { configurable: true, get() { return null; }, set() {} });
      HTMLVideoElement.prototype.play = () => Promise.resolve();
      const play = HTMLMediaElement.prototype.play;
      let audioGesture = false;
      window.addEventListener('pointerdown', () => { audioGesture = true; }, true);
      window.addEventListener('keydown', () => { audioGesture = true; }, true);
      HTMLMediaElement.prototype.play = function (...args) {
        if (this.classList.contains('presence-video')) return Promise.resolve();
        if (this.id === 'ambient-track' && !audioGesture) return Promise.reject(new DOMException('Gesture required', 'NotAllowedError'));
        return play.apply(this, args);
      };
      const WorkerClass = window.Worker;
      window.Worker = class {
        constructor(url, ...args) { if (!String(url).includes('presence-worker')) return new WorkerClass(url, ...args); }
        postMessage(data) {
          if (data.type !== 'init') return;
          setTimeout(() => this.onmessage?.({ data: { type: 'ready' } }), 20);
          this.timer = setInterval(() => this.onmessage?.({ data: { type: 'result', ratio: window.__faceRatio } }), 100);
        }
        terminate() { clearInterval(this.timer); }
      };
      if (legacy) {
        window.structuredClone = undefined; Array.prototype.at = undefined;
        const getContext = HTMLCanvasElement.prototype.getContext;
        HTMLCanvasElement.prototype.getContext = function (type, ...args) { return type === 'webgl2' ? null : getContext.call(this, type, ...args); };
      }
    }, engine === 'webkit');
    await page.goto(origin, { waitUntil: 'domcontentloaded' });
    const frame = await (await page.waitForSelector('#exhibition-preview-frame')).contentFrame();
    await frame.waitForFunction(() => window.__PB_DEBUG__?.overview().ready);
    if (engine === 'chrome') {
    await frame.waitForFunction(() => window.__PB_AUDIO__.snapshot().playback === 'blocked');
    assert.match(await frame.locator('#audio-monitor').textContent(), /차단/);
    await frame.locator('#audio-activate').click();
    await frame.waitForFunction(() => window.__PB_AUDIO__.snapshot().present && window.__PB_AUDIO__.snapshot().ambientVolume > .159 && !window.__PB_AUDIO__.snapshot().ambientPaused);
    assert.match(await frame.locator('#camera-monitor').textContent(), /인식.*근접/);
    await frame.evaluate(() => { window.__faceRatio = .04; });
    await frame.waitForFunction(() => !window.__PB_AUDIO__.snapshot().present && window.__PB_AUDIO__.snapshot().ambientPaused);
    assert.match(await frame.locator('#camera-monitor').textContent(), /거리 대기/);
    await frame.evaluate(() => { window.__faceRatio = 0; });
    await frame.waitForFunction(() => document.getElementById('camera-monitor').textContent.includes('사람 대기'));
    }
    await frame.locator('#camera-monitor').click();
    await page.keyboard.press('1');
    await frame.waitForFunction(() => window.__PB_AUDIO__.snapshot().mode === 'ambient' && !window.__PB_AUDIO__.snapshot().ambientPaused);
    await page.waitForTimeout(2800);
    assert.equal(await frame.evaluate(() => document.body.classList.contains('header-idle')), false);
    assert(await frame.locator('#exhibition-status').isVisible());
    const layouts = [];
    for (const [width, height] of [[2560,1440], [2560,1320], [1920,1080], [1440,900]]) {
      await page.setViewportSize({ width, height });
      await frame.waitForFunction(expected => Math.abs(innerHeight - expected) <= 1, Math.round(height * 2560 / width));
      await frame.waitForFunction(() => Math.abs(parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--layout-y')) - Math.min(1.2, Math.max(.65, innerHeight / 1440))) < .002);
      const bounds = await page.locator('#exhibition-preview-frame').boundingBox();
      assert(Math.abs(bounds.x) < 1, JSON.stringify(bounds));
      assert(Math.abs(bounds.width - width) < 1, JSON.stringify(bounds));
      const layout = await frame.evaluate(() => {
        const sheet = document.querySelector('.index-sheet'), group = document.querySelector('#group-list');
        return { width: innerWidth, height: innerHeight, sheetHeight: sheet.clientHeight, sheetScroll: sheet.scrollHeight, navLeft: document.getElementById('boundaries').getBoundingClientRect().left,
          menuBottom: group.getBoundingClientRect().bottom, gaugeTop: document.querySelector('.scene-bottom').getBoundingClientRect().top,
          lineHeight: document.querySelector('.stream-line').offsetHeight, stars: window.__PB_DEBUG__.backgroundMotion().stars };
      });
      assert.equal(layout.navLeft, 32); assert.equal(layout.width, 2560); assert(Math.abs(layout.height - height * 2560 / width) <= 1);
      assert(layout.sheetScroll <= layout.sheetHeight + 1); assert(layout.menuBottom < layout.gaugeTop, JSON.stringify(layout));
      assert.equal(layout.lineHeight, 25); assert.equal(layout.stars, 2400);
      layouts.push({ physical: [width, height], ...layout });
    }
    await page.screenshot({ path: `${output}/${engine}-laptop.png`, scale: 'css' });
    await page.mouse.click(2, 2); await page.keyboard.press('0');
    assert.equal(await frame.evaluate(() => window.__PB_AUDIO__.snapshot().mode), 'muted');
    await page.keyboard.press('1');
    await frame.waitForFunction(() => !window.__PB_AUDIO__.snapshot().ambientPaused && window.__PB_AUDIO__.snapshot().mode === 'ambient');
    await page.setViewportSize({ width: 2560, height: 1440 });
    await page.screenshot({ path: `${output}/${engine}-27.png`, scale: 'css' });
    assert.deepEqual(errors, []);
    reports.push({ engine, origin, layouts, cameraNearAndFar: engine === 'chrome', ambientWithoutFace: true, persistentStatus: true, errors });
    console.log(`Passed fixed stage and camera/audio status: ${engine}`);
  } finally { await browser.close(); }
}
await writeFile(`${output}/report.json`, JSON.stringify(reports, null, 2));
