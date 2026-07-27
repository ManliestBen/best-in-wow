/* BiS Companion data — TBC Classic Druid leveling brackets (10-69).
   Feral (Bear)/Feral (Cat) share agility/stamina leather gear; Balance/Restoration
   share intellect/spirit cloth-or-leather caster gear (leather caster pieces barely
   exist below level 60, so cloth fills in — flagged with a "Cloth" note). Item IDs
   verified against nether.wowhead.com/tbc/tooltip/item/<id>. */
WOWDATA.register(
{
  "kind": "bis",
  "expansion": "tbc",
  "class": "druid",
  "className": "Druid",
  "classColor": "#FF7D0A",
  "specs": [
    {
      "id": "feral-tank",
      "name": "Feral (Bear)",
      "role": "tank",
      "brackets": [
        {
          "id": "lvl19",
          "levelRange": [10, 19],
          "slots": {
            "shoulder": [
              { "id": 5404, "name": "Serpent's Shoulders", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Wailing Caverns", "boss": "Lady Anacondra" } }
            ],
            "back": [
              { "id": 6466, "name": "Deviate Scale Cloak", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking; pattern sold by Kalldan Felmoon near Wailing Caverns, requires Deviate Scale farmed in the instance" } }
            ],
            "chest": [
              { "id": 10399, "name": "Blackened Defias Armor", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Deadmines", "detail": "Defias trash; part of the Blackened Defias set" } }
            ],
            "hands": [
              { "id": 6467, "name": "Deviate Scale Gloves", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking; pattern sold by Kalldan Felmoon, requires Deviate Scale farmed in Wailing Caverns" } }
            ],
            "waist": [
              { "id": 6468, "name": "Deviate Scale Belt", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking; requires Deviate Scale farmed in Wailing Caverns" } }
            ],
            "legs": [
              { "id": 10400, "name": "Blackened Defias Leggings", "quality": "uncommon", "rank": 1, "source": { "type": "drop", "instance": "The Deadmines", "detail": "Defias trash; part of the Blackened Defias set" } }
            ],
            "feet": [
              { "id": 10402, "name": "Blackened Defias Boots", "quality": "uncommon", "rank": 1, "source": { "type": "drop", "instance": "The Deadmines", "detail": "Defias trash; part of the Blackened Defias set" } }
            ],
            "finger": [
              { "id": 1156, "name": "Lavishly Jeweled Ring", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Deadmines", "boss": "Gilnid" }, "note": "Unique-Equipped; Intellect roll, but the only ring available this early" },
              { "id": 12996, "name": "Band of Purification", "quality": "rare", "rank": 2, "source": { "type": "world-drop" }, "note": "BoE, may need AH" }
            ],
            "mainhand": [
              { "id": 5191, "name": "Cruel Barb", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Deadmines", "boss": "Edwin VanCleef" }, "note": "Fast dagger — fine stat-stick for either form this early" }
            ]
          }
        },
        {
          "id": "lvl29",
          "levelRange": [20, 29],
          "slots": {
            "neck": [
              { "id": 6695, "name": "Stygian Bone Amulet", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Razorfen Kraul", "boss": "Groyat the Blind Hunter", "detail": "rare spawn" } }
            ],
            "shoulder": [
              { "id": 5404, "name": "Serpent's Shoulders", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Wailing Caverns", "boss": "Lady Anacondra" }, "note": "Holds over from the lvl19 bracket if not already picked up" }
            ],
            "back": [
              { "id": 6466, "name": "Deviate Scale Cloak", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking; pattern sold by Kalldan Felmoon near Wailing Caverns, requires Deviate Scale farmed in the instance" }, "note": "Still fine into the low 20s" }
            ],
            "chest": [
              { "id": 10399, "name": "Blackened Defias Armor", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Deadmines", "detail": "Defias trash; part of the Blackened Defias set" }, "note": "Carries over; no better leather chest found yet" }
            ],
            "hands": [
              { "id": 6467, "name": "Deviate Scale Gloves", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking; pattern sold by Kalldan Felmoon, requires Deviate Scale farmed in Wailing Caverns" } }
            ],
            "waist": [
              { "id": 6468, "name": "Deviate Scale Belt", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking; requires Deviate Scale farmed in Wailing Caverns" } }
            ],
            "legs": [
              { "id": 10400, "name": "Blackened Defias Leggings", "quality": "uncommon", "rank": 1, "source": { "type": "drop", "instance": "The Deadmines", "detail": "Defias trash; part of the Blackened Defias set" }, "note": "Carries over from the lvl19 bracket" }
            ],
            "wrist": [
              { "id": 18948, "name": "Barbaric Bracers", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking 155 (BoE, often on AH)" } }
            ],
            "feet": [
              { "id": 1121, "name": "Feet of the Lynx", "quality": "rare", "rank": 1, "source": { "type": "world-drop", "zone": "Duskwood", "detail": "Rare drop from Flesh Eater" } }
            ],
            "finger": [
              { "id": 1076, "name": "Defias Renegade Ring", "quality": "uncommon", "rank": 1, "source": { "type": "drop", "instance": "The Stockade", "detail": "trash" } },
              { "id": 2039, "name": "Plains Ring", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Razorfen Kraul", "detail": "trash" } }
            ],
            "mainhand": [
              { "id": 9449, "name": "Manual Crowd Pummeler", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Gnomeregan", "boss": "Crowd Pummeler 9-60" }, "note": "Iconic classic feral weapon — the on-use haste effect keeps it relevant long after the base stats fall behind. Shared BiS for bear and cat leveling." },
              { "id": 6904, "name": "Bite of Serra'kis", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Blackfathom Deeps", "boss": "Old Serra'kis" }, "note": "Fast dagger with a nature poison proc — a cat-friendly alternative to the slower Crowd Pummeler" }
            ]
          }
        },
        {
          "id": "lvl39",
          "levelRange": [30, 39],
          "slots": {
            "head": [
              { "id": 9420, "name": "Adventurer's Pith Helmet", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Uldaman", "detail": "trash" } }
            ],
            "neck": [
              { "id": 7731, "name": "Ghostshard Talisman", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "Azshir the Sleepless", "detail": "Graveyard wing" }, "note": "Stamina-focused; the spell-damage proc is wasted but it's the best neck available this early" }
            ],
            "shoulder": [
              { "id": 10774, "name": "Fleshhide Shoulders", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Razorfen Downs", "boss": "Glutton" } }
            ],
            "back": [
              { "id": 5257, "name": "Dark Hooded Cape", "quality": "rare", "rank": 1, "source": { "type": "world-drop", "zone": "Arathi Highlands", "detail": "Dropped by the rare spawn Nimar the Slayer" } }
            ],
            "chest": [
              { "id": 10583, "name": "Quillward Harness", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Razorfen Downs", "boss": "Death's Head Necromancer" } },
              { "id": 14601, "name": "Warden's Wraps", "quality": "uncommon", "rank": 2, "source": { "type": "world-drop", "zone": "Desolace" } }
            ],
            "wrist": [
              { "id": 19508, "name": "Branded Leather Bracers", "quality": "uncommon", "rank": 1, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "High Inquisitor Fairbanks", "detail": "Cathedral wing" } }
            ],
            "hands": [
              { "id": 7690, "name": "Ebon Vise", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Scarlet Monastery", "detail": "trash" }, "note": "Small agility/stamina leather glove upgrade" }
            ],
            "waist": [
              { "id": 7387, "name": "Dusky Belt", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking (Dusky Leather set)" } }
            ],
            "legs": [
              { "id": 1718, "name": "Basilisk Hide Pants", "quality": "rare", "rank": 1, "source": { "type": "world-drop" } }
            ],
            "feet": [
              { "id": 2276, "name": "Swampwalker Boots", "quality": "rare", "rank": 1, "source": { "type": "world-drop" } }
            ],
            "finger": [
              { "id": 7686, "name": "Ironspine's Eye", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "Ironspine", "detail": "Graveyard wing, rare spawn" }, "note": "Unique-Equipped" },
              { "id": 2262, "name": "Mark of Kern", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Scarlet Monastery" }, "note": "Unique-Equipped" }
            ],
            "trinket": [
              { "id": 9149, "name": "Philosopher's Stone", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Alchemy (skill 200), BoP" }, "note": "Usable from level 35 — the only trinket available this early" }
            ],
            "mainhand": [
              { "id": 9449, "name": "Manual Crowd Pummeler", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Gnomeregan", "boss": "Crowd Pummeler 9-60" }, "note": "Still one of the best feral weapons available; the haste proc holds up mechanically well into the 50s." },
              { "id": 10761, "name": "Coldrage Dagger", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Razorfen Downs", "boss": "Amnennar the Coldbringer" }, "note": "Frost slow proc; fast alternative for cat form" }
            ]
          }
        },
        {
          "id": "lvl49",
          "levelRange": [40, 49],
          "slots": {
            "head": [
              { "id": 8345, "name": "Wolfshead Helm", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking (Classic pattern, BoE)" }, "note": "Grants bonus energy/rage on shifting into Cat/Bear form; one of very few Druid-only items and stays relevant for a very long time." }
            ],
            "neck": [
              { "id": 9641, "name": "Lifeblood Amulet", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Zul'Farrak", "boss": "Theka the Martyr" } }
            ],
            "shoulder": [
              { "id": 17749, "name": "Phytoskin Spaulders", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Maraudon", "boss": "Razorlash" } }
            ],
            "back": [
              { "id": 11858, "name": "Battlehard Cape", "quality": "uncommon", "rank": 1, "source": { "type": "quest", "quest": "A Grim Discovery", "zone": "Feralas" } }
            ],
            "chest": [
              { "id": 17742, "name": "Fungus Shroud Armor", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Maraudon" }, "note": "Leather agility/stamina chest — solid upgrade for the low 40s" }
            ],
            "legs": [
              { "id": 10785, "name": "Atal'ai Leggings", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Sunken Temple", "detail": "Balcony mini-bosses" }, "note": "Random enchant roll — look for Agility or Stamina" },
              { "id": 9414, "name": "Oilskin Leggings", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Uldaman", "boss": "Grimlok" } }
            ],
            "feet": [
              { "id": 17728, "name": "Albino Crocscale Boots", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Maraudon", "boss": "Rotgrip" } },
              { "id": 12470, "name": "Sandstalker Ankleguards", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Zul'Farrak", "boss": "Zerillis", "detail": "rare spawn" } }
            ],
            "finger": [
              { "id": 11118, "name": "Archaedic Stone", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Uldaman", "boss": "Archaedas" }, "note": "Random-enchant ring; look for an Agility ('of the Monkey'/'of the Bear') roll" },
              { "id": 17713, "name": "Blackstone Ring", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Maraudon", "boss": "Princess Theradras" } }
            ],
            "trinket": [
              { "id": 9149, "name": "Philosopher's Stone", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Alchemy (skill 200), BoP" }, "note": "Holds over from the lvl39 bracket" },
              { "id": 11122, "name": "Carrot on a Stick", "quality": "uncommon", "rank": 2, "source": { "type": "quest", "quest": "Gahz'rilla", "instance": "Zul'Farrak" }, "note": "No combat stats; mount-speed utility filler" }
            ],
            "mainhand": [
              { "id": 9449, "name": "Manual Crowd Pummeler", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Gnomeregan", "boss": "Crowd Pummeler 9-60" } }
            ]
          }
        },
        {
          "id": "lvl59",
          "levelRange": [50, 57],
          "slots": {
            "head": [
              { "id": 8345, "name": "Wolfshead Helm", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking (Classic pattern, BoE)" } },
              { "id": 12960, "name": "Tribal War Feathers", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Blackrock Spire", "boss": "Gyth", "detail": "Lower Blackrock Spire" }, "note": "Random-enchant leather head; base armor/stamina works as a stopgap even though the roll usually favors casters" }
            ],
            "neck": [
              { "id": 18381, "name": "Evil Eye Pendant", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Dire Maul", "boss": "Immol'thar" } },
              { "id": 11755, "name": "Verek's Collar", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Blackrock Depths", "boss": "Verek" } }
            ],
            "shoulder": [
              { "id": 16708, "name": "Shadowcraft Spaulders", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Stratholme", "boss": "Cannon Master Willey" }, "note": "Rogue Shadowcraft set piece — great agility/stamina shoulders for feral too" }
            ],
            "back": [
              { "id": 12552, "name": "Blisterbane Wrap", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Blackrock Depths" } },
              { "id": 13397, "name": "Stoneskin Gargoyle Cape", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Stratholme", "boss": "Stonespine" } }
            ],
            "chest": [
              { "id": 13944, "name": "Tombstone Breastplate", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Scholomance", "boss": "Darkmaster Gandling" } }
            ],
            "wrist": [
              { "id": 18700, "name": "Malefic Bracers", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Dire Maul" } }
            ],
            "hands": [
              { "id": 18377, "name": "Quickdraw Gloves", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Dire Maul", "boss": "Immol'thar" } }
            ],
            "waist": [
              { "id": 18505, "name": "Mugger's Belt", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Dire Maul", "boss": "Captain Kromcrush" } }
            ],
            "legs": [
              { "id": 16709, "name": "Shadowcraft Pants", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Stratholme", "boss": "Baron Rivendare" }, "note": "Rogue Shadowcraft set piece" }
            ],
            "feet": [
              { "id": 16711, "name": "Shadowcraft Boots", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Scholomance", "boss": "Rattlegore" }, "note": "Rogue Shadowcraft set piece" }
            ],
            "finger": [
              { "id": 13373, "name": "Band of Flesh", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Stratholme", "boss": "Ramstein the Gorger" } },
              { "id": 18302, "name": "Band of Vigor", "quality": "uncommon", "rank": 2, "source": { "type": "drop", "instance": "Dire Maul", "boss": "Lethtendris", "detail": "East wing" } }
            ],
            "trinket": [
              { "id": 11815, "name": "Hand of Justice", "quality": "rare", "rank": 1, "source": { "type": "world-drop" }, "note": "Expensive BoE — extra-attack proc is excellent threat/DPS for both bear and cat" },
              { "id": 19991, "name": "Devilsaur Eye", "quality": "rare", "rank": 2, "source": { "type": "world-drop", "zone": "Un'Goro Crater", "detail": "Devilsaur loot" }, "note": "Expensive BoE — on-use AP and hit burst" }
            ],
            "mainhand": [
              { "id": 9449, "name": "Manual Crowd Pummeler", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Gnomeregan", "boss": "Crowd Pummeler 9-60" }, "note": "Falling behind on stats but the haste proc still makes it worth using until a Ramparts-tier weapon drops" },
              { "id": 2244, "name": "Krol Blade", "quality": "epic", "rank": 2, "source": { "type": "world-drop", "detail": "Rare drop from Skeletal Acolytes (Western Plaguelands / Scholomance undead trash)" }, "note": "Expensive BoE — fast dagger, strong cat-form option" },
              { "id": 13167, "name": "Fist of Omokk", "quality": "rare", "rank": 3, "source": { "type": "drop", "instance": "Blackrock Spire", "boss": "Highlord Omokk", "detail": "Lower Blackrock Spire" }, "note": "Bear-tank only — Strength/Stamina 2H mace, no benefit for cat form" }
            ]
          }
        },
        {
          "id": "lvl60",
          "levelRange": [58, 64],
          "slots": {
            "head": [
              { "id": 8345, "name": "Wolfshead Helm", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking (Classic pattern, BoE)" } }
            ],
            "neck": [
              { "id": 24073, "name": "Garrote-String Necklace", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Hellfire Ramparts", "boss": "Omor the Unscarred" } }
            ],
            "shoulder": [
              { "id": 24398, "name": "Mantle of the Dusk-Dweller", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Blood Furnace", "boss": "Keli'dan the Breaker" } }
            ],
            "back": [
              { "id": 25712, "name": "Perfectly Balanced Cape", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Heart of Rage", "instance": "The Blood Furnace", "zone": "Hellfire Peninsula" } },
              { "id": 24456, "name": "Cloak of Enduring Swiftness", "quality": "rare", "rank": 2, "source": { "type": "drop", "zone": "Hellfire Peninsula", "detail": "Hellfire Citadel dungeon drop" }, "note": "Agility/Stamina/Dodge alternative" }
            ],
            "chest": [
              { "id": 24396, "name": "Vest of Vengeance", "quality": "rare", "rank": 1, "source": { "type": "drop", "zone": "Hellfire Peninsula", "detail": "Hellfire Citadel dungeon drop" } },
              { "id": 29938, "name": "Battle Seeker Chestguard", "quality": "uncommon", "rank": 2, "source": { "type": "quest", "quest": "Waste Not, Want Not (Alliance) / I Work... For the Horde! (Horde)", "zone": "Hellfire Peninsula" } }
            ],
            "wrist": [
              { "id": 24023, "name": "Bracers of Finesse", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Hellfire Ramparts", "boss": "Watchkeeper Gargolmar" } }
            ],
            "hands": [
              { "id": 24365, "name": "Deft Handguards", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Slave Pens", "boss": "Quagmirran" } }
            ],
            "waist": [
              { "id": 24063, "name": "Shifting Sash of Midnight", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Hellfire Ramparts", "detail": "Reinforced Fel Iron Chest lockbox" } }
            ],
            "legs": [
              { "id": 29939, "name": "Flayer-Hide Leggings", "quality": "uncommon", "rank": 1, "source": { "type": "quest", "quest": "Disrupt Their Reinforcements", "zone": "Hellfire Peninsula" } }
            ],
            "feet": [
              { "id": 25717, "name": "Sure-Step Boots", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Weaken the Ramparts", "instance": "Hellfire Ramparts", "zone": "Hellfire Peninsula" } }
            ],
            "finger": [
              { "id": 19432, "name": "Circle of Applied Force", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Lower Blackrock Spire", "boss": "Pyroguard Emberseer" }, "note": "Unique-Equipped" },
              { "id": 27733, "name": "Warden's Ring of Precision", "quality": "uncommon", "rank": 2, "source": { "type": "quest", "quest": "Drain Schematics", "zone": "Zangarmarsh" } }
            ],
            "trinket": [
              { "id": 11815, "name": "Hand of Justice", "quality": "rare", "rank": 1, "source": { "type": "world-drop" }, "note": "Expensive BoE" },
              { "id": 28041, "name": "Bladefist's Breadth", "quality": "rare", "rank": 2, "source": { "type": "quest", "quest": "Overlord (Alliance) / Cruel's Intentions (Horde)", "zone": "Hellfire Peninsula" }, "note": "On-use +200 Attack Power" },
              { "id": 28042, "name": "Regal Protectorate", "quality": "rare", "rank": 3, "source": { "type": "drop", "detail": "Coilfang Reservoir-tier drop" }, "note": "Bear-tank only — defense rating plus an on-use health cooldown" }
            ],
            "mainhand": [
              { "id": 9449, "name": "Manual Crowd Pummeler", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Gnomeregan", "boss": "Crowd Pummeler 9-60" }, "note": "Carries you into Hellfire Peninsula until a proper Outland weapon drops" }
            ],
            "ranged": [
              { "id": 23198, "name": "Idol of Brutality", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Stratholme (Classic)", "boss": "Magistrate Barthilas" }, "note": "Best with high rage" },
              { "id": 28064, "name": "Idol of the Wild", "quality": "uncommon", "rank": 2, "source": { "type": "quest", "quest": "Colossal Menace", "zone": "Hellfire Peninsula" } }
            ]
          }
        },
        {
          "id": "lvl65",
          "levelRange": [65, 69],
          "slots": {
            "head": [
              { "id": 29332, "name": "Terokk's Mask", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Terokk's Legacy", "instance": "Sethekk Halls", "zone": "Terokkar Forest" } },
              { "id": 28182, "name": "Helm of the Claw", "quality": "rare", "rank": 2, "source": { "type": "quest", "quest": "The Warlord's Hideout", "instance": "The Steamvault", "zone": "Zangarmarsh" } }
            ],
            "neck": [
              { "id": 29335, "name": "Talon Lord's Collar", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Brother Against Brother", "instance": "Sethekk Halls", "zone": "Terokkar Forest" } }
            ],
            "shoulder": [
              { "id": 27434, "name": "Mantle of Perenolde", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Old Hillsbrad Foothills", "boss": "Epoch Hunter" } }
            ],
            "back": [
              { "id": 27519, "name": "Cloak of Malice", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Shattered Halls", "boss": "Grand Warlock Nethekurse" } }
            ],
            "chest": [
              { "id": 29340, "name": "Auchenai Monk's Tunic", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Everything Will Be Alright", "instance": "Auchenai Crypts", "zone": "Terokkar Forest" } }
            ],
            "wrist": [
              { "id": 24023, "name": "Bracers of Finesse", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Hellfire Ramparts", "boss": "Watchkeeper Gargolmar" }, "note": "Carries over from the 58-64 bracket" }
            ],
            "hands": [
              { "id": 25669, "name": "Thick Draenic Gloves", "quality": "rare", "rank": 1, "source": { "type": "quest", "zone": "Nagrand", "detail": "Thick Draenic Armor quest set" } }
            ],
            "legs": [
              { "id": 31544, "name": "Clefthoof Hide Leggings", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Showdown", "zone": "Blade's Edge Mountains" } }
            ],
            "feet": [
              { "id": 29318, "name": "Southshore Sneakers", "quality": "uncommon", "rank": 1, "source": { "type": "quest", "quest": "Return to Andormu", "instance": "Old Hillsbrad Foothills", "zone": "Caverns of Time, Tanaris" } }
            ],
            "waist": [
              { "id": 31464, "name": "Naaru Belt of Precision", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "How to Break Into the Arcatraz", "instance": "The Mechanar / The Botanica", "zone": "Netherstorm" } }
            ],
            "finger": [
              { "id": 29321, "name": "Time-bending Gem", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Hero of the Brood", "instance": "The Black Morass", "zone": "Caverns of Time, Tanaris" } },
              { "id": 29323, "name": "Andormu's Tear", "quality": "rare", "rank": 2, "source": { "type": "quest", "quest": "Hero of the Brood", "instance": "The Black Morass", "zone": "Caverns of Time, Tanaris" }, "note": "Defense/dodge/block — bear-tank oriented" }
            ],
            "trinket": [
              { "id": 28034, "name": "Hourglass of the Unraveller", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Black Morass", "boss": "Temporus" } },
              { "id": 28041, "name": "Bladefist's Breadth", "quality": "rare", "rank": 2, "source": { "type": "quest", "quest": "Overlord (Alliance) / Cruel's Intentions (Horde)", "zone": "Hellfire Peninsula" }, "note": "Carries over from the low 60s" }
            ],
            "mainhand": [
              { "id": 29329, "name": "Terokk's Quill", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Terokk's Legacy", "instance": "Sethekk Halls", "zone": "Terokkar Forest" }, "note": "2H polearm — big Agility/Stamina jump over Manual Crowd Pummeler" }
            ],
            "ranged": [
              { "id": 23198, "name": "Idol of Brutality", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Stratholme (Classic)", "boss": "Magistrate Barthilas" } },
              { "id": 28064, "name": "Idol of the Wild", "quality": "uncommon", "rank": 2, "source": { "type": "quest", "quest": "Colossal Menace", "zone": "Hellfire Peninsula" } }
            ]
          }
        }
      ]
    },
    {
      "id": "feral-cat",
      "name": "Feral (Cat)",
      "role": "dps",
      "brackets": [
        {
          "id": "lvl19",
          "levelRange": [10, 19],
          "slots": {
            "shoulder": [
              { "id": 5404, "name": "Serpent's Shoulders", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Wailing Caverns", "boss": "Lady Anacondra" } }
            ],
            "back": [
              { "id": 6466, "name": "Deviate Scale Cloak", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking; pattern sold by Kalldan Felmoon near Wailing Caverns, requires Deviate Scale farmed in the instance" } }
            ],
            "chest": [
              { "id": 10399, "name": "Blackened Defias Armor", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Deadmines", "detail": "Defias trash; part of the Blackened Defias set" } }
            ],
            "hands": [
              { "id": 6467, "name": "Deviate Scale Gloves", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking; pattern sold by Kalldan Felmoon, requires Deviate Scale farmed in Wailing Caverns" } }
            ],
            "waist": [
              { "id": 6468, "name": "Deviate Scale Belt", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking; requires Deviate Scale farmed in Wailing Caverns" } }
            ],
            "legs": [
              { "id": 10400, "name": "Blackened Defias Leggings", "quality": "uncommon", "rank": 1, "source": { "type": "drop", "instance": "The Deadmines", "detail": "Defias trash; part of the Blackened Defias set" } }
            ],
            "feet": [
              { "id": 10402, "name": "Blackened Defias Boots", "quality": "uncommon", "rank": 1, "source": { "type": "drop", "instance": "The Deadmines", "detail": "Defias trash; part of the Blackened Defias set" } }
            ],
            "finger": [
              { "id": 1156, "name": "Lavishly Jeweled Ring", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Deadmines", "boss": "Gilnid" }, "note": "Unique-Equipped; Intellect roll, but the only ring available this early" },
              { "id": 12996, "name": "Band of Purification", "quality": "rare", "rank": 2, "source": { "type": "world-drop" }, "note": "BoE, may need AH" }
            ],
            "mainhand": [
              { "id": 5191, "name": "Cruel Barb", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Deadmines", "boss": "Edwin VanCleef" }, "note": "Fast dagger — ideal weapon speed for Cat Form this early" }
            ]
          }
        },
        {
          "id": "lvl29",
          "levelRange": [20, 29],
          "slots": {
            "neck": [
              { "id": 6695, "name": "Stygian Bone Amulet", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Razorfen Kraul", "boss": "Groyat the Blind Hunter", "detail": "rare spawn" } }
            ],
            "shoulder": [
              { "id": 5404, "name": "Serpent's Shoulders", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Wailing Caverns", "boss": "Lady Anacondra" }, "note": "Holds over from the lvl19 bracket if not already picked up" }
            ],
            "back": [
              { "id": 6466, "name": "Deviate Scale Cloak", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking; pattern sold by Kalldan Felmoon near Wailing Caverns, requires Deviate Scale farmed in the instance" }, "note": "Still fine into the low 20s" }
            ],
            "chest": [
              { "id": 10399, "name": "Blackened Defias Armor", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Deadmines", "detail": "Defias trash; part of the Blackened Defias set" }, "note": "Carries over; no better leather chest found yet" }
            ],
            "hands": [
              { "id": 6467, "name": "Deviate Scale Gloves", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking; pattern sold by Kalldan Felmoon, requires Deviate Scale farmed in Wailing Caverns" } }
            ],
            "waist": [
              { "id": 6468, "name": "Deviate Scale Belt", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking; requires Deviate Scale farmed in Wailing Caverns" } }
            ],
            "legs": [
              { "id": 10400, "name": "Blackened Defias Leggings", "quality": "uncommon", "rank": 1, "source": { "type": "drop", "instance": "The Deadmines", "detail": "Defias trash; part of the Blackened Defias set" }, "note": "Carries over from the lvl19 bracket" }
            ],
            "wrist": [
              { "id": 18948, "name": "Barbaric Bracers", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking 155 (BoE, often on AH)" } }
            ],
            "feet": [
              { "id": 1121, "name": "Feet of the Lynx", "quality": "rare", "rank": 1, "source": { "type": "world-drop", "zone": "Duskwood", "detail": "Rare drop from Flesh Eater" } }
            ],
            "finger": [
              { "id": 1076, "name": "Defias Renegade Ring", "quality": "uncommon", "rank": 1, "source": { "type": "drop", "instance": "The Stockade", "detail": "trash" } },
              { "id": 2039, "name": "Plains Ring", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Razorfen Kraul", "detail": "trash" } }
            ],
            "mainhand": [
              { "id": 6904, "name": "Bite of Serra'kis", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Blackfathom Deeps", "boss": "Old Serra'kis" }, "note": "Fast dagger with a nature poison proc — ideal Cat Form weapon speed" },
              { "id": 9449, "name": "Manual Crowd Pummeler", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Gnomeregan", "boss": "Crowd Pummeler 9-60" }, "note": "Iconic classic feral weapon — the on-use haste effect keeps it relevant long after the base stats fall behind. Shared BiS for bear and cat leveling." }
            ]
          }
        },
        {
          "id": "lvl39",
          "levelRange": [30, 39],
          "slots": {
            "head": [
              { "id": 9420, "name": "Adventurer's Pith Helmet", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Uldaman", "detail": "trash" } }
            ],
            "neck": [
              { "id": 7731, "name": "Ghostshard Talisman", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "Azshir the Sleepless", "detail": "Graveyard wing" }, "note": "Stamina-focused; the spell-damage proc is wasted but it's the best neck available this early" }
            ],
            "shoulder": [
              { "id": 10774, "name": "Fleshhide Shoulders", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Razorfen Downs", "boss": "Glutton" } }
            ],
            "back": [
              { "id": 5257, "name": "Dark Hooded Cape", "quality": "rare", "rank": 1, "source": { "type": "world-drop", "zone": "Arathi Highlands", "detail": "Dropped by the rare spawn Nimar the Slayer" } }
            ],
            "chest": [
              { "id": 10583, "name": "Quillward Harness", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Razorfen Downs", "boss": "Death's Head Necromancer" } },
              { "id": 14601, "name": "Warden's Wraps", "quality": "uncommon", "rank": 2, "source": { "type": "world-drop", "zone": "Desolace" } }
            ],
            "wrist": [
              { "id": 19508, "name": "Branded Leather Bracers", "quality": "uncommon", "rank": 1, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "High Inquisitor Fairbanks", "detail": "Cathedral wing" } }
            ],
            "hands": [
              { "id": 7690, "name": "Ebon Vise", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Scarlet Monastery", "detail": "trash" }, "note": "Small agility/stamina leather glove upgrade" }
            ],
            "waist": [
              { "id": 7387, "name": "Dusky Belt", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking (Dusky Leather set)" } }
            ],
            "legs": [
              { "id": 1718, "name": "Basilisk Hide Pants", "quality": "rare", "rank": 1, "source": { "type": "world-drop" } }
            ],
            "feet": [
              { "id": 2276, "name": "Swampwalker Boots", "quality": "rare", "rank": 1, "source": { "type": "world-drop" } }
            ],
            "finger": [
              { "id": 7686, "name": "Ironspine's Eye", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "Ironspine", "detail": "Graveyard wing, rare spawn" }, "note": "Unique-Equipped" },
              { "id": 2262, "name": "Mark of Kern", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Scarlet Monastery" }, "note": "Unique-Equipped" }
            ],
            "trinket": [
              { "id": 9149, "name": "Philosopher's Stone", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Alchemy (skill 200), BoP" }, "note": "Usable from level 35 — the only trinket available this early" }
            ],
            "mainhand": [
              { "id": 9449, "name": "Manual Crowd Pummeler", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Gnomeregan", "boss": "Crowd Pummeler 9-60" }, "note": "Still one of the best feral weapons available; the haste proc holds up mechanically well into the 50s." },
              { "id": 10761, "name": "Coldrage Dagger", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Razorfen Downs", "boss": "Amnennar the Coldbringer" }, "note": "Frost slow proc; fast Cat Form alternative" }
            ]
          }
        },
        {
          "id": "lvl49",
          "levelRange": [40, 49],
          "slots": {
            "head": [
              { "id": 8345, "name": "Wolfshead Helm", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking (Classic pattern, BoE)" }, "note": "Grants bonus energy on shifting into Cat Form (powershifting); one of very few Druid-only items and stays relevant for a very long time." }
            ],
            "neck": [
              { "id": 9641, "name": "Lifeblood Amulet", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Zul'Farrak", "boss": "Theka the Martyr" } }
            ],
            "shoulder": [
              { "id": 17749, "name": "Phytoskin Spaulders", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Maraudon", "boss": "Razorlash" } }
            ],
            "back": [
              { "id": 11858, "name": "Battlehard Cape", "quality": "uncommon", "rank": 1, "source": { "type": "quest", "quest": "A Grim Discovery", "zone": "Feralas" } }
            ],
            "chest": [
              { "id": 17742, "name": "Fungus Shroud Armor", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Maraudon" }, "note": "Leather agility/stamina chest — solid upgrade for the low 40s" }
            ],
            "legs": [
              { "id": 10785, "name": "Atal'ai Leggings", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Sunken Temple", "detail": "Balcony mini-bosses" }, "note": "Random enchant roll — look for Agility or Stamina" },
              { "id": 9414, "name": "Oilskin Leggings", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Uldaman", "boss": "Grimlok" } }
            ],
            "feet": [
              { "id": 17728, "name": "Albino Crocscale Boots", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Maraudon", "boss": "Rotgrip" } },
              { "id": 12470, "name": "Sandstalker Ankleguards", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Zul'Farrak", "boss": "Zerillis", "detail": "rare spawn" } }
            ],
            "finger": [
              { "id": 11118, "name": "Archaedic Stone", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Uldaman", "boss": "Archaedas" }, "note": "Random-enchant ring; look for an Agility ('of the Monkey'/'of the Bear') roll" },
              { "id": 17713, "name": "Blackstone Ring", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Maraudon", "boss": "Princess Theradras" } }
            ],
            "trinket": [
              { "id": 9149, "name": "Philosopher's Stone", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Alchemy (skill 200), BoP" }, "note": "Holds over from the lvl39 bracket" },
              { "id": 11122, "name": "Carrot on a Stick", "quality": "uncommon", "rank": 2, "source": { "type": "quest", "quest": "Gahz'rilla", "instance": "Zul'Farrak" }, "note": "No combat stats; mount-speed utility filler" }
            ],
            "mainhand": [
              { "id": 9449, "name": "Manual Crowd Pummeler", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Gnomeregan", "boss": "Crowd Pummeler 9-60" } }
            ]
          }
        },
        {
          "id": "lvl59",
          "levelRange": [50, 57],
          "slots": {
            "head": [
              { "id": 8345, "name": "Wolfshead Helm", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking (Classic pattern, BoE)" } },
              { "id": 12960, "name": "Tribal War Feathers", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Blackrock Spire", "boss": "Gyth", "detail": "Lower Blackrock Spire" }, "note": "Random-enchant leather head; base armor/stamina works as a stopgap even though the roll usually favors casters" }
            ],
            "neck": [
              { "id": 18381, "name": "Evil Eye Pendant", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Dire Maul", "boss": "Immol'thar" } },
              { "id": 11755, "name": "Verek's Collar", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Blackrock Depths", "boss": "Verek" } }
            ],
            "shoulder": [
              { "id": 16708, "name": "Shadowcraft Spaulders", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Stratholme", "boss": "Cannon Master Willey" }, "note": "Rogue Shadowcraft set piece — great agility/stamina shoulders for feral too" }
            ],
            "back": [
              { "id": 12552, "name": "Blisterbane Wrap", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Blackrock Depths" } },
              { "id": 13397, "name": "Stoneskin Gargoyle Cape", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Stratholme", "boss": "Stonespine" } }
            ],
            "chest": [
              { "id": 13944, "name": "Tombstone Breastplate", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Scholomance", "boss": "Darkmaster Gandling" } }
            ],
            "wrist": [
              { "id": 18700, "name": "Malefic Bracers", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Dire Maul" } }
            ],
            "hands": [
              { "id": 18377, "name": "Quickdraw Gloves", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Dire Maul", "boss": "Immol'thar" } }
            ],
            "waist": [
              { "id": 18505, "name": "Mugger's Belt", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Dire Maul", "boss": "Captain Kromcrush" } }
            ],
            "legs": [
              { "id": 16709, "name": "Shadowcraft Pants", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Stratholme", "boss": "Baron Rivendare" }, "note": "Rogue Shadowcraft set piece" }
            ],
            "feet": [
              { "id": 16711, "name": "Shadowcraft Boots", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Scholomance", "boss": "Rattlegore" }, "note": "Rogue Shadowcraft set piece" }
            ],
            "finger": [
              { "id": 13373, "name": "Band of Flesh", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Stratholme", "boss": "Ramstein the Gorger" } },
              { "id": 18302, "name": "Band of Vigor", "quality": "uncommon", "rank": 2, "source": { "type": "drop", "instance": "Dire Maul", "boss": "Lethtendris", "detail": "East wing" } }
            ],
            "trinket": [
              { "id": 11815, "name": "Hand of Justice", "quality": "rare", "rank": 1, "source": { "type": "world-drop" }, "note": "Expensive BoE — extra-attack proc is excellent DPS for cat" },
              { "id": 19991, "name": "Devilsaur Eye", "quality": "rare", "rank": 2, "source": { "type": "world-drop", "zone": "Un'Goro Crater", "detail": "Devilsaur loot" }, "note": "Expensive BoE — on-use AP and hit burst" }
            ],
            "mainhand": [
              { "id": 9449, "name": "Manual Crowd Pummeler", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Gnomeregan", "boss": "Crowd Pummeler 9-60" }, "note": "Falling behind on stats but the haste proc still makes it worth using until a Ramparts-tier weapon drops" },
              { "id": 2244, "name": "Krol Blade", "quality": "epic", "rank": 2, "source": { "type": "world-drop", "detail": "Rare drop from Skeletal Acolytes (Western Plaguelands / Scholomance undead trash)" }, "note": "Expensive BoE — fast dagger, strong Cat Form option" }
            ]
          }
        },
        {
          "id": "lvl60",
          "levelRange": [58, 64],
          "slots": {
            "head": [
              { "id": 8345, "name": "Wolfshead Helm", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking (Classic pattern, BoE)" } }
            ],
            "neck": [
              { "id": 24073, "name": "Garrote-String Necklace", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Hellfire Ramparts", "boss": "Omor the Unscarred" } }
            ],
            "shoulder": [
              { "id": 24398, "name": "Mantle of the Dusk-Dweller", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Blood Furnace", "boss": "Keli'dan the Breaker" } }
            ],
            "back": [
              { "id": 25712, "name": "Perfectly Balanced Cape", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Heart of Rage", "instance": "The Blood Furnace", "zone": "Hellfire Peninsula" } },
              { "id": 24456, "name": "Cloak of Enduring Swiftness", "quality": "rare", "rank": 2, "source": { "type": "drop", "zone": "Hellfire Peninsula", "detail": "Hellfire Citadel dungeon drop" }, "note": "Agility/Stamina/Dodge alternative" }
            ],
            "chest": [
              { "id": 24396, "name": "Vest of Vengeance", "quality": "rare", "rank": 1, "source": { "type": "drop", "zone": "Hellfire Peninsula", "detail": "Hellfire Citadel dungeon drop" } },
              { "id": 29938, "name": "Battle Seeker Chestguard", "quality": "uncommon", "rank": 2, "source": { "type": "quest", "quest": "Waste Not, Want Not (Alliance) / I Work... For the Horde! (Horde)", "zone": "Hellfire Peninsula" } }
            ],
            "wrist": [
              { "id": 24023, "name": "Bracers of Finesse", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Hellfire Ramparts", "boss": "Watchkeeper Gargolmar" } }
            ],
            "hands": [
              { "id": 24365, "name": "Deft Handguards", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Slave Pens", "boss": "Quagmirran" } }
            ],
            "waist": [
              { "id": 24063, "name": "Shifting Sash of Midnight", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Hellfire Ramparts", "detail": "Reinforced Fel Iron Chest lockbox" } }
            ],
            "legs": [
              { "id": 29939, "name": "Flayer-Hide Leggings", "quality": "uncommon", "rank": 1, "source": { "type": "quest", "quest": "Disrupt Their Reinforcements", "zone": "Hellfire Peninsula" } }
            ],
            "feet": [
              { "id": 25717, "name": "Sure-Step Boots", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Weaken the Ramparts", "instance": "Hellfire Ramparts", "zone": "Hellfire Peninsula" } }
            ],
            "finger": [
              { "id": 19432, "name": "Circle of Applied Force", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Lower Blackrock Spire", "boss": "Pyroguard Emberseer" }, "note": "Unique-Equipped" },
              { "id": 27733, "name": "Warden's Ring of Precision", "quality": "uncommon", "rank": 2, "source": { "type": "quest", "quest": "Drain Schematics", "zone": "Zangarmarsh" } }
            ],
            "trinket": [
              { "id": 11815, "name": "Hand of Justice", "quality": "rare", "rank": 1, "source": { "type": "world-drop" }, "note": "Expensive BoE" },
              { "id": 28041, "name": "Bladefist's Breadth", "quality": "rare", "rank": 2, "source": { "type": "quest", "quest": "Overlord (Alliance) / Cruel's Intentions (Horde)", "zone": "Hellfire Peninsula" }, "note": "On-use +200 Attack Power" }
            ],
            "mainhand": [
              { "id": 9449, "name": "Manual Crowd Pummeler", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Gnomeregan", "boss": "Crowd Pummeler 9-60" }, "note": "Carries you into Hellfire Peninsula until a proper Outland weapon drops" }
            ],
            "ranged": [
              { "id": 23198, "name": "Idol of Brutality", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Stratholme (Classic)", "boss": "Magistrate Barthilas" }, "note": "Best with high rage" },
              { "id": 28064, "name": "Idol of the Wild", "quality": "uncommon", "rank": 2, "source": { "type": "quest", "quest": "Colossal Menace", "zone": "Hellfire Peninsula" } }
            ]
          }
        },
        {
          "id": "lvl65",
          "levelRange": [65, 69],
          "slots": {
            "head": [
              { "id": 29332, "name": "Terokk's Mask", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Terokk's Legacy", "instance": "Sethekk Halls", "zone": "Terokkar Forest" } },
              { "id": 28182, "name": "Helm of the Claw", "quality": "rare", "rank": 2, "source": { "type": "quest", "quest": "The Warlord's Hideout", "instance": "The Steamvault", "zone": "Zangarmarsh" } }
            ],
            "neck": [
              { "id": 29335, "name": "Talon Lord's Collar", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Brother Against Brother", "instance": "Sethekk Halls", "zone": "Terokkar Forest" } }
            ],
            "shoulder": [
              { "id": 27434, "name": "Mantle of Perenolde", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Old Hillsbrad Foothills", "boss": "Epoch Hunter" } }
            ],
            "back": [
              { "id": 27519, "name": "Cloak of Malice", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Shattered Halls", "boss": "Grand Warlock Nethekurse" } }
            ],
            "chest": [
              { "id": 29340, "name": "Auchenai Monk's Tunic", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Everything Will Be Alright", "instance": "Auchenai Crypts", "zone": "Terokkar Forest" } }
            ],
            "wrist": [
              { "id": 24023, "name": "Bracers of Finesse", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Hellfire Ramparts", "boss": "Watchkeeper Gargolmar" }, "note": "Carries over from the 58-64 bracket" }
            ],
            "hands": [
              { "id": 25669, "name": "Thick Draenic Gloves", "quality": "rare", "rank": 1, "source": { "type": "quest", "zone": "Nagrand", "detail": "Thick Draenic Armor quest set" } }
            ],
            "legs": [
              { "id": 31544, "name": "Clefthoof Hide Leggings", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Showdown", "zone": "Blade's Edge Mountains" } }
            ],
            "feet": [
              { "id": 29318, "name": "Southshore Sneakers", "quality": "uncommon", "rank": 1, "source": { "type": "quest", "quest": "Return to Andormu", "instance": "Old Hillsbrad Foothills", "zone": "Caverns of Time, Tanaris" } }
            ],
            "waist": [
              { "id": 31464, "name": "Naaru Belt of Precision", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "How to Break Into the Arcatraz", "instance": "The Mechanar / The Botanica", "zone": "Netherstorm" } }
            ],
            "finger": [
              { "id": 29321, "name": "Time-bending Gem", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Hero of the Brood", "instance": "The Black Morass", "zone": "Caverns of Time, Tanaris" } },
              { "id": 27925, "name": "Ravenclaw Band", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Sethekk Halls", "boss": "Talon King Ikiss" } }
            ],
            "trinket": [
              { "id": 28034, "name": "Hourglass of the Unraveller", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Black Morass", "boss": "Temporus" } },
              { "id": 28041, "name": "Bladefist's Breadth", "quality": "rare", "rank": 2, "source": { "type": "quest", "quest": "Overlord (Alliance) / Cruel's Intentions (Horde)", "zone": "Hellfire Peninsula" }, "note": "Carries over from the low 60s" }
            ],
            "mainhand": [
              { "id": 29329, "name": "Terokk's Quill", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Terokk's Legacy", "instance": "Sethekk Halls", "zone": "Terokkar Forest" }, "note": "2H polearm — big Agility/Stamina jump over Manual Crowd Pummeler" }
            ],
            "ranged": [
              { "id": 23198, "name": "Idol of Brutality", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Stratholme (Classic)", "boss": "Magistrate Barthilas" } },
              { "id": 28064, "name": "Idol of the Wild", "quality": "uncommon", "rank": 2, "source": { "type": "quest", "quest": "Colossal Menace", "zone": "Hellfire Peninsula" } }
            ]
          }
        }
      ]
    },
    {
      "id": "balance",
      "name": "Balance",
      "role": "dps",
      "brackets": [
        {
          "id": "lvl19",
          "levelRange": [10, 19],
          "slots": {
            "shoulder": [
              { "id": 10657, "name": "Talbar Mantle", "quality": "uncommon", "rank": 1, "faction": "horde", "source": { "type": "quest", "quest": "The Glowing Shard chain", "instance": "Wailing Caverns" } },
              { "id": 5254, "name": "Rugged Spaulders", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Shadowfang Keep", "boss": "Rethilgore" }, "note": "No cloth/leather Intellect shoulder exists for Alliance this early; Agility is wasted but it's the only option" }
            ],
            "chest": [
              { "id": 14150, "name": "Robe of Evocation", "quality": "rare", "rank": 1, "faction": "horde", "source": { "type": "drop", "detail": "Early-level drop (exact source varies)" }, "note": "Cloth — +Int and spell crit at level 13" },
              { "id": 5202, "name": "Corsair's Overshirt", "quality": "rare", "rank": 2, "faction": "alliance", "source": { "type": "drop", "instance": "The Deadmines", "boss": "Edwin VanCleef" }, "note": "Cloth — Stamina/Spirit alternative for Alliance" }
            ],
            "wrist": [
              { "id": 1974, "name": "Mindthrust Bracers", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Shadowfang Keep", "detail": "trash (Son of Arugal); requires level 17" } }
            ],
            "hands": [
              { "id": 5195, "name": "Gold-flecked Gloves", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Deadmines", "boss": "Sneed" }, "note": "Cloth; requires level 17" }
            ],
            "waist": [
              { "id": 10412, "name": "Belt of the Fang", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Wailing Caverns" }, "note": "Leather; Agility is wasted but no cloth/Intellect waist exists this early" }
            ],
            "back": [
              { "id": 6632, "name": "Feyscale Cloak", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Wailing Caverns", "boss": "Deviate Faerie Dragon", "detail": "Rare spawn" } }
            ],
            "legs": [
              { "id": 5199, "name": "Smelting Pants", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Deadmines", "detail": "trash" }, "note": "Leather; Stamina/Spirit — no cloth legs exist this low" }
            ],
            "feet": [
              { "id": 10402, "name": "Blackened Defias Boots", "quality": "uncommon", "rank": 1, "source": { "type": "drop", "instance": "The Deadmines", "detail": "Defias trash; part of the Blackened Defias set" }, "note": "Leather; Agility is wasted but no cloth boots exist this early" }
            ],
            "finger": [
              { "id": 1156, "name": "Lavishly Jeweled Ring", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Deadmines", "boss": "Gilnid" }, "note": "Unique-Equipped" },
              { "id": 12996, "name": "Band of Purification", "quality": "rare", "rank": 2, "source": { "type": "world-drop" }, "note": "BoE, may need AH" }
            ],
            "mainhand": [
              { "id": 6505, "name": "Crescent Staff", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Leaders of the Fang", "instance": "Wailing Caverns" }, "note": "2H +7 Int/Spirit/Stamina stat-stick; reachable from ~level 15" }
            ]
          }
        },
        {
          "id": "lvl29",
          "levelRange": [20, 29],
          "slots": {
            "head": [
              { "id": 9492, "name": "Electromagnetic Gigaflux Reactivator", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Gnomeregan", "boss": "Mekgineer Thermaplugg" }, "note": "Cloth caster head with a fun on-use nature nuke" },
              { "id": 7050, "name": "Silk Headband", "quality": "common", "rank": 2, "source": { "type": "crafted", "detail": "Tailoring — cheap AH filler" } }
            ],
            "neck": [
              { "id": 6695, "name": "Stygian Bone Amulet", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Razorfen Kraul", "boss": "Groyat the Blind Hunter", "detail": "rare spawn" } }
            ],
            "shoulder": [
              { "id": 3748, "name": "Feline Mantle", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Shadowfang Keep", "boss": "Wolf Master Nandos" }, "note": "Cloth — Intellect/Spirit" },
              { "id": 6685, "name": "Death Speaker Mantle", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Razorfen Kraul", "boss": "Death Speaker Jargba" } }
            ],
            "wrist": [
              { "id": 1974, "name": "Mindthrust Bracers", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Shadowfang Keep", "detail": "trash (Son of Arugal); requires level 17" }, "note": "Carries over — few dedicated Intellect wrist options exist before the 40s" }
            ],
            "back": [
              { "id": 6901, "name": "Glowing Thresher Cape", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Blackfathom Deeps", "boss": "Old Serra'kis" } }
            ],
            "chest": [
              { "id": 6682, "name": "Death Speaker Robes", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Razorfen Kraul", "boss": "Death Speaker Jargba" } }
            ],
            "waist": [
              { "id": 6392, "name": "Belt of Arugal", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Shadowfang Keep", "boss": "Archmage Arugal" } }
            ],
            "legs": [
              { "id": 6903, "name": "Gaze Dreamer Pants", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Blackfathom Deeps", "boss": "Twilight Lord Kelris" } },
              { "id": 2954, "name": "Night Watch Pantaloons", "quality": "uncommon", "rank": 2, "faction": "alliance", "source": { "type": "quest", "quest": "Morbent Fel", "zone": "Duskwood" } }
            ],
            "feet": [
              { "id": 6406, "name": "Nightsky Boots", "quality": "uncommon", "rank": 1, "source": { "type": "world-drop" } }
            ],
            "hands": [
              { "id": 4319, "name": "Azure Silk Gloves", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring (BoE)" } }
            ],
            "finger": [
              { "id": 2039, "name": "Plains Ring", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Razorfen Kraul", "detail": "trash" } },
              { "id": 12996, "name": "Band of Purification", "quality": "rare", "rank": 2, "source": { "type": "world-drop" }, "note": "BoE, may need AH; requires level 18" }
            ],
            "trinket": [
              { "id": 4381, "name": "Minor Recombobulator", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Engineering 140, BoP" }, "note": "Requires own Engineering 140 to use; only trinket obtainable this low" }
            ],
            "mainhand": [
              { "id": 2816, "name": "Death Speaker Scepter", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Razorfen Kraul", "boss": "Death Speaker Jargba" } },
              { "id": 3414, "name": "Crested Scepter", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Blackfathom Deeps", "detail": "trash" } }
            ]
          }
        },
        {
          "id": "lvl39",
          "levelRange": [30, 39],
          "slots": {
            "head": [
              { "id": 7720, "name": "Whitemane's Chapeau", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "High Inquisitor Whitemane", "detail": "Cathedral wing" }, "note": "Cloth" },
              { "id": 7691, "name": "Embalmed Shroud", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "Fallen Champion", "detail": "Graveyard wing" } }
            ],
            "neck": [
              { "id": 7722, "name": "Triune Amulet", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "High Inquisitor Whitemane", "detail": "Cathedral wing" } },
              { "id": 7731, "name": "Ghostshard Talisman", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "Azshir the Sleepless", "detail": "Graveyard wing" } }
            ],
            "shoulder": [
              { "id": 7684, "name": "Bloodmage Mantle", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "Bloodmage Thalnos", "detail": "Graveyard wing" } },
              { "id": 7712, "name": "Mantle of Doan", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "Arcanist Doan", "detail": "Library wing" } }
            ],
            "chest": [
              { "id": 7711, "name": "Robe of Doan", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "Arcanist Doan", "detail": "Library wing" } },
              { "id": 10762, "name": "Robes of the Lich", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Razorfen Downs", "boss": "Amnennar the Coldbringer" } }
            ],
            "back": [
              { "id": 7053, "name": "Azure Silk Cloak", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring (BoE)" } }
            ],
            "legs": [
              { "id": 7709, "name": "Blighted Leggings", "quality": "uncommon", "rank": 1, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "Azshir the Sleepless", "detail": "Graveyard wing" } },
              { "id": 9407, "name": "Stoneweaver Leggings", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Uldaman", "boss": "Ironaya" } }
            ],
            "feet": [
              { "id": 4325, "name": "Boots of the Enchanter", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring (BoE)" } }
            ],
            "waist": [
              { "id": 4329, "name": "Star Belt", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring (BoE)" }, "note": "mildly AH-reliant" }
            ],
            "hands": [
              { "id": 7049, "name": "Truefaith Gloves", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring (BoE)" } }
            ],
            "finger": [
              { "id": 2933, "name": "Seal of Wrynn", "quality": "rare", "rank": 1, "faction": "alliance", "source": { "type": "quest", "quest": "The Unsent Letter", "zone": "Stormwind City" } },
              { "id": 7686, "name": "Ironspine's Eye", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "Ironspine", "detail": "Graveyard wing, rare spawn" }, "note": "Random-enchant style stat, Unique-Equipped — look for an Intellect/Spirit roll" },
              { "id": 2262, "name": "Mark of Kern", "quality": "rare", "rank": 3, "source": { "type": "drop", "instance": "Scarlet Monastery" }, "note": "Stamina + Attack Power — filler for Horde, who lack the Seal of Wrynn quest" }
            ],
            "trinket": [
              { "id": 9149, "name": "Philosopher's Stone", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Alchemy (skill 200), BoP" }, "note": "Usable from level 35 — the only trinket available this early" }
            ],
            "mainhand": [
              { "id": 7713, "name": "Illusionary Rod", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "Arcanist Doan", "detail": "Library wing" } },
              { "id": 7714, "name": "Hypnotic Blade", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "Arcanist Doan", "detail": "Library wing" }, "note": "Fast dagger stat-stick" }
            ],
            "offhand": [
              { "id": 7685, "name": "Orb of the Forgotten Seer", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "Bloodmage Thalnos", "detail": "Graveyard wing" } }
            ]
          }
        },
        {
          "id": "lvl49",
          "levelRange": [40, 49],
          "slots": {
            "head": [
              { "id": 9470, "name": "Bad Mojo Mask", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Zul'Farrak", "boss": "Shadowpriest Sezz'ziz" } },
              { "id": 10041, "name": "Dreamweave Circlet", "quality": "rare", "rank": 2, "source": { "type": "crafted", "detail": "Tailoring 250 (BoE)" } }
            ],
            "neck": [
              { "id": 9641, "name": "Lifeblood Amulet", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Zul'Farrak", "boss": "Theka the Martyr" } },
              { "id": 17707, "name": "Gemshard Heart", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Maraudon", "boss": "Princess Theradras" } }
            ],
            "shoulder": [
              { "id": 17732, "name": "Rotgrip Mantle", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Maraudon", "boss": "Rotgrip" } }
            ],
            "back": [
              { "id": 11858, "name": "Battlehard Cape", "quality": "uncommon", "rank": 1, "source": { "type": "quest", "quest": "A Grim Discovery", "zone": "Feralas" } }
            ],
            "chest": [
              { "id": 17741, "name": "Nature's Embrace", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Maraudon", "boss": "Meshlok the Harvester", "detail": "rare spawn" }, "note": "mp5 pick; spell damage stat does not boost healing" },
              { "id": 10021, "name": "Dreamweave Vest", "quality": "rare", "rank": 2, "source": { "type": "crafted", "detail": "Tailoring 250 (BoE)" } }
            ],
            "wrist": [
              { "id": 9433, "name": "Forgotten Wraps", "quality": "rare", "rank": 1, "source": { "type": "drop" }, "note": "Cloth Intellect wrist" }
            ],
            "waist": [
              { "id": 17750, "name": "Chloromesh Girdle", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Maraudon", "boss": "Razorlash" } },
              { "id": 17755, "name": "Satyrmane Sash", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Maraudon", "boss": "Lord Vyletongue" } }
            ],
            "legs": [
              { "id": 9484, "name": "Spellshock Leggings", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Zul'Farrak", "boss": "Sandarr Dunereaver" }, "note": "BoE, can be moderately expensive on AH" }
            ],
            "feet": [
              { "id": 17748, "name": "Vinerot Sandals", "quality": "uncommon", "rank": 1, "source": { "type": "drop", "instance": "Maraudon", "boss": "Razorlash" } }
            ],
            "hands": [
              { "id": 18083, "name": "Jumanza Grips", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Zul'Farrak", "boss": "Witch Doctor Zum'rah" } }
            ],
            "finger": [
              { "id": 11118, "name": "Archaedic Stone", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Uldaman", "boss": "Archaedas" }, "note": "Random-enchant ring; look for an Intellect/Spirit roll (e.g. of the Whale, of Intellect)" },
              { "id": 17713, "name": "Blackstone Ring", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Maraudon", "boss": "Princess Theradras" }, "note": "Stamina/hit/AP — AP is wasted, but the only alternative ring this bracket" }
            ],
            "trinket": [
              { "id": 11122, "name": "Carrot on a Stick", "quality": "uncommon", "rank": 1, "source": { "type": "quest", "quest": "Gahz'rilla", "instance": "Zul'Farrak" }, "note": "No combat stats; mount-speed utility filler" },
              { "id": 9149, "name": "Philosopher's Stone", "quality": "uncommon", "rank": 2, "source": { "type": "crafted", "detail": "Alchemy (skill 200), BoP" }, "note": "Holds over from the lvl39 bracket" }
            ],
            "offhand": [
              { "id": 7515, "name": "Celestial Orb", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Power in Uldaman", "instance": "Uldaman", "boss": "Obsidian Sentinel", "detail": "Choice reward alongside Celestial Stave" } },
              { "id": 17737, "name": "Cloud Stone", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Maraudon", "boss": "Landslide" } }
            ],
            "mainhand": [
              { "id": 9517, "name": "Celestial Stave", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Power in Uldaman", "instance": "Uldaman", "boss": "Obsidian Sentinel" } },
              { "id": 9471, "name": "Fist of Stone", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Uldaman" }, "note": "Mace with a mana-restore proc" },
              { "id": 18082, "name": "Zum'rah's Vexing Cane", "quality": "rare", "rank": 3, "source": { "type": "drop", "instance": "Zul'Farrak", "boss": "Witch Doctor Zum'rah" } }
            ]
          }
        },
        {
          "id": "lvl59",
          "levelRange": [50, 57],
          "slots": {
            "head": [
              { "id": 21774, "name": "Emerald Crown of Destruction", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Jewelcrafting — BoE" } }
            ],
            "neck": [
              { "id": 18691, "name": "Dark Advisor's Pendant", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Scholomance", "boss": "Vectus" } }
            ],
            "shoulder": [
              { "id": 13185, "name": "Sunderseer Mantle", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Blackrock Spire", "boss": "Crystal Fang" } },
              { "id": 11624, "name": "Kentic Amice", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Blackrock Depths", "boss": "High Interrogator Gerstahn" } }
            ],
            "back": [
              { "id": 18510, "name": "Hide of the Wild", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking 300, recipe drops in Dire Maul East" }, "note": "Expensive BoE" }
            ],
            "chest": [
              { "id": 18486, "name": "Mooncloth Robe", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Mooncloth Tailoring — pattern from the Darkmoon Faire (BoE)" } }
            ],
            "wrist": [
              { "id": 12626, "name": "Funeral Cuffs", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Blackrock Spire", "boss": "Shadow Hunter Vosh'gajin" } }
            ],
            "waist": [
              { "id": 23126, "name": "Waistband of Balzaphon", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Stratholme", "boss": "Balzaphon" } }
            ],
            "legs": [
              { "id": 14545, "name": "Ghostloom Leggings", "quality": "uncommon", "rank": 1, "source": { "type": "drop", "instance": "Scholomance" } }
            ],
            "feet": [
              { "id": 13954, "name": "Verdant Footpads", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Stratholme", "boss": "Stonespine" } }
            ],
            "hands": [
              { "id": 18309, "name": "Gloves of Restoration", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Dire Maul", "boss": "Alzzin the Wildshaper", "detail": "East wing" } }
            ],
            "finger": [
              { "id": 12926, "name": "Flaming Band", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Blackrock Spire", "boss": "Pyroguard Emberseer" }, "note": "Random enchantment" },
              { "id": 18314, "name": "Ring of Demonic Guile", "quality": "rare", "rank": 2, "source": { "type": "drop" } }
            ],
            "trinket": [
              { "id": 12930, "name": "Briarwood Reed", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Blackrock Spire", "boss": "Jed Runewatcher" } },
              { "id": 18371, "name": "Mindtap Talisman", "quality": "uncommon", "rank": 2, "source": { "type": "drop", "instance": "Dire Maul", "boss": "Magister Kalendris", "detail": "West wing" }, "note": "mp5 regen" }
            ],
            "offhand": [
              { "id": 17737, "name": "Cloud Stone", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Maraudon", "boss": "Landslide" }, "note": "Carries over from the 40s" },
              { "id": 18315, "name": "Obsidian Bauble", "quality": "rare", "rank": 2, "source": { "type": "drop" }, "note": "Held-in-off-hand spell power item" }
            ],
            "mainhand": [
              { "id": 18534, "name": "Rod of the Ogre Magi", "quality": "rare", "rank": 1, "source": { "type": "drop", "detail": "Rare-spawn drop — Mizzle the Crafty" } }
            ]
          }
        },
        {
          "id": "lvl60",
          "levelRange": [58, 64],
          "slots": {
            "head": [
              { "id": 25710, "name": "Moonkin Headdress", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "The Blood is Life", "instance": "The Blood Furnace", "zone": "Hellfire Peninsula" }, "note": "Stamina/Intellect/Spirit/spell crit/spell damage — a genuine Balance-flavoured piece" },
              { "id": 8345, "name": "Wolfshead Helm", "quality": "rare", "rank": 2, "source": { "type": "crafted", "detail": "Leatherworking (Classic pattern, BoE)" } },
              { "id": 28183, "name": "Hydromancer's Headwrap", "quality": "rare", "rank": 3, "faction": "both", "source": { "type": "quest", "quest": "The Warlord's Hideout", "instance": "The Steamvault", "zone": "Zangarmarsh" }, "note": "Cloth — more raw spellpower, no shapeshift proc" }
            ],
            "neck": [
              { "id": 25714, "name": "Crimson Pendant of Clarity", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Heart of Rage", "instance": "The Blood Furnace", "zone": "Hellfire Peninsula" } }
            ],
            "shoulder": [
              { "id": 25718, "name": "Mantle of Magical Might", "quality": "rare", "rank": 1, "faction": "both", "source": { "type": "quest", "instance": "Hellfire Ramparts", "quest": "Weaken the Ramparts" } }
            ],
            "back": [
              { "id": 24459, "name": "Cloak of Healing Rays", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Underbog", "boss": "Ghaz'an" } }
            ],
            "chest": [
              { "id": 24455, "name": "Tunic of the Nightwatcher", "quality": "rare", "rank": 1, "source": { "type": "drop", "zone": "Hellfire Peninsula", "detail": "Hellfire Citadel dungeon drop" } }
            ],
            "wrist": [
              { "id": 28029, "name": "Goldenvine Wraps", "quality": "rare", "rank": 1, "faction": "both", "source": { "type": "quest", "instance": "The Slave Pens / The Underbog", "quest": "Lost in Action" } }
            ],
            "waist": [
              { "id": 21850, "name": "Netherweave Belt", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring (BoE)" }, "note": "Stamina-only filler until a better piece drops" }
            ],
            "legs": [
              { "id": 29343, "name": "Haramad's Leggings of the Third Coin", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Undercutting the Competition", "instance": "Mana-Tombs", "zone": "Terokkar Forest" } },
              { "id": 24391, "name": "Kilt of the Night Strider", "quality": "rare", "rank": 2, "source": { "type": "drop", "zone": "Hellfire Peninsula", "detail": "Hellfire Citadel dungeon drop" }, "note": "Socketed alternative with mana regen" }
            ],
            "feet": [
              { "id": 21853, "name": "Netherweave Boots", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring (BoE)" }, "note": "Stamina-only filler" }
            ],
            "hands": [
              { "id": 21851, "name": "Netherweave Gloves", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring (BoE)" }, "note": "Stamina-only filler" }
            ],
            "finger": [
              { "id": 25713, "name": "Holy Healing Band", "quality": "rare", "rank": 1, "faction": "both", "source": { "type": "quest", "instance": "The Blood Furnace", "quest": "Heart of Rage" } },
              { "id": 25541, "name": "Cenarion Ring of Casting", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "quest", "instance": "The Slave Pens / The Underbog", "quest": "Lost in Action" } }
            ],
            "trinket": [
              { "id": 28108, "name": "Power Infused Mushroom", "quality": "rare", "rank": 1, "faction": "both", "source": { "type": "quest", "instance": "The Underbog", "quest": "Stalk the Stalker" }, "note": "On-kill mana proc" },
              { "id": 28040, "name": "Vengeance of the Illidari", "quality": "rare", "rank": 2, "source": { "type": "quest", "quest": "Overlord (Alliance) / Cruel's Intentions (Horde)", "zone": "Hellfire Peninsula" }, "note": "One of the best-known early caster leveling trinkets" }
            ],
            "mainhand": [
              { "id": 18534, "name": "Rod of the Ogre Magi", "quality": "rare", "rank": 1, "source": { "type": "drop", "detail": "Rare-spawn drop — Mizzle the Crafty" } }
            ],
            "offhand": [
              { "id": 17737, "name": "Cloud Stone", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Maraudon", "boss": "Landslide" }, "note": "Carries over — pairs with a 1H alt; empty once using the mainhand Rod" }
            ],
            "ranged": [
              { "id": 23197, "name": "Idol of the Moon", "quality": "rare", "rank": 1, "source": { "type": "world-drop" }, "note": "BoE, price varies by server" }
            ]
          }
        },
        {
          "id": "lvl65",
          "levelRange": [65, 69],
          "slots": {
            "head": [
              { "id": 8345, "name": "Wolfshead Helm", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking (Classic pattern, BoE)" } },
              { "id": 28183, "name": "Hydromancer's Headwrap", "quality": "rare", "rank": 2, "source": { "type": "quest", "quest": "The Warlord's Hideout", "instance": "The Steamvault", "zone": "Zangarmarsh" }, "note": "Cloth — more raw spellpower, no shapeshift proc" }
            ],
            "neck": [
              { "id": 29333, "name": "Torc of the Sethekk Prophet", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Brother Against Brother", "instance": "Sethekk Halls", "zone": "Terokkar Forest" } },
              { "id": 28134, "name": "Brooch of Heightened Potential", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Shadow Labyrinth", "boss": "Blackheart the Inciter" }, "note": "Hit rating" }
            ],
            "shoulder": [
              { "id": 25718, "name": "Mantle of Magical Might", "quality": "rare", "rank": 1, "faction": "both", "source": { "type": "quest", "instance": "Hellfire Ramparts", "quest": "Weaken the Ramparts" }, "note": "Carries over from the 58-64 bracket" }
            ],
            "chest": [
              { "id": 29341, "name": "Auchenai Anchorite's Robe", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Everything Will Be Alright", "instance": "Auchenai Crypts", "zone": "Terokkar Forest" }, "note": "Cloth — no leather caster chest exists yet; spell hit rating" }
            ],
            "wrist": [
              { "id": 28174, "name": "Shattrath Wraps", "quality": "rare", "rank": 1, "faction": "both", "source": { "type": "quest", "instance": "Shadow Labyrinth", "quest": "The Soul Devices" } }
            ],
            "back": [
              { "id": 31465, "name": "Sha'tari Anchorite's Cloak", "quality": "rare", "rank": 1, "faction": "both", "source": { "type": "quest", "instance": "The Mechanar / The Botanica", "quest": "How to Break Into the Arcatraz" } }
            ],
            "waist": [
              { "id": 29328, "name": "Consortium Prince's Wrap", "quality": "rare", "rank": 1, "faction": "both", "source": { "type": "quest", "instance": "Mana-Tombs", "quest": "Someone Else's Hard Work Pays Off" } },
              { "id": 31461, "name": "A'dal's Gift", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "quest", "instance": "The Mechanar / The Botanica", "quest": "How to Break Into the Arcatraz" } }
            ],
            "legs": [
              { "id": 29314, "name": "Leggings of the Third Coin", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Levixus the Soul Caller", "instance": "Auchenai Crypts", "zone": "Terokkar Forest" } },
              { "id": 29343, "name": "Haramad's Leggings of the Third Coin", "quality": "rare", "rank": 2, "source": { "type": "quest", "quest": "Undercutting the Competition", "instance": "Mana-Tombs", "zone": "Terokkar Forest" } }
            ],
            "feet": [
              { "id": 27919, "name": "Light-Woven Slippers", "quality": "uncommon", "rank": 1, "source": { "type": "drop", "instance": "Sethekk Halls", "boss": "Darkweaver Syth" } }
            ],
            "hands": [
              { "id": 29317, "name": "Tempest's Touch", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Return to Andormu", "instance": "Old Hillsbrad Foothills", "zone": "Caverns of Time, Tanaris" } }
            ],
            "offhand": [
              { "id": 29330, "name": "The Saga of Terokk", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Terokk's Legacy", "instance": "Sethekk Halls", "zone": "Terokkar Forest" } }
            ],
            "finger": [
              { "id": 29320, "name": "Band of the Guardian", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Hero of the Brood", "instance": "The Black Morass", "zone": "Caverns of Time, Tanaris" } },
              { "id": 27784, "name": "Scintillating Coral Band", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "The Steamvault", "boss": "Hydromancer Thespia" } }
            ],
            "trinket": [
              { "id": 28034, "name": "Hourglass of the Unraveller", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Black Morass", "boss": "Temporus" }, "note": "Only the crit rating helps casters — the attack power proc is wasted, but it's still an upgrade" },
              { "id": 26055, "name": "Oculus of the Hidden Eye", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Auchenai Crypts", "boss": "Shirrak the Dead Watcher" } }
            ],
            "mainhand": [
              { "id": 18534, "name": "Rod of the Ogre Magi", "quality": "rare", "rank": 1, "source": { "type": "drop", "detail": "Rare-spawn drop — Mizzle the Crafty" }, "note": "Carries over cleanly if you didn't get it at 58-64" }
            ],
            "ranged": [
              { "id": 27518, "name": "Ivory Idol of the Moongoddess", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Shattered Halls", "boss": "Grand Warlock Nethekurse" } },
              { "id": 23197, "name": "Idol of the Moon", "quality": "rare", "rank": 2, "source": { "type": "world-drop" } }
            ]
          }
        }
      ]
    },
    {
      "id": "restoration",
      "name": "Restoration",
      "role": "healer",
      "brackets": [
        {
          "id": "lvl19",
          "levelRange": [10, 19],
          "slots": {
            "shoulder": [
              { "id": 10657, "name": "Talbar Mantle", "quality": "uncommon", "rank": 1, "faction": "horde", "source": { "type": "quest", "quest": "The Glowing Shard chain", "instance": "Wailing Caverns" } },
              { "id": 5254, "name": "Rugged Spaulders", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Shadowfang Keep", "boss": "Rethilgore" }, "note": "No cloth/leather Intellect shoulder exists for Alliance this early; Agility is wasted but it's the only option" }
            ],
            "chest": [
              { "id": 14150, "name": "Robe of Evocation", "quality": "rare", "rank": 1, "faction": "horde", "source": { "type": "drop", "detail": "Early-level drop (exact source varies)" }, "note": "Cloth — +Int and spell crit at level 13" },
              { "id": 5202, "name": "Corsair's Overshirt", "quality": "rare", "rank": 2, "faction": "alliance", "source": { "type": "drop", "instance": "The Deadmines", "boss": "Edwin VanCleef" }, "note": "Cloth — Stamina/Spirit alternative for Alliance" }
            ],
            "wrist": [
              { "id": 1974, "name": "Mindthrust Bracers", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Shadowfang Keep", "detail": "trash (Son of Arugal); requires level 17" } }
            ],
            "hands": [
              { "id": 5195, "name": "Gold-flecked Gloves", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Deadmines", "boss": "Sneed" }, "note": "Cloth; requires level 17" }
            ],
            "waist": [
              { "id": 10412, "name": "Belt of the Fang", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Wailing Caverns" }, "note": "Leather; Agility is wasted but no cloth/Intellect waist exists this early" }
            ],
            "back": [
              { "id": 6632, "name": "Feyscale Cloak", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Wailing Caverns", "boss": "Deviate Faerie Dragon", "detail": "Rare spawn" } }
            ],
            "legs": [
              { "id": 5199, "name": "Smelting Pants", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Deadmines", "detail": "trash" }, "note": "Leather; Stamina/Spirit — no cloth legs exist this low" }
            ],
            "feet": [
              { "id": 10402, "name": "Blackened Defias Boots", "quality": "uncommon", "rank": 1, "source": { "type": "drop", "instance": "The Deadmines", "detail": "Defias trash; part of the Blackened Defias set" }, "note": "Leather; Agility is wasted but no cloth boots exist this early" }
            ],
            "finger": [
              { "id": 1156, "name": "Lavishly Jeweled Ring", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Deadmines", "boss": "Gilnid" }, "note": "Unique-Equipped" },
              { "id": 12996, "name": "Band of Purification", "quality": "rare", "rank": 2, "source": { "type": "world-drop" }, "note": "BoE, may need AH" }
            ],
            "mainhand": [
              { "id": 6505, "name": "Crescent Staff", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Leaders of the Fang", "instance": "Wailing Caverns" }, "note": "2H +7 Int/Spirit/Stamina stat-stick; reachable from ~level 15" }
            ]
          }
        },
        {
          "id": "lvl29",
          "levelRange": [20, 29],
          "slots": {
            "head": [
              { "id": 9492, "name": "Electromagnetic Gigaflux Reactivator", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Gnomeregan", "boss": "Mekgineer Thermaplugg" }, "note": "Cloth caster head with a fun on-use nature nuke" },
              { "id": 7050, "name": "Silk Headband", "quality": "common", "rank": 2, "source": { "type": "crafted", "detail": "Tailoring — cheap AH filler" } }
            ],
            "neck": [
              { "id": 6695, "name": "Stygian Bone Amulet", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Razorfen Kraul", "boss": "Groyat the Blind Hunter", "detail": "rare spawn" } }
            ],
            "shoulder": [
              { "id": 3748, "name": "Feline Mantle", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Shadowfang Keep", "boss": "Wolf Master Nandos" }, "note": "Cloth — Intellect/Spirit" },
              { "id": 6685, "name": "Death Speaker Mantle", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Razorfen Kraul", "boss": "Death Speaker Jargba" } }
            ],
            "wrist": [
              { "id": 1974, "name": "Mindthrust Bracers", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Shadowfang Keep", "detail": "trash (Son of Arugal); requires level 17" }, "note": "Carries over — few dedicated Intellect wrist options exist before the 40s" }
            ],
            "back": [
              { "id": 6901, "name": "Glowing Thresher Cape", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Blackfathom Deeps", "boss": "Old Serra'kis" } }
            ],
            "chest": [
              { "id": 6682, "name": "Death Speaker Robes", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Razorfen Kraul", "boss": "Death Speaker Jargba" } }
            ],
            "waist": [
              { "id": 6392, "name": "Belt of Arugal", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Shadowfang Keep", "boss": "Archmage Arugal" } }
            ],
            "legs": [
              { "id": 6903, "name": "Gaze Dreamer Pants", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Blackfathom Deeps", "boss": "Twilight Lord Kelris" } },
              { "id": 2954, "name": "Night Watch Pantaloons", "quality": "uncommon", "rank": 2, "faction": "alliance", "source": { "type": "quest", "quest": "Morbent Fel", "zone": "Duskwood" } }
            ],
            "feet": [
              { "id": 6406, "name": "Nightsky Boots", "quality": "uncommon", "rank": 1, "source": { "type": "world-drop" } }
            ],
            "hands": [
              { "id": 4319, "name": "Azure Silk Gloves", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring (BoE)" } }
            ],
            "finger": [
              { "id": 2039, "name": "Plains Ring", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Razorfen Kraul", "detail": "trash" } },
              { "id": 12996, "name": "Band of Purification", "quality": "rare", "rank": 2, "source": { "type": "world-drop" }, "note": "BoE, may need AH; requires level 18" }
            ],
            "trinket": [
              { "id": 4381, "name": "Minor Recombobulator", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Engineering 140, BoP" }, "note": "Requires own Engineering 140 to use; only trinket obtainable this low" }
            ],
            "mainhand": [
              { "id": 2816, "name": "Death Speaker Scepter", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Razorfen Kraul", "boss": "Death Speaker Jargba" } },
              { "id": 3414, "name": "Crested Scepter", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Blackfathom Deeps", "detail": "trash" } }
            ]
          }
        },
        {
          "id": "lvl39",
          "levelRange": [30, 39],
          "slots": {
            "head": [
              { "id": 7720, "name": "Whitemane's Chapeau", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "High Inquisitor Whitemane", "detail": "Cathedral wing" }, "note": "Cloth" },
              { "id": 7691, "name": "Embalmed Shroud", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "Fallen Champion", "detail": "Graveyard wing" } }
            ],
            "neck": [
              { "id": 7722, "name": "Triune Amulet", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "High Inquisitor Whitemane", "detail": "Cathedral wing" } },
              { "id": 7731, "name": "Ghostshard Talisman", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "Azshir the Sleepless", "detail": "Graveyard wing" } }
            ],
            "shoulder": [
              { "id": 7684, "name": "Bloodmage Mantle", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "Bloodmage Thalnos", "detail": "Graveyard wing" } },
              { "id": 7712, "name": "Mantle of Doan", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "Arcanist Doan", "detail": "Library wing" } }
            ],
            "chest": [
              { "id": 7711, "name": "Robe of Doan", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "Arcanist Doan", "detail": "Library wing" } },
              { "id": 10762, "name": "Robes of the Lich", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Razorfen Downs", "boss": "Amnennar the Coldbringer" } }
            ],
            "back": [
              { "id": 7053, "name": "Azure Silk Cloak", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring (BoE)" } }
            ],
            "legs": [
              { "id": 7709, "name": "Blighted Leggings", "quality": "uncommon", "rank": 1, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "Azshir the Sleepless", "detail": "Graveyard wing" } },
              { "id": 9407, "name": "Stoneweaver Leggings", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Uldaman", "boss": "Ironaya" } }
            ],
            "feet": [
              { "id": 4325, "name": "Boots of the Enchanter", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring (BoE)" } }
            ],
            "waist": [
              { "id": 4329, "name": "Star Belt", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring (BoE)" }, "note": "mildly AH-reliant" }
            ],
            "hands": [
              { "id": 7049, "name": "Truefaith Gloves", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring (BoE)" } }
            ],
            "finger": [
              { "id": 2933, "name": "Seal of Wrynn", "quality": "rare", "rank": 1, "faction": "alliance", "source": { "type": "quest", "quest": "The Unsent Letter", "zone": "Stormwind City" } },
              { "id": 7686, "name": "Ironspine's Eye", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "Ironspine", "detail": "Graveyard wing, rare spawn" }, "note": "Random-enchant style stat, Unique-Equipped — look for an Intellect/Spirit roll" },
              { "id": 2262, "name": "Mark of Kern", "quality": "rare", "rank": 3, "source": { "type": "drop", "instance": "Scarlet Monastery" }, "note": "Stamina + Attack Power — filler for Horde, who lack the Seal of Wrynn quest" }
            ],
            "trinket": [
              { "id": 9149, "name": "Philosopher's Stone", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Alchemy (skill 200), BoP" }, "note": "Usable from level 35 — the only trinket available this early" }
            ],
            "mainhand": [
              { "id": 7713, "name": "Illusionary Rod", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "Arcanist Doan", "detail": "Library wing" } },
              { "id": 7721, "name": "Hand of Righteousness", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Scarlet Monastery", "detail": "Whitemane/Mograine encounter, Cathedral wing" } }
            ],
            "offhand": [
              { "id": 7685, "name": "Orb of the Forgotten Seer", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Scarlet Monastery", "boss": "Bloodmage Thalnos", "detail": "Graveyard wing" } }
            ]
          }
        },
        {
          "id": "lvl49",
          "levelRange": [40, 49],
          "slots": {
            "head": [
              { "id": 8345, "name": "Wolfshead Helm", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking (Classic pattern, BoE)" }, "note": "One of very few Druid-only items available this early — Spirit plus a shapeshift-energy proc." },
              { "id": 10041, "name": "Dreamweave Circlet", "quality": "rare", "rank": 2, "source": { "type": "crafted", "detail": "Tailoring 250 (BoE)" } }
            ],
            "neck": [
              { "id": 9641, "name": "Lifeblood Amulet", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Zul'Farrak", "boss": "Theka the Martyr" } },
              { "id": 17707, "name": "Gemshard Heart", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Maraudon", "boss": "Princess Theradras" } }
            ],
            "shoulder": [
              { "id": 17732, "name": "Rotgrip Mantle", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Maraudon", "boss": "Rotgrip" } }
            ],
            "back": [
              { "id": 11858, "name": "Battlehard Cape", "quality": "uncommon", "rank": 1, "source": { "type": "quest", "quest": "A Grim Discovery", "zone": "Feralas" } }
            ],
            "chest": [
              { "id": 17741, "name": "Nature's Embrace", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Maraudon", "boss": "Meshlok the Harvester", "detail": "rare spawn" }, "note": "mp5 pick" },
              { "id": 10021, "name": "Dreamweave Vest", "quality": "rare", "rank": 2, "source": { "type": "crafted", "detail": "Tailoring 250 (BoE)" } }
            ],
            "wrist": [
              { "id": 9433, "name": "Forgotten Wraps", "quality": "rare", "rank": 1, "source": { "type": "drop" }, "note": "Cloth Intellect wrist" }
            ],
            "waist": [
              { "id": 17750, "name": "Chloromesh Girdle", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Maraudon", "boss": "Razorlash" } },
              { "id": 17755, "name": "Satyrmane Sash", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Maraudon", "boss": "Lord Vyletongue" } }
            ],
            "legs": [
              { "id": 9484, "name": "Spellshock Leggings", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Zul'Farrak", "boss": "Sandarr Dunereaver" }, "note": "BoE, can be moderately expensive on AH" }
            ],
            "feet": [
              { "id": 17748, "name": "Vinerot Sandals", "quality": "uncommon", "rank": 1, "source": { "type": "drop", "instance": "Maraudon", "boss": "Razorlash" } }
            ],
            "hands": [
              { "id": 18083, "name": "Jumanza Grips", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Zul'Farrak", "boss": "Witch Doctor Zum'rah" } }
            ],
            "finger": [
              { "id": 11118, "name": "Archaedic Stone", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Uldaman", "boss": "Archaedas" }, "note": "Random-enchant ring; look for an Intellect/Spirit roll (e.g. of the Whale, of Intellect)" },
              { "id": 17713, "name": "Blackstone Ring", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Maraudon", "boss": "Princess Theradras" }, "note": "Stamina/hit/AP — AP is wasted, but the only alternative ring this bracket" }
            ],
            "trinket": [
              { "id": 11122, "name": "Carrot on a Stick", "quality": "uncommon", "rank": 1, "source": { "type": "quest", "quest": "Gahz'rilla", "instance": "Zul'Farrak" }, "note": "No healing stats; mount-speed utility filler" },
              { "id": 9149, "name": "Philosopher's Stone", "quality": "uncommon", "rank": 2, "source": { "type": "crafted", "detail": "Alchemy (skill 200), BoP" }, "note": "Holds over from the lvl39 bracket" }
            ],
            "offhand": [
              { "id": 7515, "name": "Celestial Orb", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Power in Uldaman", "instance": "Uldaman", "boss": "Obsidian Sentinel", "detail": "Choice reward alongside Celestial Stave" } },
              { "id": 17737, "name": "Cloud Stone", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Maraudon", "boss": "Landslide" } }
            ],
            "mainhand": [
              { "id": 9517, "name": "Celestial Stave", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Power in Uldaman", "instance": "Uldaman", "boss": "Obsidian Sentinel" } },
              { "id": 9471, "name": "Fist of Stone", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Uldaman" }, "note": "Mace with a mana-restore proc" }
            ]
          }
        },
        {
          "id": "lvl59",
          "levelRange": [50, 57],
          "slots": {
            "head": [
              { "id": 8345, "name": "Wolfshead Helm", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking (Classic pattern, BoE)" } },
              { "id": 21774, "name": "Emerald Crown of Destruction", "quality": "rare", "rank": 2, "source": { "type": "crafted", "detail": "Jewelcrafting — BoE" } }
            ],
            "neck": [
              { "id": 18691, "name": "Dark Advisor's Pendant", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Scholomance", "boss": "Vectus" } }
            ],
            "shoulder": [
              { "id": 13185, "name": "Sunderseer Mantle", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Blackrock Spire", "boss": "Crystal Fang" } },
              { "id": 11624, "name": "Kentic Amice", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Blackrock Depths", "boss": "High Interrogator Gerstahn" } }
            ],
            "back": [
              { "id": 18510, "name": "Hide of the Wild", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking 300, recipe drops in Dire Maul East" }, "note": "Expensive BoE — a genuine healing proc" }
            ],
            "chest": [
              { "id": 18486, "name": "Mooncloth Robe", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Mooncloth Tailoring — pattern from the Darkmoon Faire (BoE)" } }
            ],
            "wrist": [
              { "id": 12626, "name": "Funeral Cuffs", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Blackrock Spire", "boss": "Shadow Hunter Vosh'gajin" } }
            ],
            "waist": [
              { "id": 23126, "name": "Waistband of Balzaphon", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Stratholme", "boss": "Balzaphon" } }
            ],
            "legs": [
              { "id": 14545, "name": "Ghostloom Leggings", "quality": "uncommon", "rank": 1, "source": { "type": "drop", "instance": "Scholomance" } }
            ],
            "feet": [
              { "id": 13954, "name": "Verdant Footpads", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Stratholme", "boss": "Stonespine" }, "note": "Nature/healing proc" }
            ],
            "hands": [
              { "id": 18309, "name": "Gloves of Restoration", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Dire Maul", "boss": "Alzzin the Wildshaper", "detail": "East wing" } }
            ],
            "finger": [
              { "id": 12926, "name": "Flaming Band", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Blackrock Spire", "boss": "Pyroguard Emberseer" }, "note": "Random enchantment" },
              { "id": 18314, "name": "Ring of Demonic Guile", "quality": "rare", "rank": 2, "source": { "type": "drop" } }
            ],
            "trinket": [
              { "id": 12930, "name": "Briarwood Reed", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Blackrock Spire", "boss": "Jed Runewatcher" }, "note": "Damage AND healing done" },
              { "id": 18371, "name": "Mindtap Talisman", "quality": "uncommon", "rank": 2, "source": { "type": "drop", "instance": "Dire Maul", "boss": "Magister Kalendris", "detail": "West wing" }, "note": "mp5 regen" }
            ],
            "offhand": [
              { "id": 18315, "name": "Obsidian Bauble", "quality": "rare", "rank": 1, "source": { "type": "drop" }, "note": "Held-in-off-hand spell power item" }
            ],
            "mainhand": [
              { "id": 18534, "name": "Rod of the Ogre Magi", "quality": "rare", "rank": 1, "source": { "type": "drop", "detail": "Rare-spawn drop — Mizzle the Crafty" } }
            ]
          }
        },
        {
          "id": "lvl60",
          "levelRange": [58, 64],
          "slots": {
            "head": [
              { "id": 25710, "name": "Moonkin Headdress", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "The Blood is Life", "instance": "The Blood Furnace", "zone": "Hellfire Peninsula" }, "note": "Stamina/Intellect/Spirit/spell crit/spell damage — good on a healer too" },
              { "id": 8345, "name": "Wolfshead Helm", "quality": "rare", "rank": 2, "source": { "type": "crafted", "detail": "Leatherworking (Classic pattern, BoE)" } }
            ],
            "neck": [
              { "id": 25714, "name": "Crimson Pendant of Clarity", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Heart of Rage", "instance": "The Blood Furnace", "zone": "Hellfire Peninsula" } }
            ],
            "shoulder": [
              { "id": 25718, "name": "Mantle of Magical Might", "quality": "rare", "rank": 1, "faction": "both", "source": { "type": "quest", "instance": "Hellfire Ramparts", "quest": "Weaken the Ramparts" } }
            ],
            "back": [
              { "id": 24459, "name": "Cloak of Healing Rays", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Underbog", "boss": "Ghaz'an" } }
            ],
            "chest": [
              { "id": 24455, "name": "Tunic of the Nightwatcher", "quality": "rare", "rank": 1, "source": { "type": "drop", "zone": "Hellfire Peninsula", "detail": "Hellfire Citadel dungeon drop" } }
            ],
            "wrist": [
              { "id": 28029, "name": "Goldenvine Wraps", "quality": "rare", "rank": 1, "faction": "both", "source": { "type": "quest", "instance": "The Slave Pens / The Underbog", "quest": "Lost in Action" } }
            ],
            "waist": [
              { "id": 21850, "name": "Netherweave Belt", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring (BoE)" }, "note": "Stamina-only filler until a better piece drops" }
            ],
            "legs": [
              { "id": 25711, "name": "Deadly Borer Leggings", "quality": "rare", "rank": 1, "faction": "both", "source": { "type": "quest", "instance": "The Blood Furnace", "quest": "The Blood is Life" } },
              { "id": 24391, "name": "Kilt of the Night Strider", "quality": "rare", "rank": 2, "source": { "type": "drop", "zone": "Hellfire Peninsula", "detail": "Hellfire Citadel dungeon drop" }, "note": "Socketed alternative with mana regen" }
            ],
            "feet": [
              { "id": 21853, "name": "Netherweave Boots", "quality": "uncommon", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring (BoE)" }, "note": "Stamina-only filler" }
            ],
            "hands": [
              { "id": 29327, "name": "Cryo-mitts", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Someone Else's Hard Work Pays Off", "instance": "Mana-Tombs", "zone": "Terokkar Forest" } }
            ],
            "finger": [
              { "id": 25713, "name": "Holy Healing Band", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Heart of Rage", "instance": "The Blood Furnace", "zone": "Hellfire Peninsula" } },
              { "id": 25541, "name": "Cenarion Ring of Casting", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "quest", "instance": "The Slave Pens / The Underbog", "quest": "Lost in Action" } }
            ],
            "trinket": [
              { "id": 28108, "name": "Power Infused Mushroom", "quality": "rare", "rank": 1, "faction": "both", "source": { "type": "quest", "instance": "The Underbog", "quest": "Stalk the Stalker" }, "note": "On-kill mana proc" },
              { "id": 28040, "name": "Vengeance of the Illidari", "quality": "rare", "rank": 2, "source": { "type": "quest", "quest": "Overlord (Alliance) / Cruel's Intentions (Horde)", "zone": "Hellfire Peninsula" }, "note": "Crit + on-use spell damage/healing burst" }
            ],
            "mainhand": [
              { "id": 18534, "name": "Rod of the Ogre Magi", "quality": "rare", "rank": 1, "source": { "type": "drop", "detail": "Rare-spawn drop — Mizzle the Crafty" } }
            ],
            "offhand": [
              { "id": 17737, "name": "Cloud Stone", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Maraudon", "boss": "Landslide" }, "note": "Carries over — pairs with a 1H alt; empty once using the mainhand Rod" }
            ],
            "ranged": [
              { "id": 23197, "name": "Idol of the Moon", "quality": "rare", "rank": 1, "source": { "type": "world-drop" }, "note": "Moonfire-focused, but the only idol available this early; holds the relic slot until Idol of the Emerald Queen at 65" }
            ]
          }
        },
        {
          "id": "lvl65",
          "levelRange": [65, 69],
          "slots": {
            "head": [
              { "id": 8345, "name": "Wolfshead Helm", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking (Classic pattern, BoE)" } },
              { "id": 28183, "name": "Hydromancer's Headwrap", "quality": "rare", "rank": 2, "source": { "type": "quest", "quest": "The Warlord's Hideout", "instance": "The Steamvault", "zone": "Zangarmarsh" }, "note": "Cloth — more raw spellpower, no shapeshift proc" }
            ],
            "neck": [
              { "id": 29334, "name": "Sethekk Oracle's Focus", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Brother Against Brother", "instance": "Sethekk Halls", "zone": "Terokkar Forest" } }
            ],
            "shoulder": [
              { "id": 25718, "name": "Mantle of Magical Might", "quality": "rare", "rank": 1, "faction": "both", "source": { "type": "quest", "instance": "Hellfire Ramparts", "quest": "Weaken the Ramparts" }, "note": "Carries over from the 58-64 bracket" }
            ],
            "chest": [
              { "id": 29341, "name": "Auchenai Anchorite's Robe", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Everything Will Be Alright", "instance": "Auchenai Crypts", "zone": "Terokkar Forest" }, "note": "Cloth — no leather caster chest exists yet" }
            ],
            "wrist": [
              { "id": 28174, "name": "Shattrath Wraps", "quality": "rare", "rank": 1, "faction": "both", "source": { "type": "quest", "instance": "Shadow Labyrinth", "quest": "The Soul Devices" } }
            ],
            "back": [
              { "id": 27789, "name": "Cloak of Whispering Shells", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Steamvault", "boss": "Hydromancer Thespia" } },
              { "id": 25945, "name": "Cloak of Revival", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Mana-Tombs", "boss": "Tavarok" } }
            ],
            "waist": [
              { "id": 29328, "name": "Consortium Prince's Wrap", "quality": "rare", "rank": 1, "faction": "both", "source": { "type": "quest", "instance": "Mana-Tombs", "quest": "Someone Else's Hard Work Pays Off" } }
            ],
            "legs": [
              { "id": 29314, "name": "Leggings of the Third Coin", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Levixus the Soul Caller", "instance": "Auchenai Crypts", "zone": "Terokkar Forest" } },
              { "id": 29345, "name": "Haramad's Leg Wraps", "quality": "rare", "rank": 2, "source": { "type": "quest", "quest": "Undercutting the Competition", "instance": "Mana-Tombs", "zone": "Terokkar Forest" }, "note": "Cloth" }
            ],
            "feet": [
              { "id": 27919, "name": "Light-Woven Slippers", "quality": "uncommon", "rank": 1, "source": { "type": "drop", "instance": "Sethekk Halls", "boss": "Darkweaver Syth" } }
            ],
            "hands": [
              { "id": 29327, "name": "Cryo-mitts", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Someone Else's Hard Work Pays Off", "instance": "Mana-Tombs", "zone": "Terokkar Forest" } },
              { "id": 29315, "name": "Gloves of Penitence", "quality": "rare", "rank": 2, "source": { "type": "quest", "quest": "Levixus the Soul Caller", "instance": "Auchenai Crypts", "zone": "Terokkar Forest" }, "note": "Cloth, but very strong healing stats" }
            ],
            "finger": [
              { "id": 29322, "name": "Keeper's Ring of Piety", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Hero of the Brood", "instance": "The Black Morass", "zone": "Caverns of Time, Tanaris" } },
              { "id": 25713, "name": "Holy Healing Band", "quality": "rare", "rank": 2, "source": { "type": "quest", "quest": "Heart of Rage", "instance": "The Blood Furnace", "zone": "Hellfire Peninsula" } }
            ],
            "offhand": [
              { "id": 29330, "name": "The Saga of Terokk", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Terokk's Legacy", "instance": "Sethekk Halls", "zone": "Terokkar Forest" } }
            ],
            "trinket": [
              { "id": 28034, "name": "Hourglass of the Unraveller", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Black Morass", "boss": "Temporus" } },
              { "id": 27416, "name": "Fetish of the Fallen", "quality": "uncommon", "rank": 2, "source": { "type": "drop", "instance": "Auchenai Crypts", "boss": "Exarch Maladaar" }, "note": "On-kill heal proc; AP is wasted but the survivability utility is welcome" }
            ],
            "mainhand": [
              { "id": 25836, "name": "Preserver's Cudgel", "quality": "rare", "rank": 1, "source": { "type": "reputation", "detail": "Cenarion Expedition Honored — Zangarmarsh quartermaster" }, "note": "Honored is reachable while leveling" }
            ],
            "ranged": [
              { "id": 27886, "name": "Idol of the Emerald Queen", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Shadow Labyrinth", "boss": "Ambassador Hellmaw" }, "note": "BiS Lifebloom idol — stays BiS all the way through Sunwell" }
            ]
          }
        }
      ]
    }
  ]
}
);
