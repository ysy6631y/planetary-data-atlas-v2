const contentUrl = value => { const url = new URL(value); url.searchParams.set('stage', 'content'); return url.href; };
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { resolve, extname } from 'node:path';
import { chromium, webkit } from 'playwright';

// A project subdirectory catches absolute sound URLs that work only locally.
const root = resolve('dist'), prefix = '/planetary-data-atlas-v2/';
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.wav': 'audio/wav', '.woff': 'font/woff', '.woff2': 'font/woff2' };
const server = createServer(async (request, response) => {
  const pathname = new URL(request.url, 'http://localhost').pathname;
  const file = resolve(root, pathname.startsWith(prefix) ? pathname.slice(prefix.length) || 'index.html' : '../missing');
  if (!file.startsWith(root + '/')) { response.writeHead(404).end(); return; }
  try {
    const data = await readFile(file);
    const headers = { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'Accept-Ranges': 'bytes' };
    const range = request.headers.range?.match(/^bytes=(\d+)-(\d*)$/);
    if (range) {
      const start = Number(range[1]), end = Math.min(data.length - 1, range[2] ? Number(range[2]) : data.length - 1);
      response.writeHead(206, { ...headers, 'Content-Length': end - start + 1, 'Content-Range': `bytes ${start}-${end}/${data.length}` }).end(data.subarray(start, end + 1));
    } else response.writeHead(200, { ...headers, 'Content-Length': data.length }).end(data);
  }
  catch { response.writeHead(404).end(); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = process.env.ATLAS_TEST_URL || `http://127.0.0.1:${server.address().port}${prefix}`;
const output = resolve(process.env.ATLAS_SOUND_OUTPUT || 'validation/sound-operator');
await mkdir(output, { recursive: true });
const reports = [];
let browser;
try {
  const engines = ['chromium', ...(process.env.ATLAS_WEBKIT_MODULE ? ['webkit'] : [])];
  for (const engine of engines) {
    const driver = engine === 'webkit' ? (process.env.ATLAS_WEBKIT_MODULE ? (await import(process.env.ATLAS_WEBKIT_MODULE)).webkit : webkit) : chromium;
    browser = await driver.launch({ headless: true, ...(engine === 'chromium' ? { channel: 'chrome' } : {}) });
    for (const variant of ['webgl2', 'webgl1', 'no-webgl-no-audiocontext']) {
      console.log(`Checking sound: ${engine} / ${variant}`);
      const page = await browser.newPage({ viewport: { width: 2560, height: 1440 }, deviceScaleFactor: 2 });
      const errors = [], failures = [];
      page.on('pageerror', error => errors.push(error.message));
      page.on('response', response => { if (response.status() >= 400) failures.push(`${response.status()} ${response.url()}`); });
      await page.addInitScript(variant => {
        navigator.mediaDevices.getUserMedia = () => Promise.reject(new DOMException('Camera denied for audio test', 'NotAllowedError'));
        const getContext = HTMLCanvasElement.prototype.getContext;
        HTMLCanvasElement.prototype.getContext = function(type, ...args) {
          if (variant !== 'webgl2' && type === 'webgl2') return null;
          if (variant === 'no-webgl-no-audiocontext' && /webgl/.test(type)) return null;
          return getContext.call(this, type, ...args);
        };
        if (variant === 'no-webgl-no-audiocontext') { window.AudioContext = undefined; window.webkitAudioContext = undefined; }
        window.__audioCalls = { play: [], resume: [], contexts: 0, key: false };
        window.addEventListener('keydown', () => { window.__audioCalls.key = true; }, true);
        window.addEventListener('keydown', () => { window.__audioCalls.key = false; });
        const originalPlay = HTMLMediaElement.prototype.play;
        HTMLMediaElement.prototype.play = function(...args) {
          if (this.id === 'ambient-track') window.__audioCalls.play.push({ key: window.__audioCalls.key, src: this.currentSrc || this.src });
          return originalPlay.apply(this, args);
        };
        const Constructor = window.AudioContext || window.webkitAudioContext;
        if (Constructor) {
          const resume = Constructor.prototype.resume;
          Constructor.prototype.resume = function(...args) { window.__audioCalls.resume.push({ key: window.__audioCalls.key }); return resume.apply(this, args); };
          window.AudioContext = class extends Constructor { constructor(...args) { super(...args); window.__audioCalls.contexts++; } };
        }
      }, variant);
      await page.goto(contentUrl(origin));
      await page.waitForFunction(() => window.__PB_AUDIO__ && document.getElementById('presence-start').disabled === false);
      const state = () => page.evaluate(() => window.__PB_AUDIO__.snapshot());
      assert.equal((await state()).mode, 'auto');
      assert.equal((await state()).present, false);

      // The first numeric key starts sound with a denied/missing camera.
      await page.keyboard.press('1');
      await page.waitForFunction(() => { const s = window.__PB_AUDIO__.snapshot(); return s.playback === 'playing' && s.ambientVolume > .149 && s.ambientTime > .1; });
      const manual = await state();
      assert.equal(manual.mode, 'ambient'); assert.equal(manual.manualAmbientVolume, .15);
      assert.equal(manual.present, false); assert.equal(manual.voices, 0);
      assert.equal(await page.locator('audio').count(), 1);
      if (variant !== 'no-webgl-no-audiocontext') {
        await page.waitForFunction(() => window.__PB_AUDIO__.snapshot().loaded === window.__PB_AUDIO__.snapshot().expected);
        await page.locator('[data-control="co2"]').click();
        await page.waitForFunction(() => window.__PB_AUDIO__.snapshot().history.filter(entry => entry.trigger === 'zoom').length === 2);
        const cues = (await state()).history.filter(entry => entry.trigger === 'zoom');
        assert.deepEqual(cues.map(cue => cue.family), ['flow', 'detail']);
        assert(cues.every(cue => cue.duration <= .43 && cue.level < .7));
        await page.evaluate(() => { for (let i = 0; i < 20; i++) window.__PB_AUDIO__.observe(); });
        await page.waitForTimeout(450);
        assert.equal((await state()).history.filter(entry => entry.trigger === 'zoom').length, 2, 'Repeated zooms must not stack voices');
        assert((await state()).peakVoices <= 2);
      }
      let calls = await page.evaluate(() => window.__audioCalls);
      assert(calls.play.some(call => call.key), 'HTML audio play must be called inside the key event');
      if (variant !== 'no-webgl-no-audiocontext') assert(calls.resume.some(call => call.key), 'AudioContext resume must be called inside the key event');
      const t = manual.ambientTime;
      await page.waitForTimeout(350);
      assert((await state()).ambientTime > t + .1, 'Decoded media clock advances');

      // Camera resets cannot interrupt the operator override.
      await page.evaluate(() => { window.__PB_AUDIO__.setPresence(true); window.__PB_AUDIO__.setPresence(false, true); });
      assert.equal((await state()).ambientPaused, false);
      assert.equal((await state()).ambientVolume, .15);
      // The actual 8s WAV loops instead of ending.
      await page.evaluate(() => { const a = document.getElementById('ambient-track'); a.currentTime = a.duration - .12; });
      await page.waitForFunction(() => {
        const a = document.getElementById('ambient-track');
        return !a.seeking && a.currentTime > 0 && a.currentTime < 2 && !a.paused;
      }, null, { timeout: 5000 });

      // Smooth return to an absent camera; no source restart on mode changes.
      await page.keyboard.press('1');
      await page.waitForTimeout(180);
      const fading = await state();
      assert(fading.ambientVolume > 0 && fading.ambientVolume < .15);
      await page.waitForFunction(() => window.__PB_AUDIO__.snapshot().ambientPaused);
      assert.equal((await state()).mode, 'auto');
      await page.evaluate(() => window.__PB_AUDIO__.setPresence(true));
      await page.waitForFunction(() => window.__PB_AUDIO__.snapshot().ambientVolume > .159 && !window.__PB_AUDIO__.snapshot().ambientPaused);
      await page.keyboard.press('1');
      await page.waitForTimeout(500);
      const beforeReturn = (await state()).ambientTime;
      const playsBeforeReturn = await page.evaluate(() => window.__audioCalls.play.length);
      await page.keyboard.press('1');
      await page.waitForFunction(previous => {
        const s = window.__PB_AUDIO__.snapshot();
        return !s.ambientPaused && s.ambientVolume > .159 && s.ambientTime !== previous;
      }, beforeReturn);
      assert.equal((await state()).ambientPaused, false);
      assert.equal(await page.evaluate(() => window.__audioCalls.play.length), playsBeforeReturn, 'Returning to AUTO keeps the existing media playback');

      // Instant mute holds even after new camera results or any other key.
      await page.keyboard.press('0');
      let muted = await state();
      assert.equal(muted.mode, 'muted'); assert.equal(muted.ambientVolume, 0); assert.equal(muted.ambientMuted, true);
      await page.evaluate(() => window.__PB_AUDIO__.setPresence(true, true));
      await page.keyboard.press('Shift');
      assert.equal((await state()).ambientPaused, true);
      await page.keyboard.press('1');
      await page.waitForFunction(() => window.__PB_AUDIO__.snapshot().ambientVolume > .149 && !window.__PB_AUDIO__.snapshot().ambientPaused);

      // Holding 1 toggles only once; modifiers and numeric input remain usable.
      await page.keyboard.down('1'); await page.keyboard.down('1'); await page.keyboard.up('1');
      assert.equal((await state()).mode, 'auto');
      await page.keyboard.press('Control+1'); assert.equal((await state()).mode, 'auto');
      await page.locator('#sound-operator summary').click();
      await page.locator('#ambient-volume').focus();
      await page.keyboard.press('1'); assert.equal((await state()).mode, 'auto');
      await page.locator('#ambient-volume').fill('22');
      assert.equal((await state()).manualAmbientVolume, .22);
      await page.locator('#ambient-start').click();
      await page.waitForFunction(() => window.__PB_AUDIO__.snapshot().ambientVolume > .219);

      // A rejected Safari play() is visible and can be retried by a click.
      await page.evaluate(() => {
        window.__PB_AUDIO__.setMode('muted');
        const a = document.getElementById('ambient-track');
        a.play = () => Promise.reject(new DOMException('Simulated Safari block', 'NotAllowedError'));
      });
      await page.locator('#sound-operator summary').focus();
      await page.keyboard.press('1');
      await page.waitForFunction(() => window.__PB_AUDIO__.snapshot().playback === 'blocked');
      assert.match(await page.locator('#sound-mode-status').textContent(), /재생 차단/);
      await page.evaluate(() => { delete document.getElementById('ambient-track').play; });
      await page.locator('#ambient-start').click();
      await page.waitForFunction(() => window.__PB_AUDIO__.snapshot().playback === 'playing' && !window.__PB_AUDIO__.snapshot().ambientPaused);
      for (const key of ['0', '1', '0', '1', '1', '1']) await page.keyboard.press(key);
      assert.equal((await state()).mode, 'ambient');
      await page.waitForFunction(() => window.__PB_AUDIO__.snapshot().ambientVolume > .219 && !window.__PB_AUDIO__.snapshot().ambientPaused);

      // Recover an unexpected media interruption, but never undo operator mute.
      await page.evaluate(() => document.getElementById('ambient-track').pause());
      await page.waitForFunction(() => !window.__PB_AUDIO__.snapshot().ambientPaused);
      await page.keyboard.press('0'); await page.waitForTimeout(350);
      assert.equal((await state()).ambientPaused, true);
      await page.keyboard.press('1');
      await page.waitForFunction(() => !window.__PB_AUDIO__.snapshot().ambientPaused && window.__PB_AUDIO__.snapshot().ambientVolume > .219);

      // WebKit's HTML audio decode produces a nonzero signal, not just PLAYING.
      let signalRms = null;
      if (variant !== 'no-webgl-no-audiocontext') {
        await page.evaluate(() => {
          const Constructor = window.AudioContext || window.webkitAudioContext;
          const context = new Constructor(), analyser = context.createAnalyser();
          context.createMediaElementSource(document.getElementById('ambient-track')).connect(analyser).connect(context.destination);
          window.__signalProbe = { context, analyser };
          window.addEventListener('keydown', () => context.resume(), { once: true });
        });
        await page.locator('#sound-operator summary').focus();
        await page.keyboard.press('Shift');
        await page.waitForTimeout(400);
        signalRms = await page.evaluate(() => {
          const data = new Float32Array(2048); window.__signalProbe.analyser.getFloatTimeDomainData(data);
          return Math.sqrt(data.reduce((sum, value) => sum + value * value, 0) / data.length);
        });
        assert(signalRms > .00001, 'Actual decoded audio signal must be nonzero');
      }
      calls = await page.evaluate(() => window.__audioCalls);
      assert.equal(calls.contexts, variant === 'no-webgl-no-audiocontext' ? 0 : 2, 'One production context plus the isolated measurement context');
      const final = await state();
      assert.deepEqual(errors, []); assert.deepEqual(failures, []);
      await page.screenshot({ path: `${output}/${engine}-${variant}.png`, scale: 'css' });
      reports.push({ engine, variant, signalRms, cameraDenied: true, final, calls, errors, failures });
      await page.close();
    }
    await browser.close(); browser = null;
  }
  await writeFile(`${output}/report.json`, JSON.stringify(reports, null, 2));
  console.log(JSON.stringify({ output, passed: reports.map(({ engine, variant, signalRms }) => ({ engine, variant, signalRms })) }, null, 2));
} finally { await browser?.close(); await new Promise(resolve => server.close(resolve)); }
