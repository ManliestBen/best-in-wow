-- BiSCompanion Core.lua — state, spec detection, data access.
local ADDON = ...

BISC = BISC or {}
local B = BISC

B.EXPANSION_DEFAULT = "tbc"

-- Talent-tab index -> spec id used by our datasets, per class token.
B.SPEC_BY_TAB = {
  WARRIOR = { "arms", "fury", "protection" },
  PALADIN = { "holy", "protection", "retribution" },
  HUNTER  = { "beastmastery", "marksmanship", "survival" },
  ROGUE   = { "assassination", "combat", "combat" },
  PRIEST  = { "discipline", "holy", "shadow" },
  SHAMAN  = { "elemental", "enhancement", "restoration" },
  MAGE    = { "arcane", "fire", "frost" },
  WARLOCK = { "affliction", "demonology", "destruction" },
  DRUID   = { "balance", "feral-tank", "restoration" },
  DEATHKNIGHT = { "blood", "frost", "unholy" },
}

B.SLOT_NAMES = {
  head = "Head", neck = "Neck", shoulder = "Shoulder", back = "Back",
  chest = "Chest", wrist = "Wrist", hands = "Hands", waist = "Waist",
  legs = "Legs", feet = "Feet", finger = "Rings", trinket = "Trinkets",
  mainhand = "Main Hand", offhand = "Off Hand", ranged = "Ranged / Relic",
}
B.SLOT_ORDER = { "head", "neck", "shoulder", "back", "chest", "wrist", "hands",
  "waist", "legs", "feet", "finger", "trinket", "mainhand", "offhand", "ranged" }
B.WORN = { finger = 2, trinket = 2 }
B.SHORT_EXP = { tbc = "TBC", wotlk = "WotLK" }

-- Bracket that matches the character's current level, so a leveling character
-- doesn't open the addon to a level-70 pre-raid list. Falls back to "preraid"
-- at max level and for expansions with no leveling brackets (CurrentBracket
-- also falls back to the spec's first bracket if this one has no data).
function B:DefaultBracket()
  local lvl = UnitLevel("player") or 0
  if lvl <= 0 then return "preraid" end
  if lvl <= 19 then return "lvl19"
  elseif lvl <= 29 then return "lvl29"
  elseif lvl <= 39 then return "lvl39"
  elseif lvl <= 49 then return "lvl49"
  elseif lvl <= 57 then return "lvl59"
  elseif lvl <= 64 then return "lvl60"
  elseif lvl <= 69 then return "lvl65"
  end
  return "preraid"
end

function B:InitDB()
  BiSCompanionDB = BiSCompanionDB or {}
  BiSCompanionCharDB = BiSCompanionCharDB or {}
  local c = BiSCompanionCharDB
  c.expansion = c.expansion or self.EXPANSION_DEFAULT
  if not BISC_DATA[c.expansion] then c.expansion = self.EXPANSION_DEFAULT end
  -- c.bracket is left nil here on a first run: ADDON_LOADED fires before player
  -- info exists, so UnitLevel() isn't trustworthy yet. PLAYER_LOGIN fills it in.
  c.tab = c.tab or "gear"
  c.showBothFactions = c.showBothFactions or false
  self.db = c
end

function B:PlayerClass()
  local _, token = UnitClass("player")
  return token
end

function B:PlayerFaction()
  local f = UnitFactionGroup("player")
  return f and f:lower() or "both"
end

function B:ExpData()
  return BISC_DATA[self.db.expansion]
end

-- The other expansion's key, only if we actually have data loaded for it.
function B:OtherExpansion()
  local other = (self.db.expansion == "tbc") and "wotlk" or "tbc"
  return BISC_DATA[other] and other or nil
end

-- Used by the UI's expansion-toggle button: switch expansion and reset
-- spec/bracket selection (mirrors the /bis reset slash command), since a
-- manually-picked spec id from one expansion won't necessarily exist in
-- the other.
function B:SwitchExpansion(exp)
  if not BISC_DATA[exp] then return false end
  self.db.expansion = exp
  self.db.spec, self.db.bracket = nil, self:DefaultBracket()
  return true
end

function B:ClassData()
  local exp = self:ExpData()
  return exp and exp.classes and exp.classes[self:PlayerClass()] or nil
end

-- Guess spec from talent point distribution; returns a spec table from our data.
function B:DetectSpec()
  local cd = self:ClassData()
  if not cd or not cd.specs or #cd.specs == 0 then return nil end
  -- manual override wins
  if self.db.spec then
    for _, s in ipairs(cd.specs) do
      if s.id == self.db.spec then return s end
    end
  end
  local bestTab, bestPts = 1, -1
  for i = 1, GetNumTalentTabs and GetNumTalentTabs() or 3 do
    local _, _, pts = GetTalentTabInfo(i)
    pts = pts or 0
    if pts > bestPts then bestPts, bestTab = pts, i end
  end
  local map = self.SPEC_BY_TAB[self:PlayerClass()]
  local wanted = map and map[bestTab]
  for _, s in ipairs(cd.specs) do
    if s.id == wanted then return s end
  end
  return cd.specs[1]
end

function B:CurrentBracket(spec)
  if not spec or not spec.brackets then return nil end
  for _, b in ipairs(spec.brackets) do
    if b.id == self.db.bracket then return b end
  end
  return spec.brackets[1]
end

-- Faction-filtered, rank-sorted items for a slot.
function B:SlotItems(bracket, slotKey)
  local out = {}
  if not bracket or not bracket.slots or not bracket.slots[slotKey] then return out end
  local myFaction = self:PlayerFaction()
  for _, it in ipairs(bracket.slots[slotKey]) do
    if not it.faction or it.faction == "both" or it.faction == myFaction then
      table.insert(out, it)
    end
  end
  table.sort(out, function(a, b) return (a.rank or 99) < (b.rank or 99) end)
  return out
end

-- Case-insensitive substring search for `query` across every bracket of
-- `spec` (in ascending bracket order, i.e. lowest level bracket first),
-- faction-filtered, deduped by item id (or name for id-less items) keeping
-- the first (lowest-bracket) hit. Returns { {item=..., slot=..., bracketId=...}, ... }.
function B:SearchSpecItems(spec, query)
  local out = {}
  if not spec or not spec.brackets or not query or query == "" then return out end
  local q = query:lower()
  local myFaction = self:PlayerFaction()
  local seen = {}
  for _, br in ipairs(spec.brackets) do
    for _, slotKey in ipairs(self.SLOT_ORDER) do
      local items = br.slots and br.slots[slotKey]
      if items then
        for _, it in ipairs(items) do
          if not it.faction or it.faction == "both" or it.faction == myFaction then
            local key = (it.id and it.id > 0) and it.id or ("n-" .. tostring(it.name))
            if not seen[key] then
              local nm = (it.name or ""):lower()
              if nm:find(q, 1, true) then
                seen[key] = true
                table.insert(out, { item = it, slot = slotKey, bracketId = br.id })
              end
            end
          end
        end
      end
    end
  end
  return out
end

-- Worn BiS pieces (rank-1 per slot, top-2 rings/trinkets), faction-filtered,
-- with their slot and 1-based worn index — used by both the progress
-- counter and the shopping list.
function B:WornItems(bracket)
  local out = {}
  if not bracket then return out end
  for _, slotKey in ipairs(self.SLOT_ORDER) do
    local items = self:SlotItems(bracket, slotKey)
    local n = math.min(self.WORN[slotKey] or 1, #items)
    for i = 1, n do
      table.insert(out, { slot = slotKey, item = items[i], index = i })
    end
  end
  return out
end

-- "Have it" = equipped, in bags, or in bank.
function B:HasItem(itemId)
  if not itemId or itemId == 0 then return false end
  return (GetItemCount(itemId, true) or 0) > 0
end

function B:Instances()
  local exp = self:ExpData()
  return exp and exp.instances or {}
end

function B:QuestVisible(q)
  if self.db.showBothFactions then return true end
  local f = self:PlayerFaction()
  return not q.faction or q.faction == "both" or q.faction == f
end

function B:QuestDone(q)
  if q.id and q.id > 0 and C_QuestLog and C_QuestLog.IsQuestFlaggedCompleted then
    return C_QuestLog.IsQuestFlaggedCompleted(q.id)
  end
  return false
end

-- Collected count across worn BiS pieces for the progress line.
function B:Progress(bracket)
  local have, total = 0, 0
  for _, w in ipairs(self:WornItems(bracket)) do
    total = total + 1
    if self:HasItem(w.item.id) then have = have + 1 end
  end
  return have, total
end

-- ---------------- events / slash ----------------
local frame = CreateFrame("Frame")
frame:RegisterEvent("ADDON_LOADED")
frame:RegisterEvent("PLAYER_LOGIN")
frame:SetScript("OnEvent", function(_, event, arg1)
  if event == "ADDON_LOADED" and arg1 == ADDON then
    B:InitDB()
  elseif event == "PLAYER_LOGIN" then
    if B.db and not B.db.bracket then B.db.bracket = B:DefaultBracket() end
    if B.db and not BiSCompanionDB.greeted then
      BiSCompanionDB.greeted = true
      print("|cff80ff40BiS Companion|r loaded — type |cfff0d08c/bis|r to open.")
    end
  end
end)

SLASH_BISCOMPANION1 = "/bis"
SLASH_BISCOMPANION2 = "/bisc"
SlashCmdList.BISCOMPANION = function(msg)
  msg = (msg or ""):lower():gsub("^%s+", ""):gsub("%s+$", "")
  if msg == "wotlk" or msg == "tbc" then
    if BISC_DATA[msg] then
      B.db.expansion = msg
      print("|cff80ff40BiS Companion|r expansion set to " .. msg:upper())
      if B.UI then B.UI:Refresh() end
    else
      print("|cff80ff40BiS Companion|r no data loaded for " .. msg:upper())
    end
    return
  elseif msg == "reset" then
    B.db.spec, B.db.bracket = nil, B:DefaultBracket()
    if B.UI then B.UI:Refresh() end
    return
  elseif msg == "shop" or msg == "shopping" then
    if B.UI then B.UI:ShowTab("shopping") end
    return
  elseif msg ~= "" and msg ~= "show" then
    print("|cff80ff40BiS Companion|r commands: /bis · /bis tbc · /bis wotlk · /bis reset · /bis shop")
    return
  end
  if B.UI then B.UI:Toggle() end
end
