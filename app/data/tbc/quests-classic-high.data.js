/* BiS Companion data — TBC Classic (Anniversary) quests for the classic 35-60 dungeons:
   Uldaman, Zul'Farrak, Maraudon, Sunken Temple, Blackrock Depths, Lower/Upper Blackrock Spire,
   Scholomance, Stratholme, Dire Maul. All quest/item IDs verified against Wowhead TBC
   (wowhead.com/tbc/quest=<id>, wowhead.com/tbc/item=<id>). Entries with soft-confirmed
   quest-giver details are flagged in their "note" field rather than fabricated. */
WOWDATA.register(
{
  "kind": "quests",
  "expansion": "tbc",
  "instances": [
    {
      "id": "uldaman",
      "name": "Uldaman",
      "type": "dungeon",
      "zone": "Uldaman, Badlands",
      "levelRange": [35, 45],
      "phase": "classic",
      "notes": "Ancient titan vault; the Alliance/Horde necklace-restoration and 'gem hunt' chains mirror each other and route entirely through Talvash del Kissel (Alliance, Ironforge) / Dran Droffers (Horde, Orgrimmar). Unchanged from vanilla Classic in TBC.",
      "quests": [
        {
          "id": 1360,
          "name": "Reclaimed Treasures",
          "faction": "alliance",
          "questGiver": "Krom Stoutarm — Hall of Explorers, Ironforge",
          "note": "Retrieve his stolen treasure from a chest in Uldaman's North Common Hall. No item reward."
        },
        {
          "id": 2398,
          "name": "The Lost Dwarves",
          "faction": "alliance",
          "questGiver": "Prospector Stormpike — Ironforge",
          "note": "Find Baelog alive inside Uldaman. Leads to The Hidden Chamber."
        },
        {
          "id": 2240,
          "name": "The Hidden Chamber",
          "faction": "alliance",
          "questGiver": "Baelog — inside Uldaman",
          "prereq": "The Lost Dwarves",
          "rewards": [
            { "id": 9626, "name": "Dwarven Charge" },
            { "id": 9627, "name": "Explorers' League Lodestar" }
          ],
          "note": "Reward is a choice of one."
        },
        {
          "id": 17,
          "name": "Uldaman Reagent Run",
          "faction": "alliance",
          "questGiver": "Ghak Healtouch — Thelsamar, Loch Modan",
          "prereq": "Badlands Reagent Run",
          "rewards": [ { "id": 9030, "name": "Restorative Potion" } ],
          "note": "Grants 5x Restorative Potion."
        },
        {
          "id": 704,
          "name": "Agmond's Fate",
          "faction": "alliance",
          "questGiver": "Prospector Ironband — Loch Modan",
          "prereq": "Murdaloc (Ironband Wants You! / Find Agmond chain)",
          "rewards": [ { "id": 4980, "name": "Prospector Gloves" } ],
          "note": "Collect 4 Carved Stone Urns from the entrance tunnel."
        },
        {
          "id": 2198,
          "name": "The Shattered Necklace",
          "faction": "alliance",
          "questGiver": "Talvash del Kissel — Mystic Ward, Ironforge",
          "note": "Triggered by looting a Shattered Necklace off Dark Iron dwarves inside Uldaman. No item reward."
        },
        {
          "id": 2199,
          "name": "Lore for a Price",
          "faction": "alliance",
          "questGiver": "Talvash del Kissel — Ironforge",
          "prereq": "The Shattered Necklace",
          "note": "Bring 5 Silver Bars. No item reward."
        },
        {
          "id": 2200,
          "name": "Back to Uldaman",
          "faction": "alliance",
          "questGiver": "Talvash del Kissel — Ironforge",
          "prereq": "Lore for a Price",
          "note": "Find the Remains of a Paladin inside Uldaman. No item reward."
        },
        {
          "id": 2201,
          "name": "Find the Gems",
          "faction": "alliance",
          "questGiver": "Remains of a Paladin — inside Uldaman",
          "prereq": "Back to Uldaman",
          "note": "Collect a Ruby, Sapphire, and Topaz, all inside the instance. No item reward."
        },
        {
          "id": 2204,
          "name": "Restoring the Necklace",
          "faction": "alliance",
          "questGiver": "Talvash's Scrying Bowl — inside Uldaman",
          "prereq": "Find the Gems",
          "note": "Obtain a power source from Archaedas. No item reward."
        },
        {
          "id": 2361,
          "name": "Restoring the Necklace",
          "faction": "alliance",
          "questGiver": "Talvash del Kissel — Ironforge",
          "prereq": "Restoring the Necklace (Talvash's Scrying Bowl)",
          "rewards": [ { "id": 7673, "name": "Talvash's Enhancing Necklace" } ]
        },
        {
          "id": 1139,
          "name": "The Lost Tablets of Will",
          "faction": "alliance",
          "questGiver": "Advisor Belgrum — Ironforge",
          "prereq": "An Ambassador of Evil",
          "rewards": [ { "id": 6723, "name": "Medal of Courage" } ],
          "note": "Find the Tablet of Will inside Uldaman."
        },
        {
          "id": 720,
          "name": "A Sign of Hope",
          "faction": "alliance",
          "questGiver": "Prospector Ryedol — Badlands",
          "note": "Triggered by a Crumpled Map. No item reward."
        },
        {
          "id": 721,
          "name": "A Sign of Hope",
          "faction": "alliance",
          "questGiver": "Prospector Ryedol — Badlands",
          "prereq": "A Sign of Hope (Crumpled Map)",
          "note": "Find Hammertoe Grez alive inside Uldaman. No item reward."
        },
        {
          "id": 722,
          "name": "Amulet of Secrets",
          "faction": "alliance",
          "questGiver": "Hammertoe Grez — inside Uldaman",
          "prereq": "A Sign of Hope",
          "note": "Retrieve an amulet from Magregan Deepshadow, just outside the instance. No item reward."
        },
        {
          "id": 723,
          "name": "Prospect of Faith",
          "faction": "alliance",
          "questGiver": "Hammertoe Grez — inside Uldaman",
          "prereq": "Amulet of Secrets",
          "note": "Chain continues outside to Historian Karnik (Ironforge) and back into The Lost Tablets of Will. No item reward."
        },
        {
          "id": 2279,
          "name": "The Platinum Discs",
          "faction": "alliance",
          "questGiver": "Discs of Norgannon (object, final room past Archaedas) — inside Uldaman; turn in to High Explorer Magellas, Ironforge",
          "note": "+350 Ironforge reputation. No item reward."
        },
        {
          "id": 2342,
          "name": "Reclaimed Treasures",
          "faction": "horde",
          "questGiver": "Patrick Garrett — Undercity",
          "note": "South Common Hall chest. No item reward."
        },
        {
          "id": 2202,
          "name": "Uldaman Reagent Run",
          "faction": "horde",
          "questGiver": "Jarkal Mossmeld — Kargath, Badlands",
          "rewards": [ { "id": 9030, "name": "Restorative Potion" } ],
          "note": "Grants 5x Restorative Potion."
        },
        {
          "id": 2283,
          "name": "Necklace Recovery",
          "faction": "horde",
          "questGiver": "Dran Droffers — Orgrimmar",
          "note": "Triggered by the Shattered Necklace quest item. No item reward."
        },
        {
          "id": 2284,
          "name": "Necklace Recovery, Take 2",
          "faction": "horde",
          "questGiver": "Dran Droffers — Orgrimmar",
          "prereq": "Necklace Recovery",
          "note": "Find the Remains of a Paladin inside Uldaman. No item reward."
        },
        {
          "id": 2318,
          "name": "Translating the Journal",
          "faction": "horde",
          "questGiver": "Remains of a Paladin — inside Uldaman",
          "prereq": "Necklace Recovery, Take 2",
          "note": "No item reward."
        },
        {
          "id": 2338,
          "name": "Translating the Journal",
          "faction": "horde",
          "questGiver": "Jarkal Mossmeld — Kargath, Badlands",
          "prereq": "Translating the Journal (Remains of a Paladin)",
          "note": "No item reward."
        },
        {
          "id": 2339,
          "name": "Find the Gems and Power Source",
          "faction": "horde",
          "questGiver": "Jarkal Mossmeld — Kargath, Badlands",
          "prereq": "Translating the Journal",
          "note": "All 3 gems plus the power source, all inside Uldaman. No item reward."
        },
        {
          "id": 2340,
          "name": "Deliver the Gems",
          "faction": "horde",
          "questGiver": "Jarkal Mossmeld — Kargath, Badlands",
          "prereq": "Find the Gems and Power Source",
          "note": "Deliver to Dran Droffers, Orgrimmar. No item reward."
        },
        {
          "id": 2341,
          "name": "Necklace Recovery, Take 3",
          "faction": "horde",
          "questGiver": "Dran Droffers — Orgrimmar",
          "prereq": "Deliver the Gems",
          "rewards": [ { "id": 7888, "name": "Jarkal's Enhancing Necklace" } ]
        },
        {
          "id": 2280,
          "name": "The Platinum Discs",
          "faction": "horde",
          "questGiver": "Discs of Norgannon (object, final room past Archaedas) — inside Uldaman; turn in to Sage Truthseeker, Thunder Bluff",
          "note": "+350 Thunder Bluff reputation. No item reward."
        },
        {
          "id": 2418,
          "name": "Power Stones",
          "faction": "both",
          "questGiver": "Rigglefuzz — Badlands",
          "rewards": [
            { "id": 9522, "name": "Energized Stone Circle" },
            { "id": 10358, "name": "Duracin Bracers" },
            { "id": 10359, "name": "Everlast Boots" }
          ],
          "note": "Reward is a choice of one. Power Stones drop from dwarves inside Uldaman as well as just outside the entrance."
        },
        {
          "id": 709,
          "name": "Solution to Doom",
          "faction": "both",
          "questGiver": "Theldurin the Lost — Badlands",
          "rewards": [ { "id": 4746, "name": "Doomsayer's Robe" } ],
          "note": "The Tablet of Ryun'eh is in the Sealed Hall, deep inside Uldaman."
        },
        {
          "id": 1956,
          "name": "Power in Uldaman",
          "faction": "both",
          "questGiver": "Tabetha — Dustwallow Marsh",
          "note": "Mage class quest. Kill the Obsidian Sentinel in Echo'mok Cavern, inside Uldaman. No item reward."
        }
      ]
    },
    {
      "id": "zulfarrak",
      "name": "Zul'Farrak",
      "type": "dungeon",
      "zone": "Zul'Farrak, Tanaris",
      "levelRange": [44, 52],
      "phase": "classic",
      "notes": "Trollish city dungeon. Most quests pick up outside (Gadgetzan, Steamwheedle Port, or further afield) and require killing a specific ZF boss or looting a specific object inside. Unchanged from vanilla Classic in TBC.",
      "quests": [
        {
          "id": 2770,
          "name": "Gahz'rilla",
          "faction": "both",
          "questGiver": "Wizzle Brassbolts — Mirage Raceway, Shimmering Flats, Thousand Needles",
          "rewards": [ { "id": 11122, "name": "Carrot on a Stick" } ],
          "note": "Kill Gahz'rilla, the crocolisk summoned in the sacred pool."
        },
        {
          "id": 2936,
          "name": "The Spider God",
          "faction": "horde",
          "questGiver": "Master Gadrin — Sen'jin Village, Durotar",
          "prereq": "Multi-step Hinterlands/Witherbark troll chain",
          "note": "Read the Tablet of Theka inside Zul'Farrak. +500 Darkspear Trolls reputation. No item reward."
        },
        {
          "id": 2991,
          "name": "Nekrum's Medallion",
          "faction": "alliance",
          "questGiver": "Thadius Grimshade — Nethergarde Keep, Blasted Lands",
          "prereq": "Part of a 7-quest chain starting in the Hinterlands",
          "note": "Kill Nekrum Gutchewer at the pyramid event; chain continues to Saving Sharpbeak. No item reward."
        },
        {
          "id": 2865,
          "name": "Scarab Shells",
          "faction": "both",
          "questGiver": "Tran'rek — Gadgetzan, Tanaris",
          "prereq": "Tran'rek",
          "note": "Collect 5 Uncracked Scarab Shells from Zul'Farrak scarabs. No item reward."
        },
        {
          "id": 3042,
          "name": "Troll Temper",
          "faction": "both",
          "questGiver": "Trenton Lighthammer — Gadgetzan, Tanaris",
          "note": "Collect 20 Vials of Troll Temper from Zul'Farrak trolls. No item reward."
        },
        {
          "id": 2846,
          "name": "Tiara of the Deep",
          "faction": "both",
          "questGiver": "Tabetha — Dustwallow Marsh",
          "rewards": [
            { "id": 9527, "name": "Spellshifter Rod" },
            { "id": 9531, "name": "Gemshale Pauldrons" }
          ],
          "note": "Kill Hydromancer Velratha and retrieve the Tiara of the Deep. Reward is a choice of one."
        },
        {
          "id": 2768,
          "name": "Divino-matic Rod",
          "faction": "both",
          "questGiver": "Chief Engineer Bilgewhizzle — Gadgetzan, Tanaris",
          "rewards": [
            { "id": 9533, "name": "Masons Fraternity Ring" },
            { "id": 9534, "name": "Engineer's Guild Headpiece" }
          ],
          "note": "Kill Sergeant Bly after the pyramid event to obtain the rod. Reward is a choice of one."
        },
        {
          "id": 3527,
          "name": "The Prophecy of Mosh'aru",
          "faction": "both",
          "questGiver": "Yeh'kinya — Steamwheedle Port, Tanaris",
          "prereq": "Screecher Spirits",
          "note": "Loot the First and Second Mosh'aru Tablets (Theka the Martyr, Hydromancer Velratha), both inside Zul'Farrak. Chain continues toward Sunken Temple content. No item reward."
        }
      ]
    },
    {
      "id": "maraudon",
      "name": "Maraudon",
      "type": "dungeon",
      "zone": "Maraudon, Desolace",
      "levelRange": [46, 55],
      "phase": "classic",
      "notes": "Three-color cave complex (Orange/Purple/Pristine). The Vyletongue Corruption and Corruption of Earth and Seed chains mirror between factions; Legends of Maraudon / Scepter of Celebras / Seed of Life form the druid-flavored Celebras/Theradras questline entirely inside or bordering the dungeon. Unchanged from vanilla Classic in TBC.",
      "quests": [
        {
          "id": 7070,
          "name": "Shadowshard Fragments",
          "faction": "alliance",
          "questGiver": "Archmage Tervosh — Theramore Isle, Dustwallow Marsh",
          "rewards": [
            { "id": 17772, "name": "Zealous Shadowshard Pendant" },
            { "id": 17773, "name": "Prodigious Shadowshard Pendant" }
          ],
          "note": "Collect 10 Shadowshard Fragments dropped by Shadowshard Rumblers/Smashers near Maraudon's entrance. Reward is a choice of one."
        },
        {
          "id": 7068,
          "name": "Shadowshard Fragments",
          "faction": "horde",
          "questGiver": "Uthel'nay — Orgrimmar",
          "rewards": [
            { "id": 17772, "name": "Zealous Shadowshard Pendant" },
            { "id": 17773, "name": "Prodigious Shadowshard Pendant" }
          ],
          "note": "Horde mirror of the Alliance Shadowshard Fragments quest."
        },
        {
          "id": 7041,
          "name": "Vyletongue Corruption",
          "faction": "alliance",
          "questGiver": "Talendria — Nijel's Point, Desolace",
          "rewards": [
            { "id": 17768, "name": "Woodseed Hoop" },
            { "id": 17778, "name": "Sagebrush Girdle" },
            { "id": 17770, "name": "Branchclaw Gauntlets" }
          ],
          "note": "Fill a vial at an orange crystal pool inside Maraudon and use it on 8 Vylestem Vines to spawn and kill Noxxious Scions. Reward is a choice of one."
        },
        {
          "id": 7029,
          "name": "Vyletongue Corruption",
          "faction": "horde",
          "questGiver": "Vark Battlescar — Shadowprey Village, Desolace",
          "rewards": [
            { "id": 17768, "name": "Woodseed Hoop" },
            { "id": 17778, "name": "Sagebrush Girdle" },
            { "id": 17770, "name": "Branchclaw Gauntlets" }
          ],
          "note": "Horde mirror of the Alliance Vyletongue Corruption quest."
        },
        {
          "id": 7065,
          "name": "Corruption of Earth and Seed",
          "faction": "alliance",
          "questGiver": "Keeper Marandis — Nijel's Point, Desolace",
          "rewards": [
            { "id": 17705, "name": "Thrash Blade" },
            { "id": 17743, "name": "Resurgence Rod" },
            { "id": 17753, "name": "Verdant Keeper's Aim" }
          ],
          "note": "Slay Princess Theradras inside Maraudon. +1000 Cenarion Circle reputation. Reward is a choice of one."
        },
        {
          "id": 7064,
          "name": "Corruption of Earth and Seed",
          "faction": "horde",
          "questGiver": "Selendra — near Shadowprey Village, Desolace",
          "rewards": [
            { "id": 17705, "name": "Thrash Blade" },
            { "id": 17743, "name": "Resurgence Rod" },
            { "id": 17753, "name": "Verdant Keeper's Aim" }
          ],
          "note": "Horde mirror of the Alliance Corruption of Earth and Seed quest."
        },
        {
          "id": 7028,
          "name": "Twisted Evils",
          "faction": "both",
          "questGiver": "Willow — Kormek's Hut, Desolace",
          "rewards": [
            { "id": 17775, "name": "Acumen Robes" },
            { "id": 17776, "name": "Sprightring Helm" },
            { "id": 17777, "name": "Relentless Chain" },
            { "id": 17779, "name": "Hulkstone Pauldrons" }
          ],
          "note": "Collect 15 Theradric Crystal Carvings inside Maraudon. Reward is a choice of one."
        },
        {
          "id": 7067,
          "name": "The Pariah's Instructions",
          "faction": "both",
          "questGiver": "Centaur Pariah — southern Desolace",
          "rewards": [ { "id": 17774, "name": "Mark of the Chosen" } ],
          "note": "Retrieve the Amulet of Union from Maraudon by defeating the Nameless Prophet and 5 centaur Khans."
        },
        {
          "id": 7044,
          "name": "Legends of Maraudon",
          "faction": "both",
          "questGiver": "Cavindra — inside Maraudon (Earth Song Falls area)",
          "note": "Recover the Celebrian Diamond (Lord Vyletongue) and Celebrian Rod (Noxxion); completing it frees Celebras the Cursed into Celebras the Redeemed. No item reward; leads to The Scepter of Celebras."
        },
        {
          "id": 7046,
          "name": "The Scepter of Celebras",
          "faction": "both",
          "questGiver": "Celebras the Redeemed — outer Maraudon",
          "prereq": "Legends of Maraudon",
          "rewards": [ { "id": 17191, "name": "Scepter of Celebras" } ],
          "note": "Assist Celebras's ritual to reunite the scepter. Can be re-requested from Celebras if the item is lost."
        },
        {
          "id": 7066,
          "name": "Seed of Life",
          "faction": "both",
          "questGiver": "Zaetar's Spirit — inside Maraudon, past Princess Theradras; turn in to Keeper Remulos, Moonglade",
          "prereq": "Defeat Princess Theradras",
          "note": "+1000 Cenarion Circle reputation. Only the pickup happens inside the dungeon; the turn-in is in Moonglade. No item reward."
        }
      ]
    },
    {
      "id": "sunken-temple",
      "name": "The Temple of Atal'Hakkar (Sunken Temple)",
      "type": "dungeon",
      "zone": "Swamp of Sorrows",
      "levelRange": [50, 60],
      "phase": "classic",
      "notes": "Sunken troll temple. In addition to the faction-mirrored Atal'ai fragment/tablet quests and the multi-step Stone Circle / Avatar of Hakkar chain, this dungeon hosts one class-specific quest per class (all needing a Voodoo Feather / Morphaz drop from the temple's named troll guardians or the green drake Morphaz). Unchanged from vanilla Classic in TBC.",
      "quests": [
        {
          "id": 1475,
          "name": "Into The Temple of Atal'Hakkar",
          "faction": "alliance",
          "questGiver": "Brohann Caskbelly — Dwarven District, Stormwind",
          "prereq": "Rhapsody's Tale",
          "rewards": [ { "id": 1490, "name": "Guardian Talisman" } ],
          "note": "Collect 10 Atal'ai Tablets inside the dungeon. +500 Ironforge reputation."
        },
        {
          "id": 1445,
          "name": "The Temple of Atal'Hakkar",
          "faction": "horde",
          "questGiver": "Fel'zerul — Stonard, Swamp of Sorrows",
          "prereq": "Return to Fel'Zerul",
          "rewards": [ { "id": 1490, "name": "Guardian Talisman" } ],
          "note": "Collect 20 Fetishes of Hakkar inside the dungeon. +350 Orgrimmar reputation."
        },
        {
          "id": 4143,
          "name": "Haze of Evil",
          "faction": "alliance",
          "questGiver": "Gregan Brewspewer — Feralas; turn in to Muigin, Un'Goro Crater",
          "prereq": "A Visit to Gregan",
          "note": "Collect 5 Atal'ai Haze from Murk Worms, Deep Lurkers, and Saturated Oozes inside the dungeon; branch of the Un'Goro Bloodpetal Pest chain. No item reward."
        },
        {
          "id": 4146,
          "name": "Zapper Fuel",
          "faction": "horde",
          "questGiver": "Liv Rizzlefix — Ratchet, the Barrens; turn in to Larion, Marshal's Refuge",
          "prereq": "Marvon's Workshop",
          "note": "Same haze-collection objective inside the dungeon as Haze of Evil. No item reward."
        },
        {
          "id": 3446,
          "name": "Into the Depths",
          "faction": "both",
          "questGiver": "Marvon Rivetseeker — Broken Pillar, Tanaris",
          "prereq": "The Stone Circle",
          "note": "Find the Altar of Hakkar deep in the temple and seat the Atal'ai Stone Circle token. No item reward."
        },
        {
          "id": 3447,
          "name": "Secret of the Circle",
          "faction": "both",
          "questGiver": "Marvon Rivetseeker — Broken Pillar, Tanaris",
          "prereq": "Into the Depths",
          "rewards": [ { "id": 10773, "name": "Hakkari Urn" } ],
          "note": "Click the six serpent statues in the correct order to spawn a miniboss at the bottom of the temple. The Hakkari Urn contains one of Hakkari Shroud, Hakkari Breastplate, or Mark of Hakkar."
        },
        {
          "id": 3528,
          "name": "The God Hakkar",
          "faction": "both",
          "questGiver": "Yeh'kinya — Steamwheedle Port, Tanaris",
          "prereq": "The Ancient Egg (Screecher Spirits chain)",
          "rewards": [
            { "id": 10749, "name": "Avenguard Helm" },
            { "id": 10750, "name": "Lifeforce Dirk" },
            { "id": 10751, "name": "Gemburst Circlet" }
          ],
          "note": "Summon and kill the Avatar of Hakkar at the Sanctum of the Fallen God inside the dungeon. Repeatable via Yeh'kinya's Scroll. Reward is a choice of one."
        },
        {
          "id": 1446,
          "name": "Jammal'an the Prophet",
          "faction": "both",
          "questGiver": "Atal'ai Exile — Shadra'Alor, The Hinterlands",
          "note": "Kill Jammal'an the Prophet inside the dungeon for his head. No item reward."
        },
        {
          "id": 3373,
          "name": "The Essence of Eranikus",
          "faction": "both",
          "questGiver": "Essence of Eranikus (item drop from the Shade of Eranikus); turned in at the Essence Font in the same lair, inside the dungeon",
          "rewards": [ { "id": 10455, "name": "Chained Essence of Eranikus" } ],
          "note": "Entirely picked up and completed inside the dungeon."
        },
        {
          "id": 8413,
          "name": "Da Voodoo",
          "faction": "both",
          "questGiver": "Bath'rah the Windwatcher — ruins near Chillwind Point, Alterac Mountains",
          "prereq": "Spirit Totem",
          "rewards": [
            { "id": 20369, "name": "Azurite Fists" },
            { "id": 20503, "name": "Enamored Water Spirit" },
            { "id": 20556, "name": "Wildstaff" }
          ],
          "note": "Shaman class quest. Collect Voodoo Feathers from the temple's named troll guardians. Reward is a choice of one."
        },
        {
          "id": 8418,
          "name": "Forging the Mightstone",
          "faction": "alliance",
          "questGiver": "Commander Ashlam Valorfist — Chillwind Camp, Western Plaguelands",
          "prereq": "Inert Scourgestones",
          "rewards": [
            { "id": 20620, "name": "Holy Mightstone" },
            { "id": 20504, "name": "Lightforged Blade" },
            { "id": 20505, "name": "Chivalrous Signet" },
            { "id": 20512, "name": "Sanctified Orb" }
          ],
          "note": "Paladin class quest. This vanilla-era chain remains Alliance-only in TBC Classic; Blood Elf Paladins do not have an equivalent Horde version. Reward includes the Holy Mightstone plus a choice of one other item."
        },
        {
          "id": 8425,
          "name": "Voodoo Feathers",
          "faction": "both",
          "questGiver": "Fallen Hero of the Horde — Swamp of Sorrows/Blasted Lands border",
          "prereq": "War on the Shadowsworn",
          "rewards": [
            { "id": 20521, "name": "Fury Visor" },
            { "id": 20130, "name": "Diamond Flask" },
            { "id": 20517, "name": "Razorsteel Shoulders" }
          ],
          "note": "Warrior class quest. Reward is a choice of one."
        },
        {
          "id": 8422,
          "name": "Trolls of a Feather",
          "faction": "both",
          "questGiver": "Impsy — Shatter Scar Vale, Felwood",
          "prereq": "The Wrong Stuff",
          "rewards": [
            { "id": 20536, "name": "Soul Harvester" },
            { "id": 20534, "name": "Abyss Shard" },
            { "id": 20530, "name": "Robes of Servitude" }
          ],
          "note": "Warlock class quest. Reward is a choice of one."
        },
        {
          "id": 8257,
          "name": "Blood of Morphaz",
          "faction": "both",
          "questGiver": "Ogtinc — Timbermaw Hold, Azshara; turn in to Greta Mosshoof, Felwood",
          "prereq": "The Ichor of Undeath",
          "rewards": [
            { "id": 19990, "name": "Blessed Prayer Beads" },
            { "id": 20082, "name": "Woestave" },
            { "id": 20006, "name": "Circle of Hope" }
          ],
          "note": "Priest class quest. Kill Morphaz, the green drake, inside the dungeon. Reward is a choice of one."
        },
        {
          "id": 8253,
          "name": "Destroy Morphaz",
          "faction": "both",
          "questGiver": "Archmage Xylem — Xylem's Tower, Azshara",
          "prereq": "The Siren's Coral",
          "rewards": [
            { "id": 20035, "name": "Glacial Spike" },
            { "id": 20037, "name": "Arcane Crystal Pendant" },
            { "id": 20036, "name": "Fire Ruby" }
          ],
          "note": "Mage class quest. Reward is a choice of one."
        },
        {
          "id": 8236,
          "name": "The Azure Key",
          "faction": "both",
          "questGiver": "Archmage Xylem — Azshara; turn in to Lord Jorach Ravenholdt, Hillsbrad Foothills",
          "prereq": "Encoded Fragments",
          "rewards": [
            { "id": 19984, "name": "Ebon Mask" },
            { "id": 20255, "name": "Whisperwalk Boots" },
            { "id": 19982, "name": "Duskbat Drape" }
          ],
          "note": "Rogue class quest. +500 Ravenholdt reputation. Reward is a choice of one."
        },
        {
          "id": 8232,
          "name": "The Green Drake",
          "faction": "both",
          "questGiver": "Ogtinc — Timbermaw Hold, Azshara",
          "prereq": "Wavethrashing",
          "rewards": [
            { "id": 19991, "name": "Devilsaur Eye" },
            { "id": 19992, "name": "Devilsaur Tooth" },
            { "id": 20083, "name": "Hunting Spear" }
          ],
          "note": "Hunter class quest. Reward is a choice of one."
        },
        {
          "id": 9053,
          "name": "A Better Ingredient",
          "faction": "both",
          "questGiver": "Torwa Pathfinder — Un'Goro Crater",
          "prereq": "Toxic Test",
          "rewards": [
            { "id": 22274, "name": "Grizzled Pelt" },
            { "id": 22272, "name": "Forest's Embrace" },
            { "id": 22458, "name": "Moonshadow Stave" }
          ],
          "note": "Druid class quest. Retrieve a Putrid Vine from Atal'alarion, a guardian that spawns at the bottom of the temple. Reward is a choice of one."
        }
      ]
    },
    {
      "id": "blackrock-depths",
      "name": "Blackrock Depths",
      "type": "dungeon",
      "zone": "Blackrock Mountain, Burning Steppes",
      "levelRange": [52, 60],
      "phase": "classic",
      "attunement": "No key required to enter. The Shadowforge Key (from Dark Iron Legacy) unlocks the Shadowforge Vault/inner areas of the dungeon.",
      "notes": "Extremely quest-dense. Contains four parallel faction-mirrored chains (Marshal Windsor/Kharan Mighthammer-Moira rescue for Alliance, Commander Gor'shak-Moira rescue for Horde, Lord Incendius, and the Grim Guzzler ale-recipe chain) plus several standalone chains centered on Grim Guzzler NPCs and the Ring of Law arena. Unchanged from vanilla Classic in TBC.",
      "quests": [
        {
          "id": 3801,
          "name": "Dark Iron Legacy",
          "faction": "both",
          "questGiver": "Franclorn Forgewright — inside Blackrock Depths",
          "note": "Chain start; no item reward."
        },
        {
          "id": 3802,
          "name": "Dark Iron Legacy",
          "faction": "both",
          "questGiver": "Franclorn Forgewright — inside Blackrock Depths",
          "prereq": "Dark Iron Legacy",
          "rewards": [ { "id": 11000, "name": "Shadowforge Key" } ],
          "note": "Slay Fineous Darkvire, take Ironfel to the Shrine of Thaurissan and place it on Franclorn's statue. Grants the Shadowforge Key attunement item."
        },
        {
          "id": 4241,
          "name": "Marshal Windsor",
          "faction": "alliance",
          "questGiver": "Follow-up to the Stormwind 'Dragonkin Menace / The True Masters' chain — free Marshal Windsor from his cell inside Blackrock Depths",
          "note": "+500 Stormwind reputation. No item reward."
        },
        {
          "id": 4242,
          "name": "Abandoned Hope",
          "faction": "alliance",
          "questGiver": "Marshal Maxwell — Burning Steppes",
          "prereq": "Marshal Windsor",
          "rewards": [
            { "id": 12018, "name": "Conservator Helm" },
            { "id": 12021, "name": "Shieldplate Sabatons" },
            { "id": 12041, "name": "Windshear Leggings" }
          ],
          "note": "Reward is a choice of one."
        },
        {
          "id": 4322,
          "name": "Jail Break!",
          "faction": "alliance",
          "questGiver": "Marshal Windsor — inside Blackrock Depths; turn in to Marshal Maxwell",
          "rewards": [
            { "id": 12065, "name": "Ward of the Elements" },
            { "id": 12061, "name": "Blade of Reckoning" },
            { "id": 12062, "name": "Skilled Fighting Blade" }
          ],
          "note": "Ward of the Elements is guaranteed; the two blades are an additional choice. Leads out of the dungeon toward the wider Onyxia-unmasking storyline."
        },
        {
          "id": 4264,
          "name": "A Crumpled Up Note",
          "faction": "alliance",
          "questGiver": "Marshal Windsor — inside Blackrock Depths",
          "note": "+250 Stormwind reputation. No item reward."
        },
        {
          "id": 4282,
          "name": "A Shred of Hope",
          "faction": "alliance",
          "questGiver": "Marshal Windsor — inside Blackrock Depths",
          "prereq": "A Crumpled Up Note",
          "note": "+500 Stormwind reputation. Reward is a quest item (Marshal Windsor's Lost Information), not equippable gear."
        },
        {
          "id": 3981,
          "name": "Commander Gor'shak",
          "faction": "horde",
          "questGiver": "Commander Gor'shak — inside Blackrock Depths",
          "note": "+500 Orgrimmar reputation. No item reward. First step of the Horde-side Moira Thaurissan rescue chain."
        },
        {
          "id": 3982,
          "name": "What Is Going On?",
          "faction": "horde",
          "questGiver": "Commander Gor'shak — inside Blackrock Depths",
          "prereq": "Commander Gor'shak",
          "note": "No item reward."
        },
        {
          "id": 4001,
          "name": "What Is Going On?",
          "faction": "horde",
          "questGiver": "Kharan Mighthammer — held in a prison cell inside Blackrock Depths",
          "prereq": "Commander Gor'shak",
          "note": "+350 Orgrimmar reputation. No item reward."
        },
        {
          "id": 4002,
          "name": "The Eastern Kingdoms",
          "faction": "horde",
          "questGiver": "Thrall — Orgrimmar",
          "prereq": "What Is Going On? (Kharan Mighthammer)",
          "note": "No item reward."
        },
        {
          "id": 4003,
          "name": "The Royal Rescue",
          "faction": "horde",
          "questGiver": "Thrall — Orgrimmar",
          "prereq": "The Eastern Kingdoms",
          "note": "Slay Emperor Dagran Thaurissan and free Princess Moira inside Blackrock Depths without harming her. No item reward."
        },
        {
          "id": 4004,
          "name": "The Princess Saved?",
          "faction": "horde",
          "questGiver": "Thrall — Orgrimmar",
          "prereq": "The Royal Rescue",
          "rewards": [
            { "id": 12544, "name": "Thrall's Resolve" },
            { "id": 12545, "name": "Eye of Orgrimmar" }
          ],
          "note": "+500 Horde reputation."
        },
        {
          "id": 4341,
          "name": "Kharan Mighthammer",
          "faction": "alliance",
          "questGiver": "Kharan Mighthammer — inside Blackrock Depths",
          "note": "+500 Ironforge reputation. No item reward. First step of the Alliance-side Moira Thaurissan rescue chain."
        },
        {
          "id": 4342,
          "name": "Kharan's Tale",
          "faction": "alliance",
          "questGiver": "Kharan Mighthammer — prison cell, inside Blackrock Depths",
          "prereq": "Kharan Mighthammer",
          "note": "No item reward."
        },
        {
          "id": 4361,
          "name": "The Bearer of Bad News",
          "faction": "alliance",
          "questGiver": "King Magni Bronzebeard — Ironforge",
          "prereq": "Kharan's Tale",
          "note": "No item reward."
        },
        {
          "id": 4362,
          "name": "The Fate of the Kingdom",
          "faction": "alliance",
          "questGiver": "King Magni Bronzebeard — Ironforge",
          "prereq": "The Bearer of Bad News",
          "note": "Slay Emperor Dagran Thaurissan and rescue Moira inside Blackrock Depths. +500 Ironforge reputation. No item reward."
        },
        {
          "id": 4363,
          "name": "The Princess's Surprise",
          "faction": "alliance",
          "questGiver": "King Magni Bronzebeard — Ironforge",
          "prereq": "The Fate of the Kingdom",
          "rewards": [
            { "id": 12548, "name": "Magni's Will" },
            { "id": 12543, "name": "Songstone of Ironforge" }
          ]
        },
        {
          "id": 9015,
          "name": "The Challenge",
          "faction": "both",
          "questGiver": "Anthion Harmon — Eastern Plaguelands",
          "rewards": [ { "id": 22047, "name": "Top Piece of Lord Valthalak's Amulet" } ],
          "note": "Place the Banner of Provocation in the Ring of Law inside Blackrock Depths, get sentenced by High Justice Grimstone, and defeat Theldren and his gladiators. One segment of a larger cross-dungeon Dungeon Set 2 neck-piece chain."
        },
        {
          "id": 4061,
          "name": "The Rise of the Machines",
          "faction": "horde",
          "questGiver": "Hierophant Theodora Mulvadania — Undercity",
          "note": "+500 Undercity reputation. No item reward. Could not confirm an independent Alliance entry point for this specific chain."
        },
        {
          "id": 4062,
          "name": "The Rise of the Machines",
          "faction": "horde",
          "questGiver": "Lotwil Veriatus — Burning Steppes",
          "prereq": "The Rise of the Machines (Theodora Mulvadania)",
          "note": "No item reward."
        },
        {
          "id": 4063,
          "name": "The Rise of the Machines",
          "faction": "horde",
          "questGiver": "Lotwil Veriatus — Burning Steppes",
          "prereq": "The Rise of the Machines (Lotwil Veriatus, part 1)",
          "rewards": [
            { "id": 12109, "name": "Azure Moon Amice" },
            { "id": 12110, "name": "Raincaster Drape" },
            { "id": 12108, "name": "Basaltscale Armor" },
            { "id": 12111, "name": "Lavaplate Gauntlets" }
          ],
          "note": "Slay Golem Lord Argelmach inside Blackrock Depths and collect 10 Intact Elemental Cores. Reward is a choice of one."
        },
        {
          "id": 4262,
          "name": "Overmaster Pyron",
          "faction": "alliance",
          "questGiver": "Jalinda Sprig — Blackrock Mountain",
          "note": "+250 Gnomeregan Exiles reputation. No item reward."
        },
        {
          "id": 4263,
          "name": "Incendius!",
          "faction": "alliance",
          "questGiver": "Jalinda Sprig — Blackrock Mountain",
          "prereq": "Overmaster Pyron",
          "rewards": [
            { "id": 12113, "name": "Sunborne Cape" },
            { "id": 12114, "name": "Nightfall Gloves" },
            { "id": 12112, "name": "Crypt Demon Bracers" },
            { "id": 12115, "name": "Stalwart Clutch" }
          ],
          "note": "Slay Lord Incendius inside Blackrock Depths. Reward is a choice of one."
        },
        {
          "id": 3906,
          "name": "Disharmony of Flame",
          "faction": "horde",
          "questGiver": "Thunderheart — Thunder Bluff",
          "note": "+250 Thunder Bluff reputation. No item reward."
        },
        {
          "id": 3907,
          "name": "Disharmony of Fire",
          "faction": "horde",
          "questGiver": "Thunderheart — Thunder Bluff",
          "prereq": "Disharmony of Flame",
          "rewards": [
            { "id": 12113, "name": "Sunborne Cape" },
            { "id": 12114, "name": "Nightfall Gloves" },
            { "id": 12112, "name": "Crypt Demon Bracers" },
            { "id": 12115, "name": "Stalwart Clutch" }
          ],
          "note": "Slay Lord Incendius, retrieve the Tablet of Kurniya. Horde mirror of Incendius!. Reward is a choice of one."
        },
        {
          "id": 4324,
          "name": "Yuka Screwspigot",
          "faction": "both",
          "questGiver": "Yuka Screwspigot — cave, Burning Steppes",
          "note": "No item reward."
        },
        {
          "id": 4136,
          "name": "Ribbly Screwspigot",
          "faction": "both",
          "questGiver": "Yuka Screwspigot — Burning Steppes",
          "prereq": "Yuka Screwspigot",
          "rewards": [
            { "id": 11865, "name": "Rancor Boots" },
            { "id": 11963, "name": "Penance Spaulders" },
            { "id": 12049, "name": "Splintsteel Armor" }
          ],
          "note": "Find Ribbly Screwspigot inside Blackrock Depths' Lyceum. Reward is a choice of one."
        },
        {
          "id": 4128,
          "name": "Ragnar Thunderbrew",
          "faction": "alliance",
          "questGiver": "Ragnar Thunderbrew — Kharanos, Dun Morogh",
          "note": "No item reward."
        },
        {
          "id": 4126,
          "name": "Hurley Blackbreath",
          "faction": "alliance",
          "questGiver": "Ragnar Thunderbrew — Kharanos, Dun Morogh",
          "prereq": "Ragnar Thunderbrew",
          "rewards": [
            { "id": 11964, "name": "Swiftstrike Cudgel" },
            { "id": 12000, "name": "Limb Cleaver" },
            { "id": 12003, "name": "Dark Dwarven Lager" }
          ],
          "note": "Find Hurley Blackbreath in Blackrock Depths' Grim Guzzler. Reward is a choice of one."
        },
        {
          "id": 4133,
          "name": "Vivian Lagrave",
          "faction": "horde",
          "questGiver": "Shadowmaster Vivian Lagrave — Kargath, Badlands",
          "note": "No item reward."
        },
        {
          "id": 4134,
          "name": "Lost Thunderbrew Recipe",
          "faction": "horde",
          "questGiver": "Shadowmaster Vivian Lagrave — Kargath, Badlands",
          "prereq": "Vivian Lagrave",
          "rewards": [
            { "id": 11964, "name": "Swiftstrike Cudgel" },
            { "id": 12000, "name": "Limb Cleaver" }
          ],
          "note": "Horde mirror of Hurley Blackbreath. Reward is a choice of one (also grants Superior Healing/Greater Mana Potions)."
        },
        {
          "id": 4299,
          "name": "The Tomb of the Seven",
          "faction": "both",
          "questGiver": "Maxwort Uberglint — Burning Steppes",
          "note": "Deploy the PX-238 Winter's Wrath (Enigmatron) at the Tomb of the Seven inside Blackrock Depths. No item reward confirmed."
        },
        {
          "id": 4123,
          "name": "The Heart of the Mountain",
          "faction": "both",
          "questGiver": "Maxwort Uberglint — Burning Steppes",
          "note": "Open the relic coffers and defeat Watchman Doomgrip in the Lower Vault, behind the Shadowforge Key-gated area. No item reward confirmed."
        },
        {
          "id": 4022,
          "name": "A Taste of Flame",
          "faction": "both",
          "questGiver": "Cyrus Therepentous — chain step (Burning Steppes)",
          "note": "First step of the Bael'Gar chain; no item reward."
        },
        {
          "id": 4023,
          "name": "A Taste of Flame",
          "faction": "both",
          "questGiver": "Cyrus Therepentous — chain step (Burning Steppes)",
          "prereq": "A Taste of Flame",
          "note": "No item reward."
        },
        {
          "id": 4024,
          "name": "A Taste of Flame",
          "faction": "both",
          "questGiver": "Cyrus Therepentous — Burning Steppes",
          "prereq": "A Taste of Flame",
          "rewards": [
            { "id": 12066, "name": "Shaleskin Cape" },
            { "id": 12082, "name": "Wyrmhide Spaulders" },
            { "id": 12083, "name": "Valconian Sash" }
          ],
          "note": "Slay Bael'Gar inside Blackrock Depths. Reward is a choice of one."
        },
        {
          "id": 4286,
          "name": "The Good Stuff",
          "faction": "alliance",
          "questGiver": "Oralius — inside Blackrock Depths",
          "rewards": [ { "id": 11883, "name": "A Dingy Fanny Pack" } ],
          "note": "Collect 20 Dark Iron Fanny Packs inside Blackrock Depths. +500 Ironforge reputation."
        },
        {
          "id": 4201,
          "name": "The Love Potion",
          "faction": "both",
          "questGiver": "Mistress Nagmara — inside Blackrock Depths",
          "rewards": [
            { "id": 11962, "name": "Manacle Cuffs" },
            { "id": 11866, "name": "Nagmara's Whipping Belt" }
          ]
        },
        {
          "id": 7604,
          "name": "A Binding Contract",
          "faction": "both",
          "questGiver": "Lokhtos Darkbargainer — the Grim Guzzler, Blackrock Depths",
          "rewards": [ { "id": 18592, "name": "Plans: Sulfuron Hammer" } ],
          "note": "Turn in a Sulfuron Ingot. +1000 Thorium Brotherhood reputation."
        },
        {
          "id": 4081,
          "name": "KILL ON SIGHT: Dark Iron Dwarves",
          "faction": "horde",
          "questGiver": "Warlord Goretooth — Kargath, Badlands",
          "note": "Kill 15 Anvilrage Guardsmen, 10 Wardens, and 5 Footmen inside Blackrock Depths. +500 Orgrimmar reputation. No item reward."
        },
        {
          "id": 4082,
          "name": "KILL ON SIGHT: High Ranking Dark Iron Officials",
          "faction": "horde",
          "questGiver": "Warlord Goretooth — Kargath, Badlands",
          "prereq": "KILL ON SIGHT: Dark Iron Dwarves",
          "note": "+500 Orgrimmar reputation. No item reward."
        },
        {
          "id": 4132,
          "name": "Operation: Death to Angerforge",
          "faction": "horde",
          "questGiver": "Warlord Goretooth — Kargath, Badlands",
          "prereq": "KILL ON SIGHT: High Ranking Dark Iron Officials",
          "rewards": [ { "id": 12059, "name": "Conqueror's Medallion" } ],
          "note": "Final quest of the Anvilrage kill-quest chain; +500 Orgrimmar reputation."
        }
      ]
    },
    {
      "id": "lower-blackrock-spire",
      "name": "Lower Blackrock Spire",
      "type": "dungeon",
      "zone": "Blackrock Mountain, Burning Steppes",
      "levelRange": [55, 60],
      "phase": "classic",
      "notes": "First half of Blackrock Spire — the 'generals' wing (Highlord Omokk, War Master Voone, Overlord Wyrmthalak) plus Mother Smolderweb and Urok Doomhowl. Hosts step 1 of the two-part Seal of Ascension key chain, whose step 2 (and the key-gated Halls of Ascension) lives in Upper Blackrock Spire.",
      "quests": [
        {
          "id": 4701,
          "name": "Put Her Down",
          "faction": "alliance",
          "questGiver": "Burning Steppes area contact (Alliance mirror of The Pack Mistress)",
          "rewards": [
            { "id": 15824, "name": "Astoria Robes" },
            { "id": 15825, "name": "Traphook Jerkin" },
            { "id": 15827, "name": "Jadescale Breastplate" }
          ],
          "note": "Kill Halycon, the LBRS worg pack boss. Exact quest-giver NPC identity not independently re-confirmed this pass — location is approximate. Reward is a choice of one."
        },
        {
          "id": 4724,
          "name": "The Pack Mistress",
          "faction": "horde",
          "questGiver": "Kargath/Orgrimmar area contact (Horde mirror of Put Her Down)",
          "rewards": [
            { "id": 15824, "name": "Astoria Robes" },
            { "id": 15825, "name": "Traphook Jerkin" },
            { "id": 15827, "name": "Jadescale Breastplate" }
          ],
          "note": "+500 Orgrimmar reputation. Kill Halycon. Exact quest-giver NPC identity not independently re-confirmed this pass. Reward is a choice of one."
        },
        {
          "id": 4729,
          "name": "Kibler's Exotic Pets",
          "faction": "both",
          "questGiver": "Kibler — Burning Steppes",
          "rewards": [ { "id": 12264, "name": "Worg Carrier" } ],
          "note": "Catch a Bloodaxe Worg Pup inside Lower Blackrock Spire using the carrier cage."
        },
        {
          "id": 4862,
          "name": "En-Ay-Es-Tee-Why",
          "faction": "both",
          "questGiver": "Kibler — Burning Steppes",
          "rewards": [ { "id": 12529, "name": "Smolderweb Carrier" } ],
          "note": "Collect 15 Spire Spider Eggs inside Lower Blackrock Spire."
        },
        {
          "id": 4866,
          "name": "Mother's Milk",
          "faction": "both",
          "questGiver": "Ragged John",
          "rewards": [ { "id": 15873, "name": "Ragged John's Neverending Cup" } ],
          "note": "Objective involves Mother Smolderweb, the LBRS boss."
        },
        {
          "id": 4867,
          "name": "Urok Doomhowl",
          "faction": "both",
          "questGiver": "Warosh — inside Lower Blackrock Spire",
          "rewards": [ { "id": 15867, "name": "Prismcharm" } ],
          "note": "Read Warosh's Scroll and bring back Warosh's Mojo, looted from Urok Doomhowl."
        },
        {
          "id": 4742,
          "name": "Seal of Ascension",
          "faction": "both",
          "questGiver": "Vaelan — near the Lower/Upper Blackrock Spire entrance, Burning Steppes",
          "note": "Kill the 3 LBRS 'generals' (Highlord Omokk, War Master Voone, Overlord Wyrmthalak) for their command gemstones, and return with the Unadorned Seal. Step 1 of 2 in the Seal of Ascension key chain; step 2 (Upper Blackrock Spire) forges the key needed for the Halls of Ascension. No item reward for this step."
        },
        {
          "id": 4903,
          "name": "Warlord's Command",
          "faction": "horde",
          "questGiver": "Warlord Goretooth — Kargath, Badlands",
          "rewards": [
            { "id": 13958, "name": "Wyrmthalak's Shackles" },
            { "id": 13959, "name": "Omokk's Girth Restrainer" },
            { "id": 13961, "name": "Halycon's Muzzle" },
            { "id": 13962, "name": "Vosh'gajin's Strand" },
            { "id": 13963, "name": "Voone's Vice Grips" }
          ],
          "note": "Bounty quest: kill Omokk, Voone, and Wyrmthalak, and recover the Blackrock Documents. Reward is a choice of one rare trinket."
        },
        {
          "id": 5081,
          "name": "Maxwell's Mission",
          "faction": "alliance",
          "questGiver": "Marshal Maxwell — Burning Steppes",
          "rewards": [
            { "id": 13958, "name": "Wyrmthalak's Shackles" },
            { "id": 13959, "name": "Omokk's Girth Restrainer" },
            { "id": 13961, "name": "Halycon's Muzzle" },
            { "id": 13962, "name": "Vosh'gajin's Strand" },
            { "id": 13963, "name": "Voone's Vice Grips" }
          ],
          "note": "Alliance mirror of Warlord's Command. Reward is a choice of one rare trinket."
        },
        {
          "id": 4983,
          "name": "Bijou's Reconnaissance Report",
          "faction": "both",
          "questGiver": "Chain step of the 'find the missing goblin spy Bijou' storyline",
          "rewards": [
            { "id": 15858, "name": "Freewind Gloves" },
            { "id": 15859, "name": "Seapost Girdle" }
          ],
          "note": "Confirmed to route through Lower Blackrock Spire. Reward is a choice of one; Booty Bay/Bloodsail Buccaneers reputation swing on earlier chain steps."
        },
        {
          "id": 4768,
          "name": "The Darkstone Tablet",
          "faction": "horde",
          "questGiver": "Shadow Mage Vivian Lagrave — Kargath, Badlands",
          "rewards": [
            { "id": 15861, "name": "Swiftfoot Treads" },
            { "id": 15860, "name": "Blinkstrike Armguards" }
          ],
          "note": "The Darkstone Tablet is a rare drop somewhere in Blackrock Spire's trash (wing placement soft — may drop in either LBRS or UBRS). Reward is a choice of one."
        },
        {
          "id": 4769,
          "name": "Vivian Lagrave and the Darkstone Tablet",
          "faction": "horde",
          "questGiver": "Shadow Mage Vivian Lagrave — Kargath, Badlands",
          "prereq": "The Darkstone Tablet",
          "note": "Continuation of the Darkstone Tablet chain."
        }
      ]
    },
    {
      "id": "upper-blackrock-spire",
      "name": "Upper Blackrock Spire",
      "type": "dungeon",
      "zone": "Blackrock Mountain, Burning Steppes",
      "levelRange": [58, 60],
      "phase": "classic",
      "attunement": "Step 2 of the Seal of Ascension key chain (step 1 is in Lower Blackrock Spire) historically forged the Seal of Ascension ring, required to open the door into the inner Halls of Ascension (General Drakkisath and the Lord Valthalak side-encounter). In original WoW this key requirement was removed in patch 3.0.8, a WotLK pre-patch that postdates TBC's own patch train — it was not confirmed during this research pass whether TBC Classic (Anniversary) has back-ported that removal, so treat the key as potentially still required until verified in-game.",
      "notes": "Second half of Blackrock Spire: Rookery (Solakar Flamewreath, black dragon eggs), Rend Blackhand's throne room, Pyroguard Emberseer, and the key-gated Halls of Ascension (General Drakkisath, Lord Victor Nefarius' domain, and the optional Lord Valthalak Tier 0.5 encounter reached via the Brazier of Beckoning).",
      "quests": [
        {
          "id": 4743,
          "name": "Seal of Ascension",
          "faction": "both",
          "questGiver": "Vaelan — near the Lower/Upper Blackrock Spire entrance, Burning Steppes",
          "prereq": "Seal of Ascension (Lower Blackrock Spire, part 1)",
          "rewards": [ { "id": 12344, "name": "Seal of Ascension" } ],
          "note": "Take the Unforged Seal to the Wyrmbog in Dustwallow Marsh, use the Orb of Draconic Energy on Emberstrife to forge it, then return to Vaelan. See instance attunement note for whether this key is still enforced in TBC Classic."
        },
        {
          "id": 4734,
          "name": "Egg Freezing",
          "faction": "both",
          "questGiver": "Tinkee Steamboil — Flame Crest, Burning Steppes",
          "rewards": [ { "id": 12144, "name": "Eggscilloscope" } ],
          "note": "Part of the Tinkee Steamboil egg-collection chain (Egg Collection / Tinkee Steamboil precede it); objective is in the Rookery, guarded by Solakar Flamewreath."
        },
        {
          "id": 6569,
          "name": "Oculus Illusions",
          "faction": "both",
          "questGiver": "Myranda the Hag",
          "note": "Collect 20 Black Dragonspawn Eyes from Chromatic Dragonspawn near the Rookery. No item reward."
        },
        {
          "id": 5127,
          "name": "The Demon Forge",
          "faction": "both",
          "questGiver": "Turn in to Lorax — Winterspring",
          "rewards": [
            { "id": 12696, "name": "Plans: Demon Forged Breastplate" },
            { "id": 9224, "name": "Elixir of Demonslaying" },
            { "id": 12849, "name": "Demon Kissed Sack" }
          ],
          "note": "Kill Goraluk Anvilcrack inside Upper Blackrock Spire; siphon his soul with the Blood Stained Pike, then combine with an Unforged Rune Covered Breastplate."
        },
        {
          "id": 6502,
          "name": "Drakefire Amulet",
          "faction": "alliance",
          "questGiver": "Objective: retrieve the Blood of the Black Dragon Champion from General Drakkisath's throne room, Halls of Ascension",
          "rewards": [ { "id": 16309, "name": "Drakefire Amulet" } ],
          "note": "General Drakkisath is inside the key-gated Halls of Ascension."
        },
        {
          "id": 6602,
          "name": "Blood of the Black Dragon Champion",
          "faction": "horde",
          "questGiver": "Turn in to Rokaro",
          "rewards": [ { "id": 16309, "name": "Drakefire Amulet" } ],
          "note": "Horde mirror of Drakefire Amulet. Kill General Drakkisath and gather his blood."
        },
        {
          "id": 4974,
          "name": "For The Horde!",
          "faction": "horde",
          "questGiver": "Turn in to a contact in Orgrimmar",
          "rewards": [
            { "id": 13965, "name": "Blackhand's Breadth" },
            { "id": 13966, "name": "Mark of Tyranny" },
            { "id": 13968, "name": "Eye of the Beast" }
          ],
          "note": "Kill Warchief Rend Blackhand (a traitor to the Horde) and take his head to Orgrimmar. Reward is a choice of one rare trinket."
        },
        {
          "id": 5102,
          "name": "General Drakkisath's Demise",
          "faction": "alliance",
          "questGiver": "Marshal Maxwell — Burning Steppes",
          "prereq": "General Drakkisath's Command",
          "rewards": [
            { "id": 13965, "name": "Blackhand's Breadth" },
            { "id": 13966, "name": "Mark of Tyranny" },
            { "id": 13968, "name": "Eye of the Beast" }
          ],
          "note": "Alliance bounty for killing General Drakkisath. Reward is a choice of one rare trinket."
        },
        {
          "id": 7761,
          "name": "Blackhand's Command",
          "faction": "both",
          "questGiver": "Picked up from a note found inside Upper Blackrock Spire",
          "note": "Grants the Mark of Drakkisath, a permanent unlock needed to use the Orb of Command (a trash-skipping teleport shortcut). No tangible item reward."
        },
        {
          "id": 8966,
          "name": "The Left Piece of Lord Valthalak's Amulet",
          "faction": "both",
          "questGiver": "Bodley — near the Upper Blackrock Spire entrance, Blackrock Mountain",
          "note": "Use the Brazier of Beckoning inside the dungeon to summon and kill the spirit of Mor Grayhoof; return the Left Piece to Bodley. Part of the Dungeon Set 2 (Tier 0.5) amulet chain. No item reward for this step."
        },
        {
          "id": 8989,
          "name": "The Right Piece of Lord Valthalak's Amulet",
          "faction": "both",
          "questGiver": "Bodley — near the Upper Blackrock Spire entrance, Blackrock Mountain",
          "prereq": "The Left Piece of Lord Valthalak's Amulet",
          "note": "Same Brazier of Beckoning mechanic; recombines into the full amulet. No item reward for this step."
        },
        {
          "id": 8995,
          "name": "Mea Culpa, Lord Valthalak",
          "faction": "both",
          "questGiver": "Spirit of Lord Valthalak — inside Upper Blackrock Spire",
          "prereq": "The Right Piece of Lord Valthalak's Amulet",
          "note": "Dungeon Set 2 (Tier 0.5) finale for Upper Blackrock Spire — Wowhead's zone article explicitly calls Lord Valthalak the final boss of that quest series. Use the Brazier of Beckoning to summon and kill Lord Valthalak, use his amulet on the corpse, then turn in to his spirit. This encounter is gated behind the Seal of Ascension key door; see instance attunement note."
        },
        {
          "id": 4765,
          "name": "Delivery to Ridgewell",
          "faction": "alliance",
          "questGiver": "Mayara Brightwing — Burning Steppes",
          "rewards": [
            { "id": 15861, "name": "Swiftfoot Treads" },
            { "id": 15860, "name": "Blinkstrike Armguards" }
          ],
          "note": "Alliance mirror chain of the Darkstone Tablet line (Lower Blackrock Spire); wing placement leans Upper Blackrock Spire per Wowhead page text. Reward is a choice of one."
        },
        {
          "id": 4766,
          "name": "Mayara Brightwing",
          "faction": "alliance",
          "questGiver": "Mayara Brightwing — Burning Steppes; final turn-in Remington Ridgewell, Stormwind",
          "prereq": "Delivery to Ridgewell",
          "note": "Continuation of the Doomrigger's Clasp chain."
        },
        {
          "id": 4764,
          "name": "Doomrigger's Clasp",
          "faction": "alliance",
          "questGiver": "Remington Ridgewell — Stormwind",
          "prereq": "Mayara Brightwing",
          "note": "Final step of the Alliance Doomrigger's Clasp chain."
        }
      ]
    },
    {
      "id": "scholomance",
      "name": "Scholomance",
      "type": "dungeon",
      "zone": "Caer Darrow, Western Plaguelands",
      "levelRange": [58, 60],
      "phase": "classic",
      "attunement": "None required to enter in TBC Classic.",
      "notes": "Comparatively quest-light — most bosses are loot-only. Anchored by the 3-part Kirtonos chain (Eva Sarkhoff) which feeds the Spectral Essence trinket needed to see Magistrate Marduke and finish the cross-zone Ras Frostwhisper chain that concludes here. Unchanged from vanilla Classic in TBC.",
      "quests": [
        {
          "id": 5382,
          "name": "Doctor Theolen Krastinov, the Butcher",
          "faction": "both",
          "questGiver": "Eva Sarkhoff — outside the Scholomance entrance, Western Plaguelands",
          "note": "Kirtonos chain, step 1 of 3. Kill Doctor Theolen Krastinov inside the dungeon. Shareable. No item reward."
        },
        {
          "id": 5383,
          "name": "Krastinov's Bag of Horrors",
          "faction": "both",
          "questGiver": "Eva Sarkhoff — outside the Scholomance entrance",
          "prereq": "Doctor Theolen Krastinov, the Butcher",
          "note": "Kirtonos chain, step 2 of 3. Kill Jandice Barov and loot her bag, inside the dungeon. No item reward."
        },
        {
          "id": 5384,
          "name": "Kirtonos the Herald",
          "faction": "both",
          "questGiver": "Eva Sarkhoff — outside the Scholomance entrance",
          "prereq": "Krastinov's Bag of Horrors",
          "rewards": [
            { "id": 15805, "name": "Penelope's Rose" },
            { "id": 15806, "name": "Mirah's Song" },
            { "id": 13544, "name": "Spectral Essence" }
          ],
          "note": "Kirtonos chain, step 3 of 3. Summon and kill Kirtonos the Herald at the entrance porch. Spectral Essence (guaranteed) is required to see Magistrate Marduke for The Lich, Ras Frostwhisper. The weapon reward is a choice of one."
        },
        {
          "id": 5466,
          "name": "The Lich, Ras Frostwhisper",
          "faction": "both",
          "questGiver": "Magistrate Marduke — non-instanced upper room of the Scholomance entrance building (visible only while wearing Spectral Essence)",
          "prereq": "Full Ras Frostwhisper chain: The Human, Ras Frostwhisper / The Dying, Ras Frostwhisper / Menethil's Gift (Stratholme) / Soulbound Keepsake",
          "rewards": [
            { "id": 13982, "name": "Warblade of Caer Darrow" },
            { "id": 13986, "name": "Crown of Caer Darrow" },
            { "id": 13984, "name": "Darrowspike" },
            { "id": 14002, "name": "Darrowshire Strongguard" }
          ],
          "note": "Use the Soulbound Keepsake on Ras Frostwhisper to turn him human, kill him, and loot his Human Head. Darrowshire Strongguard is guaranteed; the weapon/crown is an additional choice."
        },
        {
          "id": 4771,
          "name": "Dawn's Gambit",
          "faction": "both",
          "questGiver": "Betina Bigglezink — Light's Hope Chapel, Eastern Plaguelands",
          "prereq": "Betina Bigglezink (Tinkee Steamboil line)",
          "rewards": [
            { "id": 15853, "name": "Windreaper" },
            { "id": 15854, "name": "Dancing Sliver" }
          ],
          "note": "Place the Dawn's Gambit device in Vectus's viewing room inside Scholomance and kill Vectus. +500 Argent Dawn reputation. Reward is a choice of one."
        },
        {
          "id": 5343,
          "name": "Barov Family Fortune",
          "faction": "alliance",
          "questGiver": "Weldon Barov — Chillwind Camp, Western Plaguelands",
          "note": "Loot The Deed to Caer Darrow inside Scholomance. Shareable. No item reward."
        },
        {
          "id": 5341,
          "name": "Barov Family Fortune",
          "faction": "horde",
          "questGiver": "Alexi Barov — The Bulwark, Tirisfal Glades",
          "note": "Horde mirror of the Alliance Barov Family Fortune; same in-dungeon deed objective. Shareable. No item reward."
        }
      ]
    },
    {
      "id": "stratholme",
      "name": "Stratholme",
      "type": "dungeon",
      "zone": "Eastern Plaguelands",
      "levelRange": [58, 60],
      "phase": "classic",
      "attunement": "No key or side-selection lock. Two entrances lead into one connected instance: the Main Gate opens onto the Live side (Scarlet Bastion), and the Service/Eastwall Gate — opened with the Key to the City, dropped by Magistrate Barthilas — opens onto the Undead side (ziggurats/Slaughterhouse/Baron Rivendare). Any group can clear both sides in one run.",
      "notes": "Live side = Scarlet Crusade wing (Archivist Galford, Grand Crusader Dathrohan/Balnazzar). Undead side = Scourge purge wing (the three ziggurat bosses, Ramstein the Gorger, Baron Rivendare). Hosts the timed 'Baron run' event (Dead Man's Plea) and one leg of the Ras Frostwhisper chain (Menethil's Gift) that concludes in Scholomance. Unchanged from vanilla Classic in TBC.",
      "quests": [
        {
          "id": 5212,
          "name": "The Flesh Does Not Lie",
          "faction": "both",
          "questGiver": "Betina Bigglezink — Light's Hope Chapel, Eastern Plaguelands",
          "note": "Either side. Loot 10 Plagued Flesh Samples from any Stratholme creature. +500 Argent Dawn reputation. No item reward."
        },
        {
          "id": 5213,
          "name": "The Active Agent",
          "faction": "both",
          "questGiver": "Betina Bigglezink — Light's Hope Chapel",
          "prereq": "The Flesh Does Not Lie",
          "rewards": [
            { "id": 13209, "name": "Seal of the Dawn" },
            { "id": 19812, "name": "Rune of the Dawn" }
          ],
          "note": "Undead side. Find the Scourge Data in one of the three ziggurats (Nerub'enkan / Baroness Anastari / Maleki the Pallid). Not shareable; must not be in a raid group. +500 Argent Dawn reputation. Reward is a choice of one."
        },
        {
          "id": 5243,
          "name": "Houses of the Holy",
          "faction": "both",
          "questGiver": "Leonid Barthalomew the Revered — Light's Hope Chapel",
          "rewards": [
            { "id": 13216, "name": "Crown of the Penitent" },
            { "id": 13217, "name": "Band of the Penitent" }
          ],
          "note": "Either side. Collect 5 Stratholme Holy Water from supply crates around the city (some crates trigger traps). Shareable. +500 Argent Dawn reputation. Also grants Superior Healing and Greater Mana Potions. Reward is a choice of one."
        },
        {
          "id": 5214,
          "name": "The Great Ezra Grimm",
          "faction": "both",
          "questGiver": "Smokey LaRue — Light's Hope Chapel",
          "rewards": [ { "id": 13171, "name": "Smokey's Lighter" } ],
          "note": "Live side. Loot Grimm's Premium Tobacco near Fras Siabi's shop in the entrance plaza."
        },
        {
          "id": 5251,
          "name": "The Archivist",
          "faction": "both",
          "questGiver": "Duke Nicholas Zverenhoff — Light's Hope Chapel",
          "note": "Live side. Kill Archivist Galford and burn the Scarlet Archive in the Scarlet Bastion. Step 1 of the Balnazzar storyline. +500 Argent Dawn reputation. No item reward."
        },
        {
          "id": 5262,
          "name": "The Truth Comes Crashing Down",
          "faction": "both",
          "questGiver": "Duke Nicholas Zverenhoff — Light's Hope Chapel",
          "prereq": "The Archivist",
          "note": "Live side. Grand Crusader Dathrohan reveals himself as the dreadlord Balnazzar when killed; deliver his head. +500 Argent Dawn reputation. No item reward."
        },
        {
          "id": 5263,
          "name": "Above and Beyond",
          "faction": "both",
          "questGiver": "Duke Nicholas Zverenhoff — Light's Hope Chapel",
          "prereq": "The Truth Comes Crashing Down",
          "note": "Undead side. Kill Baron Rivendare and loot his head. +500 Argent Dawn reputation; chain continues outside to Lord Maxwell Tyrosus. No item reward."
        },
        {
          "id": 5122,
          "name": "The Medallion of Faith",
          "faction": "both",
          "questGiver": "Aurius — chapel (Alonsus Chapel), inside Stratholme",
          "note": "Aurius chain, step 1 of 2. Picked up inside Stratholme; the Medallion of Faith is guarded by Malor the Zealous in the Scarlet Bastion (Live side). Shareable. Grants only the Medallion quest item."
        },
        {
          "id": 5125,
          "name": "Aurius' Reckoning",
          "faction": "both",
          "questGiver": "Aurius — chapel inside Stratholme",
          "prereq": "The Medallion of Faith",
          "rewards": [
            { "id": 17044, "name": "Will of the Martyr" },
            { "id": 17045, "name": "Blood of the Martyr" }
          ],
          "note": "Aurius chain, step 2 of 2. Deliver the medallion, then kill Baron Rivendare (Undead side) — Aurius joins the fight if the medallion was delivered. Reward is a choice of one."
        },
        {
          "id": 6163,
          "name": "Ramstein",
          "faction": "horde",
          "questGiver": "Nathanos Blightcaller — Marris Stead, Eastern Plaguelands",
          "prereq": "Horde-only Nathanos chain (Duskwing, Oh How I Hate Thee...)",
          "rewards": [
            { "id": 18022, "name": "Royal Seal of Alexis" },
            { "id": 17001, "name": "Elemental Circle" }
          ],
          "note": "Undead side. Kill Ramstein the Gorger, the abomination boss guarding the Slaughterhouse gauntlet before Baron Rivendare. +500 Undercity reputation. Reward is a choice of one."
        },
        {
          "id": 8945,
          "name": "Dead Man's Plea",
          "faction": "both",
          "questGiver": "Anthion Harmon (ghost) — outside the Stratholme entrance, Eastern Plaguelands",
          "prereq": "Dungeon Set 2 'of Heroism' chain step: In Search of Anthion",
          "rewards": [ { "id": 22137, "name": "Ysida's Satchel" } ],
          "note": "Undead side. The formal timed 'Baron run': reach and kill Baron Rivendare within 45 minutes of the gate-slam trigger to save Ysida Harmon. Note: the Deathcharger's Reins mount is a separate plain loot drop from Baron Rivendare, not tied to this quest."
        },
        {
          "id": 8946,
          "name": "Proof of Life",
          "faction": "both",
          "questGiver": "Ysida Harmon — inside Stratholme, freed after the timed Baron kill",
          "prereq": "Dead Man's Plea",
          "note": "Undead side. Turn in to Anthion Harmon outside; chain continues outside the dungeon. No item reward."
        },
        {
          "id": 5282,
          "name": "The Restless Souls",
          "faction": "both",
          "questGiver": "Egan — Terrorweb Tunnel area, outside Stratholme",
          "prereq": "The Restless Souls (Caretaker Alen, Light's Hope Chapel)",
          "rewards": [ { "id": 13315, "name": "Testament of Hope" } ],
          "note": "Either side. Use Egan's Blaster on 15 Restless Souls (ghostly citizens) inside Stratholme to free their spirits."
        },
        {
          "id": 5848,
          "name": "Of Love and Family",
          "faction": "both",
          "questGiver": "Artist Renfray — Caer Darrow, Western Plaguelands; turn in to Tirion Fordring, Eastern Plaguelands",
          "prereq": "Of Lost Honor (Tirion Fordring storyline)",
          "note": "Live side. The painting is hidden behind another painting in the Scarlet Bastion, near Malor's chamber. No item reward (retrieves a quest item)."
        },
        {
          "id": 5463,
          "name": "Menethil's Gift",
          "faction": "both",
          "questGiver": "Leonid Barthalomew the Revered — Light's Hope Chapel",
          "prereq": "The Dying, Ras Frostwhisper (Scholomance/Ras chain)",
          "note": "Undead side. Place the Keepsake of Remembrance at the Menethil's Gift spot near the Slaughterhouse. Not shareable. +350 Argent Dawn reputation. No item reward."
        },
        {
          "id": 5464,
          "name": "Menethil's Gift",
          "faction": "both",
          "questGiver": "Menethil's Gift (object) — inside Stratholme; turn in to Leonid Barthalomew the Revered, Light's Hope Chapel",
          "prereq": "Menethil's Gift (Keepsake placement)",
          "note": "Undead side. Continues to Soulbound Keepsake, then The Lich, Ras Frostwhisper in Scholomance. No item reward."
        },
        {
          "id": 8968,
          "name": "The Left Piece of Lord Valthalak's Amulet",
          "faction": "both",
          "questGiver": "Bodley (ghost) — Blackrock Mountain",
          "prereq": "Dungeon Set 2 'Components of Importance' class-specific step",
          "note": "Either/shared side. Use the Brazier of Beckoning inside Stratholme to summon and kill the spirits Jarien and Sothos. Given and turned in outside; objective is inside. No item reward for this step."
        },
        {
          "id": 8991,
          "name": "The Right Piece of Lord Valthalak's Amulet",
          "faction": "both",
          "questGiver": "Bodley — Blackrock Mountain",
          "prereq": "The Left Piece of Lord Valthalak's Amulet (Stratholme)",
          "note": "Second-pass Dungeon Set 2 step; same Jarien and Sothos summon-and-kill objective inside Stratholme. No item reward for this step."
        }
      ]
    },
    {
      "id": "dire-maul",
      "name": "Dire Maul",
      "type": "dungeon",
      "zone": "Feralas",
      "levelRange": [55, 60],
      "phase": "classic",
      "attunement": "East wing has no lock. West and North wings require the Crescent Key, looted from Pusillin in the East wing (Pusillin flees and must be chased down after his escort event fails or is skipped).",
      "notes": "Three wings in one instance entry: East (Warpwood Quarter — Pusillin, Lethtendris, Alzzin the Wildshaper), West (Capital Row/Court of the Highborne/Athenaeum — Shen'dralar reputation questline, Immol'thar, Prince Tortheldrin, class 'Library' book quests, Quel'Serrar and epic-mount chains), and North (Gordok Commons — the Ogre Suit/Tribute Run event and Captain Kromcrush/King Gordok). Unchanged from vanilla Classic in TBC.",
      "quests": [
        {
          "id": 7429,
          "name": "Free Knot!",
          "faction": "both",
          "questGiver": "Knot Thimblejack — Dire Maul North (caged goblin)",
          "note": "North wing. Free Knot with a Gordok Shackle Key looted from ogres. +350 Steamwheedle Cartel reputation. No item reward."
        },
        {
          "id": 5519,
          "name": "The Gordok Ogre Suit",
          "faction": "both",
          "questGiver": "Knot Thimblejack — Dire Maul North",
          "prereq": "Free Knot!",
          "note": "North wing. Repeatable turn-in (4x Bolt of Runecloth, 8x Rugged Leather, 2x Rune Thread, 1x Ogre Tannin) that grants a Gordok Ogre Suit charge, the enabler item for the Tribute Run event."
        },
        {
          "id": 7703,
          "name": "Unfinished Gordok Business",
          "faction": "both",
          "questGiver": "Captain Kromcrush — Dire Maul North",
          "prereq": "A successful Tribute Run (King of the Gordok buff) and Prince Tortheldrin already dead (West wing)",
          "rewards": [
            { "id": 18366, "name": "Gordok's Handguards" },
            { "id": 18367, "name": "Gordok's Gauntlets" },
            { "id": 18368, "name": "Gordok's Gloves" },
            { "id": 18369, "name": "Gordok's Handwraps" }
          ],
          "note": "North wing. Given and turned in entirely inside Dire Maul North. Reward is a choice of one."
        },
        {
          "id": 7441,
          "name": "Pusillin and the Elder Azj'Tordin",
          "faction": "both",
          "questGiver": "Azj'Tordin — Lariss Pavilion, Feralas",
          "rewards": [
            { "id": 18411, "name": "Spry Boots" },
            { "id": 18410, "name": "Sprinter's Sword" }
          ],
          "note": "East wing. Retrieve the Book of Incantations from Pusillin. Pusillin also drops the Crescent Key needed for the West/North wings. Reward is a choice of one."
        },
        {
          "id": 7488,
          "name": "Lethtendris's Web",
          "faction": "alliance",
          "questGiver": "Latronicus Moonspear — Feathermoon Stronghold, Feralas",
          "rewards": [ { "id": 18491, "name": "Lorespinner" } ],
          "note": "East wing. Kill Lethtendris."
        },
        {
          "id": 7489,
          "name": "Lethtendris's Web",
          "faction": "horde",
          "questGiver": "Talo Thornhoof — Camp Mojache, Feralas",
          "rewards": [ { "id": 18491, "name": "Lorespinner" } ],
          "note": "East wing. Horde mirror of the Alliance Lethtendris's Web."
        },
        {
          "id": 5526,
          "name": "Shards of the Felvine",
          "faction": "both",
          "questGiver": "Rabine Saturna — Nighthaven, Moonglade",
          "prereq": "A Reliquary of Purity",
          "rewards": [
            { "id": 18535, "name": "Milli's Shield" },
            { "id": 18536, "name": "Milli's Lexicon" }
          ],
          "note": "East wing. Loot a Felvine shard from Alzzin the Wildshaper, the East wing end boss. Reward is a choice of one."
        },
        {
          "id": 7463,
          "name": "Arcane Refreshment",
          "faction": "both",
          "questGiver": "Lorekeeper Lydros — the Athenaeum, Dire Maul West",
          "note": "Mage class quest. Kill objective (Hydrospawn) is in the East wing; turn-in is at the Athenaeum in West. Teaches the top rank of Conjure Water. No item reward."
        },
        {
          "id": 8967,
          "name": "The Left Piece of Lord Valthalak's Amulet",
          "faction": "both",
          "questGiver": "Bodley — Upper Blackrock Spire",
          "note": "Warrior Dungeon Set 2 (Tier 0.5) chain step. Objective is to summon and kill Isalien in Dire Maul East's Warpwood Quarter via a Brazier of Beckoning (an alternate target to Jarien & Sothos in UBRS). Reward is a Battlegear of Might piece; exact item ID not confirmed this pass."
        },
        {
          "id": 7461,
          "name": "The Madness Within",
          "faction": "both",
          "questGiver": "Shen'dralar Ancient — Court of the Highborne, Dire Maul West",
          "note": "West wing. Destroy 5 pylons powering the Prison of Immol'thar, kill Immol'thar, then kill Prince Tortheldrin in the Athenaeum. Leads into The Treasure of the Shen'dralar. No item reward."
        },
        {
          "id": 7877,
          "name": "The Treasure of the Shen'dralar",
          "faction": "both",
          "questGiver": "Shen'dralar Ancient — Dire Maul West",
          "prereq": "The Madness Within",
          "rewards": [
            { "id": 18420, "name": "Bonecrusher" },
            { "id": 18421, "name": "Backwood Helm" },
            { "id": 18424, "name": "Sedge Boots" }
          ],
          "note": "West wing. Reward is a choice of one."
        },
        {
          "id": 7482,
          "name": "Elven Legends",
          "faction": "alliance",
          "questGiver": "Scholar Runethorn — Feathermoon Stronghold, Feralas",
          "note": "West wing. Speak to a contact inside Dire Maul West to begin the Libram/Arcanum chain. No item reward."
        },
        {
          "id": 7481,
          "name": "Elven Legends",
          "faction": "horde",
          "questGiver": "Sage Korolusk — Camp Mojache, Feralas",
          "note": "West wing. Horde mirror of the Alliance Elven Legends. No item reward."
        },
        {
          "id": 7484,
          "name": "Libram of Focus",
          "faction": "both",
          "questGiver": "Lorekeeper Lydros — the Athenaeum, Dire Maul West",
          "prereq": "Elven Legends",
          "rewards": [ { "id": 18330, "name": "Arcanum of Focus" } ],
          "note": "Paladin class quest. West wing."
        },
        {
          "id": 7485,
          "name": "Libram of Protection",
          "faction": "both",
          "questGiver": "Lorekeeper Lydros — the Athenaeum, Dire Maul West",
          "prereq": "Elven Legends",
          "rewards": [ { "id": 18331, "name": "Arcanum of Protection" } ],
          "note": "Paladin class quest. West wing."
        },
        {
          "id": 7483,
          "name": "Libram of Rapidity",
          "faction": "both",
          "questGiver": "Lorekeeper Lydros — the Athenaeum, Dire Maul West",
          "prereq": "Elven Legends",
          "rewards": [ { "id": 18329, "name": "Arcanum of Rapidity" } ],
          "note": "Paladin class quest. West wing."
        },
        {
          "id": 7499,
          "name": "Codex of Defense",
          "faction": "both",
          "questGiver": "Book found inside the Athenaeum, Dire Maul West",
          "rewards": [ { "id": 18466, "name": "Royal Seal of Eldre'Thalas" } ],
          "note": "Warrior class book quest. West wing. Grants +500 Shen'dralar reputation."
        },
        {
          "id": 7502,
          "name": "Harnessing Shadows",
          "faction": "both",
          "questGiver": "Book found inside the Athenaeum, Dire Maul West",
          "rewards": [ { "id": 18467, "name": "Royal Seal of Eldre'Thalas" } ],
          "note": "Warlock class book quest. West wing. Grants +500 Shen'dralar reputation."
        },
        {
          "id": 7505,
          "name": "Frost Shock and You",
          "faction": "both",
          "questGiver": "Book found inside the Athenaeum, Dire Maul West",
          "rewards": [ { "id": 18471, "name": "Royal Seal of Eldre'Thalas" } ],
          "note": "Shaman class book quest. West wing. Grants +500 Shen'dralar reputation."
        },
        {
          "id": 7498,
          "name": "Garona: A Study on Stealth and Treachery",
          "faction": "both",
          "questGiver": "Book found inside the Athenaeum, Dire Maul West",
          "rewards": [ { "id": 0, "name": "Royal Seal of Eldre'Thalas (rogue variant, exact item ID unconfirmed)" } ],
          "note": "Rogue class book quest. West wing. Grants +500 Shen'dralar reputation."
        },
        {
          "id": 7500,
          "name": "The Arcanist's Cookbook",
          "faction": "both",
          "questGiver": "Book found inside the Athenaeum, Dire Maul West",
          "rewards": [ { "id": 0, "name": "Royal Seal of Eldre'Thalas (mage variant, exact item ID unconfirmed)" } ],
          "note": "Mage class book quest. West wing. Grants +500 Shen'dralar reputation."
        },
        {
          "id": 7501,
          "name": "The Light and How To Swing It",
          "faction": "both",
          "questGiver": "Book found inside the Athenaeum, Dire Maul West",
          "rewards": [ { "id": 0, "name": "Royal Seal of Eldre'Thalas (paladin variant, exact item ID unconfirmed)" } ],
          "note": "Paladin class book quest. West wing. Grants +500 Shen'dralar reputation."
        },
        {
          "id": 7503,
          "name": "The Greatest Race of Hunters",
          "faction": "both",
          "questGiver": "Book found inside the Athenaeum, Dire Maul West",
          "rewards": [ { "id": 0, "name": "Royal Seal of Eldre'Thalas (hunter variant, exact item ID unconfirmed)" } ],
          "note": "Hunter class book quest. West wing. Grants +500 Shen'dralar reputation."
        },
        {
          "id": 7504,
          "name": "Holy Bologna: What the Light Won't Tell You",
          "faction": "both",
          "questGiver": "Book found inside the Athenaeum, Dire Maul West",
          "rewards": [ { "id": 0, "name": "Royal Seal of Eldre'Thalas (priest variant, exact item ID unconfirmed)" } ],
          "note": "Priest class book quest. West wing. Grants +500 Shen'dralar reputation."
        },
        {
          "id": 7506,
          "name": "The Emerald Dream",
          "faction": "both",
          "questGiver": "Book found inside the Athenaeum, Dire Maul West",
          "rewards": [ { "id": 0, "name": "Royal Seal of Eldre'Thalas (druid variant, exact item ID unconfirmed)" } ],
          "note": "Druid class book quest. West wing. Grants +500 Shen'dralar reputation."
        },
        {
          "id": 7507,
          "name": "Return Nostro's Compendium of Dragon Slaying to the Athenaeum",
          "faction": "both",
          "questGiver": "Book found inside Dire Maul West; turn in at the Athenaeum",
          "note": "West wing. First step of the Quel'Serrar chain. No item reward."
        },
        {
          "id": 7508,
          "name": "The Forging of Quel'Serrar",
          "faction": "both",
          "questGiver": "Lorekeeper Lydros — the Athenaeum, Dire Maul West",
          "prereq": "Return Nostro's Compendium of Dragon Slaying to the Athenaeum",
          "note": "West wing. Obtain A Dull and Flat Elven Blade. No item reward for this step."
        },
        {
          "id": 7509,
          "name": "The Forging of Quel'Serrar",
          "faction": "both",
          "questGiver": "Lorekeeper Lydros — the Athenaeum, Dire Maul West",
          "prereq": "The Forging of Quel'Serrar (obtain the blade)",
          "rewards": [ { "id": 18348, "name": "Quel'Serrar" } ],
          "note": "Chain start/turn-ins are in Dire Maul West; tempering the blade requires killing Onyxia, outside the instance."
        },
        {
          "id": 7631,
          "name": "Dreadsteed of Xoroth",
          "faction": "both",
          "questGiver": "Chain originates with Mor'zul Bloodbringer, Burning Steppes",
          "note": "Warlock epic mount quest. The summon-and-tame ritual happens inside Dire Maul West, after Immol'thar is dead. Teaches Summon Dreadsteed; no equippable item reward."
        },
        {
          "id": 7643,
          "name": "Ancient Equine Spirit",
          "faction": "both",
          "questGiver": "Chain originates with Merideth Carlson, Southshore",
          "note": "Paladin epic mount quest. Defeat Tendris Warpwood (Dire Maul West boss) to free the spirit, then bless it inside the instance. Teaches the paladin epic mount summon; no equippable item reward."
        }
      ]
    }
  ]
}
);
