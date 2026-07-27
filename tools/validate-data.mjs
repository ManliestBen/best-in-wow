#!/usr/bin/env node
// Validates every app/data/**/*.data.js file against docs/DATA-SCHEMA.md.
// Usage: node tools/validate-data.mjs
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { loadAll, mergeBis, SLOT_KEYS, QUALITIES, SOURCE_TYPES, BRACKET_IDS, FACTIONS } from './lib.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const { core, bis, quests, errors, files } = loadAll(join(root, 'app', 'data'));

const warnings = [];
const fatal = [...errors];

if (!core) fatal.push('core.data.js: missing or failed to parse (kind "core")');

mergeBis(bis, fatal); // reports duplicate-bracket collisions across files

for (const cd of bis) {
  const tag = `${cd.__file} [${cd.expansion}/${cd.class}]`;
  for (const field of ['expansion', 'class', 'className', 'classColor', 'specs']) {
    if (!cd[field]) fatal.push(`${tag}: missing "${field}"`);
  }

  for (const spec of cd.specs || []) {
    const stag = `${tag} spec "${spec.id}"`;
    if (!spec.id || !spec.name || !spec.role) fatal.push(`${stag}: needs id, name, role`);
    if (spec.role && !['tank', 'healer', 'dps'].includes(spec.role)) fatal.push(`${stag}: bad role "${spec.role}"`);
    if (!spec.statPriority) warnings.push(`${stag}: no statPriority`);
    if (!(spec.brackets || []).length) fatal.push(`${stag}: no brackets`);

    for (const br of spec.brackets || []) {
      const btag = `${stag} bracket "${br.id}"`;
      if (!BRACKET_IDS.includes(br.id)) fatal.push(`${btag}: unknown bracket id`);
      const slots = br.slots || {};
      let filled = 0;
      for (const [slotKey, items] of Object.entries(slots)) {
        if (!SLOT_KEYS.includes(slotKey)) { fatal.push(`${btag}: unknown slot key "${slotKey}"`); continue; }
        if (!Array.isArray(items) || !items.length) { warnings.push(`${btag}: slot "${slotKey}" is empty`); continue; }
        filled++;
        if (!items.some(it => (it.rank || 1) === 1)) warnings.push(`${btag}/${slotKey}: no rank-1 item`);
        for (const it of items) {
          const itag = `${btag}/${slotKey} "${it.name}"`;
          if (!it.name) fatal.push(`${btag}/${slotKey}: item without name`);
          if (it.id == null) warnings.push(`${itag}: no item id (Wowhead tooltip unavailable)`);
          if (it.quality && !QUALITIES.includes(it.quality)) fatal.push(`${itag}: bad quality "${it.quality}"`);
          if (it.faction && !FACTIONS.includes(it.faction)) fatal.push(`${itag}: bad faction "${it.faction}"`);
          if (it.source && it.source.type && !SOURCE_TYPES.includes(it.source.type))
            fatal.push(`${itag}: bad source.type "${it.source.type}"`);
          if (!it.source) warnings.push(`${itag}: no source`);
        }
      }
      if (['preraid', 'p1', 'p2', 'p3', 'p5'].includes(br.id) && filled < 13)
        warnings.push(`${btag}: only ${filled}/15 slots filled`);
    }
  }
}

for (const qd of quests) {
  const tag = `${qd.__file}`;
  if (!qd.expansion) fatal.push(`${tag}: missing expansion`);
  for (const inst of qd.instances || []) {
    const itag = `${tag} [${inst.id}]`;
    if (!inst.id || !inst.name || !inst.type) fatal.push(`${itag}: needs id, name, type`);
    if (inst.type && !['dungeon', 'raid'].includes(inst.type)) fatal.push(`${itag}: bad type`);
    if (!(inst.quests || []).length) warnings.push(`${itag}: no quests`);
    for (const q of inst.quests || []) {
      if (!q.name) fatal.push(`${itag}: quest without name`);
      if (q.faction && !FACTIONS.includes(q.faction)) fatal.push(`${itag} "${q.name}": bad faction`);
      if (!q.id) warnings.push(`${itag} "${q.name}": no quest id (no Wowhead link)`);
    }
  }
}

// ---- report ----
const itemCount = bis.reduce((n, cd) => n + (cd.specs || []).reduce((m, s) =>
  m + (s.brackets || []).reduce((k, b) =>
    k + Object.values(b.slots || {}).reduce((j, arr) => j + (Array.isArray(arr) ? arr.length : 0), 0), 0), 0), 0);
const questCount = quests.reduce((n, qd) => n + (qd.instances || []).reduce((m, i) => m + (i.quests || []).length, 0), 0);

console.log(`Scanned ${files.length} data files: ${bis.length} class datasets, ` +
  `${quests.reduce((n, q) => n + (q.instances || []).length, 0)} instances, ` +
  `${itemCount} item entries, ${questCount} quests.\n`);

if (fatal.length) {
  console.log(`FATAL (${fatal.length}):`);
  for (const e of fatal) console.log('  ✗ ' + e);
}
if (warnings.length) {
  console.log(`\nWarnings (${warnings.length}):`);
  for (const w of warnings) console.log('  ⚠ ' + w);
}
if (!fatal.length) console.log('\n✓ All data files pass schema validation.');
process.exit(fatal.length ? 1 : 0);
