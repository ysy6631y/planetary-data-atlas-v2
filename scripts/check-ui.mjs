import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { readFile, mkdtemp, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const origin = process.env.ATLAS_TEST_URL || 'http://127.0.0.1:5174/';
const output = await mkdtemp(join(tmpdir(), 'planetary-v2-ui-'));
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
const errors = [], failures = [];
page.on('pageerror', error => errors.push(error.message));
page.on('response', response => { if (response.status() >= 400) failures.push({ url: response.url(), status: response.status() }); });
const screenshot = name => page.screenshot({ path: join(output, `${name}.png`) });
const settled = () => page.waitForFunction(() => !window.__PB_DEBUG__.motion().focusing && !document.getElementById('local-field').classList.contains('loading'));
const bounds = () => page.evaluate(() => {
  const rect = id => { const r = document.getElementById(id).getBoundingClientRect(); return { x: r.x, y: r.y, right: r.right, bottom: r.bottom, width: r.width, height: r.height }; };
  return { width: innerWidth, height: innerHeight, scroll: document.documentElement.scrollWidth, canvas: rect('scene'), index: rect('boundaries'), sheet: document.querySelector('.index-sheet').getBoundingClientRect().bottom, gauge: rect('risk-ruler'), stream: rect('data-stream'), selection: rect('local-field'), inspector: rect('inspector'), rail: rect('exhibition-rail') };
});
try {
  const remote = execFileSync('git', ['-C', fileURLToPath(new URL('../', import.meta.url)), 'remote', 'get-url', 'origin'], { encoding: 'utf8' }).trim();
  assert.equal(remote, 'https://github.com/ysy6631y/planetary-data-atlas-v2.git', 'V2 must use its own repository, never V1');
  for (const file of ['auto-exploration.js', 'atlas-data.js', 'climate-layer.js', 'climate-layout.js', 'data.js', 'spatial.js', 'observation.js', 'sound-system.js', 'sound-config.js', 'presence-detector.js']) {
    const current = await readFile(new URL(`../src/${file}`, import.meta.url));
    const v1 = await readFile(join(process.env.V1_SOURCE || '/Users/pc/Desktop/무제 폴더 5', 'src', file));
    assert(current.equals(v1), `V2 must preserve V1 core: ${file}`);
  }
  await page.goto(origin);
  await page.waitForFunction(() => window.__PB_DEBUG__?.overview().ready);
  assert.equal(await page.locator('.group-title').count(), 9);
  assert.equal(await page.locator('.control').count(), 13);
  assert.equal(await page.locator('.index-sheet').isVisible(), true);
  assert.equal(await page.locator('#local-field').isVisible(), true);
  await screenshot('01-overview-1920');
  await page.waitForFunction(() => window.__PB_EXPLORATION__.getState().stage === 'VISUALIZATION READY');
  assert.equal(await page.locator('.group-title[aria-pressed=true]').getAttribute('data-group'), 'climate-change');
  assert.equal(await page.locator('.control[aria-pressed=true]').getAttribute('data-control'), 'radiative-forcing');
  await page.waitForFunction(() => window.__PB_STREAM__.snapshot().sequence > 155, null, { timeout: 20000 });
  const stream = await page.evaluate(() => window.__PB_STREAM__.snapshot());
  assert(stream.lines <= stream.maxLines && stream.queued <= stream.maxQueue);
  assert(await page.locator('.stream-line.trace').count() > 0);
  await screenshot('02-automatic-stream-1920');
  await page.locator('[data-control="co2"]').click();
  await settled();
  await page.waitForTimeout(250);
  assert.equal(await page.evaluate(() => window.__PB_EXPLORATION__.getState().mode), 'MANUAL');
  assert.equal(await page.locator('#inspector').isVisible(), true);
  assert.equal(await page.locator('#analysis-kind').textContent(), 'PLANETARY REFERENCE');
  assert.match(await page.locator('#reference-content').textContent(), /CO2/);
  await screenshot('03-reference-inspector-1920');
  for (const name of ['distance', 'data', 'reference']) {
    await page.locator(`[data-readout-tab="${name}"]`).click();
    assert.equal(await page.locator(`#${name}-readout`).isVisible(), true);
  }
  await page.locator('#analysis-toggle').click();
  await page.locator('#dataset-select-trigger').click();
  const menu = await page.locator('#dataset-select-listbox').boundingBox();
  assert(menu && menu.x >= 0 && menu.y >= 0 && menu.x + menu.width <= 1920 && menu.y + menu.height <= 1080);
  await screenshot('04-dataset-menu-1920');
  const optionIndex = await page.locator('#dataset-select option').evaluateAll(options => options.findIndex(option => option.value === '410debc8efa8704a7c79'));
  await page.locator(`#dataset-select-listbox .select-option[data-index="${optionIndex}"]`).click();
  await page.waitForFunction(() => window.__PB_DEBUG__.atlas().dataset === '410debc8efa8704a7c79');
  await settled();
  const entity = await page.locator('#entity-filter option').nth(1).getAttribute('value');
  await page.locator('#entity-filter').selectOption(entity, { force: true });
  assert(await page.evaluate(() => window.__PB_DEBUG__.atlas().displayed) > 0);
  await page.locator('#entity-filter').selectOption('', { force: true });
  await page.locator('#climate-scale').selectOption('linear', { force: true });
  await page.waitForTimeout(800);
  const point = await page.evaluate(() => {
    const rail = document.getElementById('exhibition-rail').getBoundingClientRect();
    const index = document.getElementById('boundaries').getBoundingClientRect();
    const references = window.__PB_DEBUG__.snapshot().points.filter(p => p.position).map(p => window.__PB_DEBUG__.project(p.id));
    return window.__PB_DEBUG__.climate().projected.find(p => p.visible && p.x > index.right + 25 && p.x < rail.left - 25 && p.y > 160 && p.y < innerHeight - 80 && references.every(r => Math.hypot(r.x - p.x, r.y - p.y) > 24));
  });
  assert(point, 'A visible white observation point must remain clickable between UI rails');
  await page.mouse.click(point.x, point.y);
  await page.waitForFunction(() => document.getElementById('analysis-kind').textContent === 'LOCAL ANALYSIS');
  assert.equal(await page.locator('#inspector').isVisible(), true);
  assert(await page.locator('.observation-values dd').count() > 0);
  await screenshot('05-source-inspector-1920');
  await page.locator('#analysis-toggle').click();
  await page.locator('#source-record').fill('3');
  await page.locator('#source-record').dispatchEvent('change');
  assert.match(await page.locator('#panel-reference').textContent(), /3/);
  await page.locator('.source-details summary').first().click();
  const responsive = [];
  for (const [width, height] of [[1920,1080], [1440,900], [1280,720], [800,720], [390,844]]) {
    await page.setViewportSize({ width, height });
    await page.waitForTimeout(250);
    const layout = await bounds();
    assert.equal(layout.scroll, width, `Horizontal overflow at ${width}`);
    assert.equal(layout.canvas.width, width);
    assert.equal(layout.canvas.height, height);
    assert.equal(await page.locator('#local-field').isVisible(), true, `Data controls must stay visible at ${width}`);
    assert(layout.sheet < layout.gauge.y, `Index overlaps risk gauge at ${width}`);
    assert(layout.stream.bottom <= layout.selection.y, `Stream overlaps selection at ${width}`);
    assert(layout.inspector.bottom <= height && layout.inspector.height > 0, `Inspector clipped at ${width}`);
    for (const id of ['exhibition-rail', 'local-field', 'inspector', 'boundaries']) {
      assert.equal(await page.locator(`#${id}`).evaluate(el => getComputedStyle(el).backgroundColor), 'rgba(0, 0, 0, 0)', `${id} must be transparent`);
    }
    await screenshot(`06-layout-${width}`);
    responsive.push(layout);
  }
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.locator('#ui-toggle').click();
  assert.equal(await page.locator('#exhibition-rail').isVisible(), false);
  await page.locator('#ui-toggle').click();
  assert.equal(await page.locator('#exhibition-rail').isVisible(), true);
  await page.locator('[data-group="ocean-acidification"]').click();
  await settled();
  assert.equal(await page.locator('#analysis-kind').textContent(), 'PLANETARY REFERENCE');
  assert.equal(await page.locator('#dataset-select-trigger').isDisabled(), true);
  await screenshot('07-reference-only-1440');
  await page.waitForTimeout(40000);
  assert.equal(await page.evaluate(() => window.__PB_EXPLORATION__.getState().mode), 'MANUAL');
  await page.waitForFunction(() => window.__PB_EXPLORATION__.getState().mode === 'AUTO', null, { timeout: 15000 });
  await page.waitForFunction(() => document.getElementById('stream-mode').textContent === 'AUTO');
  assert.deepEqual(errors, []);
  assert.deepEqual(failures, []);
  const report = { origin, output, corePreserved: true, separateRepository: true, stream, responsive, manualReference: true, whiteObservationClick: true, sourceRow: true, tabs: true, datasetChange: true, entityFilter: true, axisScale: true, uiToggle: true, referenceOnly: true, idleResume45Seconds: true, errors, failures };
  await writeFile(join(output, 'report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report));
} finally { await browser.close(); }
