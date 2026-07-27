# BiS Companion — Data File Schema (v1)

Every data file lives under `app/data/<expansion>/` and is a plain JavaScript file
that calls `WOWDATA.register(...)` with a **strict JSON literal** (it must pass
`JSON.parse` if the wrapper is stripped — no comments, no trailing commas, no
single quotes, double-quoted keys). A file may contain multiple `register` calls.

File template:

```js
/* BiS Companion data — <description> */
WOWDATA.register(
{
  "kind": "bis",
  ...
}
);
```

---

## 1. BiS gear data (`"kind": "bis"`) — one object per class

```json
{
  "kind": "bis",
  "expansion": "tbc",
  "class": "warrior",
  "className": "Warrior",
  "classColor": "#C79C6E",
  "specs": [ <Spec>, ... ]
}
```

- `expansion`: `"tbc"` or `"wotlk"`.
- `class`: lowercase token, one of: `warrior paladin hunter rogue priest shaman mage warlock druid deathknight`.

### Spec

```json
{
  "id": "fury",
  "name": "Fury",
  "role": "dps",
  "icon": "ability_warrior_innerrage",
  "statPriority": "Hit (9%) > Expertise > Strength/AP > Crit > Haste",
  "notes": "Short guidance: hit caps, set bonuses worth keeping, weapon notes, etc.",
  "enchants": {
    "head": "Glyph of Ferocity — Cenarion Expedition Revered",
    "chest": "Exceptional Stats (+6 all stats)"
  },
  "brackets": [ <Bracket>, ... ]
}
```

- `role`: `"tank"`, `"healer"`, or `"dps"`.
- `icon`: optional Wowhead icon token (e.g. `spell_holy_holybolt`); omit if unsure.
- `enchants`: optional, keys are slot keys (below), values are free text.

### Bracket

```json
{
  "id": "preraid",
  "levelRange": [70, 70],
  "slots": { "<slotKey>": [ <Item>, <Item alt>, ... ], ... }
}
```

`id` must be one of (TBC):
- Leveling: `lvl19` (10–19), `lvl29` (20–29), `lvl39` (30–39), `lvl49` (40–49),
  `lvl59` (50–57), `lvl60` (58–64), `lvl65` (65–69)
- Endgame: `preraid`, `p1` (Kara/Gruul/Mag), `p2` (SSC/TK), `p3` (Hyjal/BT), `p4` (ZA), `p5` (Sunwell).

For WotLK: `preraid`, `p1` (Naxx/OS/EoE), `p2` (Ulduar), `p3` (ToC), `p4` (ICC), `p5` (RS).
The app supplies display names — do not add a `name` field.

### Merging / extension files

The same `expansion` + `class` may be registered from more than one file (e.g.
`warrior.data.js` for endgame and `warrior-leveling.data.js` for leveling
brackets). Payloads are merged: specs are matched by `id`, their `brackets`
lists are concatenated, and spec metadata (`statPriority`, `notes`, `enchants`)
fills in only where the other file left it empty. Registering the SAME bracket
id for the same spec twice is an error. Extension files should reference the
exact spec ids the main file uses.

### Leveling-bracket ground rules

Leveling brackets rank gear that is realistically obtainable **while leveling
through that band**: quest rewards, dungeon drops from level-appropriate
dungeons, cheap crafted/BoE items. No PvP-rank rewards, no
Arena-Grand-Master-style unobtainables; flag expensive BoEs in `note`. Low
brackets legitimately have empty slots (no head/trinket items exist at 19) —
omit those slot keys rather than forcing picks.

**Slot keys (exactly these 15):**
`head neck shoulder back chest wrist hands waist legs feet finger trinket mainhand offhand ranged`

- `finger` and `trinket` are single ranked lists — the app equips the top two.
- Two-handed weapons go in `mainhand`; leave `offhand` with the note-worthy alternative
  or a 1-item list whose `note` says "empty when using 2H" — for pure 2H specs you may
  omit `offhand`.
- `ranged` = ranged weapon, wand, or relic (libram/idol/totem).

### Item

```json
{
  "id": 28224,
  "name": "Wastewalker Helm",
  "quality": "epic",
  "rank": 1,
  "faction": "both",
  "source": { "type": "drop", "instance": "The Shattered Halls", "boss": "Warchief Kargath Bladefist", "detail": "Heroic only" },
  "note": "Holds until Karazhan"
}
```

- `id`: Wowhead item ID. **Critical for correctness** — the app renders live Wowhead
  tooltips from it. Use `0` only if genuinely unverifiable.
- `quality`: `uncommon | rare | epic | legendary` (rarely `common`).
- `rank`: `1` = best in slot; `2+` = alternates in descending order.
- `faction`: `"alliance" | "horde" | "both"` (default `"both"`, may omit).
- `source.type`: `drop | quest | badge | reputation | crafted | vendor | pvp | world-drop`.
  Optional string fields: `instance`, `boss`, `quest`, `zone`, `detail`
  (badge costs, rep level, crafting profession, "Heroic only", etc. go in `detail`).
- `note`: optional, short.

---

## 2. Instance quest data (`"kind": "quests"`)

```json
{
  "kind": "quests",
  "expansion": "tbc",
  "instances": [
    {
      "id": "shattered-halls",
      "name": "The Shattered Halls",
      "type": "dungeon",
      "zone": "Hellfire Citadel, Hellfire Peninsula",
      "levelRange": [69, 70],
      "phase": "preraid",
      "attunement": "Optional text describing keys/attunement chains",
      "notes": "Optional",
      "quests": [
        {
          "id": 10884,
          "name": "Turning the Tide",
          "faction": "alliance",
          "questGiver": "Field Commander Romus — Honor Hold",
          "prereq": "Short prereq/chain summary, or omit",
          "rewards": [ { "id": 31735, "name": "Talbuk Hide Spaulders" } ],
          "note": "Optional (shareable, heroic-only, chain step, etc.)"
        }
      ]
    }
  ]
}
```

- `instance.type`: `"dungeon"` or `"raid"`.
- `quest.id`: Wowhead quest ID (used for links); use `0` if unverifiable.
- `faction`: `alliance | horde | both`.
- Include every quest that is completed inside (or requires entering) the instance,
  including dungeon-quest steps of attunement chains and the Karazhan key chain.

---

## Accuracy bar

Ground truth = established community guides (Wowhead TBC/WotLK Classic guides,
Icy Veins Classic). Verify item/quest IDs you are not certain of via WebSearch or
WebFetch against `https://www.wowhead.com/tbc/item=<id>` (the page title shows the
item name). Every `rank: 1` item's ID must be verified. Prefer omitting an
alternate over inventing an ID.
