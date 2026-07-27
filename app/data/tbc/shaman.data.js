/* BiS Companion data — TBC Classic Shaman (Elemental, Enhancement, Restoration).
   Item IDs verified against Wowhead TBC Classic; lists sourced from Wowhead/Icy Veins/Warcraft Tavern BiS guides. */
WOWDATA.register(
{
  "kind": "bis",
  "expansion": "tbc",
  "class": "shaman",
  "className": "Shaman",
  "classColor": "#0070DE",
  "specs": [
    {
      "id": "elemental",
      "name": "Elemental",
      "role": "dps",
      "icon": "spell_nature_lightning",
      "statPriority": "Spell Hit (to cap) > Spell Damage > Spell Crit > Intellect > Spell Haste (P3+)",
      "notes": "Spell hit cap vs raid bosses is 16%. Elemental Precision (3/3) covers 6% and Totem of Wrath another 3%, so aim for ~7% (~89 hit rating) from gear — 1% less with a Draenei in your party (Alliance only). Both factions play Shaman in TBC (Draenei join Alliance at launch); listed quest rewards are neutral unless marked. The Lightning Capacitor and Totem of the Void carry from P1 deep into the expansion.",
      "enchants": {
        "head": "Glyph of Power (+22 spell damage, +14 spell hit) — The Sha'tar Revered",
        "shoulder": "Greater Inscription of Discipline — Aldor Exalted (or Greater Inscription of the Orb — Scryers)",
        "back": "Subtlety, or +15 Spell Penetration for resistant bosses",
        "chest": "Exceptional Stats (+6 all stats)",
        "wrist": "Spellpower (+15 spell damage)",
        "hands": "Major Spellpower (+20 spell damage)",
        "legs": "Runic Spellthread (+35 spell damage, +20 stamina)",
        "feet": "Boar's Speed",
        "mainhand": "Major Spellpower (+40 spell damage)"
      },
      "brackets": [
        {
          "id": "preraid",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 24266, "name": "Spellstrike Hood", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring, BoE (Spellstrike set with the pants)" } },
              { "id": 32086, "name": "Storm Master's Helmet", "quality": "epic", "rank": 2, "source": { "type": "badge", "detail": "50 Badge of Justice — G'eras, Shattrath (added in Phase 4)" } },
              { "id": 28278, "name": "Incanter's Cowl", "quality": "rare", "rank": 3, "source": { "type": "drop", "instance": "The Mechanar", "boss": "Pathaleon the Calculator" } }
            ],
            "neck": [
              { "id": 31692, "name": "Natasha's Ember Necklace", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "The Hound-Master", "zone": "Blade's Edge Mountains" } },
              { "id": 28134, "name": "Brooch of Heightened Potential", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Shadow Labyrinth", "boss": "Blackheart the Inciter" } }
            ],
            "shoulder": [
              { "id": 32078, "name": "Pauldrons of Wild Magic", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "The Slave Pens", "boss": "Quagmirran", "detail": "Heroic only" } },
              { "id": 27796, "name": "Mana-Etched Spaulders", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "The Slave Pens", "boss": "Quagmirran", "detail": "Heroic only" } },
              { "id": 30925, "name": "Spaulders of the Torn-Heart", "quality": "rare", "rank": 3, "source": { "type": "quest", "quest": "The Cipher of Damnation", "zone": "Shadowmoon Valley" } }
            ],
            "back": [
              { "id": 29369, "name": "Shawl of Shifting Probabilities", "quality": "epic", "rank": 1, "source": { "type": "badge", "detail": "25 Badge of Justice — G'eras, Shattrath" } },
              { "id": 27981, "name": "Sethekk Oracle Cloak", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Sethekk Halls", "boss": "Talon King Ikiss" } }
            ],
            "chest": [
              { "id": 29519, "name": "Netherstrike Breastplate", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Dragonscale Leatherworking, BoP" } },
              { "id": 29522, "name": "Windhawk Hauberk", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Tribal Leatherworking, BoP" } },
              { "id": 28231, "name": "Tidefury Chestpiece", "quality": "rare", "rank": 3, "source": { "type": "drop", "instance": "The Arcatraz", "boss": "Harbinger Skyriss" } }
            ],
            "wrist": [
              { "id": 29521, "name": "Netherstrike Bracers", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Dragonscale Leatherworking, BoP" } },
              { "id": 29523, "name": "Windhawk Bracers", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Tribal Leatherworking, BoP" } },
              { "id": 27522, "name": "World's End Bracers", "quality": "rare", "rank": 3, "source": { "type": "drop", "instance": "The Blood Furnace", "boss": "Keli'dan the Breaker", "detail": "Heroic only" } }
            ],
            "hands": [
              { "id": 27465, "name": "Mana-Etched Gloves", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Hellfire Ramparts", "boss": "Omor the Unscarred", "detail": "Heroic only" } },
              { "id": 27493, "name": "Gloves of the Deadwatcher", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Auchenai Crypts", "boss": "Shirrak the Dead Watcher", "detail": "Heroic only" } },
              { "id": 27793, "name": "Earth Mantle Handwraps", "quality": "rare", "rank": 3, "source": { "type": "drop", "instance": "The Steamvault", "boss": "Mekgineer Steamrigger" } }
            ],
            "waist": [
              { "id": 29520, "name": "Netherstrike Belt", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Dragonscale Leatherworking, BoP" } },
              { "id": 24256, "name": "Girdle of Ruination", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Tailoring, BoE" } }
            ],
            "legs": [
              { "id": 24262, "name": "Spellstrike Pants", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring, BoE (Spellstrike set with the hood)" } },
              { "id": 30541, "name": "Stormsong Kilt", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "The Underbog", "boss": "The Black Stalker", "detail": "Heroic only" } }
            ],
            "feet": [
              { "id": 28406, "name": "Sigil-Laced Boots", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Arcatraz", "boss": "Harbinger Skyriss" } },
              { "id": 27845, "name": "Magma Plume Boots", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Auchenai Crypts", "boss": "Shirrak the Dead Watcher", "detail": "Heroic only" } }
            ],
            "finger": [
              { "id": 29126, "name": "Seer's Signet", "quality": "epic", "rank": 1, "source": { "type": "reputation", "detail": "The Scryers — Exalted" } },
              { "id": 29367, "name": "Ring of Cryptic Dreams", "quality": "epic", "rank": 2, "source": { "type": "badge", "detail": "25 Badge of Justice — G'eras, Shattrath" } },
              { "id": 29352, "name": "Cobalt Band of Tyrigosa", "quality": "epic", "rank": 3, "source": { "type": "drop", "instance": "Mana-Tombs", "boss": "Nexus-Prince Shaffar", "detail": "Heroic only" } },
              { "id": 28227, "name": "Sparking Arcanite Ring", "quality": "rare", "rank": 4, "source": { "type": "drop", "instance": "Old Hillsbrad Foothills", "boss": "Epoch Hunter", "detail": "Heroic only" } }
            ],
            "trinket": [
              { "id": 29370, "name": "Icon of the Silver Crescent", "quality": "epic", "rank": 1, "source": { "type": "badge", "detail": "41 Badge of Justice — G'eras, Shattrath" } },
              { "id": 27683, "name": "Quagmirran's Eye", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "The Slave Pens", "boss": "Quagmirran", "detail": "Heroic only" } },
              { "id": 29132, "name": "Scryer's Bloodgem", "quality": "rare", "rank": 3, "source": { "type": "reputation", "detail": "The Scryers — Revered" } },
              { "id": 23207, "name": "Mark of the Champion", "quality": "epic", "rank": 4, "source": { "type": "drop", "instance": "Naxxramas", "boss": "Kel'Thuzad", "detail": "Level 60 Naxxramas" }, "note": "Only vs Undead/Demons" }
            ],
            "mainhand": [
              { "id": 23554, "name": "Eternium Runed Blade", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Blacksmithing, BoE" } },
              { "id": 30832, "name": "Gavel of Unearthed Secrets", "quality": "epic", "rank": 2, "source": { "type": "reputation", "detail": "Lower City — Exalted" } },
              { "id": 27868, "name": "Runesong Dagger", "quality": "rare", "rank": 3, "source": { "type": "drop", "instance": "The Shattered Halls", "boss": "Warbringer O'mrogg" } }
            ],
            "offhand": [
              { "id": 29268, "name": "Mazthoril Honor Shield", "quality": "epic", "rank": 1, "source": { "type": "badge", "detail": "33 Badge of Justice — G'eras, Shattrath" } },
              { "id": 29273, "name": "Khadgar's Knapsack", "quality": "epic", "rank": 2, "source": { "type": "badge", "detail": "25 Badge of Justice — G'eras, Shattrath" } },
              { "id": 28260, "name": "Manual of the Nethermancer", "quality": "rare", "rank": 3, "source": { "type": "drop", "instance": "The Mechanar", "boss": "Nethermancer Sepethrea" } }
            ],
            "ranged": [
              { "id": 28248, "name": "Totem of the Void", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Mechanar", "boss": "Cache of the Legion" } },
              { "id": 29389, "name": "Totem of the Pulsing Earth", "quality": "epic", "rank": 2, "source": { "type": "badge", "detail": "15 Badge of Justice — G'eras, Shattrath" } }
            ]
          }
        },
        {
          "id": "p1",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 29035, "name": "Cyclone Faceguard", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar", "detail": "Helm of the Fallen Champion token" } },
              { "id": 24266, "name": "Spellstrike Hood", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Tailoring, BoE" } }
            ],
            "neck": [
              { "id": 28762, "name": "Adornment of Stolen Souls", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar" } },
              { "id": 28530, "name": "Brooch of Unquenchable Fury", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan" } }
            ],
            "shoulder": [
              { "id": 29037, "name": "Cyclone Shoulderguards", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Gruul's Lair", "boss": "High King Maulgar", "detail": "Pauldrons of the Fallen Champion token" } },
              { "id": 32078, "name": "Pauldrons of Wild Magic", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "The Slave Pens", "boss": "Quagmirran", "detail": "Heroic only" } }
            ],
            "back": [
              { "id": 30735, "name": "Ancient Spellcloak of the Highborne", "quality": "epic", "rank": 1, "source": { "type": "drop", "zone": "Hellfire Peninsula", "boss": "Doom Lord Kazzak", "detail": "World boss" } },
              { "id": 28797, "name": "Brute Cloak of the Ogre-Magi", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Gruul's Lair", "boss": "High King Maulgar" } },
              { "id": 28766, "name": "Ruby Drape of the Mysticant", "quality": "epic", "rank": 3, "source": { "type": "drop", "instance": "Karazhan" } }
            ],
            "chest": [
              { "id": 29519, "name": "Netherstrike Breastplate", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Dragonscale Leatherworking, BoP" } },
              { "id": 29033, "name": "Cyclone Chestguard", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Magtheridon's Lair", "boss": "Magtheridon", "detail": "Chestguard of the Fallen Champion token" } }
            ],
            "wrist": [
              { "id": 29521, "name": "Netherstrike Bracers", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Dragonscale Leatherworking, BoP" } },
              { "id": 29523, "name": "Windhawk Bracers", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Tribal Leatherworking, BoP" } }
            ],
            "hands": [
              { "id": 30725, "name": "Anger-Spark Gloves", "quality": "epic", "rank": 1, "source": { "type": "drop", "zone": "Shadowmoon Valley", "boss": "Doomwalker", "detail": "World boss" } },
              { "id": 28780, "name": "Soul-Eater's Handwraps", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Magtheridon's Lair", "boss": "Magtheridon" } },
              { "id": 28507, "name": "Handwraps of Flowing Thought", "quality": "epic", "rank": 3, "source": { "type": "drop", "instance": "Karazhan" } }
            ],
            "waist": [
              { "id": 29520, "name": "Netherstrike Belt", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Dragonscale Leatherworking, BoP" } },
              { "id": 28799, "name": "Belt of Divine Inspiration", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Gruul's Lair", "boss": "High King Maulgar" } }
            ],
            "legs": [
              { "id": 30734, "name": "Leggings of the Seventh Circle", "quality": "epic", "rank": 1, "source": { "type": "drop", "zone": "Hellfire Peninsula", "boss": "Doom Lord Kazzak", "detail": "World boss" } },
              { "id": 24262, "name": "Spellstrike Pants", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Tailoring, BoE" } }
            ],
            "feet": [
              { "id": 28517, "name": "Boots of Foretelling", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Maiden of Virtue" } },
              { "id": 28810, "name": "Windshear Boots", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Gruul's Lair", "boss": "Gruul the Dragonkiller" } }
            ],
            "finger": [
              { "id": 30667, "name": "Ring of Unrelenting Storms", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "detail": "Trash drop" } },
              { "id": 28753, "name": "Ring of Recurrence", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan", "boss": "Chess Event" } },
              { "id": 29287, "name": "Violet Signet of the Archmage", "quality": "epic", "rank": 3, "source": { "type": "reputation", "detail": "The Violet Eye — Exalted" } },
              { "id": 28793, "name": "Band of Crimson Fury", "quality": "epic", "rank": 4, "source": { "type": "quest", "quest": "Magtheridon's Head turn-in", "zone": "Hellfire Peninsula" } }
            ],
            "trinket": [
              { "id": 28785, "name": "The Lightning Capacitor", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Terestian Illhoof" } },
              { "id": 29370, "name": "Icon of the Silver Crescent", "quality": "epic", "rank": 2, "source": { "type": "badge", "detail": "41 Badge of Justice — G'eras, Shattrath" } },
              { "id": 23207, "name": "Mark of the Champion", "quality": "epic", "rank": 3, "source": { "type": "drop", "instance": "Naxxramas", "boss": "Kel'Thuzad", "detail": "Level 60 Naxxramas" }, "note": "Only vs Undead/Demons" }
            ],
            "mainhand": [
              { "id": 30723, "name": "Talon of the Tempest", "quality": "epic", "rank": 1, "source": { "type": "drop", "zone": "Shadowmoon Valley", "boss": "Doomwalker", "detail": "World boss" } },
              { "id": 28770, "name": "Nathrezim Mindblade", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar" } },
              { "id": 32450, "name": "Gladiator's Gavel", "quality": "epic", "rank": 3, "source": { "type": "pvp", "detail": "Season 1 — Arena Points" } }
            ],
            "offhand": [
              { "id": 29268, "name": "Mazthoril Honor Shield", "quality": "epic", "rank": 1, "source": { "type": "badge", "detail": "33 Badge of Justice — G'eras, Shattrath" } },
              { "id": 28603, "name": "Talisman of Nightbane", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan", "boss": "Nightbane" } }
            ],
            "ranged": [
              { "id": 28248, "name": "Totem of the Void", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Mechanar", "boss": "Cache of the Legion" } }
            ]
          }
        },
        {
          "id": "p5",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 34332, "name": "Cowl of Gul'dan", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden" } },
              { "id": 34340, "name": "Dark Conjuror's Collar", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau" } }
            ],
            "neck": [
              { "id": 34359, "name": "Pendant of Sunfire", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Jewelcrafting, BoP" } },
              { "id": 34204, "name": "Amulet of Unfettered Magics", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Eredar Twins" } }
            ],
            "shoulder": [
              { "id": 31023, "name": "Skyshatter Mantle", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Black Temple", "boss": "Mother Shahraz", "detail": "Pauldrons of the Forgotten Protector token" } },
              { "id": 34210, "name": "Amice of the Convoker", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau" } }
            ],
            "back": [
              { "id": 34242, "name": "Tattered Cape of Antonidas", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden" } }
            ],
            "chest": [
              { "id": 34364, "name": "Sunfire Robe", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring, BoP" } },
              { "id": 34396, "name": "Garments of Crashing Shores", "quality": "epic", "rank": 2, "source": { "type": "vendor", "detail": "Sunmote exchange — Isle of Quel'Danas" } }
            ],
            "wrist": [
              { "id": 34437, "name": "Skyshatter Bands", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kalecgos", "detail": "Bracers of the Forgotten Protector token" } }
            ],
            "hands": [
              { "id": 34350, "name": "Gauntlets of the Ancient Shadowmoon", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "detail": "Trash drop" } },
              { "id": 34344, "name": "Handguards of Defiled Worlds", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau" } }
            ],
            "waist": [
              { "id": 34542, "name": "Skyshatter Cord", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Brutallus", "detail": "Belt of the Forgotten Protector token" } }
            ],
            "legs": [
              { "id": 34181, "name": "Leggings of Calamity", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau" } },
              { "id": 34186, "name": "Chain Links of the Tumultuous Storm", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Felmyst" } }
            ],
            "feet": [
              { "id": 34566, "name": "Skyshatter Treads", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Felmyst", "detail": "Boots of the Forgotten Protector token" } }
            ],
            "finger": [
              { "id": 34230, "name": "Ring of Omnipotence", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "M'uru" } },
              { "id": 32527, "name": "Ring of Ancient Knowledge", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Black Temple", "detail": "Trash drop" } },
              { "id": 34362, "name": "Loop of Forged Power", "quality": "epic", "rank": 3, "source": { "type": "crafted", "detail": "Jewelcrafting, BoE" } }
            ],
            "trinket": [
              { "id": 34429, "name": "Shifting Naaru Sliver", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "M'uru" } },
              { "id": 32483, "name": "The Skull of Gul'dan", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Black Temple", "boss": "Illidan Stormrage" } },
              { "id": 33829, "name": "Hex Shrunken Head", "quality": "epic", "rank": 3, "source": { "type": "drop", "instance": "Zul'Aman", "boss": "Hex Lord Malacrass" } }
            ],
            "mainhand": [
              { "id": 34336, "name": "Sunflare", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden" } },
              { "id": 34182, "name": "Grand Magister's Staff of Torrents", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau" }, "note": "2H staff — offhand stays empty" }
            ],
            "offhand": [
              { "id": 30909, "name": "Antonidas's Aegis of Rapt Concentration", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Hyjal Summit", "boss": "Archimonde" } },
              { "id": 34179, "name": "Heart of the Pit", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Brutallus" } }
            ],
            "ranged": [
              { "id": 32330, "name": "Totem of Ancestral Guidance", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Black Temple", "boss": "Teron Gorefiend" } }
            ]
          }
        }
      ]
    },
    {
      "id": "enhancement",
      "name": "Enhancement",
      "role": "dps",
      "icon": "ability_shaman_stormstrike",
      "statPriority": "Hit (9% specials, whites keep scaling to 28%) > Expertise > Attack Power/Strength > Agility/Crit > Haste",
      "notes": "Special attacks (Stormstrike, Windfury) cap at 9% hit (~142 rating), but dual-wield white swings miss up to 28% vs bosses, so hit keeps value far past the yellow cap. Use SLOW weapons in BOTH hands (2.6+ speed) — Windfury and Stormstrike scale with top-end weapon damage; never pair a fast off-hand. Season 1 Gladiator weapons are the practical Phase 1 BiS if you can rate for them. Both factions play Shaman in TBC; Hellfire relic vendors are faction-specific (marked below).",
      "enchants": {
        "head": "Glyph of Ferocity (+34 attack power, +16 hit rating) — Cenarion Expedition Revered",
        "shoulder": "Greater Inscription of Vengeance — Aldor Exalted (or Greater Inscription of the Blade — Scryers)",
        "back": "Greater Agility (+12 Agility)",
        "chest": "Exceptional Stats (+6 all stats)",
        "wrist": "Brawn (+12 Strength)",
        "hands": "Major Strength (+15 Strength)",
        "legs": "Nethercobra Leg Armor (+50 attack power, +12 crit rating)",
        "feet": "Cat's Swiftness (+6 Agility, minor run speed)",
        "mainhand": "Mongoose",
        "offhand": "Mongoose"
      },
      "brackets": [
        {
          "id": "preraid",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 28224, "name": "Wastewalker Helm", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Old Hillsbrad Foothills", "boss": "Epoch Hunter", "detail": "Heroic only" } },
              { "id": 28182, "name": "Helm of the Claw", "quality": "rare", "rank": 2, "source": { "type": "quest", "quest": "Dungeon quest", "zone": "The Steamvault" } }
            ],
            "neck": [
              { "id": 29381, "name": "Choker of Vile Intent", "quality": "epic", "rank": 1, "source": { "type": "badge", "detail": "25 Badge of Justice — G'eras, Shattrath" } },
              { "id": 29119, "name": "Haramad's Bargain", "quality": "epic", "rank": 2, "source": { "type": "reputation", "detail": "The Consortium — Exalted" } },
              { "id": 31695, "name": "Natasha's Choker", "quality": "rare", "rank": 3, "source": { "type": "quest", "quest": "The Hound-Master", "zone": "Blade's Edge Mountains" } }
            ],
            "shoulder": [
              { "id": 27797, "name": "Wastewalker Shoulderpads", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Auchenai Crypts", "boss": "Avatar of the Martyred", "detail": "Heroic only" } },
              { "id": 27434, "name": "Mantle of Perenolde", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Old Hillsbrad Foothills", "boss": "Epoch Hunter" } }
            ],
            "back": [
              { "id": 24259, "name": "Vengeance Wrap", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring, BoE" } },
              { "id": 27878, "name": "Auchenai Death Shroud", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Auchenai Crypts", "boss": "Avatar of the Martyred", "detail": "Heroic only" } }
            ],
            "chest": [
              { "id": 29515, "name": "Ebon Netherscale Breastplate", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Dragonscale Leatherworking, BoP (3-piece set bonus)" } },
              { "id": 29525, "name": "Primalstrike Vest", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Elemental Leatherworking, BoP" } }
            ],
            "wrist": [
              { "id": 29517, "name": "Ebon Netherscale Bracers", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Dragonscale Leatherworking, BoP" } },
              { "id": 29527, "name": "Primalstrike Bracers", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Elemental Leatherworking, BoP" } }
            ],
            "hands": [
              { "id": 25685, "name": "Fel Leather Gloves", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking, BoE" } },
              { "id": 27509, "name": "Handgrips of Assassination", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "The Black Morass", "boss": "Aeonus" } }
            ],
            "waist": [
              { "id": 29516, "name": "Ebon Netherscale Belt", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Dragonscale Leatherworking, BoP" } },
              { "id": 29247, "name": "Girdle of the Deathdealer", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "The Black Morass", "boss": "Aeonus", "detail": "Heroic only" } }
            ],
            "legs": [
              { "id": 31544, "name": "Clefthoof Hide Leggings", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Showdown", "zone": "Blade's Edge Mountains" } },
              { "id": 30538, "name": "Midnight Legguards", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "The Slave Pens", "boss": "Quagmirran", "detail": "Heroic only" } }
            ],
            "feet": [
              { "id": 25686, "name": "Fel Leather Boots", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking, BoE" } },
              { "id": 27867, "name": "Boots of the Unjust", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Auchenai Crypts", "boss": "Exarch Maladaar", "detail": "Heroic only" } }
            ],
            "finger": [
              { "id": 30834, "name": "Shapeshifter's Signet", "quality": "epic", "rank": 1, "source": { "type": "reputation", "detail": "Lower City — Exalted" } },
              { "id": 31920, "name": "Shaffar's Band of Brutality", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Mana-Tombs", "boss": "Yor", "detail": "Heroic only — summoned with Ethereum Stasis Chamber Key" } },
              { "id": 30365, "name": "Overseer's Signet", "quality": "rare", "rank": 3, "source": { "type": "quest", "quest": "Shutting Down Manaforge Ara", "zone": "Netherstorm" } }
            ],
            "trinket": [
              { "id": 29383, "name": "Bloodlust Brooch", "quality": "epic", "rank": 1, "source": { "type": "badge", "detail": "41 Badge of Justice — G'eras, Shattrath" } },
              { "id": 28288, "name": "Abacus of Violent Odds", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "The Mechanar", "boss": "Pathaleon the Calculator" } },
              { "id": 23206, "name": "Mark of the Champion", "quality": "epic", "rank": 3, "source": { "type": "drop", "instance": "Naxxramas", "boss": "Kel'Thuzad", "detail": "Level 60 Naxxramas" }, "note": "Only vs Undead/Demons" },
              { "id": 29776, "name": "Core of Ar'kelos", "quality": "uncommon", "rank": 4, "source": { "type": "quest", "quest": "Ar'kelos the Guardian", "zone": "Netherstorm" } }
            ],
            "mainhand": [
              { "id": 27872, "name": "The Harvester of Souls", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Auchenai Crypts", "boss": "Exarch Maladaar", "detail": "Heroic only — 2.40 speed" } },
              { "id": 28438, "name": "Dragonmaw", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Blacksmithing — Master Hammersmith only, 2.70 speed" } },
              { "id": 29348, "name": "The Bladefist", "quality": "epic", "rank": 3, "source": { "type": "drop", "instance": "The Shattered Halls", "boss": "Warchief Kargath Bladefist", "detail": "Heroic only" } }
            ],
            "offhand": [
              { "id": 27872, "name": "The Harvester of Souls", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Auchenai Crypts", "boss": "Exarch Maladaar", "detail": "Heroic only — 2.40 speed" }, "note": "Farm a second one" },
              { "id": 31139, "name": "Fist of Reckoning", "quality": "rare", "rank": 2, "source": { "type": "world-drop", "detail": "BoE world drop — 2.70 speed" } }
            ],
            "ranged": [
              { "id": 27815, "name": "Totem of the Astral Winds", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Mana-Tombs", "boss": "Pandemonius", "detail": "Heroic only" } },
              { "id": 27984, "name": "Totem of Impact", "quality": "rare", "rank": 2, "faction": "alliance", "source": { "type": "vendor", "detail": "Honor Hold — Marks of Honor Hold" } },
              { "id": 27947, "name": "Totem of Impact", "quality": "rare", "rank": 2, "faction": "horde", "source": { "type": "vendor", "detail": "Thrallmar — Marks of Thrallmar" } }
            ]
          }
        },
        {
          "id": "p1",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 29040, "name": "Cyclone Helm", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar", "detail": "Helm of the Fallen Champion token" } },
              { "id": 28224, "name": "Wastewalker Helm", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Old Hillsbrad Foothills", "boss": "Epoch Hunter", "detail": "Heroic only" } }
            ],
            "neck": [
              { "id": 29381, "name": "Choker of Vile Intent", "quality": "epic", "rank": 1, "source": { "type": "badge", "detail": "25 Badge of Justice — G'eras, Shattrath" } },
              { "id": 28509, "name": "Worgen Claw Necklace", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan", "boss": "Attumen the Huntsman" } }
            ],
            "shoulder": [
              { "id": 29043, "name": "Cyclone Shoulderplates", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Gruul's Lair", "boss": "High King Maulgar", "detail": "Pauldrons of the Fallen Champion token" } },
              { "id": 27797, "name": "Wastewalker Shoulderpads", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Auchenai Crypts", "boss": "Avatar of the Martyred", "detail": "Heroic only" } }
            ],
            "back": [
              { "id": 24259, "name": "Vengeance Wrap", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring, BoE" } },
              { "id": 30729, "name": "Black-Iron Battlecloak", "quality": "epic", "rank": 2, "source": { "type": "drop", "zone": "Shadowmoon Valley", "boss": "Doomwalker", "detail": "World boss" } },
              { "id": 28672, "name": "Drape of the Dark Reavers", "quality": "epic", "rank": 3, "source": { "type": "drop", "instance": "Karazhan", "boss": "Shade of Aran" } }
            ],
            "chest": [
              { "id": 29515, "name": "Ebon Netherscale Breastplate", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Dragonscale Leatherworking, BoP (3-piece set bonus)" } },
              { "id": 30730, "name": "Terrorweave Tunic", "quality": "epic", "rank": 2, "source": { "type": "drop", "zone": "Shadowmoon Valley", "boss": "Doomwalker", "detail": "World boss" } },
              { "id": 29038, "name": "Cyclone Breastplate", "quality": "epic", "rank": 3, "source": { "type": "drop", "instance": "Magtheridon's Lair", "boss": "Magtheridon", "detail": "Chestguard of the Fallen Champion token" } }
            ],
            "wrist": [
              { "id": 29517, "name": "Ebon Netherscale Bracers", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Dragonscale Leatherworking, BoP" } },
              { "id": 28514, "name": "Bracers of Maliciousness", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan" } }
            ],
            "hands": [
              { "id": 28776, "name": "Liar's Tongue Gloves", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Magtheridon's Lair", "boss": "Magtheridon" } },
              { "id": 30644, "name": "Grips of Deftness", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan", "detail": "Trash drop" } }
            ],
            "waist": [
              { "id": 29516, "name": "Ebon Netherscale Belt", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Dragonscale Leatherworking, BoP" } },
              { "id": 28828, "name": "Gronn-Stitched Girdle", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Gruul's Lair", "boss": "Gruul the Dragonkiller" } }
            ],
            "legs": [
              { "id": 30739, "name": "Scaled Greaves of the Marksman", "quality": "epic", "rank": 1, "source": { "type": "drop", "zone": "Hellfire Peninsula", "boss": "Doom Lord Kazzak", "detail": "World boss" } },
              { "id": 28741, "name": "Skulker's Greaves", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan" } }
            ],
            "feet": [
              { "id": 28545, "name": "Edgewalker Longboots", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Moroes" } },
              { "id": 28746, "name": "Fiend Slayer Boots", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan" } }
            ],
            "finger": [
              { "id": 28757, "name": "Ring of a Thousand Marks", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar" } },
              { "id": 30834, "name": "Shapeshifter's Signet", "quality": "epic", "rank": 2, "source": { "type": "reputation", "detail": "Lower City — Exalted" } },
              { "id": 30738, "name": "Ring of Reciprocity", "quality": "epic", "rank": 3, "source": { "type": "drop", "zone": "Hellfire Peninsula", "boss": "Doom Lord Kazzak", "detail": "World boss" } }
            ],
            "trinket": [
              { "id": 28830, "name": "Dragonspine Trophy", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Gruul's Lair", "boss": "Gruul the Dragonkiller" } },
              { "id": 29383, "name": "Bloodlust Brooch", "quality": "epic", "rank": 2, "source": { "type": "badge", "detail": "41 Badge of Justice — G'eras, Shattrath" } },
              { "id": 28288, "name": "Abacus of Violent Odds", "quality": "rare", "rank": 3, "source": { "type": "drop", "instance": "The Mechanar", "boss": "Pathaleon the Calculator" } }
            ],
            "mainhand": [
              { "id": 28308, "name": "Gladiator's Cleaver", "quality": "epic", "rank": 1, "source": { "type": "pvp", "detail": "Season 1 — Arena Points, 2.60 speed" } },
              { "id": 28767, "name": "The Decapitator", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar", "detail": "2.60 speed" } },
              { "id": 27872, "name": "The Harvester of Souls", "quality": "rare", "rank": 3, "source": { "type": "drop", "instance": "Auchenai Crypts", "boss": "Exarch Maladaar", "detail": "Heroic only" } }
            ],
            "offhand": [
              { "id": 28308, "name": "Gladiator's Cleaver", "quality": "epic", "rank": 1, "source": { "type": "pvp", "detail": "Season 1 — Arena Points, 2.60 speed" }, "note": "Second Cleaver — keep both hands slow" },
              { "id": 27872, "name": "The Harvester of Souls", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Auchenai Crypts", "boss": "Exarch Maladaar", "detail": "Heroic only" } }
            ],
            "ranged": [
              { "id": 27815, "name": "Totem of the Astral Winds", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Mana-Tombs", "boss": "Pandemonius", "detail": "Heroic only" } }
            ]
          }
        },
        {
          "id": "p5",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 34244, "name": "Duplicitous Guise", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden" } },
              { "id": 32235, "name": "Cursed Vision of Sargeras", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Black Temple", "boss": "Illidan Stormrage" } }
            ],
            "neck": [
              { "id": 34358, "name": "Hard Khorium Choker", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Jewelcrafting, BoP" } },
              { "id": 34177, "name": "Clutch of Demise", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau" } }
            ],
            "shoulder": [
              { "id": 34392, "name": "Demontooth Shoulderpads", "quality": "epic", "rank": 1, "source": { "type": "vendor", "detail": "Sunmote exchange — Isle of Quel'Danas" } },
              { "id": 34194, "name": "Mantle of the Golden Forest", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau" } }
            ],
            "back": [
              { "id": 34241, "name": "Cloak of Unforgivable Sin", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden" } }
            ],
            "chest": [
              { "id": 34369, "name": "Carapace of Sun and Shadow", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking, BoP" } },
              { "id": 34397, "name": "Bladed Chaos Tunic", "quality": "epic", "rank": 2, "source": { "type": "vendor", "detail": "Sunmote exchange — Isle of Quel'Danas" } }
            ],
            "wrist": [
              { "id": 34439, "name": "Skyshatter Wristguards", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kalecgos", "detail": "Bracers of the Forgotten Protector token" } }
            ],
            "hands": [
              { "id": 34343, "name": "Thalassian Ranger Gauntlets", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau" } },
              { "id": 34370, "name": "Gloves of Immortal Dusk", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Leatherworking, BoE" } }
            ],
            "waist": [
              { "id": 34545, "name": "Skyshatter Girdle", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Brutallus", "detail": "Belt of the Forgotten Protector token" } }
            ],
            "legs": [
              { "id": 34188, "name": "Leggings of the Immortal Night", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Felmyst" } },
              { "id": 34168, "name": "Starstalker Legguards", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau" } }
            ],
            "feet": [
              { "id": 34567, "name": "Skyshatter Greaves", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Felmyst", "detail": "Boots of the Forgotten Protector token" } }
            ],
            "finger": [
              { "id": 34189, "name": "Band of Ruinous Delight", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Eredar Twins" } },
              { "id": 32497, "name": "Stormrage Signet Ring", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Black Temple", "boss": "Illidan Stormrage" } },
              { "id": 34361, "name": "Hard Khorium Band", "quality": "epic", "rank": 3, "source": { "type": "crafted", "detail": "Jewelcrafting, BoE" } }
            ],
            "trinket": [
              { "id": 34427, "name": "Blackened Naaru Sliver", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "M'uru" } },
              { "id": 34472, "name": "Shard of Contempt", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Magisters' Terrace", "boss": "Priestess Delrissa", "detail": "Heroic only" } },
              { "id": 28830, "name": "Dragonspine Trophy", "quality": "epic", "rank": 3, "source": { "type": "drop", "instance": "Gruul's Lair", "boss": "Gruul the Dragonkiller" } }
            ],
            "mainhand": [
              { "id": 34331, "name": "Hand of the Deceiver", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden", "detail": "2.60 speed fist" } }
            ],
            "offhand": [
              { "id": 34346, "name": "Mounting Vengeance", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "detail": "Trash drop — 2.60 speed fist" } }
            ],
            "ranged": [
              { "id": 33507, "name": "Stonebreaker's Totem", "quality": "epic", "rank": 1, "source": { "type": "badge", "detail": "20 Badge of Justice — G'eras, Shattrath" } }
            ]
          }
        }
      ]
    },
    {
      "id": "restoration",
      "name": "Restoration",
      "role": "healer",
      "icon": "spell_nature_magicimmunity",
      "statPriority": "+Healing > Mp5 > Intellect > Spell Crit > Spirit",
      "notes": "Stack +Healing and raw Mp5 — Chain Heal is your bread and butter and Shamans get little from Spirit. Totem of Healing Rains (Karazhan, Maiden of Virtue) buffs Chain Heal and remains BiS through Sunwell. Primal Mooncloth pieces are BoP: you must be a Mooncloth-spec Tailor to use them. Both factions play Shaman in TBC; the Hellfire rep rings are faction-specific (marked below).",
      "enchants": {
        "head": "Glyph of Renewal (+35 healing, +7 mp5) — Honor Hold/Thrallmar Revered",
        "shoulder": "Greater Inscription of Faith — Aldor Exalted (or Greater Inscription of the Oracle — Scryers)",
        "chest": "Exceptional Stats (+6 all stats)",
        "wrist": "Superior Healing (+30 healing)",
        "hands": "Major Healing (+35 healing)",
        "legs": "Golden Spellthread (+66 healing, +20 stamina)",
        "feet": "Vitality (health and mana regen)",
        "mainhand": "Major Healing (+81 healing)"
      },
      "brackets": [
        {
          "id": "preraid",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 24264, "name": "Whitemend Hood", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring, BoE (Whitemend set with the pants)" } },
              { "id": 28413, "name": "Hallowed Crown", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "The Arcatraz", "boss": "Harbinger Skyriss" } }
            ],
            "neck": [
              { "id": 31691, "name": "Natasha's Guardian Cord", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "The Hound-Master", "zone": "Blade's Edge Mountains" } },
              { "id": 28233, "name": "Necklace of Resplendent Hope", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Old Hillsbrad Foothills", "boss": "Epoch Hunter", "detail": "Heroic only" } }
            ],
            "shoulder": [
              { "id": 21874, "name": "Primal Mooncloth Shoulders", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Mooncloth Tailoring, BoP" } },
              { "id": 27775, "name": "Hallowed Pauldrons", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Shadow Labyrinth", "boss": "Grandmaster Vorpil" } },
              { "id": 35395, "name": "Seer's Ringmail Shoulderpads", "quality": "rare", "rank": 3, "source": { "type": "reputation", "detail": "Shattered Sun Offensive — Honored (available from Phase 5)" } }
            ],
            "back": [
              { "id": 31329, "name": "Lifegiving Cloak", "quality": "epic", "rank": 1, "source": { "type": "world-drop", "detail": "BoE world drop" } },
              { "id": 24254, "name": "White Remedy Cape", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Tailoring, BoE" } },
              { "id": 27448, "name": "Cloak of the Everliving", "quality": "rare", "rank": 3, "source": { "type": "drop", "instance": "Hellfire Ramparts", "boss": "Watchkeeper Gargolmar", "detail": "Heroic only" } }
            ],
            "chest": [
              { "id": 29522, "name": "Windhawk Hauberk", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Tribal Leatherworking, BoP" } },
              { "id": 21875, "name": "Primal Mooncloth Robe", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Mooncloth Tailoring, BoP" } }
            ],
            "wrist": [
              { "id": 29523, "name": "Windhawk Bracers", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Tribal Leatherworking, BoP" } },
              { "id": 29183, "name": "Bindings of the Timewalker", "quality": "epic", "rank": 2, "source": { "type": "reputation", "detail": "Keepers of Time — Exalted" } }
            ],
            "hands": [
              { "id": 29506, "name": "Gloves of the Living Touch", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking, BoE" } },
              { "id": 28304, "name": "Prismatic Mittens of Mending", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "The Botanica", "boss": "Commander Sarannis" } },
              { "id": 27806, "name": "Fathomheart Gauntlets", "quality": "rare", "rank": 3, "source": { "type": "drop", "instance": "The Steamvault", "boss": "Warlord Kalithresh" } }
            ],
            "waist": [
              { "id": 29524, "name": "Windhawk Belt", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Tribal Leatherworking, BoP" } },
              { "id": 21873, "name": "Primal Mooncloth Belt", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Mooncloth Tailoring, BoP" } }
            ],
            "legs": [
              { "id": 24261, "name": "Whitemend Pants", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring, BoE (Whitemend set with the hood)" } },
              { "id": 30543, "name": "Pontifex Kilt", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "The Botanica", "boss": "Warp Splinter", "detail": "Heroic only" } }
            ],
            "feet": [
              { "id": 27549, "name": "Wavefury Boots", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Slave Pens", "boss": "Rokmar the Crackler", "detail": "Heroic only" } },
              { "id": 27525, "name": "Jeweled Boots of Sanctification", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "The Shattered Halls", "boss": "Warbringer O'mrogg" } }
            ],
            "finger": [
              { "id": 29169, "name": "Ring of Convalescence", "quality": "rare", "rank": 1, "faction": "alliance", "source": { "type": "reputation", "detail": "Honor Hold — Revered" } },
              { "id": 29168, "name": "Ancestral Band", "quality": "rare", "rank": 1, "faction": "horde", "source": { "type": "reputation", "detail": "Thrallmar — Revered" }, "note": "Horde mirror of Ring of Convalescence" },
              { "id": 28259, "name": "Cosmic Lifeband", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "The Mechanar", "boss": "Nethermancer Sepethrea" } },
              { "id": 29373, "name": "Band of Halos", "quality": "epic", "rank": 3, "source": { "type": "badge", "detail": "25 Badge of Justice — G'eras, Shattrath" } }
            ],
            "trinket": [
              { "id": 29376, "name": "Essence of the Martyr", "quality": "epic", "rank": 1, "source": { "type": "badge", "detail": "41 Badge of Justice — G'eras, Shattrath" } },
              { "id": 30841, "name": "Lower City Prayerbook", "quality": "rare", "rank": 2, "source": { "type": "reputation", "detail": "Lower City — Revered" } },
              { "id": 28190, "name": "Scarab of the Infinite Cycle", "quality": "rare", "rank": 3, "source": { "type": "drop", "instance": "The Black Morass", "boss": "Aeonus" } }
            ],
            "mainhand": [
              { "id": 23556, "name": "Hand of Eternity", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Blacksmithing, BoE" } },
              { "id": 29353, "name": "Shockwave Truncheon", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Shadow Labyrinth", "boss": "Murmur", "detail": "Heroic only" } },
              { "id": 29175, "name": "Gavel of Pure Light", "quality": "epic", "rank": 3, "source": { "type": "reputation", "detail": "The Sha'tar — Exalted" } }
            ],
            "offhand": [
              { "id": 29267, "name": "Light-Bearer's Faith Shield", "quality": "epic", "rank": 1, "source": { "type": "badge", "detail": "33 Badge of Justice — G'eras, Shattrath" } },
              { "id": 29274, "name": "Tears of Heaven", "quality": "epic", "rank": 2, "source": { "type": "badge", "detail": "25 Badge of Justice — G'eras, Shattrath" } }
            ],
            "ranged": [
              { "id": 27544, "name": "Totem of Spontaneous Regrowth", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Slave Pens", "boss": "Mennu the Betrayer", "detail": "Heroic only" } },
              { "id": 25645, "name": "Totem of the Plains", "quality": "rare", "rank": 2, "source": { "type": "quest", "quest": "The Impotent Leader", "zone": "Nagrand" } }
            ]
          }
        },
        {
          "id": "p1",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 29028, "name": "Cyclone Headdress", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar", "detail": "Helm of the Fallen Champion token" } },
              { "id": 24264, "name": "Whitemend Hood", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Tailoring, BoE" } }
            ],
            "neck": [
              { "id": 28609, "name": "Emberspur Talisman", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Nightbane" } },
              { "id": 30726, "name": "Archaic Charm of Presence", "quality": "epic", "rank": 2, "source": { "type": "drop", "zone": "Shadowmoon Valley", "boss": "Doomwalker", "detail": "World boss" } },
              { "id": 28822, "name": "Teeth of Gruul", "quality": "epic", "rank": 3, "source": { "type": "drop", "instance": "Gruul's Lair", "boss": "Gruul the Dragonkiller" } }
            ],
            "shoulder": [
              { "id": 29031, "name": "Cyclone Shoulderpads", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Gruul's Lair", "boss": "High King Maulgar", "detail": "Pauldrons of the Fallen Champion token" } },
              { "id": 21874, "name": "Primal Mooncloth Shoulders", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Mooncloth Tailoring, BoP" } }
            ],
            "back": [
              { "id": 28765, "name": "Stainless Cloak of the Pure Hearted", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan" } },
              { "id": 31329, "name": "Lifegiving Cloak", "quality": "epic", "rank": 2, "source": { "type": "world-drop", "detail": "BoE world drop" } }
            ],
            "chest": [
              { "id": 29522, "name": "Windhawk Hauberk", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Tribal Leatherworking, BoP" } },
              { "id": 29029, "name": "Cyclone Hauberk", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Magtheridon's Lair", "boss": "Magtheridon", "detail": "Chestguard of the Fallen Champion token" } },
              { "id": 21875, "name": "Primal Mooncloth Robe", "quality": "epic", "rank": 3, "source": { "type": "crafted", "detail": "Mooncloth Tailoring, BoP" } }
            ],
            "wrist": [
              { "id": 29523, "name": "Windhawk Bracers", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Tribal Leatherworking, BoP" } },
              { "id": 28503, "name": "Whirlwind Bracers", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan" } }
            ],
            "hands": [
              { "id": 28520, "name": "Gloves of Centering", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan" } },
              { "id": 28521, "name": "Mitts of the Treemender", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan" } }
            ],
            "waist": [
              { "id": 29524, "name": "Windhawk Belt", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Tribal Leatherworking, BoP" } },
              { "id": 28567, "name": "Belt of Gale Force", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan" } }
            ],
            "legs": [
              { "id": 30727, "name": "Gilded Trousers of Benediction", "quality": "epic", "rank": 1, "source": { "type": "drop", "zone": "Shadowmoon Valley", "boss": "Doomwalker", "detail": "World boss" } },
              { "id": 28751, "name": "Heart-Flame Leggings", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan" } },
              { "id": 24261, "name": "Whitemend Pants", "quality": "epic", "rank": 3, "source": { "type": "crafted", "detail": "Tailoring, BoE" } }
            ],
            "feet": [
              { "id": 30737, "name": "Gold-Leaf Wildboots", "quality": "epic", "rank": 1, "source": { "type": "drop", "zone": "Hellfire Peninsula", "boss": "Doom Lord Kazzak", "detail": "World boss" } },
              { "id": 28752, "name": "Forestlord Striders", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan" } }
            ],
            "finger": [
              { "id": 28763, "name": "Jade Ring of the Everliving", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar" } },
              { "id": 28790, "name": "Naaru Lightwarden's Band", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Magtheridon's Lair", "boss": "Magtheridon" } },
              { "id": 30736, "name": "Ring of Flowing Light", "quality": "epic", "rank": 3, "source": { "type": "drop", "zone": "Hellfire Peninsula", "boss": "Doom Lord Kazzak", "detail": "World boss" } }
            ],
            "trinket": [
              { "id": 29376, "name": "Essence of the Martyr", "quality": "epic", "rank": 1, "source": { "type": "badge", "detail": "41 Badge of Justice — G'eras, Shattrath" } },
              { "id": 28590, "name": "Ribbon of Sacrifice", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan", "boss": "Opera Event" } },
              { "id": 30841, "name": "Lower City Prayerbook", "quality": "rare", "rank": 3, "source": { "type": "reputation", "detail": "Lower City — Revered" } }
            ],
            "mainhand": [
              { "id": 28771, "name": "Light's Justice", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar" } },
              { "id": 28522, "name": "Shard of the Virtuous", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan", "boss": "Maiden of Virtue" } }
            ],
            "offhand": [
              { "id": 29458, "name": "Aegis of the Vindicator", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Magtheridon's Lair", "boss": "Magtheridon" } },
              { "id": 29267, "name": "Light-Bearer's Faith Shield", "quality": "epic", "rank": 2, "source": { "type": "badge", "detail": "33 Badge of Justice — G'eras, Shattrath" } }
            ],
            "ranged": [
              { "id": 28523, "name": "Totem of Healing Rains", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Maiden of Virtue" } },
              { "id": 27544, "name": "Totem of Spontaneous Regrowth", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "The Slave Pens", "boss": "Mennu the Betrayer", "detail": "Heroic only" } }
            ]
          }
        },
        {
          "id": "p5",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 34402, "name": "Shroud of Chieftain Ner'zhul", "quality": "epic", "rank": 1, "source": { "type": "vendor", "detail": "Sunmote exchange — Isle of Quel'Danas" } },
              { "id": 34339, "name": "Cowl of Light's Purity", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau" } }
            ],
            "neck": [
              { "id": 34360, "name": "Amulet of Flowing Life", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Jewelcrafting, BoP" } },
              { "id": 33281, "name": "Brooch of Nature's Mercy", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Zul'Aman", "boss": "Akil'zon" } }
            ],
            "shoulder": [
              { "id": 31022, "name": "Skyshatter Shoulderpads", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Black Temple", "boss": "Mother Shahraz", "detail": "Pauldrons of the Forgotten Protector token" } },
              { "id": 34202, "name": "Shawl of Wonderment", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau" } }
            ],
            "back": [
              { "id": 32524, "name": "Shroud of the Highborne", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Black Temple", "boss": "Illidan Stormrage" } },
              { "id": 34205, "name": "Shroud of Redeemed Souls", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau" } }
            ],
            "chest": [
              { "id": 34375, "name": "Sun-Drenched Scale Chestguard", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking, BoP" } },
              { "id": 34212, "name": "Sunglow Vest", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau" } }
            ],
            "wrist": [
              { "id": 34438, "name": "Skyshatter Bracers", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kalecgos", "detail": "Bracers of the Forgotten Protector token" } }
            ],
            "hands": [
              { "id": 34409, "name": "Gauntlets of the Ancient Frostwolf", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "detail": "Trash drop" } },
              { "id": 34376, "name": "Sun-Drenched Scale Gloves", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Leatherworking, BoE" } }
            ],
            "waist": [
              { "id": 34543, "name": "Skyshatter Belt", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Brutallus", "detail": "Belt of the Forgotten Protector token" } }
            ],
            "legs": [
              { "id": 34383, "name": "Kilt of Spiritual Reconstruction", "quality": "epic", "rank": 1, "source": { "type": "vendor", "detail": "Sunmote exchange — Isle of Quel'Danas" } },
              { "id": 34170, "name": "Pantaloons of Calming Strife", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau" } }
            ],
            "feet": [
              { "id": 34565, "name": "Skyshatter Boots", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Felmyst", "detail": "Boots of the Forgotten Protector token" } }
            ],
            "finger": [
              { "id": 34363, "name": "Ring of Flowing Life", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Jewelcrafting, BoE" } },
              { "id": 32528, "name": "Blessed Band of Karabor", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Black Temple", "detail": "Trash drop" } },
              { "id": 34166, "name": "Band of Lucent Beams", "quality": "epic", "rank": 3, "source": { "type": "drop", "instance": "Sunwell Plateau" } }
            ],
            "trinket": [
              { "id": 35750, "name": "Redeemer's Alchemist Stone", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Alchemy, BoP — Shattered Sun Offensive recipe" } },
              { "id": 34430, "name": "Glimmering Naaru Sliver", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "M'uru" } },
              { "id": 32496, "name": "Memento of Tyrande", "quality": "epic", "rank": 3, "source": { "type": "drop", "instance": "Black Temple", "boss": "Illidan Stormrage" } }
            ],
            "mainhand": [
              { "id": 34335, "name": "Hammer of Sanctification", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden" } },
              { "id": 34199, "name": "Archon's Gavel", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau" } }
            ],
            "offhand": [
              { "id": 34231, "name": "Aegis of Angelic Fortune", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Eredar Twins" } },
              { "id": 34206, "name": "Book of Highborne Hymns", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Eredar Twins" }, "note": "Held in off-hand — give up shield armor" }
            ],
            "ranged": [
              { "id": 28523, "name": "Totem of Healing Rains", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Maiden of Virtue" }, "note": "Still BiS from Phase 1" },
              { "id": 33505, "name": "Totem of Living Water", "quality": "epic", "rank": 2, "source": { "type": "badge", "detail": "15 Badge of Justice — G'eras, Shattrath" } }
            ]
          }
        }
      ]
    }
  ]
}
);
