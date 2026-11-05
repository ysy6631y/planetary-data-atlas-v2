const contentUrl = value => { const url = new URL(value); url.searchParams.set('stage', 'content'); return url.href; };
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { chromium } from 'playwright';
import { createPresenceGate } from '../src/presence-detector.js';

const output = 'validation/exhibition-simulation';
await mkdir(output, { recursive: true });
const origin = process.env.ATLAS_TEST_URL || 'http://127.0.0.1:4174/';
const engines = [['chrome', chromium, { channel: 'chrome' }]];
if (process.env.ATLAS_WEBKIT_MODULE) engines.push(['webkit-webgl1', (await import(process.env.ATLAS_WEBKIT_MODULE)).webkit, {}]);
const reports = [];
for (const [engine, driver, options] of engines) {
  console.log(`Starting exhibition simulation: ${engine}`);
  const browser = await driver.launch({ headless: true, ...options });
  const page = await browser.newPage({ viewport: { width: 2560, height: 1440 }, deviceScaleFactor: 2 });
  try {
    page.setDefaultTimeout(30000);
    const errors = [], failures = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => { if (response.status() >= 400) failures.push(`${response.status()} ${response.url()}`); });
    await page.addInitScript(legacy => {
      window.__audioEvents = [];
      const pause = HTMLMediaElement.prototype.pause;
      HTMLMediaElement.prototype.pause = function (...args) {
        if (this.id === 'ambient-track') window.__audioEvents.push({ time: performance.now(), stack: new Error().stack });
        return pause.apply(this, args);
      };
      navigator.mediaDevices.getUserMedia = () => Promise.reject(new DOMException('Camera denied for fallback simulation', 'NotAllowedError'));
      if (legacy) {
        window.structuredClone = undefined; Array.prototype.at = undefined;
        const original = HTMLCanvasElement.prototype.getContext;
        HTMLCanvasElement.prototype.getContext = function(type, ...args) { return type === 'webgl2' ? null : original.call(this, type, ...args); };
      }
    }, engine !== 'chrome');
    await page.goto(contentUrl(origin));
    await page.waitForFunction(() => window.__PB_DEBUG__?.overview().ready && !window.__PB_DEBUG__.motion().focusing);
    await page.mouse.move(760, 100);
    await page.waitForTimeout(2800);
    assert(await page.evaluate(() => document.body.classList.contains('header-idle')));
    const overview = await page.evaluate(() => ({
      origin: window.__PB_DEBUG__.observation().originProjection.screen,
      distance: window.__PB_DEBUG__.snapshot().camera.position.reduce((sum, n) => sum + n * n, 0) ** .5,
      rail: document.getElementById('exhibition-rail').getBoundingClientRect().width / innerWidth,
      legendParent: document.querySelector('.legend').parentElement.className,
      graphics: window.__PB_DEBUG__.graphics(),
    }));
    assert(Math.abs(overview.origin[0] / 2560 - .42) < .005);
    assert(Math.abs(overview.origin[1] / 1440 - .44) < .005);
    assert(Math.abs(overview.rail - .34) < .001);
    assert.equal(overview.legendParent, 'scene-bottom');
    await page.screenshot({ path: `${output}/${engine}-overview.png`, scale: 'css' });
    await page.mouse.move(770, 110);
    assert.equal(await page.evaluate(() => document.body.classList.contains('header-idle')), false);
    await page.keyboard.press('1');
    await page.waitForFunction(() => { const s = window.__PB_AUDIO__.snapshot(); return s.mode === 'ambient' && s.playback === 'playing' && s.ambientVolume > .149; });
    await page.locator('[data-control="co2"]').click();
    await page.waitForFunction(() => !window.__PB_DEBUG__.motion().focusing && window.__PB_STREAM__.snapshot().source === window.__PB_DEBUG__.atlas().dataset && Boolean(window.__PB_STREAM__.snapshot().source));
    const zoom = await page.evaluate(() => {
      const d = window.__PB_DEBUG__, positions = d.climate().positions, anchor = d.navigation().fieldAnchor;
      // Local analysis has always used a 0.36 display scale; compare in world units.
      const center = [0, 1, 2].map(axis => anchor[axis] + .36 * positions.reduce((sum, p) => sum + p[axis], 0) / positions.length);
      const camera = d.snapshot().camera;
      return { center, target: camera.target, distance: Math.hypot(...camera.position.map((v, i) => v - camera.target[i])) };
    });
    assert(Math.abs(zoom.distance - 4.8) < .01);
    assert(Math.hypot(...zoom.center.map((v, i) => v - zoom.target[i])) < .001);
    await page.screenshot({ path: `${output}/${engine}-data-zoom.png`, scale: 'css' });
    await page.evaluate(() => { window.__streamWitness = document.querySelector('.stream-track').children[40]; });
    await page.locator('#dataset-select').selectOption(await page.locator('#dataset-select option').evaluateAll(options => options.find(o => !o.selected && !o.disabled && o.value).value), { force: true });
    await page.waitForFunction(() => !window.__PB_DEBUG__.motion().focusing && !document.getElementById('local-field').classList.contains('loading'));
    assert(await page.evaluate(() => window.__streamWitness.isConnected), 'Changing sources preserves visible log history');
    await page.waitForFunction(() => document.querySelectorAll('.stream-line.exceeded').length > 0);
    assert(await page.locator('.stream-line.exceeded').evaluateAll(rows => rows.every(row => row.textContent.includes('BOUNDARY EXCEEDED'))));
    await page.keyboard.press('1'); // Ambient -> camera auto, absent camera.
    await page.waitForFunction(() => window.__PB_AUDIO__.snapshot().ambientPaused);
    const presenceJobs = [];
    const gate = createPresenceGate(near => presenceJobs.push(page.evaluate(value => window.__PB_AUDIO__.setPresence(value), near)));
    gate.update(.22, 0); gate.update(.22, 600); await Promise.all(presenceJobs.splice(0));
    await page.waitForFunction(() => window.__PB_AUDIO__.snapshot().ambientVolume > .159 && !window.__PB_AUDIO__.snapshot().ambientPaused);
    gate.update(0, 900); gate.update(0, 2800); await Promise.all(presenceJobs.splice(0));
    await page.waitForFunction(() => window.__PB_AUDIO__.snapshot().ambientPaused);
    await page.keyboard.press('0'); await page.keyboard.press('1');
    await page.waitForFunction(() => window.__PB_AUDIO__.snapshot().ambientVolume > .149 && !window.__PB_AUDIO__.snapshot().ambientPaused);
    await page.evaluate(() => {
      const Context = window.AudioContext || window.webkitAudioContext;
      const context = new Context(), analyser = context.createAnalyser();
      context.createMediaElementSource(document.getElementById('ambient-track')).connect(analyser).connect(context.destination);
      window.__signalProbe = { context, analyser };
      window.addEventListener('keydown', () => context.resume(), { once: true });
    });
    await page.keyboard.press('Shift');
    await page.waitForFunction(() => {
      const data = new Float32Array(2048); window.__signalProbe.analyser.getFloatTimeDomainData(data);
      return data.some(value => Math.abs(value) > .00001);
    });
    const rms = await page.evaluate(() => {
      const data = new Float32Array(2048); window.__signalProbe.analyser.getFloatTimeDomainData(data);
      return Math.sqrt(data.reduce((sum, n) => sum + n * n, 0) / data.length);
    });
    assert(rms > .00001);
    const checkpoints = [];
    if (engine === 'chrome') {
      let previousSequence = await page.evaluate(() => window.__PB_STREAM__.snapshot().sequence);
      for (let i = 0; i < 3; i++) {
        await page.waitForTimeout(15000);
        const checkpoint = await page.evaluate(() => ({ mode: window.__PB_EXPLORATION__.getState().mode, sound: window.__PB_AUDIO__.snapshot().mode, paused: window.__PB_AUDIO__.snapshot().ambientPaused, stream: window.__PB_STREAM__.snapshot(), audio: window.__PB_AUDIO__.snapshot(), hidden: document.hidden, probe: window.__signalProbe.context.state, pauseCalls: window.__audioEvents }));
        await writeFile(`${output}/${engine}-idle-diagnostic.json`, JSON.stringify(checkpoint, null, 2));
        assert.equal(checkpoint.sound, 'ambient'); assert.equal(checkpoint.paused, false);
        assert(checkpoint.stream.sequence > previousSequence + 10, 'The stream must keep producing records throughout idle operation');
        assert(checkpoint.stream.lines <= checkpoint.stream.maxLines && checkpoint.stream.queued <= checkpoint.stream.maxQueue);
        previousSequence = checkpoint.stream.sequence;
        checkpoints.push(checkpoint); console.log(`Idle/loop checkpoint ${15 * (i + 1)}s: audio playing, stream ${checkpoint.stream.sequence}`);
      }
      await page.waitForFunction(() => window.__PB_EXPLORATION__.getState().mode === 'AUTO');
      await page.waitForFunction(() => window.__PB_EXPLORATION__.getState().stage === 'VISUALIZATION READY');
    }
    await page.keyboard.press('0');
    assert.equal(await page.evaluate(() => window.__PB_AUDIO__.snapshot().ambientMuted), true);
    assert.deepEqual(errors, []); assert.deepEqual(failures, []);
    reports.push({ engine, cameraDenied: true, overview, zoom, soundRms: rms, presenceGate: true, historyPreserved: true, headerHideAndReveal: true, checkpoints, errors, failures });
    await writeFile(`${output}/report.json`, JSON.stringify(reports, null, 2));
    console.log(`Passed exhibition simulation: ${engine}`);
  } catch (error) {
    const diagnostic = await page.evaluate(() => ({ audio: window.__PB_AUDIO__?.snapshot(), hidden: document.hidden, stream: window.__PB_STREAM__?.snapshot(), rows: [...document.querySelectorAll('.stream-line')].map(row => ({class: row.className, text: row.textContent})), probe: window.__signalProbe?.context.state, pauseCalls: window.__audioEvents }));
    await writeFile(`${output}/${engine}-failure.json`, JSON.stringify({ error: error.message, ...diagnostic }, null, 2));
    throw error;
  } finally { await browser.close(); }
}
console.log(JSON.stringify({ output, passed: reports.map(({ engine, soundRms, historyPreserved, headerHideAndReveal }) => ({ engine, soundRms, historyPreserved, headerHideAndReveal })) }, null, 2));
