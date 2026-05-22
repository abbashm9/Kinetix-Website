import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src  = path.join(__dirname, 'og-image-src.html');
const dest = path.join(__dirname, 'brand_assets', 'og-image.png');

const chromeExec = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const browser = await puppeteer.launch({
  headless: true,
  executablePath: fs.existsSync(chromeExec) ? chromeExec : undefined,
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
await page.goto('file://' + src, { waitUntil: 'networkidle0', timeout: 15000 });
await new Promise(r => setTimeout(r, 1200)); // let fonts render
await page.screenshot({ path: dest, fullPage: false, clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();
console.log('Saved: brand_assets/og-image.png  (1200×630 @2x)');
