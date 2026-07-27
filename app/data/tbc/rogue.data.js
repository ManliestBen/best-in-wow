/* BiS Companion data — TBC Classic Rogue (Combat) gear by phase */
WOWDATA.register(
{
  "kind": "bis",
  "expansion": "tbc",
  "class": "rogue",
  "className": "Rogue",
  "classColor": "#FFF569",
  "specs": [
    {
      "id": "combat",
      "name": "Combat",
      "role": "dps",
      "icon": "ability_backstab",
      "statPriority": "Hit Rating (to 9% special cap, ~6%/95 rating with 3/3 Precision) > Expertise (26) > Agility > Attack Power > Crit > Haste",
      "notes": "TBC Classic runs the 2.4.3 combat system: weapon skill is gone, replaced by Expertise — cap it at 26 (removes the boss 6.5% dodge). Yellow (special) attacks cap at 9% hit; the dual-wield white cap is 28%, so hit rating stays valuable long after the yellow cap. Poisons use spell hit (16% cap) — run Instant Poison on the fast off-hand and Deadly or Instant on the main hand. Lists assume Combat with Sword Specialization; Dragonmaw is a main-hand MACE (swap to Mace Specialization) and The Bladefist / Hand of the Deceiver are FISTS (use Close Quarters Combat) — all three weapon builds sim within ~1%, so take whichever weapon you get. Mutilate (daggers, e.g. Malchazeen) is a viable but weaker raid spec.",
      "enchants": {
        "head": "Glyph of Ferocity (+34 AP / +16 Hit Rating) — Cenarion Expedition Revered",
        "shoulder": "Greater Inscription of Vengeance (+30 AP / +10 Crit) — Aldor Exalted (Scryers: Greater Inscription of the Blade)",
        "back": "Greater Agility (+12 Agility)",
        "chest": "Exceptional Stats (+6 all stats)",
        "wrist": "Assault (+24 Attack Power)",
        "hands": "Assault (+26 Attack Power)",
        "legs": "Nethercobra Leg Armor (+50 AP / +12 Crit)",
        "feet": "Cat's Swiftness (+6 Agility, minor run speed) or Dexterity (+12 Agility)",
        "mainhand": "Mongoose",
        "offhand": "Mongoose"
      },
      "brackets": [
        {
          "id": "preraid",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 28224, "name": "Wastewalker Helm", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Old Hillsbrad Foothills", "boss": "Epoch Hunter", "detail": "Heroic only" } }
            ],
            "neck": [
              { "id": 29381, "name": "Choker of Vile Intent", "quality": "epic", "rank": 1, "source": { "type": "badge", "detail": "25 Badge of Justice" }, "note": "Holds deep into raids" }
            ],
            "shoulder": [
              { "id": 27797, "name": "Wastewalker Shoulderpads", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Auchenai Crypts", "boss": "Avatar of the Martyred", "detail": "Heroic only" } }
            ],
            "back": [
              { "id": 24259, "name": "Vengeance Wrap", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Tailoring" }, "note": "Sims top pre-raid" },
              { "id": 27878, "name": "Auchenai Death Shroud", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Auchenai Crypts", "boss": "Exarch Maladaar", "detail": "Heroic only" } }
            ],
            "chest": [
              { "id": 29525, "name": "Primalstrike Vest", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking 375 required to wear (BoP)" } },
              { "id": 28264, "name": "Wastewalker Tunic", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "The Blood Furnace", "boss": "Keli'dan the Breaker", "detail": "Heroic only" }, "note": "Best non-Leatherworking chest" }
            ],
            "wrist": [
              { "id": 29527, "name": "Primalstrike Bracers", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking 375 required to wear (BoP)" } },
              { "id": 29246, "name": "Nightfall Wristguards", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Old Hillsbrad Foothills", "boss": "Epoch Hunter", "detail": "Heroic only" } }
            ],
            "hands": [
              { "id": 27531, "name": "Wastewalker Gloves", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Shattered Halls", "boss": "Warchief Kargath Bladefist", "detail": "Heroic only" } },
              { "id": 25685, "name": "Fel Leather Gloves", "quality": "rare", "rank": 2, "source": { "type": "crafted", "detail": "Leatherworking" } }
            ],
            "waist": [
              { "id": 29526, "name": "Primalstrike Belt", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking 375 required to wear (BoP)" } },
              { "id": 29247, "name": "Girdle of the Deathdealer", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "The Black Morass", "boss": "Aeonus", "detail": "Heroic only" }, "note": "BiS throughout Phase 1" }
            ],
            "legs": [
              { "id": 27837, "name": "Wastewalker Leggings", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Mana-Tombs", "boss": "Nexus-Prince Shaffar", "detail": "Heroic only" } },
              { "id": 25687, "name": "Fel Leather Leggings", "quality": "rare", "rank": 2, "source": { "type": "crafted", "detail": "Leatherworking" } }
            ],
            "feet": [
              { "id": 25686, "name": "Fel Leather Boots", "quality": "rare", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking" } }
            ],
            "finger": [
              { "id": 30860, "name": "Kaylaan's Signet", "quality": "rare", "rank": 1, "source": { "type": "quest", "quest": "Deathblow to the Legion", "detail": "Aldor only" } },
              { "id": 31077, "name": "Slayer's Mark of the Redemption", "quality": "rare", "rank": 2, "source": { "type": "quest", "quest": "Dissension Amongst the Ranks", "detail": "Lower City Exalted" } },
              { "id": 27925, "name": "Ravenclaw Band", "quality": "rare", "rank": 3, "source": { "type": "drop", "instance": "Sethekk Halls", "boss": "Talon King Ikiss" }, "note": "Scryer-friendly alternative" }
            ],
            "trinket": [
              { "id": 29383, "name": "Bloodlust Brooch", "quality": "epic", "rank": 1, "source": { "type": "badge", "detail": "41 Badge of Justice" } },
              { "id": 28034, "name": "Hourglass of the Unraveller", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "The Black Morass", "boss": "Temporus" } },
              { "id": 28288, "name": "Abacus of Violent Odds", "quality": "rare", "rank": 3, "source": { "type": "drop", "instance": "The Mechanar", "boss": "Pathaleon the Calculator" } }
            ],
            "mainhand": [
              { "id": 28438, "name": "Dragonmaw", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Blacksmithing — Master Hammersmith (BoP)" }, "note": "Main-hand mace — pair with Mace Specialization" },
              { "id": 31332, "name": "Blinkstrike", "quality": "epic", "rank": 2, "source": { "type": "world-drop", "detail": "BoE world drop" }, "note": "Extra-attack proc; best sword MH pre-raid" },
              { "id": 29348, "name": "The Bladefist", "quality": "epic", "rank": 3, "source": { "type": "drop", "instance": "The Shattered Halls", "boss": "Warchief Kargath Bladefist", "detail": "Heroic only" }, "note": "Fist weapon — use with Close Quarters Combat" }
            ],
            "offhand": [
              { "id": 28189, "name": "Latro's Shifting Sword", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Black Morass", "boss": "Aeonus" }, "note": "1.4 speed with hit and expertise — ideal off-hand" },
              { "id": 29124, "name": "Vindicator's Brand", "quality": "epic", "rank": 2, "source": { "type": "reputation", "detail": "The Aldor — Exalted, vendor purchase" } }
            ],
            "ranged": [
              { "id": 29151, "name": "Veteran's Musket", "quality": "epic", "rank": 1, "faction": "alliance", "source": { "type": "reputation", "detail": "Honor Hold — Exalted" }, "note": "Agility/hit stat stick" },
              { "id": 29152, "name": "Marksman's Bow", "quality": "epic", "rank": 1, "faction": "horde", "source": { "type": "reputation", "detail": "Thrallmar — Exalted" }, "note": "Agility/hit stat stick" }
            ]
          }
        },
        {
          "id": "p1",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 29044, "name": "Netherblade Facemask", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar", "detail": "Tier 4 token (Helm of the Fallen Champion)" } },
              { "id": 28224, "name": "Wastewalker Helm", "quality": "rare", "rank": 2, "source": { "type": "drop", "instance": "Old Hillsbrad Foothills", "boss": "Epoch Hunter", "detail": "Heroic only" } }
            ],
            "neck": [
              { "id": 29381, "name": "Choker of Vile Intent", "quality": "epic", "rank": 1, "source": { "type": "badge", "detail": "25 Badge of Justice" } }
            ],
            "shoulder": [
              { "id": 27797, "name": "Wastewalker Shoulderpads", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "Auchenai Crypts", "boss": "Avatar of the Martyred", "detail": "Heroic only" }, "note": "Keeps the strong 2pc Wastewalker bonus with the gloves" },
              { "id": 29047, "name": "Netherblade Shoulderpads", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Gruul's Lair", "boss": "High King Maulgar", "detail": "Tier 4 token (Pauldrons of the Fallen Champion)" } }
            ],
            "back": [
              { "id": 28672, "name": "Drape of the Dark Reavers", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Shade of Aran" } },
              { "id": 24259, "name": "Vengeance Wrap", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Tailoring" } }
            ],
            "chest": [
              { "id": 29045, "name": "Netherblade Chestpiece", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Magtheridon's Lair", "boss": "Magtheridon", "detail": "Tier 4 token (Chestguard of the Fallen Champion)" } },
              { "id": 29525, "name": "Primalstrike Vest", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Leatherworking 375 required to wear (BoP)" } }
            ],
            "wrist": [
              { "id": 29246, "name": "Nightfall Wristguards", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Old Hillsbrad Foothills", "boss": "Epoch Hunter", "detail": "Heroic only" } },
              { "id": 29527, "name": "Primalstrike Bracers", "quality": "epic", "rank": 2, "source": { "type": "crafted", "detail": "Leatherworking 375 required to wear (BoP)" } }
            ],
            "hands": [
              { "id": 27531, "name": "Wastewalker Gloves", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Shattered Halls", "boss": "Warchief Kargath Bladefist", "detail": "Heroic only" }, "note": "2pc Wastewalker with the shoulders" },
              { "id": 29048, "name": "Netherblade Gloves", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan", "boss": "The Curator", "detail": "Tier 4 token (Gloves of the Fallen Champion)" } }
            ],
            "waist": [
              { "id": 29247, "name": "Girdle of the Deathdealer", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "The Black Morass", "boss": "Aeonus", "detail": "Heroic only" } }
            ],
            "legs": [
              { "id": 28741, "name": "Skulker's Greaves", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Netherspite" } },
              { "id": 29046, "name": "Netherblade Breeches", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Gruul's Lair", "boss": "Gruul the Dragonkiller", "detail": "Tier 4 token (Leggings of the Fallen Champion)" } }
            ],
            "feet": [
              { "id": 28545, "name": "Edgewalker Longboots", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Moroes" } }
            ],
            "finger": [
              { "id": 28757, "name": "Ring of a Thousand Marks", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar" } },
              { "id": 28649, "name": "Garona's Signet Ring", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan", "boss": "The Curator" } },
              { "id": 30860, "name": "Kaylaan's Signet", "quality": "rare", "rank": 3, "source": { "type": "quest", "quest": "Deathblow to the Legion", "detail": "Aldor only" } }
            ],
            "trinket": [
              { "id": 28830, "name": "Dragonspine Trophy", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Gruul's Lair", "boss": "Gruul the Dragonkiller" }, "note": "Best melee trinket for the entire expansion" },
              { "id": 29383, "name": "Bloodlust Brooch", "quality": "epic", "rank": 2, "source": { "type": "badge", "detail": "41 Badge of Justice" } },
              { "id": 28034, "name": "Hourglass of the Unraveller", "quality": "rare", "rank": 3, "source": { "type": "drop", "instance": "The Black Morass", "boss": "Temporus" } }
            ],
            "mainhand": [
              { "id": 28438, "name": "Dragonmaw", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Blacksmithing — Master Hammersmith (BoP)" }, "note": "Main-hand mace — pair with Mace Specialization" },
              { "id": 28729, "name": "Spiteblade", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Karazhan", "boss": "Netherspite" }, "note": "Best sword main hand" },
              { "id": 28768, "name": "Malchazeen", "quality": "epic", "rank": 3, "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar" }, "note": "Dagger — Mutilate builds" }
            ],
            "offhand": [
              { "id": 28189, "name": "Latro's Shifting Sword", "quality": "rare", "rank": 1, "source": { "type": "drop", "instance": "The Black Morass", "boss": "Aeonus" }, "note": "Still BiS off-hand in Phase 1" },
              { "id": 29124, "name": "Vindicator's Brand", "quality": "epic", "rank": 2, "source": { "type": "reputation", "detail": "The Aldor — Exalted, vendor purchase" } }
            ],
            "ranged": [
              { "id": 28772, "name": "Sunfury Bow of the Phoenix", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Karazhan", "boss": "Prince Malchezaar" } },
              { "id": 29151, "name": "Veteran's Musket", "quality": "epic", "rank": 2, "faction": "alliance", "source": { "type": "reputation", "detail": "Honor Hold — Exalted" } },
              { "id": 29152, "name": "Marksman's Bow", "quality": "epic", "rank": 2, "faction": "horde", "source": { "type": "reputation", "detail": "Thrallmar — Exalted" } }
            ]
          }
        },
        {
          "id": "p5",
          "levelRange": [70, 70],
          "slots": {
            "head": [
              { "id": 34244, "name": "Duplicitous Guise", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden" } }
            ],
            "neck": [
              { "id": 34177, "name": "Clutch of Demise", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Brutallus" } }
            ],
            "shoulder": [
              { "id": 31030, "name": "Slayer's Shoulderpads", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Black Temple", "boss": "Mother Shahraz", "detail": "Tier 6 token (Pauldrons of the Forgotten Vanquisher)" } }
            ],
            "back": [
              { "id": 34241, "name": "Cloak of Unforgivable Sin", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden" } }
            ],
            "chest": [
              { "id": 34397, "name": "Bladed Chaos Tunic", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "M'uru", "detail": "Sunmote exchange — Harness of Carnal Instinct + 1 Sunmote" } }
            ],
            "wrist": [
              { "id": 34448, "name": "Slayer's Bracers", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kalecgos", "detail": "Tier 6 token (Bracers of the Forgotten Vanquisher)" } }
            ],
            "hands": [
              { "id": 34370, "name": "Gloves of Immortal Dusk", "quality": "epic", "rank": 1, "source": { "type": "crafted", "detail": "Leatherworking — pattern from Sunwell Plateau" } }
            ],
            "waist": [
              { "id": 34558, "name": "Slayer's Belt", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Brutallus", "detail": "Tier 6 token (Belt of the Forgotten Vanquisher)" } }
            ],
            "legs": [
              { "id": 34188, "name": "Leggings of the Immortal Night", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Felmyst" } }
            ],
            "feet": [
              { "id": 34575, "name": "Slayer's Boots", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Felmyst", "detail": "Tier 6 token (Boots of the Forgotten Vanquisher)" } }
            ],
            "finger": [
              { "id": 32497, "name": "Stormrage Signet Ring", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Black Temple", "boss": "Illidan Stormrage" } },
              { "id": 34189, "name": "Band of Ruinous Delight", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "The Eredar Twins" } }
            ],
            "trinket": [
              { "id": 28830, "name": "Dragonspine Trophy", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Gruul's Lair", "boss": "Gruul the Dragonkiller" }, "note": "Still unreplaced from Phase 1" },
              { "id": 34427, "name": "Blackened Naaru Sliver", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "M'uru" } }
            ],
            "mainhand": [
              { "id": 32837, "name": "Warglaive of Azzinoth", "quality": "legendary", "rank": 1, "source": { "type": "drop", "instance": "Black Temple", "boss": "Illidan Stormrage" }, "note": "Legendary — set bonus with the off-hand glaive" },
              { "id": 34331, "name": "Hand of the Deceiver", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden" }, "note": "Fist — best non-Glaive main hand (Close Quarters Combat)" }
            ],
            "offhand": [
              { "id": 32838, "name": "Warglaive of Azzinoth", "quality": "legendary", "rank": 1, "source": { "type": "drop", "instance": "Black Temple", "boss": "Illidan Stormrage" }, "note": "Legendary off-hand glaive" },
              { "id": 32369, "name": "Blade of Savagery", "quality": "epic", "rank": 2, "source": { "type": "drop", "instance": "Black Temple", "boss": "Mother Shahraz" }, "note": "Best non-Glaive off-hand sword" }
            ],
            "ranged": [
              { "id": 34196, "name": "Golden Bow of Quel'Thalas", "quality": "epic", "rank": 1, "source": { "type": "drop", "instance": "Sunwell Plateau", "boss": "Kil'jaeden" } }
            ]
          }
        }
      ]
    }
  ]
}
);
