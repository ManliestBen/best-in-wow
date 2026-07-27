-- BiSCompanion UI.lua — the in-game window.
local B = BISC
local UI = {}
B.UI = UI

local ROWS, ROW_H = 16, 24
local QUALITY_NUM = { poor = 0, common = 1, uncommon = 2, rare = 3, epic = 4, legendary = 5 }

local f -- main frame
local rows = {}
local listData = {}   -- flat row descriptors for the current view
local offset = 0
local expandedSlot = nil
local selectedInstance = 1

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

-- ---------------- list building ----------------
local function BuildGearList()
  wipe(listData)
  local spec = B:DetectSpec()
  local bracket = B:CurrentBracket(spec)
  if not spec or not bracket then
    table.insert(listData, { kind = "msg", text = "No data for your class in this expansion yet." })
    return
  end
  for _, slotKey in ipairs(B.SLOT_ORDER) do
    local items = B:SlotItems(bracket, slotKey)
    if #items > 0 then
      local n = math.min(B.WORN[slotKey] or 1, #items)
      for i = 1, n do
        table.insert(listData, {
          kind = "item", slot = slotKey, item = items[i],
          label = (B.WORN[slotKey] and (B.SLOT_NAMES[slotKey]:gsub("s$", "") .. " " .. i)) or B.SLOT_NAMES[slotKey],
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

local function BuildList()
  if B.db.tab == "quests" then BuildQuestList() else BuildGearList() end
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
      end
    end
  end

  -- header / footer
  local spec = B:DetectSpec()
  if B.db.tab == "gear" then
    local bracket = B:CurrentBracket(spec)
    local have, total = B:Progress(bracket)
    f.footer:SetText(string.format("BiS collected: |cff80ff40%d|r / %d  (bags+bank count)", have, total))
    if spec and spec.statPriority then
      f.statLine:SetText("|cffc8aa6e" .. spec.statPriority .. "|r")
    else
      f.statLine:SetText("")
    end
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
    else
      f.footer:SetText("")
    end
    f.statLine:SetText("")
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
  f:SetSize(460, 560)
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

  -- tab buttons
  local gearBtn = CreateFrame("Button", nil, f, "UIPanelButtonTemplate")
  gearBtn:SetSize(90, 22)
  gearBtn:SetPoint("TOPLEFT", 14, -38)
  gearBtn:SetText("Gear")
  gearBtn:SetScript("OnClick", function()
    B.db.tab = "gear"; offset = 0; UI:Refresh()
  end)

  local questBtn = CreateFrame("Button", nil, f, "UIPanelButtonTemplate")
  questBtn:SetSize(90, 22)
  questBtn:SetPoint("LEFT", gearBtn, "RIGHT", 6, 0)
  questBtn:SetText("Quests")
  questBtn:SetScript("OnClick", function()
    B.db.tab = "quests"; offset = 0; UI:Refresh()
  end)

  -- dropdowns
  f.specDD = MakeDropdown("BiSCompanionSpecDD", f, 120)
  f.specDD:SetPoint("TOPLEFT", 2, -64)
  f.bracketDD = MakeDropdown("BiSCompanionBracketDD", f, 150)
  f.bracketDD:SetPoint("LEFT", f.specDD, "RIGHT", 100, 0)
  f.instanceDD = MakeDropdown("BiSCompanionInstanceDD", f, 280)
  f.instanceDD:SetPoint("TOPLEFT", 2, -64)

  f.statLine = f:CreateFontString(nil, "OVERLAY", "GameFontNormalSmall")
  f.statLine:SetPoint("TOPLEFT", 16, -96)
  f.statLine:SetPoint("TOPRIGHT", -16, -96)
  f.statLine:SetJustifyH("LEFT")
  f.statLine:SetWordWrap(false)

  -- list rows
  local listTop = -114
  for i = 1, ROWS do
    local row = CreateFrame("Button", nil, f)
    row:SetSize(430, ROW_H)
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
        GameTooltip:AddLine("|cff777777Click: link in chat · Right-click: show alternates|r")
        GameTooltip:Show()
      elseif d.kind == "quest" then
        local q = d.quest
        GameTooltip:AddLine(q.name, 1, 0.82, 0)
        if q.questGiver then GameTooltip:AddLine("Given by: " .. q.questGiver, 1, 1, 1, true) end
        if q.prereq then GameTooltip:AddLine("Prereq: " .. q.prereq, 0.79, 0.63, 0.42, true) end
        if q.note then GameTooltip:AddLine(q.note, 0.6, 0.6, 0.6, true) end
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
          expandedSlot = (expandedSlot ~= d.slot) and d.slot or nil
          BuildList(); UpdateRows()
        else
          LinkItem(d.item)
        end
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
  local isGear = B.db.tab ~= "quests"
  f.specDD:SetShown(isGear)
  f.bracketDD:SetShown(isGear)
  f.instanceDD:SetShown(not isGear)

  if isGear then
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
  else
    local instances = B:Instances()
    UIDropDownMenu_Initialize(f.instanceDD, function()
      for idx, inst in ipairs(instances) do
        local info = UIDropDownMenu_CreateInfo()
        info.text = inst.name
        info.checked = (idx == selectedInstance)
        info.func = function()
          selectedInstance = idx; offset = 0; UI:Refresh()
        end
        UIDropDownMenu_AddButton(info)
      end
    end)
    local inst = instances[selectedInstance]
    UIDropDownMenu_SetText(f.instanceDD, inst and inst.name or "Instance")
  end
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
