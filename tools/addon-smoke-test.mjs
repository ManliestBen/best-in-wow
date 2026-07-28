#!/usr/bin/env node
// addon-smoke-test.mjs
//
// Headless smoke test for the BiSCompanion WoW addon: actually EXECUTES the
// addon's Lua (Data.lua, Core.lua, UI.lua) inside a real Lua VM (fengari,
// Lua 5.3 semantics) against a mocked WoW client API, so runtime errors
// (nil calls, bad indexing, etc.) are caught without launching the game.
//
// Usage:
//   node tools/addon-smoke-test.mjs
//   node tools/addon-smoke-test.mjs --level 70 --class PALADIN --faction Alliance
//
// Exit code is non-zero if any Lua error was caught during the run, or if
// the harness's own sanity assertions (e.g. "gear tab rendered real rows")
// fail.
//
// IMPORTANT: this file must never modify anything under addon/ — it only
// reads those files and executes them in an isolated Lua state.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { lua, lauxlib, lualib, to_luastring } from "fengari";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const ADDON_DIR = path.join(REPO_ROOT, "addon", "BiSCompanion");

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const opts = { level: 19, class: "WARRIOR", faction: "Horde" };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--level") opts.level = parseInt(argv[++i], 10);
    else if (a === "--class") opts.class = String(argv[++i]).toUpperCase();
    else if (a === "--faction") opts.faction = String(argv[++i]);
    else if (a === "--help" || a === "-h") {
      console.log(
        "Usage: node tools/addon-smoke-test.mjs [--level N] [--class TOKEN] [--faction Alliance|Horde]"
      );
      process.exit(0);
    }
  }
  if (!Number.isFinite(opts.level)) opts.level = 19;
  const faction = opts.faction.toLowerCase() === "alliance" ? "Alliance" : "Horde";
  opts.faction = faction;
  return opts;
}

const CLASS_DISPLAY = {
  WARRIOR: "Warrior",
  PALADIN: "Paladin",
  HUNTER: "Hunter",
  ROGUE: "Rogue",
  PRIEST: "Priest",
  SHAMAN: "Shaman",
  MAGE: "Mage",
  WARLOCK: "Warlock",
  DRUID: "Druid",
  DEATHKNIGHT: "Death Knight",
};

const args = parseArgs(process.argv.slice(2));
const classToken = args.class;
const classDisplay = CLASS_DISPLAY[classToken] || (classToken[0] + classToken.slice(1).toLowerCase());

console.log(
  `[smoke] character: level ${args.level} ${args.faction} ${classDisplay} (${classToken})`
);

// ---------------------------------------------------------------------------
// Lua string escaping helper for values we interpolate into generated Lua
// source (character options come from argv, so keep this defensive).
// ---------------------------------------------------------------------------

function luaStringLiteral(s) {
  return '"' + String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"';
}

// ---------------------------------------------------------------------------
// The mock WoW environment, written in Lua. Everything except `print` is
// implemented in pure Lua — the only JS<->Lua boundary we need is capturing
// print() output, which keeps the harness logic easy to iterate on.
// ---------------------------------------------------------------------------

function buildMockLua({ level, classToken, classDisplay, faction }) {
  return `
-- ===================== WoW mock environment =====================
HARNESS = {
  frames = {},            -- every frame/fontstring/texture ever created
  errors = {},             -- { context=, message= } for every caught error / failed assertion
  invoked = 0,              -- count of handler/event invocations attempted
  dropdownButtons = {},      -- every info table passed to UIDropDownMenu_AddButton, ever
  insertLinkCalls = 0,
  chatOpenCalls = 0,
}

-- ---- generic auto-noop frame factory ----
-- Any method not explicitly implemented below returns a fresh no-op function
-- (memoized onto the object) that returns the frame itself, so deep widget
-- API chains like f:SetBackdrop({...}):Show() never explode from a missing
-- mock method. The methods we DO implement carry real state so the addon's
-- own logic (SetText/GetText, SetChecked/GetChecked, Show/Hide, RegisterEvent
-- + SetScript/GetScript, etc.) behaves like the real client.
local function makeAutoFrame(kind, name, parent, template)
  local obj = {
    __kind = kind, __name = name, __parent = parent, __template = template,
    -- WoW hands back a VISIBLE frame from CreateFrame; mirroring that is what
    -- exposes "first /bis does nothing" style toggle bugs.
    __shown = true, __scripts = {}, __events = {}, __text = "", __checked = false,
    __points = {}, __children = {}, __clicks = {}, __min = 0, __max = 1, __value = 0,
  }

  local known = {}

  known.SetScript = function(self, event, fn) self.__scripts[event] = fn; return self end
  known.GetScript = function(self, event) return self.__scripts[event] end
  known.HookScript = function(self, event, fn)
    local prev = self.__scripts[event]
    self.__scripts[event] = function(...)
      if prev then prev(...) end
      return fn(...)
    end
    return self
  end
  known.RegisterEvent = function(self, e) self.__events[e] = true; return self end
  known.UnregisterEvent = function(self, e) self.__events[e] = nil; return self end
  known.IsEventRegistered = function(self, e) return self.__events[e] == true end

  known.Show = function(self) self.__shown = true; return self end
  known.Hide = function(self) self.__shown = false; return self end
  known.IsShown = function(self) return self.__shown end
  known.IsVisible = function(self) return self.__shown end
  known.SetShown = function(self, b) self.__shown = b and true or false; return self end

  known.SetText = function(self, s) self.__text = s; return self end
  known.GetText = function(self) return self.__text or "" end

  known.SetChecked = function(self, b) self.__checked = b and true or false; return self end
  known.GetChecked = function(self) return self.__checked end

  known.GetName = function(self) return rawget(self, "__name") end
  known.SetPoint = function(self, ...) table.insert(self.__points, {...}); return self end
  known.ClearAllPoints = function(self) self.__points = {}; return self end
  known.GetPoint = function(self, i)
    local p = self.__points[i or 1]
    if not p then return nil end
    return table.unpack(p)
  end

  known.EnableMouse = function(self, b) self.__mouseEnabled = b; return self end
  known.EnableMouseWheel = function(self, b) self.__wheelEnabled = b; return self end
  known.RegisterForClicks = function(self, ...) self.__clicks = {...}; return self end
  known.RegisterForDrag = function(self, ...) self.__drag = {...}; return self end

  known.SetAllPoints = function(self) return self end
  known.StartMoving = function(self) return self end
  known.StopMovingOrSizing = function(self) return self end
  known.LockHighlight = function(self) self.__highlighted = true; return self end
  known.UnlockHighlight = function(self) self.__highlighted = false; return self end

  known.SetMinMaxValues = function(self, a, b) self.__min, self.__max = a, b; return self end
  known.GetMinMaxValues = function(self) return self.__min, self.__max end
  known.SetValue = function(self, v) self.__value = v; return self end
  known.GetValue = function(self) return self.__value end
  known.SetTextColor = function(self, r, g, b, a) self.__color = { r, g, b, a }; return self end
  known.GetObjectType = function(self) return self.__kind end

  known.CreateFontString = function(self, fname, layer, tmpl)
    local fs = makeAutoFrame("FontString", fname, self, tmpl)
    table.insert(self.__children, fs)
    table.insert(HARNESS.frames, fs)
    if fname and fname ~= "" then _G[fname] = fs end
    return fs
  end
  known.CreateTexture = function(self, tname, layer, tmpl)
    local tex = makeAutoFrame("Texture", tname, self, tmpl)
    table.insert(self.__children, tex)
    table.insert(HARNESS.frames, tex)
    if tname and tname ~= "" then _G[tname] = tex end
    return tex
  end

  -- NOTE: deliberately does NOT rawset/memoize the synthesized no-op onto
  -- the table. Frame *methods* are always looked up through __index at the
  -- call site (frame:Foo()), so a fresh closure each time is indistinguishable
  -- from a memoized one there — but the harness (and the addon itself, e.g.
  -- BiSCompanionFrame.expBtn existence checks, or row.data/row.item custom
  -- fields) also probes plain *data* fields for nil-ness. Memoizing would
  -- turn every such probe into a permanent, truthy, wrong field.
  --
  -- Likewise __index can't unconditionally synthesize a function for EVERY
  -- unknown key: the addon stores its own nil-able data on frames (row.data,
  -- row.item, ...) using lowercase keys, and code like
  --   local d = self.data; if not d then return end
  -- breaks if a merely-unset field comes back as a truthy fake function
  -- instead of real nil. Every actual Blizzard frame method
  -- (SetText, GetPoint, EnableMouse, ...) is PascalCase, so only synthesize
  -- the no-op for keys that look like a real API method call; anything else
  -- falls through to genuine nil, exactly like an unset field on a real
  -- WoW frame would.
  local mt = {}
  mt.__index = function(t, k)
    local kv = known[k]
    if kv ~= nil then return kv end
    if type(k) == "string" and k:match("^%u") then
      return function(self_, ...) return self_ end
    end
    return nil
  end
  setmetatable(obj, mt)
  return obj
end

function CreateFrame(kind, name, parent, template)
  local f = makeAutoFrame(kind or "Frame", name, parent, template)
  table.insert(HARNESS.frames, f)
  if name and name ~= "" then _G[name] = f end
  if parent and parent.__children then table.insert(parent.__children, f) end
  return f
end

-- ---- top-level UI globals ----
UIParent = CreateFrame("Frame", "UIParent")
UISpecialFrames = {}
GameTooltip = CreateFrame("Frame", "GameTooltip")

ITEM_QUALITY_COLORS = {
  [0] = { r = 0.62, g = 0.62, b = 0.62, hex = "|cff9d9d9d" }, -- poor
  [1] = { r = 1.00, g = 1.00, b = 1.00, hex = "|cffffffff" }, -- common
  [2] = { r = 0.12, g = 1.00, b = 0.00, hex = "|cff1eff00" }, -- uncommon
  [3] = { r = 0.00, g = 0.44, b = 0.87, hex = "|cff0070dd" }, -- rare
  [4] = { r = 0.64, g = 0.21, b = 0.93, hex = "|cffa335ee" }, -- epic
  [5] = { r = 1.00, g = 0.50, b = 0.00, hex = "|cffff8000" }, -- legendary
}

function wipe(t)
  for k in pairs(t) do t[k] = nil end
  return t
end
tinsert = table.insert
tremove = table.remove

function ChatEdit_InsertLink(link)
  HARNESS.insertLinkCalls = HARNESS.insertLinkCalls + 1
  -- alternate true/false so both the "inserted into open chat edit box" and
  -- the "opened a new chat frame" code paths get exercised across a session
  return (HARNESS.insertLinkCalls % 2 == 0)
end
function ChatFrame_OpenChat(msg)
  HARNESS.chatOpenCalls = HARNESS.chatOpenCalls + 1
end

function GetItemInfo(id)
  if not id or id == 0 then return nil end
  local name = "Mock Item " .. tostring(id)
  local quality = 4
  local link = "|cffa335ee|Hitem:" .. tostring(id) .. "::::::::70:::::|h[" .. name .. "]|h|r"
  return name, link, quality, 70, 1, "Armor", "Plate", 1, "INVTYPE_CHEST",
    "Interface\\\\Icons\\\\INV_Misc_QuestionMark", 100, 4, 0, 1, 0
end

function GetItemCount(id, bank)
  if not id or id == 0 then return 0 end
  -- deterministic ~25% "already own it" split, so progress bars / shopping
  -- lists exercise both the "have" and "missing" rendering branches.
  if (id % 4 == 0) then return 1 end
  return 0
end

C_QuestLog = { IsQuestFlaggedCompleted = function(id) return false end }

SlashCmdList = {}

function UnitClass(unit)
  return ${luaStringLiteral(classDisplay)}, ${luaStringLiteral(classToken)}
end
function UnitLevel(unit)
  return ${Number.isFinite(level) ? level : 19}
end
function UnitFactionGroup(unit)
  return ${luaStringLiteral(faction)}
end

function GetNumTalentTabs()
  return 3
end
local TALENT_POINTS = { 5, 30, 10 } -- tab 2 deliberately highest
-- Mirror the real 2.5.6 client, where the third return is a STRING. Reading
-- points positionally must fail here, the way it failed in game.
function GetTalentTabInfo(i)
  return "Talent Tab " .. tostring(i), 134400, "Interface\\\\TalentFrame\\\\bg" .. tostring(i), TALENT_POINTS[i] or 0
end
-- Rank-summing path: 1 talent per tab holding all the points.
function GetNumTalents(tab)
  return 1
end
function GetTalentInfo(tab, index)
  return "Talent " .. tostring(tab) .. "-" .. tostring(index), 134400, 1, 1, TALENT_POINTS[tab] or 0, 5
end

-- ---- UIDropDownMenu_* mocks ----
-- Initialize actually RUNS the addon's initializer function immediately
-- (simulating "the player opened this dropdown"), capturing every button
-- info (including its .func click closure) so the harness can invoke every
-- dropdown entry, not just the visible button.
local CURRENT_DD_SINK = nil
function UIDropDownMenu_SetWidth(dd, w) if dd then dd.__width = w end end
function UIDropDownMenu_CreateInfo() return {} end
function UIDropDownMenu_Initialize(dd, initFunc)
  if dd then dd.__initFunc = initFunc end
  local sink = {}
  local prevSink = CURRENT_DD_SINK
  CURRENT_DD_SINK = sink
  local ok, err = pcall(initFunc)
  CURRENT_DD_SINK = prevSink
  if dd then dd.__lastButtons = sink end
  if not ok then error(err, 0) end
end
function UIDropDownMenu_AddButton(info, level)
  if CURRENT_DD_SINK then table.insert(CURRENT_DD_SINK, info) end
  table.insert(HARNESS.dropdownButtons, info)
end
function UIDropDownMenu_SetText(dd, text) if dd then dd.__text = text end end

-- ===================== end mock environment =====================
`;
}

// ---------------------------------------------------------------------------
// The driver, also written in Lua: fires events, opens the window, walks
// every tab, and invokes every stored handler it can find. Every action is
// wrapped so one failure doesn't stop the rest of the sweep — we want the
// full list of bugs from a single run, not just the first one.
// ---------------------------------------------------------------------------

const DRIVER_LUA = String.raw`
-- ===================== driver =====================
-- Bookkeeping fields (__name, __kind, __scripts, ...) and app-assigned data
-- fields (row.check, f.expBtn, ...) can legitimately be nil/absent on a mock
-- frame. Plain "." access for an absent key falls through the auto-noop
-- __index and returns a truthy stub function instead of nil, which breaks
-- any "or"/existence check. rf() (rawget) is the safe way to read them.
local function rf(t, k) return rawget(t, k) end

local function stripColor(s)
  s = tostring(s or "")
  s = s:gsub("|c%x%x%x%x%x%x%x%x", ""):gsub("|r", "")
  return s
end

local function safeCall(context, fn, ...)
  HARNESS.invoked = HARNESS.invoked + 1
  local args = { ... }
  local nargs = select("#", ...)
  local ok, err = xpcall(function() return fn(table.unpack(args, 1, nargs)) end, debug.traceback)
  if not ok then
    table.insert(HARNESS.errors, { context = context, message = tostring(err) })
    print("SMOKE_ERROR|" .. context .. "|" .. tostring(err):gsub("\n", "\\n"))
  end
  return ok
end

local function assertTrue(context, cond, msg)
  if not cond then
    local m = "ASSERTION FAILED: " .. msg
    table.insert(HARNESS.errors, { context = context, message = m })
    print("SMOKE_ERROR|" .. context .. "|" .. m)
  end
end

-- IMPORTANT: our auto-noop CreateFrame mock's __index returns a fresh no-op
-- function for ANY unknown key (that's what makes the huge widget API
-- surface tractable) — which means normal field access like "fr.check"
-- is ALWAYS truthy, even on frames that never had a .check field assigned.
-- To tell "genuinely assigned" apart from "auto-noop fallback" we must use
-- rawget(), which bypasses the metatable entirely.
local function isListRow(fr)
  return type(fr) == "table"
    and rawget(fr, "nameText") ~= nil
    and rawget(fr, "slotText") ~= nil
    and rawget(fr, "check") ~= nil
end

-- Row rendering summary via the mock FontStrings' actual SetText() output —
-- BISC keeps its list data (listData/rows) as UI.lua module locals, so
-- this is the only externally observable signal that a tab actually
-- rendered real content vs. an empty/"no data" state.
local function summarizeRows(label)
  local shown, real = 0, 0
  local samples = {}
  for _, fr in ipairs(HARNESS.frames) do
    if isListRow(fr) and fr:IsShown() then
      shown = shown + 1
      local checkFS = rawget(fr, "check")
      if checkFS:IsShown() then
        real = real + 1
        if #samples < 3 then
          table.insert(samples, stripColor(rawget(fr, "nameText"):GetText()))
        end
      end
    end
  end
  print(string.format("@@SMOKE@@ rows|%s|shown=%d|real=%d", label, shown, real))
  for _, s in ipairs(samples) do
    print("@@SMOKE@@ sample|" .. label .. "|" .. s)
  end
  return shown, real
end

print("@@SMOKE@@ phase=start")

-- (a) ADDON_LOADED then PLAYER_LOGIN, fired on whichever frame(s) registered
-- for them (BiSCompanion's Core.lua creates its own anonymous event frame).
local addonLoadedFrames = {}
for _, fr in ipairs(HARNESS.frames) do
  if fr.__events and (fr.__events["ADDON_LOADED"] or fr.__events["PLAYER_LOGIN"]) and fr.__scripts.OnEvent then
    table.insert(addonLoadedFrames, fr)
  end
end
assertTrue("startup", #addonLoadedFrames > 0, "no frame registered for ADDON_LOADED/PLAYER_LOGIN — Core.lua's event frame never ran")
for _, fr in ipairs(addonLoadedFrames) do
  if fr.__events["ADDON_LOADED"] then
    safeCall("event:ADDON_LOADED", fr.__scripts.OnEvent, fr, "ADDON_LOADED", "BiSCompanion")
  end
end
for _, fr in ipairs(addonLoadedFrames) do
  if fr.__events["PLAYER_LOGIN"] then
    safeCall("event:PLAYER_LOGIN", fr.__scripts.OnEvent, fr, "PLAYER_LOGIN")
  end
end

assertTrue("InitDB", BISC.db ~= nil, "BISC.db was never initialized by ADDON_LOADED")
assertTrue("DefaultBracket", BISC.db and BISC.db.bracket ~= nil, "BISC.db.bracket was never filled in by PLAYER_LOGIN")

-- (b) /bis (open the window)
safeCall("slash:/bis", SlashCmdList.BISCOMPANION, "")
assertTrue("slash:/bis", BISC.UI and BISC.UI:IsShown(), "BISC.UI:IsShown() is false after /bis — window did not open")

-- (c) walk every tab, verify real rows render
-- Quests never depend on class (BISC:Instances() is expansion-only data), but
-- gear/shopping legitimately render nothing for a class with no ClassData for
-- this expansion (e.g. Death Knight on tbc, pre-WotLK) — that's correct
-- behavior, not a bug, so only hard-assert non-empty rows where data should
-- actually exist.
local classHasData = BISC:ClassData() ~= nil
local tabRowCounts = {}
for _, tab in ipairs({ "gear", "quests", "shopping" }) do
  safeCall("ShowTab:" .. tab, function() BISC.UI:ShowTab(tab) end)
  assertTrue("ShowTab:" .. tab, BISC.db.tab == tab, "BISC.db.tab did not update to '" .. tab .. "'")
  local shown, real = summarizeRows(tab)
  tabRowCounts[tab] = { shown = shown, real = real }
  if tab == "quests" or classHasData then
    assertTrue("ShowTab:" .. tab, real > 0, "tab '" .. tab .. "' rendered zero real item/quest rows for a fresh " ..
      tostring(BISC.db.expansion) .. " " .. tostring(BISC:PlayerClass()) .. " character (only headers/messages, or nothing)")
  else
    print("@@SMOKE@@ note|" .. tab .. "|skipped non-empty-rows check: BISC:ClassData() is nil for " ..
      tostring(BISC:PlayerClass()) .. " on " .. tostring(BISC.db.expansion) .. " (no data for this class — expected)")
  end
end

-- (d) exercise every clickable control the addon created: every stored
-- OnClick / OnEnter / OnLeave / OnMouseWheel handler on every frame, plus
-- every dropdown entry's info.func, at least once. This is the part most
-- likely to surface a real Lua bug (a handler that only runs on user input
-- and was never touched by hand-testing).
--
-- Deliberately a growing index loop, not a fixed snapshot: UI.lua's
-- hand-rolled Menu widget (see CreateMenu/Menu:Layout) creates its row
-- Buttons lazily, the first time a menu is opened via its button's OnClick.
-- Those new rows land in HARNESS.frames mid-sweep and must be swept too, or
-- every dropdown/menu item's own OnClick would go completely untested.
local sweepIndex = 1
while sweepIndex <= #HARNESS.frames do
  local fr = HARNESS.frames[sweepIndex]
  sweepIndex = sweepIndex + 1
  local label = rf(fr, "__name") or fr.__kind or "frame"
  if fr.__kind == "CheckButton" and fr.__scripts.OnClick then
    fr:SetChecked(not fr:GetChecked()) -- a real click toggles state before OnClick fires
  end
  if fr.__scripts.OnClick then
    if fr.__clicks and fr.__clicks[2] then -- registered for more than one button (e.g. list rows)
      safeCall("OnClick:" .. label .. ":LeftButton", fr.__scripts.OnClick, fr, "LeftButton")
      safeCall("OnClick:" .. label .. ":RightButton", fr.__scripts.OnClick, fr, "RightButton")
    else
      safeCall("OnClick:" .. label, fr.__scripts.OnClick, fr, "LeftButton")
    end
  end
  if fr.__scripts.OnEnter then
    safeCall("OnEnter:" .. label, fr.__scripts.OnEnter, fr)
  end
  if fr.__scripts.OnLeave then
    safeCall("OnLeave:" .. label, fr.__scripts.OnLeave, fr)
  end
  if fr.__scripts.OnMouseWheel then
    safeCall("OnMouseWheel:" .. label .. ":down", fr.__scripts.OnMouseWheel, fr, -1)
    safeCall("OnMouseWheel:" .. label .. ":up", fr.__scripts.OnMouseWheel, fr, 1)
  end
  if fr.__scripts.OnEscapePressed then
    safeCall("OnEscapePressed:" .. label, fr.__scripts.OnEscapePressed, fr)
  end
end

local ddSnapshot = {}
for i, info in ipairs(HARNESS.dropdownButtons) do ddSnapshot[i] = info end
local ddInvoked = 0
for _, info in ipairs(ddSnapshot) do
  if type(info) == "table" and type(info.func) == "function" then
    ddInvoked = ddInvoked + 1
    safeCall("dropdown:" .. stripColor(info.text or "?"), info.func)
  end
end
print("@@SMOKE@@ dropdown_entries_invoked=" .. ddInvoked)

-- The blind sweep above clicked EVERY control including the expansion
-- toggle, which flips BISC.db.expansion to whatever isn't currently active
-- (wotlk is a tiny preview dataset). Restore tbc (the expansion with real
-- data) before the search assertions below, which expect real matches.
if BISC.db.expansion ~= "tbc" then
  safeCall("post-sweep:restore-tbc", function() BISC:SwitchExpansion("tbc") end)
  if BISC.UI then safeCall("post-sweep:restore-tbc-refresh", function() BISC.UI:Refresh() end) end
end

safeCall("force TBC before search", function()
  BISC.db.expansion = "tbc"; BISC.db.spec = nil; BISC.db.bracket = BISC:DefaultBracket()
end)
-- minimap + level-up checks
Minimap = Minimap or CreateFrame("Frame", "Minimap", UIParent)
GetCursorPosition = function() return 600, 400 end
safeCall("minimap+levelup", function()
  for _, fr in ipairs(HARNESS.frames) do
    if fr.__events and fr.__events["PLAYER_LOGIN"] and fr.__scripts.OnEvent then
      fr.__scripts.OnEvent(fr, "PLAYER_LOGIN")
    end
  end
  local mb = _G["BiSCompanionMinimapButton"]
  if not mb then error("minimap button was never created") end
  if mb.__scripts.OnEnter then mb.__scripts.OnEnter(mb) end
  if mb.__scripts.OnClick then mb.__scripts.OnClick(mb, "RightButton") end
  if mb.__scripts.OnDragStart then mb.__scripts.OnDragStart(mb) end
  if mb.__scripts.OnUpdate then mb.__scripts.OnUpdate(mb) end
  if mb.__scripts.OnDragStop then mb.__scripts.OnDragStop(mb) end
  print("@@MINIMAP@@ button created and all handlers ran")

  BISC.db.bracket = "lvl19"; BISC.db.bracketPinned = nil
  for _, fr in ipairs(HARNESS.frames) do
    if fr.__events and fr.__events["PLAYER_LEVEL_UP"] and fr.__scripts.OnEvent then
      fr.__scripts.OnEvent(fr, "PLAYER_LEVEL_UP", 24)
    end
  end
  print("@@LEVELUP@@ bracket now " .. tostring(BISC.db.bracket))
  if BISC.db.bracket ~= "lvl29" then error("level 24 should move to lvl29, got " .. tostring(BISC.db.bracket)) end
end)
-- statLine (gear) and instanceInfo (quests) share one anchor; if both ever
-- show at once their text draws on top of itself.
safeCall("no-overlapping-headers", function()
  local frame = _G["BiSCompanionFrame"]
  if not frame then error("BiSCompanionFrame not found") end
  local sl, ii = frame.statLine, frame.instanceInfo
  if not (sl and ii) then error("statLine/instanceInfo missing") end

  BISC.UI:ShowTab("quests")
  local slText = (sl.GetText and sl:GetText()) or ""
  local slShown = (sl.IsShown and sl:IsShown()) and true or false
  if slShown and slText ~= "" then
    error("stat-priority line still drawn on the Quests tab (overlaps instance info): '" .. slText .. "'")
  end

  BISC.UI:ShowTab("gear")
  if (ii.IsShown and ii:IsShown()) then
    error("instance-info line still drawn on the Gear tab (overlaps stat priority)")
  end
  print("@@OVERLAP@@ header lines are mutually exclusive")
end)

-- bracket stepping (< > buttons and menu selection)
safeCall("bracket-stepping", function()
  if not BISC:ClassData() then return end
  BISC.UI:ShowTab("gear")
  local before = BISC.db.bracket
  BISC.UI:StepBracket(1)
  if BISC.db.bracket == before then error("StepBracket(1) did not advance from " .. tostring(before)) end
  BISC.UI:StepBracket(-1)
  if BISC.db.bracket ~= before then
    error("StepBracket(-1) landed on " .. tostring(BISC.db.bracket) .. ", expected " .. tostring(before))
  end
  for _ = 1, 30 do BISC.UI:StepBracket(1) end
  local top = BISC.db.bracket
  BISC.UI:StepBracket(1)
  if BISC.db.bracket ~= top then error("stepping ran past the last bracket") end
  if not BISC.db.bracketPinned then error("looking ahead should pin the bracket") end
  for _ = 1, 30 do BISC.UI:StepBracket(-1) end
  local bottom = BISC.db.bracket
  print("@@BRACKET@@ " .. tostring(before) .. " -> top " .. tostring(top) .. " -> bottom " .. tostring(bottom))
  -- picking the level-appropriate bracket hands control back to auto
  BISC.UI:SetBracket(BISC:DefaultBracket())
  if BISC.db.bracketPinned then error("selecting the level-matched bracket should unpin") end
end)
-- zone-change / instance auto-select check
IsInInstance = function() return true, "party" end
GetInstanceInfo = function() return "Ragefire Chasm" end
GetRealZoneText = function() return "Ragefire Chasm" end
safeCall("zone-change", function()
  for _, fr in ipairs(HARNESS.frames) do
    if fr.__events and fr.__events["ZONE_CHANGED_NEW_AREA"] and fr.__scripts.OnEvent then
      fr.__scripts.OnEvent(fr, "ZONE_CHANGED_NEW_AREA")
    end
  end
  local idx = BISC:FindInstanceByName("Ragefire Chasm")
  if not idx then error("FindInstanceByName('Ragefire Chasm') found nothing") end
  local idx2 = BISC:FindInstanceByName("The Deadmines")
  if not idx2 then error("FindInstanceByName('The Deadmines') found nothing") end
  print("@@ZONE@@ matched RFC index " .. idx .. ", Deadmines index " .. idx2)
end)
-- tooltip index check
safeCall("tooltip-hits", function()
  -- pick a real item id from THIS character's own data rather than hardcoding one
  local probeId
  local cd = BISC:ClassData()
  if cd then
    for _, spec in ipairs(cd.specs or {}) do
      for _, br in ipairs(spec.brackets or {}) do
        for _, items in pairs(br.slots or {}) do
          for _, it in ipairs(items or {}) do
            if it.id and it.id > 0 then probeId = probeId or it.id end
          end
        end
      end
    end
  end
  if not probeId then
    -- A class with no ClassData for this expansion (e.g. Death Knight on
    -- tbc) has nothing to probe — that's expected, not a bug; skip quietly.
    print("@@SMOKE@@ note|tooltip-hits|skipped: BISC:ClassData() is nil for " .. tostring(BISC:PlayerClass()))
    return
  end
  local hits = BISC:TooltipHits(probeId)
  if not hits or #hits == 0 then error("TooltipHits(" .. probeId .. ") returned nothing") end
  print("@@TIPS@@ " .. #hits .. " hit(s); first = " .. hits[1].specName .. " / " .. hits[1].bracketName .. " / " .. hits[1].slot .. " rank " .. hits[1].rank)
  local none = BISC:TooltipHits(999999)
  if none then error("TooltipHits(999999) should be nil for an unknown item") end
end)
-- (e) search box: set text + fire OnTextChanged, verify results appear
safeCall("ShowTab:gear (pre-search)", function() BISC.UI:ShowTab("gear") end)
local searchBox = _G["BiSCompanionSearchBox"]
assertTrue("search", searchBox ~= nil, "BiSCompanionSearchBox was never created/registered globally")
if searchBox then
  searchBox:SetText("band")
  local onChanged = searchBox:GetScript("OnTextChanged")
  assertTrue("search", onChanged ~= nil, "search box has no OnTextChanged handler")
  if onChanged then
    safeCall("search:OnTextChanged('band')", onChanged, searchBox)
    local shown, real = summarizeRows("gear-search-band")
    if classHasData then
      assertTrue("search", real > 0, "searching \"band\" produced zero result rows (expected real TBC item matches)")
    end
  end
  -- clear the query so later state is sane
  searchBox:SetText("")
  local onChanged2 = searchBox:GetScript("OnTextChanged")
  if onChanged2 then safeCall("search:OnTextChanged('')", onChanged2, searchBox) end
end

-- (f) expansion toggle + both-factions checkbox, with explicit before/after assertions
local expBtn = nil
for _, fr in ipairs(HARNESS.frames) do
  if fr.__scripts and fr.__scripts.OnClick and fr.__points then
    -- identified structurally below via BiSCompanionFrame.expBtn instead
  end
end
local mainFrame = _G["BiSCompanionFrame"]
local expBtn = mainFrame and rawget(mainFrame, "expBtn")
if expBtn then
  local before = BISC.db.expansion
  local otherAvailable = BISC:OtherExpansion()
  safeCall("expansionToggle:OnClick", rawget(expBtn, "__scripts").OnClick, expBtn)
  if otherAvailable then
    assertTrue("expansionToggle", BISC.db.expansion ~= before, "clicking the expansion toggle did not change BISC.db.expansion (was '" .. tostring(before) .. "')")
    print("@@SMOKE@@ expansion_toggle|" .. tostring(before) .. "->" .. tostring(BISC.db.expansion))
  end
  -- switch back to tbc (the expansion with real data) for a clean final state
  if BISC.db.expansion ~= "tbc" then
    safeCall("expansionToggle:restore", function() BISC:SwitchExpansion("tbc") end)
    if BISC.UI then safeCall("expansionToggle:restore-refresh", function() BISC.UI:Refresh() end) end
  end
else
  assertTrue("expansionToggle", false, "BiSCompanionFrame.expBtn not found — cannot exercise expansion toggle")
end

safeCall("ShowTab:quests (pre-bothfactions)", function() BISC.UI:ShowTab("quests") end)
local bothFactionsCB = mainFrame and rawget(mainFrame, "bothFactionsCB")
if bothFactionsCB then
  local before = BISC.db.showBothFactions
  bothFactionsCB:SetChecked(not bothFactionsCB:GetChecked())
  safeCall("bothFactions:OnClick", rawget(bothFactionsCB, "__scripts").OnClick, bothFactionsCB)
  assertTrue("bothFactions", BISC.db.showBothFactions ~= before, "clicking the both-factions checkbox did not change BISC.db.showBothFactions")
  print("@@SMOKE@@ both_factions|" .. tostring(before) .. "->" .. tostring(BISC.db.showBothFactions))
else
  assertTrue("bothFactions", false, "BiSCompanionFrame.bothFactionsCB not found — cannot exercise both-factions checkbox")
end

-- (extra) mousewheel scroll on the main window itself
if mainFrame and rawget(mainFrame, "__scripts").OnMouseWheel then
  local onWheel = rawget(mainFrame, "__scripts").OnMouseWheel
  safeCall("mainFrame:OnMouseWheel:down", onWheel, mainFrame, -1)
  safeCall("mainFrame:OnMouseWheel:up", onWheel, mainFrame, 1)
end

-- ---- summary ----
print("@@SMOKE@@ phase=summary")
print("@@SMOKE@@ frames_created=" .. #HARNESS.frames)
print("@@SMOKE@@ handlers_invoked=" .. HARNESS.invoked)
print("@@SMOKE@@ dropdown_buttons_captured=" .. #HARNESS.dropdownButtons)
print("@@SMOKE@@ chat_link_inserts=" .. HARNESS.insertLinkCalls)
print("@@SMOKE@@ chat_frame_opens=" .. HARNESS.chatOpenCalls)
print("@@SMOKE@@ errors=" .. #HARNESS.errors)
for tab, counts in pairs(tabRowCounts) do
  print(string.format("@@SMOKE@@ final_rows|%s|shown=%d|real=%d", tab, counts.shown, counts.real))
end
print("@@SMOKE@@ phase=done")
-- ===================== end driver =====================
`;

// ---------------------------------------------------------------------------
// Fengari plumbing
// ---------------------------------------------------------------------------

const capturedPrints = [];

function installPrint(L) {
  lua.lua_pushjsfunction(L, (L) => {
    const n = lua.lua_gettop(L);
    const parts = [];
    for (let i = 1; i <= n; i++) {
      let s = lua.lua_tojsstring(L, i);
      if (s === null) {
        s = `<${lauxlib.luaL_typename(L, i)}>`;
      }
      parts.push(s);
    }
    capturedPrints.push(parts.join("\t"));
    return 0;
  });
  lua.lua_setglobal(L, "print");
}

// Loads + calls a Lua chunk with a debug.traceback message handler, so any
// error (whether raised by the addon, our driver, or a genuine mock gap)
// comes back as a full Lua traceback rather than a bare one-line message.
function runChunk(L, source, chunkname, args = []) {
  const src = to_luastring(source);
  const name = to_luastring("@" + chunkname);

  lua.lua_getglobal(L, "debug");
  lua.lua_getfield(L, -1, "traceback");
  lua.lua_remove(L, -2);
  const msgh = lua.lua_gettop(L);

  const loadStatus = lauxlib.luaL_loadbuffer(L, src, src.length, name);
  if (loadStatus !== lua.LUA_OK) {
    const err = lua.lua_tojsstring(L, -1);
    lua.lua_pop(L, 1);
    lua.lua_remove(L, msgh);
    return { ok: false, error: err };
  }

  for (const a of args) lua.lua_pushstring(L, a);
  const callStatus = lua.lua_pcall(L, args.length, 0, msgh);

  let result;
  if (callStatus !== lua.LUA_OK) {
    result = { ok: false, error: lua.lua_tojsstring(L, -1) };
    lua.lua_pop(L, 1);
  } else {
    result = { ok: true };
  }
  lua.lua_remove(L, msgh);
  return result;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function fail(context, error) {
  console.error(`\n[smoke] FATAL during ${context}:\n`);
  console.error(error);
  console.error(`\n[smoke] FAIL\n`);
  process.exitCode = 1;
}

function main() {
  const L = lauxlib.luaL_newstate();
  lualib.luaL_openlibs(L);
  installPrint(L);

  const mockSource = buildMockLua({
    level: args.level,
    classToken,
    classDisplay,
    faction: args.faction,
  });

  const steps = [
    { name: "mock environment", source: mockSource, args: [] },
    {
      name: "Data.lua",
      source: fs.readFileSync(path.join(ADDON_DIR, "Data.lua"), "utf8"),
      args: [],
    },
    {
      name: "Core.lua",
      source: fs.readFileSync(path.join(ADDON_DIR, "Core.lua"), "utf8"),
      args: ["BiSCompanion"], // Core.lua: local ADDON = ...
    },
    {
      name: "UI.lua",
      source: fs.readFileSync(path.join(ADDON_DIR, "UI.lua"), "utf8"),
      args: [],
    },
    {
      name: "Tooltip.lua",
      source: fs.readFileSync(path.join(ADDON_DIR, "Tooltip.lua"), "utf8"),
      args: [],
    },
    {
      name: "Minimap.lua",
      source: fs.readFileSync(path.join(ADDON_DIR, "Minimap.lua"), "utf8"),
      args: [],
    },
  ];

  for (const step of steps) {
    const chunkname =
      step.name === "mock environment" ? "mock-environment" : `addon/BiSCompanion/${step.name}`;
    const result = runChunk(L, step.source, chunkname, step.args);
    if (!result.ok) {
      flushPrints();
      fail(`loading ${step.name}`, result.error);
      return;
    }
  }

  const driverResult = runChunk(L, DRIVER_LUA, "smoke-driver", []);
  flushPrints();

  if (!driverResult.ok) {
    fail("running the driver script", driverResult.error);
    return;
  }

  report();
}

function flushPrints() {
  // Surface any print() the addon itself made (e.g. the greeting message)
  // alongside our @@SMOKE@@/SMOKE_ERROR markers, in original order. The
  // B:Safe swallowed-error lines are deliberately skipped here — they're
  // deduped and reported in their own section by report(), since a single
  // broken handler can otherwise print the same message ~18 times (once per
  // list row) during the sweep.
  for (const line of capturedPrints) {
    if (line.startsWith("@@SMOKE@@") || line.startsWith("SMOKE_ERROR|")) continue;
    if (ADDON_SAFE_ERROR_RE.test(line) || line === "|cffff4040Please send this to the author.|r") continue;
    console.log(`[addon print] ${line}`);
  }
}

// Core.lua's B:Safe(label, fn, ...) wraps most UI entry points in its own
// internal pcall and, on failure, just prints a chat message instead of
// re-raising — the client would otherwise silently swallow the error, so
// the addon intentionally reports it via print() and returns normally. That
// means these errors are INVISIBLE to our xpcall-based sweep (the call
// looks like it succeeded) and can only be caught by scanning print output
// for the addon's own error-report format:
//   |cffff4040BiS Companion error|r [label] file:line: message
//   |cffff4040Please send this to the author.|r
const ADDON_SAFE_ERROR_RE = /^\|cffff4040BiS Companion error\|r \[(.*?)\] (.*)$/;

function report() {
  const smokeLines = capturedPrints.filter((l) => l.startsWith("@@SMOKE@@"));
  const errorLines = capturedPrints.filter((l) => l.startsWith("SMOKE_ERROR|"));
  const addonSwallowedErrors = [];
  for (const line of capturedPrints) {
    const m = line.match(ADDON_SAFE_ERROR_RE);
    if (m) addonSwallowedErrors.push({ label: m[1], message: m[2] });
  }

  const metrics = {};
  const rows = {};
  const samples = {};
  for (const line of smokeLines) {
    const body = line.slice("@@SMOKE@@ ".length);
    if (body.startsWith("rows|") || body.startsWith("final_rows|")) {
      const [, tab, shownPart, realPart] = body.split("|");
      rows[tab] = {
        shown: parseInt(shownPart.split("=")[1], 10),
        real: parseInt(realPart.split("=")[1], 10),
      };
    } else if (body.startsWith("sample|")) {
      const [, tab, ...rest] = body.split("|");
      (samples[tab] = samples[tab] || []).push(rest.join("|"));
    } else if (body.includes("=") && !body.includes("phase=")) {
      const idx = body.indexOf("=");
      metrics[body.slice(0, idx)] = body.slice(idx + 1);
    }
  }

  console.log("\n[smoke] ==================== SUMMARY ====================");
  console.log(`[smoke] character: level ${args.level} ${args.faction} ${classDisplay} (${classToken})`);
  console.log(`[smoke] frames created:      ${metrics.frames_created ?? "?"}`);
  console.log(`[smoke] handlers invoked:    ${metrics.handlers_invoked ?? "?"}`);
  console.log(`[smoke] dropdown entries:    ${metrics.dropdown_buttons_captured ?? "?"} captured, ${metrics.dropdown_entries_invoked ?? "?"} invoked`);
  console.log(`[smoke] chat link inserts:   ${metrics.chat_link_inserts ?? "?"}  chat frame opens: ${metrics.chat_frame_opens ?? "?"}`);
  console.log("[smoke] tab row rendering:");
  for (const tab of Object.keys(rows)) {
    const r = rows[tab];
    console.log(`[smoke]   ${tab.padEnd(20)} shown=${r.shown}  real=${r.real}`);
    for (const s of samples[tab] || []) {
      console.log(`[smoke]     e.g. "${s}"`);
    }
  }

  // Dedupe the addon's own swallowed errors (the same handler bug typically
  // fires on every one of the ~18 list rows we click, which would otherwise
  // print the same [row-click] message 18 times).
  const dedupedSwallowed = new Map(); // "label|message" -> count
  for (const e of addonSwallowedErrors) {
    const key = e.label + "|" + e.message;
    dedupedSwallowed.set(key, (dedupedSwallowed.get(key) ?? 0) + 1);
  }

  const harnessErrorCount = parseInt(metrics.errors ?? String(errorLines.length), 10) || errorLines.length;
  const swallowedErrorCount = dedupedSwallowed.size;
  const errorCount = harnessErrorCount + swallowedErrorCount;

  console.log(`[smoke] errors caught:       ${errorCount}  (${harnessErrorCount} uncaught/assertion, ${swallowedErrorCount} unique B:Safe-swallowed)`);

  if (errorLines.length > 0) {
    console.log("\n[smoke] ---------------- UNCAUGHT ERRORS / FAILED ASSERTIONS ----------------");
    let i = 0;
    for (const line of errorLines) {
      i++;
      const rest = line.slice("SMOKE_ERROR|".length);
      const sep = rest.indexOf("|");
      const context = sep === -1 ? rest : rest.slice(0, sep);
      const message = (sep === -1 ? "" : rest.slice(sep + 1)).replace(/\\n/g, "\n");
      console.log(`\n[smoke] (${i}) trigger: ${context}`);
      console.log(message.split("\n").map((l) => "[smoke]     " + l).join("\n"));
    }
  }

  if (dedupedSwallowed.size > 0) {
    console.log(
      "\n[smoke] ---------------- ADDON-CAUGHT ERRORS (B:Safe swallowed these — client would too) ----------------"
    );
    let i = 0;
    for (const [key, count] of dedupedSwallowed) {
      i++;
      const sep = key.indexOf("|");
      const label = key.slice(0, sep);
      const message = key.slice(sep + 1);
      console.log(`\n[smoke] (${i}) B:Safe label "${label}" — hit ${count}x during the sweep`);
      console.log(`[smoke]     ${message}`);
    }
  }

  console.log("\n[smoke] ===================================================");
  if (errorCount > 0) {
    console.log(`[smoke] FAIL — ${errorCount} error(s)/assertion failure(s). See above.`);
    process.exitCode = 1;
  } else {
    console.log("[smoke] PASS — addon loaded and every exercised control ran without a Lua error.");
    process.exitCode = 0;
  }
}

main();
