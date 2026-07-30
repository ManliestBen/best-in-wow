#!/usr/bin/env node
// Maintains data/item-pool.json — every verified item entry we have ever had,
// keyed by item id.
//
// The generated leveling brackets are rebuilt from this pool, so the pool has
// to outlive any single generation run. It exists because a parser bug once
// hid every cloak: regenerating dropped them from the files, and because the
// pool was derived from those same files, the entries were lost outright.
// Keeping the pool separate and additive means a bad run can never destroy
// item knowledge — rerun the generator and it comes back.
//
//   node tools/build-pool.mjs                    # merge current data into the pool
//   node tools/build-pool.mjs --from-git <ref>   # also harvest an older commit
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { findDataFiles, extractPayloads } from './lib.mjs';
import { loadFacts } from './items.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const POOL = join(root, 'data', 'item-pool.json');
mkdirSync(dirname(POOL), { recursive: true });

const pool = existsSync(POOL) ? JSON.parse(readFileSync(POOL, 'utf8')) : {};
const before = Object.keys(pool).length;

function harvest(source, label) {
  let added = 0;
  const errs = [];
  for (const p of extractPayloads(source, label, errs)) {
    if (!p.specs) continue;
    for (const spec of p.specs) for (const br of spec.brackets || []) {
      for (const items of Object.values(br.slots || {})) {
        for (const it of items || []) {
          if (!it.id || it.id <= 0) continue;
          const key = String(it.id);
          // Keep the richest version of an entry we have seen.
          const existing = pool[key];
          const candidate = { ...it };
          delete candidate.rank;               // rank is per-bracket, not per-item
          if (!existing) { pool[key] = candidate; added++; continue; }
          for (const [k, v] of Object.entries(candidate)) {
            if (existing[k] === undefined || existing[k] === null) existing[k] = v;
          }
          if (candidate.source && existing.source) {
            for (const [k, v] of Object.entries(candidate.source)) {
              if (existing.source[k] === undefined || existing.source[k] === null) existing.source[k] = v;
            }
          }
        }
      }
    }
  }
  return added;
}

let added = 0;
for (const file of findDataFiles(join(root, 'app', 'data'))) {
  added += harvest(readFileSync(file, 'utf8'), file);
}

const gitIdx = process.argv.indexOf('--from-git');
if (gitIdx >= 0) {
  const ref = process.argv[gitIdx + 1];
  const files = execSync(`git ls-tree -r --name-only ${ref} -- app/data`, { cwd: root })
    .toString().split('\n').filter(f => f.endsWith('.data.js'));
  for (const f of files) {
    try {
      added += harvest(execSync(`git show ${ref}:${f}`, { cwd: root, maxBuffer: 64 * 1024 * 1024 }).toString(), f);
    } catch { /* file absent in that revision */ }
  }
  console.log(`harvested ${files.length} files from ${ref}`);
}

// Wowhead is authoritative for names: historical files carried a few entries
// whose id pointed at a different item than the recorded name.
const facts = loadFacts();
let renamed = 0;
for (const [id, entry] of Object.entries(pool)) {
  const t = facts.get(Number(id));
  if (t && t.name && entry.name !== t.name) {
    entry.name = t.name;
    renamed++;
  }
  if (t && t.quality != null) {
    const Q = ['poor', 'common', 'uncommon', 'rare', 'epic', 'legendary'];
    if (Q[t.quality]) entry.quality = Q[t.quality];
  }
}
if (renamed) console.log(`corrected ${renamed} name(s) from tooltips`);

writeFileSync(POOL, JSON.stringify(pool, null, 1) + '\n');
console.log(`pool: ${before} -> ${Object.keys(pool).length} items (+${added} new)`);
