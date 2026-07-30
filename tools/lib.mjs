// Shared loader for BiS Companion data files.
// Data files are JS that call WOWDATA.register(<strict JSON>); — we extract the
// JSON payloads with a string-aware balanced-paren scan and JSON.parse them.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

export function findDataFiles(root) {
  const out = [];
  const walk = (dir) => {
    for (const name of readdirSync(dir)) {
      const p = join(dir, name);
      if (statSync(p).isDirectory()) walk(p);
      else if (name.endsWith('.data.js')) out.push(p);
    }
  };
  walk(root);
  return out.sort();
}

export function extractPayloads(source, file, errors) {
  const payloads = [];
  const marker = 'WOWDATA.register(';
  let idx = 0;
  while ((idx = source.indexOf(marker, idx)) !== -1) {
    let i = idx + marker.length;
    let depth = 1, inStr = false, escaped = false;
    const start = i;
    for (; i < source.length; i++) {
      const ch = source[i];
      if (inStr) {
        if (escaped) escaped = false;
        else if (ch === '\\') escaped = true;
        else if (ch === '"') inStr = false;
      } else if (ch === '"') inStr = true;
      else if (ch === '(') depth++;
      else if (ch === ')') { depth--; if (depth === 0) break; }
    }
    if (depth !== 0) {
      errors.push(`${file}: unbalanced parentheses in WOWDATA.register call`);
      break;
    }
    const text = source.slice(start, i).trim();
    try {
      payloads.push(JSON.parse(text));
    } catch (e) {
      errors.push(`${file}: payload is not strict JSON — ${e.message}`);
    }
    idx = i;
  }
  if (payloads.length === 0 && !errors.some(e => e.startsWith(file))) {
    errors.push(`${file}: no WOWDATA.register calls found`);
  }
  return payloads;
}

export function loadAll(dataRoot) {
  const result = { core: null, bis: [], quests: [], errors: [], files: [] };
  for (const file of findDataFiles(dataRoot)) {
    const rel = relative(dataRoot, file);
    result.files.push(rel);
    const src = readFileSync(file, 'utf8');
    for (const p of extractPayloads(src, rel, result.errors)) {
      if (p.kind === 'core') result.core = p;
      else if (p.kind === 'bis') result.bis.push({ ...p, __file: rel });
      else if (p.kind === 'quests') result.quests.push({ ...p, __file: rel });
      else result.errors.push(`${rel}: unknown kind "${p.kind}"`);
    }
  }
  return result;
}

export const SLOT_KEYS = ['head', 'neck', 'shoulder', 'back', 'chest', 'wrist', 'hands',
  'waist', 'legs', 'feet', 'finger', 'trinket', 'mainhand', 'offhand', 'ranged'];
export const QUALITIES = ['poor', 'common', 'uncommon', 'rare', 'epic', 'legendary'];
export const SOURCE_TYPES = ['drop', 'quest', 'badge', 'reputation', 'crafted', 'vendor', 'pvp', 'world-drop'];
export const BRACKET_IDS = ['lvl20', 'lvl25', 'lvl30', 'lvl35', 'lvl40', 'lvl45', 'lvl50', 'lvl55', 'lvl60', 'lvl65', 'lvl69', 'preraid', 'p1', 'p2', 'p3', 'p4', 'p5'];
export const FACTIONS = ['alliance', 'horde', 'both'];

// Merge multi-file class registrations (endgame + leveling extensions) the same
// way app/js/registry.js does. Reports duplicate-bracket collisions into errors.
export function mergeBis(bisList, errors) {
  const out = [];
  for (const cd of bisList) {
    const existing = out.find(b => b.expansion === cd.expansion && b.class === cd.class);
    if (!existing) {
      out.push({ ...cd, specs: (cd.specs || []).map(s => ({ ...s, brackets: [...(s.brackets || [])] })) });
      continue;
    }
    for (const spec of cd.specs || []) {
      const target = existing.specs.find(s => s.id === spec.id);
      if (!target) { existing.specs.push({ ...spec, brackets: [...(spec.brackets || [])] }); continue; }
      for (const br of spec.brackets || []) {
        if (target.brackets.some(b => b.id === br.id)) {
          errors.push(`${cd.__file}: duplicate bracket "${br.id}" for ${cd.class}/${spec.id} (already registered)`);
        } else {
          target.brackets.push(br);
        }
      }
      target.statPriority = target.statPriority || spec.statPriority;
      target.notes = target.notes || spec.notes;
      target.icon = target.icon || spec.icon;
      if (spec.enchants) target.enchants = { ...spec.enchants, ...(target.enchants || {}) };
    }
  }
  return out;
}

export function sourceText(item) {
  const s = item.source || {};
  const bits = [];
  if (s.boss) bits.push(s.boss);
  if (s.instance) bits.push(s.instance);
  if (s.quest) bits.push(`"${s.quest}"`);
  if (s.zone) bits.push(s.zone);
  if (s.detail) bits.push(s.detail);
  const label = { drop: 'Drop', quest: 'Quest', badge: 'Badge', reputation: 'Rep',
    crafted: 'Crafted', vendor: 'Vendor', pvp: 'PvP', 'world-drop': 'World drop' }[s.type];
  return (label ? label + ': ' : '') + bits.join(' · ');
}
