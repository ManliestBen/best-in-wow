-- BiSCompanion UI.lua — the in-game window.
local B = BISC
local UI = {}
B.UI = UI

local ROWS, ROW_H = 18, 24
local QUALITY_NUM = { poor = 0, common = 1, uncommon = 2, rare = 3, epic = 4, legendary = 5 }

local f -- main frame
local rows = {}
local listData = {}   -- flat row descriptors for the current view
local offset = 0
local expandedSlot = nil
local selectedInstance = nil   -- resolved from player level on first use
local searchQuery = ""

-- ---------------- helpers ----------------
-- Wrap a widget handler so a Lua error reports itself in chat instead of
-- being swallowed by the client (which looks exactly like a dead button).
local function safe(label, fn)
  return function(...) return B:Safe(label, fn, ...) end
end
local function ItemColor(it)
  local q = QUALITY_NUM[it.quality or "rare"] or 3
  local c = ITEM_QUALITY_COLORS[q]
  return c and c.hex or "|cffffffff"
end

local function ItemDisplayName(it)
  if it.id and it.id > 0 then
    local name = GetItemInfo(it.id) -- may be nil until server responds
    if name then return name end
  end
  return it.name or ("item " .. tostring(it.id))
end

local function LinkItem(it)
  if not (it.id and it.id > 0) then return end
  local _, link = GetItemInfo(it.id)
  if link then
    if not ChatEdit_InsertLink(link) then
      ChatFrame_OpenChat(link)
    end
  end
end

-- Row label for a worn slot, e.g. "Ring 1" for multi-worn slots, else just the slot name.
local function SlotLabel(slotKey, index)
  if B.WORN[slotKey] then
    return B.SLOT_NAMES[slotKey]:gsub("s$", "") .. " " .. index
  end
  return B.SLOT_NAMES[slotKey]
end

-- Empty-state text that names the expansion you're on and, when the other one
-- has data, points at the button that gets you back — WotLK is only a small
-- preview dataset, so landing there looks like a broken addon otherwise.
-- Two short rows rather than one long one: list rows are fixed-height and
-- don't wrap, so a single sentence would be truncated.
local function PushNoData(what)
  local cur = B.SHORT_EXP[B.db.expansion] or B.db.expansion:upper()
  table.insert(listData, { kind = "msg", text = "No " .. cur .. " " .. what .. " yet." })
  local other = B:OtherExpansion()
  if other then
    table.insert(listData, { kind = "msg", text = "Click the |cfff0d08c" .. cur ..
      "|r button (top-left) to switch to " .. (B.SHORT_EXP[other] or other) .. "." })
  end
end

-- ---------------- list building ----------------
local function BuildGearList()
  wipe(listData)
  local spec = B:DetectSpec()
  local bracket = B:CurrentBracket(spec)
  if not spec or not bracket then
    PushNoData("gear data for your class")
    return
  end

  if searchQuery ~= "" then
    local results = B:SearchSpecItems(spec, searchQuery)
    if #results == 0 then
      table.insert(listData, { kind = "msg", text = "No matches for \"" .. searchQuery .. "\"." })
      return
    end
    for _, r in ipairs(results) do
      table.insert(listData, {
        kind = "item", slot = r.slot, item = r.item, label = r.bracketId, noExpand = true,
      })
    end
    return
  end

  for _, slotKey in ipairs(B.SLOT_ORDER) do
    local items = B:SlotItems(bracket, slotKey)
    if #items > 0 then
      local n = math.min(B.WORN[slotKey] or 1, #items)
      for i = 1, n do
        local chosen = B:ChosenItem(items, slotKey, i)
        local tierIndex
        for idx, it in ipairs(items) do if it == chosen then tierIndex = idx end end
        table.insert(listData, {
          kind = "item", slot = slotKey, item = chosen, wornIndex = i,
          label = SlotLabel(slotKey, i),
          tier = tierIndex,
          expandable = #items > 1,
        })
      end
      -- expanded view lists every option with its tier so you can pick one
      if expandedSlot == slotKey then
        for idx, it in ipairs(items) do
          local isChosen = false
          for w = 1, n do if B:ChosenItem(items, slotKey, w) == it then isChosen = true end end
          if not isChosen then
            table.insert(listData, { kind = "item", slot = slotKey, item = it, alt = true,
              tier = idx, wornIndex = 1,
              label = "  " .. (B.RANK_LABEL[idx] or ("#" .. idx)) })
          end
        end
      end
    end
  end
end

local function BuildQuestList()
  wipe(listData)
  local instances = B:Instances()
  if #instances == 0 then
    PushNoData("quest data")
    return
  end
  if not selectedInstance or selectedInstance > #instances then selectedInstance = B:DefaultInstanceIndex() end
  local inst = instances[selectedInstance]
  if inst.attunement then
    table.insert(listData, { kind = "msg", text = "|cffc8aa6eAttunement:|r " .. inst.attunement, wrap = true })
  end
  local shown = 0
  for _, q in ipairs(inst.quests or {}) do
    if B:QuestVisible(q) then
      table.insert(listData, { kind = "quest", quest = q })
      shown = shown + 1
    end
  end
  -- An instance can hold quests yet show none: Ragefire Chasm is Horde-only,
  -- The Stockade Alliance-only. Say so instead of rendering an empty list.
  if shown == 0 then
    if #(inst.quests or {}) > 0 then
      table.insert(listData, { kind = "msg",
        text = "No " .. B:PlayerFaction() .. " quests inside " .. inst.name .. "." })
      table.insert(listData, { kind = "msg",
        text = "Tick |cfff0d08cBoth factions|r above to see the other faction's." })
    else
      table.insert(listData, { kind = "msg", text = "No quests recorded inside " .. inst.name .. "." })
    end
  end
end

-- Push a header row + its item rows, skipping empty groups.
local function PushShopGroup(title, entries)
  if not entries or #entries == 0 then return end
  table.insert(listData, { kind = "header", text = title })
  for _, w in ipairs(entries) do
    table.insert(listData, {
      kind = "item", slot = w.slot, item = w.item, label = SlotLabel(w.slot, w.index or 1),
    })
  end
end

local function BuildShoppingList()
  wipe(listData)
  local spec = B:DetectSpec()
  local bracket = B:CurrentBracket(spec)
  if not spec or not bracket then
    PushNoData("gear data for your class")
    return
  end

  local missing = {}
  for _, w in ipairs(B:WornItems(bracket)) do
    if not B:HasItem(w.item.id) then table.insert(missing, w) end
  end

  local hasEnchants = spec.enchants and next(spec.enchants)
  if #missing == 0 and not hasEnchants then
    table.insert(listData, { kind = "msg", text = "Fully BiS for this bracket — nothing left to farm." })
    return
  end

  -- Group by farm location.
  local dropGroups, dropNames = {}, {}
  local badge, reputation, crafted, quest, pvp, other = {}, {}, {}, {}, {}, {}
  for _, w in ipairs(missing) do
    local it = w.item
    local st = it.sourceType
    if st == "drop" and it.sourceInstance then
      if not dropGroups[it.sourceInstance] then
        dropGroups[it.sourceInstance] = {}
        table.insert(dropNames, it.sourceInstance)
      end
      table.insert(dropGroups[it.sourceInstance], w)
    elseif st == "badge" then table.insert(badge, w)
    elseif st == "reputation" then table.insert(reputation, w)
    elseif st == "crafted" then table.insert(crafted, w)
    elseif st == "quest" then table.insert(quest, w)
    elseif st == "pvp" then table.insert(pvp, w)
    else table.insert(other, w)
    end
  end
  table.sort(dropNames)

  for _, instName in ipairs(dropNames) do
    PushShopGroup(instName, dropGroups[instName])
  end

  local badgeTotal = 0
  for _, w in ipairs(badge) do
    local n = w.item.sourceText and w.item.sourceText:match("(%d+)%s*[Bb]adge")
    if n then badgeTotal = badgeTotal + (tonumber(n) or 0) end
  end
  local badgeTitle = "Badge vendor"
  if badgeTotal > 0 then badgeTitle = badgeTitle .. string.format(" — %d badges needed", badgeTotal) end
  PushShopGroup(badgeTitle, badge)

  PushShopGroup("Reputation", reputation)
  PushShopGroup("Crafted", crafted)
  PushShopGroup("Quest rewards", quest)
  PushShopGroup("PvP", pvp)
  PushShopGroup("Other", other)

  if hasEnchants then
    table.insert(listData, { kind = "header", text = "Enchants to line up" })
    for _, slotKey in ipairs(B.SLOT_ORDER) do
      local txt = spec.enchants[slotKey]
      if txt then
        table.insert(listData, { kind = "enchant", slot = slotKey, text = txt, label = B.SLOT_NAMES[slotKey] })
      end
    end
  end
end

local function BuildList()
  if B.db.tab == "quests" then BuildQuestList()
  elseif B.db.tab == "shopping" then BuildShoppingList()
  else BuildGearList()
  end
end

-- ---------------- row rendering ----------------
local function UpdateRows()
  if not f then return end
  local maxOffset = math.max(0, #listData - ROWS)
  if offset > maxOffset then offset = maxOffset end
  for i = 1, ROWS do
    local row = rows[i]
    local d = listData[i + offset]
    row.data = d
    if not d then
      row:Hide()
    else
      row:Show()
      -- header rows are display-only: no hover highlight, no tooltip, no click.
      row:EnableMouse(d.kind ~= "header")
      if d.kind == "msg" then
        row.slotText:SetText("")
        row.check:Hide()
        row.nameText:SetText(d.text)
        row.nameText:SetTextColor(0.8, 0.75, 0.6)
      elseif d.kind == "item" then
        row.slotText:SetText(d.label or "")
        local have = B:HasItem(d.item.id)
        row.check:SetShown(true)
        row.check:SetText(have and "|cff80ff40✓|r" or "|cff555555·|r")
        local suffix = ""
        if d.tier and d.tier > 1 and not d.alt then
          suffix = " |cff7ec8ff[" .. (B.RANK_LABEL[d.tier] or ("#" .. d.tier)) .. "]|r"
        end
        if d.expandable and not d.alt then suffix = suffix .. " |cff777777[+options]|r" end
        row.nameText:SetText(ItemColor(d.item) .. ItemDisplayName(d.item) .. "|r" .. suffix)
        row.nameText:SetTextColor(1, 1, 1)
      elseif d.kind == "quest" then
        row.slotText:SetText("")
        local done = B:QuestDone(d.quest)
        row.check:SetShown(true)
        row.check:SetText(done and "|cff80ff40✓|r" or "|cffd6a23c!|r")
        local fac = ""
        if d.quest.faction == "alliance" then fac = " |cff4a7bd6[A]|r"
        elseif d.quest.faction == "horde" then fac = " |cffc23c2a[H]|r" end
        local color = done and "|cff888888" or "|cffffd100"
        row.nameText:SetText(color .. d.quest.name .. "|r" .. fac)
        row.nameText:SetTextColor(1, 1, 1)
      elseif d.kind == "header" then
        row.check:Hide()
        row.slotText:SetText("")
        row.nameText:SetText("|cffc8aa6e" .. (d.text or "") .. "|r")
        row.nameText:SetTextColor(1, 1, 1)
      elseif d.kind == "enchant" then
        row.check:Hide()
        row.slotText:SetText(d.label or "")
        row.nameText:SetText("|cff80c0ff" .. (d.text or "") .. "|r")
        row.nameText:SetTextColor(1, 1, 1)
      end
    end
  end

  -- header / footer
  local spec = B:DetectSpec()
  local tab = B.db.tab
  if tab == "gear" then
    local bracket = B:CurrentBracket(spec)
    local have, total = B:Progress(bracket)
    local pct = total > 0 and math.floor(have / total * 100 + 0.5) or 0
    f.footer:SetText(string.format("BiS collected: |cff80ff40%d|r / %d  (%d%%)", have, total, pct))
    f.progressBar:SetMinMaxValues(0, math.max(total, 1))
    f.progressBar:SetValue(have)
    f.progressBar:Show()
    if spec and spec.statPriority then
      f.statLine:SetText("|cffc8aa6e" .. spec.statPriority .. "|r")
    else
      f.statLine:SetText("")
    end
    f.notesBtn:SetShown(spec ~= nil and spec.notes ~= nil)
  elseif tab == "shopping" then
    local bracket = B:CurrentBracket(spec)
    local have, total = B:Progress(bracket)
    f.footer:SetText(string.format("Still to collect: |cffd6a23c%d|r of %d", total - have, total))
    f.progressBar:Hide()
    f.statLine:SetText("")
    f.notesBtn:Hide()
  else
    local instances = B:Instances()
    local inst = instances[selectedInstance]
    if inst then
      local done, total = 0, 0
      for _, q in ipairs(inst.quests or {}) do
        if B:QuestVisible(q) then
          total = total + 1
          if B:QuestDone(q) then done = done + 1 end
        end
      end
      f.footer:SetText(string.format("Quests complete here: |cff80ff40%d|r / %d", done, total))
      local parts = {}
      if inst.zone then table.insert(parts, inst.zone) end
      if inst.notes then table.insert(parts, inst.notes) end
      if #parts > 0 then
        f.instanceInfo:SetText(table.concat(parts, " · "))
        f.instanceInfo:Show()
      else
        f.instanceInfo:SetText("")
        f.instanceInfo:Hide()
      end
    else
      f.footer:SetText("")
      f.instanceInfo:SetText("")
      f.instanceInfo:Hide()
    end
    f.statLine:SetText("")
    f.progressBar:Hide()
    f.notesBtn:Hide()
  end

  -- Expansion button shows the expansion you are CURRENTLY viewing; clicking
  -- swaps to the other one (label said "-> other" before, which read as a tab).
  local cur = B.SHORT_EXP[B.db.expansion] or B.db.expansion:upper()
  f.expBtn:SetText(cur)
  f.expBtn:SetShown(B:OtherExpansion() ~= nil)
end

function UI:Refresh()
  if not f or not f:IsShown() then return end
  B:Safe("refresh", function()
    BuildList()
    UpdateRows()
    UI:UpdateDropdowns()
  end)
end

-- ---------------- frame construction ----------------
-- ---------------- dropdown menu widget ----------------
-- Rolled by hand instead of using UIDropDownMenuTemplate: Blizzard's widget
-- only reacts to clicks on its small arrow (clicking the wide text area does
-- nothing, which reads as "the dropdown is broken"), and its menus don't
-- scroll, which is unusable for the 51-instance list. Here the entire control
-- is clickable and long lists scroll with the mousewheel.
local MENU_ROW_H, MENU_MAX_ROWS = 18, 20
local openMenu, menuCatcher

local function CloseOpenMenu()
  if openMenu then
    openMenu.list:Hide()
    openMenu = nil
  end
  if menuCatcher then menuCatcher:Hide() end
end

local Menu = {}
Menu.__index = Menu

function Menu:SetItems(items, selectedValue)
  self.items = items or {}
  self.selected = selectedValue
  if self.list:IsShown() then self:Layout() end
end

function Menu:SetLabel(text)
  self.button:SetText(text or "")
end

function Menu:Layout()
  local items = self.items
  local listWidth = self.listWidth or self.width
  local shown = math.min(#items, MENU_MAX_ROWS)
  local maxOffset = math.max(0, #items - MENU_MAX_ROWS)
  if self.offset > maxOffset then self.offset = maxOffset end

  self.list:SetSize(listWidth, shown * MENU_ROW_H + 16)
  for i = 1, shown do
    local row = self.rows[i]
    if not row then
      row = CreateFrame("Button", nil, self.list)
      row:SetSize((self.listWidth or self.width) - 16, MENU_ROW_H)
      row:SetPoint("TOPLEFT", 8, -8 - (i - 1) * MENU_ROW_H)
      row.text = row:CreateFontString(nil, "OVERLAY", "GameFontNormalSmall")
      row.text:SetPoint("LEFT", 4, 0)
      row.text:SetPoint("RIGHT", -4, 0)
      row.text:SetJustifyH("LEFT")
      row:SetHighlightTexture("Interface\\QuestFrame\\UI-QuestTitleHighlight", "ADD")
      row:SetScript("OnClick", safe("menu-row", function(self2)
        local item = self2.item
        if not item or item.title then return end
        CloseOpenMenu()
        if self.onSelect then self.onSelect(item.value, item) end
      end))
      self.rows[i] = row
    end
    local item = items[i + self.offset]
    row.item = item
    if item then
      local label = item.text or ""
      if item.title then
        row.text:SetText("|cff9d8253" .. label .. "|r")
      elseif item.value ~= nil and item.value == self.selected then
        row.text:SetText("|cff80ff40" .. label .. "|r")
      else
        row.text:SetText("|cffe8ddc7" .. label .. "|r")
      end
      row:Show()
    else
      row:Hide()
    end
  end
  for i = shown + 1, #self.rows do self.rows[i]:Hide() end
end

function Menu:Toggle()
  if openMenu == self then CloseOpenMenu(); return end
  CloseOpenMenu()
  if #self.items == 0 then return end
  -- open scrolled to the current selection, not at the top of a 50-entry list
  self.offset = 0
  if self.selected ~= nil then
    for i, item in ipairs(self.items) do
      if item.value ~= nil and item.value == self.selected then
        if i > MENU_MAX_ROWS then
          self.offset = math.max(0, math.min(i - math.floor(MENU_MAX_ROWS / 2),
            #self.items - MENU_MAX_ROWS))
        end
        break
      end
    end
  end
  self:Layout()
  self.list:Show()
  openMenu = self
  if menuCatcher then
    menuCatcher:SetFrameStrata("FULLSCREEN_DIALOG")
    menuCatcher:Show()
    local lvl = menuCatcher:GetFrameLevel()
    if type(lvl) ~= "number" then lvl = 0 end
    self.list:SetFrameLevel(lvl + 10)
  end
end

function Menu:SetShown(shown)
  self.button:SetShown(shown)
  if not shown and openMenu == self then CloseOpenMenu() end
end

local function CreateMenu(parent, width, placeholder)
  local m = setmetatable({ width = width, items = {}, rows = {}, offset = 0 }, Menu)

  m.button = CreateFrame("Button", nil, parent, "UIPanelButtonTemplate")
  m.button:SetSize(width, 22)
  m.button:SetText(placeholder or "")
  local fs = m.button:GetFontString()
  if fs then
    fs:ClearAllPoints()
    fs:SetPoint("LEFT", 8, 0)
    fs:SetPoint("RIGHT", -16, 0)
    fs:SetJustifyH("LEFT")
    fs:SetWordWrap(false)      -- long labels must clip, not wrap over the frame
    if fs.SetMaxLines then fs:SetMaxLines(1) end
  end
  local arrow = m.button:CreateFontString(nil, "OVERLAY", "GameFontNormalSmall")
  arrow:SetPoint("RIGHT", -5, -1)
  arrow:SetText("|cffc8aa6ev|r")   -- plain ASCII: the font has no glyph for arrows
  m.button:SetScript("OnClick", safe("menu-open", function() m:Toggle() end))

  if not menuCatcher then
    -- One shared full-screen catcher so clicking anywhere else closes the menu.
    menuCatcher = CreateFrame("Button", nil, UIParent)
    menuCatcher:SetAllPoints(UIParent)
    menuCatcher:SetFrameStrata("FULLSCREEN_DIALOG")
    menuCatcher:Hide()
    menuCatcher:SetScript("OnClick", CloseOpenMenu)
  end

  m.list = CreateFrame("Frame", nil, UIParent, "BackdropTemplate")
  m.list:SetPoint("TOPLEFT", m.button, "BOTTOMLEFT", 0, -2)
  m.list:SetBackdrop({
    bgFile = "Interface\\DialogFrame\\UI-DialogBox-Background-Dark",
    edgeFile = "Interface\\DialogFrame\\UI-DialogBox-Border",
    tile = true, tileSize = 32, edgeSize = 16,
    insets = { left = 4, right = 4, top = 4, bottom = 4 },
  })
  m.list:SetFrameStrata("FULLSCREEN_DIALOG")
  m.list:EnableMouse(true)
  m.list:EnableMouseWheel(true)
  m.list:SetScript("OnMouseWheel", safe("menu-scroll", function(_, delta)
    local maxOffset = math.max(0, #m.items - MENU_MAX_ROWS)
    m.offset = math.max(0, math.min(m.offset - delta * 3, maxOffset))
    m:Layout()
  end))
  m.list:Hide()

  return m
end

local function CreateMainFrame()
  f = CreateFrame("Frame", "BiSCompanionFrame", UIParent, "BackdropTemplate")
  f:SetSize(500, 620)
  f:SetPoint("CENTER")
  f:SetMovable(true)
  f:EnableMouse(true)
  f:RegisterForDrag("LeftButton")
  f:SetScript("OnDragStart", f.StartMoving)
  f:SetScript("OnDragStop", f.StopMovingOrSizing)
  f:SetBackdrop({
    bgFile = "Interface\\DialogFrame\\UI-DialogBox-Background-Dark",
    edgeFile = "Interface\\DialogFrame\\UI-DialogBox-Border",
    tile = true, tileSize = 32, edgeSize = 24,
    insets = { left = 6, right = 6, top = 6, bottom = 6 },
  })
  f:SetFrameStrata("MEDIUM")
  tinsert(UISpecialFrames, "BiSCompanionFrame") -- close with Escape

  local title = f:CreateFontString(nil, "OVERLAY", "GameFontNormalLarge")
  title:SetPoint("TOP", 0, -14)
  title:SetText("|cff80ff40BiS|r Companion")
  f.title = title

  local close = CreateFrame("Button", nil, f, "UIPanelCloseButton")
  close:SetPoint("TOPRIGHT", -4, -4)

  -- expansion toggle — top-left, same row as the title, out of everyone's way
  f.expBtn = CreateFrame("Button", nil, f, "UIPanelButtonTemplate")
  f.expBtn:SetSize(78, 20)
  f.expBtn:SetPoint("TOPLEFT", 12, -12)
  f.expBtn:SetScript("OnClick", safe("expansion-toggle", function()
    local other = B:OtherExpansion()
    if other and B:SwitchExpansion(other) then
      offset, expandedSlot, selectedInstance = 0, nil, nil
      searchQuery = ""
      if f.searchBox then f.searchBox:SetText("") end
      print("|cff80ff40BiS Companion|r now showing |cfff0d08c" ..
        (B.SHORT_EXP[other] or other:upper()) .. "|r data.")
      UI:Refresh()
    end
  end))
  f.expBtn:SetScript("OnEnter", safe("expansion-tooltip", function(self)
    local other = B:OtherExpansion()
    if not other then return end
    GameTooltip:SetOwner(self, "ANCHOR_RIGHT")
    GameTooltip:AddLine("Viewing " .. (B.SHORT_EXP[B.db.expansion] or B.db.expansion) .. " data")
    GameTooltip:AddLine("Click to switch to " .. (B.SHORT_EXP[other] or other), 1, 1, 1)
    GameTooltip:Show()
  end))
  f.expBtn:SetScript("OnLeave", function() GameTooltip:Hide() end)

  -- tab buttons
  local gearBtn = CreateFrame("Button", nil, f, "UIPanelButtonTemplate")
  gearBtn:SetSize(90, 22)
  gearBtn:SetPoint("TOPLEFT", 14, -38)
  gearBtn:SetText("Gear")
  gearBtn:SetScript("OnClick", safe("tab-gear", function() UI:ShowTab("gear") end))

  local questBtn = CreateFrame("Button", nil, f, "UIPanelButtonTemplate")
  questBtn:SetSize(90, 22)
  questBtn:SetPoint("LEFT", gearBtn, "RIGHT", 6, 0)
  questBtn:SetText("Quests")
  questBtn:SetScript("OnClick", safe("tab-quests", function() UI:ShowTab("quests") end))

  local shopBtn = CreateFrame("Button", nil, f, "UIPanelButtonTemplate")
  shopBtn:SetSize(90, 22)
  shopBtn:SetPoint("LEFT", questBtn, "RIGHT", 6, 0)
  shopBtn:SetText("Shopping")
  shopBtn:SetScript("OnClick", safe("tab-shopping", function() UI:ShowTab("shopping") end))

  f.tabButtons = { gear = gearBtn, quests = questBtn, shopping = shopBtn }

  -- search box — gear tab only, top-right, clear of the close button and tabs
  f.searchBox = CreateFrame("EditBox", "BiSCompanionSearchBox", f, "InputBoxTemplate")
  f.searchBox:SetAutoFocus(false)
  f.searchBox:SetSize(140, 20)
  f.searchBox:SetPoint("TOPRIGHT", -30, -40)
  f.searchBox:SetScript("OnTextChanged", safe("search", function(self)
    searchQuery = self:GetText() or ""
    offset = 0
    UI:Refresh()
  end))
  f.searchBox:SetScript("OnEscapePressed", function(self)
    self:SetText("")
    self:ClearFocus()
  end)
  f.searchBox:SetScript("OnEnterPressed", function(self) self:ClearFocus() end)

  -- dropdowns
  f.specMenu = CreateMenu(f, 150, "Spec")
  f.specMenu.button:SetPoint("TOPLEFT", 14, -64)
  f.specMenu.onSelect = function(value)
    B.db.spec = value; offset = 0; expandedSlot = nil; UI:Refresh()
  end

  f.bracketPrev = CreateFrame("Button", nil, f, "UIPanelButtonTemplate")
  f.bracketPrev:SetSize(22, 22)
  f.bracketPrev:SetPoint("LEFT", f.specMenu.button, "RIGHT", 8, 0)
  f.bracketPrev:SetText("<")
  f.bracketPrev:SetScript("OnClick", safe("bracket-prev", function() UI:StepBracket(-1) end))

  f.bracketMenu = CreateMenu(f, 168, "Bracket")
  f.bracketMenu.button:SetPoint("LEFT", f.bracketPrev, "RIGHT", 2, 0)
  f.bracketMenu.listWidth = 300      -- descriptions need more room than the button
  f.bracketMenu.onSelect = function(value)
    UI:SetBracket(value)
  end

  f.bracketNext = CreateFrame("Button", nil, f, "UIPanelButtonTemplate")
  f.bracketNext:SetSize(22, 22)
  f.bracketNext:SetPoint("LEFT", f.bracketMenu.button, "RIGHT", 2, 0)
  f.bracketNext:SetText(">")
  f.bracketNext:SetScript("OnClick", safe("bracket-next", function() UI:StepBracket(1) end))

  local function BracketTip(self)
    local spec = B:DetectSpec()
    local cur = B:CurrentBracket(spec)
    GameTooltip:SetOwner(self, "ANCHOR_BOTTOM")
    GameTooltip:AddLine("Gear progression")
    local exp = B:ExpData()
    for _, br in ipairs((exp and exp.brackets) or {}) do
      if cur and br.id == cur.id then
        GameTooltip:AddLine(br.name .. (br.sub and (" — " .. br.sub) or ""), 1, 1, 1)
      end
    end
    GameTooltip:AddLine("Click to jump to any bracket; < > step through them.", 0.7, 0.7, 0.7)
    GameTooltip:AddLine("Looking ahead is fine — it won't change on level-up until you /bis reset.", 0.7, 0.7, 0.7, true)
    GameTooltip:Show()
  end
  f.bracketMenu.button:SetScript("OnEnter", safe("bracket-tip", BracketTip))
  f.bracketMenu.button:SetScript("OnLeave", function() GameTooltip:Hide() end)

  f.instanceMenu = CreateMenu(f, 300, "Instance")
  f.instanceMenu.button:SetPoint("TOPLEFT", 14, -64)
  f.instanceMenu.button:SetScript("OnEnter", safe("instance-tip", function(self)
    local inst = B:Instances()[selectedInstance]
    if not inst then return end
    GameTooltip:SetOwner(self, "ANCHOR_BOTTOM")
    GameTooltip:AddLine(inst.name)
    if inst.zone then GameTooltip:AddLine(inst.zone, 0.8, 0.8, 0.8) end
    local r = inst.levelRange
    if r and r[1] and r[2] then
      GameTooltip:AddLine("Levels " .. r[1] .. "-" .. r[2], 0.8, 0.8, 0.8)
    end
    if inst.notes then GameTooltip:AddLine(inst.notes, 1, 1, 1, true) end
    if inst.attunement then
      GameTooltip:AddLine(" ")
      GameTooltip:AddLine("Attunement: " .. inst.attunement, 1, 0.82, 0, true)
    end
    GameTooltip:Show()
  end))
  f.instanceMenu.button:SetScript("OnLeave", function() GameTooltip:Hide() end)
  f.instanceMenu.onSelect = function(value)
    selectedInstance = value; offset = 0; UI:Refresh()
  end

  -- "both factions" checkbox — quests tab only
  f.bothFactionsCB = CreateFrame("CheckButton", "BiSCompanionBothFactionsCB", f, "UICheckButtonTemplate")
  f.bothFactionsCB:SetSize(24, 24)
  f.bothFactionsCB:SetPoint("TOPRIGHT", -120, -66)
  local bfText = _G[f.bothFactionsCB:GetName() .. "Text"]
  if bfText then bfText:SetText("Both factions") end
  f.bothFactionsCB:SetScript("OnClick", safe("both-factions", function(self)
    B.db.showBothFactions = self:GetChecked() and true or false
    offset = 0
    UI:Refresh()
  end))

  f.statLine = f:CreateFontString(nil, "OVERLAY", "GameFontNormalSmall")
  f.statLine:SetPoint("TOPLEFT", 16, -96)
  f.statLine:SetPoint("TOPRIGHT", -40, -96)
  f.statLine:SetJustifyH("LEFT")
  f.statLine:SetWordWrap(false)

  -- "?" spec-notes button, next to the stat priority line (gear tab only)
  f.notesBtn = CreateFrame("Button", nil, f, "UIPanelButtonTemplate")
  f.notesBtn:SetSize(20, 18)
  f.notesBtn:SetPoint("TOPRIGHT", -14, -94)
  f.notesBtn:SetText("?")
  f.notesBtn:SetScript("OnEnter", safe("spec-notes", function(self)
    local spec = B:DetectSpec()
    if not spec or not spec.notes then return end
    GameTooltip:SetOwner(self, "ANCHOR_LEFT")
    GameTooltip:AddLine("|cffc8aa6eSpec notes|r")
    GameTooltip:AddLine(spec.notes, 1, 1, 1, true)
    GameTooltip:Show()
  end))
  f.notesBtn:SetScript("OnLeave", function() GameTooltip:Hide() end)

  -- instance zone/notes line — quests tab only, below the instance dropdown
  f.instanceInfo = f:CreateFontString(nil, "OVERLAY", "GameFontNormalSmall")
  f.instanceInfo:SetPoint("TOPLEFT", 16, -96)
  f.instanceInfo:SetPoint("TOPRIGHT", -16, -96)
  f.instanceInfo:SetJustifyH("LEFT")
  f.instanceInfo:SetWordWrap(false)
  f.instanceInfo:SetTextColor(0.7, 0.7, 0.7)

  -- list rows
  local listTop = -114
  for i = 1, ROWS do
    local row = CreateFrame("Button", nil, f)
    row:SetSize(470, ROW_H)
    row:SetPoint("TOPLEFT", 14, listTop - (i - 1) * ROW_H)

    row.check = row:CreateFontString(nil, "OVERLAY", "GameFontNormal")
    row.check:SetPoint("LEFT", 0, 0)
    row.check:SetWidth(16)

    row.slotText = row:CreateFontString(nil, "OVERLAY", "GameFontNormalSmall")
    row.slotText:SetPoint("LEFT", 18, 0)
    row.slotText:SetWidth(78)
    row.slotText:SetJustifyH("LEFT")
    row.slotText:SetTextColor(0.65, 0.6, 0.48)

    row.nameText = row:CreateFontString(nil, "OVERLAY", "GameFontNormal")
    row.nameText:SetPoint("LEFT", 100, 0)
    row.nameText:SetPoint("RIGHT", -4, 0)
    row.nameText:SetJustifyH("LEFT")
    row.nameText:SetWordWrap(false)

    row:SetHighlightTexture("Interface\\QuestFrame\\UI-QuestTitleHighlight", "ADD")

    row:SetScript("OnEnter", safe("row-tooltip", function(self)
      local d = self.data
      if not d then return end
      if d.kind == "header" then return end
      GameTooltip:SetOwner(self, "ANCHOR_RIGHT")
      if d.kind == "item" and d.item.id and d.item.id > 0 then
        GameTooltip:SetHyperlink("item:" .. d.item.id)
        if d.item.sourceText then
          GameTooltip:AddLine(" ")
          GameTooltip:AddLine("|cffc8aa6eSource:|r " .. d.item.sourceText, 1, 1, 1, true)
        end
        if d.item.note then
          GameTooltip:AddLine("|cff80ff40" .. d.item.note .. "|r", 1, 1, 1, true)
        end
        local canExpand = d.expandable and not d.noExpand and B.db.tab == "gear"
        if d.tier then
          GameTooltip:AddLine("|cffc8aa6eRanked:|r " .. (B.RANK_LABEL[d.tier] or ("#" .. d.tier)))
        end
        if d.alt then
          GameTooltip:AddLine("|cff777777Click: go for this one · Shift-click: link in chat|r")
        else
          GameTooltip:AddLine("|cff777777Click: link in chat" .. (canExpand and " · Right-click: show all options|r" or "|r"))
        end
        GameTooltip:Show()
      elseif d.kind == "enchant" then
        GameTooltip:AddLine(d.label or "Enchant", 1, 0.82, 0)
        GameTooltip:AddLine(d.text or "", 1, 1, 1, true)
        GameTooltip:Show()
      elseif d.kind == "quest" then
        local q = d.quest
        GameTooltip:AddLine(q.name, 1, 0.82, 0)
        if q.questGiver then GameTooltip:AddLine("Given by: " .. q.questGiver, 1, 1, 1, true) end
        if q.prereq then GameTooltip:AddLine("Prereq: " .. q.prereq, 0.79, 0.63, 0.42, true) end
        if q.note then GameTooltip:AddLine(q.note, 0.6, 0.6, 0.6, true) end
        if q.rewards and #q.rewards > 0 then
          GameTooltip:AddLine(" ")
          GameTooltip:AddLine("|cffc8aa6eRewards:|r")
          for _, r in ipairs(q.rewards) do
            local text = r.name
            if r.id and r.id > 0 then
              local name, _, quality = GetItemInfo(r.id)
              if name then
                local qc = ITEM_QUALITY_COLORS[quality or 3]
                text = (qc and qc.hex or "|cffffffff") .. name .. "|r"
              end
            end
            GameTooltip:AddLine("  " .. (text or "?"), 1, 1, 1, true)
          end
        end
        GameTooltip:Show()
      end
    end))
    row:SetScript("OnLeave", function() GameTooltip:Hide() end)
    row:RegisterForClicks("LeftButtonUp", "RightButtonUp")
    row:SetScript("OnClick", safe("row-click", function(self, button)
      local d = self.data
      if not d then return end
      if d.kind == "item" then
        if button == "RightButton" then
          if not d.noExpand and B.db.tab == "gear" then
            expandedSlot = (expandedSlot ~= d.slot) and d.slot or nil
            BuildList(); UpdateRows()
          end
        elseif IsShiftKeyDown and IsShiftKeyDown() then
          LinkItem(d.item)
        elseif d.alt then
          -- picking one of the listed options: this is what you're going for
          B:SetTarget(d.slot, d.wornIndex or 1, d.item.id)
          UI:Refresh()
        else
          LinkItem(d.item)
        end
      elseif d.kind == "quest" then
        local r = d.quest.rewards and d.quest.rewards[1]
        if r and r.id and r.id > 0 then LinkItem(r) end
      end
    end))
    rows[i] = row
  end

  -- mousewheel scrolling
  f:EnableMouseWheel(true)
  f:SetScript("OnMouseWheel", safe("list-scroll", function(_, delta)
    offset = math.max(0, math.min(offset - delta * 3, math.max(0, #listData - ROWS)))
    UpdateRows()
  end))

  -- thin BiS-collected progress bar, gear tab only, just above the footer
  f.progressBar = CreateFrame("StatusBar", nil, f)
  f.progressBar:SetPoint("TOPLEFT", 14, listTop - ROWS * ROW_H - 10)
  f.progressBar:SetPoint("TOPRIGHT", -14, listTop - ROWS * ROW_H - 10)
  f.progressBar:SetHeight(8)
  f.progressBar:SetStatusBarTexture("Interface\\TargetingFrame\\UI-StatusBar")
  f.progressBar:SetStatusBarColor(0.35, 0.85, 0.25)
  f.progressBar:SetMinMaxValues(0, 1)
  f.progressBar:SetValue(0)
  local barBG = f.progressBar:CreateTexture(nil, "BACKGROUND")
  barBG:SetAllPoints(true)
  barBG:SetColorTexture(0.1, 0.1, 0.1, 0.6)

  f.footer = f:CreateFontString(nil, "OVERLAY", "GameFontNormal")
  f.footer:SetPoint("BOTTOM", 0, 16)

  -- an open dropdown must not outlive the window (Escape closes the frame)
  f:SetScript("OnHide", CloseOpenMenu)

  -- CreateFrame returns a *visible* frame, so without this the first /bis
  -- built the window and then Toggle immediately hid it again — the command
  -- appeared to do nothing until you typed it a second time.
  f:Hide()

  -- refresh when item info streams in from the server
  f:RegisterEvent("GET_ITEM_INFO_RECEIVED")
  f:RegisterEvent("BAG_UPDATE_DELAYED")
  f:SetScript("OnEvent", function()
    if f:IsShown() then UpdateRows() end
  end)
end

function UI:UpdateDropdowns()
  local tab = B.db.tab
  local showSpecBracket = (tab == "gear" or tab == "shopping")
  local showInstance = (tab == "quests")
  f.specMenu:SetShown(showSpecBracket)
  f.bracketPrev:SetShown(showSpecBracket)
  f.bracketNext:SetShown(showSpecBracket)
  f.bracketMenu:SetShown(showSpecBracket)
  f.instanceMenu:SetShown(showInstance)
  f.bothFactionsCB:SetShown(showInstance)
  f.searchBox:SetShown(tab == "gear")
  f.instanceInfo:SetShown(showInstance)
  -- statLine and instanceInfo share the same anchor; only one may ever show
  f.statLine:SetShown(not showInstance)

  -- highlight the active tab (all three looked identical before)
  for id, btn in pairs(f.tabButtons or {}) do
    if id == tab then btn:LockHighlight() else btn:UnlockHighlight() end
  end

  if showSpecBracket then
    local cd = B:ClassData()
    local active = B:DetectSpec()

    local specItems = {}
    if cd then
      for _, s in ipairs(cd.specs or {}) do
        table.insert(specItems, { text = s.name, value = s.id })
      end
    end
    f.specMenu:SetItems(specItems, active and active.id or nil)
    f.specMenu:SetLabel(active and active.name or "Spec")

    local exp = B:ExpData()
    local cur = B:CurrentBracket(active)
    local bracketItems, curMeta = {}, nil
    for _, br in ipairs((exp and exp.brackets) or {}) do
      local hasData = false
      for _, sb in ipairs((active and active.brackets) or {}) do
        if sb.id == br.id then hasData = true end
      end
      if hasData then
        table.insert(bracketItems, {
          text = br.name .. (br.sub and (" |cff9d8253— " .. br.sub .. "|r") or ""),
          value = br.id,
        })
        if cur and br.id == cur.id then curMeta = br end
      end
    end
    f.bracketMenu:SetItems(bracketItems, cur and cur.id or nil)
    f.bracketMenu:SetLabel(curMeta and curMeta.name or (cur and cur.id) or "Bracket")
  end

  if showInstance then
    local instances = B:Instances()
    f.bothFactionsCB:SetChecked(B.db.showBothFactions)

    local items, lastType = {}, nil
    for idx, inst in ipairs(instances) do
      if inst.type ~= lastType then
        table.insert(items, { text = (inst.type == "raid") and "-- Raids --" or "-- Dungeons --", title = true })
        lastType = inst.type
      end
      table.insert(items, { text = B:InstanceLabel(inst), value = idx })
    end
    f.instanceMenu:SetItems(items, selectedInstance)
    local inst = instances[selectedInstance]
    f.instanceMenu:SetLabel(inst and B:InstanceLabel(inst) or "Instance")
  end
end

-- Called by the zone watcher when you walk into a dungeon we have data for.
function UI:SelectInstanceByIndex(idx)
  selectedInstance = idx
  offset = 0
  if f and f:IsShown() then UI:Refresh() end
end

-- Selecting a bracket pins it so looking ahead survives a level-up; choosing
-- the one that matches your level hands control back to the automatic pick.
function UI:SetBracket(id)
  B.db.bracket = id
  B.db.bracketPinned = (id ~= B:DefaultBracket()) or nil
  offset, expandedSlot = 0, nil
  UI:Refresh()
end

-- Step through the brackets this spec has data for (the < > buttons).
function UI:StepBracket(delta)
  local spec = B:DetectSpec()
  if not spec then return end
  local exp = B:ExpData()
  local ordered, curIndex = {}, 1
  local cur = B:CurrentBracket(spec)
  for _, br in ipairs((exp and exp.brackets) or {}) do
    for _, sb in ipairs(spec.brackets or {}) do
      if sb.id == br.id then
        table.insert(ordered, br.id)
        if cur and cur.id == br.id then curIndex = #ordered end
      end
    end
  end
  if #ordered == 0 then return end
  local nextIndex = math.max(1, math.min(#ordered, curIndex + delta))
  if ordered[nextIndex] ~= (cur and cur.id) then UI:SetBracket(ordered[nextIndex]) end
end

function UI:IsShown()
  return f ~= nil and f:IsShown()
end

-- Switch to a tab, opening the frame if needed. Used by tab buttons and /bis shop.
function UI:ShowTab(tab)
  B.db.tab = tab
  offset = 0
  if not f then CreateMainFrame() end
  if not f:IsShown() then f:Show() end
  UI:Refresh()
end

function UI:Toggle()
  if not f then CreateMainFrame() end
  if f:IsShown() then
    f:Hide()
  else
    f:Show()
    offset = 0
    UI:Refresh()
  end
end
