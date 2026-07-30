#!/usr/bin/env node
// Regenerates the leveling brackets for every class into
// app/data/tbc/<class>-leveling.data.js.
//
// Why generated rather than hand-authored: the leveling lists needed to be
// split into 5-level bands, every pick has to obey class proficiency and the
// spec's stat priority, and each slot wants a ranked top 3. That's a scoring
// problem over the verified item pool, so it's done in code — deterministically
// and re-runnably — instead of by hand.
//
//   node tools/gen-leveling.mjs --dry-run
//   node tools/gen-leveling.mjs
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { findDataFiles, extractPayloads } from './lib.mjs';
import { loadFacts, legalFor, score, suitsProfile, BANDS, SPEC_PROFILE, WEAPONS, SLOT_ORDER, TANK } from './items.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dryRun = process.argv.includes('--dry-run');

const TOP_N = 3;                       // Best / Better / Good
const TOP_N_MULTI = 4;                 // rings and trinkets are worn in pairs
const facts = loadFacts();

/* ---------------- registry of verified entries ---------------- */
const registry = new Map();
const classMeta = new Map();
for (const file of findDataFiles(join(root, 'app', 'data'))) {
  const errs = [];
  for (const p of extractPayloads(readFileSync(file, 'utf8'), file, errs)) {
    if (!p.specs || p.expansion !== 'tbc') continue;
    classMeta.set(p.class, { className: p.className, classColor: p.classColor, specs: p.specs.map(s => ({ id: s.id, name: s.name, role: s.role })) });
    for (const spec of p.specs) for (const br of spec.brackets || []) {
      for (const items of Object.values(br.slots || {})) {
        for (const it of items || []) if (it.id > 0 && !registry.has(it.id)) registry.set(it.id, it);
      }
    }
  }
}

/* ---------------- generate ---------------- */
const summary = [];

for (const [cls, meta] of [...classMeta].sort()) {
  const payload = {
    kind: 'bis', expansion: 'tbc', class: cls, className: meta.className,
    classColor: meta.classColor,
    specs: meta.specs.map(specMeta => {
      const profile = SPEC_PROFILE[`${cls}/${specMeta.id}`];
      const brackets = BANDS.map(band => {
        const slots = {};
        // main hand first: a two-hander means there is no off-hand at all
        let mainIsTwoHand = false;
        // One item can only be worn once, and most of these are quest rewards
        // or unique-equipped, so no id may appear in two slots of one bracket
        // (Outlaw Sabre was showing up as both main hand and off hand).
        const takenInBracket = new Set();
        for (const slot of SLOT_ORDER) {
          if (slot === 'offhand' && mainIsTwoHand) continue;
          const want = (slot === 'finger' || slot === 'trinket') ? TOP_N_MULTI : TOP_N;
          const picks = [];
          for (const [id, t] of facts) {
            if (!registry.has(id)) continue;
            if (takenInBracket.has(id)) continue;
            if (!legalFor(t, cls, slot, band.range[1])) continue;
            if (!suitsProfile(t, profile, slot)) continue;
            // tanks who can hold a shield shouldn't be handed a two-hander
            if (slot === 'mainhand' && profile === TANK && (WEAPONS[cls] || []).includes('Shield') && t.hand === 'two') continue;
            const s = score(t, profile, slot);
            if (s <= 0) continue;
            picks.push({ id, s });
          }
          picks.sort((a, b) => b.s - a.s || a.id - b.id);
          const chosen = picks.slice(0, want);
          if (!chosen.length) continue;
          if (slot === 'mainhand') {
            const t = facts.get(chosen[0].id);
            mainIsTwoHand = t && t.hand === 'two';
          }
          slots[slot] = chosen.map((c, i) => {
            takenInBracket.add(c.id);
            const entry = JSON.parse(JSON.stringify(registry.get(c.id)));
            entry.rank = i + 1;
            return entry;
          });
        }
        return { id: band.id, levelRange: band.range, slots };
      });
      return { id: specMeta.id, name: specMeta.name, role: specMeta.role, brackets };
    }),
  };

  const filled = payload.specs.reduce((n, s) => n + s.brackets.reduce((m, b) => m + Object.keys(b.slots).length, 0), 0);
  const possible = payload.specs.length * BANDS.length * SLOT_ORDER.length;
  summary.push(`${cls}: ${filled}/${possible} slot lists (${Math.round(100 * filled / possible)}%)`);

  const out = join(root, 'app', 'data', 'tbc', `${cls}-leveling.data.js`);
  if (!dryRun) writeFileSync(out, `WOWDATA.register(${JSON.stringify(payload, null, 2)});\n`);
}

console.log(`Bands: ${BANDS.map(b => `${b.range[0]}-${b.range[1]}`).join(', ')}`);
console.log(`Top ${TOP_N} per slot (${TOP_N_MULTI} for rings/trinkets)`);
for (const s of summary) console.log('  ' + s);
if (dryRun) console.log('(dry run — nothing written)');
