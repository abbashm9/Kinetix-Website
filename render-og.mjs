import puppeteer from 'puppeteer';
import fs from 'fs';

const url = process.argv[2] || 'http://localhost:3000/brand_assets/og-image-source.html';
const out = process.argv[3] || 'brand_assets/og-image.png';

const chromeExec = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const browser = await puppeteer.launch({
  headless: true,
  executablePath: fs.existsSync(chromeExec) ? chromeExec : undefined,
  args: ['--no-sandbox', '--disable-dev-shm-usage']
});
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
await new Promise(r => setTimeout(r, 600));
await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();
console.log(`Saved: ${out}`);
