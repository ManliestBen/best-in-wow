-- BiSCompanion Minimap.lua — a draggable minimap button, so the addon is
-- reachable without typing a slash command. Hand-rolled rather than pulling in
-- LibDBIcon: the addon ships no libraries and this is ~80 lines.
local B = BISC

local RADIUS = 80
local atan2 = math.atan2 or math.atan   -- 5.1 has atan2; 5.3 folded it into atan

local button

local function PositionButton()
  if not button then return end
  local angle = (B.db and B.db.minimapAngle) or 2.1
  button:ClearAllPoints()
  button:SetPoint("CENTER", Minimap, "CENTER",
    math.cos(angle) * RADIUS, math.sin(angle) * RADIUS)
end

local function OnDragUpdate(self)
  local mx, my = Minimap:GetCenter()
  local px, py = GetCursorPosition()
  local scale = Minimap:GetEffectiveScale()
  if type(scale) ~= "number" or scale == 0 then scale = 1 end
  if type(mx) ~= "number" or type(my) ~= "number" or
     type(px) ~= "number" or type(py) ~= "number" then return end
  px, py = px / scale, py / scale
  if B.db then B.db.minimapAngle = atan2(py - my, px - mx) end
  PositionButton()
end

function B:UpdateMinimapButton()
  if not button then return end
  button:SetShown(not (self.db and self.db.hideMinimap))
  PositionButton()
end

local function CreateButton()
  if button or not Minimap then return end
  button = CreateFrame("Button", "BiSCompanionMinimapButton", Minimap)
  button:SetSize(31, 31)
  button:SetFrameStrata("MEDIUM")
  button:SetFrameLevel(8)
  button:RegisterForClicks("LeftButtonUp", "RightButtonUp")
  button:RegisterForDrag("LeftButton")
  button:SetMovable(true)

  local icon = button:CreateTexture(nil, "BACKGROUND")
  icon:SetSize(20, 20)
  icon:SetTexture("Interface\\Icons\\INV_Chest_Chain_15")
  icon:SetPoint("CENTER", 0, 1)
  icon:SetTexCoord(0.07, 0.93, 0.07, 0.93)

  local border = button:CreateTexture(nil, "OVERLAY")
  border:SetSize(53, 53)
  border:SetTexture("Interface\\Minimap\\MiniMap-TrackingBorder")
  border:SetPoint("TOPLEFT")

  button:SetHighlightTexture("Interface\\Minimap\\UI-Minimap-ZoomButton-Highlight")

  button:SetScript("OnDragStart", function(self)
    self:SetScript("OnUpdate", OnDragUpdate)
  end)
  button:SetScript("OnDragStop", function(self)
    self:SetScript("OnUpdate", nil)
  end)

  button:SetScript("OnClick", function(_, mouseButton)
    B:Safe("minimap-click", function()
      if mouseButton == "RightButton" then
        local order = { gear = "quests", quests = "shopping", shopping = "gear" }
        B.UI:ShowTab(order[B.db.tab] or "gear")
      else
        B.UI:Toggle()
      end
    end)
  end)

  button:SetScript("OnEnter", function(self)
    B:Safe("minimap-tooltip", function()
      GameTooltip:SetOwner(self, "ANCHOR_LEFT")
      GameTooltip:AddLine("|cff80ff40BiS|r Companion")
      local spec = B:DetectSpec()
      if spec then
        local bracket = B:CurrentBracket(spec)
        local have, total = B:Progress(bracket)
        local pct = (total > 0) and math.floor(have / total * 100 + 0.5) or 0
        GameTooltip:AddLine(spec.name .. " · " .. ((bracket and bracket.id) or "?"), 1, 1, 1)
        GameTooltip:AddLine("BiS collected: " .. have .. " / " .. total .. " (" .. pct .. "%)", 1, 1, 1)
      else
        GameTooltip:AddLine("No data for your class in " ..
          ((B.SHORT_EXP and B.SHORT_EXP[B.db.expansion]) or "this expansion"), 1, 1, 1)
      end
      GameTooltip:AddLine(" ")
      GameTooltip:AddLine("Left-click: open  ·  Right-click: next tab", 0.7, 0.7, 0.7)
      GameTooltip:AddLine("Drag: move around the minimap", 0.7, 0.7, 0.7)
      GameTooltip:Show()
    end)
  end)
  button:SetScript("OnLeave", function() GameTooltip:Hide() end)

  B:UpdateMinimapButton()
end

-- Minimap exists by PLAYER_LOGIN; build then so we never race the default UI.
local loader = CreateFrame("Frame")
loader:RegisterEvent("PLAYER_LOGIN")
loader:SetScript("OnEvent", function()
  B:Safe("minimap-create", CreateButton)
end)
