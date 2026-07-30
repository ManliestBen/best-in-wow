/* ============================================================
   BiS Companion — application logic
   Data comes from WOWDATA (see js/registry.js + data/*.data.js)
   ============================================================ */
(function () {
'use strict';

const core = WOWDATA.core;
if (!core) {
  document.body.innerHTML = '<div style="padding:40px;font-family:sans-serif;color:#e8ddc7">' +
    'Failed to load <code>app/data/core.data.js</code>. The app cannot start without it.</div>';
  return;
}

const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ---------------- State (multi-character roster) ---------------- */
const STORE_KEY = 'bisCompanion.v2';
const LEGACY_KEY = 'bisCompanion.v1';
const defaults = {
  expansion: 'tbc',
  faction: 'alliance',
  race: 'human',
  class: 'warrior',
  spec: null,
  bracket: 'preraid',
  tab: 'gear',
  selectedSlot: null,
  selectedInstance: null,
  showBothFactions: false,
  showNotes: true,
  owned: {},      // "<exp>:<itemKey>" -> true
  targets: {},    // "<exp>:<cls>:<spec>:<bracket>:<slot>:<wornIndex>" -> itemId
  professions: [], // e.g. ["Leatherworking", "Skinning"] — hides BoP crafts you can't make
  questDone: {},  // "<exp>:<questKey>" -> true
};

function newProfile(name) {
  return Object.assign(
    { id: 'c' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), name },
    JSON.parse(JSON.stringify(defaults)));
}

let store = null;
try {
  const raw = localStorage.getItem(STORE_KEY);
  if (raw) store = JSON.parse(raw);
} catch (e) { /* fresh start */ }
if (!store || !Array.isArray(store.profiles) || !store.profiles.length) {
  // First run on v2 — migrate a v1 single-character save if present.
  let legacy = null;
  try {
    const raw = localStorage.getItem(LEGACY_KEY);
    if (raw) legacy = JSON.parse(raw);
  } catch (e) { /* ignore */ }
  const p = Object.assign(newProfile('Main'), legacy || {});
  p.name = p.name || 'Main';
  store = { activeId: p.id, profiles: [p] };
}
for (const p of store.profiles) {
  for (const [k, v] of Object.entries(defaults)) {
    if (!(k in p)) p[k] = (v && typeof v === 'object') ? JSON.parse(JSON.stringify(v)) : v;
  }
}
let state = store.profiles.find(p => p.id === store.activeId) || store.profiles[0];
store.activeId = state.id;

function save() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* ignore */ }
}

function switchProfile(id) {
  const p = store.profiles.find(x => x.id === id);
  if (!p || p === state) return;
  state = p;
  store.activeId = id;
  searchIndex = null;
  validateSelections(); save(); renderAll();
}
function addProfile() {
  const name = prompt('Name your character:', 'Alt ' + store.profiles.length);
  if (name == null) return;
  const p = newProfile(name.trim() || 'Unnamed');
  store.profiles.push(p);
  switchProfile(p.id);
}
function renameProfile() {
  const name = prompt('Rename character:', state.name);
  if (name == null) return;
  state.name = name.trim() || state.name;
  save(); renderRoster();
}
function deleteProfile() {
  if (store.profiles.length <= 1) { alert('This is your only character — make another before deleting it.'); return; }
  if (!confirm(`Delete “${state.name}” and all of its saved progress? This cannot be undone.`)) return;
  store.profiles = store.profiles.filter(p => p.id !== state.id);
  state = null;
  switchProfile(store.profiles[0].id);
}

/* ---------------- Data helpers ---------------- */
const expCfg = () => core.expansions[state.expansion];
const whDomain = () => expCfg().wowheadPath;

const raceById = (id) => core.races.find(r => r.id === id);
const classMeta = (id) => core.classes.find(c => c.id === id);
const classData = () => WOWDATA.classData(state.expansion, state.class);
const currentSpec = () => {
  const cd = classData();
  if (!cd) return null;
  return cd.specs.find(s => s.id === state.spec) || cd.specs[0] || null;
};
const currentBracket = () => {
  const spec = currentSpec();
  if (!spec) return null;
  return (spec.brackets || []).find(b => b.id === state.bracket) || null;
};

function iconUrl(token, size) {
  return `https://wow.zamimg.com/images/wow/icons/${size || 'large'}/${token}.jpg`;
}

function itemHref(it) {
  if (it.id) return `https://www.wowhead.com/${whDomain()}/item=${it.id}`;
  return `https://www.wowhead.com/${whDomain()}/search?q=${encodeURIComponent(it.name)}`;
}
function questHref(q) {
  if (q.id) return `https://www.wowhead.com/${whDomain()}/quest=${q.id}`;
  return `https://www.wowhead.com/${whDomain()}/search?q=${encodeURIComponent(q.name)}`;
}
function itemLink(it) {
  const wh = it.id ? ` data-wowhead="item=${it.id}&domain=${whDomain()}"` : '';
  const q = it.quality ? ` class="q-${esc(it.quality)}"` : '';
  return `<a href="${itemHref(it)}"${wh}${q} target="_blank" rel="noopener">${esc(it.name)}</a>`;
}

let tooltipQueued = false;
function refreshTooltips() {
  if (tooltipQueued) return;
  tooltipQueued = true;
  requestAnimationFrame(() => {
    tooltipQueued = false;
    if (window.$WowheadPower && typeof window.$WowheadPower.refreshLinks === 'function') {
      try { window.$WowheadPower.refreshLinks(); } catch (e) { /* wowhead script hiccup */ }
    }
  });
}

function sourceText(it) {
  const s = it.source || {};
  const bits = [];
  if (s.boss) bits.push(s.boss);
  if (s.instance) bits.push(s.instance);
  if (s.quest) bits.push(`“${s.quest}”`);
  if (s.zone) bits.push(s.zone);
  if (s.detail) bits.push(s.detail);
  const label = { drop: 'Drop', quest: 'Quest', badge: 'Badge', reputation: 'Rep',
    crafted: 'Crafted', vendor: 'Vendor', pvp: 'PvP', 'world-drop': 'World drop' }[s.type];
  return { label: label || '', text: bits.join(' · ') };
}

/* A bind-on-pickup craft is only obtainable by someone with that profession.
   BoE crafts stay listed — those can be bought from anyone. */
function craftable(it) {
  const prof = it.source && it.source.profession;
  if (!it.bop || !prof) return true;
  if (!state.professions || !state.professions.length) return true;  // unset = show all
  return state.professions.includes(prof);
}

function slotItems(bracket, slotKey) {
  if (!bracket || !bracket.slots) return [];
  const list = (bracket.slots[slotKey] || []).slice();
  list.sort((a, b) => (a.rank || 99) - (b.rank || 99));
  return list
    .filter(it => !it.faction || it.faction === 'both' || it.faction === state.faction)
    .filter(craftable);
}

function itemKey(it) { return `${state.expansion}:${it.id || 'n-' + it.name}`; }
const isOwned = (it) => !!state.owned[itemKey(it)];
function toggleOwned(it) {
  const k = itemKey(it);
  if (state.owned[k]) delete state.owned[k]; else state.owned[k] = true;
  save();
  renderRoster();
  renderGearTab();
  if (state.tab === 'shopping') renderShopping();
}

/* ---------------- chosen targets ----------------
   Each slot offers a ranked top 3 (Best / Better / Good). A player may be
   chasing the second or third option — a cheaper craft, a dungeon they can
   actually get a group for — so the choice is theirs and everything that
   counts progress follows it. */
function targetKey(slotKey, wornIndex) {
  return [state.expansion, state.class, state.spec, state.bracket, slotKey, wornIndex].join(':');
}
function targetIdFor(slotKey, wornIndex) { return state.targets[targetKey(slotKey, wornIndex)]; }
function setTarget(slotKey, wornIndex, itemId) {
  const k = targetKey(slotKey, wornIndex);
  if (itemId == null) delete state.targets[k]; else state.targets[k] = itemId;
  save();
  renderGearTab();
  if (state.tab === 'shopping') renderShopping();
}
/* The item this character is actually going for in a slot: their pick if it is
   still in the list, otherwise the default for that position. */
function chosenItem(items, slotKey, wornIndex) {
  const id = targetIdFor(slotKey, wornIndex);
  if (id != null) {
    const hit = items.find(it => it.id === id);
    if (hit) return hit;
  }
  return items[wornIndex] || null;
}
/* A two-handed main hand occupies both hands, so the off-hand can't be used.
   The pick is the player's, so this has to be evaluated live rather than baked
   into the data. */
function chosenMainhand(bracket) {
  const items = slotItems(bracket, 'mainhand');
  return items.length ? chosenItem(items, 'mainhand', 0) : null;
}
function offhandBlockedBy(bracket) {
  const mh = chosenMainhand(bracket);
  return (mh && mh.hand === 'two') ? mh : null;
}
const isTwoHand = (it) => it && it.hand === 'two';

const RANK_LABEL = ['Best', 'Better', 'Good'];
const rankLabel = (i) => RANK_LABEL[i] || `Option ${i + 1}`;

/* Worn items for progress/shopping: the chosen pick per position */
function wornItems(bracket) {
  const out = [];
  const blocked = offhandBlockedBy(bracket);
  for (const slot of core.slots) {
    if (slot.key === 'offhand' && blocked) continue;
    const items = slotItems(bracket, slot.key);
    if (!items.length) continue;
    const n = slot.worn || 1;
    for (let i = 0; i < Math.min(n, items.length); i++) {
      const item = chosenItem(items, slot.key, i);
      if (item) out.push({ slot, item, wornIndex: i });
    }
  }
  return out;
}

/* ---------------- Selection cascade ---------------- */
function validateSelections() {
  // faction → race
  let race = raceById(state.race);
  if (!race || race.faction !== state.faction) {
    race = core.races.find(r => r.faction === state.faction);
    state.race = race.id;
  }
  // race → class (must be playable by race, exist in expansion, and have data)
  const avail = WOWDATA.classesFor(state.expansion);
  const playable = (cid) => {
    const meta = classMeta(cid);
    return meta && meta.expansions.includes(state.expansion) &&
      (race.classes.includes(cid) || (state.expansion === 'wotlk' && cid === 'deathknight'));
  };
  if (!playable(state.class) || !avail.includes(state.class)) {
    state.class = avail.find(playable) || avail[0] || state.class;
  }
  // class → spec
  const cd = classData();
  if (cd && !cd.specs.some(s => s.id === state.spec)) state.spec = cd.specs[0] ? cd.specs[0].id : null;
  // spec → bracket (must exist for this expansion; prefer one the spec has data for)
  const bl = expCfg().brackets;
  if (!bl.some(b => b.id === state.bracket)) state.bracket = 'preraid';
  const spec = currentSpec();
  if (spec && !(spec.brackets || []).some(b => b.id === state.bracket)) {
    const first = bl.find(b => (spec.brackets || []).some(sb => sb.id === b.id));
    if (first) state.bracket = first.id;
  }
  state.selectedSlot = null;
}

/* ---------------- Roster (characters) ---------------- */
function profileProgress(p) {
  const cd = WOWDATA.classData(p.expansion, p.class);
  if (!cd) return null;
  const spec = cd.specs.find(s => s.id === p.spec) || cd.specs[0];
  if (!spec) return null;
  const br = (spec.brackets || []).find(b => b.id === p.bracket);
  if (!br || !br.slots) return null;
  let total = 0, owned = 0;
  for (const slot of core.slots) {
    const items = (br.slots[slot.key] || []).slice()
      .sort((a, b) => (a.rank || 99) - (b.rank || 99))
      .filter(it => !it.faction || it.faction === 'both' || it.faction === p.faction);
    const n = Math.min(slot.worn || 1, items.length);
    for (let i = 0; i < n; i++) {
      total++;
      if (p.owned[`${p.expansion}:${items[i].id || 'n-' + items[i].name}`]) owned++;
    }
  }
  return total ? { owned, total, pct: Math.round(100 * owned / total) } : null;
}

function renderRoster() {
  const el = $('#roster');
  if (!el) return;
  el.innerHTML = store.profiles.map(p => {
    const meta = classMeta(p.class);
    const cd = WOWDATA.classData(p.expansion, p.class);
    const spec = cd ? (cd.specs.find(s => s.id === p.spec) || cd.specs[0]) : null;
    const race = raceById(p.race);
    const bMeta = (core.expansions[p.expansion] || {}).brackets?.find(b => b.id === p.bracket);
    const prog = profileProgress(p);
    const active = p.id === state.id;
    return `<div class="roster-row ${active ? 'active' : ''}" data-p="${p.id}" style="--cls-color:${meta ? meta.color : '#c8aa6e'}">
      ${meta ? `<img class="rr-icon" src="${iconUrl(meta.icon)}" alt="" onerror="this.remove()">` : ''}
      <div class="rr-body">
        <div class="rr-name">${esc(p.name)}</div>
        <div class="rr-sub">${esc(race ? race.name : '')} ${esc(spec ? spec.name : '')} ${esc(meta ? meta.name : p.class)}${bMeta ? ` · ${esc(bMeta.name)}` : ''}</div>
      </div>
      ${prog ? `<span class="rr-pct" title="BiS collected for current bracket">${prog.pct}%</span>` : ''}
      ${active ? `<span class="rr-tools">
        <button class="rr-btn" data-rename title="Rename">✎</button>
        <button class="rr-btn" data-delete title="Delete character">✕</button>
      </span>` : ''}
    </div>`;
  }).join('') + `<button class="roster-add" id="roster-add">+ New character</button>`;

  el.querySelectorAll('.roster-row').forEach(row =>
    row.addEventListener('click', (ev) => {
      if (ev.target.closest('[data-rename]')) return renameProfile();
      if (ev.target.closest('[data-delete]')) return deleteProfile();
      switchProfile(row.dataset.p);
    }));
  $('#roster-add').addEventListener('click', addProfile);
}

/* ---------------- Sidebar rendering ---------------- */
function renderFaction() {
  $('#faction-toggle').innerHTML = core.factions.map(f =>
    `<button data-f="${f.id}" class="${state.faction === f.id ? 'active' : ''}">${esc(f.name)}</button>`
  ).join('');
  $('#faction-toggle').querySelectorAll('button').forEach(btn =>
    btn.addEventListener('click', () => {
      state.faction = btn.dataset.f;
      validateSelections(); save(); renderAll();
    }));
}

function renderRaces() {
  const races = core.races.filter(r => r.faction === state.faction);
  $('#race-grid').innerHTML = races.map(r =>
    `<button data-r="${r.id}" class="${state.race === r.id ? 'active' : ''}">${esc(r.name)}</button>`
  ).join('');
  $('#race-grid').querySelectorAll('button').forEach(btn =>
    btn.addEventListener('click', () => {
      state.race = btn.dataset.r;
      validateSelections(); save(); renderAll();
    }));
}

function renderClasses() {
  const race = raceById(state.race);
  const avail = WOWDATA.classesFor(state.expansion);
  const list = core.classes.filter(c => c.expansions.includes(state.expansion) &&
    (race.classes.includes(c.id) || (state.expansion === 'wotlk' && c.id === 'deathknight')));
  $('#class-grid').innerHTML = list.map(c => {
    const nodata = !avail.includes(c.id);
    return `<button data-c="${c.id}" style="--cls-color:${c.color}"
      class="${state.class === c.id ? 'active' : ''} ${nodata ? 'nodata' : ''}"
      title="${esc(c.name)}${nodata ? ' — data not loaded yet' : ''}">
      <img src="${iconUrl(c.icon)}" alt="" onerror="this.remove()">
      <span class="fallback">${esc(c.name)}</span>
    </button>`;
  }).join('');
  $('#class-grid').querySelectorAll('button').forEach(btn =>
    btn.addEventListener('click', () => {
      if (btn.classList.contains('nodata')) return;
      state.class = btn.dataset.c;
      validateSelections(); save(); renderAll();
    }));
}

function renderSpecs() {
  const cd = classData();
  const el = $('#spec-list');
  if (!cd) { el.innerHTML = '<div class="detail-empty">No data for this class yet.</div>'; return; }
  el.innerHTML = cd.specs.map(s =>
    `<button data-s="${s.id}" class="${state.spec === s.id ? 'active' : ''}">
      ${s.icon ? `<img src="${iconUrl(s.icon)}" alt="" onerror="this.remove()">` : ''}
      <span class="role-pip ${esc(s.role)}"></span>${esc(s.name)}
    </button>`
  ).join('');
  el.querySelectorAll('button').forEach(btn =>
    btn.addEventListener('click', () => {
      state.spec = btn.dataset.s;
      validateSelections(); save(); renderAll();
    }));
}

function renderBrackets() {
  const spec = currentSpec();
  const has = (id) => spec && (spec.brackets || []).some(b => b.id === id);
  let lastGroup = null;
  $('#bracket-list').innerHTML = expCfg().brackets.map(b => {
    const group = b.id.startsWith('lvl') ? 'Leveling' : 'Level ' + expCfg().maxLevel + ' endgame';
    const header = group !== lastGroup ? `<div class="b-group">${group}</div>` : '';
    lastGroup = group;
    return header + `<button data-b="${b.id}" class="${state.bracket === b.id ? 'active' : ''} ${has(b.id) ? '' : 'disabled'}"
      ${has(b.id) ? '' : 'title="No data for this bracket yet"'}>
      <span class="b-main">${esc(b.name)}<span class="b-sub">${esc(b.sub)}</span></span>
    </button>`;
  }).join('');
  $('#bracket-list').querySelectorAll('button').forEach(btn =>
    btn.addEventListener('click', () => {
      if (btn.classList.contains('disabled')) return;
      state.bracket = btn.dataset.b;
      state.selectedSlot = null;
      save(); renderAll();
    }));
}

function renderProfessions() {
  const el = $('#prof-grid');
  if (!el) return;
  const list = core.professions || [];
  el.innerHTML = list.map(p => {
    const on = (state.professions || []).includes(p.id);
    return `<button data-prof="${p.id}" class="${on ? 'active' : ''}">${esc(p.name)}</button>`;
  }).join('') + (state.professions && state.professions.length
    ? `<button data-prof-clear class="prof-clear">show all</button>` : '');
  el.querySelectorAll('[data-prof]').forEach(btn =>
    btn.addEventListener('click', () => {
      const id = btn.dataset.prof;
      state.professions = state.professions || [];
      const i = state.professions.indexOf(id);
      if (i >= 0) state.professions.splice(i, 1);
      else if (state.professions.length < 2) state.professions.push(id);
      else state.professions = [state.professions[1], id];   // two primaries, drop the oldest
      save(); renderAll();
    }));
  const clear = el.querySelector('[data-prof-clear]');
  if (clear) clear.addEventListener('click', () => { state.professions = []; save(); renderAll(); });
}

function renderRacial() {
  const race = raceById(state.race);
  $('#racial-card').innerHTML = race && race.gearNotes
    ? `<b>${esc(race.name)} racials & gearing</b><br>${esc(race.gearNotes)}`
    : '';
}

/* ---------------- Gear tab ---------------- */
function renderSpecBanner() {
  const cd = classData(), spec = currentSpec(), bracket = currentBracket();
  const el = $('#spec-banner');
  if (!cd || !spec) {
    el.innerHTML = `<div class="detail-empty">No gear data loaded for this class in ${esc(expCfg().short)} yet.
      Data files live in <code>app/data/${esc(state.expansion)}/</code>.</div>`;
    return;
  }
  const bMeta = expCfg().brackets.find(b => b.id === state.bracket) || {};
  const worn = bracket ? wornItems(bracket) : [];
  const ownedCount = worn.filter(w => isOwned(w.item)).length;
  const pct = worn.length ? Math.round(100 * ownedCount / worn.length) : 0;

  el.innerHTML = `
    <div class="sb-head" style="--cls-color:${cd.classColor || '#c8aa6e'}">
      <h2>${esc(cd.className)} · ${esc(spec.name)}</h2>
      <span class="role-badge ${esc(spec.role)}">${esc(spec.role)}</span>
      <span class="sb-bracket">${esc(bMeta.name || state.bracket)} — ${esc(bMeta.sub || '')}</span>
      <div class="progress-wrap">
        <div class="progress-label"><span>BiS collected</span><span>${ownedCount} / ${worn.length} (${pct}%)</span></div>
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      </div>
    </div>
    ${spec.statPriority ? `<div class="stat-priority"><b>Stat priority</b>${esc(spec.statPriority)}</div>` : ''}
    ${spec.notes ? `
      <div style="margin-top:10px"><button class="mini-btn ${state.showNotes ? 'on' : ''}" id="notes-toggle">
        ${state.showNotes ? 'Hide' : 'Show'} spec notes</button></div>
      <div class="spec-notes ${state.showNotes ? '' : 'hidden'}">${esc(spec.notes)}</div>` : ''}
  `;
  const nt = $('#notes-toggle');
  if (nt) nt.addEventListener('click', () => { state.showNotes = !state.showNotes; save(); renderSpecBanner(); });
}

function renderDoll() {
  const bracket = currentBracket();
  const el = $('#gear-doll');
  if (!bracket) {
    el.innerHTML = '<div class="detail-empty">No item data for this spec + bracket combination yet.<br>' +
      'Pick a highlighted bracket on the left.</div>';
    return;
  }
  // Slots this spec never fills in any bracket (e.g. offhand for 2H specs) are
  // structurally unused, not missing data.
  const spec = currentSpec();
  const everUsed = new Set();
  if (spec) {
    for (const b of spec.brackets || [])
      for (const [k, arr] of Object.entries(b.slots || {}))
        if (arr && arr.length) everUsed.add(k);
  }
  // Expand worn:2 slots into two display cells
  const blockedBy = offhandBlockedBy(bracket);
  const cells = [];
  for (const slot of core.slots) {
    const items = slotItems(bracket, slot.key);
    const n = slot.worn || 1;
    for (let i = 0; i < n; i++) {
      const blocked = slot.key === 'offhand' && blockedBy;
      const chosen = blocked ? null : chosenItem(items, slot.key, i);
      cells.push({
        slot, index: i,
        label: n > 1 ? `${slot.name.replace(/s$/, '')} ${i + 1}` : slot.name,
        item: chosen,
        pickedRank: chosen ? items.indexOf(chosen) : -1,
        blockedBy: blocked ? blockedBy : null,
      });
    }
  }
  el.innerHTML = '<div class="doll-grid">' + cells.map((c, idx) => {
    if (!c.item) {
      if (c.blockedBy) {
        return `<div class="slot-cell empty blocked" data-slot="${c.slot.key}"><div class="sc-body">
          <div class="sc-slot">${esc(c.label)}</div>
          <div class="sc-src">two-handed weapon equipped — no off-hand</div></div></div>`;
      }
      const unused = !everUsed.has(c.slot.key);
      return `<div class="slot-cell empty"><div class="sc-body">
        <div class="sc-slot">${esc(c.label)}</div><div class="sc-src">${unused ? 'not used by this spec' : 'no data'}</div></div></div>`;
    }
    const src = sourceText(c.item);
    const owned = isOwned(c.item);
    const sel = state.selectedSlot === c.slot.key;
    return `<div class="slot-cell ${owned ? 'owned' : ''} ${sel ? 'selected' : ''}" data-slot="${c.slot.key}" data-cell="${idx}">
      <div class="sc-body">
        <div class="sc-slot">${esc(c.label)}</div>
        <div class="sc-item">${itemLink(c.item)}${c.pickedRank > 0
          ? `<span class="sc-tier tier-${['best','better','good'][c.pickedRank] || 'option'}">${esc(rankLabel(c.pickedRank))}</span>`
          : ''}</div>
        <div class="sc-src">${src.label ? `<span class="src-badge">${esc(src.label)}</span>` : ''}${esc(src.text)}</div>
      </div>
      <button class="own-check ${owned ? 'on' : ''}" data-own="${idx}" title="Mark as obtained">✔</button>
    </div>`;
  }).join('') + '</div>';

  el.querySelectorAll('.slot-cell[data-slot]').forEach(cell =>
    cell.addEventListener('click', (ev) => {
      if (ev.target.closest('a') || ev.target.closest('.own-check')) return;
      state.selectedSlot = cell.dataset.slot;
      save(); renderDoll(); renderSlotDetail();
    }));
  el.querySelectorAll('[data-own]').forEach(btn =>
    btn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      toggleOwned(cells[Number(btn.dataset.own)].item);
    }));
  refreshTooltips();
}

function renderSlotDetail() {
  const el = $('#slot-detail');
  const bracket = currentBracket(), spec = currentSpec();
  if (!state.selectedSlot || !bracket) {
    el.innerHTML = '<div class="detail-empty">Select a slot to compare the best item with its alternates.<br><br>' +
      'Hover any item name for its full Wowhead tooltip; click it to open Wowhead in a new tab.</div>';
    return;
  }
  const slotMeta = core.slots.find(s => s.key === state.selectedSlot);
  const items = slotItems(bracket, state.selectedSlot);
  const enchant = spec && spec.enchants ? spec.enchants[state.selectedSlot] : null;

  if (state.selectedSlot === 'offhand') {
    const blockedBy = offhandBlockedBy(bracket);
    if (blockedBy) {
      el.innerHTML = `
        <div class="sd-head">${esc(slotMeta ? slotMeta.name : 'Off Hand')}</div>
        <div class="sd-blocked">
          <b>No off-hand with a two-hander.</b><br>
          You're going for ${itemLink(blockedBy)}, which is two-handed and fills both
          hands. Pick a one-handed main hand if you want an off-hand as well.
          <div style="margin-top:10px"><button class="mini-btn" id="show-mh">Choose a main hand</button></div>
        </div>`;
      const b = $('#show-mh');
      if (b) b.addEventListener('click', () => {
        state.selectedSlot = 'mainhand'; save(); renderDoll(); renderSlotDetail();
      });
      refreshTooltips();
      return;
    }
  }

  const wornCount = slotMeta && slotMeta.worn ? slotMeta.worn : 1;
  const chosenIds = [];
  for (let w = 0; w < wornCount; w++) {
    const c = chosenItem(items, state.selectedSlot, w);
    chosenIds.push(c ? c.id : null);
  }

  el.innerHTML = `
    <div class="sd-head">${esc(slotMeta ? slotMeta.name : state.selectedSlot)}</div>
    ${enchant ? `<div class="sd-enchant"><b>Enchant:</b> ${esc(enchant)}</div>` : ''}
    ${items.length ? `<div class="sd-hint">Pick the one you're going for — progress and the shopping list follow your choice.</div>` : ''}
    ${items.length ? items.map((it, i) => {
      const src = sourceText(it);
      const owned = isOwned(it);
      const tier = ['best', 'better', 'good'][i] || 'option';
      const targetedAt = chosenIds.indexOf(it.id);
      return `<div class="sd-item ${targetedAt >= 0 ? 'targeted' : ''}">
        <div class="sd-rank tier-${tier}">${esc(rankLabel(i))}${
          targetedAt >= 0 ? ` <span class="sd-going">— going for this${wornCount > 1 ? ` (${esc(slotMeta.name.replace(/s$/, ''))} ${targetedAt + 1})` : ''}</span>` : ''}</div>
        <div class="sd-name">${itemLink(it)}${isTwoHand(it)
          ? ' <span class="hand-tag">two-handed</span>' : ''}</div>
        <div class="sd-src">${src.label ? `<span class="src-badge">${esc(src.label)}</span>` : ''}${esc(src.text)}
          ${it.faction && it.faction !== 'both' ? ` <span class="faction-tag ${esc(it.faction)}">${esc(it.faction)}</span>` : ''}</div>
        ${it.note ? `<div class="sd-note">${esc(it.note)}</div>` : ''}
        <div class="sd-row">
          <button class="own-check ${owned ? 'on' : ''}" data-di="${i}" title="Mark as obtained">✔</button>
          <span style="font-size:11px;color:var(--text-faint)">${owned ? 'obtained' : 'mark as obtained'}</span>
          ${Array.from({ length: wornCount }, (_, w) => `
            <button class="mini-btn ${chosenIds[w] === it.id ? 'on' : ''}" data-target="${i}" data-worn="${w}">
              ${wornCount > 1 ? `Use as ${esc(slotMeta.name.replace(/s$/, ''))} ${w + 1}` : 'Go for this'}
            </button>`).join('')}
        </div>
      </div>`;
    }).join('') : '<div class="detail-empty">No items recorded for this slot.</div>'}
  `;
  el.querySelectorAll('[data-target]').forEach(btn =>
    btn.addEventListener('click', () => {
      const it = items[Number(btn.dataset.target)];
      const w = Number(btn.dataset.worn);
      setTarget(state.selectedSlot, w, targetIdFor(state.selectedSlot, w) === it.id ? null : it.id);
    }));
  el.querySelectorAll('[data-di]').forEach(btn =>
    btn.addEventListener('click', () => {
      toggleOwned(items[Number(btn.dataset.di)]);
      renderSlotDetail();
    }));
  refreshTooltips();
}

function renderGearTab() {
  renderSpecBanner();
  renderDoll();
  renderSlotDetail();
}

/* ---------------- Quests tab ---------------- */
const PHASE_ORDER = { classic: -1, preraid: 0, p1: 1, p2: 2, p3: 3, p4: 4, p5: 5 };

function visibleQuests(inst) {
  return (inst.quests || []).filter(q =>
    state.showBothFactions || !q.faction || q.faction === 'both' || q.faction === state.faction);
}
function questKey(inst, q) { return `${state.expansion}:${q.id || inst.id + ':' + q.name}`; }

function renderInstanceList() {
  const el = $('#instance-list');
  const instances = WOWDATA.questsFor(state.expansion)
    .slice()
    .sort((a, b) => (PHASE_ORDER[a.phase] ?? 9) - (PHASE_ORDER[b.phase] ?? 9) ||
      (a.levelRange?.[0] ?? 0) - (b.levelRange?.[0] ?? 0) || a.name.localeCompare(b.name));
  if (!instances.length) {
    el.innerHTML = `<div class="detail-empty">No quest data for ${esc(expCfg().short)} yet.</div>`;
    $('#instance-detail').innerHTML = '<div class="detail-empty">Quest data coming soon for this expansion.</div>';
    return;
  }
  if (!instances.some(i => i.id === state.selectedInstance)) state.selectedInstance = instances[0].id;

  const groups = [['dungeon', 'Dungeons'], ['raid', 'Raids']];
  el.innerHTML = groups.map(([type, label]) => {
    const rows = instances.filter(i => i.type === type);
    if (!rows.length) return '';
    return `<div class="il-group">${label}</div>` + rows.map(inst => {
      const qs = visibleQuests(inst);
      const done = qs.filter(q => state.questDone[questKey(inst, q)]).length;
      return `<button class="il-row ${state.selectedInstance === inst.id ? 'active' : ''}" data-i="${inst.id}">
        ${esc(inst.name)}
        <span class="il-count">${done}/${qs.length}</span>
        ${inst.phase ? `<span class="il-phase">${esc(inst.phase === 'preraid' ? 'PRE' : inst.phase.toUpperCase())}</span>` : ''}
      </button>`;
    }).join('');
  }).join('');
  el.querySelectorAll('.il-row').forEach(btn =>
    btn.addEventListener('click', () => {
      state.selectedInstance = btn.dataset.i;
      save(); renderInstanceList(); renderInstanceDetail();
    }));
}

function renderInstanceDetail() {
  const el = $('#instance-detail');
  const inst = WOWDATA.questsFor(state.expansion).find(i => i.id === state.selectedInstance);
  if (!inst) { el.innerHTML = '<div class="detail-empty">Pick a dungeon or raid on the left.</div>'; return; }
  const qs = visibleQuests(inst);
  const done = qs.filter(q => state.questDone[questKey(inst, q)]).length;

  el.innerHTML = `
    <div class="id-head">
      <h2>${esc(inst.name)}</h2>
      <div class="id-meta">${esc(inst.zone || '')}
        ${inst.levelRange ? ` · Level ${inst.levelRange[0]}–${inst.levelRange[1]}` : ''}
        · ${done}/${qs.length} quests complete</div>
    </div>
    ${inst.attunement ? `<div class="id-attune"><b>Attunement / keys:</b> ${esc(inst.attunement)}</div>` : ''}
    ${inst.notes ? `<div class="id-attune">${esc(inst.notes)}</div>` : ''}
    <div class="quest-controls">
      <button class="mini-btn ${state.showBothFactions ? 'on' : ''}" id="both-factions">
        ${state.showBothFactions ? 'Showing both factions' : `Showing ${esc(state.faction)} only`}</button>
      <button class="mini-btn" id="reset-instance">Reset checkmarks</button>
    </div>
    ${qs.map((q, i) => {
      const k = questKey(inst, q);
      const checked = !!state.questDone[k];
      return `<div class="quest-row ${checked ? 'done' : ''}">
        <button class="own-check ${checked ? 'on' : ''}" data-q="${i}" title="Mark quest complete">✔</button>
        <div class="q-body">
          <div class="q-name"><a href="${questHref(q)}" ${q.id ? `data-wowhead="quest=${q.id}&domain=${whDomain()}"` : ''}
            target="_blank" rel="noopener">${esc(q.name)}</a>
            ${q.faction && q.faction !== 'both' ? ` <span class="faction-tag ${esc(q.faction)}">${esc(q.faction)}</span>` : ''}</div>
          ${q.questGiver ? `<div class="q-giver">Given by: ${esc(q.questGiver)}</div>` : ''}
          ${q.prereq ? `<div class="q-prereq">⛓ ${esc(q.prereq)}</div>` : ''}
          ${q.note ? `<div class="q-note">${esc(q.note)}</div>` : ''}
          ${q.rewards && q.rewards.length ? `<div class="q-rewards">Rewards: ${q.rewards.map(r => itemLink(r)).join('')}</div>` : ''}
        </div>
      </div>`;
    }).join('')}
  `;
  $('#both-factions').addEventListener('click', () => {
    state.showBothFactions = !state.showBothFactions;
    save(); renderInstanceList(); renderInstanceDetail();
  });
  $('#reset-instance').addEventListener('click', () => {
    qs.forEach(q => delete state.questDone[questKey(inst, q)]);
    save(); renderInstanceList(); renderInstanceDetail();
  });
  el.querySelectorAll('[data-q]').forEach(btn =>
    btn.addEventListener('click', () => {
      const k = questKey(inst, qs[Number(btn.dataset.q)]);
      if (state.questDone[k]) delete state.questDone[k]; else state.questDone[k] = true;
      save(); renderInstanceList(); renderInstanceDetail();
    }));
  refreshTooltips();
}

/* ---------------- Shopping list ---------------- */
function renderShopping() {
  const el = $('#shopping-list');
  const cd = classData(), spec = currentSpec(), bracket = currentBracket();
  if (!cd || !spec || !bracket) {
    el.innerHTML = '<div class="detail-empty">Pick a class, spec and bracket with data to build a shopping list.</div>';
    return;
  }
  const bMeta = expCfg().brackets.find(b => b.id === state.bracket) || {};
  const missing = wornItems(bracket).filter(w => !isOwned(w.item));

  // Group by farm location
  const groups = new Map(); // key -> {title, sub, rows: []}
  for (const w of missing) {
    const s = w.item.source || {};
    let key, title, sub = '';
    if (s.type === 'drop' && s.instance) { key = 'drop:' + s.instance; title = s.instance; sub = 'Instance drops'; }
    else if (s.type === 'badge') { key = 'badge'; title = 'Badge of Justice vendor'; sub = 'G\'eras — Shattrath City'; }
    else if (s.type === 'reputation') { key = 'rep'; title = 'Reputation rewards'; sub = 'Faction quartermasters'; }
    else if (s.type === 'crafted') { key = 'craft'; title = 'Crafted'; sub = 'Professions / auction house'; }
    else if (s.type === 'quest') { key = 'quest'; title = 'Quest rewards'; sub = ''; }
    else if (s.type === 'pvp') { key = 'pvp'; title = 'PvP rewards'; sub = 'Honor / Arena'; }
    else { key = 'other'; title = 'Other sources'; sub = ''; }
    if (!groups.has(key)) groups.set(key, { title, sub, rows: [] });
    groups.get(key).rows.push(w);
  }

  // Badge cost total (parsed from source.detail like "41 Badges" / "60 Badge of Justice")
  let badgeTotal = 0;
  for (const w of missing) {
    const d = (w.item.source && w.item.source.detail) || '';
    const m = w.item.source && w.item.source.type === 'badge' && d.match(/(\d+)\s*badge/i);
    if (m) badgeTotal += Number(m[1]);
  }

  const order = ['drop:', 'badge', 'rep', 'craft', 'quest', 'pvp', 'other'];
  const sorted = [...groups.entries()].sort((a, b) =>
    order.findIndex(p => a[0].startsWith(p)) - order.findIndex(p => b[0].startsWith(p)) ||
    a[1].title.localeCompare(b[1].title));

  el.innerHTML = `
    <div class="shop-head">
      <h2>Shopping list</h2>
      <span class="sh-sub">${esc(cd.className)} · ${esc(spec.name)} · ${esc(bMeta.name || state.bracket)} —
        ${missing.length ? `${missing.length} item${missing.length > 1 ? 's' : ''} still to collect` : 'fully BiS, go flex in Shattrath'}</span>
    </div>
    ${badgeTotal ? `<div class="badge-total">🏅 Badges of Justice still needed: <b>${badgeTotal}</b></div>` : ''}
    ${sorted.map(([, g]) => `
      <div class="shop-group">
        <h3>${esc(g.title)}</h3>
        ${g.sub ? `<div class="sg-sub">${esc(g.sub)}</div>` : ''}
        ${g.rows.map(w => {
          const src = sourceText(w.item);
          return `<div class="shop-row">
            <span class="sr-slot">${esc(w.slot.name)}</span>
            ${itemLink(w.item)}
            <span class="sr-detail">${esc(src.text)}</span>
          </div>`;
        }).join('')}
      </div>`).join('')}
    ${spec.enchants && Object.keys(spec.enchants).length ? `
      <div class="shop-group"><h3>Enchants to line up</h3>
      ${Object.entries(spec.enchants).map(([slot, txt]) => {
        const sm = core.slots.find(s => s.key === slot);
        return `<div class="shop-row"><span class="sr-slot">${esc(sm ? sm.name : slot)}</span>
          <span style="color:var(--text)">${esc(txt)}</span></div>`;
      }).join('')}</div>` : ''}
  `;
  refreshTooltips();
}

/* ---------------- Search ---------------- */
let searchIndex = null, searchIndexExp = null;
function buildSearchIndex() {
  if (searchIndex && searchIndexExp === state.expansion) return searchIndex;
  const map = new Map();
  for (const cd of WOWDATA.bis.filter(b => b.expansion === state.expansion)) {
    for (const spec of cd.specs) {
      for (const br of spec.brackets || []) {
        for (const [slotKey, items] of Object.entries(br.slots || {})) {
          for (const it of items) {
            const k = it.id || 'n-' + it.name;
            if (!map.has(k)) map.set(k, { item: it, contexts: [] });
            map.get(k).contexts.push({ cls: cd.class, clsName: cd.className, spec: spec.id, specName: spec.name, bracket: br.id, slot: slotKey });
          }
        }
      }
    }
  }
  searchIndex = [...map.values()];
  searchIndexExp = state.expansion;
  return searchIndex;
}

function renderSearch(query) {
  const box = $('#search-results');
  if (!query || query.length < 2) { box.classList.add('hidden'); box.innerHTML = ''; return; }
  const q = query.toLowerCase();
  const hits = buildSearchIndex().filter(e => e.item.name.toLowerCase().includes(q)).slice(0, 30);
  box.classList.remove('hidden');
  if (!hits.length) { box.innerHTML = '<div class="sr-empty">No items match. Data may still be loading for some classes.</div>'; return; }
  box.innerHTML = hits.map((e, i) => {
    const c = e.contexts[0];
    const bMeta = expCfg().brackets.find(b => b.id === c.bracket) || {};
    return `<div class="sr-row" data-h="${i}">
      ${itemLink(e.item)}
      <span class="sr-meta">${esc(c.clsName)} · ${esc(c.specName)} · ${esc(bMeta.name || c.bracket)}${e.contexts.length > 1 ? ` +${e.contexts.length - 1} more` : ''}</span>
    </div>`;
  }).join('');
  box.querySelectorAll('.sr-row').forEach(row =>
    row.addEventListener('click', (ev) => {
      if (ev.target.closest('a')) return; // let wowhead links behave normally
      const e = hits[Number(row.dataset.h)];
      const c = e.contexts[0];
      state.class = c.cls; state.spec = c.spec; state.bracket = c.bracket;
      state.selectedSlot = c.slot; state.tab = 'gear';
      // adopt a race that can play this class if needed
      validateSelections();
      if (state.class !== c.cls) {
        const race = core.races.find(r => r.faction === state.faction && r.classes.includes(c.cls));
        if (race) { state.race = race.id; state.class = c.cls; state.spec = c.spec; validateSelections(); }
      }
      state.selectedSlot = c.slot;
      box.classList.add('hidden'); $('#search-input').value = '';
      save(); renderAll();
    }));
  refreshTooltips();
}

/* ---------------- Tabs / expansion / global chrome ---------------- */
function renderTabs() {
  document.querySelectorAll('#main-tabs button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === state.tab);
  });
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  $(`#tab-${state.tab}`).classList.add('active');
}

function renderStatus() {
  const exp = state.expansion;
  const loaded = WOWDATA.classesFor(exp);
  const expected = core.classes.filter(c => c.expansions.includes(exp)).map(c => c.id);
  const missing = expected.filter(c => !loaded.includes(c));
  const instances = WOWDATA.questsFor(exp).length;
  $('#statusbar').innerHTML = `
    <span><b>${esc(expCfg().name)}</b></span>
    <span>Classes with data: <b>${loaded.length}/${expected.length}</b>${missing.length ? ` <span class="warn">(missing: ${missing.join(', ')})</span>` : ''}</span>
    <span>Instances with quest data: <b>${instances}</b></span>
    <span>Item tooltips & links by Wowhead — hover any item</span>
    <span>Data lives in <b>app/data/</b> · schema in <b>docs/DATA-SCHEMA.md</b></span>
  `;
}

function renderAll() {
  document.documentElement.dataset.exp = state.expansion;
  $('#brand-sub').textContent = expCfg().name + ' Classic';
  document.querySelectorAll('[data-exp-btn]').forEach(b =>
    b.classList.toggle('active', b.dataset.expBtn === state.expansion));
  renderTabs();
  renderRoster();
  renderFaction(); renderRaces(); renderClasses(); renderSpecs(); renderBrackets(); renderProfessions(); renderRacial();
  renderGearTab();
  renderInstanceList(); renderInstanceDetail();
  renderShopping();
  renderStatus();
}

/* ---------------- Wire up static chrome ---------------- */
document.querySelectorAll('[data-exp-btn]').forEach(btn =>
  btn.addEventListener('click', () => {
    if (state.expansion === btn.dataset.expBtn) return;
    state.expansion = btn.dataset.expBtn;
    searchIndex = null;
    validateSelections(); save(); renderAll();
  }));

document.querySelectorAll('#main-tabs button').forEach(btn =>
  btn.addEventListener('click', () => {
    state.tab = btn.dataset.tab;
    save(); renderTabs();
    if (state.tab === 'shopping') renderShopping();
  }));

const searchInput = $('#search-input');
searchInput.addEventListener('input', () => renderSearch(searchInput.value.trim()));
searchInput.addEventListener('focus', () => renderSearch(searchInput.value.trim()));
document.addEventListener('click', (ev) => {
  if (!ev.target.closest('.search-wrap')) $('#search-results').classList.add('hidden');
});
document.addEventListener('keydown', (ev) => {
  if (ev.key === '/' && document.activeElement !== searchInput &&
      !/input|textarea/i.test(document.activeElement.tagName)) {
    ev.preventDefault(); searchInput.focus();
  }
  if (ev.key === 'Escape') { $('#search-results').classList.add('hidden'); searchInput.blur(); }
});

/* ---------------- Boot ---------------- */
validateSelections();
renderAll();
})();
