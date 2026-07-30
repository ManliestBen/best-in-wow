WOWDATA.register({
  "kind": "bis",
  "expansion": "tbc",
  "class": "hunter",
  "className": "Hunter",
  "classColor": "#ABD473",
  "specs": [
    {
      "id": "beastmastery",
      "name": "Beast Mastery",
      "role": "dps",
      "icon": "ability_hunter_beasttaming",
      "statPriority": "Hit to 9% (142 rating) > Agility > Attack Power > Crit > Intellect > Stamina",
      "notes": "Hunter special attacks are hit-capped at 9% (142 hit rating). Ranged weapon DPS is your single biggest upgrade slot — prioritize it every phase; mainhand/offhand are pure stat sticks you never swing. The Beast Lord 4-piece (helm/shoulders/hands/legs) is strong enough to keep through all of Phase 1. From Phase 3 onward the Gronnstalker (Tier 6) bonuses anchor the list.",
      "enchants": {
        "head": "Glyph of Ferocity (+34 AP, +16 hit rating) — Cenarion Expedition Revered",
        "shoulder": "Greater Inscription of Vengeance (+30 AP, +10 crit) — Aldor Exalted, or Greater Inscription of the Blade — Scryers Exalted",
        "back": "Enchant Cloak - Greater Agility (+12 Agility)",
        "chest": "Enchant Chest - Exceptional Stats (+6 all stats)",
        "wrist": "Enchant Bracer - Assault (+24 Attack Power)",
        "hands": "Enchant Gloves - Assault (+26 Attack Power)",
        "legs": "Nethercobra Leg Armor (+50 AP, +12 crit)",
        "feet": "Enchant Boots - Dexterity (+12 Agility), or Cat's Swiftness on movement fights",
        "finger": "Enchant Ring - Stats (+4 all stats) — Enchanters only",
        "mainhand": "2H: Major Agility (+35 Agility); dual 1H stat sticks: +15 Agility each",
        "ranged": "Stabilized Eternium Scope (+28 crit rating)"
      },
      "brackets": [
        {
          "id": "preraid",
          "levelRange": [
            70,
            70
          ],
          "slots": {
            "head": [
              {
                "id": 28275,
                "name": "Beast Lord Helm",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Mechanar",
                  "boss": "Pathaleon the Calculator"
                },
                "note": "Beast Lord 4-piece bonus (Kill Command cooldown) is worth keeping through Phase 1"
              },
              {
                "id": 27414,
                "name": "Mok'Nathal Beast-Mask",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Auchenai Crypts",
                  "boss": "Exarch Maladaar"
                }
              }
            ],
            "neck": [
              {
                "id": 29381,
                "name": "Choker of Vile Intent",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "25 Badges of Justice — G'eras, Shattrath"
                }
              },
              {
                "id": 25562,
                "name": "Earthen Mark of Razing",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "zone": "Nagrand",
                  "boss": "Gurok the Usurper",
                  "detail": "Summoned group elite"
                }
              }
            ],
            "shoulder": [
              {
                "id": 27801,
                "name": "Beast Lord Mantle",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Steamvault",
                  "boss": "Warlord Kalithresh"
                }
              },
              {
                "id": 27434,
                "name": "Mantle of Perenolde",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Old Hillsbrad Foothills",
                  "boss": "Epoch Hunter"
                }
              }
            ],
            "back": [
              {
                "id": 24259,
                "name": "Vengeance Wrap",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring — BoE",
                  "profession": "Tailoring"
                }
              },
              {
                "id": 29382,
                "name": "Blood Knight War Cloak",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "25 Badges of Justice — G'eras, Shattrath"
                }
              },
              {
                "id": 27892,
                "name": "Cloak of the Inciter",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Shadow Labyrinth",
                  "boss": "Blackheart the Inciter"
                }
              }
            ],
            "chest": [
              {
                "id": 29525,
                "name": "Primalstrike Vest",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking — BoP, requires Elemental Leatherworking",
                  "profession": "Leatherworking"
                },
                "bop": true
              },
              {
                "id": 28228,
                "name": "Beast Lord Cuirass",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Botanica",
                  "boss": "Warp Splinter"
                }
              }
            ],
            "wrist": [
              {
                "id": 29527,
                "name": "Primalstrike Bracers",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking — BoP, requires Elemental Leatherworking",
                  "profession": "Leatherworking"
                },
                "bop": true
              },
              {
                "id": 29246,
                "name": "Nightfall Wristguards",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Old Hillsbrad Foothills",
                  "boss": "Epoch Hunter",
                  "detail": "Heroic only"
                }
              }
            ],
            "hands": [
              {
                "id": 27474,
                "name": "Beast Lord Handguards",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Shattered Halls",
                  "boss": "Warchief Kargath Bladefist"
                }
              },
              {
                "id": 25685,
                "name": "Fel Leather Gloves",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking",
                  "profession": "Leatherworking"
                }
              }
            ],
            "waist": [
              {
                "id": 29526,
                "name": "Primalstrike Belt",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking — BoP, requires Elemental Leatherworking",
                  "profession": "Leatherworking"
                },
                "bop": true
              },
              {
                "id": 29516,
                "name": "Ebon Netherscale Belt",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking — BoP, requires Dragonscale Leatherworking",
                  "profession": "Leatherworking"
                },
                "bop": true
              }
            ],
            "legs": [
              {
                "id": 27874,
                "name": "Beast Lord Leggings",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Steamvault",
                  "boss": "Warlord Kalithresh"
                }
              },
              {
                "id": 30538,
                "name": "Midnight Legguards",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Slave Pens",
                  "boss": "Quagmirran",
                  "detail": "Heroic only"
                }
              }
            ],
            "feet": [
              {
                "id": 25686,
                "name": "Fel Leather Boots",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking",
                  "profession": "Leatherworking"
                }
              },
              {
                "id": 29262,
                "name": "Boots of the Endless Hunt",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Botanica",
                  "boss": "Warp Splinter",
                  "detail": "Heroic only"
                }
              }
            ],
            "finger": [
              {
                "id": 31077,
                "name": "Slayer's Mark of the Redemption",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "quest",
                  "quest": "Dissension Amongst the Ranks...",
                  "zone": "Shadowmoon Valley",
                  "detail": "Group quest; separate Alliance and Horde versions"
                }
              },
              {
                "id": 27925,
                "name": "Ravenclaw Band",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sethekk Halls",
                  "boss": "Talon King Ikiss"
                }
              },
              {
                "id": 31326,
                "name": "Truestrike Ring",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "world-drop",
                  "detail": "BoE world drop"
                }
              }
            ],
            "trinket": [
              {
                "id": 29383,
                "name": "Bloodlust Brooch",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "41 Badges of Justice — G'eras, Shattrath"
                }
              },
              {
                "id": 28034,
                "name": "Hourglass of the Unraveller",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Black Morass",
                  "boss": "Temporus"
                }
              },
              {
                "id": 28288,
                "name": "Abacus of Violent Odds",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "The Mechanar",
                  "boss": "Pathaleon the Calculator"
                }
              }
            ],
            "mainhand": [
              {
                "id": 27846,
                "name": "Claw of the Watcher",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Auchenai Crypts",
                  "boss": "Shirrak the Dead Watcher",
                  "detail": "Heroic only"
                },
                "hand": "main",
                "weaponType": "Fist Weapon"
              },
              {
                "id": 27903,
                "name": "Sonic Spear",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Shadow Labyrinth",
                  "boss": "Murmur"
                },
                "note": "2H polearm — leave offhand empty",
                "hand": "two",
                "weaponType": "Polearm"
              }
            ],
            "offhand": [
              {
                "id": 29372,
                "name": "Void-Talon",
                "quality": "uncommon",
                "rank": 1,
                "source": {
                  "type": "vendor",
                  "detail": "Dealer Jadyan, Protectorate Watch Post",
                  "zone": "Netherstorm"
                },
                "note": "Cheap off-hand fist; empty when using a 2H",
                "hand": "off",
                "weaponType": "Fist Weapon"
              },
              {
                "id": 28315,
                "name": "Stormreaver Warblades",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Botanica",
                  "boss": "High Botanist Freywinn"
                },
                "hand": "off",
                "weaponType": "Fist Weapon"
              }
            ],
            "ranged": [
              {
                "id": 29351,
                "name": "Wrathtide Longbow",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Steamvault",
                  "boss": "Warlord Kalithresh",
                  "detail": "Heroic only"
                },
                "weaponType": "Bow"
              },
              {
                "id": 29152,
                "name": "Marksman's Bow",
                "quality": "epic",
                "rank": 2,
                "faction": "alliance",
                "source": {
                  "type": "reputation",
                  "detail": "Honor Hold — Exalted",
                  "zone": "Hellfire Peninsula"
                },
                "weaponType": "Bow"
              },
              {
                "id": 29151,
                "name": "Veteran's Musket",
                "quality": "epic",
                "rank": 3,
                "faction": "horde",
                "source": {
                  "type": "reputation",
                  "detail": "Thrallmar — Exalted",
                  "zone": "Hellfire Peninsula"
                },
                "weaponType": "Gun"
              }
            ]
          }
        },
        {
          "id": "p1",
          "levelRange": [
            70,
            70
          ],
          "slots": {
            "head": [
              {
                "id": 28275,
                "name": "Beast Lord Helm",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Mechanar",
                  "boss": "Pathaleon the Calculator"
                },
                "note": "Beast Lord 4-piece bonus (Kill Command cooldown) is worth keeping through Phase 1"
              }
            ],
            "neck": [
              {
                "id": 29381,
                "name": "Choker of Vile Intent",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "25 Badges of Justice — G'eras, Shattrath"
                }
              }
            ],
            "shoulder": [
              {
                "id": 27801,
                "name": "Beast Lord Mantle",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Steamvault",
                  "boss": "Warlord Kalithresh"
                }
              }
            ],
            "back": [
              {
                "id": 24259,
                "name": "Vengeance Wrap",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring — BoE",
                  "profession": "Tailoring"
                }
              },
              {
                "id": 29382,
                "name": "Blood Knight War Cloak",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "25 Badges of Justice — G'eras, Shattrath"
                }
              }
            ],
            "chest": [
              {
                "id": 28228,
                "name": "Beast Lord Cuirass",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Botanica",
                  "boss": "Warp Splinter"
                }
              },
              {
                "id": 29525,
                "name": "Primalstrike Vest",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking — BoP, requires Elemental Leatherworking",
                  "profession": "Leatherworking"
                },
                "bop": true
              }
            ],
            "wrist": [
              {
                "id": 29246,
                "name": "Nightfall Wristguards",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Old Hillsbrad Foothills",
                  "boss": "Epoch Hunter",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 29527,
                "name": "Primalstrike Bracers",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking — BoP, requires Elemental Leatherworking",
                  "profession": "Leatherworking"
                },
                "bop": true
              }
            ],
            "hands": [
              {
                "id": 27474,
                "name": "Beast Lord Handguards",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Shattered Halls",
                  "boss": "Warchief Kargath Bladefist"
                }
              }
            ],
            "waist": [
              {
                "id": 28828,
                "name": "Gronn-Stitched Girdle",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "Gruul the Dragonkiller"
                }
              },
              {
                "id": 28750,
                "name": "Girdle of Treachery",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Chess Event"
                }
              }
            ],
            "legs": [
              {
                "id": 28741,
                "name": "Skulker's Greaves",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Netherspite"
                }
              }
            ],
            "feet": [
              {
                "id": 28545,
                "name": "Edgewalker Longboots",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Moroes"
                }
              },
              {
                "id": 25686,
                "name": "Fel Leather Boots",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking",
                  "profession": "Leatherworking"
                }
              }
            ],
            "finger": [
              {
                "id": 28757,
                "name": "Ring of a Thousand Marks",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar"
                }
              },
              {
                "id": 28649,
                "name": "Garona's Signet Ring",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "The Curator"
                }
              },
              {
                "id": 28791,
                "name": "Ring of the Recalcitrant",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "quest",
                  "quest": "The Fall of Magtheridon",
                  "detail": "Magtheridon's Head turn-in; Alliance and Horde versions"
                }
              }
            ],
            "trinket": [
              {
                "id": 28830,
                "name": "Dragonspine Trophy",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "Gruul the Dragonkiller"
                }
              },
              {
                "id": 29383,
                "name": "Bloodlust Brooch",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "41 Badges of Justice — G'eras, Shattrath"
                }
              },
              {
                "id": 28034,
                "name": "Hourglass of the Unraveller",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "The Black Morass",
                  "boss": "Temporus"
                }
              }
            ],
            "mainhand": [
              {
                "id": 27846,
                "name": "Claw of the Watcher",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Auchenai Crypts",
                  "boss": "Shirrak the Dead Watcher",
                  "detail": "Heroic only"
                },
                "hand": "main",
                "weaponType": "Fist Weapon"
              },
              {
                "id": 28584,
                "name": "Big Bad Wolf's Paw",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Opera Event (The Big Bad Wolf)"
                },
                "hand": "main",
                "weaponType": "Fist Weapon"
              }
            ],
            "offhand": [
              {
                "id": 29372,
                "name": "Void-Talon",
                "quality": "uncommon",
                "rank": 1,
                "source": {
                  "type": "vendor",
                  "detail": "Dealer Jadyan, Protectorate Watch Post",
                  "zone": "Netherstorm"
                },
                "note": "Cheap off-hand fist; empty when using a 2H",
                "hand": "off",
                "weaponType": "Fist Weapon"
              },
              {
                "id": 28572,
                "name": "Blade of the Unrequited",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Opera Event"
                },
                "hand": "one",
                "weaponType": "Dagger"
              }
            ],
            "ranged": [
              {
                "id": 28772,
                "name": "Sunfury Bow of the Phoenix",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar"
                },
                "weaponType": "Bow"
              },
              {
                "id": 29351,
                "name": "Wrathtide Longbow",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Steamvault",
                  "boss": "Warlord Kalithresh",
                  "detail": "Heroic only"
                },
                "weaponType": "Bow"
              }
            ]
          }
        },
        {
          "id": "p2",
          "levelRange": [
            70,
            70
          ],
          "slots": {
            "head": [
              {
                "id": 30141,
                "name": "Rift Stalker Helm",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Serpentshrine Cavern",
                  "boss": "Lady Vashj",
                  "detail": "Tier 5 token"
                }
              }
            ],
            "neck": [
              {
                "id": 30017,
                "name": "Telonicus's Pendant of Mayhem",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Tempest Keep",
                  "boss": "Kael'thas Sunstrider"
                }
              }
            ],
            "shoulder": [
              {
                "id": 30143,
                "name": "Rift Stalker Mantle",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Tempest Keep",
                  "boss": "Void Reaver",
                  "detail": "Tier 5 token"
                }
              }
            ],
            "back": [
              {
                "id": 29994,
                "name": "Thalassian Wildercloak",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Tempest Keep",
                  "boss": "Kael'thas Sunstrider"
                }
              }
            ],
            "chest": [
              {
                "id": 30139,
                "name": "Rift Stalker Hauberk",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Tempest Keep",
                  "boss": "Kael'thas Sunstrider",
                  "detail": "Tier 5 token"
                }
              }
            ],
            "wrist": [
              {
                "id": 29966,
                "name": "Vambraces of Ending",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Tempest Keep",
                  "boss": "High Astromancer Solarian"
                }
              }
            ],
            "hands": [
              {
                "id": 30140,
                "name": "Rift Stalker Gauntlets",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Serpentshrine Cavern",
                  "boss": "Leotheras the Blind",
                  "detail": "Tier 5 token"
                }
              },
              {
                "id": 28506,
                "name": "Gloves of Dexterous Manipulation",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Attumen the Huntsman"
                }
              }
            ],
            "waist": [
              {
                "id": 30040,
                "name": "Belt of Deep Shadow",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking — BoE",
                  "profession": "Leatherworking"
                }
              }
            ],
            "legs": [
              {
                "id": 29995,
                "name": "Leggings of Murderous Intent",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Tempest Keep",
                  "boss": "Kael'thas Sunstrider"
                }
              },
              {
                "id": 30142,
                "name": "Rift Stalker Leggings",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Serpentshrine Cavern",
                  "boss": "Fathom-Lord Karathress",
                  "detail": "Tier 5 token"
                }
              }
            ],
            "feet": [
              {
                "id": 30104,
                "name": "Cobra-Lash Boots",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Serpentshrine Cavern",
                  "boss": "Lady Vashj"
                }
              }
            ],
            "finger": [
              {
                "id": 29997,
                "name": "Band of the Ranger-General",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Tempest Keep",
                  "boss": "Kael'thas Sunstrider"
                }
              },
              {
                "id": 28757,
                "name": "Ring of a Thousand Marks",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar"
                }
              },
              {
                "id": 30052,
                "name": "Ring of Lethality",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Serpentshrine Cavern",
                  "boss": "Hydross the Unstable"
                }
              }
            ],
            "trinket": [
              {
                "id": 28830,
                "name": "Dragonspine Trophy",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "Gruul the Dragonkiller"
                }
              },
              {
                "id": 29383,
                "name": "Bloodlust Brooch",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "41 Badges of Justice — G'eras, Shattrath"
                }
              }
            ],
            "mainhand": [
              {
                "id": 32944,
                "name": "Talon of the Phoenix",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Tempest Keep",
                  "boss": "Al'ar"
                },
                "hand": "main",
                "weaponType": "Fist Weapon"
              },
              {
                "id": 29924,
                "name": "Netherbane",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Tempest Keep",
                  "boss": "Al'ar"
                },
                "hand": "one",
                "weaponType": "Axe"
              }
            ],
            "offhand": [
              {
                "id": 29948,
                "name": "Claw of the Phoenix",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Tempest Keep",
                  "boss": "Al'ar"
                },
                "hand": "off",
                "weaponType": "Fist Weapon"
              }
            ],
            "ranged": [
              {
                "id": 30105,
                "name": "Serpent Spine Longbow",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Serpentshrine Cavern",
                  "boss": "Lady Vashj"
                },
                "weaponType": "Bow"
              }
            ]
          }
        },
        {
          "id": "p4",
          "levelRange": [
            70,
            70
          ],
          "slots": {
            "head": [
              {
                "id": 32235,
                "name": "Cursed Vision of Sargeras",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Illidan Stormrage"
                }
              },
              {
                "id": 31003,
                "name": "Gronnstalker's Helmet",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Hyjal Summit",
                  "boss": "Archimonde",
                  "detail": "Tier 6 token"
                }
              }
            ],
            "neck": [
              {
                "id": 32591,
                "name": "Choker of Serrated Blades",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Hyjal Summit",
                  "boss": null,
                  "detail": "Trash drop (BoE)"
                }
              }
            ],
            "shoulder": [
              {
                "id": 31006,
                "name": "Gronnstalker's Spaulders",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Mother Shahraz",
                  "detail": "Tier 6 token"
                }
              }
            ],
            "back": [
              {
                "id": 29994,
                "name": "Thalassian Wildercloak",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Tempest Keep",
                  "boss": "Kael'thas Sunstrider"
                }
              }
            ],
            "chest": [
              {
                "id": 31004,
                "name": "Gronnstalker's Chestguard",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Illidan Stormrage",
                  "detail": "Tier 6 token"
                }
              }
            ],
            "wrist": [
              {
                "id": 32324,
                "name": "Insidious Bands",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Teron Gorefiend"
                }
              }
            ],
            "hands": [
              {
                "id": 31001,
                "name": "Gronnstalker's Gloves",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Hyjal Summit",
                  "boss": "Azgalor",
                  "detail": "Tier 6 token"
                }
              }
            ],
            "waist": [
              {
                "id": 30879,
                "name": "Don Alejandro's Money Belt",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Hyjal Summit",
                  "boss": "Anetheron"
                }
              }
            ],
            "legs": [
              {
                "id": 31005,
                "name": "Gronnstalker's Leggings",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "The Illidari Council",
                  "detail": "Tier 6 token"
                }
              },
              {
                "id": 30900,
                "name": "Bow-stitched Leggings",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Hyjal Summit",
                  "boss": "Azgalor"
                }
              }
            ],
            "feet": [
              {
                "id": 32366,
                "name": "Shadowmaster's Boots",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Mother Shahraz"
                }
              }
            ],
            "finger": [
              {
                "id": 32497,
                "name": "Stormrage Signet Ring",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Illidan Stormrage"
                }
              },
              {
                "id": 33496,
                "name": "Signet of Primal Wrath",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Zul'Aman",
                  "boss": null,
                  "detail": "Timed-run reward chest"
                }
              },
              {
                "id": 29301,
                "name": "Band of the Eternal Champion",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "reputation",
                  "detail": "The Scale of the Sands — Exalted (Hyjal Summit)"
                }
              }
            ],
            "trinket": [
              {
                "id": 28830,
                "name": "Dragonspine Trophy",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "Gruul the Dragonkiller"
                }
              },
              {
                "id": 33831,
                "name": "Berserker's Call",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Zul'Aman",
                  "boss": "Zul'jin"
                }
              },
              {
                "id": 32505,
                "name": "Madness of the Betrayer",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "The Illidari Council"
                }
              }
            ],
            "mainhand": [
              {
                "id": 33389,
                "name": "Dagger of Bad Mojo",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Zul'Aman",
                  "boss": "Hex Lord Malacrass"
                },
                "note": "Dual-wield — one in each hand",
                "hand": "one",
                "weaponType": "Dagger"
              }
            ],
            "offhand": [
              {
                "id": 33389,
                "name": "Dagger of Bad Mojo",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Zul'Aman",
                  "boss": "Hex Lord Malacrass"
                },
                "note": "Second copy",
                "hand": "one",
                "weaponType": "Dagger"
              }
            ],
            "ranged": [
              {
                "id": 30906,
                "name": "Bristleblitz Striker",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Hyjal Summit",
                  "boss": "Archimonde"
                },
                "weaponType": "Bow"
              }
            ]
          }
        },
        {
          "id": "p5",
          "levelRange": [
            70,
            70
          ],
          "slots": {
            "head": [
              {
                "id": 34333,
                "name": "Coif of Alleria",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                }
              }
            ],
            "neck": [
              {
                "id": 34177,
                "name": "Clutch of Demise",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Brutallus"
                }
              }
            ],
            "shoulder": [
              {
                "id": 31006,
                "name": "Gronnstalker's Spaulders",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Mother Shahraz",
                  "detail": "Tier 6 token"
                }
              }
            ],
            "back": [
              {
                "id": 34241,
                "name": "Cloak of Unforgivable Sin",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                }
              }
            ],
            "chest": [
              {
                "id": 34397,
                "name": "Bladed Chaos Tunic",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "vendor",
                  "detail": "Yrma — Sunmote exchange",
                  "instance": "Sunwell Plateau"
                }
              },
              {
                "id": 31004,
                "name": "Gronnstalker's Chestguard",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Illidan Stormrage",
                  "detail": "Tier 6 token"
                }
              }
            ],
            "wrist": [
              {
                "id": 34443,
                "name": "Gronnstalker's Bracers",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kalecgos",
                  "detail": "Tier 6 token"
                }
              }
            ],
            "hands": [
              {
                "id": 34343,
                "name": "Thalassian Ranger Gauntlets",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                }
              },
              {
                "id": 31001,
                "name": "Gronnstalker's Gloves",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Hyjal Summit",
                  "boss": "Azgalor",
                  "detail": "Tier 6 token"
                }
              }
            ],
            "waist": [
              {
                "id": 34549,
                "name": "Gronnstalker's Belt",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Brutallus",
                  "detail": "Tier 6 token"
                }
              }
            ],
            "legs": [
              {
                "id": 34188,
                "name": "Leggings of the Immortal Night",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Felmyst"
                }
              },
              {
                "id": 31005,
                "name": "Gronnstalker's Leggings",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "The Illidari Council",
                  "detail": "Tier 6 token"
                }
              }
            ],
            "feet": [
              {
                "id": 34570,
                "name": "Gronnstalker's Boots",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Felmyst",
                  "detail": "Tier 6 token"
                }
              }
            ],
            "finger": [
              {
                "id": 34361,
                "name": "Hard Khorium Band",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Jewelcrafting — BoP — requires 375 Jewelcrafting",
                  "profession": "Jewelcrafting"
                }
              },
              {
                "id": 34189,
                "name": "Band of Ruinous Delight",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "The Eredar Twins"
                }
              },
              {
                "id": 34887,
                "name": "Angelista's Revenge",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "badge",
                  "detail": "60 Badges of Justice — G'eras, Shattrath; also Smith Hauthaa, Isle of Quel'Danas"
                }
              }
            ],
            "trinket": [
              {
                "id": 34427,
                "name": "Blackened Naaru Sliver",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "M'uru"
                }
              },
              {
                "id": 33831,
                "name": "Berserker's Call",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Zul'Aman",
                  "boss": "Zul'jin"
                }
              },
              {
                "id": 28830,
                "name": "Dragonspine Trophy",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "Gruul the Dragonkiller"
                }
              }
            ],
            "mainhand": [
              {
                "id": 34331,
                "name": "Hand of the Deceiver",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                },
                "hand": "main",
                "weaponType": "Fist Weapon"
              }
            ],
            "offhand": [
              {
                "id": 34329,
                "name": "Crux of the Apocalypse",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                },
                "hand": "one",
                "weaponType": "Dagger"
              }
            ],
            "ranged": [
              {
                "id": 34334,
                "name": "Thori'dal, the Stars' Fury",
                "quality": "legendary",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                },
                "note": "Legendary — needs no ammo",
                "weaponType": "Bow"
              },
              {
                "id": 30906,
                "name": "Bristleblitz Striker",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Hyjal Summit",
                  "boss": "Archimonde"
                },
                "weaponType": "Bow"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "marksmanship",
      "name": "Marksmanship",
      "role": "dps",
      "icon": "ability_marksmanship",
      "statPriority": "Hit to 9% (142 rating) > Agility > Attack Power > Crit > Intellect",
      "notes": "Marksmanship gears identically to Beast Mastery in every TBC phase — these lists mirror the BM ones (Wowhead/Icy Veins publish the same tables for both). Hit cap is 9% (142 rating). MM trails BM in personal DPS in TBC but brings Trueshot Aura for the group.",
      "enchants": {
        "head": "Glyph of Ferocity (+34 AP, +16 hit rating) — Cenarion Expedition Revered",
        "shoulder": "Greater Inscription of Vengeance (+30 AP, +10 crit) — Aldor Exalted, or Greater Inscription of the Blade — Scryers Exalted",
        "back": "Enchant Cloak - Greater Agility (+12 Agility)",
        "chest": "Enchant Chest - Exceptional Stats (+6 all stats)",
        "wrist": "Enchant Bracer - Assault (+24 Attack Power)",
        "hands": "Enchant Gloves - Assault (+26 Attack Power)",
        "legs": "Nethercobra Leg Armor (+50 AP, +12 crit)",
        "feet": "Enchant Boots - Dexterity (+12 Agility), or Cat's Swiftness on movement fights",
        "finger": "Enchant Ring - Stats (+4 all stats) — Enchanters only",
        "mainhand": "2H: Major Agility (+35 Agility); dual 1H stat sticks: +15 Agility each",
        "ranged": "Stabilized Eternium Scope (+28 crit rating)"
      },
      "brackets": [
        {
          "id": "preraid",
          "levelRange": [
            70,
            70
          ],
          "slots": {
            "head": [
              {
                "id": 28275,
                "name": "Beast Lord Helm",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Mechanar",
                  "boss": "Pathaleon the Calculator"
                },
                "note": "Beast Lord 4-piece bonus (Kill Command cooldown) is worth keeping through Phase 1"
              },
              {
                "id": 27414,
                "name": "Mok'Nathal Beast-Mask",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Auchenai Crypts",
                  "boss": "Exarch Maladaar"
                }
              }
            ],
            "neck": [
              {
                "id": 29381,
                "name": "Choker of Vile Intent",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "25 Badges of Justice — G'eras, Shattrath"
                }
              },
              {
                "id": 25562,
                "name": "Earthen Mark of Razing",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "zone": "Nagrand",
                  "boss": "Gurok the Usurper",
                  "detail": "Summoned group elite"
                }
              }
            ],
            "shoulder": [
              {
                "id": 27801,
                "name": "Beast Lord Mantle",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Steamvault",
                  "boss": "Warlord Kalithresh"
                }
              },
              {
                "id": 27434,
                "name": "Mantle of Perenolde",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Old Hillsbrad Foothills",
                  "boss": "Epoch Hunter"
                }
              }
            ],
            "back": [
              {
                "id": 24259,
                "name": "Vengeance Wrap",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring — BoE",
                  "profession": "Tailoring"
                }
              },
              {
                "id": 29382,
                "name": "Blood Knight War Cloak",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "25 Badges of Justice — G'eras, Shattrath"
                }
              },
              {
                "id": 27892,
                "name": "Cloak of the Inciter",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Shadow Labyrinth",
                  "boss": "Blackheart the Inciter"
                }
              }
            ],
            "chest": [
              {
                "id": 29525,
                "name": "Primalstrike Vest",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking — BoP, requires Elemental Leatherworking",
                  "profession": "Leatherworking"
                },
                "bop": true
              },
              {
                "id": 28228,
                "name": "Beast Lord Cuirass",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Botanica",
                  "boss": "Warp Splinter"
                }
              }
            ],
            "wrist": [
              {
                "id": 29527,
                "name": "Primalstrike Bracers",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking — BoP, requires Elemental Leatherworking",
                  "profession": "Leatherworking"
                },
                "bop": true
              },
              {
                "id": 29246,
                "name": "Nightfall Wristguards",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Old Hillsbrad Foothills",
                  "boss": "Epoch Hunter",
                  "detail": "Heroic only"
                }
              }
            ],
            "hands": [
              {
                "id": 27474,
                "name": "Beast Lord Handguards",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Shattered Halls",
                  "boss": "Warchief Kargath Bladefist"
                }
              },
              {
                "id": 25685,
                "name": "Fel Leather Gloves",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking",
                  "profession": "Leatherworking"
                }
              }
            ],
            "waist": [
              {
                "id": 29526,
                "name": "Primalstrike Belt",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking — BoP, requires Elemental Leatherworking",
                  "profession": "Leatherworking"
                },
                "bop": true
              },
              {
                "id": 29516,
                "name": "Ebon Netherscale Belt",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking — BoP, requires Dragonscale Leatherworking",
                  "profession": "Leatherworking"
                },
                "bop": true
              }
            ],
            "legs": [
              {
                "id": 27874,
                "name": "Beast Lord Leggings",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Steamvault",
                  "boss": "Warlord Kalithresh"
                }
              },
              {
                "id": 30538,
                "name": "Midnight Legguards",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Slave Pens",
                  "boss": "Quagmirran",
                  "detail": "Heroic only"
                }
              }
            ],
            "feet": [
              {
                "id": 25686,
                "name": "Fel Leather Boots",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking",
                  "profession": "Leatherworking"
                }
              },
              {
                "id": 29262,
                "name": "Boots of the Endless Hunt",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Botanica",
                  "boss": "Warp Splinter",
                  "detail": "Heroic only"
                }
              }
            ],
            "finger": [
              {
                "id": 31077,
                "name": "Slayer's Mark of the Redemption",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "quest",
                  "quest": "Dissension Amongst the Ranks...",
                  "zone": "Shadowmoon Valley",
                  "detail": "Group quest; separate Alliance and Horde versions"
                }
              },
              {
                "id": 27925,
                "name": "Ravenclaw Band",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sethekk Halls",
                  "boss": "Talon King Ikiss"
                }
              },
              {
                "id": 31326,
                "name": "Truestrike Ring",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "world-drop",
                  "detail": "BoE world drop"
                }
              }
            ],
            "trinket": [
              {
                "id": 29383,
                "name": "Bloodlust Brooch",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "41 Badges of Justice — G'eras, Shattrath"
                }
              },
              {
                "id": 28034,
                "name": "Hourglass of the Unraveller",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Black Morass",
                  "boss": "Temporus"
                }
              },
              {
                "id": 28288,
                "name": "Abacus of Violent Odds",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "The Mechanar",
                  "boss": "Pathaleon the Calculator"
                }
              }
            ],
            "mainhand": [
              {
                "id": 27846,
                "name": "Claw of the Watcher",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Auchenai Crypts",
                  "boss": "Shirrak the Dead Watcher",
                  "detail": "Heroic only"
                },
                "hand": "main",
                "weaponType": "Fist Weapon"
              },
              {
                "id": 27903,
                "name": "Sonic Spear",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Shadow Labyrinth",
                  "boss": "Murmur"
                },
                "note": "2H polearm — leave offhand empty",
                "hand": "two",
                "weaponType": "Polearm"
              }
            ],
            "offhand": [
              {
                "id": 29372,
                "name": "Void-Talon",
                "quality": "uncommon",
                "rank": 1,
                "source": {
                  "type": "vendor",
                  "detail": "Dealer Jadyan, Protectorate Watch Post",
                  "zone": "Netherstorm"
                },
                "note": "Cheap off-hand fist; empty when using a 2H",
                "hand": "off",
                "weaponType": "Fist Weapon"
              },
              {
                "id": 28315,
                "name": "Stormreaver Warblades",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Botanica",
                  "boss": "High Botanist Freywinn"
                },
                "hand": "off",
                "weaponType": "Fist Weapon"
              }
            ],
            "ranged": [
              {
                "id": 29351,
                "name": "Wrathtide Longbow",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Steamvault",
                  "boss": "Warlord Kalithresh",
                  "detail": "Heroic only"
                },
                "weaponType": "Bow"
              },
              {
                "id": 29152,
                "name": "Marksman's Bow",
                "quality": "epic",
                "rank": 2,
                "faction": "alliance",
                "source": {
                  "type": "reputation",
                  "detail": "Honor Hold — Exalted",
                  "zone": "Hellfire Peninsula"
                },
                "weaponType": "Bow"
              },
              {
                "id": 29151,
                "name": "Veteran's Musket",
                "quality": "epic",
                "rank": 3,
                "faction": "horde",
                "source": {
                  "type": "reputation",
                  "detail": "Thrallmar — Exalted",
                  "zone": "Hellfire Peninsula"
                },
                "weaponType": "Gun"
              }
            ]
          }
        },
        {
          "id": "p1",
          "levelRange": [
            70,
            70
          ],
          "slots": {
            "head": [
              {
                "id": 28275,
                "name": "Beast Lord Helm",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Mechanar",
                  "boss": "Pathaleon the Calculator"
                },
                "note": "Beast Lord 4-piece bonus (Kill Command cooldown) is worth keeping through Phase 1"
              }
            ],
            "neck": [
              {
                "id": 29381,
                "name": "Choker of Vile Intent",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "25 Badges of Justice — G'eras, Shattrath"
                }
              }
            ],
            "shoulder": [
              {
                "id": 27801,
                "name": "Beast Lord Mantle",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Steamvault",
                  "boss": "Warlord Kalithresh"
                }
              }
            ],
            "back": [
              {
                "id": 24259,
                "name": "Vengeance Wrap",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring — BoE",
                  "profession": "Tailoring"
                }
              },
              {
                "id": 29382,
                "name": "Blood Knight War Cloak",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "25 Badges of Justice — G'eras, Shattrath"
                }
              }
            ],
            "chest": [
              {
                "id": 28228,
                "name": "Beast Lord Cuirass",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Botanica",
                  "boss": "Warp Splinter"
                }
              },
              {
                "id": 29525,
                "name": "Primalstrike Vest",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking — BoP, requires Elemental Leatherworking",
                  "profession": "Leatherworking"
                },
                "bop": true
              }
            ],
            "wrist": [
              {
                "id": 29246,
                "name": "Nightfall Wristguards",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Old Hillsbrad Foothills",
                  "boss": "Epoch Hunter",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 29527,
                "name": "Primalstrike Bracers",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking — BoP, requires Elemental Leatherworking",
                  "profession": "Leatherworking"
                },
                "bop": true
              }
            ],
            "hands": [
              {
                "id": 27474,
                "name": "Beast Lord Handguards",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Shattered Halls",
                  "boss": "Warchief Kargath Bladefist"
                }
              }
            ],
            "waist": [
              {
                "id": 28828,
                "name": "Gronn-Stitched Girdle",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "Gruul the Dragonkiller"
                }
              },
              {
                "id": 28750,
                "name": "Girdle of Treachery",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Chess Event"
                }
              }
            ],
            "legs": [
              {
                "id": 28741,
                "name": "Skulker's Greaves",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Netherspite"
                }
              }
            ],
            "feet": [
              {
                "id": 28545,
                "name": "Edgewalker Longboots",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Moroes"
                }
              },
              {
                "id": 25686,
                "name": "Fel Leather Boots",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking",
                  "profession": "Leatherworking"
                }
              }
            ],
            "finger": [
              {
                "id": 28757,
                "name": "Ring of a Thousand Marks",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar"
                }
              },
              {
                "id": 28649,
                "name": "Garona's Signet Ring",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "The Curator"
                }
              },
              {
                "id": 28791,
                "name": "Ring of the Recalcitrant",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "quest",
                  "quest": "The Fall of Magtheridon",
                  "detail": "Magtheridon's Head turn-in; Alliance and Horde versions"
                }
              }
            ],
            "trinket": [
              {
                "id": 28830,
                "name": "Dragonspine Trophy",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "Gruul the Dragonkiller"
                }
              },
              {
                "id": 29383,
                "name": "Bloodlust Brooch",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "41 Badges of Justice — G'eras, Shattrath"
                }
              },
              {
                "id": 28034,
                "name": "Hourglass of the Unraveller",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "The Black Morass",
                  "boss": "Temporus"
                }
              }
            ],
            "mainhand": [
              {
                "id": 27846,
                "name": "Claw of the Watcher",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Auchenai Crypts",
                  "boss": "Shirrak the Dead Watcher",
                  "detail": "Heroic only"
                },
                "hand": "main",
                "weaponType": "Fist Weapon"
              },
              {
                "id": 28584,
                "name": "Big Bad Wolf's Paw",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Opera Event (The Big Bad Wolf)"
                },
                "hand": "main",
                "weaponType": "Fist Weapon"
              }
            ],
            "offhand": [
              {
                "id": 29372,
                "name": "Void-Talon",
                "quality": "uncommon",
                "rank": 1,
                "source": {
                  "type": "vendor",
                  "detail": "Dealer Jadyan, Protectorate Watch Post",
                  "zone": "Netherstorm"
                },
                "note": "Cheap off-hand fist; empty when using a 2H",
                "hand": "off",
                "weaponType": "Fist Weapon"
              },
              {
                "id": 28572,
                "name": "Blade of the Unrequited",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Opera Event"
                },
                "hand": "one",
                "weaponType": "Dagger"
              }
            ],
            "ranged": [
              {
                "id": 28772,
                "name": "Sunfury Bow of the Phoenix",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar"
                },
                "weaponType": "Bow"
              },
              {
                "id": 29351,
                "name": "Wrathtide Longbow",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Steamvault",
                  "boss": "Warlord Kalithresh",
                  "detail": "Heroic only"
                },
                "weaponType": "Bow"
              }
            ]
          }
        },
        {
          "id": "p5",
          "levelRange": [
            70,
            70
          ],
          "slots": {
            "head": [
              {
                "id": 34333,
                "name": "Coif of Alleria",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                }
              }
            ],
            "neck": [
              {
                "id": 34177,
                "name": "Clutch of Demise",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Brutallus"
                }
              }
            ],
            "shoulder": [
              {
                "id": 31006,
                "name": "Gronnstalker's Spaulders",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Mother Shahraz",
                  "detail": "Tier 6 token"
                }
              }
            ],
            "back": [
              {
                "id": 34241,
                "name": "Cloak of Unforgivable Sin",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                }
              }
            ],
            "chest": [
              {
                "id": 34397,
                "name": "Bladed Chaos Tunic",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "vendor",
                  "detail": "Yrma — Sunmote exchange",
                  "instance": "Sunwell Plateau"
                }
              },
              {
                "id": 31004,
                "name": "Gronnstalker's Chestguard",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Illidan Stormrage",
                  "detail": "Tier 6 token"
                }
              }
            ],
            "wrist": [
              {
                "id": 34443,
                "name": "Gronnstalker's Bracers",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kalecgos",
                  "detail": "Tier 6 token"
                }
              }
            ],
            "hands": [
              {
                "id": 34343,
                "name": "Thalassian Ranger Gauntlets",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                }
              },
              {
                "id": 31001,
                "name": "Gronnstalker's Gloves",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Hyjal Summit",
                  "boss": "Azgalor",
                  "detail": "Tier 6 token"
                }
              }
            ],
            "waist": [
              {
                "id": 34549,
                "name": "Gronnstalker's Belt",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Brutallus",
                  "detail": "Tier 6 token"
                }
              }
            ],
            "legs": [
              {
                "id": 34188,
                "name": "Leggings of the Immortal Night",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Felmyst"
                }
              },
              {
                "id": 31005,
                "name": "Gronnstalker's Leggings",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "The Illidari Council",
                  "detail": "Tier 6 token"
                }
              }
            ],
            "feet": [
              {
                "id": 34570,
                "name": "Gronnstalker's Boots",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Felmyst",
                  "detail": "Tier 6 token"
                }
              }
            ],
            "finger": [
              {
                "id": 34361,
                "name": "Hard Khorium Band",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Jewelcrafting — BoP — requires 375 Jewelcrafting",
                  "profession": "Jewelcrafting"
                }
              },
              {
                "id": 34189,
                "name": "Band of Ruinous Delight",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "The Eredar Twins"
                }
              },
              {
                "id": 34887,
                "name": "Angelista's Revenge",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "badge",
                  "detail": "60 Badges of Justice — G'eras, Shattrath; also Smith Hauthaa, Isle of Quel'Danas"
                }
              }
            ],
            "trinket": [
              {
                "id": 34427,
                "name": "Blackened Naaru Sliver",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "M'uru"
                }
              },
              {
                "id": 33831,
                "name": "Berserker's Call",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Zul'Aman",
                  "boss": "Zul'jin"
                }
              },
              {
                "id": 28830,
                "name": "Dragonspine Trophy",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "Gruul the Dragonkiller"
                }
              }
            ],
            "mainhand": [
              {
                "id": 34331,
                "name": "Hand of the Deceiver",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                },
                "hand": "main",
                "weaponType": "Fist Weapon"
              }
            ],
            "offhand": [
              {
                "id": 34329,
                "name": "Crux of the Apocalypse",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                },
                "hand": "one",
                "weaponType": "Dagger"
              }
            ],
            "ranged": [
              {
                "id": 34334,
                "name": "Thori'dal, the Stars' Fury",
                "quality": "legendary",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                },
                "note": "Legendary — needs no ammo",
                "weaponType": "Bow"
              },
              {
                "id": 30906,
                "name": "Bristleblitz Striker",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Hyjal Summit",
                  "boss": "Archimonde"
                },
                "weaponType": "Bow"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "survival",
      "name": "Survival",
      "role": "dps",
      "icon": "ability_hunter_swiftstrike",
      "statPriority": "Hit to 9% (142 rating) > Agility (stack hard — Expose Weakness scales with it) > Crit > Attack Power",
      "notes": "Survival stacks Agility far harder than BM/MM: Expose Weakness (raid attack power from your Agility) and Lightning Reflexes make Agility pieces — often leather — beat higher-AP mail. Hit cap is 9% (142 rating). Ranged weapon first; melee weapons are stat sticks. Played chiefly as a raid-utility spec supplying Expose Weakness to physical groups.",
      "enchants": {
        "head": "Glyph of Ferocity (+34 AP, +16 hit rating) — Cenarion Expedition Revered",
        "shoulder": "Greater Inscription of Vengeance (+30 AP, +10 crit) — Aldor Exalted, or Greater Inscription of the Blade — Scryers Exalted",
        "back": "Enchant Cloak - Greater Agility (+12 Agility)",
        "chest": "Enchant Chest - Exceptional Stats (+6 all stats)",
        "wrist": "Enchant Bracer - Assault (+24 Attack Power)",
        "hands": "Enchant Gloves - Assault (+26 Attack Power)",
        "legs": "Nethercobra Leg Armor (+50 AP, +12 crit)",
        "feet": "Enchant Boots - Dexterity (+12 Agility), or Cat's Swiftness on movement fights",
        "finger": "Enchant Ring - Stats (+4 all stats) — Enchanters only",
        "mainhand": "2H: Major Agility (+35 Agility); dual 1H stat sticks: +15 Agility each",
        "ranged": "Stabilized Eternium Scope (+28 crit rating)"
      },
      "brackets": [
        {
          "id": "preraid",
          "levelRange": [
            70,
            70
          ],
          "slots": {
            "head": [
              {
                "id": 28275,
                "name": "Beast Lord Helm",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Mechanar",
                  "boss": "Pathaleon the Calculator"
                },
                "note": "Beast Lord 4-piece bonus (Kill Command cooldown) is worth keeping through Phase 1"
              },
              {
                "id": 27414,
                "name": "Mok'Nathal Beast-Mask",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Auchenai Crypts",
                  "boss": "Exarch Maladaar"
                }
              }
            ],
            "neck": [
              {
                "id": 28343,
                "name": "Jagged Bark Pendant",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Botanica",
                  "boss": "Warp Splinter"
                }
              },
              {
                "id": 29381,
                "name": "Choker of Vile Intent",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "25 Badges of Justice — G'eras, Shattrath"
                }
              }
            ],
            "shoulder": [
              {
                "id": 27801,
                "name": "Beast Lord Mantle",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Steamvault",
                  "boss": "Warlord Kalithresh"
                }
              },
              {
                "id": 27434,
                "name": "Mantle of Perenolde",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Old Hillsbrad Foothills",
                  "boss": "Epoch Hunter"
                }
              }
            ],
            "back": [
              {
                "id": 29382,
                "name": "Blood Knight War Cloak",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "25 Badges of Justice — G'eras, Shattrath"
                }
              },
              {
                "id": 24259,
                "name": "Vengeance Wrap",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring — BoE",
                  "profession": "Tailoring"
                }
              }
            ],
            "chest": [
              {
                "id": 28228,
                "name": "Beast Lord Cuirass",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Botanica",
                  "boss": "Warp Splinter"
                }
              },
              {
                "id": 29525,
                "name": "Primalstrike Vest",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking — BoP, requires Elemental Leatherworking",
                  "profession": "Leatherworking"
                },
                "bop": true
              }
            ],
            "wrist": [
              {
                "id": 25697,
                "name": "Felstalker Bracers",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking",
                  "profession": "Leatherworking"
                }
              },
              {
                "id": 29246,
                "name": "Nightfall Wristguards",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Old Hillsbrad Foothills",
                  "boss": "Epoch Hunter",
                  "detail": "Heroic only"
                }
              }
            ],
            "hands": [
              {
                "id": 27474,
                "name": "Beast Lord Handguards",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Shattered Halls",
                  "boss": "Warchief Kargath Bladefist"
                }
              },
              {
                "id": 25685,
                "name": "Fel Leather Gloves",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking",
                  "profession": "Leatherworking"
                }
              }
            ],
            "waist": [
              {
                "id": 27760,
                "name": "Dunewind Sash",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Underbog",
                  "boss": "Ghaz'an",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 29526,
                "name": "Primalstrike Belt",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking — BoP, requires Elemental Leatherworking",
                  "profession": "Leatherworking"
                },
                "bop": true
              }
            ],
            "legs": [
              {
                "id": 27837,
                "name": "Wastewalker Leggings",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Mana-Tombs",
                  "boss": "Nexus-Prince Shaffar",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 30538,
                "name": "Midnight Legguards",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Slave Pens",
                  "boss": "Quagmirran",
                  "detail": "Heroic only"
                }
              }
            ],
            "feet": [
              {
                "id": 29248,
                "name": "Shadowstep Striders",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Arcatraz",
                  "boss": "Harbinger Skyriss",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 25686,
                "name": "Fel Leather Boots",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking",
                  "profession": "Leatherworking"
                }
              }
            ],
            "finger": [
              {
                "id": 31077,
                "name": "Slayer's Mark of the Redemption",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "quest",
                  "quest": "Dissension Amongst the Ranks...",
                  "zone": "Shadowmoon Valley",
                  "detail": "Group quest; separate Alliance and Horde versions"
                }
              },
              {
                "id": 27925,
                "name": "Ravenclaw Band",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sethekk Halls",
                  "boss": "Talon King Ikiss"
                }
              },
              {
                "id": 31326,
                "name": "Truestrike Ring",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "world-drop",
                  "detail": "BoE world drop"
                }
              }
            ],
            "trinket": [
              {
                "id": 29383,
                "name": "Bloodlust Brooch",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "41 Badges of Justice — G'eras, Shattrath"
                }
              },
              {
                "id": 28034,
                "name": "Hourglass of the Unraveller",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Black Morass",
                  "boss": "Temporus"
                }
              },
              {
                "id": 28288,
                "name": "Abacus of Violent Odds",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "The Mechanar",
                  "boss": "Pathaleon the Calculator"
                }
              }
            ],
            "mainhand": [
              {
                "id": 27846,
                "name": "Claw of the Watcher",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Auchenai Crypts",
                  "boss": "Shirrak the Dead Watcher",
                  "detail": "Heroic only"
                },
                "hand": "main",
                "weaponType": "Fist Weapon"
              },
              {
                "id": 27903,
                "name": "Sonic Spear",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Shadow Labyrinth",
                  "boss": "Murmur"
                },
                "note": "2H polearm — leave offhand empty",
                "hand": "two",
                "weaponType": "Polearm"
              }
            ],
            "offhand": [
              {
                "id": 29372,
                "name": "Void-Talon",
                "quality": "uncommon",
                "rank": 1,
                "source": {
                  "type": "vendor",
                  "detail": "Dealer Jadyan, Protectorate Watch Post",
                  "zone": "Netherstorm"
                },
                "note": "Cheap off-hand fist; empty when using a 2H",
                "hand": "off",
                "weaponType": "Fist Weapon"
              },
              {
                "id": 28315,
                "name": "Stormreaver Warblades",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Botanica",
                  "boss": "High Botanist Freywinn"
                },
                "hand": "off",
                "weaponType": "Fist Weapon"
              }
            ],
            "ranged": [
              {
                "id": 29351,
                "name": "Wrathtide Longbow",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Steamvault",
                  "boss": "Warlord Kalithresh",
                  "detail": "Heroic only"
                },
                "weaponType": "Bow"
              },
              {
                "id": 29152,
                "name": "Marksman's Bow",
                "quality": "epic",
                "rank": 2,
                "faction": "alliance",
                "source": {
                  "type": "reputation",
                  "detail": "Honor Hold — Exalted",
                  "zone": "Hellfire Peninsula"
                },
                "weaponType": "Bow"
              },
              {
                "id": 29151,
                "name": "Veteran's Musket",
                "quality": "epic",
                "rank": 3,
                "faction": "horde",
                "source": {
                  "type": "reputation",
                  "detail": "Thrallmar — Exalted",
                  "zone": "Hellfire Peninsula"
                },
                "weaponType": "Gun"
              }
            ]
          }
        },
        {
          "id": "p1",
          "levelRange": [
            70,
            70
          ],
          "slots": {
            "head": [
              {
                "id": 28275,
                "name": "Beast Lord Helm",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Mechanar",
                  "boss": "Pathaleon the Calculator"
                },
                "note": "Beast Lord 4-piece bonus (Kill Command cooldown) is worth keeping through Phase 1"
              }
            ],
            "neck": [
              {
                "id": 28343,
                "name": "Jagged Bark Pendant",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Botanica",
                  "boss": "Warp Splinter"
                }
              },
              {
                "id": 29381,
                "name": "Choker of Vile Intent",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "25 Badges of Justice — G'eras, Shattrath"
                }
              }
            ],
            "shoulder": [
              {
                "id": 27801,
                "name": "Beast Lord Mantle",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Steamvault",
                  "boss": "Warlord Kalithresh"
                }
              }
            ],
            "back": [
              {
                "id": 29382,
                "name": "Blood Knight War Cloak",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "25 Badges of Justice — G'eras, Shattrath"
                }
              },
              {
                "id": 24259,
                "name": "Vengeance Wrap",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring — BoE",
                  "profession": "Tailoring"
                }
              }
            ],
            "chest": [
              {
                "id": 28228,
                "name": "Beast Lord Cuirass",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Botanica",
                  "boss": "Warp Splinter"
                }
              }
            ],
            "wrist": [
              {
                "id": 25697,
                "name": "Felstalker Bracers",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking",
                  "profession": "Leatherworking"
                }
              },
              {
                "id": 29246,
                "name": "Nightfall Wristguards",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Old Hillsbrad Foothills",
                  "boss": "Epoch Hunter",
                  "detail": "Heroic only"
                }
              }
            ],
            "hands": [
              {
                "id": 27474,
                "name": "Beast Lord Handguards",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Shattered Halls",
                  "boss": "Warchief Kargath Bladefist"
                }
              }
            ],
            "waist": [
              {
                "id": 28750,
                "name": "Girdle of Treachery",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Chess Event"
                }
              },
              {
                "id": 28828,
                "name": "Gronn-Stitched Girdle",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "Gruul the Dragonkiller"
                }
              }
            ],
            "legs": [
              {
                "id": 28741,
                "name": "Skulker's Greaves",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Netherspite"
                }
              }
            ],
            "feet": [
              {
                "id": 28545,
                "name": "Edgewalker Longboots",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Moroes"
                }
              }
            ],
            "finger": [
              {
                "id": 28791,
                "name": "Ring of the Recalcitrant",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "quest",
                  "quest": "The Fall of Magtheridon",
                  "detail": "Magtheridon's Head turn-in; Alliance and Horde versions"
                }
              },
              {
                "id": 28649,
                "name": "Garona's Signet Ring",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "The Curator"
                }
              },
              {
                "id": 28757,
                "name": "Ring of a Thousand Marks",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar"
                }
              }
            ],
            "trinket": [
              {
                "id": 28830,
                "name": "Dragonspine Trophy",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "Gruul the Dragonkiller"
                }
              },
              {
                "id": 29383,
                "name": "Bloodlust Brooch",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "41 Badges of Justice — G'eras, Shattrath"
                }
              },
              {
                "id": 28034,
                "name": "Hourglass of the Unraveller",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "The Black Morass",
                  "boss": "Temporus"
                }
              }
            ],
            "mainhand": [
              {
                "id": 28584,
                "name": "Big Bad Wolf's Paw",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Opera Event (The Big Bad Wolf)"
                },
                "hand": "main",
                "weaponType": "Fist Weapon"
              },
              {
                "id": 27846,
                "name": "Claw of the Watcher",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Auchenai Crypts",
                  "boss": "Shirrak the Dead Watcher",
                  "detail": "Heroic only"
                },
                "hand": "main",
                "weaponType": "Fist Weapon"
              }
            ],
            "offhand": [
              {
                "id": 28572,
                "name": "Blade of the Unrequited",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Opera Event"
                },
                "hand": "one",
                "weaponType": "Dagger"
              },
              {
                "id": 29372,
                "name": "Void-Talon",
                "quality": "uncommon",
                "rank": 2,
                "source": {
                  "type": "vendor",
                  "detail": "Dealer Jadyan, Protectorate Watch Post",
                  "zone": "Netherstorm"
                },
                "note": "Cheap off-hand fist; empty when using a 2H",
                "hand": "off",
                "weaponType": "Fist Weapon"
              }
            ],
            "ranged": [
              {
                "id": 28772,
                "name": "Sunfury Bow of the Phoenix",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar"
                },
                "weaponType": "Bow"
              },
              {
                "id": 29351,
                "name": "Wrathtide Longbow",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Steamvault",
                  "boss": "Warlord Kalithresh",
                  "detail": "Heroic only"
                },
                "weaponType": "Bow"
              }
            ]
          }
        },
        {
          "id": "p5",
          "levelRange": [
            70,
            70
          ],
          "slots": {
            "head": [
              {
                "id": 34333,
                "name": "Coif of Alleria",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                }
              }
            ],
            "neck": [
              {
                "id": 34177,
                "name": "Clutch of Demise",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Brutallus"
                }
              }
            ],
            "shoulder": [
              {
                "id": 31006,
                "name": "Gronnstalker's Spaulders",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Mother Shahraz",
                  "detail": "Tier 6 token"
                }
              }
            ],
            "back": [
              {
                "id": 34241,
                "name": "Cloak of Unforgivable Sin",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                }
              }
            ],
            "chest": [
              {
                "id": 34397,
                "name": "Bladed Chaos Tunic",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "vendor",
                  "detail": "Yrma — Sunmote exchange",
                  "instance": "Sunwell Plateau"
                }
              },
              {
                "id": 31004,
                "name": "Gronnstalker's Chestguard",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Illidan Stormrage",
                  "detail": "Tier 6 token"
                }
              }
            ],
            "wrist": [
              {
                "id": 34443,
                "name": "Gronnstalker's Bracers",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kalecgos",
                  "detail": "Tier 6 token"
                }
              }
            ],
            "hands": [
              {
                "id": 34343,
                "name": "Thalassian Ranger Gauntlets",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                }
              },
              {
                "id": 31001,
                "name": "Gronnstalker's Gloves",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Hyjal Summit",
                  "boss": "Azgalor",
                  "detail": "Tier 6 token"
                }
              }
            ],
            "waist": [
              {
                "id": 34549,
                "name": "Gronnstalker's Belt",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Brutallus",
                  "detail": "Tier 6 token"
                }
              }
            ],
            "legs": [
              {
                "id": 34188,
                "name": "Leggings of the Immortal Night",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Felmyst"
                }
              },
              {
                "id": 31005,
                "name": "Gronnstalker's Leggings",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "The Illidari Council",
                  "detail": "Tier 6 token"
                }
              }
            ],
            "feet": [
              {
                "id": 34570,
                "name": "Gronnstalker's Boots",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Felmyst",
                  "detail": "Tier 6 token"
                }
              }
            ],
            "finger": [
              {
                "id": 34361,
                "name": "Hard Khorium Band",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Jewelcrafting — BoP — requires 375 Jewelcrafting",
                  "profession": "Jewelcrafting"
                }
              },
              {
                "id": 34887,
                "name": "Angelista's Revenge",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "60 Badges of Justice — G'eras, Shattrath; also Smith Hauthaa, Isle of Quel'Danas"
                }
              },
              {
                "id": 34189,
                "name": "Band of Ruinous Delight",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "The Eredar Twins"
                }
              }
            ],
            "trinket": [
              {
                "id": 34427,
                "name": "Blackened Naaru Sliver",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "M'uru"
                }
              },
              {
                "id": 33831,
                "name": "Berserker's Call",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Zul'Aman",
                  "boss": "Zul'jin"
                }
              },
              {
                "id": 28830,
                "name": "Dragonspine Trophy",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "Gruul the Dragonkiller"
                }
              }
            ],
            "mainhand": [
              {
                "id": 34183,
                "name": "Shivering Felspine",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": null,
                  "detail": "Trash drop (BoE)"
                },
                "note": "2H polearm — leave offhand empty",
                "hand": "two",
                "weaponType": "Polearm"
              },
              {
                "id": 34331,
                "name": "Hand of the Deceiver",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                },
                "hand": "main",
                "weaponType": "Fist Weapon"
              }
            ],
            "ranged": [
              {
                "id": 34334,
                "name": "Thori'dal, the Stars' Fury",
                "quality": "legendary",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                },
                "note": "Legendary — needs no ammo",
                "weaponType": "Bow"
              },
              {
                "id": 30906,
                "name": "Bristleblitz Striker",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Hyjal Summit",
                  "boss": "Archimonde"
                },
                "weaponType": "Bow"
              }
            ]
          }
        }
      ]
    }
  ]
});
