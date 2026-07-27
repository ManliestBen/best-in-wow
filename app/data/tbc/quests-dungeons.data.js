/* BiS Companion data — TBC dungeon quests (all 16 dungeons, both factions) */
WOWDATA.register(
{
  "kind": "quests",
  "expansion": "tbc",
  "instances": [
    {
      "id": "hellfire-ramparts",
      "name": "Hellfire Ramparts",
      "type": "dungeon",
      "zone": "Hellfire Citadel, Hellfire Peninsula",
      "levelRange": [
        60,
        62
      ],
      "phase": "preraid",
      "attunement": "None on Normal. Heroic: Flamewrought Key — Honor Hold (Alliance) / Thrallmar (Horde) reputation (Revered at TBC Classic launch, later reduced to Honored).",
      "notes": "First wing of Hellfire Citadel. Both faction versions of Weaken the Ramparts share the same rewards.",
      "quests": [
        {
          "id": 9575,
          "name": "Weaken the Ramparts",
          "faction": "alliance",
          "questGiver": "Lieutenant Chadwick — Honor Hold, Hellfire Peninsula",
          "prereq": "Requires The Path of Anguish (Honor Hold chain)",
          "rewards": [
            {
              "id": 25716,
              "name": "Handguards of Precision"
            },
            {
              "id": 25715,
              "name": "Jade Warrior Pauldrons"
            },
            {
              "id": 25718,
              "name": "Mantle of Magical Might"
            },
            {
              "id": 25717,
              "name": "Sure-Step Boots"
            }
          ],
          "note": "Slay Watchkeeper Gargolmar, Omor the Unscarred and Nazan; turn in to Gunny at Honor Hold. Leads to Heart of Rage (The Blood Furnace)."
        },
        {
          "id": 9572,
          "name": "Weaken the Ramparts",
          "faction": "horde",
          "questGiver": "Stone Guard Stok'ton — Thrallmar, Hellfire Peninsula",
          "prereq": "Requires Forward Base: Reaver's Fall (Thrallmar chain)",
          "rewards": [
            {
              "id": 25716,
              "name": "Handguards of Precision"
            },
            {
              "id": 25715,
              "name": "Jade Warrior Pauldrons"
            },
            {
              "id": 25718,
              "name": "Mantle of Magical Might"
            },
            {
              "id": 25717,
              "name": "Sure-Step Boots"
            }
          ],
          "note": "Slay Watchkeeper Gargolmar, Omor the Unscarred and Nazan; turn in to Caza'rez at Thrallmar. Leads to Heart of Rage (The Blood Furnace)."
        },
        {
          "id": 11354,
          "name": "Wanted: Nazan's Riding Crop",
          "faction": "both",
          "questGiver": "Wind Trader Zhareem — Lower City, Shattrath City",
          "rewards": [
            {
              "id": 29434,
              "name": "Badge of Justice"
            }
          ],
          "note": "Daily heroic dungeon quest (rotates); Heroic only."
        }
      ]
    },
    {
      "id": "blood-furnace",
      "name": "The Blood Furnace",
      "type": "dungeon",
      "zone": "Hellfire Citadel, Hellfire Peninsula",
      "levelRange": [
        61,
        63
      ],
      "phase": "preraid",
      "attunement": "None on Normal. Heroic: Flamewrought Key — Honor Hold (Alliance) / Thrallmar (Horde) reputation (Revered at TBC Classic launch, later reduced to Honored).",
      "quests": [
        {
          "id": 9607,
          "name": "Heart of Rage",
          "faction": "alliance",
          "questGiver": "Gunny — Honor Hold, Hellfire Peninsula",
          "prereq": "Follows Weaken the Ramparts (Hellfire Ramparts)",
          "rewards": [
            {
              "id": 25714,
              "name": "Crimson Pendant of Clarity"
            },
            {
              "id": 25713,
              "name": "Holy Healing Band"
            },
            {
              "id": 25712,
              "name": "Perfectly Balanced Cape"
            }
          ],
          "note": "Fully investigate the Blood Furnace (complete the dungeon through Keli'dan the Breaker); report to Force Commander Danath Trollbane."
        },
        {
          "id": 9608,
          "name": "Heart of Rage",
          "faction": "horde",
          "questGiver": "Caza'rez — Thrallmar, Hellfire Peninsula",
          "prereq": "Follows Weaken the Ramparts (Hellfire Ramparts)",
          "rewards": [
            {
              "id": 25714,
              "name": "Crimson Pendant of Clarity"
            },
            {
              "id": 25713,
              "name": "Holy Healing Band"
            },
            {
              "id": 25712,
              "name": "Perfectly Balanced Cape"
            }
          ],
          "note": "Fully investigate the Blood Furnace; report to Nazgrel at Thrallmar."
        },
        {
          "id": 9589,
          "name": "The Blood is Life",
          "faction": "alliance",
          "questGiver": "Gunny — Honor Hold, Hellfire Peninsula",
          "prereq": "Requires Dark Tidings",
          "rewards": [
            {
              "id": 25701,
              "name": "Breastplate of Retribution"
            },
            {
              "id": 25711,
              "name": "Deadly Borer Leggings"
            },
            {
              "id": 25710,
              "name": "Moonkin Headdress"
            },
            {
              "id": 25702,
              "name": "Scaled Legs of Ruination"
            }
          ],
          "note": "Collect 10 Fel Orc Blood Vials from Blood Furnace orcs."
        },
        {
          "id": 9590,
          "name": "The Blood is Life",
          "faction": "horde",
          "questGiver": "Caza'rez — Thrallmar, Hellfire Peninsula",
          "prereq": "Requires Dark Tidings",
          "rewards": [
            {
              "id": 25701,
              "name": "Breastplate of Retribution"
            },
            {
              "id": 25711,
              "name": "Deadly Borer Leggings"
            },
            {
              "id": 25710,
              "name": "Moonkin Headdress"
            },
            {
              "id": 25702,
              "name": "Scaled Legs of Ruination"
            }
          ],
          "note": "Collect 10 Fel Orc Blood Vials from Blood Furnace orcs."
        },
        {
          "id": 11362,
          "name": "Wanted: Keli'dan's Feathered Stave",
          "faction": "both",
          "questGiver": "Wind Trader Zhareem — Lower City, Shattrath City",
          "rewards": [
            {
              "id": 29434,
              "name": "Badge of Justice"
            }
          ],
          "note": "Daily heroic dungeon quest (rotates); Heroic only."
        }
      ]
    },
    {
      "id": "shattered-halls",
      "name": "The Shattered Halls",
      "type": "dungeon",
      "zone": "Hellfire Citadel, Hellfire Peninsula",
      "levelRange": [
        69,
        70
      ],
      "phase": "preraid",
      "attunement": "Entry requires the Shattered Halls Key: the Primed Key Mold drops from Smith Gorlunk in Shadowmoon Valley and starts Entry Into the Citadel, then Grand Master Dumphry (Alliance) / Grand Master Rohok (Horde) and Dumphry's/Rohok's Request. Rogues with 350 Lockpicking can open the door instead. Heroic: Flamewrought Key — Honor Hold/Thrallmar reputation (Revered at TBC Classic launch, later Honored).",
      "notes": "Trial of the Naaru: Mercy (Tempest Keep attunement) and Kalynna's Request (Nightbane urn chain) both require Heroic runs here.",
      "quests": [
        {
          "id": 9492,
          "name": "Turning the Tide",
          "faction": "alliance",
          "questGiver": "Force Commander Danath Trollbane — Honor Hold, Hellfire Peninsula",
          "rewards": [
            {
              "id": 25806,
              "name": "Nethekurse's Rod of Torment"
            },
            {
              "id": 25805,
              "name": "Mantle of Vivification"
            },
            {
              "id": 25804,
              "name": "Naliko's Revenge"
            },
            {
              "id": 25803,
              "name": "Medallion of the Valiant Guardian"
            }
          ],
          "note": "Bring back Warchief Kargath's Fist (drops from Warchief Kargath Bladefist)."
        },
        {
          "id": 9495,
          "name": "The Will of the Warchief",
          "faction": "horde",
          "questGiver": "Nazgrel — Thrallmar, Hellfire Peninsula",
          "rewards": [
            {
              "id": 25808,
              "name": "Rod of Dire Shadows"
            },
            {
              "id": 25810,
              "name": "Vicar's Cloak"
            },
            {
              "id": 25811,
              "name": "Conquerer's Band"
            },
            {
              "id": 25809,
              "name": "Maimfist's Choker"
            }
          ],
          "note": "Bring back Warchief Kargath's Fist (drops from Warchief Kargath Bladefist)."
        },
        {
          "id": 9493,
          "name": "Pride of the Fel Horde",
          "faction": "alliance",
          "questGiver": "Field Commander Romus — Honor Hold, Hellfire Peninsula",
          "note": "Kill 8 Shattered Hand Legionnaires, 4 Centurions and 4 Champions. Shareable."
        },
        {
          "id": 9496,
          "name": "Pride of the Fel Horde",
          "faction": "horde",
          "questGiver": "Shadow Hunter Ty'jin — Thrallmar, Hellfire Peninsula",
          "note": "Kill 8 Shattered Hand Legionnaires, 4 Centurions and 4 Champions. Shareable."
        },
        {
          "id": 9494,
          "name": "Fel Embers",
          "faction": "alliance",
          "questGiver": "Magus Zabraxis — Honor Hold, Hellfire Peninsula",
          "rewards": [
            {
              "id": 25792,
              "name": "Curate's Boots"
            },
            {
              "id": 25789,
              "name": "Rune-Engraved Belt"
            },
            {
              "id": 25791,
              "name": "Gloves of Preservation"
            },
            {
              "id": 25790,
              "name": "Expedition Scout's Epaulets"
            },
            {
              "id": 25788,
              "name": "Dauntless Handguards"
            }
          ],
          "note": "Retrieve a Fel Ember from the brazier in Grand Warlock Nethekurse's chamber."
        },
        {
          "id": 9524,
          "name": "Imprisoned in the Citadel",
          "faction": "alliance",
          "questGiver": "Randy Whizzlesprocket — inside The Shattered Halls (Heroic)",
          "note": "Heroic only: rescue Captain Alina from the timed execution event after Warchief Kargath Bladefist. Shareable."
        },
        {
          "id": 9525,
          "name": "Imprisoned in the Citadel",
          "faction": "horde",
          "questGiver": "Drisella — inside The Shattered Halls (Heroic)",
          "note": "Heroic only: rescue Captain Boneshatter from the timed execution event after Warchief Kargath Bladefist. Shareable."
        },
        {
          "id": 10884,
          "name": "Trial of the Naaru: Mercy",
          "faction": "both",
          "questGiver": "A'dal — Terrace of Light, Shattrath City",
          "prereq": "Requires The Tempest Key (Khadgar/A'dal; gated behind The Cipher of Damnation in Shadowmoon Valley)",
          "note": "Heroic only: loot the Unused Axe of the Executioner during the timed execution event. Tempest Keep (The Eye) raid attunement step."
        },
        {
          "id": 9637,
          "name": "Kalynna's Request",
          "faction": "both",
          "questGiver": "Kalynna Lathred — Netherstorm",
          "prereq": "Late step of the Nightbane urn chain (Medivh's Journal, Karazhan)",
          "note": "Heroic only: Tome of Dusk drops from Grand Warlock Nethekurse here; also needs the Book of Forgotten Names from Heroic Sethekk Halls. Leads to the Nightbane summon."
        },
        {
          "id": 11363,
          "name": "Wanted: Bladefist's Seal",
          "faction": "both",
          "questGiver": "Wind Trader Zhareem — Lower City, Shattrath City",
          "rewards": [
            {
              "id": 29434,
              "name": "Badge of Justice"
            }
          ],
          "note": "Daily heroic dungeon quest (rotates); Heroic only."
        },
        {
          "id": 11364,
          "name": "Wanted: Shattered Hand Centurions",
          "faction": "both",
          "questGiver": "Nether-Stalker Mah'duun — Lower City, Shattrath City",
          "rewards": [
            {
              "id": 29460,
              "name": "Ethereum Prison Key"
            }
          ],
          "note": "Daily normal dungeon quest (rotates). Shareable."
        }
      ]
    },
    {
      "id": "slave-pens",
      "name": "The Slave Pens",
      "type": "dungeon",
      "zone": "Coilfang Reservoir, Zangarmarsh",
      "levelRange": [
        62,
        64
      ],
      "phase": "preraid",
      "attunement": "None on Normal. Heroic: Reservoir Key — Cenarion Expedition reputation (Revered at TBC Classic launch, later reduced to Honored).",
      "notes": "Skar'this the Heretic in the Heroic version starts The Cudgel of Kar'desh, the Serpentshrine Cavern attunement quest.",
      "quests": [
        {
          "id": 9738,
          "name": "Lost in Action",
          "faction": "both",
          "questGiver": "Watcher Jhang — Coilfang Reservoir entrance, Zangarmarsh",
          "prereq": "Requires Failed Incursion (Ysiel Windsinger, Cenarion Refuge)",
          "rewards": [
            {
              "id": 25541,
              "name": "Cenarion Ring of Casting"
            },
            {
              "id": 28029,
              "name": "Goldenvine Wraps"
            },
            {
              "id": 25540,
              "name": "Dark Cloak of the Marsh"
            }
          ],
          "note": "Find Naturalist Bite in the Slave Pens and Weeder Greenthumb, Windcaller Claw and Earthbinder Rayge in the Underbog. Shareable."
        },
        {
          "id": 10900,
          "name": "The Mark of Vashj",
          "faction": "both",
          "questGiver": "Skar'this the Heretic — inside The Slave Pens (Heroic)",
          "note": "Heroic only: bring Skar'this a Mark of Vashj looted from Coilfang naga. Opens his follow-up dialogue and The Cudgel of Kar'desh."
        },
        {
          "id": 10901,
          "name": "The Cudgel of Kar'desh",
          "faction": "both",
          "questGiver": "Skar'this the Heretic — inside The Slave Pens (Heroic)",
          "note": "Heroic only: Serpentshrine Cavern attunement — bring the Earthen Signet (Gruul the Dragonkiller) and Blazing Signet (Nightbane, Karazhan)."
        },
        {
          "id": 11368,
          "name": "Wanted: The Heart of Quagmirran",
          "faction": "both",
          "questGiver": "Wind Trader Zhareem — Lower City, Shattrath City",
          "rewards": [
            {
              "id": 29434,
              "name": "Badge of Justice"
            }
          ],
          "note": "Daily heroic dungeon quest (rotates); Heroic only."
        }
      ]
    },
    {
      "id": "underbog",
      "name": "The Underbog",
      "type": "dungeon",
      "zone": "Coilfang Reservoir, Zangarmarsh",
      "levelRange": [
        63,
        65
      ],
      "phase": "preraid",
      "attunement": "None on Normal. Heroic: Reservoir Key — Cenarion Expedition reputation (Revered at TBC Classic launch, later reduced to Honored).",
      "quests": [
        {
          "id": 9738,
          "name": "Lost in Action",
          "faction": "both",
          "questGiver": "Watcher Jhang — Coilfang Reservoir entrance, Zangarmarsh",
          "prereq": "Requires Failed Incursion (Ysiel Windsinger, Cenarion Refuge)",
          "rewards": [
            {
              "id": 25541,
              "name": "Cenarion Ring of Casting"
            },
            {
              "id": 28029,
              "name": "Goldenvine Wraps"
            },
            {
              "id": 25540,
              "name": "Dark Cloak of the Marsh"
            }
          ],
          "note": "Spans two dungeons: Naturalist Bite is in the Slave Pens; Weeder Greenthumb, Windcaller Claw and Earthbinder Rayge are in the Underbog. Shareable."
        },
        {
          "id": 9715,
          "name": "Bring Me A Shrubbery!",
          "faction": "both",
          "questGiver": "Gzhun'tt — Sporeggar, Zangarmarsh",
          "note": "Collect 5 Sanguine Hibiscus inside the Underbog. Requires unfriendly-or-better Sporeggar reputation to pick up."
        },
        {
          "id": 9714,
          "name": "Bring Me Another Shrubbery!",
          "faction": "both",
          "questGiver": "Gzhun'tt — Sporeggar, Zangarmarsh",
          "prereq": "Follows Bring Me A Shrubbery!",
          "note": "Repeatable Sporeggar reputation turn-in: 5 Sanguine Hibiscus per turn-in."
        },
        {
          "id": 9717,
          "name": "Oh, It's On!",
          "faction": "both",
          "questGiver": "T'shu — Sporeggar, Zangarmarsh",
          "rewards": [
            {
              "id": 28111,
              "name": "Everlasting Underspore Frond"
            }
          ],
          "note": "Gather an Underspore Frond from the Underbog; reward summons unlimited healer food."
        },
        {
          "id": 9719,
          "name": "Stalk the Stalker",
          "faction": "both",
          "questGiver": "Khn'nix — Sporeggar, Zangarmarsh",
          "rewards": [
            {
              "id": 28109,
              "name": "Essence Infused Mushroom"
            },
            {
              "id": 28108,
              "name": "Power Infused Mushroom"
            }
          ],
          "note": "Kill the Black Stalker and bring back its brain."
        },
        {
          "id": 11369,
          "name": "Wanted: A Black Stalker Egg",
          "faction": "both",
          "questGiver": "Wind Trader Zhareem — Lower City, Shattrath City",
          "rewards": [
            {
              "id": 29434,
              "name": "Badge of Justice"
            }
          ],
          "note": "Daily heroic dungeon quest (rotates); Heroic only."
        }
      ]
    },
    {
      "id": "steamvault",
      "name": "The Steamvault",
      "type": "dungeon",
      "zone": "Coilfang Reservoir, Zangarmarsh",
      "levelRange": [
        69,
        70
      ],
      "phase": "preraid",
      "attunement": "None on Normal. Heroic: Reservoir Key — Cenarion Expedition reputation (Revered at TBC Classic launch, later reduced to Honored).",
      "notes": "Holds the Second Key Fragment of the Karazhan key chain and Kalithresh's Trident for Trial of the Naaru: Strength (Heroic).",
      "quests": [
        {
          "id": 9763,
          "name": "The Warlord's Hideout",
          "faction": "both",
          "questGiver": "Watcher Jhang — Coilfang Reservoir entrance, Zangarmarsh",
          "rewards": [
            {
              "id": 28183,
              "name": "Hydromancer's Headwrap"
            },
            {
              "id": 28182,
              "name": "Helm of the Claw"
            },
            {
              "id": 28181,
              "name": "Earthwarden's Coif"
            },
            {
              "id": 28180,
              "name": "Myrmidon's Headdress"
            }
          ],
          "note": "Slay Warlord Kalithresh. Shareable."
        },
        {
          "id": 9764,
          "name": "Orders from Lady Vashj",
          "faction": "both",
          "questGiver": "Orders from Lady Vashj — item drop from Coilfang naga in the Steamvault; turn in to Ysiel Windsinger, Cenarion Refuge",
          "note": "Drop-started quest; opens Preparing for War."
        },
        {
          "id": 9765,
          "name": "Preparing for War",
          "faction": "both",
          "questGiver": "Ysiel Windsinger — Cenarion Refuge, Zangarmarsh",
          "prereq": "Follows Orders from Lady Vashj",
          "note": "Obtain 10 Coilfang Armaments from Coilfang naga."
        },
        {
          "id": 9766,
          "name": "Coilfang Armaments",
          "faction": "both",
          "questGiver": "Ysiel Windsinger — Cenarion Refuge, Zangarmarsh",
          "prereq": "Follows Preparing for War",
          "note": "Repeatable Cenarion Expedition reputation turn-in: 10 Coilfang Armaments per turn-in (up to Revered — used for the Reservoir Key)."
        },
        {
          "id": 9832,
          "name": "The Second and Third Fragments",
          "faction": "both",
          "questGiver": "Khadgar — Terrace of Light, Shattrath City",
          "prereq": "Karazhan key chain: follows Entry Into Karazhan (Shadow Labyrinth)",
          "note": "Loot the Second Key Fragment from an Arcane Container in the flooded side room here, and the Third Key Fragment from the Arcatraz. Continues to The Master's Touch (Black Morass)."
        },
        {
          "id": 10885,
          "name": "Trial of the Naaru: Strength",
          "faction": "both",
          "questGiver": "A'dal — Terrace of Light, Shattrath City",
          "prereq": "Requires The Tempest Key (Khadgar/A'dal; gated behind The Cipher of Damnation in Shadowmoon Valley)",
          "note": "Heroic only: Kalithresh's Trident (Warlord Kalithresh, Heroic Steamvault) plus Murmur's Essence (Heroic Shadow Labyrinth). Tempest Keep (The Eye) raid attunement step."
        },
        {
          "id": 11370,
          "name": "Wanted: The Warlord's Treatise",
          "faction": "both",
          "questGiver": "Wind Trader Zhareem — Lower City, Shattrath City",
          "rewards": [
            {
              "id": 29434,
              "name": "Badge of Justice"
            }
          ],
          "note": "Daily heroic dungeon quest (rotates); Heroic only."
        },
        {
          "id": 11371,
          "name": "Wanted: Coilfang Myrmidons",
          "faction": "both",
          "questGiver": "Nether-Stalker Mah'duun — Lower City, Shattrath City",
          "rewards": [
            {
              "id": 29460,
              "name": "Ethereum Prison Key"
            }
          ],
          "note": "Daily normal dungeon quest (rotates). Shareable."
        }
      ]
    },
    {
      "id": "mana-tombs",
      "name": "Mana-Tombs",
      "type": "dungeon",
      "zone": "Auchindoun, Terokkar Forest",
      "levelRange": [
        64,
        66
      ],
      "phase": "preraid",
      "attunement": "None on Normal. Heroic: Auchenai Key — Lower City reputation (Revered at TBC Classic launch, later reduced to Honored).",
      "quests": [
        {
          "id": 10165,
          "name": "Undercutting the Competition",
          "faction": "both",
          "questGiver": "Nexus-Prince Haramad — outside the Mana-Tombs, Auchindoun",
          "rewards": [
            {
              "id": 29343,
              "name": "Haramad's Leggings of the Third Coin"
            },
            {
              "id": 29342,
              "name": "Consortium Plated Legguards"
            },
            {
              "id": 29345,
              "name": "Haramad's Leg Wraps"
            },
            {
              "id": 29344,
              "name": "Haramad's Linked Chain Pantaloons"
            }
          ],
          "note": "Kill Nexus-Prince Shaffar and bring back Shaffar's Wrappings."
        },
        {
          "id": 10216,
          "name": "Safety Is Job One",
          "faction": "both",
          "questGiver": "Artificer Morphalius — outside the Mana-Tombs, Auchindoun",
          "note": "Kill 10 Ethereal Crypt Raiders, 5 Ethereal Sorcerers, 5 Nexus Stalkers and 5 Ethereal Spellbinders; ends at the Ethereal Transporter Control Panel inside. Shareable."
        },
        {
          "id": 10218,
          "name": "Someone Else's Hard Work Pays Off",
          "faction": "both",
          "questGiver": "Cryo-Engineer Sha'heen — inside the Mana-Tombs",
          "prereq": "Requires Safety Is Job One",
          "rewards": [
            {
              "id": 29328,
              "name": "Consortium Prince's Wrap"
            },
            {
              "id": 29327,
              "name": "Cryo-mitts"
            },
            {
              "id": 29326,
              "name": "Consortium Mantle of Phasing"
            },
            {
              "id": 29325,
              "name": "Flesh Beast's Metal Greaves"
            }
          ],
          "note": "Escort Sha'heen through the dungeon to collect ether; turn in to Nexus-Prince Haramad."
        },
        {
          "id": 10977,
          "name": "Stasis Chambers of the Mana-Tombs",
          "faction": "both",
          "questGiver": "Image of Commander Ameer — Bash'ir's Landing, Blade's Edge Mountains",
          "prereq": "Requires The Mark of the Nexus-King (Ethereum chain)",
          "rewards": [
            {
              "id": 29434,
              "name": "Badge of Justice"
            }
          ],
          "note": "Heroic only: use the Mana-Tombs Stasis Chamber Key on the stasis chamber and defeat what emerges. Shareable."
        },
        {
          "id": 10981,
          "name": "Nexus-Prince Shaffar's Personal Chamber",
          "faction": "both",
          "questGiver": "Image of Commander Ameer — Bash'ir's Landing, Blade's Edge Mountains",
          "prereq": "Requires Stasis Chambers of the Mana-Tombs and The Consortium Revered",
          "rewards": [
            {
              "id": 32079,
              "name": "Shaffar's Stasis Chamber Key"
            }
          ],
          "note": "Heroic only: reward key opens Shaffar's stasis chamber to summon the bonus boss Yor."
        },
        {
          "id": 11373,
          "name": "Wanted: Shaffar's Wondrous Pendant",
          "faction": "both",
          "questGiver": "Wind Trader Zhareem — Lower City, Shattrath City",
          "rewards": [
            {
              "id": 29434,
              "name": "Badge of Justice"
            }
          ],
          "note": "Daily heroic dungeon quest (rotates); Heroic only."
        }
      ]
    },
    {
      "id": "auchenai-crypts",
      "name": "Auchenai Crypts",
      "type": "dungeon",
      "zone": "Auchindoun, Terokkar Forest",
      "levelRange": [
        65,
        67
      ],
      "phase": "preraid",
      "attunement": "None on Normal. Heroic: Auchenai Key — Lower City reputation (Revered at TBC Classic launch, later reduced to Honored).",
      "quests": [
        {
          "id": 10164,
          "name": "Everything Will Be Alright",
          "faction": "both",
          "questGiver": "Greatfather Aldrimus — outside Auchenai Crypts, Auchindoun",
          "rewards": [
            {
              "id": 29341,
              "name": "Auchenai Anchorite's Robe"
            },
            {
              "id": 29340,
              "name": "Auchenai Monk's Tunic"
            },
            {
              "id": 29339,
              "name": "Auchenai Tracker's Hauberk"
            },
            {
              "id": 29337,
              "name": "The Exarch's Protector"
            }
          ],
          "note": "Destroy Exarch Maladaar. Shareable."
        },
        {
          "id": 10167,
          "name": "Auchindoun...",
          "faction": "horde",
          "questGiver": "A'dal — Terrace of Light, Shattrath City",
          "prereq": "Requires A Secret Revealed (Mag'har chain, Nagrand)",
          "note": "Slay Exarch Maladaar to free the spirit of D'ore; ends at D'ore inside the crypts. Continues the Hero of the Mag'har chain. Shareable."
        },
        {
          "id": 10253,
          "name": "Levixus the Soul Caller",
          "faction": "both",
          "questGiver": "Nitrin the Learned — Nagrand",
          "prereq": "End of the I See Dead Draenei chain (Ezekiel / Vision of the Dead)",
          "rewards": [
            {
              "id": 29312,
              "name": "Cover of Righteous Fury"
            },
            {
              "id": 29313,
              "name": "Earthbreaker's Greaves"
            },
            {
              "id": 29315,
              "name": "Gloves of Penitence"
            },
            {
              "id": 29314,
              "name": "Leggings of the Third Coin"
            }
          ],
          "note": "Levixus is summoned on the terrace above the Ring of Observance, outside the instance portal; turn in to Ramdor the Mad outside Auchenai Crypts."
        },
        {
          "id": 11374,
          "name": "Wanted: The Exarch's Soul Gem",
          "faction": "both",
          "questGiver": "Wind Trader Zhareem — Lower City, Shattrath City",
          "rewards": [
            {
              "id": 29434,
              "name": "Badge of Justice"
            }
          ],
          "note": "Daily heroic dungeon quest (rotates); Heroic only."
        }
      ]
    },
    {
      "id": "sethekk-halls",
      "name": "Sethekk Halls",
      "type": "dungeon",
      "zone": "Auchindoun, Terokkar Forest",
      "levelRange": [
        67,
        69
      ],
      "phase": "preraid",
      "attunement": "None on Normal. Heroic: Auchenai Key — Lower City reputation (Revered at TBC Classic launch, later reduced to Honored).",
      "notes": "Talon King Ikiss drops the Shadow Labyrinth Key. In Heroic mode druids can summon Anzu for their epic flight form, and the Book of Forgotten Names for Kalynna's Request drops from Darkweaver Syth.",
      "quests": [
        {
          "id": 10097,
          "name": "Brother Against Brother",
          "faction": "both",
          "questGiver": "Isfar — outside Sethekk Halls, Auchindoun",
          "rewards": [
            {
              "id": 29333,
              "name": "Torc of the Sethekk Prophet"
            },
            {
              "id": 29334,
              "name": "Sethekk Oracle's Focus"
            },
            {
              "id": 29335,
              "name": "Talon Lord's Collar"
            },
            {
              "id": 29336,
              "name": "Mark of the Ravenguard"
            }
          ],
          "note": "Kill Darkweaver Syth and free Lakka. Shareable."
        },
        {
          "id": 10098,
          "name": "Terokk's Legacy",
          "faction": "both",
          "questGiver": "Isfar — outside Sethekk Halls, Auchindoun",
          "rewards": [
            {
              "id": 29330,
              "name": "The Saga of Terokk"
            },
            {
              "id": 29332,
              "name": "Terokk's Mask"
            },
            {
              "id": 29329,
              "name": "Terokk's Quill"
            }
          ],
          "note": "Turn in Terokk's Mask, Terokk's Quill and The Saga of Terokk, looted from Talon King Ikiss and Darkweaver Syth."
        },
        {
          "id": 9637,
          "name": "Kalynna's Request",
          "faction": "both",
          "questGiver": "Kalynna Lathred — Netherstorm",
          "prereq": "Late step of the Nightbane urn chain (Medivh's Journal, Karazhan)",
          "note": "Heroic only: Book of Forgotten Names drops from Darkweaver Syth here; also needs the Tome of Dusk from Heroic Shattered Halls. Leads to the Nightbane summon."
        },
        {
          "id": 11001,
          "name": "Vanquish the Raven God",
          "faction": "both",
          "questGiver": "Morthis Whisperwing — Cenarion Refuge, Zangarmarsh",
          "prereq": "Final step of the druid epic flight form chain (Chasing the Moonstone)",
          "note": "Druid only, Heroic only: summon and slay Anzu using the Essence-Infused Moonstone; completing the chain grants Swift Flight Form. Shareable."
        },
        {
          "id": 11372,
          "name": "Wanted: The Headfeathers of Ikiss",
          "faction": "both",
          "questGiver": "Wind Trader Zhareem — Lower City, Shattrath City",
          "rewards": [
            {
              "id": 29434,
              "name": "Badge of Justice"
            }
          ],
          "note": "Daily heroic dungeon quest (rotates); Heroic only."
        }
      ]
    },
    {
      "id": "shadow-labyrinth",
      "name": "Shadow Labyrinth",
      "type": "dungeon",
      "zone": "Auchindoun, Terokkar Forest",
      "levelRange": [
        69,
        70
      ],
      "phase": "preraid",
      "attunement": "Entry requires the Shadow Labyrinth Key from Talon King Ikiss (Sethekk Halls); rogues with 350 Lockpicking can open the door. Heroic: Auchenai Key — Lower City reputation (Revered at TBC Classic launch, later reduced to Honored).",
      "notes": "Home of the First Key Fragment of the Karazhan key chain, and of Murmur's Essence for Trial of the Naaru: Strength (Heroic).",
      "quests": [
        {
          "id": 10094,
          "name": "The Codex of Blood",
          "faction": "both",
          "questGiver": "Field Commander Mahfuun — Shadow Labyrinth entrance, Auchindoun",
          "prereq": "Requires Trouble at Auchindoun (Spymistress Mehlisah Highcrown, Shattrath)",
          "note": "Read from the Codex of Blood inside the Screaming Hall."
        },
        {
          "id": 10095,
          "name": "Into the Heart of the Labyrinth",
          "faction": "both",
          "questGiver": "The Codex of Blood — object inside Shadow Labyrinth",
          "prereq": "Follows The Codex of Blood",
          "rewards": [
            {
              "id": 28179,
              "name": "Shattrath Jumpers"
            },
            {
              "id": 28178,
              "name": "Spymistress's Boots"
            },
            {
              "id": 28177,
              "name": "Auchenai Boots"
            },
            {
              "id": 28176,
              "name": "Sha'tari Wrought Greaves"
            }
          ],
          "note": "Destroy Murmur; report to Spymistress Mehlisah Highcrown in Shattrath. Shareable."
        },
        {
          "id": 10178,
          "name": "Find Spy To'gun",
          "faction": "both",
          "questGiver": "Spy Grik'tha — Lower City refugees at Auchindoun, Terokkar Forest",
          "note": "Locate Spy To'gun inside the Shadow Labyrinth."
        },
        {
          "id": 10091,
          "name": "The Soul Devices",
          "faction": "both",
          "questGiver": "Spy To'gun — inside Shadow Labyrinth",
          "prereq": "Follows Find Spy To'gun",
          "rewards": [
            {
              "id": 28174,
              "name": "Shattrath Wraps"
            },
            {
              "id": 28171,
              "name": "Spymistress's Wristguards"
            },
            {
              "id": 28170,
              "name": "Auchenai Bracers"
            },
            {
              "id": 28167,
              "name": "Sha'tari Wrought Armguards"
            }
          ],
          "note": "Steal 5 Soul Devices; turn in to Spymistress Mehlisah Highcrown in Shattrath."
        },
        {
          "id": 9831,
          "name": "Entry Into Karazhan",
          "faction": "both",
          "questGiver": "Khadgar — Terrace of Light, Shattrath City",
          "prereq": "Karazhan key chain: follows Khadgar (Arcane Disturbances / Restless Activity, Deadwind Pass)",
          "note": "Retrieve the First Key Fragment from an Arcane Container in the pool before Murmur. Continues to The Second and Third Fragments."
        },
        {
          "id": 10649,
          "name": "The Book of Fel Names",
          "faction": "both",
          "questGiver": "Altruis the Sufferer — Nagrand",
          "prereq": "Requires Illidan's Pupil (Altruis chain, Nagrand)",
          "note": "Obtain the Book of Fel Names from Blackheart the Inciter; part of the chain leading to The Cipher of Damnation (Tempest Key prerequisite)."
        },
        {
          "id": 10885,
          "name": "Trial of the Naaru: Strength",
          "faction": "both",
          "questGiver": "A'dal — Terrace of Light, Shattrath City",
          "prereq": "Requires The Tempest Key (Khadgar/A'dal; gated behind The Cipher of Damnation in Shadowmoon Valley)",
          "note": "Heroic only: Murmur's Essence (Murmur, Heroic Shadow Labyrinth) plus Kalithresh's Trident (Heroic Steamvault). Tempest Keep (The Eye) raid attunement step."
        },
        {
          "id": 11375,
          "name": "Wanted: Murmur's Whisper",
          "faction": "both",
          "questGiver": "Wind Trader Zhareem — Lower City, Shattrath City",
          "rewards": [
            {
              "id": 29434,
              "name": "Badge of Justice"
            }
          ],
          "note": "Daily heroic dungeon quest (rotates); Heroic only."
        },
        {
          "id": 11376,
          "name": "Wanted: Malicious Instructors",
          "faction": "both",
          "questGiver": "Nether-Stalker Mah'duun — Lower City, Shattrath City",
          "rewards": [
            {
              "id": 29460,
              "name": "Ethereum Prison Key"
            }
          ],
          "note": "Daily normal dungeon quest (rotates). Shareable."
        }
      ]
    },
    {
      "id": "old-hillsbrad-foothills",
      "name": "Old Hillsbrad Foothills",
      "type": "dungeon",
      "zone": "Caverns of Time, Tanaris",
      "levelRange": [
        66,
        68
      ],
      "phase": "preraid",
      "attunement": "Requires the Caverns of Time intro: To The Master's Lair (Steward of Time, quest 10279) and The Caverns of Time escort (Andormu, quest 10277) before Old Hillsbrad opens. Heroic: Key of Time — Keepers of Time reputation (Revered at TBC Classic launch, later reduced to Honored).",
      "notes": "Completing the Old Hillsbrad chain unlocks The Black Morass.",
      "quests": [
        {
          "id": 10282,
          "name": "Old Hillsbrad",
          "faction": "both",
          "questGiver": "Andormu — Caverns of Time, Tanaris",
          "prereq": "Requires The Caverns of Time (intro escort)",
          "note": "Enter the Old Hillsbrad timeway and speak with Erozion."
        },
        {
          "id": 10283,
          "name": "Taretha's Diversion",
          "faction": "both",
          "questGiver": "Erozion — inside Old Hillsbrad Foothills",
          "prereq": "Follows Old Hillsbrad",
          "note": "Set 5 incendiary charges in the Durnholde Keep internment lodges; speak to Thrall. Shareable."
        },
        {
          "id": 10284,
          "name": "Escape from Durnholde",
          "faction": "both",
          "questGiver": "Thrall — Durnholde Keep, Old Hillsbrad Foothills",
          "prereq": "Follows Taretha's Diversion",
          "note": "Escort Thrall out of Durnholde, defeat the Epoch Hunter and return to Erozion."
        },
        {
          "id": 10285,
          "name": "Return to Andormu",
          "faction": "both",
          "questGiver": "Erozion — inside Old Hillsbrad Foothills",
          "prereq": "Follows Escape from Durnholde",
          "rewards": [
            {
              "id": 29317,
              "name": "Tempest's Touch"
            },
            {
              "id": 29318,
              "name": "Southshore Sneakers"
            },
            {
              "id": 29319,
              "name": "Tarren Mill Defender's Cinch"
            },
            {
              "id": 29316,
              "name": "Warchief's Mantle"
            }
          ],
          "note": "Chain turn-in at the Caverns of Time; unlocks The Black Morass."
        },
        {
          "id": 11378,
          "name": "Wanted: The Epoch Hunter's Head",
          "faction": "both",
          "questGiver": "Wind Trader Zhareem — Lower City, Shattrath City",
          "rewards": [
            {
              "id": 29434,
              "name": "Badge of Justice"
            }
          ],
          "note": "Daily heroic dungeon quest (rotates); Heroic only."
        }
      ]
    },
    {
      "id": "black-morass",
      "name": "The Black Morass",
      "type": "dungeon",
      "zone": "Caverns of Time, Tanaris",
      "levelRange": [
        69,
        70
      ],
      "phase": "preraid",
      "attunement": "Requires completing the Old Hillsbrad chain (Return to Andormu, quest 10285). Heroic: Key of Time — Keepers of Time reputation (Revered at TBC Classic launch, later reduced to Honored).",
      "notes": "The Master's Touch is the final dungeon step of the Karazhan key chain. The Vials of Eternity (Mount Hyjal attunement) is turned in here but completed in the Serpentshrine Cavern and Tempest Keep raids.",
      "quests": [
        {
          "id": 10296,
          "name": "The Black Morass",
          "faction": "both",
          "questGiver": "Andormu — Caverns of Time, Tanaris",
          "prereq": "Requires Return to Andormu (Old Hillsbrad chain)",
          "note": "Enter the Black Morass timeway and speak with Sa'at."
        },
        {
          "id": 10297,
          "name": "The Opening of the Dark Portal",
          "faction": "both",
          "questGiver": "Sa'at — inside The Black Morass",
          "prereq": "Follows The Black Morass",
          "note": "Defend Medivh through the portal-rift event until Aeonus falls and the Dark Portal opens."
        },
        {
          "id": 10298,
          "name": "Hero of the Brood",
          "faction": "both",
          "questGiver": "Sa'at — inside The Black Morass",
          "prereq": "Follows The Opening of the Dark Portal",
          "rewards": [
            {
              "id": 29320,
              "name": "Band of the Guardian"
            },
            {
              "id": 29322,
              "name": "Keeper's Ring of Piety"
            },
            {
              "id": 29321,
              "name": "Time-bending Gem"
            },
            {
              "id": 29323,
              "name": "Andormu's Tear"
            }
          ],
          "note": "Chain turn-in to Andormu at the Caverns of Time."
        },
        {
          "id": 9836,
          "name": "The Master's Touch",
          "faction": "both",
          "questGiver": "Khadgar — Terrace of Light, Shattrath City",
          "prereq": "Karazhan key chain: follows The Second and Third Fragments (Steamvault + Arcatraz)",
          "note": "Survive the Opening of the Dark Portal event and have Medivh restore the Apprentice's Key; return to Khadgar for The Master's Key (Karazhan access)."
        },
        {
          "id": 11382,
          "name": "Wanted: Aeonus's Hourglass",
          "faction": "both",
          "questGiver": "Wind Trader Zhareem — Lower City, Shattrath City",
          "rewards": [
            {
              "id": 29434,
              "name": "Badge of Justice"
            }
          ],
          "note": "Daily heroic dungeon quest (rotates); Heroic only."
        },
        {
          "id": 11383,
          "name": "Wanted: Rift Lords",
          "faction": "both",
          "questGiver": "Nether-Stalker Mah'duun — Lower City, Shattrath City",
          "rewards": [
            {
              "id": 29460,
              "name": "Ethereum Prison Key"
            }
          ],
          "note": "Daily normal dungeon quest (rotates). Shareable."
        }
      ]
    },
    {
      "id": "mechanar",
      "name": "The Mechanar",
      "type": "dungeon",
      "zone": "Tempest Keep, Netherstorm",
      "levelRange": [
        69,
        70
      ],
      "phase": "preraid",
      "attunement": "None on Normal. Heroic: Warpforged Key — The Sha'tar reputation (Revered at TBC Classic launch, later reduced to Honored).",
      "notes": "Pathaleon the Calculator drops the Bottom Shard of the Arcatraz Key for How to Break Into the Arcatraz.",
      "quests": [
        {
          "id": 10704,
          "name": "How to Break Into the Arcatraz",
          "faction": "both",
          "questGiver": "A'dal — Terrace of Light, Shattrath City",
          "prereq": "End of the Consortium triangulation chain (Warp-Raider Nesaad through Special Delivery to Shattrath City)",
          "rewards": [
            {
              "id": 31465,
              "name": "Sha'tari Anchorite's Cloak"
            },
            {
              "id": 31461,
              "name": "A'dal's Gift"
            },
            {
              "id": 31464,
              "name": "Naaru Belt of Precision"
            },
            {
              "id": 31462,
              "name": "Shattrath's Champion Belt"
            },
            {
              "id": 31460,
              "name": "Sha'tari Vindicator's Waistguard"
            },
            {
              "id": 31084,
              "name": "Key to the Arcatraz"
            }
          ],
          "note": "Bottom Shard drops from Pathaleon the Calculator here; Top Shard from Warp Splinter in the Botanica. Always rewards the Key to the Arcatraz plus one gear choice."
        },
        {
          "id": 11386,
          "name": "Wanted: Pathaleon's Projector",
          "faction": "both",
          "questGiver": "Wind Trader Zhareem — Lower City, Shattrath City",
          "rewards": [
            {
              "id": 29434,
              "name": "Badge of Justice"
            }
          ],
          "note": "Daily heroic dungeon quest (rotates); Heroic only."
        },
        {
          "id": 11387,
          "name": "Wanted: Tempest-Forge Destroyers",
          "faction": "both",
          "questGiver": "Nether-Stalker Mah'duun — Lower City, Shattrath City",
          "rewards": [
            {
              "id": 29460,
              "name": "Ethereum Prison Key"
            }
          ],
          "note": "Daily normal dungeon quest (rotates). Shareable."
        }
      ]
    },
    {
      "id": "botanica",
      "name": "The Botanica",
      "type": "dungeon",
      "zone": "Tempest Keep, Netherstorm",
      "levelRange": [
        70,
        70
      ],
      "phase": "preraid",
      "attunement": "None on Normal. Heroic: Warpforged Key — The Sha'tar reputation (Revered at TBC Classic launch, later reduced to Honored).",
      "notes": "Warp Splinter drops the Top Shard of the Arcatraz Key for How to Break Into the Arcatraz.",
      "quests": [
        {
          "id": 10704,
          "name": "How to Break Into the Arcatraz",
          "faction": "both",
          "questGiver": "A'dal — Terrace of Light, Shattrath City",
          "prereq": "End of the Consortium triangulation chain (Warp-Raider Nesaad through Special Delivery to Shattrath City)",
          "rewards": [
            {
              "id": 31465,
              "name": "Sha'tari Anchorite's Cloak"
            },
            {
              "id": 31461,
              "name": "A'dal's Gift"
            },
            {
              "id": 31464,
              "name": "Naaru Belt of Precision"
            },
            {
              "id": 31462,
              "name": "Shattrath's Champion Belt"
            },
            {
              "id": 31460,
              "name": "Sha'tari Vindicator's Waistguard"
            },
            {
              "id": 31084,
              "name": "Key to the Arcatraz"
            }
          ],
          "note": "Top Shard drops from Warp Splinter here; Bottom Shard from Pathaleon the Calculator in the Mechanar. Always rewards the Key to the Arcatraz plus one gear choice."
        },
        {
          "id": 11384,
          "name": "Wanted: A Warp Splinter Clipping",
          "faction": "both",
          "questGiver": "Wind Trader Zhareem — Lower City, Shattrath City",
          "rewards": [
            {
              "id": 29434,
              "name": "Badge of Justice"
            }
          ],
          "note": "Daily heroic dungeon quest (rotates); Heroic only."
        },
        {
          "id": 11385,
          "name": "Wanted: Sunseeker Channelers",
          "faction": "both",
          "questGiver": "Nether-Stalker Mah'duun — Lower City, Shattrath City",
          "rewards": [
            {
              "id": 29460,
              "name": "Ethereum Prison Key"
            }
          ],
          "note": "Daily normal dungeon quest (rotates). Shareable."
        }
      ]
    },
    {
      "id": "arcatraz",
      "name": "The Arcatraz",
      "type": "dungeon",
      "zone": "Tempest Keep, Netherstorm",
      "levelRange": [
        70,
        70
      ],
      "phase": "preraid",
      "attunement": "Entry requires the Key to the Arcatraz (How to Break Into the Arcatraz, quest 10704 — shard drops from Pathaleon the Calculator and Warp Splinter); rogues with 350 Lockpicking can open the door. Heroic: Warpforged Key — The Sha'tar reputation (Revered at TBC Classic launch, later reduced to Honored).",
      "notes": "Holds the Third Key Fragment of the Karazhan key chain, Seer Udalo for the Black Temple attunement, and Millhouse Manastorm for Trial of the Naaru: Tenacity (Heroic).",
      "quests": [
        {
          "id": 10882,
          "name": "Harbinger of Doom",
          "faction": "both",
          "questGiver": "A'dal — Terrace of Light, Shattrath City",
          "prereq": "Requires How to Break Into the Arcatraz",
          "rewards": [
            {
              "id": 31747,
              "name": "Potent Sha'tari Pendant"
            },
            {
              "id": 31749,
              "name": "A'dal's Recovery Necklace"
            },
            {
              "id": 31748,
              "name": "Shattrath Choker of Power"
            }
          ],
          "note": "Slay Harbinger Skyriss, the final boss. Shareable."
        },
        {
          "id": 10705,
          "name": "Seer Udalo",
          "faction": "both",
          "questGiver": "Akama — Warden's Cage, Shadowmoon Valley",
          "prereq": "Requires Akama (Black Temple attunement chain)",
          "note": "Find Seer Udalo's body at the top of the Arcatraz. Black Temple attunement step; continues to A Mysterious Portent."
        },
        {
          "id": 9832,
          "name": "The Second and Third Fragments",
          "faction": "both",
          "questGiver": "Khadgar — Terrace of Light, Shattrath City",
          "prereq": "Karazhan key chain: follows Entry Into Karazhan (Shadow Labyrinth)",
          "note": "Loot the Third Key Fragment from an Arcane Container before Skyriss, and the Second Key Fragment from the Steamvault. Continues to The Master's Touch (Black Morass)."
        },
        {
          "id": 10886,
          "name": "Trial of the Naaru: Tenacity",
          "faction": "both",
          "questGiver": "A'dal — Terrace of Light, Shattrath City",
          "prereq": "Requires The Tempest Key (Khadgar/A'dal; gated behind The Cipher of Damnation in Shadowmoon Valley)",
          "note": "Heroic only: free Millhouse Manastorm and keep him alive through the Warden Mellichar event. Tempest Keep (The Eye) raid attunement step."
        },
        {
          "id": 11388,
          "name": "Wanted: The Scroll of Skyriss",
          "faction": "both",
          "questGiver": "Wind Trader Zhareem — Lower City, Shattrath City",
          "rewards": [
            {
              "id": 29434,
              "name": "Badge of Justice"
            }
          ],
          "note": "Daily heroic dungeon quest (rotates); Heroic only."
        },
        {
          "id": 11389,
          "name": "Wanted: Arcatraz Sentinels",
          "faction": "both",
          "questGiver": "Nether-Stalker Mah'duun — Lower City, Shattrath City",
          "rewards": [
            {
              "id": 29460,
              "name": "Ethereum Prison Key"
            }
          ],
          "note": "Daily normal dungeon quest (rotates). Shareable."
        }
      ]
    },
    {
      "id": "magisters-terrace",
      "name": "Magisters' Terrace",
      "type": "dungeon",
      "zone": "Isle of Quel'Danas",
      "levelRange": [
        70,
        70
      ],
      "phase": "p5",
      "attunement": "None on Normal. Heroic: Magister's Terrace Key, awarded for completing the Normal-mode chain ending in Hard to Kill (quest 11492).",
      "notes": "Added in Patch 2.4 with the Isle of Quel'Danas. The intro quest Crisis at the Sunwell comes from the Shattered Sun Staging Area.",
      "quests": [
        {
          "id": 11488,
          "name": "Magisters' Terrace",
          "faction": "both",
          "questGiver": "Exarch Larethor — Shattered Sun Staging Area, Isle of Quel'Danas",
          "prereq": "Requires Crisis at the Sunwell",
          "rewards": [
            {
              "id": 35230,
              "name": "Darnarian's Scroll of Teleportation"
            }
          ],
          "note": "Find the blood elf spy Tyrith inside the dungeon; reward teleports you to the Shattered Sun Staging Area."
        },
        {
          "id": 11490,
          "name": "The Scryer's Scryer",
          "faction": "both",
          "questGiver": "Tyrith — inside Magisters' Terrace",
          "prereq": "Follows Magisters' Terrace",
          "note": "Activate the scrying orb on the terrace balcony to contact Kalecgos. Shareable."
        },
        {
          "id": 11492,
          "name": "Hard to Kill",
          "faction": "both",
          "questGiver": "Kalecgos — inside Magisters' Terrace",
          "prereq": "Follows The Scryer's Scryer",
          "rewards": [
            {
              "id": 35487,
              "name": "Bright Crimson Spinel"
            },
            {
              "id": 35488,
              "name": "Runed Crimson Spinel"
            },
            {
              "id": 35489,
              "name": "Teardrop Crimson Spinel"
            }
          ],
          "note": "Defeat Kael'thas Sunstrider and take his head to Exarch Larethor; completion awards the Magister's Terrace Key for Heroic mode."
        },
        {
          "id": 11499,
          "name": "Wanted: The Signet Ring of Prince Kael'thas",
          "faction": "both",
          "questGiver": "Wind Trader Zhareem — Lower City, Shattrath City",
          "rewards": [
            {
              "id": 29434,
              "name": "Badge of Justice"
            }
          ],
          "note": "Daily heroic dungeon quest (rotates); Heroic only."
        },
        {
          "id": 11500,
          "name": "Wanted: Sisters of Torment",
          "faction": "both",
          "questGiver": "Nether-Stalker Mah'duun — Lower City, Shattrath City",
          "rewards": [
            {
              "id": 29460,
              "name": "Ethereum Prison Key"
            }
          ],
          "note": "Daily normal dungeon quest (rotates). Shareable."
        }
      ]
    }
  ]
}
);
