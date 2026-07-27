/* BiS Companion data — TBC Classic Priest (Shadow / Holy / Discipline) gear by phase */
WOWDATA.register(
{
  "kind": "bis",
  "expansion": "tbc",
  "class": "priest",
  "className": "Priest",
  "classColor": "#FFFFFF",
  "specs": [
    {
      "id": "shadow",
      "name": "Shadow",
      "role": "dps",
      "icon": "spell_shadow_shadowwordpain",
      "statPriority": "Spell Hit (to 76 rating) > Shadow/Spell Damage > Intellect > Stamina > Spirit; Crit and Haste are weak (DoTs scale with neither)",
      "notes": "The boss spell-hit cap is 16% (202 rating), but 5/5 Shadow Focus lowers the gear requirement to just 6% = 76 hit rating - reach that before stacking raw Shadow damage. Misery does NOT grant spell hit in TBC (that is a WotLK change); it increases the target's spell damage taken by 5%, which - with Shadow Weaving, Vampiric Touch mana return and Vampiric Embrace - is why every raid wants a Shadow Priest 'mana battery' in a caster group. Crafted gear rules early: Frozen Shadoweave robe/shoulders/boots (crafter-only) plus Spellstrike hood/pants and Girdle of Ruination carry you from pre-raid deep into later phases.",
      "enchants": {
        "head": "Glyph of Power (+22 spell dmg / +14 spell hit) — The Sha'tar Revered",
        "shoulder": "Greater Inscription of the Orb (Scryers Exalted) or Greater Inscription of Discipline (Aldor Exalted)",
        "back": "Subtlety (-2% threat)",
        "chest": "Exceptional Stats (+6 all stats)",
        "wrist": "Spellpower (+15 spell dmg)",
        "hands": "Major Spellpower (+20 spell dmg)",
        "legs": "Runic Spellthread (+35 spell dmg / +20 stamina) — Scryers",
        "feet": "Boar's Speed (+9 stamina, minor run speed)",
        "finger": "Spellpower (+12 spell dmg each) — Enchanters only",
        "mainhand": "Soulfrost (+54 shadow and frost spell dmg)"
      },
      "brackets": [
        {
          "id": "preraid",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 24266, "name": "Spellstrike Hood", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Tailoring 375 (BoE) — Spellcloth" }, "note": "Best helm through all of Phase 1" },
              { "id": 28415, "name": "Hood of Oblivion", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "The Arcatraz", "boss": "Harbinger Skyriss" } },
              { "id": 28193, "name": "Mana-Etched Crown", "quality": "rare", "rank": 3, "faction": "both", "source": { "type": "drop", "instance": "Old Hillsbrad Foothills", "detail": "Dungeon Set 3 helm" } }
            ],
            "neck": [
              { "id": 28245, "name": "Pendant of Dominance", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "pvp", "detail": "Honor vendor (~15,300 Honor + Eye of the Storm marks)" } },
              { "id": 28134, "name": "Brooch of Heightened Potential", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Shadow Labyrinth", "boss": "Blackheart the Inciter" }, "note": "Has spell hit" },
              { "id": 31338, "name": "Charlotte's Ivy", "quality": "epic", "rank": 3, "faction": "both", "source": { "type": "world-drop", "detail": "BoE world drop" } }
            ],
            "shoulder": [
              { "id": 21869, "name": "Frozen Shadoweave Shoulders", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Shadoweave Tailoring — crafter-only (BoP)" } },
              { "id": 27778, "name": "Spaulders of Oblivion", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Shadow Labyrinth", "boss": "Murmur" } }
            ],
            "back": [
              { "id": 31201, "name": "Illidari Cloak", "quality": "rare", "rank": 1, "faction": "both", "source": { "type": "world-drop", "detail": "BoE world drop (Outland)" } },
              { "id": 27981, "name": "Sethekk Oracle Cloak", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Sethekk Halls", "boss": "Talon King Ikiss" }, "note": "Has spell hit" },
              { "id": 24252, "name": "Cloak of the Black Void", "quality": "rare", "rank": 3, "faction": "both", "source": { "type": "crafted", "detail": "Tailoring (BoE)" } }
            ],
            "chest": [
              { "id": 21871, "name": "Frozen Shadoweave Robe", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Shadoweave Tailoring — crafter-only (BoP)" } },
              { "id": 28232, "name": "Robe of Oblivion", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Shadow Labyrinth", "boss": "Murmur" } }
            ],
            "wrist": [
              { "id": 24692, "name": "Elementalist Bracelets", "quality": "uncommon", "rank": 1, "faction": "both", "source": { "type": "world-drop", "detail": "BoE world drop — look for the 'of Shadow Wrath' random enchant" } },
              { "id": 24250, "name": "Bracers of Havok", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "crafted", "detail": "Tailoring (BoE)" } }
            ],
            "hands": [
              { "id": 29317, "name": "Tempest's Touch", "quality": "rare", "rank": 1, "faction": "both", "source": { "type": "quest", "detail": "Caverns of Time — Old Hillsbrad quest line (neutral, both factions)" } },
              { "id": 27537, "name": "Gloves of Oblivion", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "The Shattered Halls", "boss": "Warchief Kargath Bladefist" } }
            ],
            "waist": [
              { "id": 24256, "name": "Girdle of Ruination", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Tailoring (BoE)" } },
              { "id": 29241, "name": "Belt of Depravity", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "The Arcatraz", "boss": "Harbinger Skyriss", "detail": "Heroic only" } }
            ],
            "legs": [
              { "id": 24262, "name": "Spellstrike Pants", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Tailoring 375 (BoE) — Spellcloth" }, "note": "Best legs through Phase 1 as well" },
              { "id": 30531, "name": "Breeches of the Occultist", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "The Black Morass", "boss": "Aeonus", "detail": "Heroic only" } }
            ],
            "feet": [
              { "id": 21870, "name": "Frozen Shadoweave Boots", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Shadoweave Tailoring — crafter-only (BoP)" } },
              { "id": 28179, "name": "Shattrath Jumpers", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "quest", "quest": "Into the Heart of the Labyrinth", "detail": "Shadow Labyrinth quest (neutral, both factions)" } }
            ],
            "finger": [
              { "id": 29172, "name": "Ashyen's Gift", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "reputation", "detail": "Cenarion Expedition — Exalted" }, "note": "Spell hit" },
              { "id": 28555, "name": "Seal of the Exorcist", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "vendor", "detail": "Spirit Shard vendor — Auchindoun world PvP" } },
              { "id": 31339, "name": "Lola's Eve", "quality": "epic", "rank": 3, "faction": "both", "source": { "type": "world-drop", "detail": "BoE world drop" } }
            ],
            "trinket": [
              { "id": 29370, "name": "Icon of the Silver Crescent", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "badge", "detail": "41 Badges of Justice — G'eras, Shattrath" } },
              { "id": 29132, "name": "Scryer's Bloodgem", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "reputation", "detail": "The Scryers — Revered" }, "note": "Spell hit on-use" },
              { "id": 27683, "name": "Quagmirran's Eye", "quality": "rare", "rank": 3, "faction": "both", "source": { "type": "drop", "instance": "The Slave Pens", "boss": "Quagmirran", "detail": "Heroic only" } }
            ],
            "mainhand": [
              { "id": 28297, "name": "Gladiator's Spellblade", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "pvp", "detail": "Arena Season 1" } },
              { "id": 30832, "name": "Gavel of Unearthed Secrets", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "reputation", "detail": "Lower City — Exalted" } },
              { "id": 23554, "name": "Eternium Runed Blade", "quality": "epic", "rank": 3, "faction": "both", "source": { "type": "crafted", "detail": "Blacksmithing (BoE)" } }
            ],
            "offhand": [
              { "id": 29272, "name": "Orb of the Soul-Eater", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "badge", "detail": "25 Badges of Justice — G'eras, Shattrath" }, "note": "Big shadow damage; holds for many phases" }
            ],
            "ranged": [
              { "id": 25295, "name": "Flawless Wand", "quality": "uncommon", "rank": 1, "faction": "both", "source": { "type": "world-drop", "detail": "BoE world drop — seek the 'of Shadow Wrath' random enchant" } },
              { "id": 28386, "name": "Nether Core's Control Rod", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "The Arcatraz", "boss": "Dalliah the Doomsayer" } },
              { "id": 29350, "name": "The Black Stalk", "quality": "epic", "rank": 3, "faction": "both", "source": { "type": "drop", "instance": "The Underbog", "boss": "The Black Stalker", "detail": "Heroic only" } }
            ]
          }
        },
        {
          "id": "p1",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 24266, "name": "Spellstrike Hood", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Tailoring 375 (BoE) — Spellcloth" } },
              { "id": 29058, "name": "Soul-Collar of the Incarnate", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar", "detail": "Tier 4 helm token" } }
            ],
            "neck": [
              { "id": 30666, "name": "Ritssyn's Lost Pendant", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "detail": "Trash drop (rare)" } },
              { "id": 28762, "name": "Adornment of Stolen Souls", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar" } },
              { "id": 28134, "name": "Brooch of Heightened Potential", "quality": "rare", "rank": 3, "faction": "both", "source": { "type": "drop", "instance": "Shadow Labyrinth", "boss": "Blackheart the Inciter" } }
            ],
            "shoulder": [
              { "id": 21869, "name": "Frozen Shadoweave Shoulders", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Shadoweave Tailoring — crafter-only (BoP)" } },
              { "id": 29060, "name": "Soul-Mantle of the Incarnate", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Gruul's Lair", "boss": "High King Maulgar", "detail": "Tier 4 shoulder token" } }
            ],
            "back": [
              { "id": 28766, "name": "Ruby Drape of the Mysticant", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar" }, "note": "Spell hit" },
              { "id": 28570, "name": "Shadow-Cloak of Dalaran", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Moroes" } }
            ],
            "chest": [
              { "id": 21871, "name": "Frozen Shadoweave Robe", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Shadoweave Tailoring — crafter-only (BoP)" } },
              { "id": 29056, "name": "Shroud of the Incarnate", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Magtheridon's Lair", "boss": "Magtheridon", "detail": "Tier 4 chest token" } }
            ],
            "wrist": [
              { "id": 30684, "name": "Ravager's Cuffs", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Rokad the Ravager", "detail": "Servants' Quarters animal boss" } },
              { "id": 24250, "name": "Bracers of Havok", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "crafted", "detail": "Tailoring (BoE)" } }
            ],
            "hands": [
              { "id": 28507, "name": "Handwraps of Flowing Thought", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Attumen the Huntsman" }, "note": "Spell hit" },
              { "id": 28780, "name": "Soul-Eater's Handwraps", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Magtheridon's Lair", "boss": "Magtheridon" } }
            ],
            "waist": [
              { "id": 28799, "name": "Belt of Divine Inspiration", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Gruul's Lair", "boss": "High King Maulgar" } },
              { "id": 24256, "name": "Girdle of Ruination", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "crafted", "detail": "Tailoring (BoE)" } }
            ],
            "legs": [
              { "id": 24262, "name": "Spellstrike Pants", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Tailoring 375 (BoE) — Spellcloth" } },
              { "id": 28594, "name": "Trial-Fire Trousers", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Opera Event" } }
            ],
            "feet": [
              { "id": 21870, "name": "Frozen Shadoweave Boots", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Shadoweave Tailoring — crafter-only (BoP)" } },
              { "id": 28517, "name": "Boots of Foretelling", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Maiden of Virtue" } }
            ],
            "finger": [
              { "id": 28753, "name": "Ring of Recurrence", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Chess Event" } },
              { "id": 29287, "name": "Violet Signet of the Archmage", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "reputation", "detail": "The Violet Eye — Exalted" } },
              { "id": 28793, "name": "Band of Crimson Fury", "quality": "epic", "rank": 3, "faction": "both", "source": { "type": "quest", "detail": "Magtheridon's Head turn-in (neutral, both factions)" }, "note": "Spell hit" }
            ],
            "trinket": [
              { "id": 29370, "name": "Icon of the Silver Crescent", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "badge", "detail": "41 Badges of Justice — G'eras, Shattrath" } },
              { "id": 28789, "name": "Eye of Magtheridon", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Magtheridon's Lair", "boss": "Magtheridon" } },
              { "id": 29132, "name": "Scryer's Bloodgem", "quality": "rare", "rank": 3, "faction": "both", "source": { "type": "reputation", "detail": "The Scryers — Revered" } }
            ],
            "mainhand": [
              { "id": 28770, "name": "Nathrezim Mindblade", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar" } },
              { "id": 28633, "name": "Staff of Infinite Mysteries", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "The Curator" }, "note": "2H staff — replaces off hand" }
            ],
            "offhand": [
              { "id": 29272, "name": "Orb of the Soul-Eater", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "badge", "detail": "25 Badges of Justice — G'eras, Shattrath" } }
            ],
            "ranged": [
              { "id": 28673, "name": "Tirisfal Wand of Ascendancy", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Shade of Aran" }, "note": "Spell hit" },
              { "id": 25295, "name": "Flawless Wand", "quality": "uncommon", "rank": 2, "faction": "both", "source": { "type": "world-drop", "detail": "BoE world drop — 'of Shadow Wrath' enchant" } }
            ]
          }
        },
        {
          "id": "p5",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 34340, "name": "Dark Conjuror's Collar", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden" } },
              { "id": 31064, "name": "Hood of Absolution", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Hyjal Summit", "boss": "Archimonde", "detail": "Tier 6 helm token" } }
            ],
            "neck": [
              { "id": 34204, "name": "Amulet of Unfettered Magics", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Eredar Twins" } }
            ],
            "shoulder": [
              { "id": 31070, "name": "Shoulderpads of Absolution", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Black Temple", "boss": "Mother Shahraz", "detail": "Tier 6 shoulder token" } },
              { "id": 34210, "name": "Amice of the Convoker", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Eredar Twins" } }
            ],
            "back": [
              { "id": 34242, "name": "Tattered Cape of Antonidas", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden" } }
            ],
            "chest": [
              { "id": 34364, "name": "Sunfire Robe", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Tailoring 375 — pattern drops in Sunwell Plateau" } },
              { "id": 34232, "name": "Fel Conquerer Raiments", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "M'uru" } }
            ],
            "wrist": [
              { "id": 34434, "name": "Bracers of Absolution", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kalecgos", "detail": "Bracers of the Forgotten Conqueror token" } }
            ],
            "hands": [
              { "id": 34344, "name": "Handguards of Defiled Worlds", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden" } },
              { "id": 34366, "name": "Sunfire Handwraps", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "crafted", "detail": "Tailoring 375 — pattern drops in Sunwell Plateau" } }
            ],
            "waist": [
              { "id": 34528, "name": "Cord of Absolution", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Brutallus", "detail": "Belt of the Forgotten Conqueror token" } }
            ],
            "legs": [
              { "id": 34386, "name": "Pantaloons of Growing Strife", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "vendor", "detail": "Yrma, Isle of Quel'Danas — exchange Pantaloons of Calming Strife (Kalecgos) + Sunmote" } }
            ],
            "feet": [
              { "id": 34563, "name": "Treads of Absolution", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Felmyst", "detail": "Boots of the Forgotten Conqueror token" } }
            ],
            "finger": [
              { "id": 34230, "name": "Ring of Omnipotence", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "M'uru" } },
              { "id": 32527, "name": "Ring of Ancient Knowledge", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Black Temple", "detail": "Trash drop" } },
              { "id": 34362, "name": "Loop of Forged Power", "quality": "epic", "rank": 3, "faction": "both", "source": { "type": "crafted", "detail": "Jewelcrafting 375 — crafter-only (BoP)" } }
            ],
            "trinket": [
              { "id": 33829, "name": "Hex Shrunken Head", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Zul'Aman", "boss": "Hex Lord Malacrass" } },
              { "id": 34429, "name": "Shifting Naaru Sliver", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "M'uru" } },
              { "id": 32483, "name": "The Skull of Gul'dan", "quality": "epic", "rank": 3, "faction": "both", "source": { "type": "drop", "instance": "Black Temple", "boss": "Illidan Stormrage" } }
            ],
            "mainhand": [
              { "id": 34336, "name": "Sunflare", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden" } },
              { "id": 34182, "name": "Grand Magister's Staff of Torrents", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Felmyst" }, "note": "2H staff — replaces off hand" }
            ],
            "offhand": [
              { "id": 34179, "name": "Heart of the Pit", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Brutallus" } }
            ],
            "ranged": [
              { "id": 34347, "name": "Wand of the Demonsoul", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "detail": "Trash drop" } }
            ]
          }
        }
      ]
    },
    {
      "id": "holy",
      "name": "Holy",
      "role": "healer",
      "icon": "spell_holy_holybolt",
      "statPriority": "+Healing > mp5 > Intellect > Spirit > Spell Crit",
      "notes": "The core TBC healing tension is +Healing versus mp5: stack throughput but never so far that you run dry — the crafted Primal Mooncloth 3-piece (robe/belt/shoulders, crafter-only) returns 5% of mana spent while casting plus strong mp5 and stays competitive deep into the raid tiers, which is why its chest/belt remain rank 1 through Phase 1. Fear Ward: in vanilla it was a Dwarf-only racial (a real Alliance perk); as of TBC (patch 2.3, and from launch in TBC Classic) ALL priests of both factions learn Fear Ward from the trainer at level 20 — plan cooldowns for fear-heavy fights like Nightbane and High King Maulgar. Circle of Healing is the standard endgame raid-healing build.",
      "enchants": {
        "head": "Glyph of Renewal (+35 healing / +7 mp5) — Honor Hold or Thrallmar Revered",
        "shoulder": "Greater Inscription of Faith (Aldor Exalted) or Greater Inscription of the Oracle (Scryers Exalted)",
        "chest": "Restore Mana Prime (+6 mp5) or Exceptional Stats (+6 all stats)",
        "wrist": "Superior Healing (+30 healing)",
        "hands": "Major Healing (+35 healing)",
        "legs": "Golden Spellthread (+66 healing / +20 stamina) — Aldor",
        "feet": "Vitality (+4 hp5 / +4 mp5)",
        "finger": "Healing Power (+20 healing each) — Enchanters only",
        "mainhand": "Major Healing (+81 healing)"
      },
      "brackets": [
        {
          "id": "preraid",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 24264, "name": "Whitemend Hood", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Tailoring 375 — Primal Mooncloth + Primal Nether" } },
              { "id": 28413, "name": "Hallowed Crown", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "The Arcatraz", "boss": "Harbinger Skyriss" } }
            ],
            "neck": [
              { "id": 29374, "name": "Necklace of Eternal Hope", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "badge", "detail": "25 Badges of Justice — G'eras, Shattrath" } }
            ],
            "shoulder": [
              { "id": 21874, "name": "Primal Mooncloth Shoulders", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Mooncloth Tailoring — crafter-only (BoP); part of 3-piece set" } },
              { "id": 27775, "name": "Hallowed Pauldrons", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Shadow Labyrinth", "boss": "Grandmaster Vorpil" } }
            ],
            "back": [
              { "id": 31329, "name": "Lifegiving Cloak", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "world-drop", "detail": "BoE world drop" } },
              { "id": 27946, "name": "Avian Cloak of Feathers", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Sethekk Halls", "boss": "Talon King Ikiss", "detail": "Heroic only" } }
            ],
            "chest": [
              { "id": 21875, "name": "Primal Mooncloth Robe", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Mooncloth Tailoring — crafter-only (BoP); part of 3-piece set" } },
              { "id": 28230, "name": "Hallowed Garments", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Shadow Labyrinth", "boss": "Murmur" } }
            ],
            "wrist": [
              { "id": 29249, "name": "Bands of the Benevolent", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sethekk Halls", "boss": "Talon King Ikiss", "detail": "Heroic only" } }
            ],
            "hands": [
              { "id": 27536, "name": "Hallowed Handwraps", "quality": "rare", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "The Shattered Halls", "boss": "Warchief Kargath Bladefist" } },
              { "id": 28304, "name": "Prismatic Mittens of Mending", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "The Botanica", "boss": "Commander Sarannis" } }
            ],
            "waist": [
              { "id": 21873, "name": "Primal Mooncloth Belt", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Mooncloth Tailoring — crafter-only (BoP); part of 3-piece set" } }
            ],
            "legs": [
              { "id": 30543, "name": "Pontifex Kilt", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "The Steamvault", "boss": "Warlord Kalithresh", "detail": "Heroic only" } },
              { "id": 31343, "name": "Kamaei's Cerulean Skirt", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "world-drop", "detail": "BoE world drop" } }
            ],
            "feet": [
              { "id": 29251, "name": "Boots of the Pious", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "The Mechanar", "boss": "Pathaleon the Calculator", "detail": "Heroic only" } }
            ],
            "finger": [
              { "id": 27780, "name": "Ring of Fabled Hope", "quality": "rare", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "The Underbog", "boss": "The Black Stalker" } },
              { "id": 29373, "name": "Band of Halos", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "badge", "detail": "25 Badges of Justice — G'eras, Shattrath" } }
            ],
            "trinket": [
              { "id": 29376, "name": "Essence of the Martyr", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "badge", "detail": "41 Badges of Justice — G'eras, Shattrath" } },
              { "id": 19288, "name": "Darkmoon Card: Blue Dragon", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "quest", "detail": "Darkmoon Faire — Beasts Deck turn-in" } }
            ],
            "mainhand": [
              { "id": 32451, "name": "Gladiator's Salvation", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "pvp", "detail": "Arena Season 1" } },
              { "id": 29353, "name": "Shockwave Truncheon", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "The Shattered Halls", "boss": "Warchief Kargath Bladefist", "detail": "Heroic only" } }
            ],
            "offhand": [
              { "id": 29170, "name": "Windcaller's Orb", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "reputation", "detail": "Cenarion Expedition — Exalted" } },
              { "id": 29274, "name": "Tears of Heaven", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "badge", "detail": "25 Badges of Justice — G'eras, Shattrath" } }
            ],
            "ranged": [
              { "id": 27885, "name": "Soul-Wand of the Aldor", "quality": "rare", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Shadow Labyrinth", "boss": "Ambassador Hellmaw" } }
            ]
          }
        },
        {
          "id": "p1",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 29049, "name": "Light-Collar of the Incarnate", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar", "detail": "Tier 4 helm token" } },
              { "id": 24264, "name": "Whitemend Hood", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "crafted", "detail": "Tailoring 375" } }
            ],
            "neck": [
              { "id": 30726, "name": "Archaic Charm of Presence", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "zone": "Shadowmoon Valley", "boss": "Doomwalker", "detail": "World boss" } },
              { "id": 28609, "name": "Emberspur Talisman", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Nightbane" } }
            ],
            "shoulder": [
              { "id": 21874, "name": "Primal Mooncloth Shoulders", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Mooncloth Tailoring — crafter-only (BoP); keep the 3-piece set" } },
              { "id": 29054, "name": "Light-Mantle of the Incarnate", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Gruul's Lair", "boss": "High King Maulgar", "detail": "Tier 4 shoulder token" } }
            ],
            "back": [
              { "id": 28765, "name": "Stainless Cloak of the Pure Hearted", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar" } },
              { "id": 31329, "name": "Lifegiving Cloak", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "world-drop", "detail": "BoE world drop" } }
            ],
            "chest": [
              { "id": 21875, "name": "Primal Mooncloth Robe", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Mooncloth Tailoring — crafter-only (BoP); keep the 3-piece set" } },
              { "id": 29050, "name": "Robes of the Incarnate", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Magtheridon's Lair", "boss": "Magtheridon", "detail": "Tier 4 chest token" } }
            ],
            "wrist": [
              { "id": 29249, "name": "Bands of the Benevolent", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sethekk Halls", "boss": "Talon King Ikiss", "detail": "Heroic only" } },
              { "id": 28511, "name": "Bands of Indwelling", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Maiden of Virtue" } }
            ],
            "hands": [
              { "id": 28508, "name": "Gloves of Saintly Blessings", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Attumen the Huntsman" } },
              { "id": 29055, "name": "Handwraps of the Incarnate", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "The Curator", "detail": "Tier 4 glove token" } }
            ],
            "waist": [
              { "id": 21873, "name": "Primal Mooncloth Belt", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Mooncloth Tailoring — crafter-only (BoP); keep the 3-piece set" } },
              { "id": 28652, "name": "Cincture of Will", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Terestian Illhoof" } }
            ],
            "legs": [
              { "id": 30727, "name": "Gilded Trousers of Benediction", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "zone": "Shadowmoon Valley", "boss": "Doomwalker", "detail": "World boss" }, "note": "Hard to obtain — alternates are nearly as good" },
              { "id": 28742, "name": "Pantaloons of Repentance", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Netherspite" } },
              { "id": 30543, "name": "Pontifex Kilt", "quality": "epic", "rank": 3, "faction": "both", "source": { "type": "drop", "instance": "The Steamvault", "boss": "Warlord Kalithresh", "detail": "Heroic only" } }
            ],
            "feet": [
              { "id": 28663, "name": "Boots of the Incorrupt", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Shade of Aran" } },
              { "id": 29251, "name": "Boots of the Pious", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "The Mechanar", "boss": "Pathaleon the Calculator", "detail": "Heroic only" } }
            ],
            "finger": [
              { "id": 28763, "name": "Jade Ring of the Everliving", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar" } },
              { "id": 29290, "name": "Violet Signet of the Grand Restorer", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "reputation", "detail": "The Violet Eye — Exalted" } },
              { "id": 28790, "name": "Naaru Lightwarden's Band", "quality": "epic", "rank": 3, "faction": "both", "source": { "type": "drop", "instance": "Magtheridon's Lair", "boss": "Magtheridon" } }
            ],
            "trinket": [
              { "id": 29376, "name": "Essence of the Martyr", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "badge", "detail": "41 Badges of Justice — G'eras, Shattrath" } },
              { "id": 28823, "name": "Eye of Gruul", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Gruul's Lair", "boss": "Gruul the Dragonkiller" } },
              { "id": 28590, "name": "Ribbon of Sacrifice", "quality": "epic", "rank": 3, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Opera Event" } }
            ],
            "mainhand": [
              { "id": 28771, "name": "Light's Justice", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar" } },
              { "id": 28522, "name": "Shard of the Virtuous", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Maiden of Virtue" } }
            ],
            "offhand": [
              { "id": 28728, "name": "Aran's Soothing Sapphire", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Shade of Aran" } },
              { "id": 29170, "name": "Windcaller's Orb", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "reputation", "detail": "Cenarion Expedition — Exalted" } }
            ],
            "ranged": [
              { "id": 28588, "name": "Blue Diamond Witchwand", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Opera Event", "detail": "Wizard of Oz encounter" } },
              { "id": 27885, "name": "Soul-Wand of the Aldor", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Shadow Labyrinth", "boss": "Ambassador Hellmaw" } }
            ]
          }
        },
        {
          "id": "p5",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 34339, "name": "Cowl of Light's Purity", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden" } }
            ],
            "neck": [
              { "id": 33281, "name": "Brooch of Nature's Mercy", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Zul'Aman", "boss": "Akil'zon" } }
            ],
            "shoulder": [
              { "id": 34202, "name": "Shawl of Wonderment", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Eredar Twins" } }
            ],
            "back": [
              { "id": 32524, "name": "Shroud of the Highborne", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Black Temple", "boss": "Illidan Stormrage" } }
            ],
            "chest": [
              { "id": 34233, "name": "Robes of Faltered Light", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "M'uru" } },
              { "id": 34365, "name": "Robe of Eternal Light", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "crafted", "detail": "Tailoring 375 — pattern drops in Sunwell Plateau" } }
            ],
            "wrist": [
              { "id": 34435, "name": "Cuffs of Absolution", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kalecgos", "detail": "Bracers of the Forgotten Conqueror token" } }
            ],
            "hands": [
              { "id": 34342, "name": "Handguards of the Dawn", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden" } },
              { "id": 34367, "name": "Hands of Eternal Light", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "crafted", "detail": "Tailoring 375 — pattern drops in Sunwell Plateau" } }
            ],
            "waist": [
              { "id": 34527, "name": "Belt of Absolution", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Brutallus", "detail": "Belt of the Forgotten Conqueror token" } }
            ],
            "legs": [
              { "id": 34170, "name": "Pantaloons of Calming Strife", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kalecgos" } }
            ],
            "feet": [
              { "id": 34562, "name": "Boots of Absolution", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Felmyst", "detail": "Boots of the Forgotten Conqueror token" } }
            ],
            "finger": [
              { "id": 34363, "name": "Ring of Flowing Life", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Jewelcrafting 375 — crafter-only (BoP)" } },
              { "id": 32528, "name": "Blessed Band of Karabor", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Black Temple", "detail": "Trash drop" } },
              { "id": 34166, "name": "Band of Lucent Beams", "quality": "epic", "rank": 3, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kalecgos" } }
            ],
            "trinket": [
              { "id": 29376, "name": "Essence of the Martyr", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "badge", "detail": "41 Badges of Justice — G'eras, Shattrath" } },
              { "id": 32496, "name": "Memento of Tyrande", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Black Temple", "boss": "Illidan Stormrage" } },
              { "id": 19288, "name": "Darkmoon Card: Blue Dragon", "quality": "epic", "rank": 3, "faction": "both", "source": { "type": "quest", "detail": "Darkmoon Faire — Beasts Deck turn-in" } }
            ],
            "mainhand": [
              { "id": 34335, "name": "Hammer of Sanctification", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden" } }
            ],
            "offhand": [
              { "id": 34206, "name": "Book of Highborne Hymns", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Eredar Twins" } }
            ],
            "ranged": [
              { "id": 34348, "name": "Wand of Cleansing Light", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sunwell Plateau", "detail": "Trash drop" } }
            ]
          }
        }
      ]
    },
    {
      "id": "discipline",
      "name": "Discipline",
      "role": "healer",
      "icon": "spell_holy_powerwordshield",
      "statPriority": "+Healing > Intellect > mp5 > Spirit > Spell Crit",
      "notes": "Discipline in TBC is mostly a PvP and support spec; a PvE Disc priest (Power Infusion + Improved Divine Spirit) heals in exactly the same +Healing gear as Holy, so this list mirrors the Holy list. Improved Divine Spirit adds spell damage/healing to the raid, and Power Infusion is prized by a geared caster. All priests (both factions) know Fear Ward in TBC — the old Dwarf-only restriction is gone.",
      "enchants": {
        "head": "Glyph of Renewal (+35 healing / +7 mp5) — Honor Hold or Thrallmar Revered",
        "shoulder": "Greater Inscription of Faith (Aldor Exalted) or Greater Inscription of the Oracle (Scryers Exalted)",
        "chest": "Restore Mana Prime (+6 mp5)",
        "wrist": "Superior Healing (+30 healing)",
        "hands": "Major Healing (+35 healing)",
        "legs": "Golden Spellthread (+66 healing / +20 stamina) — Aldor",
        "feet": "Vitality (+4 hp5 / +4 mp5)",
        "finger": "Healing Power (+20 healing each) — Enchanters only",
        "mainhand": "Major Healing (+81 healing)"
      },
      "brackets": [
        {
          "id": "preraid",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 24264, "name": "Whitemend Hood", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Tailoring 375 — Primal Mooncloth + Primal Nether" } },
              { "id": 28413, "name": "Hallowed Crown", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "The Arcatraz", "boss": "Harbinger Skyriss" } }
            ],
            "neck": [
              { "id": 29374, "name": "Necklace of Eternal Hope", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "badge", "detail": "25 Badges of Justice — G'eras, Shattrath" } }
            ],
            "shoulder": [
              { "id": 21874, "name": "Primal Mooncloth Shoulders", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Mooncloth Tailoring — crafter-only (BoP); part of 3-piece set" } },
              { "id": 27775, "name": "Hallowed Pauldrons", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Shadow Labyrinth", "boss": "Grandmaster Vorpil" } }
            ],
            "back": [
              { "id": 31329, "name": "Lifegiving Cloak", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "world-drop", "detail": "BoE world drop" } },
              { "id": 27946, "name": "Avian Cloak of Feathers", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Sethekk Halls", "boss": "Talon King Ikiss", "detail": "Heroic only" } }
            ],
            "chest": [
              { "id": 21875, "name": "Primal Mooncloth Robe", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Mooncloth Tailoring — crafter-only (BoP); part of 3-piece set" } },
              { "id": 28230, "name": "Hallowed Garments", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Shadow Labyrinth", "boss": "Murmur" } }
            ],
            "wrist": [
              { "id": 29249, "name": "Bands of the Benevolent", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sethekk Halls", "boss": "Talon King Ikiss", "detail": "Heroic only" } }
            ],
            "hands": [
              { "id": 27536, "name": "Hallowed Handwraps", "quality": "rare", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "The Shattered Halls", "boss": "Warchief Kargath Bladefist" } },
              { "id": 28304, "name": "Prismatic Mittens of Mending", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "The Botanica", "boss": "Commander Sarannis" } }
            ],
            "waist": [
              { "id": 21873, "name": "Primal Mooncloth Belt", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Mooncloth Tailoring — crafter-only (BoP); part of 3-piece set" } }
            ],
            "legs": [
              { "id": 30543, "name": "Pontifex Kilt", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "The Steamvault", "boss": "Warlord Kalithresh", "detail": "Heroic only" } },
              { "id": 31343, "name": "Kamaei's Cerulean Skirt", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "world-drop", "detail": "BoE world drop" } }
            ],
            "feet": [
              { "id": 29251, "name": "Boots of the Pious", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "The Mechanar", "boss": "Pathaleon the Calculator", "detail": "Heroic only" } }
            ],
            "finger": [
              { "id": 27780, "name": "Ring of Fabled Hope", "quality": "rare", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "The Underbog", "boss": "The Black Stalker" } },
              { "id": 29373, "name": "Band of Halos", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "badge", "detail": "25 Badges of Justice — G'eras, Shattrath" } }
            ],
            "trinket": [
              { "id": 29376, "name": "Essence of the Martyr", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "badge", "detail": "41 Badges of Justice — G'eras, Shattrath" } },
              { "id": 19288, "name": "Darkmoon Card: Blue Dragon", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "quest", "detail": "Darkmoon Faire — Beasts Deck turn-in" } }
            ],
            "mainhand": [
              { "id": 32451, "name": "Gladiator's Salvation", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "pvp", "detail": "Arena Season 1" } },
              { "id": 29353, "name": "Shockwave Truncheon", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "The Shattered Halls", "boss": "Warchief Kargath Bladefist", "detail": "Heroic only" } }
            ],
            "offhand": [
              { "id": 29170, "name": "Windcaller's Orb", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "reputation", "detail": "Cenarion Expedition — Exalted" } },
              { "id": 29274, "name": "Tears of Heaven", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "badge", "detail": "25 Badges of Justice — G'eras, Shattrath" } }
            ],
            "ranged": [
              { "id": 27885, "name": "Soul-Wand of the Aldor", "quality": "rare", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Shadow Labyrinth", "boss": "Ambassador Hellmaw" } }
            ]
          }
        },
        {
          "id": "p1",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 29049, "name": "Light-Collar of the Incarnate", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar", "detail": "Tier 4 helm token" } },
              { "id": 24264, "name": "Whitemend Hood", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "crafted", "detail": "Tailoring 375" } }
            ],
            "neck": [
              { "id": 30726, "name": "Archaic Charm of Presence", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "zone": "Shadowmoon Valley", "boss": "Doomwalker", "detail": "World boss" } },
              { "id": 28609, "name": "Emberspur Talisman", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Nightbane" } }
            ],
            "shoulder": [
              { "id": 21874, "name": "Primal Mooncloth Shoulders", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Mooncloth Tailoring — crafter-only (BoP); keep the 3-piece set" } },
              { "id": 29054, "name": "Light-Mantle of the Incarnate", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Gruul's Lair", "boss": "High King Maulgar", "detail": "Tier 4 shoulder token" } }
            ],
            "back": [
              { "id": 28765, "name": "Stainless Cloak of the Pure Hearted", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar" } },
              { "id": 31329, "name": "Lifegiving Cloak", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "world-drop", "detail": "BoE world drop" } }
            ],
            "chest": [
              { "id": 21875, "name": "Primal Mooncloth Robe", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Mooncloth Tailoring — crafter-only (BoP); keep the 3-piece set" } },
              { "id": 29050, "name": "Robes of the Incarnate", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Magtheridon's Lair", "boss": "Magtheridon", "detail": "Tier 4 chest token" } }
            ],
            "wrist": [
              { "id": 29249, "name": "Bands of the Benevolent", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Sethekk Halls", "boss": "Talon King Ikiss", "detail": "Heroic only" } },
              { "id": 28511, "name": "Bands of Indwelling", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Maiden of Virtue" } }
            ],
            "hands": [
              { "id": 28508, "name": "Gloves of Saintly Blessings", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Attumen the Huntsman" } },
              { "id": 29055, "name": "Handwraps of the Incarnate", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "The Curator", "detail": "Tier 4 glove token" } }
            ],
            "waist": [
              { "id": 21873, "name": "Primal Mooncloth Belt", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "crafted", "detail": "Mooncloth Tailoring — crafter-only (BoP); keep the 3-piece set" } },
              { "id": 28652, "name": "Cincture of Will", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Terestian Illhoof" } }
            ],
            "legs": [
              { "id": 30727, "name": "Gilded Trousers of Benediction", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "zone": "Shadowmoon Valley", "boss": "Doomwalker", "detail": "World boss" } },
              { "id": 28742, "name": "Pantaloons of Repentance", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Netherspite" } }
            ],
            "feet": [
              { "id": 28663, "name": "Boots of the Incorrupt", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Shade of Aran" } },
              { "id": 29251, "name": "Boots of the Pious", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "The Mechanar", "boss": "Pathaleon the Calculator", "detail": "Heroic only" } }
            ],
            "finger": [
              { "id": 28763, "name": "Jade Ring of the Everliving", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar" } },
              { "id": 29290, "name": "Violet Signet of the Grand Restorer", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "reputation", "detail": "The Violet Eye — Exalted" } },
              { "id": 28790, "name": "Naaru Lightwarden's Band", "quality": "epic", "rank": 3, "faction": "both", "source": { "type": "drop", "instance": "Magtheridon's Lair", "boss": "Magtheridon" } }
            ],
            "trinket": [
              { "id": 29376, "name": "Essence of the Martyr", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "badge", "detail": "41 Badges of Justice — G'eras, Shattrath" } },
              { "id": 28823, "name": "Eye of Gruul", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Gruul's Lair", "boss": "Gruul the Dragonkiller" } },
              { "id": 28590, "name": "Ribbon of Sacrifice", "quality": "epic", "rank": 3, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Opera Event" } }
            ],
            "mainhand": [
              { "id": 28771, "name": "Light's Justice", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar" } },
              { "id": 28522, "name": "Shard of the Virtuous", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Maiden of Virtue" } }
            ],
            "offhand": [
              { "id": 28728, "name": "Aran's Soothing Sapphire", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Shade of Aran" } },
              { "id": 29170, "name": "Windcaller's Orb", "quality": "epic", "rank": 2, "faction": "both", "source": { "type": "reputation", "detail": "Cenarion Expedition — Exalted" } }
            ],
            "ranged": [
              { "id": 28588, "name": "Blue Diamond Witchwand", "quality": "epic", "rank": 1, "faction": "both", "source": { "type": "drop", "instance": "Karazhan", "boss": "Opera Event", "detail": "Wizard of Oz encounter" } },
              { "id": 27885, "name": "Soul-Wand of the Aldor", "quality": "rare", "rank": 2, "faction": "both", "source": { "type": "drop", "instance": "Shadow Labyrinth", "boss": "Ambassador Hellmaw" } }
            ]
          }
        }
      ]
    }
  ]
}
);
