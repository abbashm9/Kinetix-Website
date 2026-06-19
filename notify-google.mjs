#!/usr/bin/env node
/**
 * notify-google.mjs
 *
 * Submits new/changed pages to IndexNow (Bing, Yandex, Naver, Seznam).
 * NOTE: Google does NOT participate in IndexNow — for Google, rely on the
 *       sitemap (auto-crawled) + manual "Request Indexing" in Search Console.
 * Run this after every push (git has no real "post-push" hook).
 *
 * Usage:
 *   node notify-google.mjs           — submits URLs changed in the last commit
 *   node notify-google.mjs --all     — submits every URL in sitemap.xml
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname   = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL    = 'https://www.kinetixkw.com';
const INDEXNOW_KEY = '133b33a82e5547a99825f7b67a53f7e5';
const SITEMAP_FILE = path.join(__dirname, 'sitemap.xml');
const MODE_ALL     = process.argv.includes('--all');

// ── Get URLs ──────────────────────────────────────────────────────────────────

function getUrlsFromSitemap() {
  if (!fs.existsSync(SITEMAP_FILE)) return [];
  const xml = fs.readFileSync(SITEMAP_FILE, 'utf8');
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1].trim());
}

function getChangedUrlsFromGit() {
  try {
    const diff = execSync(
      'git diff --name-only HEAD~1 HEAD 2>/dev/null || git diff --name-only HEAD',
      { encoding: 'utf8' }
    );
    return diff.trim().split('\n')
      .filter(f => f.endsWith('.html') && !f.startsWith('documents/') && !f.startsWith('brand_assets/'))
      .map(f => {
        if (f === 'index.html') return `${SITE_URL}/`;
        if (f.endsWith('/index.html')) return `${SITE_URL}/${f.replace('index.html', '')}`;
        return `${SITE_URL}/${f}`;
      })
      .filter(Boolean);
  } catch {
    return [];
  }
}

// ── Submit to IndexNow ────────────────────────────────────────────────────────

function post(hostname, path, body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const req = https.request({
      hostname, path, method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(data) },
    }, res => {
      let out = '';
      res.on('data', d => out += d);
      res.on('end', () => resolve({ status: res.statusCode, body: out }));
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function submitToIndexNow(urls) {
  const payload = {
    host: 'www.kinetixkw.com',
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  // Submit to IndexNow API (hits Bing, Yandex, Naver, Seznam simultaneously — not Google)
  const res = await post('api.indexnow.org', '/indexnow', payload);
  const ok = res.status >= 200 && res.status < 300;
  console.log(`  ${ok ? '✓' : '✗'} IndexNow [${res.status}] — ${urls.length} URL(s) submitted`);
  if (!ok) console.log('    Response:', res.body);
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log('\n🔔 Kinetix — Google/Bing Indexing Notifier (IndexNow)\n');

  const urls = MODE_ALL ? getUrlsFromSitemap() : getChangedUrlsFromGit();

  if (!urls.length) {
    console.log('ℹ No HTML pages changed in this commit — nothing to submit.\n');
    return;
  }

  console.log(`📡 Submitting ${urls.length} URL(s):`);
  urls.forEach(u => console.log(`   ${u}`));
  console.log('');

  await submitToIndexNow(urls);
  console.log('\n✅ Done. Pages queued for indexing on Bing, Yandex, Naver & Seznam.');
  console.log('   (Google ignores IndexNow — use the sitemap + Search Console for Google.)\n');
}

main().catch(err => { console.error('Error:', err.message); process.exit(1); });
