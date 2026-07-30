WOWDATA.register({
  "kind": "bis",
  "expansion": "tbc",
  "class": "paladin",
  "className": "Paladin",
  "classColor": "#F58CBA",
  "specs": [
    {
      "id": "holy",
      "name": "Holy",
      "role": "healer",
      "icon": "spell_holy_holybolt",
      "statPriority": "+Healing > Intellect > MP5 > Spell Crit > Spell Haste (P5)",
      "notes": "Holy Paladins stack +Healing and Intellect, with crit feeding mana back through Illumination; mp5 matters most before raid consumables and Kings-buffed Int pools grow. There is no hit requirement to worry about, and haste only appears on late Sunwell-era gear. Pick your libram to match your primary heal: Libram of Light for Flash of Light builds, Libram of Absolute Truth for Holy Light builds. Faction differences are mostly reputation rewards (Honor Hold vs Thrallmar rings) plus the Aldor-only Karja's Medallion; Horde paladins are Blood Elves in TBC, but Seal of Blood changes nothing for healing gear. Windhawk and Whitemend crafted pieces carry deep into raids, so grab them early.",
      "enchants": {
        "head": "Glyph of Renewal (+35 healing, 7 mp5) — Honor Hold / Thrallmar Revered",
        "shoulder": "Greater Inscription of Faith (Aldor Exalted) / Greater Inscription of the Oracle (Scryers Exalted)",
        "chest": "Enchant Chest - Exceptional Stats (+6 all stats)",
        "wrist": "Enchant Bracer - Superior Healing (+30 healing)",
        "hands": "Enchant Gloves - Major Healing (+35 healing)",
        "legs": "Golden Spellthread (+66 healing, +20 Stamina)",
        "feet": "Enchant Boots - Boar's Speed or Vitality",
        "finger": "Enchant Ring - Healing Power (Enchanters only)",
        "mainhand": "Enchant Weapon - Major Healing (+81 healing)"
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
                "id": 32084,
                "name": "Helmet of the Steadfast Champion",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "50 Badge of Justice — G'eras, Shattrath"
                }
              },
              {
                "id": 24264,
                "name": "Whitemend Hood",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE); set bonus with Whitemend Pants requires 350 Tailoring",
                  "profession": "Tailoring"
                }
              }
            ],
            "neck": [
              {
                "id": 29374,
                "name": "Necklace of Eternal Hope",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "25 Badge of Justice — G'eras, Shattrath"
                }
              },
              {
                "id": 30377,
                "name": "Karja's Medallion",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "quest",
                  "quest": "Shutting Down Manaforge Ara",
                  "zone": "Netherstorm",
                  "detail": "Aldor only"
                }
              },
              {
                "id": 31691,
                "name": "Natasha's Guardian Cord",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "quest",
                  "quest": "The Hound-Master",
                  "zone": "Blade's Edge Mountains"
                }
              }
            ],
            "shoulder": [
              {
                "id": 27775,
                "name": "Hallowed Pauldrons",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Shadow Labyrinth",
                  "boss": "Grandmaster Vorpil"
                }
              },
              {
                "id": 27737,
                "name": "Moonglade Shoulders",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Steamvault",
                  "boss": "Warlord Kalithresh"
                }
              },
              {
                "id": 21874,
                "name": "Primal Mooncloth Shoulders",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "crafted",
                  "detail": "Mooncloth Tailoring (BoP)",
                  "profession": "Tailoring"
                },
                "bop": true
              }
            ],
            "back": [
              {
                "id": 29354,
                "name": "Light-Touched Stole of Altruism",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Auchenai Crypts",
                  "boss": "Exarch Maladaar",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 27946,
                "name": "Avian Cloak of Feathers",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sethekk Halls",
                  "boss": "Talon King Ikiss"
                }
              },
              {
                "id": 29375,
                "name": "Bishop's Cloak",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "badge",
                  "detail": "25 Badge of Justice — G'eras, Shattrath"
                }
              }
            ],
            "chest": [
              {
                "id": 29522,
                "name": "Windhawk Hauberk",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tribal Leatherworking (BoP)",
                  "profession": "Leatherworking"
                },
                "bop": true
              },
              {
                "id": 28230,
                "name": "Hallowed Garments",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Shadow Labyrinth",
                  "boss": "Murmur"
                }
              },
              {
                "id": 29129,
                "name": "Anchorite's Robes",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "reputation",
                  "detail": "The Aldor — Honored (Quartermaster Endarin); Aldor only"
                }
              }
            ],
            "wrist": [
              {
                "id": 29523,
                "name": "Windhawk Bracers",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tribal Leatherworking (BoP)",
                  "profession": "Leatherworking"
                },
                "bop": true
              },
              {
                "id": 23539,
                "name": "Blessed Bracers",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Blacksmithing (BoE)",
                  "profession": "Blacksmithing"
                }
              },
              {
                "id": 29183,
                "name": "Bindings of the Timewalker",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "reputation",
                  "detail": "Keepers of Time — Exalted (guide table says Revered, actual requirement is Exalted)"
                }
              }
            ],
            "hands": [
              {
                "id": 27457,
                "name": "Life Bearer's Gauntlets",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Hellfire Ramparts",
                  "detail": "Reinforced Fel Iron Chest, Heroic only"
                }
              },
              {
                "id": 28304,
                "name": "Prismatic Mittens of Mending",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Botanica",
                  "boss": "Commander Sarannis"
                }
              }
            ],
            "waist": [
              {
                "id": 29524,
                "name": "Windhawk Belt",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tribal Leatherworking (BoP)",
                  "profession": "Leatherworking"
                },
                "bop": true
              },
              {
                "id": 27548,
                "name": "Girdle of Many Blessings",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Slave Pens",
                  "boss": "Rokmar the Crackler",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 29250,
                "name": "Cord of Sanctification",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Old Hillsbrad Foothills",
                  "boss": "Epoch Hunter",
                  "detail": "Heroic only"
                }
              }
            ],
            "legs": [
              {
                "id": 30543,
                "name": "Pontifex Kilt",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Steamvault",
                  "boss": "Warlord Kalithresh",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 24261,
                "name": "Whitemend Pants",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE)",
                  "profession": "Tailoring"
                }
              }
            ],
            "feet": [
              {
                "id": 27411,
                "name": "Slippers of Serenity",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Auchenai Crypts",
                  "boss": "Exarch Maladaar"
                }
              },
              {
                "id": 29251,
                "name": "Boots of the Pious",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Mechanar",
                  "boss": "Pathaleon the Calculator",
                  "detail": "Heroic only"
                }
              }
            ],
            "finger": [
              {
                "id": 29373,
                "name": "Band of Halos",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "25 Badge of Justice — G'eras, Shattrath"
                }
              },
              {
                "id": 29169,
                "name": "Ring of Convalescence",
                "quality": "rare",
                "rank": 2,
                "faction": "alliance",
                "source": {
                  "type": "reputation",
                  "detail": "Honor Hold — Revered"
                }
              },
              {
                "id": 29168,
                "name": "Ancestral Band",
                "quality": "rare",
                "rank": 2,
                "faction": "horde",
                "source": {
                  "type": "reputation",
                  "detail": "Thrallmar — Revered"
                }
              },
              {
                "id": 31923,
                "name": "Band of the Crystalline Void",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Mana-Tombs",
                  "boss": "Yor",
                  "detail": "Heroic only, summoned boss"
                }
              }
            ],
            "trinket": [
              {
                "id": 29376,
                "name": "Essence of the Martyr",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "41 Badge of Justice — G'eras, Shattrath"
                }
              },
              {
                "id": 30841,
                "name": "Lower City Prayerbook",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "reputation",
                  "detail": "Lower City — Revered (Nakodu)"
                }
              },
              {
                "id": 28190,
                "name": "Scarab of the Infinite Cycle",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "The Black Morass",
                  "boss": "Aeonus"
                }
              }
            ],
            "mainhand": [
              {
                "id": 32451,
                "name": "Gladiator's Salvation",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "pvp",
                  "detail": "Season 1 Arena Points vendor"
                },
                "note": "Best pre-raid healing mace if you PvP",
                "hand": "main",
                "weaponType": "Mace"
              },
              {
                "id": 23556,
                "name": "Hand of Eternity",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Blacksmithing (BoE)",
                  "profession": "Blacksmithing"
                },
                "hand": "main",
                "weaponType": "Mace"
              },
              {
                "id": 29353,
                "name": "Shockwave Truncheon",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Shadow Labyrinth",
                  "boss": "Murmur",
                  "detail": "Heroic only"
                },
                "hand": "main",
                "weaponType": "Mace"
              }
            ],
            "offhand": [
              {
                "id": 29267,
                "name": "Light-Bearer's Faith Shield",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "33 Badge of Justice — G'eras, Shattrath"
                },
                "hand": "off",
                "weaponType": "Shield"
              },
              {
                "id": 27772,
                "name": "Stormshield of Renewal",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Underbog",
                  "boss": "The Black Stalker",
                  "detail": "Heroic only"
                },
                "hand": "off",
                "weaponType": "Shield"
              },
              {
                "id": 29274,
                "name": "Tears of Heaven",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "badge",
                  "detail": "25 Badge of Justice — G'eras, Shattrath"
                },
                "note": "Held in off-hand (no shield)",
                "hand": "held"
              }
            ],
            "ranged": [
              {
                "id": 28296,
                "name": "Libram of the Lightbringer",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Botanica",
                  "boss": "Commander Sarannis"
                },
                "note": "Holy Light builds",
                "weaponType": "Libram"
              },
              {
                "id": 25644,
                "name": "Blessed Book of Nagrand",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "quest",
                  "quest": "The Ultimate Bloodsport",
                  "zone": "Nagrand"
                },
                "weaponType": "Libram"
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
                "id": 29061,
                "name": "Justicar Diadem",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar",
                  "detail": "Tier 4 token: Helm of the Fallen Defender"
                }
              },
              {
                "id": 30728,
                "name": "Fathom-Helm of the Deeps",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "zone": "Shadowmoon Valley",
                  "boss": "Doomwalker",
                  "detail": "World boss"
                }
              },
              {
                "id": 32084,
                "name": "Helmet of the Steadfast Champion",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "badge",
                  "detail": "50 Badge of Justice — G'eras, Shattrath"
                }
              }
            ],
            "neck": [
              {
                "id": 30726,
                "name": "Archaic Charm of Presence",
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
                "id": 29374,
                "name": "Necklace of Eternal Hope",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "25 Badge of Justice — G'eras, Shattrath"
                }
              },
              {
                "id": 28822,
                "name": "Teeth of Gruul",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "Gruul the Dragonkiller"
                }
              }
            ],
            "shoulder": [
              {
                "id": 29064,
                "name": "Justicar Pauldrons",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "High King Maulgar",
                  "detail": "Tier 4 token: Pauldrons of the Fallen Defender"
                }
              },
              {
                "id": 28666,
                "name": "Pauldrons of the Justice-Seeker",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Shade of Aran"
                }
              }
            ],
            "back": [
              {
                "id": 28765,
                "name": "Stainless Cloak of the Pure Hearted",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar"
                }
              },
              {
                "id": 29354,
                "name": "Light-Touched Stole of Altruism",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Auchenai Crypts",
                  "boss": "Exarch Maladaar",
                  "detail": "Heroic only"
                }
              }
            ],
            "chest": [
              {
                "id": 29062,
                "name": "Justicar Chestpiece",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Magtheridon's Lair",
                  "boss": "Magtheridon",
                  "detail": "Tier 4 token: Chestguard of the Fallen Defender"
                }
              },
              {
                "id": 29522,
                "name": "Windhawk Hauberk",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Tribal Leatherworking (BoP)",
                  "profession": "Leatherworking"
                },
                "bop": true
              },
              {
                "id": 28662,
                "name": "Breastplate of the Lightbinder",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Terestian Illhoof"
                }
              }
            ],
            "wrist": [
              {
                "id": 29523,
                "name": "Windhawk Bracers",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tribal Leatherworking (BoP)",
                  "profession": "Leatherworking"
                },
                "bop": true
              },
              {
                "id": 28512,
                "name": "Bracers of Justice",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Maiden of Virtue"
                }
              }
            ],
            "hands": [
              {
                "id": 29065,
                "name": "Justicar Gloves",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "The Curator",
                  "detail": "Tier 4 token: Gloves of the Fallen Defender"
                }
              },
              {
                "id": 28505,
                "name": "Gauntlets of Renewed Hope",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Attumen the Huntsman"
                }
              },
              {
                "id": 28520,
                "name": "Gloves of Centering",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Maiden of Virtue"
                }
              }
            ],
            "waist": [
              {
                "id": 28733,
                "name": "Girdle of Truth",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Netherspite"
                }
              },
              {
                "id": 29524,
                "name": "Windhawk Belt",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Tribal Leatherworking (BoP)",
                  "profession": "Leatherworking"
                },
                "bop": true
              }
            ],
            "legs": [
              {
                "id": 28748,
                "name": "Legplates of the Innocent",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Chess Event"
                }
              },
              {
                "id": 28751,
                "name": "Heart-Flame Leggings",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Chess Event"
                }
              }
            ],
            "feet": [
              {
                "id": 28569,
                "name": "Boots of Valiance",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Moroes"
                }
              },
              {
                "id": 28752,
                "name": "Forestlord Striders",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Chess Event"
                }
              }
            ],
            "finger": [
              {
                "id": 28790,
                "name": "Naaru Lightwarden's Band",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "quest",
                  "quest": "The Fall of Magtheridon",
                  "detail": "Turn in Magtheridon's Head (Aldor/Scryer quest versions)"
                }
              },
              {
                "id": 29290,
                "name": "Violet Signet of the Grand Restorer",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "reputation",
                  "detail": "The Violet Eye — Exalted (Karazhan)"
                }
              },
              {
                "id": 30736,
                "name": "Ring of Flowing Light",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "zone": "Hellfire Peninsula",
                  "boss": "Doom Lord Kazzak",
                  "detail": "World boss"
                }
              }
            ],
            "trinket": [
              {
                "id": 29376,
                "name": "Essence of the Martyr",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "41 Badge of Justice — G'eras, Shattrath"
                }
              },
              {
                "id": 28727,
                "name": "Pendant of the Violet Eye",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Shade of Aran"
                }
              },
              {
                "id": 28590,
                "name": "Ribbon of Sacrifice",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Opera Event"
                }
              }
            ],
            "mainhand": [
              {
                "id": 28771,
                "name": "Light's Justice",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar"
                },
                "hand": "main",
                "weaponType": "Mace"
              },
              {
                "id": 28522,
                "name": "Shard of the Virtuous",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Maiden of Virtue"
                },
                "hand": "main",
                "weaponType": "Mace"
              },
              {
                "id": 32451,
                "name": "Gladiator's Salvation",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "pvp",
                  "detail": "Season 1 Arena Points vendor"
                },
                "hand": "main",
                "weaponType": "Mace"
              }
            ],
            "offhand": [
              {
                "id": 29458,
                "name": "Aegis of the Vindicator",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Magtheridon's Lair",
                  "boss": "Magtheridon"
                },
                "hand": "off",
                "weaponType": "Shield"
              },
              {
                "id": 29267,
                "name": "Light-Bearer's Faith Shield",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "33 Badge of Justice — G'eras, Shattrath"
                },
                "hand": "off",
                "weaponType": "Shield"
              },
              {
                "id": 28728,
                "name": "Aran's Soothing Sapphire",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Shade of Aran"
                },
                "note": "Held in off-hand (no shield)",
                "hand": "held"
              }
            ],
            "ranged": [
              {
                "id": 28592,
                "name": "Libram of Souls Redeemed",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Opera Event"
                },
                "weaponType": "Libram"
              },
              {
                "id": 28296,
                "name": "Libram of the Lightbringer",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Botanica",
                  "boss": "Commander Sarannis"
                },
                "weaponType": "Libram"
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
                "id": 34243,
                "name": "Helm of Burning Righteousness",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                }
              },
              {
                "id": 34402,
                "name": "Shroud of Chieftain Ner'zhul",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "vendor",
                  "detail": "Yrma, Sunwell Plateau — trade Cowl of Gul'dan (Kil'jaeden) + 1 Sunmote"
                },
                "note": "Haste option"
              }
            ],
            "neck": [
              {
                "id": 32370,
                "name": "Nadina's Pendant of Purity",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Mother Shahraz"
                }
              },
              {
                "id": 34360,
                "name": "Amulet of Flowing Life",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Jewelcrafting (BoP — requires the profession yourself)",
                  "profession": "Jewelcrafting"
                },
                "bop": true
              },
              {
                "id": 34184,
                "name": "Brooch of the Highborne",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Felmyst"
                },
                "note": "Haste option"
              }
            ],
            "shoulder": [
              {
                "id": 34193,
                "name": "Spaulders of the Thalassian Savior",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Eredar Twins"
                }
              },
              {
                "id": 34208,
                "name": "Equilibrium Epaulets",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Eredar Twins"
                },
                "note": "Haste option"
              }
            ],
            "back": [
              {
                "id": 34205,
                "name": "Shroud of Redeemed Souls",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Eredar Twins"
                }
              },
              {
                "id": 32524,
                "name": "Shroud of the Highborne",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Illidan Stormrage"
                },
                "note": "Haste option"
              }
            ],
            "chest": [
              {
                "id": 34229,
                "name": "Garments of Serene Shores",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "M'uru"
                }
              },
              {
                "id": 34379,
                "name": "Sunblessed Breastplate",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Blacksmithing (BoP, Sunmote recipe)",
                  "profession": "Blacksmithing"
                },
                "bop": true
              }
            ],
            "wrist": [
              {
                "id": 34432,
                "name": "Lightbringer Bracers",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kalecgos / Eredar Twins",
                  "detail": "Tier 6 token: Bracers of the Forgotten Conqueror"
                }
              },
              {
                "id": 30862,
                "name": "Blessed Adamantite Bracers",
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
                "id": 34380,
                "name": "Sunblessed Gauntlets",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Blacksmithing (BoE, Sunmote recipe)",
                  "profession": "Blacksmithing"
                }
              },
              {
                "id": 34240,
                "name": "Gauntlets of the Soothed Soul",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "M'uru"
                },
                "note": "Haste option"
              }
            ],
            "waist": [
              {
                "id": 34487,
                "name": "Lightbringer Belt",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Brutallus / Eredar Twins",
                  "detail": "Tier 6 token: Belt of the Forgotten Conqueror"
                }
              },
              {
                "id": 33446,
                "name": "Girdle of Stromgarde's Hope",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Zul'Aman",
                  "boss": "Hex Lord Malacrass"
                }
              }
            ],
            "legs": [
              {
                "id": 34167,
                "name": "Legplates of the Holy Juggernaut",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kalecgos"
                }
              },
              {
                "id": 34383,
                "name": "Kilt of Spiritual Reconstruction",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "vendor",
                  "detail": "Yrma, Sunwell Plateau — trade Chain Links of the Tumultuous Storm (Felmyst) + 1 Sunmote"
                },
                "note": "Haste option"
              }
            ],
            "feet": [
              {
                "id": 34559,
                "name": "Lightbringer Treads",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Felmyst / Eredar Twins",
                  "detail": "Tier 6 token: Boots of the Forgotten Conqueror"
                }
              },
              {
                "id": 32243,
                "name": "Pearl Inlaid Boots",
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
                "id": 34363,
                "name": "Ring of Flowing Life",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Jewelcrafting (BoP; design drop + 5 Sunmotes)",
                  "profession": "Jewelcrafting"
                }
              },
              {
                "id": 32528,
                "name": "Blessed Band of Karabor",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "detail": "Trash drop"
                },
                "note": "Haste"
              },
              {
                "id": 34166,
                "name": "Band of Lucent Beams",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kalecgos"
                },
                "note": "Haste"
              }
            ],
            "trinket": [
              {
                "id": 34430,
                "name": "Glimmering Naaru Sliver",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "M'uru"
                }
              },
              {
                "id": 32496,
                "name": "Memento of Tyrande",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Illidan Stormrage"
                }
              },
              {
                "id": 29376,
                "name": "Essence of the Martyr",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "badge",
                  "detail": "41 Badge of Justice — G'eras, Shattrath"
                }
              }
            ],
            "mainhand": [
              {
                "id": 34335,
                "name": "Hammer of Sanctification",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                },
                "note": "Highly contested",
                "hand": "main",
                "weaponType": "Mace"
              },
              {
                "id": 34199,
                "name": "Archon's Gavel",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Eredar Twins"
                },
                "hand": "main",
                "weaponType": "Mace"
              },
              {
                "id": 32500,
                "name": "Crystal Spire of Karabor",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Illidan Stormrage"
                },
                "hand": "main",
                "weaponType": "Mace"
              }
            ],
            "offhand": [
              {
                "id": 34231,
                "name": "Aegis of Angelic Fortune",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "M'uru"
                },
                "hand": "off",
                "weaponType": "Shield"
              },
              {
                "id": 34206,
                "name": "Book of Highborne Hymns",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Eredar Twins"
                },
                "note": "Held in off-hand (haste, no shield)",
                "hand": "held"
              }
            ],
            "ranged": [
              {
                "id": 30063,
                "name": "Libram of Absolute Truth",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Serpentshrine Cavern",
                  "boss": "The Lurker Below"
                },
                "note": "Holy Light builds",
                "weaponType": "Libram"
              },
              {
                "id": 23006,
                "name": "Libram of Light",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Naxxramas",
                  "boss": "Noth the Plaguebringer",
                  "detail": "Classic carryover"
                },
                "note": "Flash of Light builds",
                "weaponType": "Libram"
              },
              {
                "id": 33502,
                "name": "Libram of Mending",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "badge",
                  "detail": "20 Badge of Justice — G'eras, Shattrath"
                },
                "weaponType": "Libram"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "protection",
      "name": "Protection",
      "role": "tank",
      "icon": "spell_holy_devotionaura",
      "statPriority": "Defense (490) / Uncrushability (102.4%) > Stamina > Spell Damage > Block/Dodge/Parry > Threat stats",
      "notes": "Protection Paladins tank with a one-hander, shield, and spell damage: Holy Shield and Consecration threat scale with +damage, so caster weapons like Gavel of Unearthed Secrets and Bloodmaw Magus-Blade are BiS tank weapons. First reach 490 Defense for crit immunity, then build to uncrushability — 102.4% combined miss + dodge + parry + block with Holy Shield up pushes crushing blows off the combat table, and Figurine of the Colossus plus block gear gets you there earlier than any other tank class. After that, stack Stamina and spell damage for threat. The Justicar 2-piece is a real threat gain in P1, and Libram of Repentance is the single most important 15-badge purchase you will make. Blade of the Archmage (Alliance, Honor Hold Exalted) and Stormcaller (Horde, Thrallmar Exalted) are the faction-split pre-raid weapon options.",
      "enchants": {
        "head": "Glyph of the Defender (+16 Defense rating, +17 Dodge rating) — Keepers of Time Revered",
        "shoulder": "Greater Inscription of Warding (Aldor Exalted) / Greater Inscription of the Knight (Scryers Exalted)",
        "back": "Enchant Cloak - Dodge (+12 Dodge rating)",
        "chest": "Enchant Chest - Exceptional Stats (+6 all stats) or Major Health (+150 HP)",
        "wrist": "Enchant Bracer - Fortitude (+12 Stamina)",
        "hands": "Enchant Gloves - Major Spellpower (+20 spell damage, threat)",
        "legs": "Nethercleft Leg Armor (+40 Stamina, +12 Agility)",
        "feet": "Enchant Boots - Fortitude (+12 Stamina) or Boar's Speed",
        "mainhand": "Enchant Weapon - Major Spellpower (+40 spell damage)",
        "offhand": "Enchant Shield - Major Stamina (+18 Stamina)"
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
                "id": 32083,
                "name": "Faceguard of Determination",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "50 Badge of Justice — G'eras, Shattrath"
                }
              },
              {
                "id": 23536,
                "name": "Oathkeeper's Helm",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Blacksmithing (BoE)",
                  "profession": "Blacksmithing"
                }
              },
              {
                "id": 28285,
                "name": "Helm of the Righteous",
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
                "id": 27871,
                "name": "Maladaar's Blessed Chaplet",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Auchenai Crypts",
                  "boss": "Exarch Maladaar",
                  "detail": "Heroic only"
                },
                "note": "Best avoidance"
              },
              {
                "id": 29386,
                "name": "Necklace of the Juggernaut",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "25 Badge of Justice — G'eras, Shattrath"
                }
              },
              {
                "id": 28245,
                "name": "Pendant of Dominance",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "pvp",
                  "detail": "Honor Points vendor"
                },
                "note": "Best balanced if you PvP"
              }
            ],
            "shoulder": [
              {
                "id": 27847,
                "name": "Fanblade Pauldrons",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Auchenai Crypts",
                  "boss": "Shirrak the Dead Watcher",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 27739,
                "name": "Spaulders of the Righteous",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Botanica",
                  "boss": "Laj"
                }
              },
              {
                "id": 27706,
                "name": "Gladiator's Lamellar Shoulders",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "pvp",
                  "detail": "Season 1 Arena Points vendor"
                }
              }
            ],
            "back": [
              {
                "id": 27804,
                "name": "Devilshark Cape",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Steamvault",
                  "boss": "Warlord Kalithresh"
                }
              },
              {
                "id": 27988,
                "name": "Burnoose of Shifting Ages",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Black Morass",
                  "boss": "Chrono Lord Deja"
                }
              },
              {
                "id": 24253,
                "name": "Cloak of Eternity",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE)",
                  "profession": "Tailoring"
                }
              }
            ],
            "chest": [
              {
                "id": 28203,
                "name": "Breastplate of the Righteous",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Steamvault",
                  "boss": "Warlord Kalithresh"
                }
              },
              {
                "id": 28262,
                "name": "Jade-Skull Breastplate",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Mechanar",
                  "boss": "Nethermancer Sepethrea"
                },
                "note": "Avoidance option"
              },
              {
                "id": 29127,
                "name": "Vindicator's Hauberk",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "reputation",
                  "detail": "The Aldor — Revered (Quartermaster Endarin); Aldor only"
                }
              }
            ],
            "wrist": [
              {
                "id": 29252,
                "name": "Bracers of Dignity",
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
                "id": 23538,
                "name": "Bracers of the Green Fortress",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Blacksmithing (BoE)",
                  "profession": "Blacksmithing"
                }
              }
            ],
            "hands": [
              {
                "id": 27535,
                "name": "Gauntlets of the Righteous",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Shattered Halls",
                  "boss": "Warchief Kargath Bladefist"
                }
              },
              {
                "id": 32072,
                "name": "Gauntlets of Dissension",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Botanica",
                  "boss": "Warp Splinter",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 30741,
                "name": "Topaz-Studded Battlegrips",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "zone": "Hellfire Peninsula",
                  "boss": "Doom Lord Kazzak",
                  "detail": "World boss"
                }
              }
            ],
            "waist": [
              {
                "id": 29253,
                "name": "Girdle of Valorous Deeds",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Black Morass",
                  "boss": "Aeonus",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 31460,
                "name": "Sha'tari Vindicator's Waistguard",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "quest",
                  "quest": "Colossal Menace",
                  "zone": "Hellfire Peninsula"
                }
              },
              {
                "id": 27672,
                "name": "Girdle of the Immovable",
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
            "legs": [
              {
                "id": 29184,
                "name": "Timewarden's Leggings",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "reputation",
                  "detail": "Keepers of Time — Revered (Alurmi)"
                }
              },
              {
                "id": 27839,
                "name": "Legplates of the Righteous",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Black Morass",
                  "boss": "Aeonus"
                }
              },
              {
                "id": 23518,
                "name": "Felsteel Leggings",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "crafted",
                  "detail": "Blacksmithing (BoE)",
                  "profession": "Blacksmithing"
                }
              }
            ],
            "feet": [
              {
                "id": 29254,
                "name": "Boots of the Righteous Path",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Shattered Halls",
                  "boss": "Warchief Kargath Bladefist",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 29239,
                "name": "Eaglecrest Warboots",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Blood Furnace",
                  "boss": "Kelidan the Breaker",
                  "detail": "Heroic only"
                }
              }
            ],
            "finger": [
              {
                "id": 28407,
                "name": "Elementium Band of the Sentry",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Arcatraz",
                  "boss": "Harbinger Skyriss"
                }
              },
              {
                "id": 29172,
                "name": "Ashyen's Gift",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "reputation",
                  "detail": "Cenarion Expedition — Exalted (Fedryen Swiftspear)"
                },
                "note": "Threat (spell damage + hit)"
              },
              {
                "id": 28555,
                "name": "Seal of the Exorcist",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "vendor",
                  "detail": "50 Spirit Shards — Spirit Sage vendor, Auchindoun"
                }
              }
            ],
            "trinket": [
              {
                "id": 27529,
                "name": "Figurine of the Colossus",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Shattered Halls",
                  "boss": "Warchief Kargath Bladefist"
                },
                "note": "Uncrushability cooldown — keep it all expansion"
              },
              {
                "id": 29370,
                "name": "Icon of the Silver Crescent",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "41 Badge of Justice — G'eras, Shattrath"
                },
                "note": "On-use threat"
              },
              {
                "id": 27891,
                "name": "Adamantine Figurine",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Shadow Labyrinth",
                  "boss": "Blackheart the Inciter"
                }
              }
            ],
            "mainhand": [
              {
                "id": 30832,
                "name": "Gavel of Unearthed Secrets",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "reputation",
                  "detail": "Lower City — Exalted (Nakodu)"
                },
                "hand": "main",
                "weaponType": "Mace"
              },
              {
                "id": 29153,
                "name": "Blade of the Archmage",
                "quality": "epic",
                "rank": 2,
                "faction": "alliance",
                "source": {
                  "type": "reputation",
                  "detail": "Honor Hold — Exalted (Quartermaster Urgronn)"
                },
                "hand": "main",
                "weaponType": "Sword"
              },
              {
                "id": 29155,
                "name": "Stormcaller",
                "quality": "epic",
                "rank": 2,
                "faction": "horde",
                "source": {
                  "type": "reputation",
                  "detail": "Thrallmar — Exalted (Logistics Officer Ulrike)"
                },
                "hand": "main",
                "weaponType": "Sword"
              }
            ],
            "offhand": [
              {
                "id": 29176,
                "name": "Crest of the Sha'tar",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "reputation",
                  "detail": "The Sha'tar — Exalted (Almaador)"
                },
                "hand": "off",
                "weaponType": "Shield"
              },
              {
                "id": 29266,
                "name": "Azure-Shield of Coldarra",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "33 Badge of Justice — G'eras, Shattrath"
                },
                "hand": "off",
                "weaponType": "Shield"
              }
            ],
            "ranged": [
              {
                "id": 29388,
                "name": "Libram of Repentance",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "15 Badge of Justice — G'eras, Shattrath"
                },
                "note": "+40 block value with Holy Shield — key to uncrushability",
                "weaponType": "Libram"
              },
              {
                "id": 27917,
                "name": "Libram of the Eternal Rest",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sethekk Halls",
                  "boss": "Darkweaver Syth"
                },
                "note": "Threat (Consecration)",
                "weaponType": "Libram"
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
                "id": 29068,
                "name": "Justicar Faceguard",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar",
                  "detail": "Tier 4 token: Helm of the Fallen Champion"
                }
              },
              {
                "id": 32083,
                "name": "Faceguard of Determination",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "50 Badge of Justice — G'eras, Shattrath"
                }
              },
              {
                "id": 28593,
                "name": "Eternium Greathelm",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Opera Event"
                }
              }
            ],
            "neck": [
              {
                "id": 28516,
                "name": "Barbed Choker of Discipline",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Maiden of Virtue"
                }
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
                },
                "note": "Threat option"
              }
            ],
            "shoulder": [
              {
                "id": 29070,
                "name": "Justicar Shoulderguards",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "High King Maulgar",
                  "detail": "Tier 4 token: Pauldrons of the Fallen Champion"
                }
              },
              {
                "id": 28743,
                "name": "Mantle of Abrahmis",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Netherspite"
                }
              }
            ],
            "back": [
              {
                "id": 27804,
                "name": "Devilshark Cape",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Steamvault",
                  "boss": "Warlord Kalithresh"
                }
              },
              {
                "id": 28766,
                "name": "Ruby Drape of the Mysticant",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar"
                },
                "note": "Threat option"
              },
              {
                "id": 28660,
                "name": "Gilded Thorium Cloak",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Terestian Illhoof"
                }
              }
            ],
            "chest": [
              {
                "id": 29066,
                "name": "Justicar Chestguard",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Magtheridon's Lair",
                  "boss": "Magtheridon",
                  "detail": "Tier 4 token: Chestguard of the Fallen Champion"
                }
              },
              {
                "id": 28597,
                "name": "Panzar'Thar Breastplate",
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
                "id": 29252,
                "name": "Bracers of Dignity",
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
                "id": 28502,
                "name": "Vambraces of Courage",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Attumen the Huntsman"
                }
              }
            ],
            "hands": [
              {
                "id": 29067,
                "name": "Justicar Handguards",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "The Curator",
                  "detail": "Tier 4 token: Gloves of the Fallen Champion"
                }
              },
              {
                "id": 28518,
                "name": "Iron Gauntlets of the Maiden",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Maiden of Virtue"
                }
              }
            ],
            "waist": [
              {
                "id": 29253,
                "name": "Girdle of Valorous Deeds",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Black Morass",
                  "boss": "Aeonus",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 28566,
                "name": "Crimson Girdle of the Indomitable",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Moroes"
                }
              }
            ],
            "legs": [
              {
                "id": 28621,
                "name": "Wrynn Dynasty Greaves",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "The Curator"
                }
              },
              {
                "id": 29069,
                "name": "Justicar Legguards",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "Gruul the Dragonkiller",
                  "detail": "Tier 4 token: Leggings of the Fallen Champion"
                }
              },
              {
                "id": 29184,
                "name": "Timewarden's Leggings",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "reputation",
                  "detail": "Keepers of Time — Revered (Alurmi)"
                }
              }
            ],
            "feet": [
              {
                "id": 29254,
                "name": "Boots of the Righteous Path",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Shattered Halls",
                  "boss": "Warchief Kargath Bladefist",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 30641,
                "name": "Boots of Elusion",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "detail": "Trash drop"
                }
              },
              {
                "id": 28747,
                "name": "Battlescar Boots",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Chess Event"
                }
              }
            ],
            "finger": [
              {
                "id": 28407,
                "name": "Elementium Band of the Sentry",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Arcatraz",
                  "boss": "Harbinger Skyriss"
                }
              },
              {
                "id": 29279,
                "name": "Violet Signet of the Great Protector",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "reputation",
                  "detail": "The Violet Eye — Exalted (Karazhan)"
                }
              },
              {
                "id": 28793,
                "name": "Band of Crimson Fury",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "quest",
                  "quest": "The Fall of Magtheridon",
                  "detail": "Turn in Magtheridon's Head"
                },
                "note": "Threat option"
              }
            ],
            "trinket": [
              {
                "id": 27529,
                "name": "Figurine of the Colossus",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Shattered Halls",
                  "boss": "Warchief Kargath Bladefist"
                },
                "note": "Uncrushability cooldown"
              },
              {
                "id": 28528,
                "name": "Moroes' Lucky Pocket Watch",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Moroes"
                },
                "note": "Avoidance cooldown"
              },
              {
                "id": 29370,
                "name": "Icon of the Silver Crescent",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "badge",
                  "detail": "41 Badge of Justice — G'eras, Shattrath"
                },
                "note": "On-use threat"
              }
            ],
            "mainhand": [
              {
                "id": 28802,
                "name": "Bloodmaw Magus-Blade",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "Gruul the Dragonkiller"
                },
                "note": "Spell damage = threat",
                "hand": "main",
                "weaponType": "Sword"
              },
              {
                "id": 30832,
                "name": "Gavel of Unearthed Secrets",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "reputation",
                  "detail": "Lower City — Exalted (Nakodu)"
                },
                "hand": "main",
                "weaponType": "Mace"
              }
            ],
            "offhand": [
              {
                "id": 28825,
                "name": "Aldori Legacy Defender",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "Gruul the Dragonkiller"
                },
                "hand": "off",
                "weaponType": "Shield"
              },
              {
                "id": 28606,
                "name": "Shield of Impenetrable Darkness",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Nightbane"
                },
                "hand": "off",
                "weaponType": "Shield"
              }
            ],
            "ranged": [
              {
                "id": 29388,
                "name": "Libram of Repentance",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "15 Badge of Justice — G'eras, Shattrath"
                },
                "note": "+40 block value with Holy Shield",
                "weaponType": "Libram"
              },
              {
                "id": 27917,
                "name": "Libram of the Eternal Rest",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sethekk Halls",
                  "boss": "Darkweaver Syth"
                },
                "note": "Threat (Consecration)",
                "weaponType": "Libram"
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
                "id": 34401,
                "name": "Helm of Uther's Resolve",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "vendor",
                  "detail": "Yrma, Sunwell Plateau — trade Helm of Burning Righteousness (Kil'jaeden) + 1 Sunmote"
                }
              },
              {
                "id": 34400,
                "name": "Crown of Dath'Remar",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "vendor",
                  "detail": "Yrma, Sunwell Plateau — trade Crown of Anasterian (Kil'jaeden) + 1 Sunmote"
                },
                "note": "Mitigation option"
              },
              {
                "id": 32521,
                "name": "Faceplate of the Impenetrable",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Illidan Stormrage"
                }
              }
            ],
            "neck": [
              {
                "id": 34178,
                "name": "Collar of the Pit Lord",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Brutallus"
                }
              },
              {
                "id": 30007,
                "name": "The Darkener's Grasp",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "quest",
                  "quest": "Kael'thas and the Verdant Sphere",
                  "detail": "Kael'thas Sunstrider quest turn-in, Tempest Keep"
                }
              }
            ],
            "shoulder": [
              {
                "id": 34389,
                "name": "Spaulders of the Thalassian Defender",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "vendor",
                  "detail": "Yrma, Sunwell Plateau — trade Spaulders of the Thalassian Savior (Eredar Twins) + 1 Sunmote"
                }
              },
              {
                "id": 34192,
                "name": "Pauldrons of Perseverance",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Eredar Twins"
                },
                "note": "Mitigation option"
              },
              {
                "id": 30998,
                "name": "Lightbringer Shoulderguards",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Mother Shahraz",
                  "detail": "Tier 6 token: Pauldrons of the Forgotten Conqueror"
                }
              }
            ],
            "back": [
              {
                "id": 34190,
                "name": "Crimson Paragon's Cover",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Eredar Twins"
                }
              },
              {
                "id": 33593,
                "name": "Slikk's Cloak of Placation",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "60 Badge of Justice — G'eras, Shattrath"
                }
              }
            ],
            "chest": [
              {
                "id": 34216,
                "name": "Heroic Judicator's Chestguard",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "M'uru"
                }
              },
              {
                "id": 34945,
                "name": "Shattrath Protectorate's Breastplate",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "100 Badge of Justice — Smith Hauthaa, Isle of Quel'Danas"
                },
                "note": "Threat option"
              }
            ],
            "wrist": [
              {
                "id": 34433,
                "name": "Lightbringer Wristguards",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kalecgos / Eredar Twins",
                  "detail": "Tier 6 token: Bracers of the Forgotten Conqueror"
                }
              },
              {
                "id": 32232,
                "name": "Eternium Shell Bracers",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "High Warlord Naj'entus"
                }
              }
            ],
            "hands": [
              {
                "id": 34352,
                "name": "Borderland Fortress Grips",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Felmyst"
                }
              },
              {
                "id": 30985,
                "name": "Lightbringer Handguards",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Hyjal Summit",
                  "boss": "Azgalor",
                  "detail": "Tier 6 token: Gloves of the Forgotten Conqueror"
                }
              }
            ],
            "waist": [
              {
                "id": 34488,
                "name": "Lightbringer Waistguard",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Brutallus / Eredar Twins",
                  "detail": "Tier 6 token: Belt of the Forgotten Conqueror"
                }
              },
              {
                "id": 32342,
                "name": "Girdle of Mighty Resolve",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Gurtogg Bloodboil"
                }
              }
            ],
            "legs": [
              {
                "id": 34382,
                "name": "Judicator's Legguards",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "vendor",
                  "detail": "Yrma, Sunwell Plateau — trade Legplates of the Holy Juggernaut (Kalecgos) + 1 Sunmote"
                }
              },
              {
                "id": 30995,
                "name": "Lightbringer Legguards",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "The Illidari Council",
                  "detail": "Tier 6 token: Leggings of the Forgotten Conqueror"
                }
              }
            ],
            "feet": [
              {
                "id": 34560,
                "name": "Lightbringer Stompers",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Felmyst / Eredar Twins",
                  "detail": "Tier 6 token: Boots of the Forgotten Conqueror"
                }
              },
              {
                "id": 32245,
                "name": "Tide-stomper's Greaves",
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
                "id": 34213,
                "name": "Ring of Hardened Resolve",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "M'uru"
                }
              },
              {
                "id": 34888,
                "name": "Ring of the Stalwart Protector",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "60 Badge of Justice — G'eras, Shattrath"
                }
              },
              {
                "id": 30083,
                "name": "Ring of Sundered Souls",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Serpentshrine Cavern",
                  "boss": "Morogrim Tidewalker"
                }
              }
            ],
            "trinket": [
              {
                "id": 32501,
                "name": "Shadowmoon Insignia",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Gurtogg Bloodboil"
                }
              },
              {
                "id": 34473,
                "name": "Commendation of Kael'thas",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Magisters' Terrace",
                  "boss": "Priestess Delrissa",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 28528,
                "name": "Moroes' Lucky Pocket Watch",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Moroes"
                },
                "note": "Avoidance cooldown"
              }
            ],
            "mainhand": [
              {
                "id": 30910,
                "name": "Tempest of Chaos",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Hyjal Summit",
                  "boss": "Archimonde"
                },
                "note": "Spell damage = threat",
                "hand": "main",
                "weaponType": "Sword"
              },
              {
                "id": 34176,
                "name": "Reign of Misery",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Brutallus"
                },
                "hand": "main",
                "weaponType": "Mace"
              },
              {
                "id": 34009,
                "name": "Hammer of Judgement",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Hyjal Summit / Black Temple",
                  "detail": "Trash drop"
                },
                "hand": "main",
                "weaponType": "Mace"
              }
            ],
            "offhand": [
              {
                "id": 34185,
                "name": "Sword Breaker's Bulwark",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Felmyst"
                },
                "hand": "off",
                "weaponType": "Shield"
              },
              {
                "id": 32375,
                "name": "Bulwark of Azzinoth",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Illidan Stormrage"
                },
                "hand": "off",
                "weaponType": "Shield"
              }
            ],
            "ranged": [
              {
                "id": 29388,
                "name": "Libram of Repentance",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "15 Badge of Justice — G'eras, Shattrath"
                },
                "note": "Avoidance / uncrushability",
                "weaponType": "Libram"
              },
              {
                "id": 32368,
                "name": "Tome of the Lightbringer",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Mother Shahraz"
                },
                "note": "Mitigation (block value)",
                "weaponType": "Libram"
              },
              {
                "id": 33504,
                "name": "Libram of Divine Purpose",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "badge",
                  "detail": "20 Badge of Justice — G'eras, Shattrath"
                },
                "note": "Threat",
                "weaponType": "Libram"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "retribution",
      "name": "Retribution",
      "role": "dps",
      "icon": "spell_holy_auraoflight",
      "statPriority": "Hit (9% / 142 rating) > Expertise (26) > Strength > Crit > Agility / AP > Haste",
      "notes": "Retribution wants a slow (3.5+ speed) two-hander: Seal of Command procs and Seal of Blood weight top-end weapon damage heavily, so weapon speed beats small DPS differences. Cap special-attack hit at 9% (about 142 hit rating) and work toward 26 expertise; guides list separate 'hit' and 'no-hit' picks per slot because overshooting the cap wastes itemization. Horde (Blood Elf) Ret runs Seal of Blood from the start, while Alliance rides Seal of Command until Seal of the Martyr parity arrives with patch 2.4 / Sunwell. Strength beats raw Attack Power through Blessing of Kings; crit and haste follow. The crafted Lionheart Champion (or Deep Thunder for hammersmiths) is BiS from pre-raid all the way until late tiers, so pick up Blacksmithing early. Pure 2H spec — the offhand slot stays empty.",
      "enchants": {
        "head": "Glyph of Ferocity (+34 Attack Power, +16 Hit rating) — Cenarion Expedition Revered",
        "shoulder": "Greater Inscription of Vengeance (Aldor Exalted) / Greater Inscription of the Blade (Scryers Exalted)",
        "back": "Enchant Cloak - Greater Agility (+12 Agility)",
        "chest": "Enchant Chest - Exceptional Stats (+6 all stats)",
        "wrist": "Enchant Bracer - Brawn (+12 Strength)",
        "hands": "Enchant Gloves - Major Strength (+15 Strength)",
        "legs": "Nethercobra Leg Armor (+50 Attack Power, +12 Crit rating)",
        "feet": "Enchant Boots - Cat's Swiftness (+6 Agility, minor run speed)",
        "mainhand": "Enchant 2H Weapon - Mongoose (or Major Agility)"
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
                "id": 32087,
                "name": "Mask of the Deceiver",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "50 Badge of Justice — G'eras, Shattrath"
                }
              },
              {
                "id": 28182,
                "name": "Helm of the Claw",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "quest",
                  "quest": "The Warlord's Hideout",
                  "zone": "Auchindoun, Terokkar Forest"
                }
              },
              {
                "id": 28224,
                "name": "Wastewalker Helm",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Old Hillsbrad Foothills",
                  "boss": "Epoch Hunter"
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
                  "detail": "25 Badge of Justice — G'eras, Shattrath"
                },
                "note": "Best with hit"
              },
              {
                "id": 29119,
                "name": "Haramad's Bargain",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "reputation",
                  "detail": "The Consortium — Exalted"
                },
                "note": "Best if hit-capped"
              },
              {
                "id": 29349,
                "name": "Adamantine Chain of the Unbroken",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "The Slave Pens",
                  "boss": "Quagmirran"
                }
              }
            ],
            "shoulder": [
              {
                "id": 33173,
                "name": "Ragesteel Shoulders",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Blacksmithing (BoE)",
                  "profession": "Blacksmithing"
                },
                "note": "2-set hit bonus with Ragesteel Breastplate"
              },
              {
                "id": 27771,
                "name": "Doomplate Shoulderguards",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Underbog",
                  "boss": "The Black Stalker",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 27797,
                "name": "Wastewalker Shoulderpads",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Auchenai Crypts",
                  "boss": "Avatar of the Martyred"
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
                  "detail": "Tailoring (BoE)",
                  "profession": "Tailoring"
                }
              },
              {
                "id": 27892,
                "name": "Cloak of the Inciter",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Shadow Labyrinth",
                  "boss": "Blackheart the Inciter"
                }
              }
            ],
            "chest": [
              {
                "id": 23522,
                "name": "Ragesteel Breastplate",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Blacksmithing (BoE)",
                  "profession": "Blacksmithing"
                },
                "note": "2-set hit bonus with Ragesteel Shoulders"
              },
              {
                "id": 28484,
                "name": "Bulwark of Kings",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Blacksmithing (BoP, requires Armorsmithing)",
                  "profession": "Blacksmithing"
                },
                "bop": true
              },
              {
                "id": 28403,
                "name": "Doomplate Chestguard",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "The Arcatraz",
                  "boss": "Harbinger Skyriss"
                }
              }
            ],
            "wrist": [
              {
                "id": 23537,
                "name": "Black Felsteel Bracers",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Blacksmithing (BoE)",
                  "profession": "Blacksmithing"
                }
              },
              {
                "id": 28999,
                "name": "Marshal's Scaled Bracers",
                "quality": "epic",
                "rank": 2,
                "faction": "alliance",
                "source": {
                  "type": "pvp",
                  "detail": "Honor Points vendor"
                }
              },
              {
                "id": 28646,
                "name": "General's Scaled Bracers",
                "quality": "epic",
                "rank": 2,
                "faction": "horde",
                "source": {
                  "type": "pvp",
                  "detail": "Honor Points vendor"
                }
              }
            ],
            "hands": [
              {
                "id": 30341,
                "name": "Flesh Handler's Gauntlets",
                "quality": "uncommon",
                "rank": 1,
                "source": {
                  "type": "quest",
                  "quest": "The Flesh Lies...",
                  "zone": "Auchindoun, Terokkar Forest"
                }
              },
              {
                "id": 18823,
                "name": "Aged Core Leather Gloves",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Molten Core",
                  "detail": "Classic carryover"
                }
              }
            ],
            "waist": [
              {
                "id": 29247,
                "name": "Girdle of the Deathdealer",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Black Morass",
                  "boss": "Aeonus",
                  "detail": "Heroic only"
                },
                "note": "Best with hit"
              },
              {
                "id": 27985,
                "name": "Deathforge Girdle",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sethekk Halls",
                  "boss": "Talon King Ikiss"
                }
              }
            ],
            "legs": [
              {
                "id": 31544,
                "name": "Clefthoof Hide Leggings",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "quest",
                  "quest": "Showdown",
                  "zone": "Nagrand",
                  "detail": "Separate Alliance/Horde quest versions"
                },
                "note": "Best with hit"
              },
              {
                "id": 30257,
                "name": "Shattrath Leggings",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "quest",
                  "quest": "Special Delivery to Shattrath City",
                  "zone": "Netherstorm"
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
                  "detail": "Leatherworking (BoE)",
                  "profession": "Leatherworking"
                },
                "note": "Best with hit"
              },
              {
                "id": 28176,
                "name": "Sha'tari Wrought Greaves",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "quest",
                  "quest": "Into the Heart of the Labyrinth",
                  "zone": "Shadow Labyrinth, Auchindoun"
                }
              }
            ],
            "finger": [
              {
                "id": 30834,
                "name": "Shapeshifter's Signet",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "reputation",
                  "detail": "Lower City — Exalted (Nakodu)"
                }
              },
              {
                "id": 29177,
                "name": "A'dal's Command",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "reputation",
                  "detail": "The Sha'tar — Exalted (Almaador)"
                }
              },
              {
                "id": 31920,
                "name": "Shaffar's Band of Brutality",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Mana-Tombs",
                  "boss": "Yor",
                  "detail": "Heroic only, summoned boss"
                },
                "note": "Hit option"
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
                  "detail": "41 Badge of Justice — G'eras, Shattrath"
                }
              },
              {
                "id": 28288,
                "name": "Abacus of Violent Odds",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Mechanar",
                  "boss": "Pathaleon the Calculator"
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
                "id": 28429,
                "name": "Lionheart Champion",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Blacksmithing (BoP, Master Swordsmithing)",
                  "profession": "Blacksmithing"
                },
                "bop": true,
                "hand": "two",
                "weaponType": "Sword"
              },
              {
                "id": 28441,
                "name": "Deep Thunder",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Blacksmithing (BoP, Master Hammersmithing)",
                  "profession": "Blacksmithing"
                },
                "note": "Equal pick for hammersmiths",
                "bop": true,
                "hand": "two",
                "weaponType": "Mace"
              },
              {
                "id": 24550,
                "name": "Gladiator's Greatsword",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "pvp",
                  "detail": "Season 1 Arena Points vendor"
                },
                "note": "Best non-Blacksmith option",
                "hand": "two",
                "weaponType": "Sword"
              }
            ],
            "ranged": [
              {
                "id": 27484,
                "name": "Libram of Avengement",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Blood Furnace",
                  "boss": "The Maker",
                  "detail": "Heroic only"
                },
                "weaponType": "Libram"
              },
              {
                "id": 31033,
                "name": "Libram of Righteous Power",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "quest",
                  "quest": "News of Victory",
                  "zone": "Shadowmoon Valley",
                  "detail": "Separate Alliance/Horde quest versions"
                },
                "weaponType": "Libram"
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
                "id": 29073,
                "name": "Justicar Crown",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar",
                  "detail": "Tier 4 token: Helm of the Fallen Champion"
                }
              },
              {
                "id": 32087,
                "name": "Mask of the Deceiver",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "50 Badge of Justice — G'eras, Shattrath"
                },
                "note": "Hit option"
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
                  "detail": "25 Badge of Justice — G'eras, Shattrath"
                },
                "note": "Best with hit"
              },
              {
                "id": 28509,
                "name": "Worgen Claw Necklace",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Attumen the Huntsman"
                }
              },
              {
                "id": 28745,
                "name": "Mithril Chain of Heroism",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Chess Event"
                },
                "note": "Best if hit-capped"
              }
            ],
            "shoulder": [
              {
                "id": 30740,
                "name": "Ripfiend Shoulderplates",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "zone": "Hellfire Peninsula",
                  "boss": "Doom Lord Kazzak",
                  "detail": "World boss"
                }
              },
              {
                "id": 29075,
                "name": "Justicar Shoulderplates",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "High King Maulgar",
                  "detail": "Tier 4 token: Pauldrons of the Fallen Champion"
                }
              },
              {
                "id": 33173,
                "name": "Ragesteel Shoulders",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "crafted",
                  "detail": "Blacksmithing (BoE)",
                  "profession": "Blacksmithing"
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
                  "detail": "Tailoring (BoE)",
                  "profession": "Tailoring"
                }
              },
              {
                "id": 28672,
                "name": "Drape of the Dark Reavers",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Shade of Aran"
                }
              }
            ],
            "chest": [
              {
                "id": 28484,
                "name": "Bulwark of Kings",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Blacksmithing (BoP, requires Armorsmithing)",
                  "profession": "Blacksmithing"
                },
                "bop": true
              },
              {
                "id": 30730,
                "name": "Terrorweave Tunic",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "zone": "Hellfire Peninsula",
                  "boss": "Doom Lord Kazzak",
                  "detail": "World boss"
                }
              },
              {
                "id": 29071,
                "name": "Justicar Breastplate",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Magtheridon's Lair",
                  "boss": "Magtheridon",
                  "detail": "Tier 4 token: Chestguard of the Fallen Champion"
                }
              }
            ],
            "wrist": [
              {
                "id": 28795,
                "name": "Bladespire Warbands",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "High King Maulgar"
                }
              },
              {
                "id": 23537,
                "name": "Black Felsteel Bracers",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Blacksmithing (BoE)",
                  "profession": "Blacksmithing"
                }
              }
            ],
            "hands": [
              {
                "id": 30644,
                "name": "Grips of Deftness",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "detail": "Trash drop"
                }
              },
              {
                "id": 30341,
                "name": "Flesh Handler's Gauntlets",
                "quality": "uncommon",
                "rank": 2,
                "source": {
                  "type": "quest",
                  "quest": "The Flesh Lies...",
                  "zone": "Auchindoun, Terokkar Forest"
                }
              }
            ],
            "waist": [
              {
                "id": 28779,
                "name": "Girdle of the Endless Pit",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Magtheridon's Lair",
                  "boss": "Magtheridon"
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
                "id": 31544,
                "name": "Clefthoof Hide Leggings",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "quest",
                  "quest": "Showdown",
                  "zone": "Nagrand",
                  "detail": "Separate Alliance/Horde quest versions"
                },
                "note": "Best with hit"
              },
              {
                "id": 30739,
                "name": "Scaled Greaves of the Marksman",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "zone": "Hellfire Peninsula",
                  "boss": "Doom Lord Kazzak",
                  "detail": "World boss"
                }
              }
            ],
            "feet": [
              {
                "id": 28608,
                "name": "Ironstriders of Urgency",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Nightbane"
                }
              },
              {
                "id": 28545,
                "name": "Edgewalker Longboots",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Moroes"
                },
                "note": "Hit option"
              }
            ],
            "finger": [
              {
                "id": 30834,
                "name": "Shapeshifter's Signet",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "reputation",
                  "detail": "Lower City — Exalted (Nakodu)"
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
                "id": 31920,
                "name": "Shaffar's Band of Brutality",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Mana-Tombs",
                  "boss": "Yor",
                  "detail": "Heroic only, summoned boss"
                },
                "note": "Hit option"
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
                  "detail": "41 Badge of Justice — G'eras, Shattrath"
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
                "id": 28429,
                "name": "Lionheart Champion",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Blacksmithing (BoP, Master Swordsmithing)",
                  "profession": "Blacksmithing"
                },
                "note": "Deep Thunder equal for hammersmiths",
                "bop": true,
                "hand": "two",
                "weaponType": "Sword"
              },
              {
                "id": 30722,
                "name": "Ethereum Nexus-Reaver",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "zone": "Shadowmoon Valley",
                  "boss": "Doomwalker",
                  "detail": "World boss"
                },
                "note": "Best non-Blacksmith option",
                "hand": "two",
                "weaponType": "Axe"
              },
              {
                "id": 28773,
                "name": "Gorehowl",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar"
                },
                "hand": "two",
                "weaponType": "Axe"
              }
            ],
            "ranged": [
              {
                "id": 27484,
                "name": "Libram of Avengement",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Blood Furnace",
                  "boss": "The Maker",
                  "detail": "Heroic only"
                },
                "weaponType": "Libram"
              },
              {
                "id": 31033,
                "name": "Libram of Righteous Power",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "quest",
                  "quest": "News of Victory",
                  "zone": "Shadowmoon Valley",
                  "detail": "Separate Alliance/Horde quest versions"
                },
                "weaponType": "Libram"
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
                "id": 34244,
                "name": "Duplicitous Guise",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                }
              },
              {
                "id": 34333,
                "name": "Coif of Alleria",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                },
                "note": "Armor-penetration build"
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
              },
              {
                "id": 34358,
                "name": "Hard Khorium Choker",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Jewelcrafting (BoP — requires the profession yourself)",
                  "profession": "Jewelcrafting"
                },
                "note": "Tied with Clutch of Demise",
                "bop": true
              },
              {
                "id": 34679,
                "name": "Shattered Sun Pendant of Might",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "reputation",
                  "detail": "Shattered Sun Offensive — Exalted (Eldara Dawnrunner); Aldor proc recommended"
                }
              }
            ],
            "shoulder": [
              {
                "id": 34388,
                "name": "Pauldrons of Berserking",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "vendor",
                  "detail": "Yrma, Sunwell Plateau — trade Pauldrons of Perseverance (Eredar Twins) + 1 Sunmote"
                }
              },
              {
                "id": 34195,
                "name": "Shoulderpads of Vehemence",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Eredar Twins"
                },
                "note": "Best in higher-hit setups"
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
              },
              {
                "id": 33590,
                "name": "Cloak of Fiends",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Zul'Aman",
                  "detail": "Timed-run reward"
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
                  "detail": "Yrma, Sunwell Plateau — trade Harness of Carnal Instinct (M'uru) + 1 Sunmote"
                },
                "note": "Contested with other melee"
              },
              {
                "id": 34215,
                "name": "Warharness of Reckless Fury",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "M'uru"
                }
              }
            ],
            "wrist": [
              {
                "id": 34431,
                "name": "Lightbringer Bands",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kalecgos / Eredar Twins",
                  "detail": "Tier 6 token: Bracers of the Forgotten Conqueror"
                }
              },
              {
                "id": 32574,
                "name": "Bindings of Lightning Reflexes",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking (BoE)",
                  "profession": "Leatherworking"
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
                "id": 34370,
                "name": "Gloves of Immortal Dusk",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking (BoP, Sunmote recipe)",
                  "profession": "Leatherworking"
                },
                "note": "Tied with Thalassian Ranger Gauntlets"
              }
            ],
            "waist": [
              {
                "id": 34485,
                "name": "Lightbringer Girdle",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Brutallus / Eredar Twins",
                  "detail": "Tier 6 token: Belt of the Forgotten Conqueror — lowest-priority tier piece"
                }
              },
              {
                "id": 30106,
                "name": "Belt of One-Hundred Deaths",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Serpentshrine Cavern",
                  "boss": "Lady Vashj"
                }
              }
            ],
            "legs": [
              {
                "id": 34180,
                "name": "Felfury Legplates",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Brutallus"
                }
              },
              {
                "id": 34188,
                "name": "Leggings of the Immortal Night",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Felmyst"
                },
                "note": "Best in higher-hit setups"
              }
            ],
            "feet": [
              {
                "id": 34561,
                "name": "Lightbringer Boots",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Felmyst / Eredar Twins",
                  "detail": "Tier 6 token: Boots of the Forgotten Conqueror — high priority (expertise)"
                }
              },
              {
                "id": 32366,
                "name": "Shadowmaster's Boots",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Mother Shahraz"
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
                  "detail": "Jewelcrafting (BoP — requires the profession yourself)",
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
                  "boss": "Eredar Twins"
                },
                "note": "Contested"
              },
              {
                "id": 32526,
                "name": "Band of Devastation",
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
                "id": 34472,
                "name": "Shard of Contempt",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Magisters' Terrace",
                  "boss": "Priestess Delrissa",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 34427,
                "name": "Blackened Naaru Sliver",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "M'uru"
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
                },
                "note": "Humans pair Sliver + DST (sword expertise)"
              }
            ],
            "mainhand": [
              {
                "id": 34247,
                "name": "Apolyon, the Soul-Render",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                },
                "hand": "two",
                "weaponType": "Sword"
              },
              {
                "id": 34183,
                "name": "Shivering Felspine",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "detail": "Trash drop"
                },
                "hand": "two",
                "weaponType": "Polearm"
              },
              {
                "id": 34891,
                "name": "The Blade of Harbingers",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "badge",
                  "detail": "150 Badge of Justice — Smith Hauthaa, Isle of Quel'Danas"
                },
                "hand": "two",
                "weaponType": "Axe"
              }
            ],
            "ranged": [
              {
                "id": 27484,
                "name": "Libram of Avengement",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Blood Furnace",
                  "boss": "The Maker",
                  "detail": "Heroic only"
                },
                "note": "Still BiS in P5",
                "weaponType": "Libram"
              },
              {
                "id": 33503,
                "name": "Libram of Divine Judgement",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "20 Badge of Justice — G'eras, Shattrath"
                },
                "weaponType": "Libram"
              }
            ]
          }
        }
      ]
    }
  ]
});
