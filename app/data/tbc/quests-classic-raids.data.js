/* BiS Companion data — Classic level-60 raid instance quests, as they exist in TBC Classic
   (Onyxia's Lair, Molten Core, Blackwing Lair, Zul'Gurub, Ruins of Ahn'Qiraj, Temple of
   Ahn'Qiraj). Naxxramas is intentionally excluded — it was removed from the game in TBC. */
WOWDATA.register(
{
  "kind": "quests",
  "expansion": "tbc",
  "instances": [
    {
      "id": "onyxia-lair",
      "name": "Onyxia's Lair",
      "type": "raid",
      "zone": "Dustwallow Marsh",
      "levelRange": [60, 60],
      "phase": "classic",
      "attunement": "No attunement required. The original Drakefire Amulet key chain (culminating in slaying General Drakkisath in Upper Blackrock Spire) was removed as a hard requirement in Vanilla patch 1.11, months before Burning Crusade's launch, and Onyxia has been a free 40-player entry ever since — including on TBC Classic Anniversary realms.",
      "notes": "Onyxia herself is the only boss. The head-turn-in reward quest ('Big Game Hunter') does not exist yet in TBC — it was added in Wrath's level-80 Onyxia revamp.",
      "quests": [
        {
          "id": 7509,
          "name": "The Forging of Quel'Serrar",
          "faction": "both",
          "questGiver": "Lorekeeper Lydros — Dire Maul (Warrior/Paladin only)",
          "prereq": "Level 60; second quest in a short Dire Maul/Shen'dralar chain",
          "rewards": [ { "id": 18348, "name": "Quel'Serrar" } ],
          "note": "Carry the Unfired Ancient Blade into Onyxia's Lair, catch her fire breath to heat it, kill Onyxia, then quench the blade in her corpse to forge Quel'Serrar. Also grants 500 Shen'dralar reputation."
        },
        {
          "id": 6502,
          "name": "Drakefire Amulet",
          "faction": "both",
          "questGiver": "Haleh — Winterspring (cave near 56, 50)",
          "prereq": "Full Onyxia key chain — Blood of the Black Dragon Champion, looted from General Drakkisath in Upper Blackrock Spire",
          "note": "Legacy remnant of the old mandatory Onyxia attunement chain. No longer required to enter the raid, but still fully completable for the Drakefire Amulet trinket."
        }
      ]
    },
    {
      "id": "molten-core",
      "name": "Molten Core",
      "type": "raid",
      "zone": "Blackrock Mountain (via Blackrock Depths), Badlands",
      "levelRange": [60, 60],
      "phase": "classic",
      "attunement": "\"Attunement to the Core\" is required and was never removed (unlike Onyxia/BWL): retrieve a Core Fragment from Blackrock Depths and return it to Lothos Riftwaker in Blackrock Mountain to unlock the portal into Molten Core.",
      "notes": "Molten Core also hosts the Thunderfury chain (bindings drop from Baron Geddon and Garr, but the chain is turned in far away in Silithus) and repeatable Thorium Brotherhood turn-ins for its raw material drops.",
      "quests": [
        {
          "id": 7848,
          "name": "Attunement to the Core",
          "faction": "both",
          "questGiver": "Lothos Riftwaker — Blackrock Mountain",
          "note": "One-time key quest. Retrieve a Core Fragment from Blackrock Depths; turning it in grants the permanent Attunement to the Core buff needed to zone in. (A parallel quest, id 7487, exists for the other faction's quest log.)"
        },
        {
          "id": 6642,
          "name": "Favor Amongst the Brotherhood, Dark Iron Ore",
          "faction": "both",
          "questGiver": "Thorium Brotherhood reputation turn-ins — Thorium Point, Searing Gorge",
          "note": "Repeatable Thorium Brotherhood reputation turn-in for Dark Iron Ore farmed in Blackrock Depths/Mountain. Sibling turn-ins cover other Molten Core/Blackrock drops: Fiery Core (id 6643), Lava Core (id 6644), Core Leather (id 6645), and Blood of the Mountain (id 6646)."
        },
        {
          "id": 7786,
          "name": "Thunderaan the Windseeker",
          "faction": "both",
          "questGiver": "Highlord Demitrian — Silithus (Hunter/Paladin/Rogue/Warrior only)",
          "prereq": "Combine the Left and Right Bindings of the Windseeker (Baron Geddon and Garr drops) plus 10 Elementium Bars and Essence of the Firelord (Ragnaros drop)",
          "note": "Centerpiece of the Thunderfury chain. Demitrian summons Prince Thunderaan for the raid to kill; loot the quest item off him and complete the follow-up 'Rise, Thunderfury!' (id 7787) to receive Thunderfury, Blessed Blade of the Windseeker."
        },
        {
          "id": 7787,
          "name": "Rise, Thunderfury!",
          "faction": "both",
          "questGiver": "Highlord Demitrian — Silithus (Hunter/Paladin/Rogue/Warrior only)",
          "prereq": "Thunderaan the Windseeker",
          "rewards": [ { "id": 19019, "name": "Thunderfury, Blessed Blade of the Windseeker" } ],
          "note": "Turn in the item looted from Prince Thunderaan to forge the legendary sword."
        },
        {
          "id": 8578,
          "name": "Scrying Goggles? No Problem!",
          "faction": "both",
          "questGiver": "Engineering trainer chain using a Molten Core drop",
          "note": "Optional Engineering side quest, not required for raid progress."
        }
      ]
    },
    {
      "id": "blackwing-lair",
      "name": "Blackwing Lair",
      "type": "raid",
      "zone": "Blackrock Mountain, Blackrock Spire",
      "levelRange": [60, 60],
      "phase": "classic",
      "attunement": "No attunement required. Like Onyxia's Lair, the original UBRS-reputation key chain was removed in Vanilla patch 1.11, before Burning Crusade launched, and never returned in TBC Classic.",
      "notes": "Vaelastrasz and Nefarian both hand out quests tied to the old Gates of Ahn'Qiraj war effort (Brood of Nozdormu reputation); those quests are still completable today even though the AQ gates are long since open.",
      "quests": [
        {
          "id": 8730,
          "name": "Nefarius's Corruption",
          "faction": "both",
          "questGiver": "Vaelastrasz the Corrupt (picked up inside Blackwing Lair)",
          "prereq": "Historically required completing \"The Charge of the Dragonflights\" first; has a 5-hour completion timer once accepted",
          "rewards": [ { "id": 21530, "name": "Onyx Embedded Leggings" } ],
          "note": "Kill Nefarian and loot the Red Scepter Shard (only one drops per raid with the quest active). Choice of reward: Onyx Embedded Leggings or Amulet of Shadow Shielding. Also grants 500 Brood of Nozdormu reputation."
        },
        {
          "id": 8288,
          "name": "Only One May Rise",
          "faction": "both",
          "questGiver": "Baristolth of the Shifting Sands — Cenarion Hold, Silithus",
          "prereq": "\"What Tomorrow Brings\"",
          "note": "Kill Broodlord Lashlayer and deliver his head (only one lootable per raid). Grants 500 Brood of Nozdormu reputation; part of the old Gates of Ahn'Qiraj quest line."
        }
      ]
    },
    {
      "id": "zulgurub",
      "name": "Zul'Gurub",
      "type": "raid",
      "zone": "Northern Stranglethorn",
      "levelRange": [60, 60],
      "phase": "classic",
      "attunement": "No attunement required — open the raid portal at the Yojamba Isle bridge with a full or partial group of level 60s.",
      "notes": "ZG's reward structure is almost entirely reputation- and token-based: troll coin/bijou turn-ins on Yojamba Isle build Zandalar Tribe standing, and the class-specific 'Paragons of Power' line converts Bijous into epic armor.",
      "quests": [
        {
          "id": 8195,
          "name": "Zulian, Razzashi, and Hakkari Coins",
          "faction": "both",
          "questGiver": "Vinchaxa — Yojamba Isle, Stranglethorn Vale",
          "note": "Repeatable. Turn in one Zulian Coin, one Razzashi Coin, and one Hakkari Coin (ZG trash/boss drops) for Zandalar Tribe reputation and a Zandalar Honor Token."
        },
        {
          "id": 8238,
          "name": "Gurubashi, Vilebranch, and Witherbark Coins",
          "faction": "both",
          "questGiver": "Vinchaxa — Yojamba Isle, Stranglethorn Vale",
          "note": "Repeatable sibling turn-in using coins from other troll tribes; also grants Zandalar Tribe reputation and a Zandalar Honor Token."
        },
        {
          "id": 8239,
          "name": "Sandfury, Skullsplitter, and Bloodscalp Coins",
          "faction": "both",
          "questGiver": "Vinchaxa — Yojamba Isle, Stranglethorn Vale",
          "note": "Third repeatable coin turn-in in the same series."
        },
        {
          "id": 8246,
          "name": "Signets of the Zandalar",
          "faction": "both",
          "questGiver": "Rin'wosho the Trader — Yojamba Isle, Stranglethorn Vale",
          "prereq": "Exalted with the Zandalar Tribe; 15 Zandalar Honor Tokens",
          "rewards": [ { "id": 20077, "name": "Zandalar Signet of Might" } ],
          "note": "Repeatable. Choice of Zandalar Signet of Might, Mojo, or Serenity — permanent shoulder enchants."
        },
        {
          "id": 8183,
          "name": "The Heart of Hakkar",
          "faction": "both",
          "questGiver": "Molthor — Yojamba Isle, Stranglethorn Vale",
          "prereq": "Loot the Heart of Hakkar from Hakkar the Soulflayer",
          "rewards": [ { "id": 19949, "name": "Zandalarian Hero Medallion" } ],
          "note": "Choice of Zandalarian Hero Badge/Charm/Medallion trinket plus 500 Zandalar Tribe reputation."
        },
        {
          "id": 8060,
          "name": "Paragons of Power: The Illusionist's Wraps",
          "faction": "both",
          "questGiver": "Al'tabim the All-Seeing — Yojamba Isle, Stranglethorn Vale",
          "prereq": "Friendly with the Zandalar Tribe; a class-specific Bijou (e.g. Primal Hakkari Bindings) looted from ZG bosses",
          "note": "Representative of the full 'Paragons of Power' line — every class has its own Bijou-for-epic-armor turn-in with Al'tabim (e.g. warrior Vindicator set, paladin Freethinker set, priest Confessor set, hunter Predator set, rogue Madcap set, druid Haruspex set, shaman Augur set, warlock Demoniac set, mage Illusionist set)."
        }
      ]
    },
    {
      "id": "ruins-of-ahnqiraj",
      "name": "Ruins of Ahn'Qiraj",
      "type": "raid",
      "zone": "Silithus",
      "levelRange": [60, 60],
      "phase": "classic",
      "attunement": "No attunement required. The gates of Ahn'Qiraj were unlocked realm-wide by the original Gates of Ahn'Qiraj war effort years before TBC Classic Anniversary launched, so both AQ raids are simply open to any level-60 group.",
      "notes": "AQ20's only quest reward comes from the final boss, Ossirian the Unscarred.",
      "quests": [
        {
          "id": 8791,
          "name": "The Fall of Ossirian",
          "faction": "both",
          "questGiver": "Commander Mar'alith — Cenarion Hold, Silithus",
          "prereq": "Defeat Ossirian the Unscarred and loot his head",
          "rewards": [ { "id": 21504, "name": "Charm of the Shifting Sands" } ],
          "note": "Choice of Charm, Amulet, Choker, or Pendant of the Shifting Sands (all neck slot). Also grants 500 Cenarion Circle and 500 Brood of Nozdormu reputation."
        }
      ]
    },
    {
      "id": "temple-of-ahnqiraj",
      "name": "Temple of Ahn'Qiraj",
      "type": "raid",
      "zone": "Silithus",
      "levelRange": [60, 60],
      "phase": "classic",
      "attunement": "No per-character attunement. The Scepter of the Shifting Sands war-effort event that originally opened these gates was a one-time, server-wide unlock completed long before TBC Classic Anniversary existed.",
      "notes": "AQ40 has its own tier-token 'of the Oracle/Genesis/Stormcaller/Avenger/Conqueror/Deathdealer/Doomcaller/Enigma/Striker' class quest line (parallel to ZG's Paragons of Power), plus a two-part C'Thun finale and repeatable Qiraji weapon turn-ins.",
      "quests": [
        {
          "id": 8593,
          "name": "Trousers of the Oracle",
          "faction": "both",
          "questGiver": "Kandrostrasz — inside Temple of Ahn'Qiraj (Priest only)",
          "prereq": "Friendly with the Brood of Nozdormu; Ouro's Intact Hide, Idols of Life, Gold Scarabs, and Clay Scarabs from AQ40/AQ20 drops",
          "note": "Representative of AQ40's class tier-token line — every class has an equivalent set (druid Genesis, shaman Stormcaller, paladin Avenger, warrior Conqueror, rogue Deathdealer, warlock Doomcaller, mage Enigma, hunter Striker)."
        },
        {
          "id": 8789,
          "name": "Imperial Qiraji Armaments",
          "faction": "both",
          "questGiver": "Arygos — inside Temple of Ahn'Qiraj, past the Twin Emperors",
          "prereq": "1x Imperial Qiraji Armaments token (plate/mail boss drop) plus 3x Elementium Ore",
          "rewards": [ { "id": 21242, "name": "Blessed Qiraji War Axe" } ],
          "note": "Repeatable. Choice of Blessed Qiraji War Axe, Musket, Pugio, or Bulwark. Also grants 500 Brood of Nozdormu reputation."
        },
        {
          "id": 8790,
          "name": "Imperial Qiraji Regalia",
          "faction": "both",
          "questGiver": "Merithra of the Dream — inside Temple of Ahn'Qiraj",
          "prereq": "1x Imperial Qiraji Regalia token (cloth/leather boss drop) plus 3x Elementium Ore",
          "note": "Repeatable caster-weapon counterpart to Imperial Qiraji Armaments. Choice of Blessed Qiraji Acolyte Staff, Augur Staff, or War Hammer, plus 500 Brood of Nozdormu reputation."
        },
        {
          "id": 8801,
          "name": "C'Thun's Legacy",
          "faction": "both",
          "questGiver": "Caelestrasz — inside Temple of Ahn'Qiraj, past C'Thun",
          "prereq": "Defeat C'Thun and loot one of his eye stalks",
          "note": "First half of the AQ40 finale; grants 500 Cenarion Circle and 500 Brood of Nozdormu reputation. Leads into The Savior of Kalimdor."
        },
        {
          "id": 8802,
          "name": "The Savior of Kalimdor",
          "faction": "both",
          "questGiver": "Caelestrasz, turned in to Anachronos — Caverns of Time, Tanaris",
          "prereq": "C'Thun's Legacy",
          "note": "Deliver the Eye of C'Thun to Anachronos. Choice of Amulet, Cloak, or Ring of the Fallen God, plus 500 Cenarion Circle and 1,000 Brood of Nozdormu reputation. Closes out the raid's quest line."
        }
      ]
    }
  ]
}
);
