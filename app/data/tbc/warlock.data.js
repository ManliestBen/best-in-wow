/* BiS Companion data — TBC Classic Warlock (Destruction, Affliction) BiS lists. */
WOWDATA.register(
{
  "kind": "bis",
  "expansion": "tbc",
  "class": "warlock",
  "className": "Warlock",
  "classColor": "#9482C9",
  "specs": [
    {
      "id": "destruction",
      "name": "Destruction",
      "role": "dps",
      "icon": "spell_shadow_rainoffire",
      "statPriority": "Spell Hit (to 202 rating / 16%) > Spell Damage (Shadow or Fire per build) > Spell Crit > Spell Haste > Intellect > Stamina",
      "notes": "Raid-boss spell hit cap is 16% (202 rating; ~189 with a Draenei in the party). Suppression only affects Affliction spells, so Destruction must gear the full cap. Two builds share this list: Shadow Bolt destro itemizes like Affliction (Frozen Shadoweave Boots, Orb of the Soul-Eater, 4pc Voidheart), while fire (Incinerate) builds run the Spellfire 3pc (+7% of Intellect as spell damage), Flametongue Seal and fire alternates noted below. Life Tap turns stamina into mana that scales with spell damage, so stamina is real throughput on long fights. In Sunwell the Malefic Raiment 4pc (+6% Shadow Bolt and Incinerate damage) is the strongest set bonus in the game — the SWP bracer/belt/boot tokens count toward it.",
      "enchants": {
        "head": "Glyph of Power (+22 spell damage, +14 spell hit) — The Sha'tar, Revered",
        "shoulder": "Greater Inscription of Discipline (Aldor Exalted) or Greater Inscription of the Orb (Scryers Exalted)",
        "back": "Enchant Cloak — Subtlety (threat reduction)",
        "chest": "Enchant Chest — Exceptional Stats (+6 all stats)",
        "wrist": "Enchant Bracer — Spellpower (+15 spell damage)",
        "hands": "Enchant Gloves — Major Spellpower (+20); Spell Strike (+15 spell hit) while under the cap",
        "legs": "Runic Spellthread (+35 spell damage, +20 stamina); Mystic Spellthread on a budget",
        "feet": "Enchant Boots — Boar's Speed (mobility) or Fortitude",
        "finger": "Enchant Ring — Spellpower (+12 spell damage, Enchanters only)",
        "mainhand": "Enchant Weapon — Soulfrost (Shadow Bolt builds) or Sunfire (fire builds); Major Spellpower (+40) as a cheaper fallback"
      },
      "brackets": [
        {
          "id": "preraid",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 24266, "name": "Spellstrike Hood", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring 375 — BoE, buyable from the AH" }, "note": "2pc Spellstrike with the Pants" },
              { "id": 31104, "name": "Evoker's Helmet of Second Sight", "quality": "rare", "rank": 2, "source": { "type": "quest", "quest": "Teron Gorefiend, I am...", "zone": "Shadowmoon Valley" } },
              { "id": 28278, "name": "Incanter's Cowl", "quality": "rare", "rank": 3, "source": { "type": "drop", "instance": "The Mechanar", "boss": "Pathaleon the Calculator" } }
            ],
            "neck": [
              { "id": 28134, "name": "Brooch of Heightened Potential", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Shadow Labyrinth", "boss": "Blackheart the Inciter" } },
              { "id": 27758, "name": "Hydra-fang Necklace", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "The Underbog", "boss": "Ghaz'an" }, "note": "Spell hit" }
            ],
            "shoulder": [
              { "id": 30925, "name": "Spaulders of the Torn-heart", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "The Cipher of Damnation", "zone": "Shadowmoon Valley" }, "note": "Fire builds; Shadow Bolt builds craft Frozen Shadoweave" },
              { "id": 21869, "name": "Frozen Shadoweave Shoulders", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Shadoweave Tailoring — BoP" }, "note": "Shadow Bolt builds" },
              { "id": 27994, "name": "Mantle of Three Terrors", "quality": "rare", "rank": 3, "source": { "type": "drop", "instance": "The Black Morass", "boss": "Chrono Lord Deja" } }
            ],
            "back": [
              { "id": 27981, "name": "Sethekk Oracle Cloak", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Sethekk Halls", "boss": "Talon King Ikiss" }, "note": "Best hit cloak" },
              { "id": 31140, "name": "Cloak of Entropy", "quality": "rare", "rank": 2, "source": { "type": "world-drop", "detail": "BoE — cheap AH stopgap" } }
            ],
            "chest": [
              { "id": 21848, "name": "Spellfire Robe", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Spellfire Tailoring — BoP" }, "note": "Fire builds (Spellfire 3pc)" },
              { "id": 21871, "name": "Frozen Shadoweave Robe", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Shadoweave Tailoring — BoP" }, "note": "Shadow Bolt builds" },
              { "id": 31297, "name": "Robe of the Crimson Order", "quality": "rare", "rank": 3, "source": { "type": "world-drop", "detail": "BoE — heavy spell hit, non-tailor pick" } }
            ],
            "wrist": [
              { "id": 24250, "name": "Bracers of Havok", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring 350 — BoE, buyable from the AH" } },
              { "id": 27462, "name": "Crimson Bracers of Gloom", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Hellfire Ramparts", "boss": "Omor the Unscarred", "detail": "Heroic only" } }
            ],
            "hands": [
              { "id": 21847, "name": "Spellfire Gloves", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Spellfire Tailoring — BoP" }, "note": "Fire builds (Spellfire 3pc)" },
              { "id": 31149, "name": "Gloves of Pandemonium", "quality": "rare", "rank": 2, "source": { "type": "world-drop", "detail": "BoE" }, "note": "Best non-Spellfire option, spell hit" }
            ],
            "waist": [
              { "id": 21846, "name": "Spellfire Belt", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Spellfire Tailoring — BoP" }, "note": "Fire builds (Spellfire 3pc)" },
              { "id": 24256, "name": "Girdle of Ruination", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Tailoring 365 — BoE" }, "note": "Shadow Bolt builds" },
              { "id": 29241, "name": "Belt of Depravity", "quality": "epic", "rank": 3, "source": { "type": "drop", "instance": "The Arcatraz", "boss": "Harbinger Skyriss", "detail": "Heroic only" }, "note": "Best if you still need hit" }
            ],
            "legs": [
              { "id": 24262, "name": "Spellstrike Pants", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring 375 — BoE, pattern drops from Murmur in Shadow Labyrinth" }, "note": "Highest-priority craft — lasts into T5" },
              { "id": 30531, "name": "Breeches of the Occultist", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "The Black Morass", "boss": "Aeonus", "detail": "Heroic only" } }
            ],
            "feet": [
              { "id": 27821, "name": "Extravagant Boots of Malice", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Mana-Tombs", "boss": "Tavarok", "detail": "Heroic only" }, "note": "Fire builds / hit" },
              { "id": 21870, "name": "Frozen Shadoweave Boots", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Shadoweave Tailoring — BoP" }, "note": "Shadow Bolt builds — lasts deep into raids" },
              { "id": 28406, "name": "Sigil-Laced Boots", "quality": "rare", "rank": 3, "source": { "type": "drop", "instance": "The Arcatraz", "boss": "Harbinger Skyriss" } }
            ],
            "finger": [
              { "id": 29172, "name": "Ashyen's Gift", "quality": "epic", "rank": 1, "source": { "type": "reputation", "detail": "Cenarion Expedition — Exalted (Fedryen Swiftspear, Zangarmarsh)" } },
              { "id": 28227, "name": "Sparking Arcanite Ring", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Old Hillsbrad Foothills", "boss": "Epoch Hunter", "detail": "Heroic only" } },
              { "id": 29126, "name": "Seer's Signet", "quality": "epic", "rank": 3, "source": { "type": "reputation", "detail": "The Scryers — Exalted (Scryer-only)" } }
            ],
            "trinket": [
              { "id": 29370, "name": "Icon of the Silver Crescent", "quality": "epic", "rank": 1, "source": { "type": "badge", "detail": "G'eras, Shattrath — 41 Badges of Justice" } },
              { "id": 27683, "name": "Quagmirran's Eye", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "The Slave Pens", "boss": "Quagmirran", "detail": "Heroic only" } },
              { "id": 29132, "name": "Scryer's Bloodgem", "quality": "rare", "rank": 3, "source": { "type": "reputation", "detail": "The Scryers — Revered (Scryer-only)" }, "note": "On-use hit crutch" }
            ],
            "mainhand": [
              { "id": 31336, "name": "Blade of Wizardry", "quality": "epic", "rank": 1, "source": { "type": "world-drop", "detail": "BoE — very expensive" } },
              { "id": 29153, "name": "Blade of the Archmage", "quality": "epic", "rank": 2, "faction": "alliance", "source": { "type": "reputation", "detail": "Honor Hold — Exalted (Logistics Officer Ulrike)" }, "note": "Free and nearly as good" },
              { "id": 29155, "name": "Stormcaller", "quality": "epic", "rank": 2, "faction": "horde", "source": { "type": "reputation", "detail": "Thrallmar — Exalted (Quartermaster Urgronn)" }, "note": "Free and nearly as good" }
            ],
            "offhand": [
              { "id": 29270, "name": "Flametongue Seal", "quality": "epic", "rank": 1, "source": { "type": "badge", "detail": "G'eras, Shattrath — 25 Badges of Justice" }, "note": "Fire builds" },
              { "id": 29273, "name": "Khadgar's Knapsack", "quality": "epic", "rank": 2, "source": { "type": "badge", "detail": "G'eras, Shattrath — 25 Badges of Justice" }, "note": "Generic spell damage — works for every school" },
              { "id": 29272, "name": "Orb of the Soul-Eater", "quality": "epic", "rank": 3, "source": { "type": "badge", "detail": "G'eras, Shattrath — 25 Badges of Justice" }, "note": "Shadow Bolt builds" }
            ],
            "ranged": [
              { "id": 22128, "name": "Master Firestone", "quality": "common", "rank": 1, "source": { "type": "crafted", "detail": "Conjured by the warlock (Create Firestone: Master)" }, "note": "Relic — fills the wand slot and enchants your weapon with fire; fire builds" },
              { "id": 29350, "name": "The Black Stalk", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "The Underbog", "boss": "The Black Stalker", "detail": "Heroic only" }, "note": "Shadow Bolt builds" },
              { "id": 28386, "name": "Nether Core's Control Rod", "quality": "rare", "rank": 3, "source": { "type": "drop", "instance": "The Arcatraz", "boss": "Dalliah the Doomsayer" }, "note": "Spell hit" }
            ]
          }
        },
        {
          "id": "p1",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 28963, "name": "Voidheart Crown", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar", "detail": "Token: Helm of the Fallen Hero" } },
              { "id": 24266, "name": "Spellstrike Hood", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Tailoring 375 — BoE" }, "note": "Holds if keeping 2pc Spellstrike" }
            ],
            "neck": [
              { "id": 28530, "name": "Brooch of Unquenchable Fury", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Moroes" } },
              { "id": 28762, "name": "Adornment of Stolen Souls", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar" }, "note": "More crit, no hit — take when capped" }
            ],
            "shoulder": [
              { "id": 28967, "name": "Voidheart Mantle", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Gruul's Lair", "boss": "High King Maulgar", "detail": "Token: Pauldrons of the Fallen Hero" } }
            ],
            "back": [
              { "id": 28766, "name": "Ruby Drape of the Mysticant", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar" } },
              { "id": 30735, "name": "Ancient Spellcloak of the Highborne", "quality": "epic", "rank": 2, "source": { "type": "drop", "zone": "Hellfire Peninsula", "boss": "Doom Lord Kazzak", "detail": "World boss" }, "note": "More damage, no hit" }
            ],
            "chest": [
              { "id": 28964, "name": "Voidheart Robe", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Magtheridon's Lair", "boss": "Magtheridon", "detail": "Token: Chestguard of the Fallen Hero" }, "note": "Shadow Bolt builds (4pc Voidheart)" },
              { "id": 21848, "name": "Spellfire Robe", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Spellfire Tailoring — BoP" }, "note": "Fire builds keep the Spellfire 3pc" }
            ],
            "wrist": [
              { "id": 24250, "name": "Bracers of Havok", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring 350 — BoE, buyable from the AH" } },
              { "id": 28515, "name": "Bands of Nefarious Deeds", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan", "boss": "Maiden of Virtue" } }
            ],
            "hands": [
              { "id": 28968, "name": "Voidheart Gloves", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "The Curator", "detail": "Token: Gloves of the Fallen Hero" }, "note": "Shadow Bolt builds (4pc Voidheart)" },
              { "id": 21847, "name": "Spellfire Gloves", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Spellfire Tailoring — BoP" }, "note": "Fire builds keep the Spellfire 3pc" }
            ],
            "waist": [
              { "id": 24256, "name": "Girdle of Ruination", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring 365 — BoE" } },
              { "id": 21846, "name": "Spellfire Belt", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Spellfire Tailoring — BoP" }, "note": "Fire builds keep the Spellfire 3pc" },
              { "id": 28799, "name": "Belt of Divine Inspiration", "quality": "epic", "rank": 3, "source": { "type": "drop", "instance": "Gruul's Lair", "boss": "High King Maulgar" } }
            ],
            "legs": [
              { "id": 24262, "name": "Spellstrike Pants", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring 375 — BoE, pattern drops from Murmur in Shadow Labyrinth" }, "note": "Warlocks skip T4 legs for these" },
              { "id": 30734, "name": "Leggings of the Seventh Circle", "quality": "epic", "rank": 2, "source": { "type": "drop", "zone": "Hellfire Peninsula", "boss": "Doom Lord Kazzak", "detail": "World boss" } }
            ],
            "feet": [
              { "id": 21870, "name": "Frozen Shadoweave Boots", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Shadoweave Tailoring — BoP" }, "note": "Shadow builds — best boots all phase" },
              { "id": 28517, "name": "Boots of Foretelling", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan", "boss": "Maiden of Virtue" }, "note": "Fire builds / non-tailors" }
            ],
            "finger": [
              { "id": 28793, "name": "Band of Crimson Fury", "quality": "epic", "rank": 1, "source": { "type": "quest", "quest": "The Fall of Magtheridon", "detail": "Turn in Magtheridon's Head" } },
              { "id": 29172, "name": "Ashyen's Gift", "quality": "epic", "rank": 2, "source": { "type": "reputation", "detail": "Cenarion Expedition — Exalted" } },
              { "id": 29287, "name": "Violet Signet of the Archmage", "quality": "epic", "rank": 3, "source": { "type": "reputation", "detail": "The Violet Eye — Exalted" } }
            ],
            "trinket": [
              { "id": 27683, "name": "Quagmirran's Eye", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Slave Pens", "boss": "Quagmirran", "detail": "Heroic only" } },
              { "id": 29370, "name": "Icon of the Silver Crescent", "quality": "epic", "rank": 2, "source": { "type": "badge", "detail": "G'eras, Shattrath — 41 Badges of Justice" } },
              { "id": 29132, "name": "Scryer's Bloodgem", "quality": "rare", "rank": 3, "source": { "type": "reputation", "detail": "The Scryers — Revered (Scryer-only)" } }
            ],
            "mainhand": [
              { "id": 30723, "name": "Talon of the Tempest", "quality": "epic", "rank": 1, "source": { "type": "drop", "zone": "Shadowmoon Valley", "boss": "Doomwalker", "detail": "World boss" } },
              { "id": 28770, "name": "Nathrezim Mindblade", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar" } },
              { "id": 22630, "name": "Atiesh, Greatstaff of the Guardian", "quality": "legendary", "rank": 3, "source": { "type": "quest", "detail": "Classic Naxxramas legacy" }, "note": "Still competitive; +33 party spell damage aura" }
            ],
            "offhand": [
              { "id": 29272, "name": "Orb of the Soul-Eater", "quality": "epic", "rank": 1, "source": { "type": "badge", "detail": "G'eras, Shattrath — 25 Badges of Justice" }, "note": "Shadow Bolt builds" },
              { "id": 29270, "name": "Flametongue Seal", "quality": "epic", "rank": 2, "source": { "type": "badge", "detail": "G'eras, Shattrath — 25 Badges of Justice" }, "note": "Fire builds" }
            ],
            "ranged": [
              { "id": 28673, "name": "Tirisfal Wand of Ascendancy", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Shade of Aran" } },
              { "id": 28783, "name": "Eredar Wand of Obliteration", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Magtheridon's Lair", "boss": "Magtheridon" } }
            ]
          }
        },
        {
          "id": "p5",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 34340, "name": "Dark Conjuror's Collar", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden" } },
              { "id": 31051, "name": "Hood of the Malefic", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Black Temple", "boss": "Illidan Stormrage", "detail": "T6 token: Crown of the Forgotten Conqueror" }, "note": "Alternative 4th Malefic piece" }
            ],
            "neck": [
              { "id": 34359, "name": "Pendant of Sunfire", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Requires Jewelcrafting 350 to wear — BoP" }, "note": "Jewelcrafters only" },
              { "id": 34204, "name": "Amulet of Unfettered Magics", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Eredar Twins" }, "note": "BiS for non-Jewelcrafters" }
            ],
            "shoulder": [
              { "id": 34210, "name": "Amice of the Convoker", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Eredar Twins" } },
              { "id": 31054, "name": "Mantle of the Malefic", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Black Temple", "boss": "Mother Shahraz", "detail": "T6 token: Pauldrons of the Forgotten Conqueror" }, "note": "Common 4th piece for Malefic 4pc (+6% Shadow Bolt/Incinerate)" }
            ],
            "back": [
              { "id": 34242, "name": "Tattered Cape of Antonidas", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden" } },
              { "id": 32590, "name": "Nethervoid Cloak", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Black Temple", "detail": "Trash drop" }, "note": "Spell hit" }
            ],
            "chest": [
              { "id": 34364, "name": "Sunfire Robe", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Requires Tailoring 350 to wear — pattern from Sunwell trash, crafted with Sunmotes" }, "note": "Tailors only" },
              { "id": 34399, "name": "Robes of Ghostly Hatred", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau" }, "note": "Non-tailor pick" }
            ],
            "wrist": [
              { "id": 34436, "name": "Bracers of the Malefic", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kalecgos", "detail": "Token: Bracers of the Forgotten Conqueror — redeemed at Theremis, Isle of Quel'Danas" }, "note": "Counts toward Malefic set bonuses" },
              { "id": 32586, "name": "Bracers of Nimble Thought", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Tailoring — BoE" } }
            ],
            "hands": [
              { "id": 34344, "name": "Handguards of Defiled Worlds", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden" } },
              { "id": 34366, "name": "Sunfire Handwraps", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Tailoring — BoE, crafted with Sunmotes" } }
            ],
            "waist": [
              { "id": 34541, "name": "Belt of the Malefic", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Brutallus", "detail": "Token: Belt of the Forgotten Conqueror — redeemed at Theremis, Isle of Quel'Danas" }, "note": "Counts toward Malefic set bonuses" }
            ],
            "legs": [
              { "id": 34181, "name": "Leggings of Calamity", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Brutallus" } },
              { "id": 34386, "name": "Pantaloons of Growing Strife", "quality": "epic", "rank": 2, "source": { "type": "vendor", "detail": "Yrma, Isle of Quel'Danas — exchange Pantaloons of Calming Strife + 1 Sunmote" } }
            ],
            "feet": [
              { "id": 34564, "name": "Boots of the Malefic", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Felmyst", "detail": "Token: Boots of the Forgotten Conqueror — redeemed at Theremis, Isle of Quel'Danas" }, "note": "Counts toward Malefic set bonuses" }
            ],
            "finger": [
              { "id": 34230, "name": "Ring of Omnipotence", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "M'uru" } },
              { "id": 34362, "name": "Loop of Forged Power", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Jewelcrafting — BoE, unique-equipped" } }
            ],
            "trinket": [
              { "id": 34429, "name": "Shifting Naaru Sliver", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "M'uru" } },
              { "id": 32483, "name": "The Skull of Gul'dan", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Black Temple", "boss": "Illidan Stormrage" } },
              { "id": 33829, "name": "Hex Shrunken Head", "quality": "epic", "rank": 3, "source": { "type": "drop", "instance": "Zul'Aman", "boss": "Hex Lord Malacrass" } }
            ],
            "mainhand": [
              { "id": 34336, "name": "Sunflare", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden" } },
              { "id": 32374, "name": "Zhar'doom, Greatstaff of the Devourer", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Black Temple", "boss": "Illidan Stormrage" }, "note": "2H — leaves off-hand empty" }
            ],
            "offhand": [
              { "id": 34179, "name": "Heart of the Pit", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Brutallus" } },
              { "id": 30872, "name": "Chronicle of Dark Secrets", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Hyjal Summit", "boss": "Rage Winterchill" }, "note": "Spell hit" }
            ],
            "ranged": [
              { "id": 34347, "name": "Wand of the Demonsoul", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "detail": "Trash drop" } },
              { "id": 29982, "name": "Wand of the Forgotten Star", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Tempest Keep", "boss": "High Astromancer Solarian" } }
            ]
          }
        }
      ]
    },
    {
      "id": "affliction",
      "name": "Affliction",
      "role": "dps",
      "icon": "spell_shadow_deathcoil",
      "statPriority": "Spell Hit (76 rating caps DoTs with 5/5 Suppression; 202 for Shadow Bolt) > Shadow Damage > Spell Haste > Spell Crit > Stamina/Intellect",
      "notes": "5/5 Suppression grants +10% spell hit to Affliction spells only, so your DoTs cap at ~6% (76 rating) from gear — but Shadow Bolt is still your filler and wants the full 202 rating, so hit remains valuable. Frozen Shadoweave (Shadoweave Tailoring, BoP) is outstanding shadow-damage itemization: the Boots stay BiS through Phase 1 and the Robe/Shoulders bridge into T4 Voidheart. Crit is weak because DoTs cannot crit. Life Tap converts stamina into mana and scales with spell damage, making stamina a genuine throughput stat. Most gear is shared with Destruction — differences are the shadow-only pieces (Frozen Shadoweave, Orb of the Soul-Eater) versus Destruction's fire options.",
      "enchants": {
        "head": "Glyph of Power (+22 spell damage, +14 spell hit) — The Sha'tar, Revered",
        "shoulder": "Greater Inscription of Discipline (Aldor Exalted) or Greater Inscription of the Orb (Scryers Exalted)",
        "back": "Enchant Cloak — Subtlety (threat reduction)",
        "chest": "Enchant Chest — Exceptional Stats (+6 all stats)",
        "wrist": "Enchant Bracer — Spellpower (+15 spell damage)",
        "hands": "Enchant Gloves — Major Spellpower (+20); Spell Strike (+15 spell hit) while under the cap",
        "legs": "Runic Spellthread (+35 spell damage, +20 stamina); Mystic Spellthread on a budget",
        "feet": "Enchant Boots — Boar's Speed (mobility) or Fortitude",
        "finger": "Enchant Ring — Spellpower (+12 spell damage, Enchanters only)",
        "mainhand": "Enchant Weapon — Soulfrost (+54 shadow/frost damage); Major Spellpower (+40) as a cheaper fallback"
      },
      "brackets": [
        {
          "id": "preraid",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 24266, "name": "Spellstrike Hood", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring 375 — BoE, buyable from the AH" }, "note": "2pc Spellstrike with the Pants" },
              { "id": 31104, "name": "Evoker's Helmet of Second Sight", "quality": "rare", "rank": 2, "source": { "type": "quest", "quest": "Teron Gorefiend, I am...", "zone": "Shadowmoon Valley" } },
              { "id": 28169, "name": "Mag'hari Ritualist's Horns", "quality": "rare", "rank": 3, "faction": "horde", "source": { "type": "quest", "quest": "Hero of the Mag'har", "zone": "Nagrand" }, "note": "Horde only — no Alliance equivalent" }
            ],
            "neck": [
              { "id": 28134, "name": "Brooch of Heightened Potential", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Shadow Labyrinth", "boss": "Blackheart the Inciter" } },
              { "id": 27758, "name": "Hydra-fang Necklace", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "The Underbog", "boss": "Ghaz'an" }, "note": "Spell hit" }
            ],
            "shoulder": [
              { "id": 21869, "name": "Frozen Shadoweave Shoulders", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Shadoweave Tailoring — BoP" } },
              { "id": 30925, "name": "Spaulders of the Torn-heart", "quality": "rare", "rank": 2, "source": { "type": "quest", "quest": "The Cipher of Damnation", "zone": "Shadowmoon Valley" }, "note": "Non-tailor pick" }
            ],
            "back": [
              { "id": 27981, "name": "Sethekk Oracle Cloak", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Sethekk Halls", "boss": "Talon King Ikiss" }, "note": "Best hit cloak" },
              { "id": 31140, "name": "Cloak of Entropy", "quality": "rare", "rank": 2, "source": { "type": "world-drop", "detail": "BoE — cheap AH stopgap" } }
            ],
            "chest": [
              { "id": 21871, "name": "Frozen Shadoweave Robe", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Shadoweave Tailoring — BoP" } },
              { "id": 28232, "name": "Robe of Oblivion", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Shadow Labyrinth", "boss": "Murmur" } },
              { "id": 31297, "name": "Robe of the Crimson Order", "quality": "rare", "rank": 3, "source": { "type": "world-drop", "detail": "BoE — heavy spell hit" } }
            ],
            "wrist": [
              { "id": 24250, "name": "Bracers of Havok", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring 350 — BoE, buyable from the AH" } },
              { "id": 27462, "name": "Crimson Bracers of Gloom", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Hellfire Ramparts", "boss": "Omor the Unscarred", "detail": "Heroic only" } }
            ],
            "hands": [
              { "id": 31149, "name": "Gloves of Pandemonium", "quality": "rare", "rank": 1, "source": { "type": "world-drop", "detail": "BoE" }, "note": "Spell hit + crit" },
              { "id": 30725, "name": "Anger-Spark Gloves", "quality": "epic", "rank": 2, "source": { "type": "drop", "zone": "Shadowmoon Valley", "boss": "Doomwalker", "detail": "World boss" } },
              { "id": 24450, "name": "Manaspark Gloves", "quality": "rare", "rank": 3, "source": { "type": "drop", "instance": "The Underbog", "boss": "Hungarfen" } }
            ],
            "waist": [
              { "id": 24256, "name": "Girdle of Ruination", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring 365 — BoE" } },
              { "id": 29241, "name": "Belt of Depravity", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "The Arcatraz", "boss": "Harbinger Skyriss", "detail": "Heroic only" }, "note": "Best if you still need hit" }
            ],
            "legs": [
              { "id": 24262, "name": "Spellstrike Pants", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring 375 — BoE, pattern drops from Murmur in Shadow Labyrinth" }, "note": "Highest-priority craft — lasts into T5" },
              { "id": 30531, "name": "Breeches of the Occultist", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "The Black Morass", "boss": "Aeonus", "detail": "Heroic only" } }
            ],
            "feet": [
              { "id": 21870, "name": "Frozen Shadoweave Boots", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Shadoweave Tailoring — BoP" }, "note": "Stay BiS through Phase 1" },
              { "id": 28179, "name": "Shattrath Jumpers", "quality": "rare", "rank": 2, "source": { "type": "quest", "quest": "Into the Heart of the Labyrinth", "zone": "Shadow Labyrinth" } }
            ],
            "finger": [
              { "id": 29172, "name": "Ashyen's Gift", "quality": "epic", "rank": 1, "source": { "type": "reputation", "detail": "Cenarion Expedition — Exalted (Fedryen Swiftspear, Zangarmarsh)" } },
              { "id": 28227, "name": "Sparking Arcanite Ring", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Old Hillsbrad Foothills", "boss": "Epoch Hunter", "detail": "Heroic only" } },
              { "id": 29126, "name": "Seer's Signet", "quality": "epic", "rank": 3, "source": { "type": "reputation", "detail": "The Scryers — Exalted (Scryer-only)" } }
            ],
            "trinket": [
              { "id": 29370, "name": "Icon of the Silver Crescent", "quality": "epic", "rank": 1, "source": { "type": "badge", "detail": "G'eras, Shattrath — 41 Badges of Justice" } },
              { "id": 27683, "name": "Quagmirran's Eye", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "The Slave Pens", "boss": "Quagmirran", "detail": "Heroic only" } },
              { "id": 29132, "name": "Scryer's Bloodgem", "quality": "rare", "rank": 3, "source": { "type": "reputation", "detail": "The Scryers — Revered (Scryer-only)" }, "note": "On-use hit crutch" }
            ],
            "mainhand": [
              { "id": 31336, "name": "Blade of Wizardry", "quality": "epic", "rank": 1, "source": { "type": "world-drop", "detail": "BoE — very expensive" } },
              { "id": 29153, "name": "Blade of the Archmage", "quality": "epic", "rank": 2, "faction": "alliance", "source": { "type": "reputation", "detail": "Honor Hold — Exalted (Logistics Officer Ulrike)" }, "note": "Free and nearly as good" },
              { "id": 29155, "name": "Stormcaller", "quality": "epic", "rank": 2, "faction": "horde", "source": { "type": "reputation", "detail": "Thrallmar — Exalted (Quartermaster Urgronn)" }, "note": "Free and nearly as good" }
            ],
            "offhand": [
              { "id": 29272, "name": "Orb of the Soul-Eater", "quality": "epic", "rank": 1, "source": { "type": "badge", "detail": "G'eras, Shattrath — 25 Badges of Justice" }, "note": "Best pure shadow damage" },
              { "id": 29273, "name": "Khadgar's Knapsack", "quality": "epic", "rank": 2, "source": { "type": "badge", "detail": "G'eras, Shattrath — 25 Badges of Justice" }, "note": "Generic spell damage — better vs shadow-immune targets" }
            ],
            "ranged": [
              { "id": 29350, "name": "The Black Stalk", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "The Underbog", "boss": "The Black Stalker", "detail": "Heroic only" } },
              { "id": 28386, "name": "Nether Core's Control Rod", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "The Arcatraz", "boss": "Dalliah the Doomsayer" }, "note": "Spell hit" }
            ]
          }
        },
        {
          "id": "p1",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 28963, "name": "Voidheart Crown", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar", "detail": "Token: Helm of the Fallen Hero" }, "note": "4pc Voidheart extends Corruption by 3 sec" },
              { "id": 24266, "name": "Spellstrike Hood", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Tailoring 375 — BoE" } }
            ],
            "neck": [
              { "id": 28530, "name": "Brooch of Unquenchable Fury", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Moroes" } },
              { "id": 28762, "name": "Adornment of Stolen Souls", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar" }, "note": "More crit, no hit — take when capped" }
            ],
            "shoulder": [
              { "id": 28967, "name": "Voidheart Mantle", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Gruul's Lair", "boss": "High King Maulgar", "detail": "Token: Pauldrons of the Fallen Hero" } },
              { "id": 21869, "name": "Frozen Shadoweave Shoulders", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Shadoweave Tailoring — BoP" }, "note": "Placeholder until the token drops" }
            ],
            "back": [
              { "id": 28766, "name": "Ruby Drape of the Mysticant", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar" } },
              { "id": 30735, "name": "Ancient Spellcloak of the Highborne", "quality": "epic", "rank": 2, "source": { "type": "drop", "zone": "Hellfire Peninsula", "boss": "Doom Lord Kazzak", "detail": "World boss" }, "note": "More damage, no hit" }
            ],
            "chest": [
              { "id": 28964, "name": "Voidheart Robe", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Magtheridon's Lair", "boss": "Magtheridon", "detail": "Token: Chestguard of the Fallen Hero" } },
              { "id": 21871, "name": "Frozen Shadoweave Robe", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Shadoweave Tailoring — BoP" }, "note": "Placeholder until the token drops" }
            ],
            "wrist": [
              { "id": 24250, "name": "Bracers of Havok", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring 350 — BoE, buyable from the AH" } },
              { "id": 28515, "name": "Bands of Nefarious Deeds", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan", "boss": "Maiden of Virtue" } }
            ],
            "hands": [
              { "id": 28968, "name": "Voidheart Gloves", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "The Curator", "detail": "Token: Gloves of the Fallen Hero" } },
              { "id": 28507, "name": "Handwraps of Flowing Thought", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan", "boss": "Attumen the Huntsman" } }
            ],
            "waist": [
              { "id": 24256, "name": "Girdle of Ruination", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring 365 — BoE" } },
              { "id": 28799, "name": "Belt of Divine Inspiration", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Gruul's Lair", "boss": "High King Maulgar" } }
            ],
            "legs": [
              { "id": 24262, "name": "Spellstrike Pants", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring 375 — BoE, pattern drops from Murmur in Shadow Labyrinth" }, "note": "Warlocks skip T4 legs for these" },
              { "id": 30734, "name": "Leggings of the Seventh Circle", "quality": "epic", "rank": 2, "source": { "type": "drop", "zone": "Hellfire Peninsula", "boss": "Doom Lord Kazzak", "detail": "World boss" } }
            ],
            "feet": [
              { "id": 21870, "name": "Frozen Shadoweave Boots", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Shadoweave Tailoring — BoP" }, "note": "Best boots all phase" },
              { "id": 28585, "name": "Ruby Slippers", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan", "boss": "The Crone (Opera Event)" } }
            ],
            "finger": [
              { "id": 28793, "name": "Band of Crimson Fury", "quality": "epic", "rank": 1, "source": { "type": "quest", "quest": "The Fall of Magtheridon", "detail": "Turn in Magtheridon's Head" } },
              { "id": 29172, "name": "Ashyen's Gift", "quality": "epic", "rank": 2, "source": { "type": "reputation", "detail": "Cenarion Expedition — Exalted" } },
              { "id": 29287, "name": "Violet Signet of the Archmage", "quality": "epic", "rank": 3, "source": { "type": "reputation", "detail": "The Violet Eye — Exalted" } }
            ],
            "trinket": [
              { "id": 27683, "name": "Quagmirran's Eye", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Slave Pens", "boss": "Quagmirran", "detail": "Heroic only" } },
              { "id": 29370, "name": "Icon of the Silver Crescent", "quality": "epic", "rank": 2, "source": { "type": "badge", "detail": "G'eras, Shattrath — 41 Badges of Justice" } },
              { "id": 29132, "name": "Scryer's Bloodgem", "quality": "rare", "rank": 3, "source": { "type": "reputation", "detail": "The Scryers — Revered (Scryer-only)" } }
            ],
            "mainhand": [
              { "id": 30723, "name": "Talon of the Tempest", "quality": "epic", "rank": 1, "source": { "type": "drop", "zone": "Shadowmoon Valley", "boss": "Doomwalker", "detail": "World boss" } },
              { "id": 28770, "name": "Nathrezim Mindblade", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar" } },
              { "id": 22630, "name": "Atiesh, Greatstaff of the Guardian", "quality": "legendary", "rank": 3, "source": { "type": "quest", "detail": "Classic Naxxramas legacy" }, "note": "Still competitive; +33 party spell damage aura" }
            ],
            "offhand": [
              { "id": 29272, "name": "Orb of the Soul-Eater", "quality": "epic", "rank": 1, "source": { "type": "badge", "detail": "G'eras, Shattrath — 25 Badges of Justice" } },
              { "id": 29273, "name": "Khadgar's Knapsack", "quality": "epic", "rank": 2, "source": { "type": "badge", "detail": "G'eras, Shattrath — 25 Badges of Justice" }, "note": "Better vs shadow-immune targets" }
            ],
            "ranged": [
              { "id": 28673, "name": "Tirisfal Wand of Ascendancy", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Shade of Aran" } },
              { "id": 28783, "name": "Eredar Wand of Obliteration", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Magtheridon's Lair", "boss": "Magtheridon" } }
            ]
          }
        },
        {
          "id": "p5",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 34340, "name": "Dark Conjuror's Collar", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden" } },
              { "id": 31051, "name": "Hood of the Malefic", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Black Temple", "boss": "Illidan Stormrage", "detail": "T6 token: Crown of the Forgotten Conqueror" }, "note": "Alternative 4th Malefic piece" }
            ],
            "neck": [
              { "id": 34359, "name": "Pendant of Sunfire", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Requires Jewelcrafting 350 to wear — BoP" }, "note": "Jewelcrafters only" },
              { "id": 34204, "name": "Amulet of Unfettered Magics", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Eredar Twins" }, "note": "BiS for non-Jewelcrafters" }
            ],
            "shoulder": [
              { "id": 34210, "name": "Amice of the Convoker", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Eredar Twins" } },
              { "id": 31054, "name": "Mantle of the Malefic", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Black Temple", "boss": "Mother Shahraz", "detail": "T6 token: Pauldrons of the Forgotten Conqueror" }, "note": "Common 4th piece for Malefic 4pc (+6% Shadow Bolt/Incinerate)" }
            ],
            "back": [
              { "id": 34242, "name": "Tattered Cape of Antonidas", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden" } },
              { "id": 32590, "name": "Nethervoid Cloak", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Black Temple", "detail": "Trash drop" }, "note": "Spell hit" }
            ],
            "chest": [
              { "id": 34364, "name": "Sunfire Robe", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Requires Tailoring 350 to wear — pattern from Sunwell trash, crafted with Sunmotes" }, "note": "Tailors only" },
              { "id": 34399, "name": "Robes of Ghostly Hatred", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau" }, "note": "Non-tailor pick" }
            ],
            "wrist": [
              { "id": 34436, "name": "Bracers of the Malefic", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kalecgos", "detail": "Token: Bracers of the Forgotten Conqueror — redeemed at Theremis, Isle of Quel'Danas" }, "note": "Counts toward Malefic set bonuses" },
              { "id": 32586, "name": "Bracers of Nimble Thought", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Tailoring — BoE" } }
            ],
            "hands": [
              { "id": 34344, "name": "Handguards of Defiled Worlds", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden" } },
              { "id": 34366, "name": "Sunfire Handwraps", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Tailoring — BoE, crafted with Sunmotes" } }
            ],
            "waist": [
              { "id": 34541, "name": "Belt of the Malefic", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Brutallus", "detail": "Token: Belt of the Forgotten Conqueror — redeemed at Theremis, Isle of Quel'Danas" }, "note": "Counts toward Malefic set bonuses" }
            ],
            "legs": [
              { "id": 34181, "name": "Leggings of Calamity", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Brutallus" } },
              { "id": 34386, "name": "Pantaloons of Growing Strife", "quality": "epic", "rank": 2, "source": { "type": "vendor", "detail": "Yrma, Isle of Quel'Danas — exchange Pantaloons of Calming Strife + 1 Sunmote" } }
            ],
            "feet": [
              { "id": 34564, "name": "Boots of the Malefic", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Felmyst", "detail": "Token: Boots of the Forgotten Conqueror — redeemed at Theremis, Isle of Quel'Danas" }, "note": "Counts toward Malefic set bonuses" }
            ],
            "finger": [
              { "id": 34230, "name": "Ring of Omnipotence", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "M'uru" } },
              { "id": 34362, "name": "Loop of Forged Power", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Jewelcrafting — BoE, unique-equipped" } }
            ],
            "trinket": [
              { "id": 34429, "name": "Shifting Naaru Sliver", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "M'uru" } },
              { "id": 32483, "name": "The Skull of Gul'dan", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Black Temple", "boss": "Illidan Stormrage" } },
              { "id": 33829, "name": "Hex Shrunken Head", "quality": "epic", "rank": 3, "source": { "type": "drop", "instance": "Zul'Aman", "boss": "Hex Lord Malacrass" } }
            ],
            "mainhand": [
              { "id": 34336, "name": "Sunflare", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden" } },
              { "id": 34182, "name": "Grand Magister's Staff of Torrents", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Felmyst" }, "note": "2H — strong haste-heavy Affliction alternative, leaves off-hand empty" }
            ],
            "offhand": [
              { "id": 34179, "name": "Heart of the Pit", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Brutallus" } },
              { "id": 30872, "name": "Chronicle of Dark Secrets", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Hyjal Summit", "boss": "Rage Winterchill" }, "note": "Spell hit" }
            ],
            "ranged": [
              { "id": 34347, "name": "Wand of the Demonsoul", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "detail": "Trash drop" } },
              { "id": 29982, "name": "Wand of the Forgotten Star", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Tempest Keep", "boss": "High Astromancer Solarian" } }
            ]
          }
        }
      ]
    }
  ]
}
);
