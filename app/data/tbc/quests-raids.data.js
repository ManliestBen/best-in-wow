/* BiS Companion data — TBC raid instance quests (Karazhan through Sunwell Plateau) */
WOWDATA.register(
{
  "kind": "quests",
  "expansion": "tbc",
  "instances": [
    {
      "id": "karazhan",
      "name": "Karazhan",
      "type": "raid",
      "zone": "Deadwind Pass",
      "levelRange": [70, 70],
      "phase": "p1",
      "attunement": "The Master's Key chain: Archmage Alturus outside Karazhan (Arcane Disturbances / Restless Activity) sends you to Khadgar in Shattrath, who needs three key fragments — Shadow Labyrinth, The Steamvault, and The Arcatraz — then The Master's Touch (protect Medivh in the Black Morass) before Khadgar restores The Master's Key. The key requirement was never lifted in TBC Classic, but in practice only one keyed player is needed to open the front door for the raid.",
      "notes": "The Chess Event and the animal bosses have no quests of their own. Nightbane (summoned via the quest chain below) also drops the Blazing Signet used in The Cudgel of Kar'desh, the Serpentshrine Cavern attunement.",
      "quests": [
        {
          "id": 9840,
          "name": "Assessing the Situation",
          "faction": "both",
          "questGiver": "Archmage Alturus — Deadwind Pass, outside Karazhan",
          "prereq": "Requires The Master's Key",
          "note": "Find Koren, the blacksmith inside Karazhan near Attumen's stables. Opens the Violet Eye quest line."
        },
        {
          "id": 9843,
          "name": "Keanna's Log",
          "faction": "both",
          "questGiver": "Koren — inside Karazhan",
          "prereq": "Assessing the Situation",
          "note": "Retrieve Keanna's Log from the Guest Chambers (past the Maiden of Virtue area); turn in to Archmage Alturus."
        },
        {
          "id": 9844,
          "name": "A Demonic Presence",
          "faction": "both",
          "questGiver": "Archmage Alturus — Deadwind Pass",
          "prereq": "Keanna's Log",
          "note": "Destroy the demonic presence at the top of Karazhan — kill Prince Malchezaar."
        },
        {
          "id": 9860,
          "name": "The New Directive",
          "faction": "both",
          "questGiver": "Archmage Alturus — Deadwind Pass",
          "prereq": "A Demonic Presence",
          "rewards": [ { "id": 31113, "name": "Violet Badge" } ],
          "note": "Finale of the Violet Eye line — report to Archmage Cedric at Dalaran Crater, Alterac Mountains. +3000 Violet Eye reputation."
        },
        {
          "id": 9630,
          "name": "Medivh's Journal",
          "faction": "both",
          "questGiver": "Archmage Alturus — Deadwind Pass",
          "prereq": "Honored with The Violet Eye",
          "note": "Start of the Nightbane summoning chain — speak with Wravien in the Guardian's Library."
        },
        {
          "id": 9638,
          "name": "In Good Hands",
          "faction": "both",
          "questGiver": "Wravien — Guardian's Library, Karazhan",
          "prereq": "Medivh's Journal",
          "note": "Speak with Gradav in the Guardian's Library."
        },
        {
          "id": 9639,
          "name": "Kamsis",
          "faction": "both",
          "questGiver": "Gradav — Guardian's Library, Karazhan",
          "prereq": "In Good Hands",
          "note": "Speak with Kamsis in the Guardian's Library."
        },
        {
          "id": 9640,
          "name": "The Shade of Aran",
          "faction": "both",
          "questGiver": "Kamsis — Guardian's Library, Karazhan",
          "prereq": "Kamsis",
          "note": "Kill the Shade of Aran and loot Medivh's Journal for Kamsis."
        },
        {
          "id": 9645,
          "name": "The Master's Terrace",
          "faction": "both",
          "questGiver": "Kamsis — Guardian's Library, Karazhan",
          "prereq": "The Shade of Aran",
          "note": "Use the journal on the Master's Terrace (Nightbane's terrace) to witness the vision of Medivh and Arcanagos."
        },
        {
          "id": 9680,
          "name": "Digging Up the Past",
          "faction": "both",
          "questGiver": "Archmage Alturus — Deadwind Pass",
          "prereq": "The Master's Terrace",
          "note": "Dig up the Charred Bone Fragment from the ruined cemetery outside Karazhan."
        },
        {
          "id": 9631,
          "name": "A Colleague's Aid",
          "faction": "both",
          "questGiver": "Archmage Alturus — Deadwind Pass",
          "prereq": "Digging Up the Past",
          "note": "Bring the bone fragment to Kalynna Lathred in Area 52, Netherstorm."
        },
        {
          "id": 9637,
          "name": "Kalynna's Request",
          "faction": "both",
          "questGiver": "Kalynna Lathred — Area 52, Netherstorm",
          "prereq": "A Colleague's Aid",
          "note": "Loot the Book of Forgotten Names from Darkweaver Syth in Heroic Sethekk Halls and the Tome of Dusk from Grand Warlock Nethekurse in Heroic Shattered Halls."
        },
        {
          "id": 9644,
          "name": "Nightbane",
          "faction": "both",
          "questGiver": "Kalynna Lathred — Area 52, Netherstorm",
          "prereq": "Kalynna's Request",
          "rewards": [
            { "id": 31116, "name": "Infused Amethyst" },
            { "id": 31117, "name": "Soothing Amethyst" },
            { "id": 31118, "name": "Pulsing Amethyst" }
          ],
          "note": "Use the Blackened Urn on the Master's Terrace to summon Nightbane, kill him, and bring the Faint Arcane Essence to Archmage Alturus. The urn stays usable for future summons."
        }
      ]
    },
    {
      "id": "gruuls-lair",
      "name": "Gruul's Lair",
      "type": "raid",
      "zone": "Blade's Edge Mountains",
      "levelRange": [70, 70],
      "phase": "p1",
      "attunement": "No attunement required.",
      "notes": "Gruul the Dragonkiller drops the Earthen Signet used in the Serpentshrine Cavern attunement quest.",
      "quests": [
        {
          "id": 10901,
          "name": "The Cudgel of Kar'desh",
          "faction": "both",
          "questGiver": "Skar'this the Heretic — Heroic Slave Pens, Coilfang Reservoir",
          "prereq": "Requires the Earthen Signet from Gruul the Dragonkiller and the Blazing Signet from Nightbane in Karazhan",
          "note": "Turn-in attunes you to Serpentshrine Cavern; completing it at level 70 along with Trial of the Naaru: Magtheridon grants the Champion of the Naaru title."
        }
      ]
    },
    {
      "id": "magtheridons-lair",
      "name": "Magtheridon's Lair",
      "type": "raid",
      "zone": "Hellfire Citadel, Hellfire Peninsula",
      "levelRange": [70, 70],
      "phase": "p1",
      "attunement": "No attunement required.",
      "notes": "Magtheridon drops Magtheridon's Head, a raid-wide quest starter, and his death completes the final Trial of the Naaru for the Tempest Key.",
      "quests": [
        {
          "id": 11002,
          "name": "The Fall of Magtheridon",
          "faction": "alliance",
          "questGiver": "Starts from Magtheridon's Head (drop); turn in to Force Commander Danath Trollbane — Honor Hold",
          "rewards": [
            { "id": 28790, "name": "Naaru Lightwarden's Band" },
            { "id": 28791, "name": "Ring of the Recalcitrant" },
            { "id": 28792, "name": "A'dal's Signet of Defense" },
            { "id": 28793, "name": "Band of Crimson Fury" }
          ],
          "note": "One head drops per kill; the looter chooses one of four epic rings. +1000 Honor Hold reputation."
        },
        {
          "id": 11003,
          "name": "The Fall of Magtheridon",
          "faction": "horde",
          "questGiver": "Starts from Magtheridon's Head (drop); turn in to Nazgrel — Thrallmar",
          "rewards": [
            { "id": 28790, "name": "Naaru Lightwarden's Band" },
            { "id": 28791, "name": "Ring of the Recalcitrant" },
            { "id": 28792, "name": "A'dal's Signet of Defense" },
            { "id": 28793, "name": "Band of Crimson Fury" }
          ],
          "note": "Horde version of the head turn-in; same four ring choices. +1000 Thrallmar reputation."
        },
        {
          "id": 10888,
          "name": "Trial of the Naaru: Magtheridon",
          "faction": "both",
          "questGiver": "A'dal — Shattrath City",
          "prereq": "Final step of the Tempest Key chain, after Trials of the Naaru: Mercy, Strength, and Tenacity",
          "rewards": [ { "id": 31746, "name": "Phoenix-fire Band" } ],
          "note": "Slay Magtheridon; A'dal grants The Tempest Key, attuning you to Tempest Keep: The Eye."
        }
      ]
    },
    {
      "id": "serpentshrine-cavern",
      "name": "Serpentshrine Cavern",
      "type": "raid",
      "zone": "Coilfang Reservoir, Zangarmarsh",
      "levelRange": [70, 70],
      "phase": "p2",
      "attunement": "The Cudgel of Kar'desh: Skar'this the Heretic in Heroic Slave Pens wants the Earthen Signet (Gruul the Dragonkiller) and the Blazing Signet (Nightbane in Karazhan). The attunement was lifted when Phase 3 launched, mirroring original patch 2.3.",
      "notes": "Lady Vashj drops Vashj's Vial Remnant for the Mount Hyjal attunement.",
      "quests": [
        {
          "id": 10445,
          "name": "The Vials of Eternity",
          "faction": "both",
          "questGiver": "Soridormi — Caverns of Time, Tanaris",
          "prereq": "Requires Vashj's Vial Remnant (Lady Vashj) and Kael's Vial Remnant (Kael'thas Sunstrider in Tempest Keep)",
          "note": "Also listed under Tempest Keep — it needs a drop from both raids. Turn-in attunes you to The Battle for Mount Hyjal and grants +3000 Scale of the Sands reputation."
        }
      ]
    },
    {
      "id": "tempest-keep",
      "name": "Tempest Keep: The Eye",
      "type": "raid",
      "zone": "Tempest Keep, Netherstorm",
      "levelRange": [70, 70],
      "phase": "p2",
      "attunement": "The Tempest Key: A'dal's Trials of the Naaru — Mercy (timed Heroic Shattered Halls run), Strength (Murmur's Essence from Heroic Shadow Labyrinth and Kalithresh's Trident from Heroic Steamvault), Tenacity (rescue Millhouse Manastorm in Heroic Arcatraz), and Magtheridon (kill Magtheridon). The attunement was lifted when Phase 3 launched, mirroring original patch 2.3.",
      "notes": "Kael'thas drops Kael's Vial Remnant for the Mount Hyjal attunement and the Verdant Sphere quest starter.",
      "quests": [
        {
          "id": 11007,
          "name": "Kael'thas and the Verdant Sphere",
          "faction": "both",
          "questGiver": "Starts from the Verdant Sphere (Kael'thas Sunstrider drop); turn in to A'dal — Shattrath City",
          "rewards": [
            { "id": 30007, "name": "The Darkener's Grasp" },
            { "id": 30015, "name": "The Sun King's Talisman" },
            { "id": 30017, "name": "Telonicus' Pendant of Mayhem" },
            { "id": 30018, "name": "Lord Sanguinar's Claim" }
          ],
          "note": "One sphere drops per kill; the looter chooses one of four ilvl 138 epic necks. +1000 Sha'tar reputation."
        },
        {
          "id": 10946,
          "name": "Ruse of the Ashtongue",
          "faction": "both",
          "questGiver": "Akama — Warden's Cage, Shadowmoon Valley",
          "prereq": "Black Temple attunement chain, after Akama's Promise / The Secret Compromised",
          "note": "Defeat Al'ar while wearing the Ashtongue Cowl. +500 Ashtongue Deathsworn reputation."
        },
        {
          "id": 10445,
          "name": "The Vials of Eternity",
          "faction": "both",
          "questGiver": "Soridormi — Caverns of Time, Tanaris",
          "prereq": "Requires Kael's Vial Remnant (Kael'thas Sunstrider) and Vashj's Vial Remnant (Lady Vashj in Serpentshrine Cavern)",
          "note": "Also listed under Serpentshrine Cavern — it needs a drop from both raids. Turn-in attunes you to The Battle for Mount Hyjal."
        }
      ]
    },
    {
      "id": "mount-hyjal",
      "name": "The Battle for Mount Hyjal",
      "type": "raid",
      "zone": "Caverns of Time, Tanaris",
      "levelRange": [70, 70],
      "phase": "p3",
      "attunement": "The Vials of Eternity: bring Vashj's Vial Remnant (Lady Vashj) and Kael's Vial Remnant (Kael'thas) to Soridormi at the Caverns of Time. The attunement was lifted with Phase 5 (Sunwell patch), mirroring original patch 2.4.",
      "notes": "Rage Winterchill drops the Time-Phased Phylactery for the Black Temple attunement chain.",
      "quests": [
        {
          "id": 10947,
          "name": "An Artifact From the Past",
          "faction": "both",
          "questGiver": "Akama — Warden's Cage, Shadowmoon Valley",
          "prereq": "Black Temple attunement chain, after Ruse of the Ashtongue",
          "note": "Defeat Rage Winterchill and return the Time-Phased Phylactery to Akama. +500 Ashtongue Deathsworn reputation."
        }
      ]
    },
    {
      "id": "black-temple",
      "name": "Black Temple",
      "type": "raid",
      "zone": "Shadowmoon Valley",
      "levelRange": [70, 70],
      "phase": "p3",
      "attunement": "Long Aldor/Scryer chain in Shadowmoon Valley (Tablets of Baa'ri ... The Warden's Cage) leading to Akama: Seer Udalo in The Arcatraz, A Mysterious Portent, The Ata'mal Terrace, Akama's Promise to A'dal, The Secret Compromised, then the raid steps Ruse of the Ashtongue (kill Al'ar) and An Artifact From the Past (kill Rage Winterchill), The Hostage Soul, Entry Into the Black Temple, and A Distraction for Akama, which awards the Medallion of Karabor. The attunement was lifted with Phase 5 (Sunwell patch), mirroring original patch 2.4.",
      "quests": [
        {
          "id": 10985,
          "name": "A Distraction for Akama",
          "faction": "both",
          "questGiver": "Xi'ri — outside the Black Temple, Shadowmoon Valley",
          "prereq": "Entry Into the Black Temple",
          "rewards": [ { "id": 32646, "name": "Medallion of Karabor" } ],
          "note": "Help Xi'ri's forces create a distraction at the temple gates so Akama and Maiev can slip inside; finishes the attunement and awards the raid key."
        },
        {
          "id": 10959,
          "name": "The Fall of the Betrayer",
          "faction": "both",
          "questGiver": "Seer Kanai — Shadowmoon Valley",
          "prereq": "A Distraction for Akama (requires the Medallion of Karabor)",
          "rewards": [ { "id": 32757, "name": "Blessed Medallion of Karabor" } ],
          "note": "Defeat Illidan Stormrage; the turn-in upgrades your medallion into a teleport-to-Black-Temple neck. +500 Ashtongue Deathsworn reputation."
        }
      ]
    },
    {
      "id": "zul-aman",
      "name": "Zul'Aman",
      "type": "raid",
      "zone": "Ghostlands (Hatchet Hills)",
      "levelRange": [70, 70],
      "phase": "p4",
      "attunement": "No attunement required.",
      "notes": "Timed run: banging the gong starts a timer to free four prisoners (Tanzar, Kraz, Ashli, and Harkor) held by the first four bosses. Each rescue opens a bonus loot chest; saving all four in time awards the Amani War Bear mount from the final chest.",
      "quests": [
        {
          "id": 11132,
          "name": "Promises, Promises...",
          "faction": "both",
          "questGiver": "Budd Nedreck — Hatchet Hills, Ghostlands",
          "prereq": "Oooh, Shinies! (Griftah, Shattrath City)",
          "rewards": [ { "id": 34067, "name": "Tattered Hexcloth Sack" } ],
          "note": "Retrieve Budd's Map of Zul'Aman from High Priest Nalorakk's terrace. The reward bag holds 20 slots."
        },
        {
          "id": 11166,
          "name": "X Marks... Your Doom!",
          "faction": "both",
          "questGiver": "Budd Nedreck — Hatchet Hills, Ghostlands",
          "prereq": "Promises, Promises...",
          "note": "Scout Halazzi's chamber, Jan'alai's platform, and Akil'zon's platform inside Zul'Aman."
        },
        {
          "id": 11171,
          "name": "Hex Lord? Hah!",
          "faction": "both",
          "questGiver": "Budd Nedreck — Hatchet Hills, Ghostlands",
          "prereq": "X Marks... Your Doom!",
          "rewards": [ { "id": 29434, "name": "Badge of Justice" } ],
          "note": "Slay Hex Lord Malacrass. Rewards 5x Badge of Justice."
        },
        {
          "id": 11164,
          "name": "Tuskin' Raiders",
          "faction": "both",
          "questGiver": "Prigmon — Hatchet Hills, Ghostlands",
          "note": "Collect 10 Forest Troll Tusks from the trolls of Zul'Aman."
        },
        {
          "id": 11165,
          "name": "A Troll Among Trolls",
          "faction": "both",
          "questGiver": "Prigmon — Hatchet Hills, Ghostlands",
          "prereq": "Tuskin' Raiders",
          "note": "Find and assist Prigmon's contact Zungam inside Zul'Aman."
        },
        {
          "id": 11195,
          "name": "Playin' With Dolls",
          "faction": "both",
          "questGiver": "Zungam — inside Zul'Aman",
          "prereq": "A Troll Among Trolls",
          "rewards": [ { "id": 34256, "name": "Charmed Amani Jewel" } ],
          "note": "Deliver the Tattered Voodoo Doll to Griftah in Shattrath City."
        },
        {
          "id": 11178,
          "name": "Blood of the Warlord",
          "faction": "both",
          "questGiver": "Starts from the Blood of Zul'jin (Zul'jin drop); turn in to Budd Nedreck — Hatchet Hills",
          "note": "Proof of Zul'jin's defeat; leads to Undercover Sister."
        },
        {
          "id": 11163,
          "name": "Undercover Sister",
          "faction": "both",
          "questGiver": "Donna Brascoe — Hatchet Hills, Ghostlands",
          "prereq": "Blood of the Warlord",
          "rewards": [ { "id": 29434, "name": "Badge of Justice" } ],
          "note": "Report to the undercover Shattrath peacekeeper for slaying Zul'jin. Rewards 10x Badge of Justice."
        }
      ]
    },
    {
      "id": "sunwell-plateau",
      "name": "Sunwell Plateau",
      "type": "raid",
      "zone": "Isle of Quel'Danas",
      "levelRange": [70, 70],
      "phase": "p5",
      "attunement": "No attunement required. In original 2.4 the interior gates (Agamath, Rohendor, Archonisus) unlocked progressively as each realm completed the Shattered Sun Offensive effort on the Isle of Quel'Danas; in TBC Classic the raid opened fully gated only by the phase schedule.",
      "notes": "Sunwell Plateau has no quests inside the instance — all Shattered Sun Offensive quests and dailies take place outside on the Isle of Quel'Danas and in Magisters' Terrace.",
      "quests": []
    }
  ]
}
);
