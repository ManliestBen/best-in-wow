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
local selectedInstance = 1
local searchQuery = ""

-- ---------------- helpers ----------------
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

-- ---------------- list building ----------------
local function BuildGearList()
  wipe(listData)
  local spec = B:DetectSpec()
  local bracket = B:CurrentBracket(spec)
  if not spec or not bracket then
    table.insert(listData, { kind = "msg", text = "No data for your class in this expansion yet." })
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
        table.insert(listData, {
          kind = "item", slot = slotKey, item = items[i],
          label = SlotLabel(slotKey, i),
          expandable = #items > n,
        })
      end
      if expandedSlot == slotKey then
        for i = n + 1, #items do
          table.insert(listData, { kind = "item", slot = slotKey, item = items[i],
            label = "  · alt " .. (i - n), alt = true })
        end
      end
    end
  end
end

local function BuildQuestList()
  wipe(listData)
  local instances = B:Instances()
  if #instances == 0 then
    table.insert(listData, { kind = "msg", text = "No quest data for this expansion yet." })
    return
  end
  if selectedInstance > #instances then selectedInstance = 1 end
  local inst = instances[selectedInstance]
  if inst.attunement then
    table.insert(listData, { kind = "msg", text = "|cffc8aa6eAttunement:|r " .. inst.attunement, wrap = true })
  end
  for _, q in ipairs(inst.quests or {}) do
    if B:QuestVisible(q) then
      table.insert(listData, { kind = "quest", quest = q })
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
    table.insert(listData, { kind = "msg", text = "No data for your class in this expansion yet." })
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
        if d.expandable and not d.alt then suffix = " |cff777777[+alts]|r" end
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
    f.progressBar:Hide()
    f.notesBtn:Hide()
  end

  -- expansion toggle button always reflects the currently-loaded "other" expansion
  local other = B:OtherExpansion()
  if other then
    f.expBtn:SetText("|cffc8aa6e→ " .. (B.SHORT_EXP[other] or other:upper()) .. "|r")
    f.expBtn:Show()
  else
    f.expBtn:Hide()
  end
end

function UI:Refresh()
  if not f or not f:IsShown() then return end
  BuildList()
  UpdateRows()
  UI:UpdateDropdowns()
end

-- ---------------- frame construction ----------------
local function MakeDropdown(name, parent, width)
  local dd = CreateFrame("Frame", name, parent, "UIDropDownMenuTemplate")
  UIDropDownMenu_SetWidth(dd, width)
  return dd
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
  f.expBtn:SetScript("OnClick", function()
    local other = B:OtherExpansion()
    if other and B:SwitchExpansion(other) then
      offset, expandedSlot, selectedInstance = 0, nil, 1
      searchQuery = ""
      if f.searchBox then f.searchBox:SetText("") end
      UI:Refresh()
    end
  end)

  -- tab buttons
  local gearBtn = CreateFrame("Button", nil, f, "UIPanelButtonTemplate")
  gearBtn:SetSize(90, 22)
  gearBtn:SetPoint("TOPLEFT", 14, -38)
  gearBtn:SetText("Gear")
  gearBtn:SetScript("OnClick", function() UI:ShowTab("gear") end)

  local questBtn = CreateFrame("Button", nil, f, "UIPanelButtonTemplate")
  questBtn:SetSize(90, 22)
  questBtn:SetPoint("LEFT", gearBtn, "RIGHT", 6, 0)
  questBtn:SetText("Quests")
  questBtn:SetScript("OnClick", function() UI:ShowTab("quests") end)

  local shopBtn = CreateFrame("Button", nil, f, "UIPanelButtonTemplate")
  shopBtn:SetSize(90, 22)
  shopBtn:SetPoint("LEFT", questBtn, "RIGHT", 6, 0)
  shopBtn:SetText("Shopping")
  shopBtn:SetScript("OnClick", function() UI:ShowTab("shopping") end)

  -- search box — gear tab only, top-right, clear of the close button and tabs
  f.searchBox = CreateFrame("EditBox", "BiSCompanionSearchBox", f, "InputBoxTemplate")
  f.searchBox:SetAutoFocus(false)
  f.searchBox:SetSize(140, 20)
  f.searchBox:SetPoint("TOPRIGHT", -30, -40)
  f.searchBox:SetScript("OnTextChanged", function(self)
    searchQuery = self:GetText() or ""
    offset = 0
    UI:Refresh()
  end)
  f.searchBox:SetScript("OnEscapePressed", function(self)
    self:SetText("")
    self:ClearFocus()
  end)
  f.searchBox:SetScript("OnEnterPressed", function(self) self:ClearFocus() end)

  -- dropdowns
  f.specDD = MakeDropdown("BiSCompanionSpecDD", f, 120)
  f.specDD:SetPoint("TOPLEFT", 2, -64)
  f.bracketDD = MakeDropdown("BiSCompanionBracketDD", f, 150)
  f.bracketDD:SetPoint("LEFT", f.specDD, "RIGHT", 100, 0)
  f.instanceDD = MakeDropdown("BiSCompanionInstanceDD", f, 260)
  f.instanceDD:SetPoint("TOPLEFT", 2, -64)

  -- "both factions" checkbox — quests tab only
  f.bothFactionsCB = CreateFrame("CheckButton", "BiSCompanionBothFactionsCB", f, "UICheckButtonTemplate")
  f.bothFactionsCB:SetSize(24, 24)
  f.bothFactionsCB:SetPoint("TOPRIGHT", -120, -66)
  local bfText = _G[f.bothFactionsCB:GetName() .. "Text"]
  if bfText then bfText:SetText("Both factions") end
  f.bothFactionsCB:SetScript("OnClick", function(self)
    B.db.showBothFactions = self:GetChecked() and true or false
    offset = 0
    UI:Refresh()
  end)

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
  f.notesBtn:SetScript("OnEnter", function(self)
    local spec = B:DetectSpec()
    if not spec or not spec.notes then return end
    GameTooltip:SetOwner(self, "ANCHOR_LEFT")
    GameTooltip:AddLine("|cffc8aa6eSpec notes|r")
    GameTooltip:AddLine(spec.notes, 1, 1, 1, true)
    GameTooltip:Show()
  end)
  f.notesBtn:SetScript("OnLeave", function() GameTooltip:Hide() end)

  -- instance zone/notes line — quests tab only, below the instance dropdown
  f.instanceInfo = f:CreateFontString(nil, "OVERLAY", "GameFontNormalSmall")
  f.instanceInfo:SetPoint("TOPLEFT", 16, -96)
  f.instanceInfo:SetPoint("TOPRIGHT", -16, -96)
  f.instanceInfo:SetJustifyH("LEFT")
  f.instanceInfo:SetWordWrap(true)
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

    row:SetScript("OnEnter", function(self)
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
        GameTooltip:AddLine("|cff777777Click: link in chat" .. (canExpand and " · Right-click: show alternates|r" or "|r"))
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
    end)
    row:SetScript("OnLeave", function() GameTooltip:Hide() end)
    row:RegisterForClicks("LeftButtonUp", "RightButtonUp")
    row:SetScript("OnClick", function(self, button)
      local d = self.data
      if not d then return end
      if d.kind == "item" then
        if button == "RightButton" then
          if not d.noExpand and B.db.tab == "gear" then
            expandedSlot = (expandedSlot ~= d.slot) and d.slot or nil
            BuildList(); UpdateRows()
          end
        else
          LinkItem(d.item)
        end
      elseif d.kind == "quest" then
        local r = d.quest.rewards and d.quest.rewards[1]
        if r and r.id and r.id > 0 then LinkItem(r) end
      end
    end)
    rows[i] = row
  end

  -- mousewheel scrolling
  f:EnableMouseWheel(true)
  f:SetScript("OnMouseWheel", function(_, delta)
    offset = math.max(0, math.min(offset - delta * 3, math.max(0, #listData - ROWS)))
    UpdateRows()
  end)

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
  f.specDD:SetShown(showSpecBracket)
  f.bracketDD:SetShown(showSpecBracket)
  f.instanceDD:SetShown(showInstance)
  f.bothFactionsCB:SetShown(showInstance)
  f.searchBox:SetShown(tab == "gear")
  f.instanceInfo:SetShown(showInstance)

  if showSpecBracket then
    local cd = B:ClassData()
    local active = B:DetectSpec()
    UIDropDownMenu_Initialize(f.specDD, function()
      if not cd then return end
      for _, s in ipairs(cd.specs) do
        local info = UIDropDownMenu_CreateInfo()
        info.text = s.name
        info.checked = (active and active.id == s.id)
        info.func = function()
          B.db.spec = s.id; offset = 0; UI:Refresh()
        end
        UIDropDownMenu_AddButton(info)
      end
    end)
    UIDropDownMenu_SetText(f.specDD, active and active.name or "Spec")

    local exp = B:ExpData()
    local brackets = exp and exp.brackets or {}
    local cur = B:CurrentBracket(active)
    UIDropDownMenu_Initialize(f.bracketDD, function()
      for _, br in ipairs(brackets) do
        local hasData = false
        if active then
          for _, sb in ipairs(active.brackets or {}) do
            if sb.id == br.id then hasData = true end
          end
        end
        if hasData then
          local info = UIDropDownMenu_CreateInfo()
          info.text = br.name
          info.checked = (cur and cur.id == br.id)
          info.func = function()
            B.db.bracket = br.id; offset = 0; UI:Refresh()
          end
          UIDropDownMenu_AddButton(info)
        end
      end
    end)
    local curMeta
    for _, br in ipairs(brackets) do if cur and br.id == cur.id then curMeta = br end end
    UIDropDownMenu_SetText(f.bracketDD, curMeta and curMeta.name or (cur and cur.id) or "Bracket")
  end

  if showInstance then
    local instances = B:Instances()
    if selectedInstance > #instances then selectedInstance = 1 end
    f.bothFactionsCB:SetChecked(B.db.showBothFactions)

    local function InstanceLabel(inst)
      local lvl = inst.levelRange
      local prefix = (lvl and lvl[1] and lvl[2]) and ("[" .. lvl[1] .. "-" .. lvl[2] .. "] ") or ""
      return prefix .. inst.name
    end

    UIDropDownMenu_Initialize(f.instanceDD, function()
      local lastType = nil
      for idx, inst in ipairs(instances) do
        if inst.type ~= lastType then
          local header = UIDropDownMenu_CreateInfo()
          header.text = (inst.type == "raid") and "— Raids —" or "— Dungeons —"
          header.isTitle = true
          header.notCheckable = true
          UIDropDownMenu_AddButton(header)
          lastType = inst.type
        end
        local info = UIDropDownMenu_CreateInfo()
        info.text = InstanceLabel(inst)
        info.checked = (idx == selectedInstance)
        info.func = function()
          selectedInstance = idx; offset = 0; UI:Refresh()
        end
        UIDropDownMenu_AddButton(info)
      end
    end)
    local inst = instances[selectedInstance]
    UIDropDownMenu_SetText(f.instanceDD, inst and InstanceLabel(inst) or "Instance")
  end
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
