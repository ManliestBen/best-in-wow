#!/usr/bin/env node
// Audits every item in app/data against what the class can actually equip and
// what the spec actually wants, using Wowhead tooltips as ground truth.
//
//   node tools/audit-items.mjs                 # audit everything
//   node tools/audit-items.mjs --class hunter  # one class
//   node tools/audit-items.mjs --json out.json # machine-readable worklist
//
// Tooltips are cached under the scratchpad so reruns are instant.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { loadAll, mergeBis } from './lib.mjs';
import { BRACKET_LEVELS as SHARED_BRACKET_LEVELS, suitsProfile, loadFacts as sharedLoadFacts, parseTooltip as sharedParse } from './items.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const CACHE_DIR = process.env.BISC_CACHE ||
  '/tmp/claude-1000/-home-bmanley-code-wow-helpers/a2dcf095-db2a-461d-991f-ad22fea661a7/scratchpad/tooltip-cache';
mkdirSync(CACHE_DIR, { recursive: true });

const args = process.argv.slice(2);
const onlyClass = args.includes('--class') ? args[args.indexOf('--class') + 1] : null;
const jsonOut = args.includes('--json') ? args[args.indexOf('--json') + 1] : null;

/* ---------------- tooltip fetching + parsing ---------------- */
function cachePath(id) { return join(CACHE_DIR, `${id}.json`); }

async function fetchTooltip(id) {
  const p = cachePath(id);
  if (existsSync(p)) {
    try { return JSON.parse(readFileSync(p, 'utf8')); } catch { /* refetch */ }
  }
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(`https://nether.wowhead.com/tbc/tooltip/item/${id}`);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const json = await res.json();
      writeFileSync(p, JSON.stringify(json));
      return json;
    } catch (e) {
      if (attempt === 2) return { __error: String(e) };
      await new Promise(r => setTimeout(r, 300 * (attempt + 1)));
    }
  }
}

function plainText(html) {
  return String(html || '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/tr>/gi, '\n')
    .replace(/<\/td>/gi, ' | ')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/[ \t]+/g, ' ');
}

const ARMOR_TYPES = ['Cloth', 'Leather', 'Mail', 'Plate'];
const WEAPON_TYPES = ['Dagger', 'Fist Weapon', 'One-Handed Swords', 'Two-Handed Swords',
  'Sword', 'Axe', 'Mace', 'Polearm', 'Staff', 'Bow', 'Gun', 'Crossbow', 'Wand', 'Thrown',
  'Fishing Pole', 'Shield', 'Idol', 'Libram', 'Totem', 'Sigil'];

function parseTooltip(id, raw) {
  if (!raw || raw.__error || !raw.tooltip) return { id, missing: true };
  const text = plainText(raw.tooltip);
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);

  const out = {
    id, name: raw.name, quality: raw.quality,
    stats: {}, reqLevel: 0, itemLevel: 0,
    armorType: null, weaponType: null, invSlot: null, hand: null,
    classes: null, text,
  };

  const req = text.match(/Requires Level (\d+)/);
  if (req) out.reqLevel = Number(req[1]);
  const ilvl = text.match(/Item Level (\d+)/);
  if (ilvl) out.itemLevel = Number(ilvl[1]);
  const cls = text.match(/Classes: ([A-Za-z, ]+)/);
  if (cls) out.classes = cls[1].split(',').map(s => s.trim()).filter(Boolean);

  for (const m of text.matchAll(/\+(\d+) ([A-Za-z ]+?)(?=\s|$|\|)/g)) {
    const stat = m[2].trim();
    if (stat) out.stats[stat] = (out.stats[stat] || 0) + Number(m[1]);
  }
  // "Equip: Increases attack power by 26." style
  for (const m of text.matchAll(/damage and healing done by magical spells[^0-9]*(\d+)/gi)) {
    out.stats['Spell Power'] = (out.stats['Spell Power'] || 0) + Number(m[1]);
  }
  for (const m of text.matchAll(/healing done by (?:your )?spells[^0-9]*(\d+)/gi)) {
    out.stats['Healing'] = (out.stats['Healing'] || 0) + Number(m[1]);
  }
  for (const m of text.matchAll(/Restores (\d+) mana per 5/gi)) {
    out.stats['Mp5'] = (out.stats['Mp5'] || 0) + Number(m[1]);
  }
  for (const m of text.matchAll(/Increases? (?:your )?([a-z ]+?) (?:rating )?by (\d+)/gi)) {
    const stat = m[1].trim().replace(/\b\w/g, c => c.toUpperCase());
    out.stats[stat] = (out.stats[stat] || 0) + Number(m[2]);
  }

  for (const a of ARMOR_TYPES) {
    if (new RegExp(`(^|\\|)\\s*${a}\\s*(\\||$)`, 'm').test(text)) { out.armorType = a; break; }
  }
  for (const w of WEAPON_TYPES) {
    if (new RegExp(`(^|\\|)\\s*${w}s?\\s*(\\||$)`, 'm').test(text)) {
      out.weaponType = w.replace(/^(One|Two)-Handed /, '');
      break;
    }
  }
  if (/Two-Hand/.test(text)) out.hand = 'two';
  else if (/One-Hand/.test(text)) out.hand = 'one';
  else if (/Main Hand/.test(text)) out.hand = 'main';
  else if (/Held In Off-hand/.test(text)) out.hand = 'held';
  else if (/\bOff Hand\b/.test(text)) out.hand = 'off';

  const SLOTS = ['Head', 'Neck', 'Shoulder', 'Back', 'Chest', 'Robe', 'Wrist', 'Hands',
    'Waist', 'Legs', 'Feet', 'Finger', 'Trinket', 'Ranged', 'Relic', 'Shirt', 'Tabard'];
  for (const s of SLOTS) {
    if (new RegExp(`(^|\\|)\\s*${s}\\s*(\\||$)`, 'm').test(text)) { out.invSlot = s; break; }
  }
  return out;
}

/* ---------------- class / spec rules (TBC) ---------------- */
// Heaviest armor a class may wear, and from which level.
const ARMOR_RULES = {
  warrior: { max: 'Plate', from: 40, below: 'Mail' },
  paladin: { max: 'Plate', from: 40, below: 'Mail' },
  hunter: { max: 'Mail', from: 40, below: 'Leather' },
  shaman: { max: 'Mail', from: 40, below: 'Leather' },
  rogue: { max: 'Leather' },
  druid: { max: 'Leather' },
  priest: { max: 'Cloth' },
  mage: { max: 'Cloth' },
  warlock: { max: 'Cloth' },
  deathknight: { max: 'Plate', from: 55, below: 'Mail' },
};
const ARMOR_ORDER = { Cloth: 0, Leather: 1, Mail: 2, Plate: 3 };

// Weapon types each class can equip in TBC.
const WEAPONS = {
  warrior: ['Dagger', 'Fist Weapon', 'Sword', 'Axe', 'Mace', 'Polearm', 'Staff', 'Bow', 'Gun', 'Crossbow', 'Thrown', 'Shield'],
  paladin: ['Sword', 'Axe', 'Mace', 'Polearm', 'Shield', 'Libram'],
  hunter: ['Dagger', 'Fist Weapon', 'Sword', 'Axe', 'Polearm', 'Staff', 'Bow', 'Gun', 'Crossbow'],
  rogue: ['Dagger', 'Fist Weapon', 'Sword', 'Mace', 'Bow', 'Gun', 'Crossbow', 'Thrown'],
  priest: ['Dagger', 'Mace', 'Staff', 'Wand'],
  shaman: ['Dagger', 'Fist Weapon', 'Axe', 'Mace', 'Staff', 'Shield', 'Totem'],
  mage: ['Dagger', 'Sword', 'Staff', 'Wand'],
  warlock: ['Dagger', 'Sword', 'Staff', 'Wand'],
  druid: ['Dagger', 'Fist Weapon', 'Mace', 'Polearm', 'Staff', 'Idol'],
  deathknight: ['Sword', 'Axe', 'Mace', 'Polearm', 'Sigil'],
};
// Classes that may not equip a shield at all (for offhand sanity).
const NO_SHIELD = new Set(['hunter', 'rogue', 'priest', 'mage', 'warlock', 'druid', 'deathknight']);

// What each spec actually scales with.
// AGI_STRICT: Strength does nothing (hunters get ranged AP from Agility only).
// AGI_PREF:   Agility is better, but Strength still converts to attack power,
//             so TBC enhancement/feral/rogue gear legitimately carries it.
const AGI_STRICT = 'agility-strict', AGI = 'agility-pref', STR = 'strength',
      CAST = 'caster', TANK = 'tank';
const SPEC_PROFILE = {
  'hunter/beastmastery': AGI_STRICT, 'hunter/marksmanship': AGI_STRICT,
  'hunter/survival': AGI_STRICT,
  'rogue/combat': AGI, 'rogue/assassination': AGI,
  'druid/feral-cat': AGI, 'shaman/enhancement': AGI,
  'warrior/arms': STR, 'warrior/fury': STR, 'paladin/retribution': STR,
  'deathknight/frost': STR, 'deathknight/unholy': STR, 'deathknight/blood': STR,
  'warrior/protection': TANK, 'paladin/protection': TANK, 'druid/feral-tank': TANK,
  'paladin/holy': CAST, 'priest/holy': CAST, 'priest/discipline': CAST, 'priest/shadow': CAST,
  'shaman/elemental': CAST, 'shaman/restoration': CAST, 'druid/balance': CAST,
  'druid/restoration': CAST, 'mage/fire': CAST, 'mage/arcane': CAST, 'mage/frost': CAST,
  'warlock/destruction': CAST, 'warlock/affliction': CAST, 'warlock/demonology': CAST,
};
const CASTER_STATS = ['Intellect', 'Spirit', 'Spell Power', 'Spell Damage', 'Healing',
  'Damage And Healing', 'Spell Critical Strike', 'Spell Hit', 'Mana Per 5', 'Mp5', 'Spell Haste'];

const BRACKET_LEVELS = SHARED_BRACKET_LEVELS;
const ARMOR_SLOTS = new Set(['head', 'shoulder', 'chest', 'wrist', 'hands', 'waist', 'legs', 'feet', 'back']);
// Weapon value is dominated by damage-per-second, not stats, so judging a
// weapon by its stat line produces nonsense (Verigan's Fist is a perfectly
// good leveling mace for Retribution despite carrying caster stats).
const STAT_JUDGED_SLOTS = new Set(['head', 'neck', 'shoulder', 'back', 'chest',
  'wrist', 'hands', 'waist', 'legs', 'feet', 'finger']);
// Items whose worth is an effect rather than a stat line.
const EFFECT_ITEMS = new Set([
  8345,   // Wolfshead Helm - energy on shapeshift, the iconic feral piece
  9449,   // Manual Crowd Pummeler - haste on use
  11122,  // Carrot on a Stick - mount speed
  4381,   // Minor Recombobulator
]);

function statSum(stats, names) {
  let n = 0;
  for (const [k, v] of Object.entries(stats)) {
    if (names.some(name => k.toLowerCase().includes(name.toLowerCase()))) n += v;
  }
  return n;
}

/* ---------------- audit ---------------- */
const { bis: rawBis, errors } = loadAll(join(root, 'app', 'data'));
const bis = mergeBis(rawBis, errors);

const entries = [];   // every placement of an item
for (const cd of bis) {
  if (cd.expansion !== 'tbc') continue;
  if (onlyClass && cd.class !== onlyClass) continue;
  for (const spec of cd.specs || []) {
    for (const br of spec.brackets || []) {
      for (const [slot, items] of Object.entries(br.slots || {})) {
        (items || []).forEach((it, i) => {
          entries.push({ cls: cd.class, spec: spec.id, bracket: br.id, slot, item: it, index: i });
        });
      }
    }
  }
}

const ids = [...new Set(entries.map(e => e.item.id).filter(id => id && id > 0))];
process.stderr.write(`Auditing ${entries.length} placements / ${ids.length} unique items…\n`);

const info = new Map();
let done = 0;
const QUEUE = ids.slice();
await Promise.all(Array.from({ length: 12 }, async () => {
  while (QUEUE.length) {
    const id = QUEUE.shift();
    info.set(id, parseTooltip(id, await fetchTooltip(id)));
    if (++done % 250 === 0) process.stderr.write(`  ${done}/${ids.length}\n`);
  }
}));

const findings = [];
function flag(e, kind, detail) {
  findings.push({
    kind, cls: e.cls, spec: e.spec, bracket: e.bracket, slot: e.slot,
    rank: e.item.rank || 1, id: e.item.id, name: e.item.name, detail,
  });
}

for (const e of entries) {
  const ti = info.get(e.item.id);
  if (!ti || ti.missing) { flag(e, 'unverifiable', 'no tooltip returned'); continue; }
  const [loLevel, hiLevel] = BRACKET_LEVELS[e.bracket] || [0, 70];
  const profile = SPEC_PROFILE[`${e.cls}/${e.spec}`];

  if (ti.name && e.item.name && ti.name.toLowerCase() !== e.item.name.toLowerCase()) {
    flag(e, 'wrong-name', `data says "${e.item.name}", Wowhead says "${ti.name}"`);
  }
  if (ti.classes && !ti.classes.map(c => c.toLowerCase()).includes(e.cls)) {
    flag(e, 'class-restricted', `usable only by ${ti.classes.join('/')}`);
  }
  if (ti.reqLevel > hiLevel) {
    flag(e, 'level-too-high', `requires level ${ti.reqLevel}, bracket caps at ${hiLevel}`);
  }

  // armor class legality
  if (ARMOR_SLOTS.has(e.slot) && ti.armorType) {
    const rule = ARMOR_RULES[e.cls];
    if (rule) {
      const allowed = (rule.from && hiLevel < rule.from) ? (rule.below || rule.max) : rule.max;
      if (ARMOR_ORDER[ti.armorType] > ARMOR_ORDER[allowed]) {
        flag(e, 'armor-too-heavy',
          `${ti.armorType} but ${e.cls} can wear at most ${allowed} at level ${hiLevel}`);
      }
    }
  }

  // weapon proficiency + shields
  if (['mainhand', 'offhand', 'ranged'].includes(e.slot) && ti.weaponType) {
    const allowed = WEAPONS[e.cls] || [];
    if (!allowed.includes(ti.weaponType)) {
      flag(e, 'weapon-proficiency', `${ti.weaponType} is not usable by ${e.cls}`);
    }
    if (ti.weaponType === 'Shield' && NO_SHIELD.has(e.cls)) {
      flag(e, 'weapon-proficiency', `${e.cls} cannot equip shields`);
    }
  }
  if (e.slot === 'offhand' && ti.hand === 'two') {
    flag(e, 'offhand-is-2h', 'two-handed weapon listed in the off-hand slot');
  }
  if (e.slot === 'mainhand' && ti.hand === 'held') {
    flag(e, 'mainhand-is-held', 'held-in-off-hand item listed as main hand');
  }
  if (e.slot === 'offhand' && ti.hand === 'main') {
    flag(e, 'offhand-is-mainhand-only', 'main-hand-only weapon listed in the off-hand slot');
  }

  // does the item serve the spec at all?
  const agi = statSum(ti.stats, ['Agility']);
  const str = statSum(ti.stats, ['Strength']);
  const casterStat = statSum(ti.stats, CASTER_STATS);
  const stam = statSum(ti.stats, ['Stamina']);
  const anyStat = Object.keys(ti.stats).length > 0;
  if (!suitsProfile(ti, profile, e.slot)) {
    const agi = statSum(ti.stats, ['Agility']), str = statSum(ti.stats, ['Strength']);
    flag(e, 'wrong-primary-stat',
      `stats do not serve a ${profile} spec (+${str} Strength, +${agi} Agility)`);
  }
}

// One item cannot be equipped in two places at once.
const seenPerBracket = new Map();
for (const e of entries) {
  const k = `${e.cls}/${e.spec}/${e.bracket}`;
  if (!seenPerBracket.has(k)) seenPerBracket.set(k, new Map());
  const m = seenPerBracket.get(k);
  if (!m.has(e.item.id)) m.set(e.item.id, []);
  m.get(e.item.id).push(e);
}
for (const [, m] of seenPerBracket) {
  for (const [, list] of m) {
    const slots = [...new Set(list.map(e => e.slot))];
    if (slots.length <= 1) continue;
    const e = list[0];
    const ti = info.get(e.item.id);
    const bothHands = slots.length === 2 && slots.includes('mainhand') && slots.includes('offhand');
    const questOnly = (e.item.source && e.item.source.type) === 'quest';
    const unique = ti && ti.unique;
    // Dual-wielding two copies of a raid drop is legitimate; a quest reward or a
    // unique-equipped item can only ever be worn once.
    if (bothHands && !questOnly && !unique) continue;
    flag(e, 'same-item-two-slots',
      `also listed under ${slots.filter(s => s !== e.slot).join(', ')}` +
      (questOnly ? ' (quest reward — only obtainable once)' : unique ? ' (unique-equipped)' : ''));
  }
}

// 2H mainhand paired with any offhand, per spec+bracket
const byBracket = new Map();
for (const e of entries) {
  const k = `${e.cls}/${e.spec}/${e.bracket}`;
  if (!byBracket.has(k)) byBracket.set(k, {});
  const g = byBracket.get(k);
  (g[e.slot] = g[e.slot] || []).push(e);
}
for (const [k, g] of byBracket) {
  const mh = (g.mainhand || []).find(e => (e.item.rank || 1) === 1) || (g.mainhand || [])[0];
  const oh = (g.offhand || []).find(e => (e.item.rank || 1) === 1) || (g.offhand || [])[0];
  if (!mh || !oh) continue;
  const mhi = info.get(mh.item.id);
  if (mhi && mhi.hand === 'two') {
    findings.push({
      kind: 'two-hander-with-offhand', cls: mh.cls, spec: mh.spec, bracket: mh.bracket,
      slot: 'mainhand/offhand', rank: 1, id: mh.item.id, name: mh.item.name,
      detail: `2H "${mh.item.name}" is worn alongside off-hand "${oh.item.name}" (${oh.item.id})`,
      offhandId: oh.item.id,
    });
  }
}

/* ---------------- report ---------------- */
const byKind = {};
for (const f of findings) (byKind[f.kind] = byKind[f.kind] || []).push(f);
const kinds = Object.entries(byKind).sort((a, b) => b[1].length - a[1].length);

console.log(`\n=== Item audit: ${findings.length} findings across ${entries.length} placements ===\n`);
for (const [kind, list] of kinds) {
  console.log(`${kind}: ${list.length}`);
  const byClass = {};
  for (const f of list) (byClass[f.cls] = byClass[f.cls] || []).push(f);
  for (const [cls, cl] of Object.entries(byClass).sort((a, b) => b[1].length - a[1].length)) {
    console.log(`   ${cls}: ${cl.length}`);
    for (const f of cl.slice(0, 4)) {
      console.log(`     ${f.spec}/${f.bracket}/${f.slot} rank${f.rank} — ${f.name} (${f.id}): ${f.detail}`);
    }
    if (cl.length > 4) console.log(`     … ${cl.length - 4} more`);
  }
}
if (jsonOut) {
  writeFileSync(jsonOut, JSON.stringify({ findings, generated: entries.length }, null, 2));
  console.log(`\nWrote ${jsonOut}`);
}
