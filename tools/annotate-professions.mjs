#!/usr/bin/env node
// Tags crafted items with the profession that makes them and whether they bind
// on pickup, so the app and addon can hide crafted BoP gear the character can't
// actually make. BoE crafted pieces stay visible — anyone can buy those.
//
//   node tools/annotate-professions.mjs [--dry-run]
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { findDataFiles, extractPayloads } from './lib.mjs';
import { loadFacts } from './items.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dryRun = process.argv.includes('--dry-run');
const facts = loadFacts();

export const PROFESSIONS = ['Alchemy', 'Blacksmithing', 'Enchanting', 'Engineering',
  'Jewelcrafting', 'Leatherworking', 'Tailoring'];

function professionFrom(text) {
  const t = String(text || '');
  for (const p of PROFESSIONS) if (new RegExp(p, 'i').test(t)) return p;
  if (/smith/i.test(t)) return 'Blacksmithing';
  return null;
}

let tagged = 0, bopTagged = 0, unknown = [];
for (const file of findDataFiles(join(root, 'app', 'data'))) {
  const src = readFileSync(file, 'utf8');
  const errs = [];
  const payloads = extractPayloads(src, file, errs);
  if (errs.length) continue;
  let touched = false;

  for (const p of payloads) {
    if (!p.specs) continue;
    for (const spec of p.specs) for (const br of spec.brackets || []) {
      for (const items of Object.values(br.slots || {})) {
        for (const it of items || []) {
          if (!it.source || it.source.type !== 'crafted') continue;
          const prof = professionFrom(`${it.source.detail || ''} ${it.note || ''}`);
          if (prof && it.source.profession !== prof) { it.source.profession = prof; tagged++; touched = true; }
          if (!prof && !it.source.profession) unknown.push(`${it.name} (${it.id})`);

          // BoP crafted gear can only come from your own hands; BoE can be bought.
          const t = facts.get(it.id);
          const bop = t ? !!t.bindsOnPickup
            : /\bBoP\b/i.test(`${it.source.detail || ''} ${it.note || ''}`);
          if (bop !== !!it.bop) { it.bop = bop || undefined; bopTagged += bop ? 1 : 0; touched = true; }
        }
      }
    }
  }
  if (touched && !dryRun) {
    writeFileSync(file, payloads.map(x => `WOWDATA.register(${JSON.stringify(x, null, 2)});`).join('\n\n') + '\n');
  }
}

console.log(`profession tags written: ${tagged}`);
console.log(`bind-on-pickup tags:    ${bopTagged}`);
if (unknown.length) {
  console.log(`crafted items with no identifiable profession: ${unknown.length}`);
  for (const u of unknown.slice(0, 12)) console.log('  ? ' + u);
}
if (dryRun) console.log('(dry run — nothing written)');
