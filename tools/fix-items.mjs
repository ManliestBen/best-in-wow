#!/usr/bin/env node
// Applies the audit's findings to app/data: drops placements the class can't
// use or the spec doesn't want, clears off-hands paired with two-handers, and
// backfills emptied slots from the pool of already-verified items, scored
// against the spec's own priorities.
//
//   node tools/audit-items.mjs --json /tmp/audit.json
//   node tools/fix-items.mjs /tmp/audit.json --dry-run
//   node tools/fix-items.mjs /tmp/audit.json
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { findDataFiles, extractPayloads } from './lib.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const CACHE_DIR = process.env.BISC_CACHE ||
  '/tmp/claude-1000/-home-bmanley-code-wow-helpers/a2dcf095-db2a-461d-991f-ad22fea661a7/scratchpad/tooltip-cache';

const auditPath = process.argv[2];
const dryRun = process.argv.includes('--dry-run');
if (!auditPath || !existsSync(auditPath)) {
  console.error('usage: node tools/fix-items.mjs <audit.json> [--dry-run]');
  process.exit(1);
}
const { findings } = JSON.parse(readFileSync(auditPath, 'utf8'));

/* ---------------- tooltip facts (from the audit's cache) ---------------- */
function plainText(html) {
  return String(html || '')
    .replace(/<br\s*\/?>/gi, '\n').replace(/<\/tr>/gi, '\n').replace(/<\/td>/gi, ' | ')
    .replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/[ \t]+/g, ' ');
}
const ARMOR_TYPES = ['Cloth', 'Leather', 'Mail', 'Plate'];
const WEAPON_TYPES = ['Dagger', 'Fist Weapon', 'One-Handed Swords', 'Two-Handed Swords',
  'Sword', 'Axe', 'Mace', 'Polearm', 'Staff', 'Bow', 'Gun', 'Crossbow', 'Wand', 'Thrown',
  'Shield', 'Idol', 'Libram', 'Totem'];
const SLOT_WORDS = ['Head', 'Neck', 'Shoulder', 'Back', 'Chest', 'Robe', 'Wrist', 'Hands',
  'Waist', 'Legs', 'Feet', 'Finger', 'Trinket', 'Ranged', 'Relic'];

const facts = new Map();
for (const f of readdirSync(CACHE_DIR)) {
  if (!f.endsWith('.json')) continue;
  const id = Number(f.replace('.json', ''));
  let raw;
  try { raw = JSON.parse(readFileSync(join(CACHE_DIR, f), 'utf8')); } catch { continue; }
  if (!raw || !raw.tooltip) continue;
  const text = plainText(raw.tooltip);
  const t = { id, name: raw.name, stats: {}, reqLevel: 0, itemLevel: 0, armor: 0, armorType: null, weaponType: null, invSlot: null, hand: null, classes: null };
  const req = text.match(/Requires Level (\d+)/); if (req) t.reqLevel = Number(req[1]);
  const ilvl = text.match(/Item Level (\d+)/); if (ilvl) t.itemLevel = Number(ilvl[1]);
  const arm = text.match(/(\d+) Armor/); if (arm) t.armor = Number(arm[1]);
  const cls = text.match(/Classes: ([A-Za-z, ]+)/);
  if (cls) t.classes = cls[1].split(',').map(s => s.trim().toLowerCase());
  for (const m of text.matchAll(/\+(\d+) ([A-Za-z ]+?)(?=\s|$|\|)/g)) {
    t.stats[m[2].trim()] = (t.stats[m[2].trim()] || 0) + Number(m[1]);
  }
  for (const m of text.matchAll(/damage and healing done by magical spells[^0-9]*(\d+)/gi)) {
    t.stats['Spell Power'] = (t.stats['Spell Power'] || 0) + Number(m[1]);
  }
  for (const m of text.matchAll(/Restores (\d+) mana per 5/gi)) {
    t.stats['Mp5'] = (t.stats['Mp5'] || 0) + Number(m[1]);
  }
  for (const m of text.matchAll(/Increases? (?:your )?([a-z ]+?) (?:rating )?by (\d+)/gi)) {
    const k = m[1].trim().replace(/\b\w/g, c => c.toUpperCase());
    t.stats[k] = (t.stats[k] || 0) + Number(m[2]);
  }
  for (const a of ARMOR_TYPES) if (new RegExp(`(^|\\|)\\s*${a}\\s*(\\||$)`, 'm').test(text)) { t.armorType = a; break; }
  for (const w of WEAPON_TYPES) {
    if (new RegExp(`(^|\\|)\\s*${w}s?\\s*(\\||$)`, 'm').test(text)) { t.weaponType = w.replace(/^(One|Two)-Handed /, ''); break; }
  }
  if (/Two-Hand/.test(text)) t.hand = 'two';
  else if (/One-Hand/.test(text)) t.hand = 'one';
  else if (/Main Hand/.test(text)) t.hand = 'main';
  else if (/Held In Off-hand/.test(text)) t.hand = 'held';
  else if (/\bOff Hand\b/.test(text)) t.hand = 'off';
  for (const s of SLOT_WORDS) if (new RegExp(`(^|\\|)\\s*${s}\\s*(\\||$)`, 'm').test(text)) { t.invSlot = s; break; }
  facts.set(id, t);
}

/* ---------------- rules (mirrors audit-items.mjs) ---------------- */
const ARMOR_RULES = {
  warrior: { max: 'Plate', from: 40, below: 'Mail' }, paladin: { max: 'Plate', from: 40, below: 'Mail' },
  hunter: { max: 'Mail', from: 40, below: 'Leather' }, shaman: { max: 'Mail', from: 40, below: 'Leather' },
  rogue: { max: 'Leather' }, druid: { max: 'Leather' },
  priest: { max: 'Cloth' }, mage: { max: 'Cloth' }, warlock: { max: 'Cloth' },
};
const ARMOR_ORDER = { Cloth: 0, Leather: 1, Mail: 2, Plate: 3 };
const WEAPONS = {
  warrior: ['Dagger', 'Fist Weapon', 'Sword', 'Axe', 'Mace', 'Polearm', 'Staff', 'Bow', 'Gun', 'Crossbow', 'Thrown', 'Shield'],
  paladin: ['Sword', 'Axe', 'Mace', 'Polearm', 'Shield', 'Libram'],
  hunter: ['Dagger', 'Fist Weapon', 'Sword', 'Axe', 'Polearm', 'Staff', 'Bow', 'Gun', 'Crossbow'],
  rogue: ['Dagger', 'Fist Weapon', 'Sword', 'Mace', 'Bow', 'Gun', 'Crossbow', 'Thrown'],
  priest: ['Dagger', 'Mace', 'Staff', 'Wand'],
  shaman: ['Dagger', 'Fist Weapon', 'Axe', 'Mace', 'Staff', 'Shield', 'Totem'],
  mage: ['Dagger', 'Sword', 'Staff', 'Wand'], warlock: ['Dagger', 'Sword', 'Staff', 'Wand'],
  druid: ['Dagger', 'Fist Weapon', 'Mace', 'Polearm', 'Staff', 'Idol'],
};
const AGI_STRICT = 'agility-strict', AGI = 'agility-pref', STR = 'strength', CAST = 'caster', TANK = 'tank';
const SPEC_PROFILE = {
  'hunter/beastmastery': AGI_STRICT, 'hunter/marksmanship': AGI_STRICT, 'hunter/survival': AGI_STRICT,
  'rogue/combat': AGI, 'rogue/assassination': AGI, 'druid/feral-cat': AGI, 'shaman/enhancement': AGI,
  'warrior/arms': STR, 'warrior/fury': STR, 'paladin/retribution': STR,
  'warrior/protection': TANK, 'paladin/protection': TANK, 'druid/feral-tank': TANK,
  'paladin/holy': CAST, 'priest/holy': CAST, 'priest/discipline': CAST, 'priest/shadow': CAST,
  'shaman/elemental': CAST, 'shaman/restoration': CAST, 'druid/balance': CAST,
  'druid/restoration': CAST, 'mage/fire': CAST, 'mage/arcane': CAST, 'mage/frost': CAST,
  'warlock/destruction': CAST, 'warlock/affliction': CAST, 'warlock/demonology': CAST,
};
const BRACKET_LEVELS = {
  lvl19: [10, 19], lvl29: [20, 29], lvl39: [30, 39], lvl49: [40, 49],
  lvl59: [50, 57], lvl60: [58, 64], lvl65: [65, 69],
  preraid: [70, 70], p1: [70, 70], p2: [70, 70], p3: [70, 70], p4: [70, 70], p5: [70, 70],
};
const SLOT_INV = {
  head: ['Head'], neck: ['Neck'], shoulder: ['Shoulder'], back: ['Back'],
  chest: ['Chest', 'Robe'], wrist: ['Wrist'], hands: ['Hands'], waist: ['Waist'],
  legs: ['Legs'], feet: ['Feet'], finger: ['Finger'], trinket: ['Trinket'],
  ranged: ['Ranged', 'Relic'],
};
const ARMOR_SLOTS = new Set(['head', 'shoulder', 'chest', 'wrist', 'hands', 'waist', 'legs', 'feet', 'back']);

function stat(t, names) {
  let n = 0;
  for (const [k, v] of Object.entries(t.stats)) {
    if (names.some(x => k.toLowerCase().includes(x.toLowerCase()))) n += v;
  }
  return n;
}
function score(t, profile) {
  const agi = stat(t, ['Agility']), str = stat(t, ['Strength']), sta = stat(t, ['Stamina']);
  const int = stat(t, ['Intellect']), spi = stat(t, ['Spirit']);
  const sp = stat(t, ['Spell Power', 'Spell Damage', 'Damage And Healing']);
  const heal = stat(t, ['Healing']), mp5 = stat(t, ['Mp5', 'Mana Per 5']);
  const ap = stat(t, ['Attack Power']), hit = stat(t, ['Hit']), crit = stat(t, ['Critical', 'Crit']);
  const def = stat(t, ['Defense']), dodge = stat(t, ['Dodge']), parry = stat(t, ['Parry']), block = stat(t, ['Block']);
  switch (profile) {
    case AGI_STRICT: return agi * 2 + ap + hit * 1.2 + crit * 1.2 + sta * 0.3;
    case AGI: return agi * 2 + str * 0.6 + ap + hit * 1.2 + crit * 1.2 + sta * 0.3;
    case STR: return str * 2 + agi * 0.6 + ap + hit * 1.2 + crit * 1.2 + sta * 0.4;
    case TANK: return sta * 2 + def * 3 + dodge * 2 + parry * 2 + block * 1.5 + str * 0.7 + agi * 0.7 + t.armor * 0.01;
    case CAST: return sp * 2 + heal * 1.2 + int + spi * 0.6 + mp5 * 2 + hit * 1.2 + crit * 1.2 + sta * 0.2;
    default: return sta + agi + str + int;
  }
}
function legalFor(t, cls, slot, hiLevel, lowLevel) {
  if (!t) return false;
  if (t.classes && !t.classes.includes(cls)) return false;
  if (t.reqLevel > hiLevel) return false;
  // Plenty of items show no "Requires Level" line at all (Terokk's Quill, an
  // item-level 115 polearm, was landing in the level 10-19 bracket), so gate
  // on item level too. Outland gear runs far above character level, hence the
  // wider band once a bracket reaches the 58+ range.
  const ilvlCap = hiLevel <= 39 ? hiLevel + 8 : (hiLevel <= 57 ? hiLevel + 12 : hiLevel + 50);
  if (t.itemLevel > ilvlCap) return false;
  // and don't drop level-15 gear into the level-60s
  if (hiLevel >= 40 && t.reqLevel > 0 && t.reqLevel < lowLevel - 12) return false;
  if (hiLevel >= 40 && t.itemLevel > 0 && t.itemLevel < lowLevel - 8) return false;
  if (SLOT_INV[slot]) {
    if (!t.invSlot || !SLOT_INV[slot].includes(t.invSlot)) return false;
  } else if (slot === 'mainhand') {
    if (!['one', 'two', 'main'].includes(t.hand)) return false;
    if (!(WEAPONS[cls] || []).includes(t.weaponType)) return false;
  } else if (slot === 'offhand') {
    if (!['one', 'off', 'held'].includes(t.hand)) return false;
    if (t.weaponType && !(WEAPONS[cls] || []).includes(t.weaponType)) return false;
  }
  if (ARMOR_SLOTS.has(slot) && t.armorType) {
    const rule = ARMOR_RULES[cls];
    if (rule) {
      const allowed = (rule.from && hiLevel < rule.from) ? (rule.below || rule.max) : rule.max;
      if (ARMOR_ORDER[t.armorType] > ARMOR_ORDER[allowed]) return false;
    }
  }
  return true;
}

/* ---------------- build the removal / clear sets ---------------- */
const REMOVE_KINDS = new Set(['wrong-primary-stat', 'armor-too-heavy', 'weapon-proficiency',
  'level-too-high', 'offhand-is-mainhand-only', 'offhand-is-2h', 'wrong-name', 'class-restricted',
  'unverifiable']);
const removals = new Set();
const clearOffhand = new Set();
for (const f of findings) {
  if (REMOVE_KINDS.has(f.kind)) removals.add(`${f.cls}|${f.spec}|${f.bracket}|${f.slot}|${f.id}`);
  if (f.kind === 'two-hander-with-offhand') clearOffhand.add(`${f.cls}|${f.spec}|${f.bracket}`);
}

/* ---------------- item registry for backfill ---------------- */
const files = findDataFiles(join(root, 'app', 'data'));
const parsed = [];
for (const file of files) {
  const src = readFileSync(file, 'utf8');
  const errs = [];
  const payloads = extractPayloads(src, file, errs);
  parsed.push({ file, payloads });
}
const registry = new Map();   // id -> canonical entry
for (const { payloads } of parsed) {
  for (const p of payloads) {
    if (!p.specs || p.expansion !== 'tbc') continue;
    for (const spec of p.specs) for (const br of spec.brackets || []) {
      for (const items of Object.values(br.slots || {})) {
        for (const it of items || []) {
          if (it.id && it.id > 0 && !registry.has(it.id)) registry.set(it.id, it);
        }
      }
    }
  }
}

/* ---------------- apply ---------------- */
const log = { removed: 0, offhandCleared: 0, backfilled: [], leftEmpty: [] };

for (const { file, payloads } of parsed) {
  let touched = false;
  for (const p of payloads) {
    if (!p.specs || p.expansion !== 'tbc') continue;
    const cls = p.class;
    for (const spec of p.specs) {
      const profile = SPEC_PROFILE[`${cls}/${spec.id}`];
      for (const br of spec.brackets || []) {
        const [lo, hi] = BRACKET_LEVELS[br.id] || [0, 70];
        const slots = br.slots || {};

        if (clearOffhand.has(`${cls}|${spec.id}|${br.id}`) && slots.offhand) {
          delete slots.offhand;
          log.offhandCleared++; touched = true;
        }

        for (const [slot, items] of Object.entries(slots)) {
          const kept = (items || []).filter(it =>
            !removals.has(`${cls}|${spec.id}|${br.id}|${slot}|${it.id}`));
          if (kept.length !== (items || []).length) {
            log.removed += (items.length - kept.length); touched = true;
          }
          kept.forEach((it, i) => { it.rank = i + 1; });
          slots[slot] = kept;
        }

        // backfill anything now empty (rings/trinkets want two)
        const used = new Set();
        for (const items of Object.values(slots)) for (const it of items) used.add(it.id);
        const mh = (slots.mainhand || [])[0];
        const mhIsTwoHand = mh && facts.get(mh.id) && facts.get(mh.id).hand === 'two';

        for (const slot of Object.keys(SLOT_INV).concat(['mainhand', 'offhand'])) {
          const want = (slot === 'finger' || slot === 'trinket') ? 2 : 1;
          const have = (slots[slot] || []).length;
          if (have >= want) continue;
          if (slot === 'offhand' && (mhIsTwoHand || clearOffhand.has(`${cls}|${spec.id}|${br.id}`))) continue;
          if (!(slot in slots)) continue;   // never invent a slot the authors omitted

          const candidates = [];
          for (const [id, t] of facts) {
            if (used.has(id)) continue;
            if (!registry.has(id)) continue;
            if (!legalFor(t, cls, slot, hi, lo)) continue;
            const s = score(t, profile);
            if (s <= 0) continue;
            candidates.push({ id, s });
          }
          candidates.sort((a, b) => b.s - a.s);
          for (let i = 0; i < want - have && i < candidates.length; i++) {
            const pick = registry.get(candidates[i].id);
            const entry = JSON.parse(JSON.stringify(pick));
            entry.rank = (slots[slot] || []).length + 1;
            (slots[slot] = slots[slot] || []).push(entry);
            used.add(entry.id);
            log.backfilled.push(`${cls}/${spec.id}/${br.id}/${slot}: ${entry.name} (${entry.id})`);
            touched = true;
          }
          if ((slots[slot] || []).length === 0) {
            log.leftEmpty.push(`${cls}/${spec.id}/${br.id}/${slot}`);
            delete slots[slot];
            touched = true;
          }
        }
      }
    }
  }
  if (touched && !dryRun) {
    const body = payloads.map(p => `WOWDATA.register(${JSON.stringify(p, null, 2)});`).join('\n\n');
    writeFileSync(file, body + '\n');
  }
}

console.log(`removed placements:   ${log.removed}`);
console.log(`off-hands cleared:    ${log.offhandCleared}`);
console.log(`slots backfilled:     ${log.backfilled.length}`);
console.log(`slots left empty:     ${log.leftEmpty.length}`);
for (const b of log.backfilled.slice(0, 25)) console.log('  + ' + b);
if (log.backfilled.length > 25) console.log(`  … ${log.backfilled.length - 25} more`);
for (const b of log.leftEmpty.slice(0, 15)) console.log('  - empty: ' + b);
if (dryRun) console.log('\n(dry run — nothing written)');
