WOWDATA.register({
  "kind": "bis",
  "expansion": "tbc",
  "class": "mage",
  "className": "Mage",
  "classColor": "#69CCF0",
  "specs": [
    {
      "id": "fire",
      "name": "Fire",
      "role": "dps",
      "icon": "spell_fire_firebolt02",
      "statPriority": "Spell Hit (16% cap / 202 rating; ~13% with Elemental Precision) > Spell Damage > Spell Crit > Spell Haste > Intellect",
      "notes": "Raid-boss spell hit cap is 16% (202 rating); Elemental Precision 3/3 cuts that to 13% (~164 rating). Spell damage and crit are the payoff stats — crit feeds Ignite rolls — while haste is Fire's weakest stat until Sunwell-level gear, where it finally overtakes crit. Keep the Spellfire 2-piece (Wrath of Spellfire) from pre-raid deep into Phase 1.",
      "enchants": {
        "head": "Glyph of Power (+22 spell damage, +14 spell hit) — The Sha'tar Revered",
        "shoulder": "Greater Inscription of Discipline (Aldor Exalted) or Greater Inscription of the Orb (Scryers Exalted)",
        "chest": "Exceptional Stats (+6 all stats)",
        "wrist": "Spellpower (+15 spell damage)",
        "hands": "Major Spellpower (+20 spell damage)",
        "legs": "Runic Spellthread (+35 spell damage, +20 stamina)",
        "feet": "Boar's Speed (+9 stamina, minor run speed)",
        "finger": "Spellpower (+12 spell damage) — Enchanters only",
        "mainhand": "Major Spellpower (+40 spell damage)"
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
                "id": 24266,
                "name": "Spellstrike Hood",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE) — Spellstrike set",
                  "profession": "Tailoring"
                }
              },
              {
                "id": 28193,
                "name": "Mana-Etched Crown",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Black Morass",
                  "boss": "Aeonus"
                }
              },
              {
                "id": 28278,
                "name": "Incanter's Cowl",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "The Mechanar",
                  "boss": "Pathaleon the Calculator"
                }
              }
            ],
            "neck": [
              {
                "id": 28134,
                "name": "Brooch of Heightened Potential",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Shadow Labyrinth",
                  "boss": "Blackheart the Inciter"
                }
              }
            ],
            "shoulder": [
              {
                "id": 27994,
                "name": "Mantle of Three Terrors",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Black Morass",
                  "boss": "Chrono Lord Deja"
                }
              },
              {
                "id": 27796,
                "name": "Mana-Etched Spaulders",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Slave Pens",
                  "boss": "Quagmirran",
                  "detail": "Heroic only"
                }
              }
            ],
            "back": [
              {
                "id": 27981,
                "name": "Sethekk Oracle Cloak",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sethekk Halls",
                  "boss": "Talon King Ikiss"
                }
              },
              {
                "id": 29369,
                "name": "Shawl of Shifting Probabilities",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "25 Badge of Justice — G'eras, Shattrath City"
                }
              }
            ],
            "chest": [
              {
                "id": 21848,
                "name": "Spellfire Robe",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoP) — Spellfire set",
                  "profession": "Tailoring"
                },
                "note": "Spellfire 2-piece is core to the pre-raid Fire setup",
                "bop": true
              },
              {
                "id": 28191,
                "name": "Mana-Etched Vestments",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Old Hillsbrad Foothills",
                  "boss": "Epoch Hunter",
                  "detail": "Heroic only"
                }
              }
            ],
            "wrist": [
              {
                "id": 29240,
                "name": "Bands of Negation",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Mana-Tombs",
                  "boss": "Nexus-Prince Shaffar",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 24250,
                "name": "Bracers of Havok",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE)",
                  "profession": "Tailoring"
                }
              }
            ],
            "hands": [
              {
                "id": 21847,
                "name": "Spellfire Gloves",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoP) — Spellfire set",
                  "profession": "Tailoring"
                },
                "bop": true
              },
              {
                "id": 27508,
                "name": "Incanter's Gloves",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Steamvault",
                  "boss": "Hydromancer Thespia",
                  "detail": "Heroic only"
                }
              }
            ],
            "waist": [
              {
                "id": 21846,
                "name": "Spellfire Belt",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoP) — Spellfire set",
                  "profession": "Tailoring"
                },
                "bop": true
              },
              {
                "id": 24256,
                "name": "Girdle of Ruination",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE)",
                  "profession": "Tailoring"
                }
              }
            ],
            "legs": [
              {
                "id": 24262,
                "name": "Spellstrike Pants",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE) — Spellstrike set",
                  "profession": "Tailoring"
                }
              },
              {
                "id": 30532,
                "name": "Kirin Tor Master's Trousers",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Shadow Labyrinth",
                  "boss": "Murmur",
                  "detail": "Heroic only"
                }
              }
            ],
            "feet": [
              {
                "id": 28406,
                "name": "Sigil-Laced Boots",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Arcatraz",
                  "boss": "Harbinger Skyriss"
                }
              },
              {
                "id": 29258,
                "name": "Boots of Ethereal Manipulation",
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
                "id": 28227,
                "name": "Sparking Arcanite Ring",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Old Hillsbrad Foothills",
                  "boss": "Epoch Hunter",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 29172,
                "name": "Ashyen's Gift",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "reputation",
                  "detail": "Cenarion Expedition — Exalted"
                },
                "note": "Cheap spell hit to reach cap"
              },
              {
                "id": 29367,
                "name": "Ring of Cryptic Dreams",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "badge",
                  "detail": "25 Badge of Justice — G'eras, Shattrath City"
                }
              }
            ],
            "trinket": [
              {
                "id": 27683,
                "name": "Quagmirran's Eye",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Slave Pens",
                  "boss": "Quagmirran",
                  "detail": "Heroic only"
                },
                "note": "Haste proc — strong for Fire"
              },
              {
                "id": 29370,
                "name": "Icon of the Silver Crescent",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "41 Badge of Justice — G'eras, Shattrath City"
                }
              }
            ],
            "mainhand": [
              {
                "id": 23554,
                "name": "Eternium Runed Blade",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Blacksmithing (BoE)",
                  "profession": "Blacksmithing"
                },
                "hand": "main",
                "weaponType": "Dagger"
              },
              {
                "id": 29153,
                "name": "Blade of the Archmage",
                "quality": "epic",
                "rank": 2,
                "faction": "alliance",
                "source": {
                  "type": "reputation",
                  "detail": "Honor Hold — Exalted"
                },
                "hand": "main",
                "weaponType": "Sword"
              },
              {
                "id": 29155,
                "name": "Stormcaller",
                "quality": "epic",
                "rank": 3,
                "faction": "horde",
                "source": {
                  "type": "reputation",
                  "detail": "Thrallmar — Exalted"
                },
                "hand": "main",
                "weaponType": "Sword"
              }
            ],
            "offhand": [
              {
                "id": 29270,
                "name": "Flametongue Seal",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "25 Badge of Justice — G'eras, Shattrath City"
                },
                "hand": "held"
              },
              {
                "id": 28412,
                "name": "Lamp of Peaceful Radiance",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Arcatraz",
                  "boss": "Harbinger Skyriss"
                },
                "hand": "held"
              }
            ],
            "ranged": [
              {
                "id": 28386,
                "name": "Nether Core's Control Rod",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Arcatraz",
                  "boss": "Dalliah the Doomsayer"
                },
                "weaponType": "Wand"
              },
              {
                "id": 29350,
                "name": "The Black Stalk",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Underbog",
                  "boss": "The Black Stalker",
                  "detail": "Heroic only"
                },
                "weaponType": "Wand"
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
                "id": 29076,
                "name": "Collar of the Aldor",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar",
                  "detail": "Tier 4 helm token"
                }
              },
              {
                "id": 24266,
                "name": "Spellstrike Hood",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE) — Spellstrike set",
                  "profession": "Tailoring"
                },
                "note": "Holds up well if the token eludes you"
              }
            ],
            "neck": [
              {
                "id": 28530,
                "name": "Brooch of Unquenchable Fury",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Moroes"
                }
              },
              {
                "id": 28762,
                "name": "Adornment of Stolen Souls",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar"
                }
              }
            ],
            "shoulder": [
              {
                "id": 29079,
                "name": "Pauldrons of the Aldor",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "High King Maulgar",
                  "detail": "Tier 4 shoulder token"
                }
              },
              {
                "id": 27796,
                "name": "Mana-Etched Spaulders",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Slave Pens",
                  "boss": "Quagmirran",
                  "detail": "Heroic only"
                }
              }
            ],
            "back": [
              {
                "id": 28766,
                "name": "Ruby Drape of the Mysticant",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar"
                }
              },
              {
                "id": 27981,
                "name": "Sethekk Oracle Cloak",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sethekk Halls",
                  "boss": "Talon King Ikiss"
                }
              }
            ],
            "chest": [
              {
                "id": 21848,
                "name": "Spellfire Robe",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoP) — Spellfire set",
                  "profession": "Tailoring"
                },
                "note": "Keep for the Spellfire 2-piece all phase",
                "bop": true
              },
              {
                "id": 28602,
                "name": "Robe of the Elder Scribes",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Nightbane"
                }
              }
            ],
            "wrist": [
              {
                "id": 28515,
                "name": "Bands of Nefarious Deeds",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Maiden of Virtue"
                }
              },
              {
                "id": 29240,
                "name": "Bands of Negation",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Mana-Tombs",
                  "boss": "Nexus-Prince Shaffar",
                  "detail": "Heroic only"
                }
              }
            ],
            "hands": [
              {
                "id": 21847,
                "name": "Spellfire Gloves",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoP) — Spellfire set",
                  "profession": "Tailoring"
                },
                "note": "Spellfire 2-piece",
                "bop": true
              },
              {
                "id": 28780,
                "name": "Soul-Eater's Handwraps",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Magtheridon's Lair",
                  "boss": "Magtheridon"
                }
              }
            ],
            "waist": [
              {
                "id": 21846,
                "name": "Spellfire Belt",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoP) — Spellfire set",
                  "profession": "Tailoring"
                },
                "bop": true
              },
              {
                "id": 30673,
                "name": "Inferno Waist Cord",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "detail": "Trash drop"
                }
              }
            ],
            "legs": [
              {
                "id": 29078,
                "name": "Legwraps of the Aldor",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "Gruul the Dragonkiller",
                  "detail": "Tier 4 leg token"
                }
              },
              {
                "id": 24262,
                "name": "Spellstrike Pants",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE) — Spellstrike set",
                  "profession": "Tailoring"
                }
              }
            ],
            "feet": [
              {
                "id": 28517,
                "name": "Boots of Foretelling",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Maiden of Virtue"
                }
              },
              {
                "id": 28585,
                "name": "Ruby Slippers",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Opera Event"
                }
              }
            ],
            "finger": [
              {
                "id": 28793,
                "name": "Band of Crimson Fury",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "quest",
                  "quest": "The Fall of Magtheridon",
                  "detail": "Turn in Magtheridon's Head to A'dal in Shattrath"
                }
              },
              {
                "id": 29287,
                "name": "Violet Signet of the Archmage",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "reputation",
                  "detail": "The Violet Eye — Exalted (Karazhan)"
                }
              },
              {
                "id": 28227,
                "name": "Sparking Arcanite Ring",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Old Hillsbrad Foothills",
                  "boss": "Epoch Hunter",
                  "detail": "Heroic only"
                }
              }
            ],
            "trinket": [
              {
                "id": 29370,
                "name": "Icon of the Silver Crescent",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "41 Badge of Justice — G'eras, Shattrath City"
                }
              },
              {
                "id": 27683,
                "name": "Quagmirran's Eye",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Slave Pens",
                  "boss": "Quagmirran",
                  "detail": "Heroic only"
                },
                "note": "Haste proc — strong for Fire"
              },
              {
                "id": 28785,
                "name": "The Lightning Capacitor",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Terestian Illhoof"
                }
              }
            ],
            "mainhand": [
              {
                "id": 28770,
                "name": "Nathrezim Mindblade",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar"
                },
                "hand": "main",
                "weaponType": "Dagger"
              },
              {
                "id": 28802,
                "name": "Bloodmaw Magus-Blade",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "Gruul the Dragonkiller"
                },
                "hand": "main",
                "weaponType": "Sword"
              }
            ],
            "offhand": [
              {
                "id": 28734,
                "name": "Jewel of Infinite Possibilities",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Netherspite"
                },
                "hand": "held"
              },
              {
                "id": 28412,
                "name": "Lamp of Peaceful Radiance",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Arcatraz",
                  "boss": "Harbinger Skyriss"
                },
                "hand": "held"
              }
            ],
            "ranged": [
              {
                "id": 28673,
                "name": "Tirisfal Wand of Ascendancy",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Shade of Aran"
                },
                "weaponType": "Wand"
              },
              {
                "id": 28783,
                "name": "Eredar Wand of Obliteration",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Magtheridon's Lair",
                  "boss": "Magtheridon"
                },
                "weaponType": "Wand"
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
                "id": 34340,
                "name": "Dark Conjuror's Collar",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                }
              },
              {
                "id": 32525,
                "name": "Cowl of the Illidari High Lord",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Illidan Stormrage"
                }
              }
            ],
            "neck": [
              {
                "id": 34204,
                "name": "Amulet of Unfettered Magics",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Eredar Twins"
                }
              },
              {
                "id": 34359,
                "name": "Pendant of Sunfire",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Jewelcrafting (BoP)",
                  "profession": "Jewelcrafting"
                },
                "bop": true
              }
            ],
            "shoulder": [
              {
                "id": 31059,
                "name": "Mantle of the Tempest",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Mother Shahraz",
                  "detail": "Tier 6 shoulder token"
                },
                "note": "Tier 6"
              },
              {
                "id": 34210,
                "name": "Amice of the Convoker",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Eredar Twins"
                }
              }
            ],
            "back": [
              {
                "id": 34242,
                "name": "Tattered Cape of Antonidas",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                }
              },
              {
                "id": 32331,
                "name": "Cloak of the Illidari Council",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Illidari Council"
                }
              }
            ],
            "chest": [
              {
                "id": 34364,
                "name": "Sunfire Robe",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoP)",
                  "profession": "Tailoring"
                },
                "note": "Best chest by a wide margin — requires Tailoring",
                "bop": true
              },
              {
                "id": 34399,
                "name": "Robes of Ghostly Hatred",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "vendor",
                  "detail": "Sunmote + Robes of Faltered Light exchange — Yrma, Isle of Quel'Danas"
                }
              }
            ],
            "wrist": [
              {
                "id": 34447,
                "name": "Bracers of the Tempest",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kalecgos"
                }
              },
              {
                "id": 32586,
                "name": "Bracers of Nimble Thought",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE)",
                  "profession": "Tailoring"
                }
              }
            ],
            "hands": [
              {
                "id": 34344,
                "name": "Handguards of Defiled Worlds",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                }
              },
              {
                "id": 34406,
                "name": "Gloves of Tyri's Power",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "vendor",
                  "detail": "Sunmote + Handguards of the Dawn exchange — Yrma, Isle of Quel'Danas"
                }
              }
            ],
            "waist": [
              {
                "id": 34557,
                "name": "Belt of the Tempest",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Brutallus"
                }
              },
              {
                "id": 30038,
                "name": "Belt of Blasting",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE)",
                  "profession": "Tailoring"
                }
              }
            ],
            "legs": [
              {
                "id": 34181,
                "name": "Leggings of Calamity",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Brutallus"
                }
              },
              {
                "id": 34386,
                "name": "Pantaloons of Growing Strife",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "vendor",
                  "detail": "Sunmote + Pantaloons of Calming Strife exchange — Yrma, Isle of Quel'Danas"
                }
              }
            ],
            "feet": [
              {
                "id": 34574,
                "name": "Boots of the Tempest",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Felmyst"
                }
              },
              {
                "id": 32239,
                "name": "Slippers of the Seacaller",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "High Warlord Naj'entus"
                }
              }
            ],
            "finger": [
              {
                "id": 34362,
                "name": "Loop of Forged Power",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Jewelcrafting (BoE)",
                  "profession": "Jewelcrafting"
                }
              },
              {
                "id": 34230,
                "name": "Ring of Omnipotence",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "M'uru"
                }
              },
              {
                "id": 32527,
                "name": "Ring of Ancient Knowledge",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "detail": "Trash drop"
                }
              }
            ],
            "trinket": [
              {
                "id": 34429,
                "name": "Shifting Naaru Sliver",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "M'uru"
                },
                "note": "Haste on-use — pairs with cooldowns"
              },
              {
                "id": 32483,
                "name": "The Skull of Gul'dan",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Illidan Stormrage"
                }
              },
              {
                "id": 33829,
                "name": "Hex Shrunken Head",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Zul'Aman",
                  "boss": "Hex Lord Malacrass"
                }
              }
            ],
            "mainhand": [
              {
                "id": 34336,
                "name": "Sunflare",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                },
                "hand": "main",
                "weaponType": "Dagger"
              },
              {
                "id": 35102,
                "name": "Brutal Gladiator's Spellblade",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "pvp",
                  "detail": "Season 4 Arena — rating required"
                },
                "hand": "main",
                "weaponType": "Dagger"
              },
              {
                "id": 30910,
                "name": "Tempest of Chaos",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Hyjal Summit",
                  "boss": "Archimonde"
                },
                "hand": "main",
                "weaponType": "Sword"
              }
            ],
            "offhand": [
              {
                "id": 34179,
                "name": "Heart of the Pit",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Brutallus"
                },
                "hand": "held"
              },
              {
                "id": 30872,
                "name": "Chronicle of Dark Secrets",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Hyjal Summit",
                  "boss": "Rage Winterchill"
                },
                "hand": "held"
              }
            ],
            "ranged": [
              {
                "id": 34347,
                "name": "Wand of the Demonsoul",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "detail": "Trash drop"
                },
                "weaponType": "Wand"
              },
              {
                "id": 29982,
                "name": "Wand of the Forgotten Star",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Tempest Keep: The Eye",
                  "boss": "High Astromancer Solarian"
                },
                "weaponType": "Wand"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "arcane",
      "name": "Arcane",
      "role": "dps",
      "icon": "spell_holy_magicalsentry",
      "statPriority": "Spell Hit (Arcane spells capped at 6% / 76 rating with Arcane Focus) > Spell Damage > Spell Haste > Spell Crit > Intellect",
      "notes": "Same 16% (202 rating) boss hit cap, but Arcane Focus 5/5 means Arcane Blast/Missiles only need 6% (76 rating) — carry more hit if you weave Fireball or Scorch. Arcane's lists overlap heavily with Fire; where they differ it is because Arcane values haste well above crit (haste converts directly into extra Arcane Blasts, mana permitting), so haste pieces like Robes of Ghostly Hatred and Gloves of Tyri's Power win slots where Fire takes crit. The Tirisfal 2-piece stays even in the Sunwell list to empower Arcane Blast.",
      "enchants": {
        "head": "Glyph of Power (+22 spell damage, +14 spell hit) — The Sha'tar Revered",
        "shoulder": "Greater Inscription of Discipline (Aldor Exalted) or Greater Inscription of the Orb (Scryers Exalted)",
        "chest": "Exceptional Stats (+6 all stats)",
        "wrist": "Spellpower (+15 spell damage)",
        "hands": "Major Spellpower (+20 spell damage)",
        "legs": "Runic Spellthread (+35 spell damage, +20 stamina)",
        "feet": "Boar's Speed (+9 stamina, minor run speed)",
        "finger": "Spellpower (+12 spell damage) — Enchanters only",
        "mainhand": "Major Spellpower (+40 spell damage)"
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
                "id": 28278,
                "name": "Incanter's Cowl",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Mechanar",
                  "boss": "Pathaleon the Calculator"
                },
                "note": "Crit/int with a meta socket — Arcane favors this over Spellstrike"
              },
              {
                "id": 28193,
                "name": "Mana-Etched Crown",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Black Morass",
                  "boss": "Aeonus"
                }
              },
              {
                "id": 24266,
                "name": "Spellstrike Hood",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE) — Spellstrike set",
                  "profession": "Tailoring"
                }
              }
            ],
            "neck": [
              {
                "id": 28134,
                "name": "Brooch of Heightened Potential",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Shadow Labyrinth",
                  "boss": "Blackheart the Inciter"
                }
              }
            ],
            "shoulder": [
              {
                "id": 27796,
                "name": "Mana-Etched Spaulders",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Slave Pens",
                  "boss": "Quagmirran",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 27994,
                "name": "Mantle of Three Terrors",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Black Morass",
                  "boss": "Chrono Lord Deja"
                }
              }
            ],
            "back": [
              {
                "id": 27981,
                "name": "Sethekk Oracle Cloak",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sethekk Halls",
                  "boss": "Talon King Ikiss"
                }
              },
              {
                "id": 29369,
                "name": "Shawl of Shifting Probabilities",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "25 Badge of Justice — G'eras, Shattrath City"
                }
              }
            ],
            "chest": [
              {
                "id": 21848,
                "name": "Spellfire Robe",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoP) — Spellfire set",
                  "profession": "Tailoring"
                },
                "note": "Spellfire 2-piece still worth it for Arcane",
                "bop": true
              },
              {
                "id": 28191,
                "name": "Mana-Etched Vestments",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Old Hillsbrad Foothills",
                  "boss": "Epoch Hunter",
                  "detail": "Heroic only"
                }
              }
            ],
            "wrist": [
              {
                "id": 29240,
                "name": "Bands of Negation",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Mana-Tombs",
                  "boss": "Nexus-Prince Shaffar",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 24250,
                "name": "Bracers of Havok",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE)",
                  "profession": "Tailoring"
                }
              }
            ],
            "hands": [
              {
                "id": 21847,
                "name": "Spellfire Gloves",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoP) — Spellfire set",
                  "profession": "Tailoring"
                },
                "bop": true
              },
              {
                "id": 27508,
                "name": "Incanter's Gloves",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Steamvault",
                  "boss": "Hydromancer Thespia",
                  "detail": "Heroic only"
                }
              }
            ],
            "waist": [
              {
                "id": 21846,
                "name": "Spellfire Belt",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoP) — Spellfire set",
                  "profession": "Tailoring"
                },
                "bop": true
              },
              {
                "id": 24256,
                "name": "Girdle of Ruination",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE)",
                  "profession": "Tailoring"
                }
              }
            ],
            "legs": [
              {
                "id": 30532,
                "name": "Kirin Tor Master's Trousers",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Shadow Labyrinth",
                  "boss": "Murmur",
                  "detail": "Heroic only"
                },
                "note": "Arcane pick — Fire prefers Spellstrike Pants"
              },
              {
                "id": 24262,
                "name": "Spellstrike Pants",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE) — Spellstrike set",
                  "profession": "Tailoring"
                }
              }
            ],
            "feet": [
              {
                "id": 28406,
                "name": "Sigil-Laced Boots",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Arcatraz",
                  "boss": "Harbinger Skyriss"
                }
              },
              {
                "id": 29258,
                "name": "Boots of Ethereal Manipulation",
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
                "id": 28227,
                "name": "Sparking Arcanite Ring",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Old Hillsbrad Foothills",
                  "boss": "Epoch Hunter",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 29172,
                "name": "Ashyen's Gift",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "reputation",
                  "detail": "Cenarion Expedition — Exalted"
                },
                "note": "Cheap spell hit to reach cap"
              },
              {
                "id": 29367,
                "name": "Ring of Cryptic Dreams",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "badge",
                  "detail": "25 Badge of Justice — G'eras, Shattrath City"
                }
              }
            ],
            "trinket": [
              {
                "id": 27683,
                "name": "Quagmirran's Eye",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Slave Pens",
                  "boss": "Quagmirran",
                  "detail": "Heroic only"
                },
                "note": "Haste proc — more Arcane Blasts per window"
              },
              {
                "id": 29370,
                "name": "Icon of the Silver Crescent",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "41 Badge of Justice — G'eras, Shattrath City"
                }
              }
            ],
            "mainhand": [
              {
                "id": 23554,
                "name": "Eternium Runed Blade",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Blacksmithing (BoE)",
                  "profession": "Blacksmithing"
                },
                "hand": "main",
                "weaponType": "Dagger"
              },
              {
                "id": 29153,
                "name": "Blade of the Archmage",
                "quality": "epic",
                "rank": 2,
                "faction": "alliance",
                "source": {
                  "type": "reputation",
                  "detail": "Honor Hold — Exalted"
                },
                "hand": "main",
                "weaponType": "Sword"
              },
              {
                "id": 29155,
                "name": "Stormcaller",
                "quality": "epic",
                "rank": 3,
                "faction": "horde",
                "source": {
                  "type": "reputation",
                  "detail": "Thrallmar — Exalted"
                },
                "hand": "main",
                "weaponType": "Sword"
              }
            ],
            "offhand": [
              {
                "id": 29271,
                "name": "Talisman of Kalecgos",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "25 Badge of Justice — G'eras, Shattrath City"
                },
                "hand": "held"
              },
              {
                "id": 28412,
                "name": "Lamp of Peaceful Radiance",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Arcatraz",
                  "boss": "Harbinger Skyriss"
                },
                "hand": "held"
              }
            ],
            "ranged": [
              {
                "id": 29350,
                "name": "The Black Stalk",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Underbog",
                  "boss": "The Black Stalker",
                  "detail": "Heroic only"
                },
                "weaponType": "Wand"
              },
              {
                "id": 28386,
                "name": "Nether Core's Control Rod",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Arcatraz",
                  "boss": "Dalliah the Doomsayer"
                },
                "weaponType": "Wand"
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
                "id": 29076,
                "name": "Collar of the Aldor",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar",
                  "detail": "Tier 4 helm token"
                }
              },
              {
                "id": 28278,
                "name": "Incanter's Cowl",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Mechanar",
                  "boss": "Pathaleon the Calculator"
                }
              }
            ],
            "neck": [
              {
                "id": 28762,
                "name": "Adornment of Stolen Souls",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar"
                },
                "note": "Arcane pick — Fire slightly prefers Brooch of Unquenchable Fury"
              },
              {
                "id": 28530,
                "name": "Brooch of Unquenchable Fury",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Moroes"
                }
              }
            ],
            "shoulder": [
              {
                "id": 29079,
                "name": "Pauldrons of the Aldor",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "High King Maulgar",
                  "detail": "Tier 4 shoulder token"
                }
              },
              {
                "id": 27796,
                "name": "Mana-Etched Spaulders",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Slave Pens",
                  "boss": "Quagmirran",
                  "detail": "Heroic only"
                }
              }
            ],
            "back": [
              {
                "id": 28766,
                "name": "Ruby Drape of the Mysticant",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar"
                }
              },
              {
                "id": 27981,
                "name": "Sethekk Oracle Cloak",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sethekk Halls",
                  "boss": "Talon King Ikiss"
                }
              }
            ],
            "chest": [
              {
                "id": 21848,
                "name": "Spellfire Robe",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoP) — Spellfire set",
                  "profession": "Tailoring"
                },
                "note": "Keep for the Spellfire 2-piece",
                "bop": true
              },
              {
                "id": 28602,
                "name": "Robe of the Elder Scribes",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Nightbane"
                }
              }
            ],
            "wrist": [
              {
                "id": 28515,
                "name": "Bands of Nefarious Deeds",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Maiden of Virtue"
                }
              },
              {
                "id": 29240,
                "name": "Bands of Negation",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Mana-Tombs",
                  "boss": "Nexus-Prince Shaffar",
                  "detail": "Heroic only"
                }
              }
            ],
            "hands": [
              {
                "id": 21847,
                "name": "Spellfire Gloves",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoP) — Spellfire set",
                  "profession": "Tailoring"
                },
                "note": "Spellfire 2-piece",
                "bop": true
              },
              {
                "id": 28780,
                "name": "Soul-Eater's Handwraps",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Magtheridon's Lair",
                  "boss": "Magtheridon"
                }
              }
            ],
            "waist": [
              {
                "id": 21846,
                "name": "Spellfire Belt",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoP) — Spellfire set",
                  "profession": "Tailoring"
                },
                "bop": true
              },
              {
                "id": 28799,
                "name": "Belt of Divine Inspiration",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "High King Maulgar"
                }
              }
            ],
            "legs": [
              {
                "id": 29078,
                "name": "Legwraps of the Aldor",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "Gruul the Dragonkiller",
                  "detail": "Tier 4 leg token"
                }
              },
              {
                "id": 28594,
                "name": "Trial-Fire Trousers",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Opera Event"
                }
              }
            ],
            "feet": [
              {
                "id": 28517,
                "name": "Boots of Foretelling",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Maiden of Virtue"
                }
              },
              {
                "id": 28406,
                "name": "Sigil-Laced Boots",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Arcatraz",
                  "boss": "Harbinger Skyriss"
                }
              }
            ],
            "finger": [
              {
                "id": 28793,
                "name": "Band of Crimson Fury",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "quest",
                  "quest": "The Fall of Magtheridon",
                  "detail": "Turn in Magtheridon's Head to A'dal in Shattrath"
                }
              },
              {
                "id": 29287,
                "name": "Violet Signet of the Archmage",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "reputation",
                  "detail": "The Violet Eye — Exalted (Karazhan)"
                }
              },
              {
                "id": 28227,
                "name": "Sparking Arcanite Ring",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Old Hillsbrad Foothills",
                  "boss": "Epoch Hunter",
                  "detail": "Heroic only"
                }
              }
            ],
            "trinket": [
              {
                "id": 29370,
                "name": "Icon of the Silver Crescent",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "41 Badge of Justice — G'eras, Shattrath City"
                }
              },
              {
                "id": 28785,
                "name": "The Lightning Capacitor",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Terestian Illhoof"
                },
                "note": "Scales with Arcane's high cast rate"
              },
              {
                "id": 27683,
                "name": "Quagmirran's Eye",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "The Slave Pens",
                  "boss": "Quagmirran",
                  "detail": "Heroic only"
                }
              }
            ],
            "mainhand": [
              {
                "id": 28770,
                "name": "Nathrezim Mindblade",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar"
                },
                "hand": "main",
                "weaponType": "Dagger"
              },
              {
                "id": 28802,
                "name": "Bloodmaw Magus-Blade",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "Gruul the Dragonkiller"
                },
                "hand": "main",
                "weaponType": "Sword"
              }
            ],
            "offhand": [
              {
                "id": 29271,
                "name": "Talisman of Kalecgos",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "25 Badge of Justice — G'eras, Shattrath City"
                },
                "note": "Cheap badge off-hand — pure damage",
                "hand": "held"
              },
              {
                "id": 28603,
                "name": "Talisman of Nightbane",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Nightbane"
                },
                "hand": "held"
              }
            ],
            "ranged": [
              {
                "id": 28783,
                "name": "Eredar Wand of Obliteration",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Magtheridon's Lair",
                  "boss": "Magtheridon"
                },
                "weaponType": "Wand"
              },
              {
                "id": 28673,
                "name": "Tirisfal Wand of Ascendancy",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Shade of Aran"
                },
                "weaponType": "Wand"
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
                "id": 30206,
                "name": "Cowl of Tirisfal",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Serpentshrine Cavern",
                  "boss": "Lady Vashj",
                  "detail": "Tier 5 helm token"
                },
                "note": "Kept for the Tirisfal 2-piece (empowered Arcane Blast)"
              },
              {
                "id": 34340,
                "name": "Dark Conjuror's Collar",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                }
              }
            ],
            "neck": [
              {
                "id": 34359,
                "name": "Pendant of Sunfire",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Jewelcrafting (BoP)",
                  "profession": "Jewelcrafting"
                },
                "bop": true
              },
              {
                "id": 34204,
                "name": "Amulet of Unfettered Magics",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Eredar Twins"
                }
              }
            ],
            "shoulder": [
              {
                "id": 30210,
                "name": "Mantle of Tirisfal",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Tempest Keep: The Eye",
                  "boss": "Void Reaver",
                  "detail": "Tier 5 shoulder token"
                },
                "note": "Tirisfal 2-piece partner"
              },
              {
                "id": 34393,
                "name": "Shoulderpads of Knowledge's Pursuit",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "vendor",
                  "detail": "Sunmote + Shawl of Wonderment exchange — Yrma, Isle of Quel'Danas"
                }
              }
            ],
            "back": [
              {
                "id": 34242,
                "name": "Tattered Cape of Antonidas",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                }
              },
              {
                "id": 32331,
                "name": "Cloak of the Illidari Council",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Illidari Council"
                }
              }
            ],
            "chest": [
              {
                "id": 34399,
                "name": "Robes of Ghostly Hatred",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "vendor",
                  "detail": "Sunmote + Robes of Faltered Light exchange — Yrma, Isle of Quel'Danas"
                },
                "note": "Haste chest — Arcane pick over Sunfire Robe"
              },
              {
                "id": 34364,
                "name": "Sunfire Robe",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoP)",
                  "profession": "Tailoring"
                },
                "bop": true
              }
            ],
            "wrist": [
              {
                "id": 34447,
                "name": "Bracers of the Tempest",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kalecgos"
                }
              },
              {
                "id": 30870,
                "name": "Cuffs of Devastation",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Hyjal Summit",
                  "boss": "Rage Winterchill"
                }
              }
            ],
            "hands": [
              {
                "id": 34406,
                "name": "Gloves of Tyri's Power",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "vendor",
                  "detail": "Sunmote + Handguards of the Dawn exchange — Yrma, Isle of Quel'Danas"
                },
                "note": "Haste gloves — Arcane pick"
              },
              {
                "id": 34344,
                "name": "Handguards of Defiled Worlds",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                }
              }
            ],
            "waist": [
              {
                "id": 34557,
                "name": "Belt of the Tempest",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Brutallus"
                }
              },
              {
                "id": 30888,
                "name": "Anetheron's Noose",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Hyjal Summit",
                  "boss": "Anetheron"
                }
              }
            ],
            "legs": [
              {
                "id": 34181,
                "name": "Leggings of Calamity",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Brutallus"
                }
              },
              {
                "id": 34386,
                "name": "Pantaloons of Growing Strife",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "vendor",
                  "detail": "Sunmote + Pantaloons of Calming Strife exchange — Yrma, Isle of Quel'Danas"
                }
              }
            ],
            "feet": [
              {
                "id": 34574,
                "name": "Boots of the Tempest",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Felmyst"
                }
              },
              {
                "id": 32239,
                "name": "Slippers of the Seacaller",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "High Warlord Naj'entus"
                }
              }
            ],
            "finger": [
              {
                "id": 29305,
                "name": "Band of the Eternal Sage",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "reputation",
                  "detail": "The Scale of the Sands — quest Sage's Covenant (Hyjal Summit rep)"
                }
              },
              {
                "id": 34362,
                "name": "Loop of Forged Power",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Jewelcrafting (BoE)",
                  "profession": "Jewelcrafting"
                }
              },
              {
                "id": 34230,
                "name": "Ring of Omnipotence",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "M'uru"
                }
              }
            ],
            "trinket": [
              {
                "id": 34429,
                "name": "Shifting Naaru Sliver",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "M'uru"
                },
                "note": "On-use haste toward the ~25% soft cap"
              },
              {
                "id": 32483,
                "name": "The Skull of Gul'dan",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Illidan Stormrage"
                }
              },
              {
                "id": 33829,
                "name": "Hex Shrunken Head",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Zul'Aman",
                  "boss": "Hex Lord Malacrass"
                }
              }
            ],
            "mainhand": [
              {
                "id": 34336,
                "name": "Sunflare",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                },
                "hand": "main",
                "weaponType": "Dagger"
              },
              {
                "id": 34182,
                "name": "Grand Magister's Staff of Torrents",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Felmyst"
                },
                "note": "Two-handed staff — leave off-hand empty",
                "hand": "two",
                "weaponType": "Staff"
              },
              {
                "id": 35102,
                "name": "Brutal Gladiator's Spellblade",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "pvp",
                  "detail": "Season 4 Arena — rating required"
                },
                "hand": "main",
                "weaponType": "Dagger"
              }
            ],
            "offhand": [
              {
                "id": 34179,
                "name": "Heart of the Pit",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Brutallus"
                },
                "hand": "held"
              },
              {
                "id": 30872,
                "name": "Chronicle of Dark Secrets",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Hyjal Summit",
                  "boss": "Rage Winterchill"
                },
                "hand": "held"
              }
            ],
            "ranged": [
              {
                "id": 34347,
                "name": "Wand of the Demonsoul",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "detail": "Trash drop"
                },
                "weaponType": "Wand"
              },
              {
                "id": 33192,
                "name": "Carved Witch Doctor's Stick",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "25 Badge of Justice — G'eras, Shattrath City"
                },
                "weaponType": "Wand"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "frost",
      "name": "Frost",
      "role": "dps",
      "icon": "spell_frost_frostbolt02",
      "statPriority": "Spell Hit (16% cap / 202 rating; ~13% with Elemental Precision) > Spell Damage > Spell Crit > Spell Haste",
      "notes": "Hit cap 16% (202 rating), reduced to ~13% by Elemental Precision. Frost trails Fire and Arcane on raid throughput but is the pick for leveling, farming, and PvP. The crafted Frozen Shadoweave (Shadow's Embrace) set — robe, shoulders, boots — adds Frost damage that also heals you and stays best-in-slot through Phase 1. Crit is worth less than for Fire since Ice Shards already multiplies crit damage.",
      "enchants": {
        "head": "Glyph of Power (+22 spell damage, +14 spell hit) — The Sha'tar Revered",
        "shoulder": "Greater Inscription of Discipline (Aldor Exalted) or Greater Inscription of the Orb (Scryers Exalted)",
        "chest": "Exceptional Stats (+6 all stats)",
        "wrist": "Spellpower (+15 spell damage)",
        "hands": "Major Spellpower (+20 spell damage)",
        "legs": "Runic Spellthread (+35 spell damage, +20 stamina)",
        "feet": "Boar's Speed (+9 stamina, minor run speed)",
        "finger": "Spellpower (+12 spell damage) — Enchanters only",
        "mainhand": "Soulfrost (+54 shadow/frost damage) — better than Major Spellpower for Frost"
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
                "id": 24266,
                "name": "Spellstrike Hood",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE) — Spellstrike set",
                  "profession": "Tailoring"
                }
              },
              {
                "id": 28278,
                "name": "Incanter's Cowl",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Mechanar",
                  "boss": "Pathaleon the Calculator"
                }
              }
            ],
            "neck": [
              {
                "id": 28134,
                "name": "Brooch of Heightened Potential",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Shadow Labyrinth",
                  "boss": "Blackheart the Inciter"
                }
              }
            ],
            "shoulder": [
              {
                "id": 21869,
                "name": "Frozen Shadoweave Shoulders",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoP) — Frozen Shadoweave set",
                  "profession": "Tailoring"
                },
                "bop": true
              },
              {
                "id": 27796,
                "name": "Mana-Etched Spaulders",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Slave Pens",
                  "boss": "Quagmirran",
                  "detail": "Heroic only"
                }
              }
            ],
            "back": [
              {
                "id": 27981,
                "name": "Sethekk Oracle Cloak",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sethekk Halls",
                  "boss": "Talon King Ikiss"
                }
              },
              {
                "id": 29369,
                "name": "Shawl of Shifting Probabilities",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "25 Badge of Justice — G'eras, Shattrath City"
                }
              }
            ],
            "chest": [
              {
                "id": 21871,
                "name": "Frozen Shadoweave Robe",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoP) — Frozen Shadoweave set",
                  "profession": "Tailoring"
                },
                "note": "Frozen Shadoweave 3-piece boosts Frost damage and leeches health",
                "bop": true
              },
              {
                "id": 28191,
                "name": "Mana-Etched Vestments",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Old Hillsbrad Foothills",
                  "boss": "Epoch Hunter",
                  "detail": "Heroic only"
                }
              }
            ],
            "wrist": [
              {
                "id": 24250,
                "name": "Bracers of Havok",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE)",
                  "profession": "Tailoring"
                }
              },
              {
                "id": 27462,
                "name": "Crimson Bracers of Gloom",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Hellfire Ramparts",
                  "boss": "Omor the Unscarred",
                  "detail": "Heroic only"
                }
              }
            ],
            "hands": [
              {
                "id": 30725,
                "name": "Anger-Spark Gloves",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "zone": "Shadowmoon Valley",
                  "boss": "Doomwalker",
                  "detail": "World boss"
                },
                "note": "World boss drop — use any dungeon caster gloves until then"
              },
              {
                "id": 27465,
                "name": "Mana-Etched Gloves",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Hellfire Ramparts",
                  "boss": "Omor the Unscarred",
                  "detail": "Heroic only"
                }
              }
            ],
            "waist": [
              {
                "id": 24256,
                "name": "Girdle of Ruination",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE)",
                  "profession": "Tailoring"
                }
              }
            ],
            "legs": [
              {
                "id": 24262,
                "name": "Spellstrike Pants",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE) — Spellstrike set",
                  "profession": "Tailoring"
                }
              },
              {
                "id": 30532,
                "name": "Kirin Tor Master's Trousers",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Shadow Labyrinth",
                  "boss": "Murmur",
                  "detail": "Heroic only"
                }
              }
            ],
            "feet": [
              {
                "id": 21870,
                "name": "Frozen Shadoweave Boots",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoP) — Frozen Shadoweave set",
                  "profession": "Tailoring"
                },
                "bop": true
              },
              {
                "id": 28406,
                "name": "Sigil-Laced Boots",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Arcatraz",
                  "boss": "Harbinger Skyriss"
                }
              }
            ],
            "finger": [
              {
                "id": 28227,
                "name": "Sparking Arcanite Ring",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Old Hillsbrad Foothills",
                  "boss": "Epoch Hunter",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 29172,
                "name": "Ashyen's Gift",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "reputation",
                  "detail": "Cenarion Expedition — Exalted"
                }
              },
              {
                "id": 29367,
                "name": "Ring of Cryptic Dreams",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "badge",
                  "detail": "25 Badge of Justice — G'eras, Shattrath City"
                }
              }
            ],
            "trinket": [
              {
                "id": 27683,
                "name": "Quagmirran's Eye",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Slave Pens",
                  "boss": "Quagmirran",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 29370,
                "name": "Icon of the Silver Crescent",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "41 Badge of Justice — G'eras, Shattrath City"
                }
              }
            ],
            "mainhand": [
              {
                "id": 23554,
                "name": "Eternium Runed Blade",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Blacksmithing (BoE)",
                  "profession": "Blacksmithing"
                },
                "hand": "main",
                "weaponType": "Dagger"
              },
              {
                "id": 29153,
                "name": "Blade of the Archmage",
                "quality": "epic",
                "rank": 2,
                "faction": "alliance",
                "source": {
                  "type": "reputation",
                  "detail": "Honor Hold — Exalted"
                },
                "hand": "main",
                "weaponType": "Sword"
              },
              {
                "id": 29155,
                "name": "Stormcaller",
                "quality": "epic",
                "rank": 3,
                "faction": "horde",
                "source": {
                  "type": "reputation",
                  "detail": "Thrallmar — Exalted"
                },
                "hand": "main",
                "weaponType": "Sword"
              }
            ],
            "offhand": [
              {
                "id": 29273,
                "name": "Khadgar's Knapsack",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "25 Badge of Justice — G'eras, Shattrath City"
                },
                "hand": "held"
              },
              {
                "id": 28412,
                "name": "Lamp of Peaceful Radiance",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Arcatraz",
                  "boss": "Harbinger Skyriss"
                },
                "hand": "held"
              }
            ],
            "ranged": [
              {
                "id": 29350,
                "name": "The Black Stalk",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Underbog",
                  "boss": "The Black Stalker",
                  "detail": "Heroic only"
                },
                "weaponType": "Wand"
              },
              {
                "id": 28386,
                "name": "Nether Core's Control Rod",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Arcatraz",
                  "boss": "Dalliah the Doomsayer"
                },
                "weaponType": "Wand"
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
                "id": 29076,
                "name": "Collar of the Aldor",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar",
                  "detail": "Tier 4 helm token"
                }
              },
              {
                "id": 24266,
                "name": "Spellstrike Hood",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE) — Spellstrike set",
                  "profession": "Tailoring"
                }
              }
            ],
            "neck": [
              {
                "id": 28530,
                "name": "Brooch of Unquenchable Fury",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Moroes"
                }
              },
              {
                "id": 28762,
                "name": "Adornment of Stolen Souls",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar"
                }
              }
            ],
            "shoulder": [
              {
                "id": 21869,
                "name": "Frozen Shadoweave Shoulders",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoP) — Frozen Shadoweave set",
                  "profession": "Tailoring"
                },
                "note": "Keep for the Frozen Shadoweave bonus",
                "bop": true
              },
              {
                "id": 29079,
                "name": "Pauldrons of the Aldor",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "High King Maulgar",
                  "detail": "Tier 4 shoulder token"
                }
              }
            ],
            "back": [
              {
                "id": 28766,
                "name": "Ruby Drape of the Mysticant",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar"
                }
              },
              {
                "id": 27981,
                "name": "Sethekk Oracle Cloak",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sethekk Halls",
                  "boss": "Talon King Ikiss"
                }
              }
            ],
            "chest": [
              {
                "id": 21871,
                "name": "Frozen Shadoweave Robe",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoP) — Frozen Shadoweave set",
                  "profession": "Tailoring"
                },
                "note": "Frozen Shadoweave 3-piece",
                "bop": true
              },
              {
                "id": 28602,
                "name": "Robe of the Elder Scribes",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Nightbane"
                }
              }
            ],
            "wrist": [
              {
                "id": 24250,
                "name": "Bracers of Havok",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE)",
                  "profession": "Tailoring"
                }
              },
              {
                "id": 27462,
                "name": "Crimson Bracers of Gloom",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Hellfire Ramparts",
                  "boss": "Omor the Unscarred",
                  "detail": "Heroic only"
                }
              }
            ],
            "hands": [
              {
                "id": 30725,
                "name": "Anger-Spark Gloves",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "zone": "Shadowmoon Valley",
                  "boss": "Doomwalker",
                  "detail": "World boss"
                }
              },
              {
                "id": 29080,
                "name": "Gloves of the Aldor",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "The Curator",
                  "detail": "Tier 4 glove token"
                }
              }
            ],
            "waist": [
              {
                "id": 24256,
                "name": "Girdle of Ruination",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE)",
                  "profession": "Tailoring"
                }
              },
              {
                "id": 30673,
                "name": "Inferno Waist Cord",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "detail": "Trash drop"
                }
              }
            ],
            "legs": [
              {
                "id": 29078,
                "name": "Legwraps of the Aldor",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "Gruul the Dragonkiller",
                  "detail": "Tier 4 leg token"
                }
              },
              {
                "id": 24262,
                "name": "Spellstrike Pants",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE) — Spellstrike set",
                  "profession": "Tailoring"
                }
              }
            ],
            "feet": [
              {
                "id": 21870,
                "name": "Frozen Shadoweave Boots",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoP) — Frozen Shadoweave set",
                  "profession": "Tailoring"
                },
                "note": "Frozen Shadoweave 3-piece",
                "bop": true
              },
              {
                "id": 28517,
                "name": "Boots of Foretelling",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Maiden of Virtue"
                }
              }
            ],
            "finger": [
              {
                "id": 28793,
                "name": "Band of Crimson Fury",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "quest",
                  "quest": "The Fall of Magtheridon",
                  "detail": "Turn in Magtheridon's Head to A'dal in Shattrath"
                }
              },
              {
                "id": 29287,
                "name": "Violet Signet of the Archmage",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "reputation",
                  "detail": "The Violet Eye — Exalted (Karazhan)"
                }
              },
              {
                "id": 28227,
                "name": "Sparking Arcanite Ring",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Old Hillsbrad Foothills",
                  "boss": "Epoch Hunter",
                  "detail": "Heroic only"
                }
              }
            ],
            "trinket": [
              {
                "id": 29370,
                "name": "Icon of the Silver Crescent",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "41 Badge of Justice — G'eras, Shattrath City"
                }
              },
              {
                "id": 27683,
                "name": "Quagmirran's Eye",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Slave Pens",
                  "boss": "Quagmirran",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 28785,
                "name": "The Lightning Capacitor",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Terestian Illhoof"
                }
              }
            ],
            "mainhand": [
              {
                "id": 28770,
                "name": "Nathrezim Mindblade",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar"
                },
                "hand": "main",
                "weaponType": "Dagger"
              },
              {
                "id": 28802,
                "name": "Bloodmaw Magus-Blade",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "Gruul the Dragonkiller"
                },
                "hand": "main",
                "weaponType": "Sword"
              }
            ],
            "offhand": [
              {
                "id": 29269,
                "name": "Sapphiron's Wing Bone",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "25 Badge of Justice — G'eras, Shattrath City"
                },
                "note": "Badge off-hand with Frost damage",
                "hand": "held"
              },
              {
                "id": 28734,
                "name": "Jewel of Infinite Possibilities",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Netherspite"
                },
                "hand": "held"
              }
            ],
            "ranged": [
              {
                "id": 28783,
                "name": "Eredar Wand of Obliteration",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Magtheridon's Lair",
                  "boss": "Magtheridon"
                },
                "weaponType": "Wand"
              },
              {
                "id": 28673,
                "name": "Tirisfal Wand of Ascendancy",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Shade of Aran"
                },
                "weaponType": "Wand"
              }
            ]
          }
        }
      ]
    }
  ]
});
