#!/usr/bin/env node
// Compiles app/data/**/*.data.js into addon/BiSCompanion/Data.lua so the web
// app and the in-game addon share one source of truth.
// Usage: node tools/build-addon-data.mjs
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { loadAll, mergeBis, sourceText } from './lib.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const { core, bis: rawBis, quests, errors } = loadAll(join(root, 'app', 'data'));
const bis = mergeBis(rawBis, errors);

if (errors.length) {
  console.error('Refusing to build — fix these first (see tools/validate-data.mjs):');
  for (const e of errors) console.error('  ✗ ' + e);
  process.exit(1);
}
if (!core) { console.error('core.data.js missing'); process.exit(1); }

const CLASS_TOKEN = {
  warrior: 'WARRIOR', paladin: 'PALADIN', hunter: 'HUNTER', rogue: 'ROGUE',
  priest: 'PRIEST', shaman: 'SHAMAN', mage: 'MAGE', warlock: 'WARLOCK',
  druid: 'DRUID', deathknight: 'DEATHKNIGHT',
};

// ---- assemble per-expansion structure ----
const data = {};
for (const [expId, expCfg] of Object.entries(core.expansions)) {
  data[expId] = {
    name: expCfg.name,
    // name and sub stay separate: the addon's bracket button is narrow and
    // shows the short name, with the description in the menu and tooltip.
    brackets: expCfg.brackets.map(b => ({ id: b.id, name: b.name, sub: b.sub || null })),
    classes: {},
    instances: [],
  };
}

for (const cd of bis) {
  const exp = data[cd.expansion];
  if (!exp) continue;
  const token = CLASS_TOKEN[cd.class];
  if (!token) { console.warn(`skipping unknown class "${cd.class}"`); continue; }
  exp.classes[token] = {
    name: cd.className,
    specs: (cd.specs || []).map(spec => ({
      id: spec.id,
      name: spec.name,
      role: spec.role,
      statPriority: spec.statPriority || null,
      notes: spec.notes || null,
      enchants: spec.enchants && Object.keys(spec.enchants).length ? spec.enchants : null,
      brackets: (spec.brackets || []).map(br => ({
        id: br.id,
        slots: Object.fromEntries(Object.entries(br.slots || {}).map(([k, items]) => [k,
          (items || []).map(it => ({
            id: it.id || 0,
            name: it.name,
            quality: it.quality || 'rare',
            rank: it.rank || 1,
            faction: it.faction && it.faction !== 'both' ? it.faction : null,
            sourceText: sourceText(it) || null,
            sourceType: (it.source && it.source.type) || null,
            sourceInstance: (it.source && it.source.instance) || null,
            profession: (it.source && it.source.profession) || null,
            bop: it.bop ? true : null,
            hand: it.hand || null,
            note: it.note || null,
          })),
        ])),
      })),
    })),
  };
}

const PHASE_ORDER = { classic: -1, preraid: 0, p1: 1, p2: 2, p3: 3, p4: 4, p5: 5 };
for (const qd of quests) {
  const exp = data[qd.expansion];
  if (!exp) continue;
  for (const inst of qd.instances || []) {
    exp.instances.push({
      id: inst.id,
      name: inst.name,
      type: inst.type,
      zone: inst.zone || null,
      levelRange: inst.levelRange || null,
      phase: inst.phase || null,
      notes: inst.notes || null,
      attunement: inst.attunement || null,
      quests: (inst.quests || []).map(q => ({
        id: q.id || 0,
        name: q.name,
        faction: q.faction && q.faction !== 'both' ? q.faction : null,
        questGiver: q.questGiver || null,
        prereq: q.prereq || null,
        note: q.note || null,
        rewards: q.rewards && q.rewards.length
          ? q.rewards.map(r => ({ id: r.id || 0, name: r.name, quality: r.quality || null }))
          : null,
      })),
      __phase: PHASE_ORDER[inst.phase] ?? 9,
      __type: inst.type === 'dungeon' ? 0 : 1,
    });
  }
}
for (const exp of Object.values(data)) {
  exp.instances.sort((a, b) => a.__type - b.__type || a.__phase - b.__phase || a.name.localeCompare(b.name));
  for (const i of exp.instances) { delete i.__phase; delete i.__type; }
}

// ---- Lua serialization ----
function luaStr(s) {
  return '"' + String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '') + '"';
}
function luaKey(k) {
  return /^[A-Za-z_][A-Za-z0-9_]*$/.test(k) ? k : '[' + luaStr(k) + ']';
}
function toLua(v, indent) {
  const pad = '  '.repeat(indent);
  const padIn = '  '.repeat(indent + 1);
  if (v === null || v === undefined) return 'nil';
  if (typeof v === 'number') return String(v);
  if (typeof v === 'boolean') return v ? 'true' : 'false';
  if (typeof v === 'string') return luaStr(v);
  if (Array.isArray(v)) {
    if (!v.length) return '{}';
    return '{\n' + v.map(x => padIn + toLua(x, indent + 1)).join(',\n') + ',\n' + pad + '}';
  }
  const entries = Object.entries(v).filter(([, val]) => val !== null && val !== undefined);
  if (!entries.length) return '{}';
  return '{\n' + entries.map(([k, val]) => `${padIn}${luaKey(k)} = ${toLua(val, indent + 1)}`).join(',\n') + ',\n' + pad + '}';
}

const lua = `-- BiSCompanion Data.lua
-- GENERATED by tools/build-addon-data.mjs — do not edit by hand.
-- Source of truth: app/data/**/*.data.js (schema: docs/DATA-SCHEMA.md)

BISC_DATA = ${toLua(data, 0)}
`;

const out = join(root, 'addon', 'BiSCompanion', 'Data.lua');
writeFileSync(out, lua);

const stats = Object.entries(data).map(([exp, d]) =>
  `${exp}: ${Object.keys(d.classes).length} classes, ${d.instances.length} instances`).join(' | ');
console.log(`✓ Wrote ${out}\n  ${stats}\n  ${Math.round(lua.length / 1024)} KB of Lua`);
