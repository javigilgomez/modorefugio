// Genera PDFs (A4) y OG images (1200x630) a partir de dist/ con Playwright.
// Escribe en dist/ (para el deploy) y en public/ (para que `astro dev` también los sirva).
import { chromium } from 'playwright';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const ROOT = path.resolve('dist');
if (!fs.existsSync(ROOT)) { console.error('No existe dist/. Ejecuta astro build antes.'); process.exit(1); }
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2', '.json': 'application/json' };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let f = path.join(ROOT, p);
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html');
  if (!fs.existsSync(f)) { res.writeHead(404); return res.end('404'); }
  res.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
}).listen(0);
const BASE = `http://127.0.0.1:${server.address().port}`;
const jobs = { pdf: [], og: [] };
const dirs = (d) => (fs.existsSync(path.join(ROOT, d)) ? fs.readdirSync(path.join(ROOT, d)) : []);
for (const id of dirs('playbook')) if (fs.existsSync(path.join(ROOT, 'playbook', id, 'imprimir', 'index.html')) && id !== 'pack') jobs.pdf.push([`/playbook/${id}/imprimir/`, `playbook-${id}.pdf`]);
for (const id of dirs('preparate')) if (fs.existsSync(path.join(ROOT, 'preparate', id, 'imprimir', 'index.html'))) jobs.pdf.push([`/preparate/${id}/imprimir/`, `checklist-${id}.pdf`]);
jobs.pdf.push(['/playbook/pack/imprimir/', 'modo-refugio-playbook-completo.pdf']);
jobs.pdf.push(['/descargas/kit-basico-apagon/imprimir/', 'kit-basico-apagon.pdf']);
for (const id of dirs('og/tpl')) jobs.og.push([`/og/tpl/${id}/`, `${id}.png`]);
let browser;
try { browser = await chromium.launch({ channel: 'chrome' }); } catch { try { browser = await chromium.launch(); } catch (e) { console.warn('⚠ Sin Chrome/Chromium: se omiten PDFs y OG.', e.message); server.close(); process.exit(0); } }
const out = (sub, name, buf) => { for (const r of [path.join(ROOT, sub), path.resolve('public', sub)]) { fs.mkdirSync(r, { recursive: true }); fs.writeFileSync(path.join(r, name), buf); } };
const page = await browser.newPage();
for (const [url, name] of jobs.pdf) {
  await page.goto(BASE + url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const buf = await page.pdf({ format: 'A4', printBackground: true, preferCSSPageSize: true,
    displayHeaderFooter: true, headerTemplate: '<span></span>',
    footerTemplate: '<div style="font:7px Inter,sans-serif;color:#7D7767;width:100%;padding:0 13mm;display:flex;justify-content:space-between"><span>modorefugio.com · Información divulgativa: sigue siempre las indicaciones oficiales · 112</span><span><span class="pageNumber"></span>/<span class="totalPages"></span></span></div>' });
  out('pdf', name, buf); console.log('PDF', name, Math.round(buf.length / 1024) + ' kB');
}
await page.setViewportSize({ width: 1200, height: 630 });
for (const [url, name] of jobs.og) {
  await page.goto(BASE + url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  out('og', name, await page.screenshot({ type: 'png' }));
}
console.log('OG', jobs.og.length);
await browser.close(); server.close();
