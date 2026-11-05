import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, mkdtemp } from 'node:fs/promises';
import { resolve, extname, join } from 'node:path';
import { tmpdir } from 'node:os';
import { chromium, webkit } from 'playwright';

// Serve the production build below a project path, just like GitHub Pages.
const root = resolve('dist');
assert(!/<script\b[^>]*\bcrossorigin/.test(await readFile(join(root, 'index.html'), 'utf8')),
  'Same-origin entry scripts must not require CORS-mode module loading on older WebKit');
const prefix = '/planetary-data-atlas-v2/';
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.wav': 'audio/wav', '.woff': 'font/woff', '.woff2': 'font/woff2' };
const server = createServer(async (request, response) => {
  const pathname = new URL(request.url, 'http://localhost').pathname;
  const relative = pathname.startsWith(prefix) ? pathname.slice(prefix.length) : '';
  const file = resolve(root, relative || 'index.html');
  if (!pathname.startsWith(prefix) || !file.startsWith(root + '/')) { response.writeHead(404).end(); return; }
  try { const data = await readFile(file); response.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' }).end(data); }
  catch { response.writeHead(404).end(); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const local = `http://127.0.0.1:${server.address().port}${prefix}`;
const origin = process.env.ATLAS_TEST_URL || local;
const output = await mkdtemp(join(tmpdir(), 'atlas-compat-'));
const reports = [];
let browser;
try {
  const engines = ['chromium'];
  if (process.env.ATLAS_WEBKIT_EXECUTABLE || process.env.ATLAS_WEBKIT_MODULE) engines.push('webkit');
  for (const engine of engines) {
    const webkitDriver = process.env.ATLAS_WEBKIT_MODULE ? (await import(process.env.ATLAS_WEBKIT_MODULE)).webkit : webkit;
    browser = await (engine === 'webkit' ? webkitDriver.launch({ headless: true, executablePath: process.env.ATLAS_WEBKIT_EXECUTABLE, timeout: 30000 }) : chromium.launch({ channel: 'chrome', headless: true }));
    for (const mode of ['webgl2', 'webgl1', 'no-webgl']) {
      const page = await browser.newPage({ viewport: { width: 2560, height: 1440 }, deviceScaleFactor: 2 });
      const errors = [], failures = [], requests = [];
      page.on('pageerror', error => errors.push(error.message));
      page.on('console', message => { if (message.type() === 'error' && /THREE\.WebGLProgram|VALIDATE_STATUS|shader error|INVALID_(?:VALUE|OPERATION)/i.test(message.text())) errors.push(message.text()); });
      page.on('response', response => { if (response.status() >= 400) failures.push(`${response.status()} ${response.url()}`); });
      page.on('request', request => requests.push(request.url()));
      await page.addInitScript(mode => {
        // Remove APIs absent in Safari 14; a user-agent string alone does not
        // reproduce its missing WebGL 2 or JavaScript APIs.
        window.structuredClone = undefined;
        Array.prototype.at = undefined;
        const original = HTMLCanvasElement.prototype.getContext;
        HTMLCanvasElement.prototype.getContext = function(type, ...args) {
          if (mode !== 'webgl2' && type === 'webgl2') return null;
          if (mode === 'no-webgl' && /webgl/.test(type)) return null;
          return original.call(this, type, ...args);
        };
      }, mode);
      await page.goto(origin, { waitUntil: 'domcontentloaded' });
      if (mode === 'no-webgl') {
        await page.waitForSelector('.data-view-groups');
        assert.equal(await page.locator('.data-view-groups > section').count(), 9);
        const selector = page.locator('select[data-boundary="land-system-change"]');
        const dataset = await selector.locator('option').nth(1).getAttribute('value');
        await selector.selectOption(dataset);
        await page.waitForSelector('.data-view-table tbody tr');
        assert.equal(await page.locator('.data-view-table tbody tr').count(), 50);
        const first = await page.locator('.data-view-table tbody tr').first().textContent();
        await page.locator('[data-page="1"]').click();
        assert.notEqual(await page.locator('.data-view-table tbody tr').first().textContent(), first);
      } else {
        await page.waitForFunction(() => window.__PB_DEBUG__?.overview().ready, null, { timeout: 60000 });
        await page.locator('[data-control="co2"]').click();
        await page.waitForFunction(() => !window.__PB_DEBUG__.motion().focusing && !document.getElementById('local-field').classList.contains('loading'), null, { timeout: 60000 });
        assert.equal(await page.locator('#analysis-kind').textContent(), 'PLANETARY REFERENCE');
        const graphics = await page.evaluate(() => window.__PB_DEBUG__.graphics());
        assert.equal(graphics.legacy, mode === 'webgl1');
        assert(graphics.calls > 0, 'GPU submitted actual draw calls');
        assert(graphics.width * graphics.height <= 16000000 + 1);
        assert(graphics.strokes.minimumWidth >= 1.1);
        assert(graphics.strokes.paths > 30);
        assert.equal(requests.some(url => url.includes('/compat/app.js')), mode === 'webgl1');
        // Exercise actual source picking, controls, and the extent geometry.
        await page.locator('#analysis-toggle').click();
        await page.locator('#entity-filter').selectOption({ index: 1 }, { force: true });
        await page.locator('#entity-filter').selectOption('', { force: true });
        const row = page.locator('#source-record');
        await row.fill('3'); await row.dispatchEvent('change');
        assert.equal(await page.locator('#analysis-kind').textContent(), 'LOCAL ANALYSIS');
        for (const [width, height] of [[2560, 1440], [1440, 900], [1280, 720]]) {
          await page.setViewportSize({ width, height });
          await page.waitForTimeout(200);
          const layout = await page.evaluate(() => {
            const canvas = document.getElementById('scene').getBoundingClientRect();
            const sheet = document.querySelector('.index-sheet').getBoundingClientRect();
            const ruler = document.getElementById('risk-ruler').getBoundingClientRect();
            return { width: canvas.width, height: canvas.height, scroll: document.documentElement.scrollWidth, sheet: sheet.bottom, ruler: ruler.top };
          });
          assert.equal(layout.width, width); assert.equal(layout.height, height);
          assert.equal(layout.scroll, width); assert(layout.sheet < layout.ruler);
        }
        reports.push({ engine, mode, graphics });
      }
      await page.screenshot({ path: join(output, `${engine}-${mode}.png`) });
      assert.deepEqual(errors, []);
      assert.deepEqual(failures, []);
      await page.close();
    }
    await browser.close(); browser = null;
  }
  console.log(JSON.stringify({ origin, output, reports, noWebglDataView: true, errors: [] }, null, 2));
} finally {
  await browser?.close();
  await new Promise(resolve => server.close(resolve));
}
