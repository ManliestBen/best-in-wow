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
function B:DefaultBracket(lvl)
  lvl = lvl or UnitLevel("player") or 0
  if lvl <= 0 then return "preraid" end
  if lvl <= 20 then return "lvl20"
  elseif lvl <= 25 then return "lvl25"
  elseif lvl <= 30 then return "lvl30"
  elseif lvl <= 35 then return "lvl35"
  elseif lvl <= 40 then return "lvl40"
  elseif lvl <= 45 then return "lvl45"
  elseif lvl <= 50 then return "lvl50"
  elseif lvl <= 55 then return "lvl55"
  elseif lvl <= 60 then return "lvl60"
  elseif lvl <= 65 then return "lvl65"
  elseif lvl <= 69 then return "lvl69"
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
  if c.tooltips == nil then c.tooltips = true end
  if c.zoneAlerts == nil then c.zoneAlerts = true end
  c.targets = c.targets or {}
  if c.lootAlerts == nil then c.lootAlerts = true end
  self.db = c
end

-- The client swallows Lua errors raised inside addon callbacks unless the
-- player has turned script errors on, so a broken handler just silently does
-- nothing. Route our own entry points through this and say so in chat.
function B:Safe(label, fn, ...)
  local ok, err = pcall(fn, ...)
  if not ok then
    print("|cffff4040BiS Companion error|r [" .. tostring(label) .. "] " .. tostring(err))
    print("|cffff4040Please send this to the author.|r")
  end
  return ok
end

function B:Diagnostics()
  local out = {}
  local function add(s) table.insert(out, s) end
  add("|cff80ff40BiS Companion diagnostics|r")
  add("  data loaded: " .. (BISC_DATA and "yes" or "NO — Data.lua failed to load"))
  if BISC_DATA then
    local exps = {}
    for k in pairs(BISC_DATA) do table.insert(exps, k) end
    table.sort(exps)
    add("  expansions: " .. table.concat(exps, ", "))
  end
  add("  player: " .. tostring(self:PlayerClass()) .. " lvl " .. tostring(UnitLevel("player")) ..
    " " .. tostring(self:PlayerFaction()))
  add("  viewing: " .. tostring(self.db and self.db.expansion) .. " / bracket " ..
    tostring(self.db and self.db.bracket) .. " / tab " .. tostring(self.db and self.db.tab))
  local cd = self:ClassData()
  add("  class data: " .. (cd and (#(cd.specs or {}) .. " specs") or "NONE for this class"))
  local spec = self:DetectSpec()
  add("  detected spec: " .. (spec and (spec.name .. " (" .. spec.id .. ")") or "none"))
  local br = self:CurrentBracket(spec)
  add("  bracket data: " .. (br and (br.id .. ", " .. #self:WornItems(br) .. " worn items") or "none"))
  add("  instances: " .. #self:Instances())
  local profs = {}
  for p in pairs(self:Professions()) do table.insert(profs, p) end
  table.sort(profs)
  local rname = self:RacialNote()
  add("  race: " .. tostring(rname or "unknown"))
  add("  professions: " .. (#profs > 0 and table.concat(profs, ", ") or "none detected"))
  for _, line in ipairs(out) do print(line) end
end

function B:PlayerClass()
  local _, token = UnitClass("player")
  return token
end

-- Racial gearing note for this character, matching what the web app shows.
function B:RacialNote()
  if type(UnitRace) ~= "function" then return nil end
  local _, token = UnitRace("player")
  local exp = self:ExpData()
  local r = exp and exp.races and token and exp.races[token]
  if not r then return nil end
  return r.name, r.notes
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
  if self.InvalidateTooltipIndex then self:InvalidateTooltipIndex() end
  return true
end

function B:ClassData()
  local exp = self:ExpData()
  return exp and exp.classes and exp.classes[self:PlayerClass()] or nil
end

-- Points spent in a talent tab.
--
-- GetTalentTabInfo's return positions are NOT stable across client builds: on
-- the 2.5.6 Anniversary client its third value is a string, so reading points
-- positionally blew up with "attempt to compare number with string". Summing
-- talent ranks uses GetTalentInfo, whose rank position has been stable, and
-- falls back to scanning the tab info for a plausible points value.
local function TabPoints(tab)
  if type(GetNumTalents) == "function" and type(GetTalentInfo) == "function" then
    local total, n = 0, GetNumTalents(tab)
    if type(n) == "number" then
      for i = 1, n do
        local _, _, _, _, rank = GetTalentInfo(tab, i)
        if type(rank) == "number" then total = total + rank end
      end
      return total
    end
  end
  if type(GetTalentTabInfo) == "function" then
    local a, b, c, d, e = GetTalentTabInfo(tab)
    for _, v in ipairs({ a, b, c, d, e }) do
      -- 71 = most points obtainable at level 70; the icon fileID is far bigger
      if type(v) == "number" and v >= 0 and v <= 71 then return v end
    end
  end
  return 0
end

-- Recomputed only when talents can actually have changed; DetectSpec runs on
-- every refresh, including bag updates.
local bestTabCache
function B:InvalidateTalents() bestTabCache = nil end

function B:BestTalentTab()
  if bestTabCache then return bestTabCache end
  local numTabs = 3
  if type(GetNumTalentTabs) == "function" then
    local n = GetNumTalentTabs()
    if type(n) == "number" and n > 0 then numTabs = n end
  end
  local bestTab, bestPts = 1, -1
  for tab = 1, numTabs do
    local pts = TabPoints(tab)
    if pts > bestPts then bestPts, bestTab = pts, tab end
  end
  bestTabCache = bestTab
  return bestTab
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
  local map = self.SPEC_BY_TAB[self:PlayerClass()]
  local wanted = map and map[self:BestTalentTab()]
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

-- Professions come from the character's own skill list, so there's nothing to
-- configure in game: a bind-on-pickup craft you can't make is simply hidden.
B.CRAFT_PROFESSIONS = { "Alchemy", "Blacksmithing", "Enchanting", "Engineering",
  "Jewelcrafting", "Leatherworking", "Tailoring" }

local professionCache
function B:InvalidateProfessions() professionCache = nil end

function B:Professions()
  if professionCache then return professionCache end
  professionCache = {}
  if type(GetNumSkillLines) ~= "function" or type(GetSkillLineInfo) ~= "function" then
    return professionCache
  end
  local n = GetNumSkillLines() or 0
  for i = 1, n do
    local name = GetSkillLineInfo(i)
    if name then
      for _, prof in ipairs(self.CRAFT_PROFESSIONS) do
        if name == prof then professionCache[prof] = true end
      end
    end
  end
  return professionCache
end

-- A bind-on-pickup craft is only obtainable by someone with that profession;
-- BoE crafts stay listed because they can be bought.
function B:CanObtain(it)
  local prof = it.profession
  if not it.bop or not prof then return true end
  local mine = self:Professions()
  if not next(mine) then return true end   -- skills not loaded yet: show everything
  return mine[prof] == true
end

-- Faction-filtered, rank-sorted items for a slot.
function B:SlotItems(bracket, slotKey)
  local out = {}
  if not bracket or not bracket.slots or not bracket.slots[slotKey] then return out end
  local myFaction = self:PlayerFaction()
  for _, it in ipairs(bracket.slots[slotKey]) do
    if (not it.faction or it.faction == "both" or it.faction == myFaction)
        and self:CanObtain(it) then
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
  local blocked = self:OffhandBlockedBy(bracket)
  for _, slotKey in ipairs(self.SLOT_ORDER) do
    if not (slotKey == "offhand" and blocked) then
      local items = self:SlotItems(bracket, slotKey)
      local n = math.min(self.WORN[slotKey] or 1, #items)
      for i = 1, n do
        local it = self:ChosenItem(items, slotKey, i)
        if it then table.insert(out, { slot = slotKey, item = it, index = i }) end
      end
    end
  end
  return out
end

-- Each slot lists a ranked top 3 (Best / Better / Good). The player may be
-- chasing the second or third, so remember their pick and let everything that
-- counts progress follow it.
B.RANK_LABEL = { "Best", "Better", "Good" }

local function targetKey(self, slotKey, index)
  local spec = self.db.spec or (self:DetectSpec() and self:DetectSpec().id) or "?"
  return table.concat({ self.db.expansion, self:PlayerClass(), spec, tostring(self.db.bracket),
    slotKey, tostring(index) }, ":")
end

function B:TargetId(slotKey, index)
  return self.db.targets and self.db.targets[targetKey(self, slotKey, index)]
end

function B:SetTarget(slotKey, index, itemId)
  self.db.targets = self.db.targets or {}
  local k = targetKey(self, slotKey, index)
  if itemId == nil or self.db.targets[k] == itemId then
    self.db.targets[k] = nil
    return
  end
  -- Rings and trinkets come in pairs, but the same item can't fill both, so
  -- claiming it for one position releases it from the other.
  local worn = self.WORN[slotKey] or 1
  for w = 1, worn do
    if w ~= index and self.db.targets[targetKey(self, slotKey, w)] == itemId then
      self.db.targets[targetKey(self, slotKey, w)] = nil
    end
  end
  self.db.targets[k] = itemId
end

-- The item being chased for a slot position: their pick if still listed, else
-- the default for that position.
function B:ChosenItem(items, slotKey, index)
  local want = self:TargetId(slotKey, index)
  if want then
    for _, it in ipairs(items) do
      if it.id == want then return it end
    end
  end
  return items[index]
end

-- A two-handed main hand fills both hands, so no off-hand can be worn with it.
-- The main hand is the player's pick, so this is evaluated live.
function B:OffhandBlockedBy(bracket)
  local items = self:SlotItems(bracket, "mainhand")
  if #items == 0 then return nil end
  local mh = self:ChosenItem(items, "mainhand", 1)
  if mh and mh.hand == "two" then return mh end
  return nil
end

-- "Have it" = equipped, in bags, or in bank.
function B:HasItem(itemId)
  if not itemId or itemId == 0 then return false end
  return (GetItemCount(itemId, true) or 0) > 0
end

-- Instances ordered dungeons-then-raids and then by level, so the list reads in
-- the order you'd actually run them (the compiled data is in phase order, which
-- put Blackfathom Deeps first for everyone). Sorted once per expansion.
local instanceCache = {}
function B:Instances()
  local exp = self:ExpData()
  if not exp or not exp.instances then return {} end
  local key = self.db.expansion
  if not instanceCache[key] then
    local list = {}
    for _, inst in ipairs(exp.instances) do table.insert(list, inst) end
    table.sort(list, function(a, b)
      local at = (a.type == "raid") and 1 or 0
      local bt = (b.type == "raid") and 1 or 0
      if at ~= bt then return at < bt end
      local al = (a.levelRange and a.levelRange[1]) or 0
      local bl = (b.levelRange and b.levelRange[1]) or 0
      if al ~= bl then return al < bl end
      return (a.name or "") < (b.name or "")
    end)
    instanceCache[key] = list
  end
  return instanceCache[key]
end

-- Match a zone/instance name from the client against our instance list.
-- Names differ in small ways ("The Deadmines" vs "Deadmines", wing names for
-- Scarlet Monastery), so fall back to a containment match.
function B:FindInstanceByName(name)
  if not name or name == "" then return nil end
  local function norm(s)
    s = tostring(s):lower()
    s = s:gsub("^the ", "")
    return s
  end
  local want = norm(name)
  local list = self:Instances()
  for i, inst in ipairs(list) do
    if norm(inst.name) == want then return i, inst end
  end
  for i, inst in ipairs(list) do
    local n = norm(inst.name)
    if n:find(want, 1, true) or want:find(n, 1, true) then return i, inst end
  end
  return nil
end

-- When you zone into a dungeon or raid, point the Quests tab at it and say how
-- much is still open there, so a run isn't wasted on quests you could have
-- picked up first.
function B:OnZoneChanged()
  if not self.db or not self.db.zoneAlerts then return end
  if type(IsInInstance) ~= "function" then return end
  local inInstance, kind = IsInInstance()
  if not inInstance then self._lastInstance = nil; return end
  if kind ~= "party" and kind ~= "raid" then return end

  local name
  if type(GetInstanceInfo) == "function" then name = GetInstanceInfo() end
  if (not name or name == "") and type(GetRealZoneText) == "function" then name = GetRealZoneText() end
  if not name or name == "" or name == self._lastInstance then return end
  self._lastInstance = name

  local idx, inst = self:FindInstanceByName(name)
  if not idx then return end
  if self.UI and self.UI.SelectInstanceByIndex then self.UI:SelectInstanceByIndex(idx) end

  local total, done = 0, 0
  for _, q in ipairs(inst.quests or {}) do
    if self:QuestVisible(q) then
      total = total + 1
      if self:QuestDone(q) then done = done + 1 end
    end
  end
  if total > 0 and done < total then
    print("|cff80ff40BiS Companion|r " .. inst.name .. ": |cfff0d08c" .. (total - done) ..
      "|r of " .. total .. " quests still open here — /bis to see them.")
  elseif total > 0 then
    print("|cff80ff40BiS Companion|r " .. inst.name .. ": all " .. total .. " quests done here.")
  end
end

-- Bracket follows you up the levels unless you picked one by hand, so the
-- gear list doesn't silently stay on the 10-19 set after you out-level it.
function B:OnLevelUp(newLevel)
  if not self.db or self.db.bracketPinned then return end
  local want = self:DefaultBracket(newLevel)
  if want and want ~= self.db.bracket then
    self.db.bracket = want
    local label = want
    local exp = self:ExpData()
    for _, br in ipairs((exp and exp.brackets) or {}) do
      if br.id == want then label = br.name end
    end
    print("|cff80ff40BiS Companion|r now showing |cfff0d08c" .. label ..
      "|r. (/bis reset returns to automatic if you pin one.)")
    if self.UI then self.UI:Refresh() end
  end
end

function B:InstanceLabel(inst)
  if not inst then return "" end
  local r = inst.levelRange
  if r and r[1] and r[2] then
    return "[" .. r[1] .. "-" .. r[2] .. "] " .. (inst.name or "")
  end
  return inst.name or ""
end

-- How many of an instance's quests this character would actually see.
function B:VisibleQuestCount(inst)
  local n = 0
  for _, q in ipairs((inst and inst.quests) or {}) do
    if self:QuestVisible(q) then n = n + 1 end
  end
  return n
end

-- Instance nearest the player's level that actually has quests they can see.
-- Level proximity alone lands Alliance characters on Ragefire Chasm and Horde
-- characters on The Stockade, whose quests are all other-faction, leaving the
-- Quests tab blank on first open.
function B:DefaultInstanceIndex()
  local list = self:Instances()
  if #list == 0 then return 1 end
  local lvl = UnitLevel("player") or 0
  local best, bestDist, fallback, fallbackDist = nil, nil, 1, nil
  for i, inst in ipairs(list) do
    local r = inst.levelRange
    local lo = (r and r[1]) or 0
    local hi = (r and r[2]) or lo
    local dist = lo
    if lvl > 0 then
      dist = 0
      if lvl < lo then dist = lo - lvl elseif lvl > hi then dist = lvl - hi end
    end
    if fallbackDist == nil or dist < fallbackDist then fallback, fallbackDist = i, dist end
    if self:VisibleQuestCount(inst) > 0 and (bestDist == nil or dist < bestDist) then
      best, bestDist = i, dist
    end
  end
  return best or fallback
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

-- When an item on your list drops, say so. The whole point of the addon is not
-- having to remember 15 item names mid-run.
function B:OnLoot(msg)
  if not self.db or self.db.lootAlerts == false or not msg then return end
  local id = tonumber(msg:match("|Hitem:(%d+)"))
  if not id or not self.TooltipHits then return end
  local hits = self:TooltipHits(id)
  if not hits or #hits == 0 then return end

  local spec = self:DetectSpec()
  local mine, other
  for _, h in ipairs(hits) do
    if spec and h.specId == spec.id then mine = mine or h else other = other or h end
  end
  local h = mine or other
  if not h then return end
  local name = GetItemInfo and GetItemInfo(id) or ("item " .. id)
  local tag = (h.rank == 1) and "|cff80ff40Best|r" or ("|cffc8aa6e" .. (self.RANK_LABEL[h.rank] or "option") .. "|r")
  print("|cff80ff40BiS Companion|r " .. tostring(name) .. " is " .. tag ..
    " for " .. h.specName .. " · " .. h.bracketName .. " (" .. h.slot .. ")" ..
    (mine and "" or " |cff777777— other spec|r"))
  if type(PlaySound) == "function" then
    pcall(PlaySound, SOUNDKIT and SOUNDKIT.IG_QUEST_LIST_COMPLETE or 878)
  end
end

-- Search every spec of the class, not just the one being viewed: the web app
-- searches the whole dataset, and mid-run you want to know if a drop matters
-- for any of your specs.
function B:SearchClassItems(query)
  local cd = self:ClassData()
  if not cd or not query or query == "" then return {} end
  local out, seen = {}, {}
  for _, spec in ipairs(cd.specs or {}) do
    for _, r in ipairs(self:SearchSpecItems(spec, query)) do
      local key = (r.item.id and r.item.id > 0) and r.item.id or ("n-" .. tostring(r.item.name))
      if not seen[key] then
        seen[key] = true
        r.specName = spec.name
        table.insert(out, r)
      end
    end
  end
  return out
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
frame:RegisterEvent("PLAYER_ENTERING_WORLD")
frame:RegisterEvent("ZONE_CHANGED_NEW_AREA")
frame:RegisterEvent("PLAYER_LEVEL_UP")
frame:RegisterEvent("CHARACTER_POINTS_CHANGED")
frame:RegisterEvent("SPELLS_CHANGED")
frame:RegisterEvent("SKILL_LINES_CHANGED")
frame:RegisterEvent("CHAT_MSG_LOOT")
frame:SetScript("OnEvent", function(_, event, arg1)
  if event == "ADDON_LOADED" and arg1 == ADDON then
    B:InitDB()
  elseif event == "CHAT_MSG_LOOT" then
    B:Safe("loot-alert", function() B:OnLoot(arg1) end)
  elseif event == "SKILL_LINES_CHANGED" then
    B:InvalidateProfessions()
    if B.UI and B.UI.Refresh then B.UI:Refresh() end
  elseif event == "CHARACTER_POINTS_CHANGED" or event == "SPELLS_CHANGED" then
    B:InvalidateTalents()
    if B.UI and B.UI.Refresh then B.UI:Refresh() end
  elseif event == "PLAYER_LEVEL_UP" then
    B:Safe("level-up", function() B:OnLevelUp(tonumber(arg1)) end)
  elseif event == "PLAYER_ENTERING_WORLD" or event == "ZONE_CHANGED_NEW_AREA" then
    B:Safe("zone-change", function() B:OnZoneChanged() end)
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
    B.db.spec, B.db.bracket, B.db.bracketPinned = nil, B:DefaultBracket(), nil
    if B.UI then B.UI:Refresh() end
    return
  elseif msg == "loot" then
    B.db.lootAlerts = not B.db.lootAlerts
    print("|cff80ff40BiS Companion|r loot alerts " ..
      (B.db.lootAlerts and "|cff80ff40on|r" or "|cffff4040off|r"))
    return
  elseif msg == "minimap" then
    B.db.hideMinimap = not B.db.hideMinimap
    if B.UpdateMinimapButton then B:UpdateMinimapButton() end
    print("|cff80ff40BiS Companion|r minimap button " ..
      (B.db.hideMinimap and "|cffff4040hidden|r" or "|cff80ff40shown|r"))
    return
  elseif msg == "zone" then
    B.db.zoneAlerts = not B.db.zoneAlerts
    print("|cff80ff40BiS Companion|r instance alerts " ..
      (B.db.zoneAlerts and "|cff80ff40on|r" or "|cffff4040off|r"))
    return
  elseif msg == "tips" or msg == "tooltips" then
    B.db.tooltips = not B.db.tooltips
    print("|cff80ff40BiS Companion|r item tooltips " ..
      (B.db.tooltips and "|cff80ff40on|r" or "|cffff4040off|r"))
    return
  elseif msg == "debug" or msg == "diag" then
    B:Diagnostics()
    return
  elseif msg == "shop" or msg == "shopping" then
    if B.UI then B.UI:ShowTab("shopping") end
    return
  elseif msg ~= "" and msg ~= "show" then
    print("|cff80ff40BiS Companion|r commands: /bis · /bis tbc · /bis wotlk · /bis reset · /bis shop · /bis tips · /bis zone · /bis loot · /bis minimap · /bis debug")
    return
  end
  if B.UI then B.UI:Toggle() end
end
