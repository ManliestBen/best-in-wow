WOWDATA.register({
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
      "icon": "ability_racial_bearform",
      "statPriority": "Armor (cap 35,880 vs bosses) > Stamina > Agility > Dodge > Expertise/Hit (threat)",
      "notes": "Bears tank in 'rogue leather': Dire Bear Form multiplies armor on leather and cloth items by roughly 4.7x with Thick Hide, so high-armor DPS leather (Heavy Clefthoof, Wastewalker, Tunic of Assassination) beats almost any 'tank' piece. The armor cap vs raid bosses is 35,880 (75% physical reduction) — once capped, trade armor for Stamina and Agility. Heart of the Wild adds +20% Stamina in bear, making Stamina the best-scaling stat, while Agility doubles as dodge and crit. Keep a threat set (hit/expertise/AP) for farm content. In P5, Sunwell Radiance strips 20% dodge — stack Stamina/armor.",
      "enchants": {
        "head": "Glyph of the Defender — Keepers of Time Revered (Glyph of Ferocity for threat)",
        "shoulder": "Greater Inscription of Warding (Aldor) / Greater Inscription of the Knight (Scryers)",
        "back": "Enchant Cloak - Greater Agility (+12 Agility)",
        "chest": "Enchant Chest - Exceptional Stats (+6 all stats)",
        "wrist": "Enchant Bracer - Fortitude (+12 Stamina)",
        "hands": "Enchant Gloves - Superior Agility (+15 Agility)",
        "legs": "Nethercleft Leg Armor (+40 Stamina / +12 Agility)",
        "feet": "Enchant Boots - Boar's Speed (+9 Stamina, minor run speed)",
        "mainhand": "Enchant Weapon - Mongoose"
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
                "id": 29502,
                "name": "Cobrascale Hood",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking; pattern drops in Heroic Slave Pens",
                  "profession": "Leatherworking"
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
                  "instance": "The Steamvault"
                },
                "note": "Best threat option"
              },
              {
                "id": 28224,
                "name": "Wastewalker Helm",
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
            "neck": [
              {
                "id": 29815,
                "name": "Chain of Glowing Tendrils",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "quest",
                  "quest": "Hitting the Motherlode",
                  "zone": "Netherstorm"
                }
              },
              {
                "id": 28168,
                "name": "Insignia of the Mag'hari Hero",
                "quality": "rare",
                "rank": 2,
                "faction": "horde",
                "source": {
                  "type": "quest",
                  "quest": "Hero of the Mag'har",
                  "zone": "Nagrand"
                }
              },
              {
                "id": 29381,
                "name": "Choker of Vile Intent",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "badge",
                  "detail": "G'eras, Shattrath — 25 Badge of Justice"
                },
                "note": "Threat"
              }
            ],
            "shoulder": [
              {
                "id": 27434,
                "name": "Mantle of Perenolde",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Old Hillsbrad Foothills",
                  "boss": "Epoch Hunter"
                }
              },
              {
                "id": 27776,
                "name": "Shoulderpads of Assassination",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sethekk Halls",
                  "boss": "Talon King Ikiss"
                }
              }
            ],
            "back": [
              {
                "id": 28256,
                "name": "Thoriumweave Cloak",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Mechanar",
                  "boss": "Mechano-Lord Capacitus"
                }
              },
              {
                "id": 24258,
                "name": "Resolute Cape",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE)",
                  "profession": "Tailoring"
                }
              }
            ],
            "chest": [
              {
                "id": 25689,
                "name": "Heavy Clefthoof Vest",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking — Heavy Clefthoof 3-piece",
                  "profession": "Leatherworking"
                }
              },
              {
                "id": 28204,
                "name": "Tunic of Assassination",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Mechanar",
                  "boss": "Pathaleon the Calculator"
                },
                "note": "Threat"
              }
            ],
            "wrist": [
              {
                "id": 30944,
                "name": "Umberhowl's Collar",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "quest",
                  "quest": "The Cipher of Damnation - The Third Fragment Recovered",
                  "zone": "Shadowmoon Valley"
                }
              },
              {
                "id": 29263,
                "name": "Forestheart Bracers",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Shattered Halls",
                  "boss": "Warchief Kargath Bladefist",
                  "detail": "Heroic only"
                }
              }
            ],
            "hands": [
              {
                "id": 30943,
                "name": "Verdant Gloves",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "quest",
                  "quest": "Akama's Promise",
                  "zone": "Shadowmoon Valley"
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
                  "zone": "Netherstorm"
                },
                "note": "Threat"
              }
            ],
            "waist": [
              {
                "id": 30942,
                "name": "Manimal's Cinch",
                "quality": "uncommon",
                "rank": 1,
                "source": {
                  "type": "quest",
                  "quest": "Enraged Spirits of Air",
                  "zone": "Shadowmoon Valley"
                }
              },
              {
                "id": 29264,
                "name": "Tree-Mender's Belt",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Hellfire Ramparts",
                  "boss": "Reinforced Fel Iron Chest",
                  "detail": "Heroic only"
                },
                "note": "Mitigation"
              },
              {
                "id": 29247,
                "name": "Girdle of the Deathdealer",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "The Black Morass",
                  "boss": "Aeonus",
                  "detail": "Heroic only"
                },
                "note": "Threat"
              }
            ],
            "legs": [
              {
                "id": 25690,
                "name": "Heavy Clefthoof Leggings",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking — Heavy Clefthoof 3-piece",
                  "profession": "Leatherworking"
                }
              },
              {
                "id": 31544,
                "name": "Clefthoof Hide Leggings",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "quest",
                  "quest": "Showdown",
                  "zone": "Blade's Edge Mountains"
                },
                "note": "Threat"
              }
            ],
            "feet": [
              {
                "id": 25691,
                "name": "Heavy Clefthoof Boots",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking — Heavy Clefthoof 3-piece",
                  "profession": "Leatherworking"
                }
              },
              {
                "id": 28339,
                "name": "Boots of the Shifting Sands",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Botanica",
                  "boss": "Laj"
                },
                "note": "Threat"
              }
            ],
            "finger": [
              {
                "id": 29384,
                "name": "Ring of Unyielding Force",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "G'eras, Shattrath — 25 Badge of Justice"
                }
              },
              {
                "id": 30834,
                "name": "Shapeshifter's Signet",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "reputation",
                  "detail": "Lower City Exalted — Nakodu, Shattrath"
                }
              },
              {
                "id": 27436,
                "name": "Iron Band of the Unbreakable",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Old Hillsbrad Foothills",
                  "boss": "Lieutenant Drake"
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
                  "detail": "G'eras, Shattrath — 41 Badge of Justice"
                },
                "note": "Threat"
              },
              {
                "id": 28121,
                "name": "Icon of Unyielding Courage",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Blood Furnace",
                  "boss": "Keli'dan the Breaker",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 23206,
                "name": "Mark of the Champion",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "quest",
                  "quest": "The Fall of Kel'Thuzad",
                  "instance": "Naxxramas (Classic)"
                },
                "note": "Undead/demons only"
              }
            ],
            "mainhand": [
              {
                "id": 29171,
                "name": "Earthwarden",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "reputation",
                  "detail": "Cenarion Expedition Exalted — Fedryen Swiftspear"
                }
              },
              {
                "id": 29359,
                "name": "Feral Staff of Lashing",
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
                "id": 31334,
                "name": "Staff of Natural Fury",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "world-drop",
                  "zone": "Outland (BoE)"
                }
              }
            ],
            "ranged": [
              {
                "id": 23198,
                "name": "Idol of Brutality",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Stratholme (Classic)",
                  "boss": "Magistrate Barthilas"
                },
                "note": "Best with high rage"
              },
              {
                "id": 28064,
                "name": "Idol of the Wild",
                "quality": "uncommon",
                "rank": 2,
                "source": {
                  "type": "quest",
                  "quest": "Colossal Menace",
                  "zone": "Hellfire Peninsula"
                }
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
                "id": 29098,
                "name": "Stag-Helm of Malorne",
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
                "id": 28796,
                "name": "Malefic Mask of the Shadows",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "High King Maulgar"
                },
                "note": "Best threat"
              }
            ],
            "neck": [
              {
                "id": 28509,
                "name": "Worgen Claw Necklace",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Attumen the Huntsman"
                }
              },
              {
                "id": 29381,
                "name": "Choker of Vile Intent",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "G'eras, Shattrath — 25 Badge of Justice"
                }
              }
            ],
            "shoulder": [
              {
                "id": 29100,
                "name": "Mantle of Malorne",
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
                "id": 28755,
                "name": "Bladed Shoulderpads of the Merciless",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Echo of Medivh (Chess Event)"
                },
                "note": "Threat"
              }
            ],
            "back": [
              {
                "id": 28660,
                "name": "Gilded Thorium Cloak",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Terestian Illhoof"
                },
                "note": "Mitigation; lasts until Sunwell"
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
                },
                "note": "Threat"
              }
            ],
            "chest": [
              {
                "id": 29096,
                "name": "Breastplate of Malorne",
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
                "id": 25689,
                "name": "Heavy Clefthoof Vest",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking",
                  "profession": "Leatherworking"
                },
                "note": "Armor-cap filler"
              }
            ],
            "wrist": [
              {
                "id": 29263,
                "name": "Forestheart Bracers",
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
                "id": 28988,
                "name": "Marshal's Leather Bracers",
                "quality": "epic",
                "rank": 2,
                "faction": "alliance",
                "source": {
                  "type": "pvp",
                  "detail": "Honor + Warsong Gulch marks; Horde equivalent: General's Leather Bracers"
                }
              }
            ],
            "hands": [
              {
                "id": 29097,
                "name": "Gauntlets of Malorne",
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
                "id": 30644,
                "name": "Grips of Deftness",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Trash mobs"
                },
                "note": "Threat"
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
                },
                "note": "Threat"
              },
              {
                "id": 29264,
                "name": "Tree-Mender's Belt",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Hellfire Ramparts",
                  "boss": "Reinforced Fel Iron Chest",
                  "detail": "Heroic only"
                },
                "note": "Mitigation"
              }
            ],
            "legs": [
              {
                "id": 29099,
                "name": "Greaves of Malorne",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "Gruul the Dragonkiller",
                  "detail": "Tier 4 token: Leggings of the Fallen Defender"
                }
              },
              {
                "id": 28741,
                "name": "Skulker's Greaves",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Netherspite"
                },
                "note": "Threat"
              }
            ],
            "feet": [
              {
                "id": 30674,
                "name": "Zierhut's Lost Treads",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Trash mobs"
                },
                "note": "Mitigation"
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
                "note": "Threat"
              }
            ],
            "finger": [
              {
                "id": 29279,
                "name": "Violet Signet of the Great Protector",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "reputation",
                  "detail": "The Violet Eye Exalted (Karazhan)"
                },
                "note": "Lasts until Sunwell"
              },
              {
                "id": 28792,
                "name": "A'dal's Signet of Defense",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "quest",
                  "quest": "The Fall of Magtheridon",
                  "instance": "Magtheridon's Lair"
                }
              },
              {
                "id": 30834,
                "name": "Shapeshifter's Signet",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "reputation",
                  "detail": "Lower City Exalted"
                },
                "note": "Threat"
              }
            ],
            "trinket": [
              {
                "id": 28528,
                "name": "Moroes' Lucky Pocket Watch",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Moroes"
                },
                "note": "Survivability"
              },
              {
                "id": 28830,
                "name": "Dragonspine Trophy",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "Gruul the Dragonkiller"
                },
                "note": "Threat; heavily contested"
              },
              {
                "id": 29383,
                "name": "Bloodlust Brooch",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "badge",
                  "detail": "G'eras, Shattrath — 41 Badge of Justice"
                }
              }
            ],
            "mainhand": [
              {
                "id": 29171,
                "name": "Earthwarden",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "reputation",
                  "detail": "Cenarion Expedition Exalted"
                },
                "note": "Mitigation"
              },
              {
                "id": 28658,
                "name": "Terestian's Stranglestaff",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Terestian Illhoof"
                },
                "note": "Threat"
              }
            ],
            "ranged": [
              {
                "id": 23198,
                "name": "Idol of Brutality",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Stratholme (Classic)",
                  "boss": "Magistrate Barthilas"
                }
              },
              {
                "id": 28064,
                "name": "Idol of the Wild",
                "quality": "uncommon",
                "rank": 2,
                "source": {
                  "type": "quest",
                  "quest": "Colossal Menace",
                  "zone": "Hellfire Peninsula"
                }
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
                "id": 34404,
                "name": "Mask of the Fury Hunter",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "vendor",
                  "detail": "Yrma, Sunwell Plateau — Duplicitous Guise + 1 Sunmote (base drops from Kil'jaeden)"
                }
              },
              {
                "id": 31039,
                "name": "Thunderheart Cover",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Hyjal Summit",
                  "boss": "Archimonde",
                  "detail": "Tier 6 token: Helm of the Forgotten Vanquisher"
                },
                "note": "Keeps 4pc T6"
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
                "id": 32362,
                "name": "Pendant of Titans",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Reliquary of Souls"
                },
                "note": "Mitigation"
              }
            ],
            "shoulder": [
              {
                "id": 34392,
                "name": "Demontooth Shoulderpads",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "vendor",
                  "detail": "Yrma, Sunwell Plateau — Shoulderpads of Vehemence + 1 Sunmote (base drops from Eredar Twins)"
                }
              },
              {
                "id": 31048,
                "name": "Thunderheart Pauldrons",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Mother Shahraz",
                  "detail": "Tier 6 token: Pauldrons of the Forgotten Vanquisher"
                },
                "note": "Threat, 4pc T6"
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
                "id": 34241,
                "name": "Cloak of Unforgivable Sin",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                }
              }
            ],
            "chest": [
              {
                "id": 34211,
                "name": "Harness of Carnal Instinct",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "M'uru"
                }
              },
              {
                "id": 31042,
                "name": "Thunderheart Chestguard",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Illidan Stormrage",
                  "detail": "Tier 6 token: Chestguard of the Forgotten Vanquisher"
                }
              }
            ],
            "wrist": [
              {
                "id": 34444,
                "name": "Thunderheart Wristguards",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kalecgos",
                  "detail": "Tier 6.5 token: Bracers of the Forgotten Vanquisher"
                }
              }
            ],
            "hands": [
              {
                "id": 34408,
                "name": "Gloves of the Forest Drifter",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "vendor",
                  "detail": "Yrma, Sunwell Plateau — Shadowed Gauntlets of Paroxysm + 1 Sunmote (base drops from M'uru)"
                }
              },
              {
                "id": 34911,
                "name": "Handwraps of the Aggressor",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "Smith Hauthaa, Isle of Quel'Danas — 75 Badge of Justice"
                }
              }
            ],
            "waist": [
              {
                "id": 34556,
                "name": "Thunderheart Waistguard",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Brutallus",
                  "detail": "Tier 6.5 token: Belt of the Forgotten Vanquisher"
                }
              },
              {
                "id": 35156,
                "name": "Guardian's Leather Belt",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "pvp",
                  "detail": "Honor + Arathi Basin marks"
                },
                "note": "Mitigation"
              }
            ],
            "legs": [
              {
                "id": 34385,
                "name": "Leggings of the Immortal Beast",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "vendor",
                  "detail": "Yrma, Sunwell Plateau — Leggings of the Immortal Night + 1 Sunmote (base drops from Felmyst)"
                }
              },
              {
                "id": 34910,
                "name": "Tameless Breeches",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "Smith Hauthaa, Isle of Quel'Danas — 60 Badge of Justice"
                }
              }
            ],
            "feet": [
              {
                "id": 34573,
                "name": "Thunderheart Treads",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Felmyst",
                  "detail": "Tier 6.5 token: Boots of the Forgotten Vanquisher"
                }
              },
              {
                "id": 32593,
                "name": "Treads of the Den Mother",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Trash mobs"
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
                  "detail": "Smith Hauthaa, Isle of Quel'Danas — 60 Badge of Justice"
                },
                "note": "Below armor cap"
              },
              {
                "id": 34361,
                "name": "Hard Khorium Band",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "crafted",
                  "detail": "Jewelcrafting (BoP)",
                  "profession": "Jewelcrafting"
                },
                "note": "When armor-capped"
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
                "id": 32658,
                "name": "Badge of Tenacity",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "vendor",
                  "detail": "Ogri'la, Blade's Edge — Depleted Badge + 50 Apexis Shards (BoE)"
                }
              },
              {
                "id": 34473,
                "name": "Commendation of Kael'thas",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Magisters' Terrace",
                  "boss": "Priestess Delrissa",
                  "detail": "Heroic only"
                }
              }
            ],
            "mainhand": [
              {
                "id": 30883,
                "name": "Pillar of Ferocity",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Hyjal Summit",
                  "boss": "Anetheron"
                },
                "note": "Mitigation"
              },
              {
                "id": 34198,
                "name": "Stanchion of Primal Instinct",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Eredar Twins"
                },
                "note": "Threat"
              }
            ],
            "ranged": [
              {
                "id": 33509,
                "name": "Idol of Terror",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "G'eras, Shattrath — 20 Badge of Justice"
                }
              },
              {
                "id": 32257,
                "name": "Idol of the White Stag",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Supremus"
                }
              }
            ]
          }
        }
      ]
    },
    {
      "id": "restoration",
      "name": "Restoration",
      "role": "healer",
      "icon": "spell_nature_healingtouch",
      "statPriority": "+Healing > Mp5 > Spirit > Intellect > Stamina",
      "notes": "TBC HoTs scale fully with +Healing, so raw +Heal beats everything — Lifebloom's cheap, stackable ticks make Resto the premier tank healer. Tree of Life locks you into HoTs. Idol of the Emerald Queen (a normal Shadow Labyrinth drop) boosts every Lifebloom tick and remains BiS through Sunwell. Primal Mooncloth (tailors only) and Whitemend pieces are worth wearing deep into raids. Aldor is the stronger healer choice for the Greater Inscription of Faith shoulder enchant.",
      "enchants": {
        "head": "Glyph of Renewal — Honor Hold / Thrallmar Revered",
        "shoulder": "Greater Inscription of Faith (Aldor) / Greater Inscription of the Oracle (Scryers)",
        "back": "Enchant Cloak - Subtlety (threat reduction)",
        "chest": "Enchant Chest - Exceptional Stats (+6 all stats)",
        "wrist": "Enchant Bracer - Superior Healing (+30 Healing)",
        "hands": "Enchant Gloves - Major Healing (+35 Healing)",
        "legs": "Golden Spellthread (+66 Healing / +20 Stamina)",
        "feet": "Enchant Boots - Vitality (+4 HP5 / +4 MP5)",
        "mainhand": "Enchant Weapon - Major Healing (+81 Healing)"
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
                "id": 24264,
                "name": "Whitemend Hood",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE)",
                  "profession": "Tailoring"
                }
              },
              {
                "id": 28413,
                "name": "Hallowed Crown",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Arcatraz",
                  "boss": "Harbinger Skyriss"
                }
              }
            ],
            "neck": [
              {
                "id": 30377,
                "name": "Karja's Medallion",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "quest",
                  "quest": "Shutting Down Manaforge Ara",
                  "zone": "Netherstorm"
                }
              },
              {
                "id": 31691,
                "name": "Natasha's Guardian Cord",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "quest",
                  "quest": "The Hound-Master",
                  "zone": "Blade's Edge Mountains"
                }
              }
            ],
            "shoulder": [
              {
                "id": 21874,
                "name": "Primal Mooncloth Shoulders",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Mooncloth Tailoring (BoP — tailors only)",
                  "profession": "Tailoring"
                },
                "bop": true
              },
              {
                "id": 27775,
                "name": "Hallowed Pauldrons",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Shadow Labyrinth",
                  "boss": "Grandmaster Vorpil"
                }
              }
            ],
            "back": [
              {
                "id": 31329,
                "name": "Lifegiving Cloak",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "world-drop",
                  "zone": "Outland (BoE)"
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
              }
            ],
            "chest": [
              {
                "id": 21875,
                "name": "Primal Mooncloth Robe",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Mooncloth Tailoring (BoP — tailors only)",
                  "profession": "Tailoring"
                },
                "bop": true
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
              }
            ],
            "wrist": [
              {
                "id": 29183,
                "name": "Bindings of the Timewalker",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "reputation",
                  "detail": "Keepers of Time Exalted — Alurmi"
                }
              },
              {
                "id": 29523,
                "name": "Windhawk Bracers",
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
            "hands": [
              {
                "id": 29506,
                "name": "Gloves of the Living Touch",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE)",
                  "profession": "Tailoring"
                }
              }
            ],
            "waist": [
              {
                "id": 21873,
                "name": "Primal Mooncloth Belt",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Mooncloth Tailoring (BoP — tailors only)",
                  "profession": "Tailoring"
                },
                "bop": true
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
                "id": 24261,
                "name": "Whitemend Pants",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE)",
                  "profession": "Tailoring"
                }
              },
              {
                "id": 30543,
                "name": "Pontifex Kilt",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Steamvault",
                  "boss": "Warlord Kalithresh",
                  "detail": "Heroic only"
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
                "id": 27780,
                "name": "Ring of Fabled Hope",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Underbog",
                  "boss": "The Black Stalker",
                  "detail": "Heroic only"
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
                  "detail": "Honor Hold Revered — Logistics Officer Ulrike"
                }
              },
              {
                "id": 29168,
                "name": "Ancestral Band",
                "quality": "rare",
                "rank": 3,
                "faction": "horde",
                "source": {
                  "type": "reputation",
                  "detail": "Thrallmar Revered — Quartermaster Urgronn"
                }
              },
              {
                "id": 31383,
                "name": "Spiritualist's Mark of the Sha'tar",
                "quality": "rare",
                "rank": 4,
                "source": {
                  "type": "quest",
                  "quest": "Battle of the Crimson Watch",
                  "zone": "Shadowmoon Valley"
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
                  "detail": "G'eras, Shattrath — 41 Badge of Justice"
                }
              },
              {
                "id": 30841,
                "name": "Lower City Prayerbook",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "reputation",
                  "detail": "Lower City Revered — Nakodu"
                }
              },
              {
                "id": 25634,
                "name": "Oshu'gun Relic",
                "quality": "uncommon",
                "rank": 3,
                "source": {
                  "type": "quest",
                  "quest": "Gava'xi",
                  "zone": "Nagrand"
                }
              }
            ],
            "mainhand": [
              {
                "id": 27791,
                "name": "Serpentcrest Life-Staff",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Steamvault",
                  "boss": "Mekgineer Steamrigger"
                },
                "note": "Staff — no offhand"
              },
              {
                "id": 29175,
                "name": "Gavel of Pure Light",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "reputation",
                  "detail": "The Sha'tar Exalted — Almaador"
                },
                "note": "1H — pair with offhand"
              }
            ],
            "ranged": [
              {
                "id": 27886,
                "name": "Idol of the Emerald Queen",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Shadow Labyrinth",
                  "boss": "Ambassador Hellmaw"
                },
                "note": "BiS through Sunwell"
              },
              {
                "id": 25643,
                "name": "Harold's Rejuvenating Broach",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "quest",
                  "quest": "The Exorcism of Colonel Jules",
                  "zone": "Hellfire Peninsula"
                }
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
                "id": 24264,
                "name": "Whitemend Hood",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE)",
                  "profession": "Tailoring"
                }
              },
              {
                "id": 29086,
                "name": "Crown of Malorne",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar",
                  "detail": "Tier 4 token: Helm of the Fallen Defender"
                }
              }
            ],
            "neck": [
              {
                "id": 28822,
                "name": "Teeth of Gruul",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "Gruul the Dragonkiller"
                }
              },
              {
                "id": 30726,
                "name": "Archaic Charm of Presence",
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
                "id": 28609,
                "name": "Emberspur Talisman",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Nightbane"
                }
              }
            ],
            "shoulder": [
              {
                "id": 21874,
                "name": "Primal Mooncloth Shoulders",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Mooncloth Tailoring (BoP — tailors only)",
                  "profession": "Tailoring"
                },
                "bop": true
              },
              {
                "id": 29089,
                "name": "Shoulderguards of Malorne",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "High King Maulgar",
                  "detail": "Tier 4 token: Pauldrons of the Fallen Defender"
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
                "id": 31329,
                "name": "Lifegiving Cloak",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "world-drop",
                  "zone": "Outland (BoE)"
                }
              }
            ],
            "chest": [
              {
                "id": 21875,
                "name": "Primal Mooncloth Robe",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Mooncloth Tailoring (BoP — tailors only)",
                  "profession": "Tailoring"
                },
                "bop": true
              },
              {
                "id": 29087,
                "name": "Chestguard of Malorne",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Magtheridon's Lair",
                  "boss": "Magtheridon",
                  "detail": "Tier 4 token: Chestguard of the Fallen Defender"
                }
              }
            ],
            "wrist": [
              {
                "id": 29183,
                "name": "Bindings of the Timewalker",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "reputation",
                  "detail": "Keepers of Time Exalted — Alurmi"
                }
              },
              {
                "id": 29523,
                "name": "Windhawk Bracers",
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
            "hands": [
              {
                "id": 28521,
                "name": "Mitts of the Treemender",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Maiden of Virtue"
                }
              },
              {
                "id": 28508,
                "name": "Gloves of Saintly Blessings",
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
                "id": 21873,
                "name": "Primal Mooncloth Belt",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Mooncloth Tailoring (BoP — tailors only)",
                  "profession": "Tailoring"
                },
                "bop": true
              },
              {
                "id": 28655,
                "name": "Cord of Nature's Sustenance",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Terestian Illhoof"
                }
              }
            ],
            "legs": [
              {
                "id": 24261,
                "name": "Whitemend Pants",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE)",
                  "profession": "Tailoring"
                }
              },
              {
                "id": 28591,
                "name": "Earthsoul Leggings",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Opera Event"
                }
              },
              {
                "id": 30727,
                "name": "Gilded Trousers of Benediction",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "zone": "Shadowmoon Valley",
                  "boss": "Doomwalker",
                  "detail": "World boss"
                }
              }
            ],
            "feet": [
              {
                "id": 28752,
                "name": "Forestlord Striders",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Echo of Medivh (Chess Event)"
                }
              },
              {
                "id": 30737,
                "name": "Gold-Leaf Wildboots",
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
            "finger": [
              {
                "id": 29290,
                "name": "Violet Signet of the Grand Restorer",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "reputation",
                  "detail": "The Violet Eye Exalted (Karazhan)"
                }
              },
              {
                "id": 28763,
                "name": "Jade Ring of the Everliving",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Prince Malchezaar"
                }
              },
              {
                "id": 28790,
                "name": "Naaru Lightwarden's Band",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "quest",
                  "quest": "The Fall of Magtheridon",
                  "instance": "Magtheridon's Lair"
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
                  "detail": "G'eras, Shattrath — 41 Badge of Justice"
                }
              },
              {
                "id": 28590,
                "name": "Ribbon of Sacrifice",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Opera Event"
                }
              },
              {
                "id": 30841,
                "name": "Lower City Prayerbook",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "reputation",
                  "detail": "Lower City Revered — Nakodu"
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
                }
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
                }
              }
            ],
            "offhand": [
              {
                "id": 28728,
                "name": "Aran's Soothing Sapphire",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Shade of Aran"
                }
              },
              {
                "id": 29274,
                "name": "Tears of Heaven",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "G'eras, Shattrath — 25 Badge of Justice"
                }
              }
            ],
            "ranged": [
              {
                "id": 27886,
                "name": "Idol of the Emerald Queen",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Shadow Labyrinth",
                  "boss": "Ambassador Hellmaw"
                },
                "note": "BiS through Sunwell"
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
                "id": 34245,
                "name": "Cover of Ursol the Wise",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                }
              },
              {
                "id": 34339,
                "name": "Cowl of Light's Purity",
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
                "id": 34360,
                "name": "Amulet of Flowing Life",
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
                "id": 33281,
                "name": "Brooch of Nature's Mercy",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Zul'Aman",
                  "boss": "Akil'zon"
                }
              }
            ],
            "shoulder": [
              {
                "id": 34209,
                "name": "Spaulders of Reclamation",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Eredar Twins"
                }
              }
            ],
            "back": [
              {
                "id": 32524,
                "name": "Shroud of the Highborne",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Illidan Stormrage"
                }
              },
              {
                "id": 32337,
                "name": "Shroud of Forgiveness",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Gurtogg Bloodboil"
                }
              }
            ],
            "chest": [
              {
                "id": 34212,
                "name": "Sunglow Vest",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "M'uru"
                }
              },
              {
                "id": 34371,
                "name": "Leather Chestguard of the Sun",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking (pattern from Sunwell Plateau)",
                  "profession": "Leatherworking"
                },
                "bop": true
              }
            ],
            "wrist": [
              {
                "id": 34445,
                "name": "Thunderheart Bracers",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kalecgos",
                  "detail": "Tier 6.5 token: Bracers of the Forgotten Vanquisher"
                }
              }
            ],
            "hands": [
              {
                "id": 34351,
                "name": "Tranquil Majesty Wraps",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Trash mobs"
                }
              },
              {
                "id": 34372,
                "name": "Leather Gauntlets of the Sun",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking (pattern from Sunwell Plateau)",
                  "profession": "Leatherworking"
                }
              }
            ],
            "waist": [
              {
                "id": 34554,
                "name": "Thunderheart Belt",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Brutallus",
                  "detail": "Tier 6.5 token: Belt of the Forgotten Vanquisher"
                }
              }
            ],
            "legs": [
              {
                "id": 34384,
                "name": "Breeches of Natural Splendor",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kalecgos"
                }
              }
            ],
            "feet": [
              {
                "id": 34571,
                "name": "Thunderheart Boots",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Felmyst",
                  "detail": "Tier 6.5 token: Boots of the Forgotten Vanquisher"
                }
              }
            ],
            "finger": [
              {
                "id": 32528,
                "name": "Blessed Band of Karabor",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Trash mobs"
                }
              },
              {
                "id": 34363,
                "name": "Ring of Flowing Life",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Jewelcrafting (BoP)",
                  "profession": "Jewelcrafting"
                }
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
                  "detail": "G'eras, Shattrath — 41 Badge of Justice"
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
                "note": "1H — pair with offhand"
              },
              {
                "id": 34337,
                "name": "Golden Staff of the Sin'dorei",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kil'jaeden"
                },
                "note": "Staff — no offhand"
              }
            ],
            "offhand": [
              {
                "id": 34206,
                "name": "Book of Highborne Hymns",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Eredar Twins"
                },
                "note": "Empty when using a staff"
              }
            ],
            "ranged": [
              {
                "id": 27886,
                "name": "Idol of the Emerald Queen",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Shadow Labyrinth",
                  "boss": "Ambassador Hellmaw"
                },
                "note": "Still BiS for Lifebloom builds"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "balance",
      "name": "Balance",
      "role": "dps",
      "icon": "spell_nature_starfall",
      "statPriority": "Spell Hit (12% from gear; 16% cap minus 4% Balance of Power) > Spell Damage > Spell Crit > Intellect > Spell Haste",
      "notes": "Spell hit cap vs bosses is 16%, but every Balance build takes Balance of Power (+4%), so gear for 12% (~152 hit rating) — less with a Draenei in the party (Alliance) or an Elemental Shaman's Totem of Wrath. Hit items like Scryer's Bloodgem and Gavel of Unearthed Secrets are prioritized early. The crafted Spellstrike (2pc) and Spellfire (3pc) tailoring sets carry you deep into raid tiers. Moonkin Form gives your group 5% spell crit, so a Balance druid is welcome in any caster group even at lower personal DPS.",
      "enchants": {
        "head": "Glyph of Power — The Sha'tar Revered",
        "shoulder": "Greater Inscription of Discipline (Aldor) / Greater Inscription of the Orb (Scryers)",
        "chest": "Enchant Chest - Exceptional Stats (+6 all stats)",
        "wrist": "Enchant Bracer - Spellpower (+15 Spell Damage)",
        "hands": "Enchant Gloves - Major Spellpower (+20 Spell Damage)",
        "legs": "Runic Spellthread (+35 Spell Damage / +20 Stamina)",
        "feet": "Enchant Boots - Boar's Speed (+9 Stamina, minor run speed)",
        "mainhand": "Enchant Weapon - Sunfire (+50 Arcane/Fire Spell Damage)"
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
                  "detail": "Tailoring (BoE) — Spellstrike 2-piece with pants",
                  "profession": "Tailoring"
                }
              },
              {
                "id": 31110,
                "name": "Druidic Helmet of Second Sight",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "quest",
                  "quest": "Teron Gorefiend, I am...",
                  "zone": "Shadowmoon Valley"
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
              },
              {
                "id": 27758,
                "name": "Hydra-fang Necklace",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Underbog",
                  "boss": "Ghaz'an",
                  "detail": "Heroic only"
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
                "id": 27778,
                "name": "Spaulders of Oblivion",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Shadow Labyrinth",
                  "boss": "Murmur"
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
                  "detail": "G'eras, Shattrath — 25 Badge of Justice"
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
                  "detail": "Spellfire Tailoring (BoP — tailors only)",
                  "profession": "Tailoring"
                },
                "bop": true
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
                  "detail": "Spellfire Tailoring (BoP — tailors only)",
                  "profession": "Tailoring"
                },
                "bop": true
              },
              {
                "id": 27493,
                "name": "Gloves of the Deadwatcher",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Auchenai Crypts",
                  "boss": "Shirrak the Dead Watcher",
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
                  "detail": "Spellfire Tailoring (BoP — tailors only)",
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
                  "detail": "Tailoring (BoE) — Spellstrike 2-piece with hood",
                  "profession": "Tailoring"
                }
              },
              {
                "id": 30531,
                "name": "Breeches of the Occultist",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Black Morass",
                  "boss": "Aeonus",
                  "detail": "Heroic only"
                }
              }
            ],
            "feet": [
              {
                "id": 27821,
                "name": "Extravagant Boots of Malice",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Mana-Tombs",
                  "boss": "Tavarok",
                  "detail": "Heroic only"
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
                "id": 29172,
                "name": "Ashyen's Gift",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "reputation",
                  "detail": "Cenarion Expedition Exalted"
                }
              },
              {
                "id": 28227,
                "name": "Sparking Arcanite Ring",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Old Hillsbrad Foothills",
                  "boss": "Epoch Hunter",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 29352,
                "name": "Cobalt Band of Tyrigosa",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Mana-Tombs",
                  "boss": "Nexus-Prince Shaffar",
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
                  "detail": "G'eras, Shattrath — 41 Badge of Justice"
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
                "id": 29132,
                "name": "Scryer's Bloodgem",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "reputation",
                  "detail": "The Scryers Revered"
                },
                "note": "Big hit chunk"
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
                  "detail": "Lower City Exalted"
                },
                "note": "Has spell hit; 1H — pair with offhand"
              },
              {
                "id": 23554,
                "name": "Eternium Runed Blade",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Blacksmithing (BoE)",
                  "profession": "Blacksmithing"
                }
              },
              {
                "id": 29355,
                "name": "Terokk's Shadowstaff",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Sethekk Halls",
                  "boss": "Talon King Ikiss",
                  "detail": "Heroic only"
                },
                "note": "Staff — no offhand"
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
                  "detail": "G'eras, Shattrath — 25 Badge of Justice"
                },
                "note": "Empty when using a staff"
              },
              {
                "id": 28187,
                "name": "Star-Heart Lamp",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Black Morass",
                  "boss": "Temporus"
                }
              }
            ],
            "ranged": [
              {
                "id": 27518,
                "name": "Ivory Idol of the Moongoddess",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Shattered Halls",
                  "boss": "Grand Warlock Nethekurse"
                }
              },
              {
                "id": 23197,
                "name": "Idol of the Moon",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "world-drop",
                  "zone": "BoE"
                }
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
                "id": 29093,
                "name": "Antlers of Malorne",
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
                "id": 28744,
                "name": "Uni-Mind Headdress",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Netherspite"
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
                }
              }
            ],
            "shoulder": [
              {
                "id": 29095,
                "name": "Pauldrons of Malorne",
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
                "id": 27778,
                "name": "Spaulders of Oblivion",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Shadow Labyrinth",
                  "boss": "Murmur"
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
                "id": 28797,
                "name": "Brute Cloak of the Ogre-Magi",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Gruul's Lair",
                  "boss": "High King Maulgar"
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
                  "detail": "Spellfire Tailoring (BoP — tailors only)",
                  "profession": "Tailoring"
                },
                "bop": true
              },
              {
                "id": 29091,
                "name": "Chestpiece of Malorne",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Magtheridon's Lair",
                  "boss": "Magtheridon",
                  "detail": "Tier 4 token: Chestguard of the Fallen Defender"
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
                "id": 28515,
                "name": "Bands of Nefarious Deeds",
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
                "id": 28507,
                "name": "Handwraps of Flowing Thought",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Attumen the Huntsman"
                }
              },
              {
                "id": 30725,
                "name": "Anger-Spark Gloves",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "zone": "Shadowmoon Valley",
                  "boss": "Doomwalker",
                  "detail": "World boss"
                },
                "note": "Hit set"
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
                  "detail": "Spellfire Tailoring (BoP — tailors only)",
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
                "id": 24262,
                "name": "Spellstrike Pants",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE) — Spellstrike 2-piece with hood",
                  "profession": "Tailoring"
                }
              },
              {
                "id": 30734,
                "name": "Leggings of the Seventh Circle",
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
                "id": 28594,
                "name": "Trial-Fire Trousers",
                "quality": "epic",
                "rank": 3,
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
                "id": 28585,
                "name": "Ruby Slippers",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Opera Event (Wizard of Oz)"
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
                  "instance": "Magtheridon's Lair"
                }
              },
              {
                "id": 28753,
                "name": "Ring of Recurrence",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Echo of Medivh (Chess Event)"
                }
              },
              {
                "id": 29287,
                "name": "Violet Signet of the Archmage",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "reputation",
                  "detail": "The Violet Eye Exalted (Karazhan)"
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
                  "detail": "G'eras, Shattrath — 41 Badge of Justice"
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
                "id": 28789,
                "name": "Eye of Magtheridon",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Magtheridon's Lair",
                  "boss": "Magtheridon"
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
                "note": "1H — pair with offhand"
              },
              {
                "id": 28633,
                "name": "Staff of Infinite Mysteries",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "The Curator"
                },
                "note": "Staff — no offhand"
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
                  "detail": "G'eras, Shattrath — 25 Badge of Justice"
                },
                "note": "Empty when using a staff"
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
                }
              }
            ],
            "ranged": [
              {
                "id": 27518,
                "name": "Ivory Idol of the Moongoddess",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Shattered Halls",
                  "boss": "Grand Warlock Nethekurse"
                }
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
                },
                "note": "Cloth; heavily contested"
              },
              {
                "id": 34403,
                "name": "Cover of Ursoc the Mighty",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "vendor",
                  "detail": "Yrma, Sunwell Plateau — Cover of Ursol the Wise + 1 Sunmote"
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
                  "detail": "Jewelcrafting (Sunwell recipe)",
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
                "id": 34210,
                "name": "Amice of the Convoker",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Eredar Twins"
                }
              },
              {
                "id": 31049,
                "name": "Thunderheart Shoulderpads",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Mother Shahraz",
                  "detail": "Tier 6 token: Pauldrons of the Forgotten Vanquisher"
                },
                "note": "Usual 4pc T6 slot"
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
                  "boss": "The Illidari Council"
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
                  "detail": "Tailoring (Sunwell recipe)",
                  "profession": "Tailoring"
                },
                "bop": true
              },
              {
                "id": 34232,
                "name": "Fel Conquerer Raiments",
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
                "id": 34446,
                "name": "Thunderheart Bands",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kalecgos",
                  "detail": "Tier 6.5 token: Bracers of the Forgotten Vanquisher"
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
                "id": 34366,
                "name": "Sunfire Handwraps",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE)",
                  "profession": "Tailoring"
                }
              }
            ],
            "waist": [
              {
                "id": 34555,
                "name": "Thunderheart Cord",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Brutallus",
                  "detail": "Tier 6.5 token: Belt of the Forgotten Vanquisher"
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
                },
                "note": "Hit belt"
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
                "id": 34169,
                "name": "Breeches of Natural Aggression",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kalecgos"
                }
              }
            ],
            "feet": [
              {
                "id": 34572,
                "name": "Thunderheart Footwraps",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Felmyst",
                  "detail": "Tier 6.5 token: Boots of the Forgotten Vanquisher"
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
                "id": 29305,
                "name": "Band of the Eternal Sage",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "reputation",
                  "detail": "The Scale of the Sands Exalted (Hyjal Summit)"
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
                }
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
                "id": 32486,
                "name": "Ashtongue Talisman of Equilibrium",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "reputation",
                  "detail": "Ashtongue Deathsworn Exalted (druid only)"
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
                "note": "1H — pair with offhand"
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
                "note": "Staff — no offhand"
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
                "note": "Empty when using a staff"
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
                }
              }
            ],
            "ranged": [
              {
                "id": 32387,
                "name": "Idol of the Raven Goddess",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "quest",
                  "quest": "Vanquish the Raven God",
                  "instance": "Sethekk Halls",
                  "detail": "Epic flight form chain, Heroic only"
                }
              },
              {
                "id": 27518,
                "name": "Ivory Idol of the Moongoddess",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Shattered Halls",
                  "boss": "Grand Warlock Nethekurse"
                }
              }
            ]
          }
        }
      ]
    },
    {
      "id": "feral-cat",
      "name": "Feral (Cat)",
      "role": "dps",
      "icon": "ability_druid_catform",
      "statPriority": "Hit (9% / 142 rating) > Agility > Strength > Crit > Attack Power",
      "notes": "Wolfshead Helm enables the powershift rotation (bonus energy on shifting into Cat Form) and stays BiS from leveling through P4 — only full Sunwell gear finally retires it. Feral attack power on staves/maces only applies in forms; weapon DPS is irrelevant, which is why low-DPS 'stat sticks' like Terestian's Stranglestaff and Stanchion of Primal Instinct are your weapon upgrades. Special-attack hit cap is 9% (142 rating). Mark of the Champion only works against undead and demons.",
      "enchants": {
        "head": "Glyph of Ferocity — Cenarion Expedition Revered",
        "shoulder": "Greater Inscription of Vengeance (Aldor) / Greater Inscription of the Blade (Scryers)",
        "back": "Enchant Cloak - Greater Agility (+12 Agility)",
        "chest": "Enchant Chest - Exceptional Stats (+6 all stats)",
        "wrist": "Enchant Bracer - Brawn (+12 Strength)",
        "hands": "Enchant Gloves - Superior Agility (+15 Agility)",
        "legs": "Nethercobra Leg Armor (+50 Attack Power / +12 Crit)",
        "feet": "Enchant Boots - Cat's Swiftness (+6 Agility, minor run speed)",
        "mainhand": "Enchant Weapon - Mongoose"
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
                "id": 8345,
                "name": "Wolfshead Helm",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking (Classic pattern, BoE)",
                  "profession": "Leatherworking"
                },
                "note": "Never replaced until Sunwell"
              }
            ],
            "neck": [
              {
                "id": 24114,
                "name": "Braided Eternium Chain",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Jewelcrafting 360",
                  "profession": "Jewelcrafting"
                }
              },
              {
                "id": 29381,
                "name": "Choker of Vile Intent",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "G'eras, Shattrath — 25 Badge of Justice"
                }
              }
            ],
            "shoulder": [
              {
                "id": 27776,
                "name": "Shoulderpads of Assassination",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sethekk Halls",
                  "boss": "Talon King Ikiss"
                }
              },
              {
                "id": 27797,
                "name": "Wastewalker Shoulderpads",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Auchenai Crypts",
                  "boss": "Avatar of the Martyred",
                  "detail": "Heroic only"
                }
              }
            ],
            "back": [
              {
                "id": 31255,
                "name": "Cloak of the Craft",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "world-drop",
                  "zone": "Outland (BoE)"
                }
              },
              {
                "id": 27878,
                "name": "Auchenai Death Shroud",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Auchenai Crypts",
                  "boss": "Avatar of the Martyred",
                  "detail": "Heroic only"
                }
              }
            ],
            "chest": [
              {
                "id": 28204,
                "name": "Tunic of Assassination",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Mechanar",
                  "boss": "Pathaleon the Calculator"
                }
              },
              {
                "id": 29525,
                "name": "Primalstrike Vest",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Elemental Leatherworking (BoP)",
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
                "id": 28171,
                "name": "Spymistress's Wristguards",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "quest",
                  "quest": "The Soul Devices",
                  "instance": "Shadow Labyrinth"
                }
              }
            ],
            "hands": [
              {
                "id": 27509,
                "name": "Handgrips of Assassination",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Black Morass",
                  "boss": "Aeonus / Temporus"
                }
              },
              {
                "id": 25685,
                "name": "Fel Leather Gloves",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking (BoE)",
                  "profession": "Leatherworking"
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
                }
              },
              {
                "id": 30372,
                "name": "Socrethar's Girdle",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "quest",
                  "quest": "Turning Point",
                  "zone": "Shadowmoon Valley"
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
                  "zone": "Blade's Edge Mountains"
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
                  "detail": "Leatherworking (BoE)",
                  "profession": "Leatherworking"
                }
              },
              {
                "id": 29248,
                "name": "Shadowstep Striders",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Arcatraz",
                  "boss": "Harbinger Skyriss",
                  "detail": "Heroic only"
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
                  "detail": "Lower City Exalted — Nakodu"
                }
              },
              {
                "id": 31920,
                "name": "Shaffar's Band of Brutality",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Mana-Tombs",
                  "boss": "Nexus-Prince Shaffar",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 27925,
                "name": "Ravenclaw Band",
                "quality": "rare",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Sethekk Halls",
                  "boss": "Talon King Ikiss"
                }
              }
            ],
            "trinket": [
              {
                "id": 28034,
                "name": "Hourglass of the Unraveller",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Black Morass",
                  "boss": "Temporus"
                }
              },
              {
                "id": 29383,
                "name": "Bloodlust Brooch",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "G'eras, Shattrath — 41 Badge of Justice"
                }
              },
              {
                "id": 23206,
                "name": "Mark of the Champion",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "quest",
                  "quest": "The Fall of Kel'Thuzad",
                  "instance": "Naxxramas (Classic)"
                },
                "note": "Undead/demons only"
              }
            ],
            "mainhand": [
              {
                "id": 29359,
                "name": "Feral Staff of Lashing",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "The Botanica",
                  "boss": "Warp Splinter",
                  "detail": "Heroic only"
                }
              },
              {
                "id": 31334,
                "name": "Staff of Natural Fury",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "world-drop",
                  "zone": "Outland (BoE)"
                }
              },
              {
                "id": 28476,
                "name": "Gladiator's Maul",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "pvp",
                  "detail": "Season 1 arena vendor"
                }
              }
            ],
            "ranged": [
              {
                "id": 29390,
                "name": "Everbloom Idol",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "G'eras, Shattrath — 15 Badge of Justice"
                }
              },
              {
                "id": 28372,
                "name": "Idol of Feral Shadows",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "The Arcatraz",
                  "boss": "Zereketh the Unbound"
                }
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
                "id": 8345,
                "name": "Wolfshead Helm",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking (Classic pattern, BoE)",
                  "profession": "Leatherworking"
                },
                "note": "Powershifting"
              }
            ],
            "neck": [
              {
                "id": 24114,
                "name": "Braided Eternium Chain",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Jewelcrafting 360",
                  "profession": "Jewelcrafting"
                }
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
              }
            ],
            "shoulder": [
              {
                "id": 29100,
                "name": "Mantle of Malorne",
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
                "id": 27797,
                "name": "Wastewalker Shoulderpads",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Auchenai Crypts",
                  "boss": "Avatar of the Martyred",
                  "detail": "Heroic only"
                }
              }
            ],
            "back": [
              {
                "id": 28672,
                "name": "Drape of the Dark Reavers",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Shade of Aran"
                }
              },
              {
                "id": 24259,
                "name": "Vengeance Wrap",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Tailoring (BoE)",
                  "profession": "Tailoring"
                },
                "note": "Hit set"
              }
            ],
            "chest": [
              {
                "id": 29096,
                "name": "Breastplate of Malorne",
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
                "id": 30730,
                "name": "Terrorweave Tunic",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "zone": "Shadowmoon Valley",
                  "boss": "Doomwalker",
                  "detail": "World boss"
                }
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
              }
            ],
            "hands": [
              {
                "id": 28506,
                "name": "Gloves of Dexterous Manipulation",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Attumen the Huntsman"
                }
              },
              {
                "id": 30644,
                "name": "Grips of Deftness",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Trash mobs"
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
                },
                "note": "Hit set"
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
              },
              {
                "id": 31544,
                "name": "Clefthoof Hide Leggings",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "quest",
                  "quest": "Showdown",
                  "zone": "Blade's Edge Mountains"
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
                },
                "note": "Lasts through P5"
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
                  "detail": "Lower City Exalted — Nakodu"
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
                },
                "note": "Hit set"
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
                },
                "note": "Heavily contested"
              },
              {
                "id": 29383,
                "name": "Bloodlust Brooch",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "G'eras, Shattrath — 41 Badge of Justice"
                }
              },
              {
                "id": 23206,
                "name": "Mark of the Champion",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "quest",
                  "quest": "The Fall of Kel'Thuzad",
                  "instance": "Naxxramas (Classic)"
                },
                "note": "Undead/demons only"
              }
            ],
            "mainhand": [
              {
                "id": 28658,
                "name": "Terestian's Stranglestaff",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Karazhan",
                  "boss": "Terestian Illhoof"
                }
              },
              {
                "id": 28476,
                "name": "Gladiator's Maul",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "pvp",
                  "detail": "Season 1 arena vendor"
                }
              }
            ],
            "ranged": [
              {
                "id": 29390,
                "name": "Everbloom Idol",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "badge",
                  "detail": "G'eras, Shattrath — 15 Badge of Justice"
                }
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
                "id": 34404,
                "name": "Mask of the Fury Hunter",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "vendor",
                  "detail": "Yrma, Sunwell Plateau — Duplicitous Guise + 1 Sunmote (base drops from Kil'jaeden)"
                },
                "note": "Finally retires Wolfshead Helm"
              },
              {
                "id": 8345,
                "name": "Wolfshead Helm",
                "quality": "rare",
                "rank": 2,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking (Classic pattern, BoE)",
                  "profession": "Leatherworking"
                },
                "note": "Still fine while gearing"
              }
            ],
            "neck": [
              {
                "id": 32260,
                "name": "Choker of Endless Nightmares",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Supremus"
                }
              },
              {
                "id": 34358,
                "name": "Hard Khorium Choker",
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
                "id": 31048,
                "name": "Thunderheart Pauldrons",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Black Temple",
                  "boss": "Mother Shahraz",
                  "detail": "Tier 6 token: Pauldrons of the Forgotten Vanquisher"
                }
              },
              {
                "id": 34392,
                "name": "Demontooth Shoulderpads",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "vendor",
                  "detail": "Yrma, Sunwell Plateau — Shoulderpads of Vehemence + 1 Sunmote"
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
                  "detail": "Yrma, Sunwell Plateau — Harness of Carnal Instinct + 1 Sunmote (base drops from M'uru)"
                }
              }
            ],
            "wrist": [
              {
                "id": 34444,
                "name": "Thunderheart Wristguards",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Kalecgos",
                  "detail": "Tier 6.5 token: Bracers of the Forgotten Vanquisher"
                }
              }
            ],
            "hands": [
              {
                "id": 34370,
                "name": "Gloves of Immortal Dusk",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "crafted",
                  "detail": "Leatherworking (pattern from Sunwell Plateau)",
                  "profession": "Leatherworking"
                }
              }
            ],
            "waist": [
              {
                "id": 34556,
                "name": "Thunderheart Waistguard",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Brutallus",
                  "detail": "Tier 6.5 token: Belt of the Forgotten Vanquisher"
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
              }
            ],
            "feet": [
              {
                "id": 34573,
                "name": "Thunderheart Treads",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Felmyst",
                  "detail": "Tier 6.5 token: Boots of the Forgotten Vanquisher"
                }
              }
            ],
            "finger": [
              {
                "id": 34189,
                "name": "Band of Ruinous Delight",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Eredar Twins"
                }
              },
              {
                "id": 34887,
                "name": "Angelista's Revenge",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "Badge of Justice vendor"
                }
              },
              {
                "id": 29301,
                "name": "Band of the Eternal Champion",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "reputation",
                  "detail": "The Scale of the Sands Exalted (Hyjal Summit)"
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
                "id": 34472,
                "name": "Shard of Contempt",
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
                "id": 30627,
                "name": "Tsunami Talisman",
                "quality": "epic",
                "rank": 3,
                "source": {
                  "type": "drop",
                  "instance": "Serpentshrine Cavern",
                  "boss": "Leotheras the Blind"
                }
              }
            ],
            "mainhand": [
              {
                "id": 34198,
                "name": "Stanchion of Primal Instinct",
                "quality": "epic",
                "rank": 1,
                "source": {
                  "type": "drop",
                  "instance": "Sunwell Plateau",
                  "boss": "Eredar Twins"
                },
                "note": "Biggest single upgrade of P5"
              }
            ],
            "ranged": [
              {
                "id": 32387,
                "name": "Idol of the Raven Goddess",
                "quality": "rare",
                "rank": 1,
                "source": {
                  "type": "quest",
                  "quest": "Vanquish the Raven God",
                  "instance": "Sethekk Halls",
                  "detail": "Epic flight form chain, Heroic only"
                },
                "note": "Best for raid DPS"
              },
              {
                "id": 29390,
                "name": "Everbloom Idol",
                "quality": "epic",
                "rank": 2,
                "source": {
                  "type": "badge",
                  "detail": "G'eras, Shattrath — 15 Badge of Justice"
                }
              }
            ]
          }
        }
      ]
    }
  ]
});
