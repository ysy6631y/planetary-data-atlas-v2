const contentUrl = value => { const url = new URL(value); url.searchParams.set('stage', 'content'); url.searchParams.set('interaction', 'manual'); return url.href; };
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const label = process.argv[2] || 'after';
if (!/^[a-z0-9-]+$/.test(label)) throw new Error('Use a simple capture label');
const output = resolve('validation/exhibition-27');
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', headless: true });
try {
  const context = await browser.newContext({
    viewport: { width: 2560, height: 1440 }, deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(contentUrl(process.env.ATLAS_TEST_URL || 'http://127.0.0.1:4174/'));
  await page.waitForFunction(() => window.__PB_DEBUG__?.overview().ready && !window.__PB_DEBUG__.motion().focusing);
  await page.keyboard.press('Shift');
  // Let the readable console fill; the camera stays paused in the same overview.
  await page.waitForFunction(() => window.__PB_STREAM__.snapshot().sequence >= 65);
  await page.waitForTimeout(2600);
  await page.screenshot({ path: `${output}/${label}-overview.png` });
  await page.screenshot({ path: `${output}/${label}-overview-review.png`, scale: 'css' });
  const overview = await page.evaluate(() => {
    const rail = document.getElementById('exhibition-rail').getBoundingClientRect();
    return { graphics: window.__PB_DEBUG__.graphics(), snapshot: window.__PB_DEBUG__.snapshot(), stream: window.__PB_STREAM__.snapshot(), consoleWidth: rail.width, consoleShare: rail.width / innerWidth };
  });
  const t = Date.now();
  await page.click('[data-control="co2"]');
  await page.waitForFunction(() => !window.__PB_DEBUG__.motion().focusing && !document.getElementById('local-field').classList.contains('loading'));
  const entryMs = Date.now() - t;
  await page.waitForTimeout(1600);
  await page.screenshot({ path: `${output}/${label}-focus.png` });
  await page.screenshot({ path: `${output}/${label}-focus-review.png`, scale: 'css' });
  const frameTimes = await page.evaluate(() => new Promise(resolve => {
    const times = []; let previous = performance.now();
    const sample = now => { times.push(now - previous); previous = now; times.length < 120 ? requestAnimationFrame(sample) : resolve(times); };
    requestAnimationFrame(sample);
  }));
  const afterStream = await page.evaluate(() => window.__PB_STREAM__.snapshot());
  const graphics = await page.evaluate(() => window.__PB_DEBUG__.graphics());
  await writeFile(`${output}/${label}.json`, JSON.stringify({ viewport: [2560, 1440], dpr: 2, overview, entryMs, afterStream, graphics, frameTimes, errors }, null, 2));
  await context.close();
  // Record separately so video encoding cannot lower still-capture quality or
  // contaminate the runtime frame measurements above.
  const preview = await browser.newContext({ viewport: { width: 2560, height: 1440 }, deviceScaleFactor: 2,
    recordVideo: { dir: output, size: { width: 1280, height: 720 } } });
  const motion = await preview.newPage();
  await motion.goto(contentUrl(process.env.ATLAS_TEST_URL || 'http://127.0.0.1:4174/'));
  await motion.waitForFunction(() => window.__PB_DEBUG__?.overview().ready && !window.__PB_DEBUG__.motion().focusing);
  await motion.keyboard.press('Shift');
  await motion.waitForFunction(() => window.__PB_STREAM__.snapshot().sequence >= 65);
  await motion.waitForTimeout(2000);
  await motion.click('[data-control="co2"]');
  await motion.waitForTimeout(3500);
  await motion.mouse.move(1000, 100);
  await motion.waitForFunction(() => getComputedStyle(document.querySelector('.observation-toolbar')).opacity === '1');
  await motion.click('#fit');
  await motion.waitForTimeout(2000);
  const video = motion.video();
  await preview.close();
  await video.saveAs(`${output}/${label}-motion.webm`);
  console.log(JSON.stringify({ output, overviewGraphics: overview.graphics, consoleShare: overview.consoleShare, entryMs, graphics, errors }));
} finally { await browser.close(); }
