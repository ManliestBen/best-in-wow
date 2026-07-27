/* BiS Companion data — TBC Classic (Anniversary) classic low-level dungeon quests */
WOWDATA.register(
{
  "kind": "quests",
  "expansion": "tbc",
  "instances": [
    {
      "id": "ragefire-chasm",
      "name": "Ragefire Chasm",
      "type": "dungeon",
      "zone": "Orgrimmar",
      "levelRange": [15, 21],
      "phase": "classic",
      "notes": "Horde-only dungeon beneath Orgrimmar's Cleft of Shadow.",
      "quests": [
        {
          "id": 5761,
          "name": "Slaying the Beast",
          "faction": "horde",
          "questGiver": "Neeru Fireblade — Cleft of Shadow, Orgrimmar",
          "note": "Kill Taragaman the Hungerer inside Ragefire Chasm and return his heart."
        },
        {
          "id": 5722,
          "name": "Searching for the Lost Satchel",
          "faction": "horde",
          "questGiver": "Rahauro — Elder Rise, Thunder Bluff",
          "note": "Search Ragefire Chasm for Maur Grimtotem's corpse; part 1 of the Lost Satchel chain, leads to Returning the Lost Satchel."
        },
        {
          "id": 5723,
          "name": "Testing an Enemy's Strength",
          "faction": "horde",
          "questGiver": "Rahauro — Elder Rise, Thunder Bluff",
          "note": "Kill 8 Ragefire Troggs and 8 Ragefire Shaman inside the dungeon; shareable alongside Searching for the Lost Satchel."
        },
        {
          "id": 14356,
          "name": "The Power to Destroy...",
          "faction": "horde",
          "questGiver": "Bragor Bloodfist — Royal Quarter, Undercity",
          "rewards": [
            { "id": 15449, "name": "Ghastly Trousers" },
            { "id": 15450, "name": "Dredgemire Leggings" },
            { "id": 15451, "name": "Gargoyle Leggings" }
          ],
          "note": "Loot Spells of Shadow and Incantations from the Nether from the Searing Blade cultists inside Ragefire Chasm."
        },
        {
          "id": 5724,
          "name": "Returning the Lost Satchel",
          "faction": "horde",
          "questGiver": "Rahauro — Elder Rise, Thunder Bluff",
          "prereq": "Searching for the Lost Satchel",
          "rewards": [
            { "id": 15452, "name": "Featherbead Bracers" },
            { "id": 15453, "name": "Savannah Bracers" }
          ],
          "note": "Turn-in; the Grimtotem Satchel is obtained while searching inside Ragefire Chasm during the prerequisite quest."
        },
        {
          "id": 9692,
          "name": "The Path of the Adept",
          "faction": "horde",
          "questGiver": "Knight-Lord Bloodvalor — Silvermoon City",
          "prereq": "Blood Knight quest chain (Return to Silvermoon); Blood Elf Paladin only",
          "note": "TBC Blood Elf Paladin class quest. One of four required items (Blood of the Wrathful) is looted from Zelemar the Wrathful, a mob summoned inside Ragefire Chasm."
        }
      ]
    },
    {
      "id": "wailing-caverns",
      "name": "Wailing Caverns",
      "type": "dungeon",
      "zone": "The Barrens",
      "levelRange": [17, 24],
      "phase": "classic",
      "notes": "Located south of Crossroads near the Lushwater Oasis.",
      "quests": [
        {
          "id": 1487,
          "name": "Deviate Eradication",
          "faction": "both",
          "questGiver": "Ebru — cave above the Wailing Caverns entrance, The Barrens",
          "rewards": [
            { "id": 6476, "name": "Pattern: Deviate Scale Belt" },
            { "id": 8071, "name": "Sizzle Stick" },
            { "id": 6481, "name": "Dagmire Gauntlets" }
          ],
          "note": "Kill 7 each of 4 deviate creature types inside the dungeon."
        },
        {
          "id": 1486,
          "name": "Deviate Hides",
          "faction": "both",
          "questGiver": "Nalpak — cave above the Wailing Caverns entrance, The Barrens",
          "rewards": [
            { "id": 6480, "name": "Slick Deviate Leggings" },
            { "id": 918, "name": "Deviate Hide Pack" }
          ],
          "note": "Collect 20 Deviate Hides from creatures inside the dungeon."
        },
        {
          "id": 1491,
          "name": "Smart Drinks",
          "faction": "both",
          "questGiver": "Mebok Mizzyrix — Ratchet",
          "prereq": "Raptor Horns",
          "note": "Collect 6 portions of Wailing Essence from ectoplasmic creatures inside the dungeon."
        },
        {
          "id": 962,
          "name": "Serpentbloom",
          "faction": "horde",
          "questGiver": "Apothecary Zamah — Thunder Bluff",
          "rewards": [ { "id": 10919, "name": "Apothecary Gloves" } ],
          "note": "Collect 10 Serpentbloom, found growing inside the dungeon."
        },
        {
          "id": 914,
          "name": "Leaders of the Fang",
          "faction": "horde",
          "questGiver": "Nara Wildmane — Elder Rise, Thunder Bluff",
          "prereq": "Long chain starting with Hamuul Runetotem in The Barrens, culminating in the Nara Wildmane quest",
          "rewards": [
            { "id": 6505, "name": "Crescent Staff" },
            { "id": 6504, "name": "Wingblade" }
          ],
          "note": "Kill the four Fang leaders (Lord Cobrahn, Lady Anacondra, Lord Pythas, Lord Serpentis) inside the dungeon and collect their gems."
        },
        {
          "id": 6981,
          "name": "The Glowing Shard",
          "faction": "both",
          "questGiver": "Item-start — drops from Mutanus the Devourer (final boss) inside Wailing Caverns",
          "note": "Leads onward into the separate Horde/Alliance versions of the 'In Nightmares' chain."
        }
      ]
    },
    {
      "id": "the-deadmines",
      "name": "The Deadmines",
      "type": "dungeon",
      "zone": "Westfall",
      "levelRange": [15, 23],
      "phase": "classic",
      "notes": "Entrance at the Defias Hideout in Moonbrook, Westfall. The lowest-level Alliance instance; both factions can physically enter but Horde has no associated quests.",
      "quests": [
        {
          "id": 166,
          "name": "The Defias Brotherhood",
          "faction": "alliance",
          "questGiver": "Gryan Stoutmantle — Sentinel Hill, Westfall",
          "prereq": "Final part (7 of 7) of the Defias Brotherhood chain, which starts with Gryan Stoutmantle and does not itself require the dungeon",
          "rewards": [
            { "id": 6087, "name": "Chausses of Westfall" },
            { "id": 2041, "name": "Tunic of Westfall" },
            { "id": 2042, "name": "Staff of Westfall" }
          ],
          "note": "Kill Edwin VanCleef inside The Deadmines and loot his head."
        },
        {
          "id": 373,
          "name": "The Unsent Letter",
          "faction": "alliance",
          "questGiver": "Item-start (An Unsent Letter, loot from Edwin VanCleef) — turned in to Baros Alexston, City Hall, Stormwind",
          "prereq": "Obtained by defeating Edwin VanCleef inside The Deadmines",
          "note": "Leads onward into a follow-up chain involving the Stormwind Stockade."
        },
        {
          "id": 2040,
          "name": "Underground Assault",
          "faction": "alliance",
          "questGiver": "Shoni the Shilent — Dwarven District, Stormwind",
          "rewards": [
            { "id": 7606, "name": "Polar Gauntlets" },
            { "id": 7607, "name": "Sable Wand" }
          ],
          "note": "Retrieve the Gnoam Sprecklesprocket from inside The Deadmines."
        }
      ]
    },
    {
      "id": "shadowfang-keep",
      "name": "Shadowfang Keep",
      "type": "dungeon",
      "zone": "Silverpine Forest",
      "levelRange": [18, 24],
      "phase": "classic",
      "notes": "On a bluff overlooking Pyrewood Village, near the Gilneas border.",
      "quests": [
        {
          "id": 1014,
          "name": "Arugal Must Die",
          "faction": "horde",
          "questGiver": "Dalar Dawnweaver — The Sepulcher, Silverpine Forest",
          "rewards": [ { "id": 6414, "name": "Seal of Sylvanas" } ],
          "note": "Kill Archmage Arugal inside Shadowfang Keep and loot his head."
        },
        {
          "id": 1098,
          "name": "Deathstalkers in Shadowfang",
          "faction": "horde",
          "questGiver": "High Executor Hadrec — The Sepulcher, Silverpine Forest",
          "rewards": [ { "id": 3324, "name": "Ghostly Mantle" } ],
          "note": "Find Deathstalker Adamant and Deathstalker Vincent's corpse inside the keep's courtyard."
        },
        {
          "id": 1013,
          "name": "The Book of Ur",
          "faction": "horde",
          "questGiver": "Keeper Bel'dugur — The Apothecarium, Undercity",
          "rewards": [
            { "id": 6335, "name": "Grizzled Boots" },
            { "id": 4534, "name": "Steel-Clasped Bracers" }
          ],
          "note": "Retrieve the Book of Ur from the bookshelf in Fenrus the Devourer's room inside the keep."
        },
        {
          "id": 1740,
          "name": "The Orb of Soran'ruk",
          "faction": "both",
          "questGiver": "Doan Karhan — The Barrens",
          "prereq": "Warlock class quest, level 20",
          "rewards": [
            { "id": 6898, "name": "Orb of Soran'ruk" },
            { "id": 15109, "name": "Staff of Soran'ruk" }
          ],
          "note": "One of four required fragments (Large Soran'ruk Fragment) is looted from a wizard inside Shadowfang Keep; the other three come from Blackfathom Deeps."
        },
        {
          "id": 1654,
          "name": "The Test of Righteousness (2)",
          "faction": "alliance",
          "questGiver": "Jordan Stilwell — Ironforge",
          "prereq": "Paladin class quest; The Test of Righteousness (part 1) and the preceding Tome of Valor chain",
          "note": "One of four required items, Jordan's Smithing Hammer, is found in the stables in Shadowfang Keep's first courtyard; the other items come from elsewhere (e.g. a Kor Gem from Blackfathom Deeps). Reward is XP only — the eventual weapon Verigan's Fist comes from a later, non-dungeon step."
        }
      ]
    },
    {
      "id": "blackfathom-deeps",
      "name": "Blackfathom Deeps",
      "type": "dungeon",
      "zone": "Ashenvale",
      "levelRange": [20, 27],
      "phase": "classic",
      "notes": "Sunken temple beneath the sea, entered from the coast of Ashenvale. Alliance chain is given via Darnassus/Ironforge/Auberdine NPCs and centers on Argent Guard Thaelrid inside BFD; Horde chain is given via Je'neu Sancrea at Zoram'gar Outpost, Ashenvale.",
      "quests": [
        {
          "id": 971,
          "name": "Knowledge in the Deeps",
          "faction": "alliance",
          "questGiver": "Gerrig Bonegrip — Forlorn Cavern, Ironforge",
          "rewards": [ { "id": 6743, "name": "Sustaining Ring" } ],
          "note": "The Lorgalis Manuscript must be retrieved from inside Blackfathom Deeps."
        },
        {
          "id": 1198,
          "name": "In Search of Thaelrid",
          "faction": "alliance",
          "questGiver": "Dawnwatcher Shaedlass — Darnassus",
          "note": "Objective is to physically find Argent Guard Thaelrid inside Blackfathom Deeps; he also finishes the quest and leads into Blackfathom Villainy."
        },
        {
          "id": 1199,
          "name": "Twilight Falls",
          "faction": "alliance",
          "questGiver": "Argent Guard Manados — Darnassus",
          "rewards": [
            { "id": 6998, "name": "Nimbus Boots" },
            { "id": 7000, "name": "Heartwood Girdle" }
          ],
          "note": "Requires 10 Twilight Pendants looted inside Blackfathom Deeps."
        },
        {
          "id": 1200,
          "name": "Blackfathom Villainy",
          "faction": "alliance",
          "questGiver": "Dawnwatcher Selgorm — Darnassus",
          "prereq": "In Search of Thaelrid",
          "rewards": [
            { "id": 7001, "name": "Gravestone Scepter" },
            { "id": 7002, "name": "Arctic Buckler" }
          ],
          "note": "Requires killing Twilight Lord Kelris inside Blackfathom Deeps."
        },
        {
          "id": 1275,
          "name": "Researching the Corruption",
          "faction": "alliance",
          "questGiver": "Gershala Nightwhisper — Auberdine, Darkshore",
          "rewards": [
            { "id": 7003, "name": "Beetle Clasps" },
            { "id": 7004, "name": "Prelacy Cape" }
          ],
          "note": "Requires collecting 8 Corrupted Brain Stems from satyr/naga inside Blackfathom Deeps."
        },
        {
          "id": 6561,
          "name": "Blackfathom Villainy",
          "faction": "horde",
          "questGiver": "Argent Guard Thaelrid — inside Blackfathom Deeps",
          "rewards": [
            { "id": 7001, "name": "Gravestone Scepter" },
            { "id": 7002, "name": "Arctic Buckler" }
          ],
          "note": "Horde counterpart of the Alliance Blackfathom Villainy; turned in to Bashana Runetotem in Thunder Bluff, same objective (kill Twilight Lord Kelris) and same reward items."
        },
        {
          "id": 6563,
          "name": "The Essence of Aku'Mai",
          "faction": "horde",
          "questGiver": "Je'neu Sancrea — Zoram'gar Outpost, Ashenvale",
          "prereq": "Trouble in the Deeps (breadcrumb given by Je'neu Sancrea)",
          "note": "Requires collecting 20 Sapphires of Aku'Mai from naga inside Blackfathom Deeps."
        },
        {
          "id": 6565,
          "name": "Allegiance to the Old Gods",
          "faction": "horde",
          "questGiver": "Je'neu Sancrea — Zoram'gar Outpost, Ashenvale",
          "prereq": "Allegiance to the Old Gods, pt. 1 (starts from a Damp Note item)",
          "rewards": [
            { "id": 17694, "name": "Band of the Fist" },
            { "id": 17695, "name": "Chestnut Mantle" }
          ],
          "note": "Requires killing the rare Lorgus Jett inside Blackfathom Deeps."
        },
        {
          "id": 6921,
          "name": "Amongst the Ruins",
          "faction": "horde",
          "questGiver": "Je'neu Sancrea — Zoram'gar Outpost, Ashenvale",
          "note": "Requires retrieving the Fathom Core from inside Blackfathom Deeps."
        }
      ]
    },
    {
      "id": "the-stockade",
      "name": "The Stockade",
      "type": "dungeon",
      "zone": "Stormwind",
      "levelRange": [22, 30],
      "phase": "classic",
      "notes": "Alliance-only dungeon, located in Stormwind City's Old Town (prison level).",
      "quests": [
        {
          "id": 391,
          "name": "The Stockade Riots",
          "faction": "alliance",
          "questGiver": "Warden Thelwater — The Stockade",
          "prereq": "Bazil Thredd (Warden Thelwater, breadcrumb following The Unsent Letter chain)",
          "note": "Requires killing Bazil Thredd inside The Stockade."
        },
        {
          "id": 387,
          "name": "Quell The Uprising",
          "faction": "alliance",
          "questGiver": "Warden Thelwater — The Stockade",
          "note": "Requires killing 10 Defias Prisoners, 8 Defias Convicts, and 8 Defias Insurgents inside The Stockade."
        },
        {
          "id": 377,
          "name": "Crime and Punishment",
          "faction": "alliance",
          "questGiver": "Councilman Millstipe — Darkshire, Duskwood",
          "rewards": [
            { "id": 2033, "name": "Ambassador's Boots" },
            { "id": 2906, "name": "Darkshire Mail Leggings" }
          ],
          "note": "Requires killing Dextren Ward inside The Stockade and looting his hand."
        },
        {
          "id": 378,
          "name": "The Fury Runs Deep",
          "faction": "alliance",
          "questGiver": "Motley Garmason — Wetlands",
          "rewards": [
            { "id": 3562, "name": "Belt of Vindication" },
            { "id": 1264, "name": "Headbasher" }
          ],
          "note": "Requires killing Kam Deepfury inside The Stockade and looting his head."
        },
        {
          "id": 386,
          "name": "What Comes Around...",
          "faction": "alliance",
          "questGiver": "Guard Berton — Lakeshire, Redridge Mountains",
          "rewards": [
            { "id": 3400, "name": "Lucine Longsword" },
            { "id": 1317, "name": "Hardened Root Staff" }
          ],
          "note": "Requires killing Targorr the Dread inside The Stockade and looting his head."
        },
        {
          "id": 388,
          "name": "The Color of Blood",
          "faction": "alliance",
          "questGiver": "Nikova Raskol — Stormwind City",
          "note": "Requires collecting 10 Red Wool Bandanas from Defias inside The Stockade."
        }
      ]
    },
    {
      "id": "gnomeregan",
      "name": "Gnomeregan",
      "type": "dungeon",
      "zone": "Dun Morogh",
      "levelRange": [24, 32],
      "phase": "classic",
      "notes": "Entrance is a physical cave in Dun Morogh with no faction-locked portal, so Horde can walk in, but only one Horde quest actually requires entering the instance (Rig Wars).",
      "quests": [
        {
          "id": 2904,
          "name": "A Fine Mess",
          "faction": "both",
          "questGiver": "Kernobee — inside Gnomeregan",
          "rewards": [
            { "id": 9535, "name": "Fire-welded Bracers" },
            { "id": 9536, "name": "Fairywing Mantle" }
          ],
          "note": "Escort quest: Kernobee is found and picked up inside Gnomeregan and escorted to the 'Clockwerk Run' exit."
        },
        {
          "id": 2841,
          "name": "Rig Wars",
          "faction": "horde",
          "questGiver": "Nogg — Orgrimmar",
          "rewards": [
            { "id": 9623, "name": "Civinad Robes" },
            { "id": 9624, "name": "Triprunner Dungarees" },
            { "id": 9625, "name": "Dual Reinforced Leggings" }
          ],
          "note": "Requires retrieving the Rig Blueprints and Thermaplugg's Safe Combination from inside Gnomeregan; the only Horde-completable-inside Gnomeregan quest."
        },
        {
          "id": 2929,
          "name": "The Grand Betrayal",
          "faction": "alliance",
          "questGiver": "High Tinker Mekkatorque — Ironforge",
          "rewards": [
            { "id": 9623, "name": "Civinad Robes" },
            { "id": 9624, "name": "Triprunner Dungarees" },
            { "id": 9625, "name": "Dual Reinforced Leggings" }
          ],
          "note": "Requires killing Mekgineer Thermaplugg inside Gnomeregan; shares the same reward-item set as the Horde Rig Wars quest."
        },
        {
          "id": 2922,
          "name": "Save Techbot's Brain!",
          "faction": "alliance",
          "questGiver": "Tinkmaster Overspark — Tinker Town, Ironforge",
          "note": "Requires retrieving Techbot's Memory Core from inside Gnomeregan."
        },
        {
          "id": 2924,
          "name": "Essential Artificials",
          "faction": "alliance",
          "questGiver": "Klockmort Spannerspan — Tinker Town, Ironforge",
          "note": "Requires looting 12 Essential Artificials from containers deep inside Gnomeregan."
        },
        {
          "id": 2930,
          "name": "Data Rescue",
          "faction": "alliance",
          "questGiver": "Master Mechanic Castpipe — Ironforge",
          "rewards": [
            { "id": 9605, "name": "Repairman's Cape" },
            { "id": 9604, "name": "Mechanic's Pipehammer" }
          ],
          "note": "Requires retrieving a Prismatic Punch Card from a Matrix Punchograph terminal deep inside Gnomeregan."
        },
        {
          "id": 2962,
          "name": "The Only Cure is More Green Glow",
          "faction": "alliance",
          "questGiver": "Ozzie Togglevolt — Kharanos, Dun Morogh",
          "note": "Explicitly requires traveling into Gnomeregan to retrieve High Potency Radioactive Fallout."
        }
      ]
    },
    {
      "id": "razorfen-kraul",
      "name": "Razorfen Kraul",
      "type": "dungeon",
      "zone": "The Barrens",
      "levelRange": [30, 40],
      "phase": "classic",
      "notes": "Ancient quilboar warren in southwestern Barrens.",
      "quests": [
        {
          "id": 1101,
          "name": "The Crone of the Kraul",
          "faction": "alliance",
          "questGiver": "Falfindel Waywarder — Thalanaar, Feralas",
          "prereq": "Lonebrow's Journal (Falfindel Waywarder)",
          "rewards": [
            { "id": 4197, "name": "Berylline Pads" },
            { "id": 6742, "name": "Stonefist Girdle" },
            { "id": 6725, "name": "Marbled Buckler" }
          ],
          "note": "Kill Charlga Razorflank (final boss) and loot Razorflank's Medallion."
        },
        {
          "id": 1102,
          "name": "A Vengeful Fate",
          "faction": "horde",
          "questGiver": "Auld Stonespire — Thunder Bluff",
          "rewards": [
            { "id": 4197, "name": "Berylline Pads" },
            { "id": 6742, "name": "Stonefist Girdle" },
            { "id": 6725, "name": "Marbled Buckler" }
          ],
          "note": "Horde counterpart to The Crone of the Kraul; kill Charlga Razorflank and loot Razorflank's Heart."
        },
        {
          "id": 1144,
          "name": "Willix the Importer",
          "faction": "both",
          "questGiver": "Willix the Importer — inside Razorfen Kraul",
          "rewards": [
            { "id": 6748, "name": "Monkey Ring" },
            { "id": 6750, "name": "Snake Hoop" },
            { "id": 6749, "name": "Tiger Band" }
          ],
          "note": "Escort Willix to the exit of Razorfen Kraul."
        },
        {
          "id": 1109,
          "name": "Going, Going, Guano!",
          "faction": "horde",
          "questGiver": "Master Apothecary Faranell — Undercity",
          "note": "Collect a pile of Kraul Guano from bats inside Razorfen Kraul. Leads into Hearts of Zeal (Scarlet Monastery, Graveyard wing)."
        },
        {
          "id": 1221,
          "name": "Blueleaf Tubers",
          "faction": "both",
          "questGiver": "Mebok Mizzyrix — Ratchet",
          "rewards": [
            { "id": 6755, "name": "A Small Container of Gems" }
          ],
          "note": "Inside Razorfen Kraul: use the Crate with Holes to summon a Snufflenose Gopher, then the Command Stick to have it dig up 6 Blueleaf Tubers."
        },
        {
          "id": 1142,
          "name": "Mortality Wanes",
          "faction": "alliance",
          "questGiver": "Heralath Fallowbrook — Darnassus",
          "rewards": [
            { "id": 6751, "name": "Mourning Shawl" },
            { "id": 6752, "name": "Lancer Boots" }
          ],
          "note": "Treshala's Pendant is a random drop from quilboar inside Razorfen Kraul; turned in to Treshala Fallowbrook in Darnassus."
        }
      ]
    },
    {
      "id": "scarlet-monastery",
      "name": "Scarlet Monastery",
      "type": "dungeon",
      "zone": "Tirisfal Glades",
      "levelRange": [26, 45],
      "phase": "classic",
      "notes": "Single complex with four separately-entered wings (Graveyard, Library, Armory, Cathedral) — TBC Classic Anniversary retains the classic 4-wing version, not the retail merged instance. Each quest's note indicates which wing it belongs to.",
      "quests": [
        {
          "id": 1051,
          "name": "Vorrel's Revenge",
          "faction": "horde",
          "questGiver": "Vorrel Sengutz — inside Scarlet Monastery, on a torture rack near Interrogator Vishas",
          "rewards": [
            { "id": 7751, "name": "Vorrel's Boots" },
            { "id": 7750, "name": "Mantle of Woe" },
            { "id": 4643, "name": "Grimsteel Cape" }
          ],
          "note": "Graveyard wing. Retrieve Vorrel's Wedding Ring (dropped by Interrogator Vishas's wife 'Nancy' at Lake Lordamere) and return it to Monika Sengutz in Tarren Mill."
        },
        {
          "id": 1113,
          "name": "Hearts of Zeal",
          "faction": "horde",
          "questGiver": "Master Apothecary Faranell — Undercity",
          "prereq": "Going, Going, Guano! (Razorfen Kraul)",
          "note": "Graveyard wing (mobs found throughout the monastery). Collect 20 Heart of Zeal from Scarlet Crusade members."
        },
        {
          "id": 1050,
          "name": "Mythology of the Titans",
          "faction": "alliance",
          "questGiver": "Librarian Mae Paledust — Hall of Explorers, Ironforge",
          "rewards": [
            { "id": 7746, "name": "Explorers' League Commendation" }
          ],
          "note": "Library wing. Retrieve the book Mythology of the Titans from the library."
        },
        {
          "id": 1049,
          "name": "Compendium of the Fallen",
          "faction": "horde",
          "questGiver": "Sage Truthseeker — Thunder Bluff",
          "rewards": [
            { "id": 7747, "name": "Vile Protector" },
            { "id": 17508, "name": "Forcestone Buckler" },
            { "id": 7749, "name": "Omega Orb" }
          ],
          "note": "Library wing. Retrieve the Compendium of the Fallen book from a bookcase."
        },
        {
          "id": 1160,
          "name": "Test of Lore",
          "faction": "horde",
          "questGiver": "Parqual Fintallas — Undercity",
          "prereq": "Long lore chain beginning with Test of Faith (Thousand Needles)",
          "note": "Library wing. Retrieve the book Beginnings of the Undead Threat from a table in the Library."
        },
        {
          "id": 1951,
          "name": "Rituals of Power",
          "faction": "both",
          "questGiver": "Tabetha — Dustwallow Marsh",
          "prereq": "Mage class quest chain starting with Get the Scoop (Tabetha)",
          "rewards": [
            { "id": 7514, "name": "Icefury Wand" },
            { "id": 11263, "name": "Nether Force Wand" },
            { "id": 7513, "name": "Ragefire Wand" }
          ],
          "note": "Library wing; Mage class quest. Retrieve the book Rituals of Power from the Library and bring it to Tabetha. Wand choice is granted by the immediate follow-up turn-in (Mage's Wand), which itself has no dungeon requirement."
        },
        {
          "id": 1053,
          "name": "In the Name of the Light",
          "faction": "alliance",
          "questGiver": "Raleigh the Devout — Southshore, Hillsbrad Foothills",
          "prereq": "\"Down the Scarlet Path\" chain, beginning with Brother Crowley in Stormwind Cathedral",
          "rewards": [
            { "id": 6829, "name": "Sword of Serenity" },
            { "id": 6830, "name": "Bonebiter" },
            { "id": 6831, "name": "Black Menace" },
            { "id": 11262, "name": "Orb of Lorica" }
          ],
          "note": "Spans Library, Armory, and Cathedral wings — requires killing Houndmaster Loksey, Herod, Scarlet Commander Mograine, and High Inquisitor Whitemane."
        },
        {
          "id": 1048,
          "name": "Into the Scarlet Monastery",
          "faction": "horde",
          "questGiver": "Varimathras — Undercity, Royal Quarter",
          "rewards": [
            { "id": 6802, "name": "Sword of Omen" },
            { "id": 6803, "name": "Prophetic Cane" },
            { "id": 10711, "name": "Dragon's Blood Necklace" }
          ],
          "note": "Spans Library, Armory, and Cathedral wings — Horde counterpart to In the Name of the Light; kill the same four bosses."
        }
      ]
    },
    {
      "id": "razorfen-downs",
      "name": "Razorfen Downs",
      "type": "dungeon",
      "zone": "The Barrens",
      "levelRange": [37, 47],
      "phase": "classic",
      "notes": "Quilboar capital in southeastern Barrens.",
      "quests": [
        {
          "id": 3636,
          "name": "Bring the Light",
          "faction": "alliance",
          "questGiver": "Archbishop Benedictus — Stormwind Cathedral",
          "rewards": [
            { "id": 10823, "name": "Vanquisher's Sword" },
            { "id": 10824, "name": "Amberglow Talisman" }
          ],
          "note": "Slay Amnennar the Coldbringer inside Razorfen Downs."
        },
        {
          "id": 3341,
          "name": "Bring the End",
          "faction": "horde",
          "questGiver": "Andrew Brownell — Undercity",
          "rewards": [
            { "id": 10823, "name": "Vanquisher's Sword" },
            { "id": 10824, "name": "Amberglow Talisman" }
          ],
          "note": "Horde counterpart to Bring the Light; kill Amnennar the Coldbringer inside Razorfen Downs and return his skull."
        },
        {
          "id": 3523,
          "name": "Scourge of the Downs",
          "faction": "both",
          "questGiver": "Belnistrasz — imprisoned inside Razorfen Downs",
          "note": "Neutral. Starts by finding Belnistrasz held captive inside Razorfen Downs; hand back his Oathstone as a sign of commitment. Precedes Extinguishing the Idol."
        },
        {
          "id": 3525,
          "name": "Extinguishing the Idol",
          "faction": "both",
          "questGiver": "Belnistrasz — inside Razorfen Downs",
          "prereq": "Scourge of the Downs",
          "rewards": [
            { "id": 10710, "name": "Dragonclaw Ring" }
          ],
          "note": "Neutral. Escort/protect Belnistrasz while he performs a ritual at the Quilboar idol inside Razorfen Downs."
        }
      ]
    }
  ]
}
);
