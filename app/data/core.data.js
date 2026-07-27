/* BiS Companion core data — expansions, factions, races, class metadata. */
WOWDATA.register(
{
  "kind": "core",
  "expansions": {
    "tbc": {
      "name": "The Burning Crusade",
      "short": "TBC",
      "wowheadPath": "tbc",
      "maxLevel": 70,
      "brackets": [
        { "id": "lvl19",   "name": "Levels 10–19",  "sub": "Early dungeons & quests" },
        { "id": "lvl29",   "name": "Levels 20–29",  "sub": "SFK · BFD · Stockade era" },
        { "id": "lvl39",   "name": "Levels 30–39",  "sub": "SM · RFK · Uldaman era" },
        { "id": "lvl49",   "name": "Levels 40–49",  "sub": "ZF · Mara · ST era" },
        { "id": "lvl59",   "name": "Levels 50–57",  "sub": "BRD · LBRS · Strat/Scholo era" },
        { "id": "lvl60",   "name": "Levels 58–64",  "sub": "Outland leveling" },
        { "id": "lvl65",   "name": "Levels 65–69",  "sub": "Late Outland leveling" },
        { "id": "preraid", "name": "70 · Pre-Raid", "sub": "Dungeons, heroics, crafted, rep" },
        { "id": "p1",      "name": "Phase 1",       "sub": "Karazhan · Gruul · Magtheridon" },
        { "id": "p2",      "name": "Phase 2",       "sub": "Serpentshrine · Tempest Keep" },
        { "id": "p3",      "name": "Phase 3",       "sub": "Mount Hyjal · Black Temple" },
        { "id": "p4",      "name": "Phase 4",       "sub": "Zul'Aman" },
        { "id": "p5",      "name": "Phase 5",       "sub": "Sunwell Plateau" }
      ]
    },
    "wotlk": {
      "name": "Wrath of the Lich King",
      "short": "WotLK",
      "wowheadPath": "wotlk",
      "maxLevel": 80,
      "brackets": [
        { "id": "preraid", "name": "80 · Pre-Raid", "sub": "Dungeons, heroics, crafted, rep" },
        { "id": "p1",      "name": "Phase 1",       "sub": "Naxxramas · OS · EoE" },
        { "id": "p2",      "name": "Phase 2",       "sub": "Ulduar" },
        { "id": "p3",      "name": "Phase 3",       "sub": "Trial of the Crusader" },
        { "id": "p4",      "name": "Phase 4",       "sub": "Icecrown Citadel" },
        { "id": "p5",      "name": "Phase 5",       "sub": "Ruby Sanctum" }
      ]
    }
  },

  "factions": [
    { "id": "alliance", "name": "Alliance", "color": "#4a7bd6" },
    { "id": "horde",    "name": "Horde",    "color": "#c23c2a" }
  ],

  "races": [
    { "id": "human",    "name": "Human",     "faction": "alliance",
      "classes": ["warrior", "paladin", "rogue", "priest", "mage", "warlock"],
      "gearNotes": "Sword & Mace Specialization (+5 expertise with swords/maces as of 2.3) — lets sword/mace melee gear below the usual expertise cap. +10% Spirit helps healer regen." },
    { "id": "dwarf",    "name": "Dwarf",     "faction": "alliance",
      "classes": ["warrior", "paladin", "hunter", "rogue", "priest"],
      "gearNotes": "Gun Specialization (+5 gun skill) — dwarf hunters value guns over bows. Stoneform removes bleeds/poisons (tank utility)." },
    { "id": "nightelf", "name": "Night Elf", "faction": "alliance",
      "classes": ["warrior", "hunter", "rogue", "priest", "druid"],
      "gearNotes": "Quickness (+1% dodge) — small but real for tanks. Shadowmeld enables safe pulls/skips." },
    { "id": "gnome",    "name": "Gnome",     "faction": "alliance",
      "classes": ["warrior", "rogue", "mage", "warlock"],
      "gearNotes": "Expansive Mind (+5% Intellect) — scales with Int on gear for mages/warlocks. Escape Artist beats snares." },
    { "id": "draenei",  "name": "Draenei",   "faction": "alliance",
      "classes": ["warrior", "paladin", "hunter", "priest", "shaman", "mage"],
      "gearNotes": "Heroic Presence (+1% hit aura for your party) — effectively 1% less hit needed from gear for you AND your group. Gift of the Naaru free heal." },
    { "id": "orc",      "name": "Orc",       "faction": "horde",
      "classes": ["warrior", "hunter", "rogue", "shaman", "warlock"],
      "gearNotes": "Axe Specialization (+5 expertise with axes as of 2.3) — prioritize axes on melee. Blood Fury is a strong on-use AP/spell damage cooldown. Pet damage +5% for hunters/warlocks." },
    { "id": "undead",   "name": "Undead",    "faction": "horde",
      "classes": ["warrior", "rogue", "priest", "mage", "warlock"],
      "gearNotes": "Will of the Forsaken — premier PvP racial; no direct gearing impact. Cannibalize saves food." },
    { "id": "tauren",   "name": "Tauren",    "faction": "horde",
      "classes": ["warrior", "hunter", "shaman", "druid"],
      "gearNotes": "Endurance (+5% base health) — best-in-class tank racial. War Stomp is a clutch AoE stun." },
    { "id": "troll",    "name": "Troll",     "faction": "horde",
      "classes": ["warrior", "hunter", "rogue", "priest", "shaman", "mage"],
      "gearNotes": "Berserking (haste cooldown) — excellent for casters and hunters. Bow Specialization (+5 bow skill) — troll hunters prefer bows." },
    { "id": "bloodelf", "name": "Blood Elf", "faction": "horde",
      "classes": ["paladin", "hunter", "rogue", "priest", "mage", "warlock"],
      "gearNotes": "Arcane Torrent — mana return + AoE silence; slightly relaxes mana/mp5 gearing for casters. The only Horde paladin race in TBC." }
  ],

  "classes": [
    { "id": "warrior",     "name": "Warrior",      "color": "#C79C6E", "icon": "classicon_warrior",     "expansions": ["tbc", "wotlk"] },
    { "id": "paladin",     "name": "Paladin",      "color": "#F58CBA", "icon": "classicon_paladin",     "expansions": ["tbc", "wotlk"] },
    { "id": "hunter",      "name": "Hunter",       "color": "#ABD473", "icon": "classicon_hunter",      "expansions": ["tbc", "wotlk"] },
    { "id": "rogue",       "name": "Rogue",        "color": "#FFF569", "icon": "classicon_rogue",       "expansions": ["tbc", "wotlk"] },
    { "id": "priest",      "name": "Priest",       "color": "#FFFFFF", "icon": "classicon_priest",      "expansions": ["tbc", "wotlk"] },
    { "id": "shaman",      "name": "Shaman",       "color": "#0070DE", "icon": "classicon_shaman",      "expansions": ["tbc", "wotlk"] },
    { "id": "mage",        "name": "Mage",         "color": "#69CCF0", "icon": "classicon_mage",        "expansions": ["tbc", "wotlk"] },
    { "id": "warlock",     "name": "Warlock",      "color": "#9482C9", "icon": "classicon_warlock",     "expansions": ["tbc", "wotlk"] },
    { "id": "druid",       "name": "Druid",        "color": "#FF7D0A", "icon": "classicon_druid",       "expansions": ["tbc", "wotlk"] },
    { "id": "deathknight", "name": "Death Knight", "color": "#C41F3B", "icon": "spell_deathknight_classicon", "expansions": ["wotlk"] }
  ],

  "slots": [
    { "key": "head",     "name": "Head" },
    { "key": "neck",     "name": "Neck" },
    { "key": "shoulder", "name": "Shoulder" },
    { "key": "back",     "name": "Back" },
    { "key": "chest",    "name": "Chest" },
    { "key": "wrist",    "name": "Wrist" },
    { "key": "hands",    "name": "Hands" },
    { "key": "waist",    "name": "Waist" },
    { "key": "legs",     "name": "Legs" },
    { "key": "feet",     "name": "Feet" },
    { "key": "finger",   "name": "Rings",    "worn": 2 },
    { "key": "trinket",  "name": "Trinkets", "worn": 2 },
    { "key": "mainhand", "name": "Main Hand" },
    { "key": "offhand",  "name": "Off Hand" },
    { "key": "ranged",   "name": "Ranged / Relic" }
  ]
}
);
