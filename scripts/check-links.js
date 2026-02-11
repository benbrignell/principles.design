#!/usr/bin/env node

/**
 * Link Checker for principles.design examples
 *
 * Scans all _examples/*.md files for the `link:` front matter field,
 * checks if each URL returns a valid response, and for any dead links,
 * queries the Wayback Machine for an archived version.
 *
 * Usage:
 *   node scripts/check-links.js              # Report only
 *   node scripts/check-links.js --update     # Report and update dead links with Wayback URLs
 *   node scripts/check-links.js --mark-dead  # Add link-dead: true to files with no archive
 *
 * Output:
 *   - Console summary of working, dead, and archived links
 *   - scripts/link-report.json with full results
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const EXAMPLES_DIR = path.join(__dirname, '..', '_examples');
const REPORT_PATH = path.join(__dirname, 'link-report.json');
const CONCURRENCY = 5;
const REQUEST_TIMEOUT = 10000;
const UPDATE_MODE = process.argv.includes('--update');
const MARK_DEAD_MODE = process.argv.includes('--mark-dead');

function getExampleFiles() {
  return fs.readdirSync(EXAMPLES_DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => path.join(EXAMPLES_DIR, f));
}

function extractLink(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/^link:\s*(.+)$/m);
  if (match && match[1].trim()) {
    return match[1].trim();
  }
  return null;
}

function isValidUrl(url) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

function checkUrl(url) {
  return new Promise((resolve) => {
    if (!isValidUrl(url)) {
      resolve({ status: 0, ok: false, error: 'invalid URL' });
      return;
    }
    const protocol = url.startsWith('https') ? https : http;
    const req = protocol.get(url, { timeout: REQUEST_TIMEOUT, headers: { 'User-Agent': 'principles.design-link-checker/1.0' } }, (res) => {
      // Follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        resolve({ status: res.statusCode, redirect: res.headers.location, ok: true });
      } else if (res.statusCode >= 200 && res.statusCode < 400) {
        resolve({ status: res.statusCode, ok: true });
      } else {
        resolve({ status: res.statusCode, ok: false });
      }
      res.resume();
    });
    req.on('error', (err) => {
      resolve({ status: 0, ok: false, error: err.message });
    });
    req.on('timeout', () => {
      req.destroy();
      resolve({ status: 0, ok: false, error: 'timeout' });
    });
  });
}

function queryWayback(url) {
  return new Promise((resolve) => {
    const apiUrl = `https://archive.org/wayback/available?url=${encodeURIComponent(url)}`;
    https.get(apiUrl, { timeout: REQUEST_TIMEOUT }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.archived_snapshots && json.archived_snapshots.closest && json.archived_snapshots.closest.available) {
            resolve(json.archived_snapshots.closest.url);
          } else {
            resolve(null);
          }
        } catch {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

function updateFile(filePath, oldUrl, newUrl) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(`link: ${oldUrl}`, `link: ${newUrl}`);
  fs.writeFileSync(filePath, content, 'utf8');
}

async function processInBatches(items, batchSize, fn) {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(fn));
    results.push(...batchResults);
  }
  return results;
}

async function main() {
  console.log('Scanning _examples/ for links...\n');

  const files = getExampleFiles();
  const entries = [];

  for (const filePath of files) {
    const link = extractLink(filePath);
    if (link) {
      entries.push({ file: path.basename(filePath), filePath, url: link });
    }
  }

  console.log(`Found ${entries.length} examples with links (${files.length - entries.length} with no link)\n`);
  console.log('Checking links...\n');

  const results = {
    working: [],
    redirected: [],
    dead: [],
    archived: [],
    noArchive: [],
  };

  await processInBatches(entries, CONCURRENCY, async (entry) => {
    const check = await checkUrl(entry.url);

    if (check.ok && check.redirect) {
      results.redirected.push({ ...entry, status: check.status, redirect: check.redirect });
      process.stdout.write(`↗ ${entry.file}\n`);
    } else if (check.ok) {
      results.working.push({ ...entry, status: check.status });
      process.stdout.write(`✓ ${entry.file}\n`);
    } else {
      // Dead link — check Wayback Machine
      const waybackUrl = await queryWayback(entry.url);
      if (waybackUrl) {
        results.archived.push({ ...entry, status: check.status, error: check.error, waybackUrl });
        process.stdout.write(`⟳ ${entry.file} → Wayback found\n`);

        if (UPDATE_MODE) {
          updateFile(entry.filePath, entry.url, waybackUrl);
          process.stdout.write(`  ✎ Updated\n`);
        }
      } else {
        results.noArchive.push({ ...entry, status: check.status, error: check.error });
        process.stdout.write(`✗ ${entry.file}\n`);

        if (MARK_DEAD_MODE && isValidUrl(entry.url)) {
          let content = fs.readFileSync(entry.filePath, 'utf8');
          if (!content.includes('link-dead: true')) {
            content = content.replace(/^(link:\s*.+)$/m, '$1\nlink-dead: true');
            fs.writeFileSync(entry.filePath, content, 'utf8');
            process.stdout.write(`  ✎ Marked as dead\n`);
          }
        }
      }
    }
  });

  // Summary
  console.log('\n--- Summary ---');
  console.log(`✓ Working:      ${results.working.length}`);
  console.log(`↗ Redirected:   ${results.redirected.length}`);
  console.log(`⟳ Dead (archived): ${results.archived.length}`);
  console.log(`✗ Dead (no archive): ${results.noArchive.length}`);
  console.log(`Total checked:  ${entries.length}`);

  if (UPDATE_MODE && results.archived.length > 0) {
    console.log(`\n✎ Updated ${results.archived.length} files with Wayback Machine URLs.`);
  }

  if (results.noArchive.length > 0) {
    console.log('\n--- Dead links with no archive ---');
    for (const entry of results.noArchive) {
      console.log(`  ${entry.file}: ${entry.url}`);
    }
  }

  if (results.archived.length > 0 && !UPDATE_MODE) {
    console.log('\n--- Dead links with Wayback archive available ---');
    for (const entry of results.archived) {
      console.log(`  ${entry.file}`);
      console.log(`    Original: ${entry.url}`);
      console.log(`    Archive:  ${entry.waybackUrl}`);
    }
    console.log('\nRun with --update to replace dead links with Wayback URLs.');
  }

  // Write report
  const report = {
    date: new Date().toISOString(),
    summary: {
      working: results.working.length,
      redirected: results.redirected.length,
      deadArchived: results.archived.length,
      deadNoArchive: results.noArchive.length,
      total: entries.length,
    },
    working: results.working.map(e => ({ file: e.file, url: e.url })),
    redirected: results.redirected.map(e => ({ file: e.file, url: e.url, redirect: e.redirect })),
    archived: results.archived.map(e => ({ file: e.file, original: e.url, wayback: e.waybackUrl })),
    noArchive: results.noArchive.map(e => ({ file: e.file, url: e.url, error: e.error })),
  };

  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
  console.log(`\nFull report saved to scripts/link-report.json`);
}

main().catch(console.error);
