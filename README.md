# BiS Companion

A best-in-slot gear planner and instance-quest tracker for **WoW Burning Crusade
Classic (Anniversary)**, with a **WotLK toggle** ready for when Wrath re-releases —
delivered as both a desktop web app and an in-game addon that share one data source.

## Running the app

There is no build step and nothing to install. Pick either option:

**Option A — open the file directly (simplest).** Open `app/index.html` in any
browser. The app runs fine from the filesystem because all data ships as script
files, not fetched JSON.

- From Windows: browse to the repo in Explorer and double-click `app\index.html`.
- From a WSL terminal: `explorer.exe app/index.html` (or `wslview app/index.html`)
  opens it in your Windows browser.

**Option B — run the local server.** From the repo root:

```sh
./serve.sh            # serves on http://localhost:8735 and prints the URL
```

Then open <http://localhost:8735> in your browser (WSL ports are reachable from
Windows automatically). Requires `python3`; pass a port to override:
`./serve.sh 9000`. Stop it with `Ctrl+C`.

Either way you need internet access for Wowhead tooltips and item icons — the
app itself works offline, but items will show as plain text links.

### What it does

- **Character setup**: faction → race → class → spec → level bracket. Races filter
  classes correctly per expansion, and each race shows its gear-relevant racials.
- **Gear tab**: a character-pane-style grid of every slot's BiS item. **Hover any
  item for its full Wowhead tooltip** (stats in-app, no tab-switching); click to
  open Wowhead in a new tab. Click a slot to compare alternates, sources, and the
  recommended enchant. Mark items as obtained — progress bar tracks your % BiS.
- **Instance Quests tab**: every quest for each dungeon/raid (faction-filtered),
  with quest givers, prereq chains, rewards, and attunement summaries — check them
  off so you never waste a run. Persisted in your browser.
- **Shopping List tab**: everything you still need, grouped by where to farm it
  (per-instance, badge vendor with total badge cost, rep, crafted…).
- **Search** (`/`): find any item across all loaded data and jump to its context.
- **TBC / WotLK toggle**: switches datasets, Wowhead domain, and the whole theme
  (fel green → frost blue).

## Installing the addon

The addon ships ready to use — `addon/BiSCompanion/Data.lua` is prebuilt, so no
build step is needed unless you've edited the data (see [Data](#data)).

1. **Find your AddOns folder.** For Burning Crusade Classic (Anniversary) it's
   inside the `_classic_` install, e.g. on Windows:

   ```
   C:\Program Files (x86)\World of Warcraft\_classic_\Interface\AddOns\
   ```

   (If `AddOns` doesn't exist yet, create it.)

2. **Copy the folder.** Copy the entire `addon/BiSCompanion/` folder into
   `AddOns` so you end up with `...\AddOns\BiSCompanion\BiSCompanion.toc`.
   The folder must be named exactly `BiSCompanion`. From WSL, for a default
   install:

   ```sh
   cp -r addon/BiSCompanion "/mnt/c/Program Files (x86)/World of Warcraft/_classic_/Interface/AddOns/"
   ```

3. **Enable it.** Fully restart WoW if it was running (a `/reload` is enough for
   later updates, but new addons need a restart). At the character-select
   screen, click **AddOns** (bottom-left) and make sure *BiS Companion* is
   listed and checked. If it's greyed out as "Out of Date", tick **Load out of
   date AddOns** — or bump `## Interface:` in `BiSCompanion.toc` to your
   client's version (currently 20504).

4. **Use it.** In game, type **`/bis`** (or `/bisc`) to toggle the window. It auto-detects your class, faction, and
spec (from talent points; override via the dropdown). Gear rows show a ✓ when the
item is in your bags/bank/equipped; click a row to link the item in chat,
right-click to expand alternates, hover for the real in-game tooltip plus the
source note. The Quests tab reads your actual quest completion flags.
`/bis wotlk` · `/bis tbc` switch expansions; `/bis reset` clears overrides.

## Data

All gear/quest knowledge lives in `app/data/**/*.data.js` — strict JSON wrapped in
`WOWDATA.register(...)`, schema in [`docs/DATA-SCHEMA.md`](docs/DATA-SCHEMA.md).
The web app reads it directly; the addon gets it compiled by the build script.

```sh
node tools/validate-data.mjs      # schema check + coverage report
node tools/build-addon-data.mjs   # regenerate addon/BiSCompanion/Data.lua
```

To fix a wrong item or add a phase: edit the data file, refresh the browser,
re-run the build script for the addon. Item IDs are Wowhead IDs
(`wowhead.com/tbc/item=<id>`).

## Layout

```
app/            the web app (no build step, no dependencies)
  data/         ← single source of truth for all game data
addon/          BiSCompanion — the in-game addon
docs/           data schema
tools/          validator + addon data compiler (Node ≥ 16, no npm deps)
```
