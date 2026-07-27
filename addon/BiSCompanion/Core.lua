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

function B:InitDB()
  BiSCompanionDB = BiSCompanionDB or {}
  BiSCompanionCharDB = BiSCompanionCharDB or {}
  local c = BiSCompanionCharDB
  c.expansion = c.expansion or self.EXPANSION_DEFAULT
  if not BISC_DATA[c.expansion] then c.expansion = self.EXPANSION_DEFAULT end
  c.bracket = c.bracket or "preraid"
  c.tab = c.tab or "gear"
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
  for _, slotKey in ipairs(self.SLOT_ORDER) do
    local items = self:SlotItems(bracket, slotKey)
    local n = math.min(self.WORN[slotKey] or 1, #items)
    for i = 1, n do
      total = total + 1
      if self:HasItem(items[i].id) then have = have + 1 end
    end
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
    local exp = B.db and B.db.expansion or "?"
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
    B.db.spec, B.db.bracket = nil, "preraid"
    if B.UI then B.UI:Refresh() end
    return
  elseif msg ~= "" and msg ~= "show" then
    print("|cff80ff40BiS Companion|r commands: /bis · /bis tbc · /bis wotlk · /bis reset")
    return
  end
  if B.UI then B.UI:Toggle() end
end
