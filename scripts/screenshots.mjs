// Capturas desktop + móvil. Uso: BASE=http://localhost:4321 node scripts/screenshots.mjs [ruta1 ruta2 ...]
import { chromium } from 'playwright';
import fs from 'node:fs';
const BASE = process.env.BASE || 'http://localhost:4321';
const OUT = process.env.OUT || '/workspace/modorefugio/screenshots';
const pages = process.argv.slice(2).length ? process.argv.slice(2) : [
  '/', '/playbook/', '/playbook/apagon/', '/playbook/caida-mundial-de-internet/', '/preparate/agua/', '/preparate/agua/avanzado/', '/equipo/estaciones-de-energia-portatiles/',
];
fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch({ channel: 'chrome' }).catch(() => chromium.launch());
const vps = { desktop: { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 }, mobile: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true } };
for (const [name, opts] of Object.entries(vps)) {
  const ctx = await browser.newContext({ ...opts, locale: 'es-ES' });
  await ctx.addInitScript(() => localStorage.setItem('mr-consent-v1', JSON.stringify({ v: 1, analytics: false, ads: false, ts: Date.now() })));
  const page = await ctx.newPage();
  for (const p of pages) {
    await page.goto(BASE + p, { waitUntil: 'networkidle' });
    await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); } window.scrollTo(0, 0); });
    await page.waitForTimeout(400);
    const slug = p === '/' ? 'home' : p.replace(/^\/|\/$/g, '').replace(/\//g, '_');
    const file = `${OUT}/${slug}-${name}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log(file);
  }
  await ctx.close();
}
await browser.close();
