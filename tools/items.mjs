// Shared item knowledge: parse Wowhead tooltips into facts, and hold the TBC
// rules about what a class can equip and what a spec actually wants.
// Used by audit-items.mjs, fix-items.mjs and gen-leveling.mjs so the three can
// never disagree.
import { readFileSync, readdirSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

/* ============ tooltip parsing ============ */
// Wowhead's markup is explicit if you read the structure instead of flattening
// it: <td>Head</td><th><!--scstart4:2--><span>Leather</span> gives the
// inventory slot, the item class (4 = armor, 2 = weapon) and the subclass.
const ARMOR_SUBCLASS = { 1: 'Cloth', 2: 'Leather', 3: 'Mail', 4: 'Plate', 6: 'Shield', 7: 'Libram', 8: 'Idol', 9: 'Totem' };
const WEAPON_SUBCLASS = {
  0: 'Axe', 1: 'Axe', 2: 'Bow', 3: 'Gun', 4: 'Mace', 5: 'Mace', 6: 'Polearm',
  7: 'Sword', 8: 'Sword', 10: 'Staff', 13: 'Fist Weapon', 14: 'Misc',
  15: 'Dagger', 16: 'Thrown', 18: 'Crossbow', 19: 'Wand', 20: 'Fishing Pole',
};
const TWO_HANDED_SUBCLASS = new Set([1, 5, 6, 8, 10]);   // axe2h, mace2h, polearm, sword2h, staff

function stripTags(html) {
  return String(html || '')
    .replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'").replace(/[ \t]+/g, ' ');
}

export function parseTooltip(id, raw) {
  if (!raw || raw.__error || !raw.tooltip) return null;
  const html = String(raw.tooltip);
  const text = stripTags(html);
  const t = {
    id, name: raw.name, quality: raw.quality, stats: {},
    itemLevel: 0, reqLevel: 0, armor: 0, dps: 0,
    unique: false, bindsOnPickup: false, slotText: null, typeName: null, itemClass: null, subClass: null,
    armorType: null, weaponType: null, invSlot: null, hand: null, classes: null,
  };
  let m;
  if ((m = html.match(/<!--ilvl-->(\d+)/))) t.itemLevel = Number(m[1]);
  if ((m = text.match(/Requires Level (\d+)/))) t.reqLevel = Number(m[1]);
  if ((m = html.match(/<!--amr-->(\d+) Armor/))) t.armor = Number(m[1]);
  if ((m = html.match(/<!--dps-->\(([\d.]+) damage per second\)/))) t.dps = Number(m[1]);
  t.unique = /Unique(-Equipped)?/.test(text);
  t.bindsOnPickup = /Binds when picked up/i.test(text);

  const st = html.match(/<td>([^<]*)<\/td><th><!--scstart(-?\d+):(-?\d+)-->(?:<span[^>]*>([^<]*)<\/span>)?/);
  if (st) {
    t.slotText = st[1].trim();
    t.itemClass = Number(st[2]);
    t.subClass = Number(st[3]);
    t.typeName = (st[4] || '').trim() || null;
  }
  if (t.itemClass === 4) {
    t.armorType = ARMOR_SUBCLASS[t.subClass] || null;
    if (t.armorType === 'Shield') { t.weaponType = 'Shield'; t.armorType = null; }
    if (['Libram', 'Idol', 'Totem'].includes(t.armorType)) { t.weaponType = t.armorType; t.armorType = null; }
  } else if (t.itemClass === 2) {
    t.weaponType = WEAPON_SUBCLASS[t.subClass] || t.typeName || null;
  }

  // Inventory slot / hand both come from the same cell.
  const slot = (t.slotText || '').toLowerCase();
  const HANDS = {
    'two-hand': 'two', 'one-hand': 'one', 'main hand': 'main',
    'off hand': 'off', 'held in off-hand': 'held',
  };
  if (HANDS[slot]) t.hand = HANDS[slot];
  else if (slot) t.invSlot = t.slotText;
  if (t.itemClass === 2 && TWO_HANDED_SUBCLASS.has(t.subClass)) t.hand = 'two';

  const cl = html.match(/wowhead-tooltip-item-classes">\s*Classes:\s*([\s\S]*?)<\/div>/);
  if (cl) {
    t.classes = [...stripTags(cl[1]).split(',')].map(s => s.trim().toLowerCase()).filter(Boolean);
  }

  // Each stat carries its own marker, e.g. <!--stat6-->+10 Spirit</span>, which
  // is exact; scraping the flattened text dropped any stat followed by prose.
  for (const g of html.matchAll(/<!--stat\d+-->([+-]?\d+) ([A-Za-z][A-Za-z ]*?)<\/span>/g)) {
    const k = g[2].trim();
    if (k) t.stats[k] = (t.stats[k] || 0) + Number(g[1]);
  }
  if (!Object.keys(t.stats).length) {
    for (const g of text.matchAll(/([+-]\d+) ([A-Za-z][A-Za-z ]*?)(?=\s*(?:\n|$))/g)) {
      const k = g[2].trim();
      if (k) t.stats[k] = (t.stats[k] || 0) + Number(g[1]);
    }
  }
  for (const g of text.matchAll(/damage and healing done by magical spells[^0-9]*(\d+)/gi)) {
    t.stats['Spell Power'] = (t.stats['Spell Power'] || 0) + Number(g[1]);
  }
  for (const g of text.matchAll(/healing done by (?:your )?spells[^0-9]*(\d+)/gi)) {
    t.stats['Healing'] = (t.stats['Healing'] || 0) + Number(g[1]);
  }
  for (const g of text.matchAll(/Restores (\d+) mana per 5/gi)) {
    t.stats['Mp5'] = (t.stats['Mp5'] || 0) + Number(g[1]);
  }
  for (const g of text.matchAll(/(?:Increases|Improves)?\s*(?:your )?([A-Za-z ]+?) (?:rating )?by (\d+)/gi)) {
    const k = g[1].trim().replace(/\b\w/g, c => c.toUpperCase());
    if (k && k.length < 30) t.stats[k] = (t.stats[k] || 0) + Number(g[2]);
  }
  return t;
}

/* ============ tooltip cache ============ */
export const DEFAULT_CACHE =
  '/tmp/claude-1000/-home-bmanley-code-wow-helpers/a2dcf095-db2a-461d-991f-ad22fea661a7/scratchpad/tooltip-cache';

export async function fetchTooltip(id, cacheDir = DEFAULT_CACHE) {
  mkdirSync(cacheDir, { recursive: true });
  const p = join(cacheDir, `${id}.json`);
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

export function loadFacts(cacheDir = DEFAULT_CACHE) {
  const facts = new Map();
  if (!existsSync(cacheDir)) return facts;
  for (const f of readdirSync(cacheDir)) {
    if (!f.endsWith('.json')) continue;
    const id = Number(f.replace('.json', ''));
    let raw;
    try { raw = JSON.parse(readFileSync(join(cacheDir, f), 'utf8')); } catch { continue; }
    const t = parseTooltip(id, raw);
    if (t) facts.set(id, t);
  }
  return facts;
}

/* ============ TBC rules ============ */
export const ARMOR_RULES = {
  warrior: { max: 'Plate', from: 40, below: 'Mail' }, paladin: { max: 'Plate', from: 40, below: 'Mail' },
  hunter: { max: 'Mail', from: 40, below: 'Leather' }, shaman: { max: 'Mail', from: 40, below: 'Leather' },
  rogue: { max: 'Leather' }, druid: { max: 'Leather' },
  priest: { max: 'Cloth' }, mage: { max: 'Cloth' }, warlock: { max: 'Cloth' },
  deathknight: { max: 'Plate', from: 55, below: 'Mail' },
};
export const ARMOR_ORDER = { Cloth: 0, Leather: 1, Mail: 2, Plate: 3 };
export const WEAPONS = {
  warrior: ['Dagger', 'Fist Weapon', 'Sword', 'Axe', 'Mace', 'Polearm', 'Staff', 'Bow', 'Gun', 'Crossbow', 'Thrown', 'Shield'],
  paladin: ['Sword', 'Axe', 'Mace', 'Polearm', 'Shield', 'Libram'],
  hunter: ['Dagger', 'Fist Weapon', 'Sword', 'Axe', 'Polearm', 'Staff', 'Bow', 'Gun', 'Crossbow'],
  rogue: ['Dagger', 'Fist Weapon', 'Sword', 'Mace', 'Bow', 'Gun', 'Crossbow', 'Thrown'],
  priest: ['Dagger', 'Mace', 'Staff', 'Wand'],
  shaman: ['Dagger', 'Fist Weapon', 'Axe', 'Mace', 'Staff', 'Shield', 'Totem'],
  mage: ['Dagger', 'Sword', 'Staff', 'Wand'], warlock: ['Dagger', 'Sword', 'Staff', 'Wand'],
  druid: ['Dagger', 'Fist Weapon', 'Mace', 'Polearm', 'Staff', 'Idol'],
  deathknight: ['Sword', 'Axe', 'Mace', 'Polearm'],
};
export const RANGED_WANT = {
  hunter: ['Bow', 'Gun', 'Crossbow'], warrior: ['Bow', 'Gun', 'Crossbow', 'Thrown'],
  rogue: ['Bow', 'Gun', 'Crossbow', 'Thrown'],
  priest: ['Wand'], mage: ['Wand'], warlock: ['Wand'],
  paladin: ['Libram'], shaman: ['Totem'], druid: ['Idol'],
};
export const AGI_STRICT = 'agility-strict', AGI = 'agility-pref', STR = 'strength',
  CAST = 'caster', TANK = 'tank';
export const SPEC_PROFILE = {
  'hunter/beastmastery': AGI_STRICT, 'hunter/marksmanship': AGI_STRICT, 'hunter/survival': AGI_STRICT,
  'rogue/combat': AGI, 'rogue/assassination': AGI, 'druid/feral-cat': AGI, 'shaman/enhancement': AGI,
  'warrior/arms': STR, 'warrior/fury': STR, 'paladin/retribution': STR,
  'deathknight/frost': STR, 'deathknight/unholy': STR, 'deathknight/blood': STR,
  'warrior/protection': TANK, 'paladin/protection': TANK, 'druid/feral-tank': TANK,
  'paladin/holy': CAST, 'priest/holy': CAST, 'priest/discipline': CAST, 'priest/shadow': CAST,
  'shaman/elemental': CAST, 'shaman/restoration': CAST, 'druid/balance': CAST,
  'druid/restoration': CAST, 'mage/fire': CAST, 'mage/arcane': CAST, 'mage/frost': CAST,
  'warlock/destruction': CAST, 'warlock/affliction': CAST, 'warlock/demonology': CAST,
};
export const SLOT_INV = {
  head: ['Head'], neck: ['Neck'], shoulder: ['Shoulder'], back: ['Back'],
  chest: ['Chest', 'Robe'], wrist: ['Wrist'], hands: ['Hands'], waist: ['Waist'],
  legs: ['Legs'], feet: ['Feet'], finger: ['Finger'], trinket: ['Trinket'],
};
export const ARMOR_SLOTS = new Set(['head', 'shoulder', 'chest', 'wrist', 'hands', 'waist', 'legs', 'feet', 'back']);
export const SLOT_ORDER = ['head', 'neck', 'shoulder', 'back', 'chest', 'wrist', 'hands',
  'waist', 'legs', 'feet', 'finger', 'trinket', 'mainhand', 'offhand', 'ranged'];
// Items whose value is an effect rather than a stat line.
export const EFFECT_BONUS = { 8345: 60, 9449: 40, 11122: 15, 4381: 10 };

// 5-level bands from 20 up, per the in-game gearing cadence.
export const BANDS = [
  { id: 'lvl20', range: [10, 20], name: 'Levels 10–20', sub: 'First dungeons' },
  { id: 'lvl25', range: [21, 25], name: 'Levels 21–25', sub: 'SFK · BFD · Stockade' },
  { id: 'lvl30', range: [26, 30], name: 'Levels 26–30', sub: 'Gnomeregan · RFK' },
  { id: 'lvl35', range: [31, 35], name: 'Levels 31–35', sub: 'SM · Uldaman' },
  { id: 'lvl40', range: [36, 40], name: 'Levels 36–40', sub: 'ZF · Mail/Plate unlock' },
  { id: 'lvl45', range: [41, 45], name: 'Levels 41–45', sub: 'Maraudon · ST' },
  { id: 'lvl50', range: [46, 50], name: 'Levels 46–50', sub: 'ST · Sunken Temple era' },
  { id: 'lvl55', range: [51, 55], name: 'Levels 51–55', sub: 'BRD · LBRS' },
  { id: 'lvl60', range: [56, 60], name: 'Levels 56–60', sub: 'Strat · Scholo · UBRS' },
  { id: 'lvl65', range: [61, 65], name: 'Levels 61–65', sub: 'Hellfire · Zangarmarsh' },
  { id: 'lvl69', range: [66, 69], name: 'Levels 66–69', sub: 'Terokkar · Nagrand · Blade’s Edge' },
];
export const BRACKET_LEVELS = Object.fromEntries([
  ...BANDS.map(b => [b.id, b.range]),
  ['preraid', [70, 70]], ['p1', [70, 70]], ['p2', [70, 70]],
  ['p3', [70, 70]], ['p4', [70, 70]], ['p5', [70, 70]],
]);

// Slots where the stat line decides suitability. Weapons are judged on damage
// (a caster-stat mace is still a fine leveling weapon) and trinkets/relics on
// their effect, so they're excluded.
export const STAT_JUDGED_SLOTS = new Set(['head', 'neck', 'shoulder', 'back', 'chest',
  'wrist', 'hands', 'waist', 'legs', 'feet', 'finger']);
export const CASTER_STATS = ['Intellect', 'Spirit', 'Spell Power', 'Spell Damage',
  'Healing', 'Damage And Healing', 'Mp5', 'Mana Per 5'];

// Would this item actively fail the spec? Used by the audit to flag existing
// data and by the generator to avoid picking such items in the first place.
export function suitsProfile(t, profile, slot) {
  if (!STAT_JUDGED_SLOTS.has(slot)) return true;
  if (EFFECT_BONUS[t.id]) return true;
  if (!Object.keys(t.stats || {}).length) return true;
  const agi = stat(t, ['Agility']), str = stat(t, ['Strength']);
  const sta = stat(t, ['Stamina']), caster = stat(t, CASTER_STATS);
  if (profile === AGI_STRICT && str > 0 && agi === 0) return false;
  if (profile === STR && agi === 0 && str === 0 && caster > 0) return false;
  if (profile === CAST && caster === 0 && (str > 0 || agi > 0)) return false;
  if (profile === TANK && caster > 0 && sta === 0 && str === 0 && agi === 0) return false;
  return true;
}

export function stat(t, names) {
  let n = 0;
  for (const [k, v] of Object.entries(t.stats || {})) {
    if (names.some(x => k.toLowerCase().includes(x.toLowerCase()))) n += v;
  }
  return n;
}

export function score(t, profile, slot) {
  const agi = stat(t, ['Agility']), str = stat(t, ['Strength']), sta = stat(t, ['Stamina']);
  const int = stat(t, ['Intellect']), spi = stat(t, ['Spirit']);
  const sp = stat(t, ['Spell Power', 'Spell Damage', 'Damage And Healing']);
  const heal = stat(t, ['Healing']), mp5 = stat(t, ['Mp5', 'Mana Per 5']);
  const ap = stat(t, ['Attack Power']), hit = stat(t, ['Hit']), crit = stat(t, ['Critical', 'Crit']);
  const def = stat(t, ['Defense']), dodge = stat(t, ['Dodge']), parry = stat(t, ['Parry']), block = stat(t, ['Block']);
  let s;
  switch (profile) {
    case AGI_STRICT: s = agi * 2 + ap + hit * 1.2 + crit * 1.2 + sta * 0.3; break;
    case AGI: s = agi * 2 + str * 0.6 + ap + hit * 1.2 + crit * 1.2 + sta * 0.3; break;
    case STR: s = str * 2 + agi * 0.6 + ap + hit * 1.2 + crit * 1.2 + sta * 0.4; break;
    case TANK: s = sta * 2 + def * 3 + dodge * 2 + parry * 2 + block * 1.5 + str * 0.7 + agi * 0.7 + (t.armor || 0) * 0.01; break;
    case CAST: s = sp * 2 + heal * 1.2 + int + spi * 0.6 + mp5 * 2 + hit * 1.2 + crit * 1.2 + sta * 0.2; break;
    default: s = sta + agi + str + int;
  }
  if (['mainhand', 'offhand', 'ranged'].includes(slot) && t.dps) {
    s += t.dps * (profile === CAST ? 1.5 : 4);
  }
  return s + (EFFECT_BONUS[t.id] || 0);
}

// Can this class equip this item in this slot at this level, at all?
export function legalFor(t, cls, slot, hiLevel, opts = {}) {
  if (!t) return false;
  if (t.classes && t.classes.length && !t.classes.includes(cls)) return false;
  if (t.reqLevel > hiLevel) return false;
  if (opts.capItemLevel !== false) {
    const cap = hiLevel <= 39 ? hiLevel + 8 : (hiLevel <= 57 ? hiLevel + 12 : hiLevel + 50);
    if (t.itemLevel > cap) return false;
  }
  if (slot === 'ranged') {
    return !!t.weaponType && (RANGED_WANT[cls] || []).includes(t.weaponType);
  }
  if (slot === 'mainhand' || slot === 'offhand') {
    if (!t.weaponType || !(WEAPONS[cls] || []).includes(t.weaponType)) return false;
    if (t.weaponType === 'Shield') return slot === 'offhand';
    if (['Libram', 'Idol', 'Totem'].includes(t.weaponType)) return false;
    if (slot === 'mainhand') return ['one', 'two', 'main'].includes(t.hand);
    return ['one', 'off', 'held'].includes(t.hand);
  }
  if (!SLOT_INV[slot] || !t.invSlot || !SLOT_INV[slot].includes(t.invSlot)) return false;
  if (ARMOR_SLOTS.has(slot) && t.armorType) {
    const rule = ARMOR_RULES[cls];
    if (rule) {
      const allowed = (rule.from && hiLevel < rule.from) ? (rule.below || rule.max) : rule.max;
      if (ARMOR_ORDER[t.armorType] > ARMOR_ORDER[allowed]) return false;
    }
  }
  return true;
}
