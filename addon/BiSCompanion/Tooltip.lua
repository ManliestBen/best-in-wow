-- BiSCompanion Tooltip.lua — annotate any item tooltip in the game with
-- whether that item is on your BiS list, for which spec, bracket and slot.
-- Works anywhere the client shows an item tooltip: bags, loot windows, the
-- auction house, vendors, quest rewards and chat links.
local B = BISC

local MAX_LINES = 4

-- itemId -> { { specName, specId, bracketId, bracketName, slot, rank }, ... }
-- Built lazily for the player's class in the current expansion only, so this
-- indexes a few thousand entries rather than the whole 2 MB dataset.
local index, indexKey

function B:InvalidateTooltipIndex()
  index, indexKey = nil, nil
end

local function BuildIndex()
  local key = (B.db and B.db.expansion or "?") .. ":" .. tostring(B:PlayerClass())
  if index and indexKey == key then return index end
  index, indexKey = {}, key

  local cd, exp = B:ClassData(), B:ExpData()
  if not cd or not exp then return index end

  -- bracket id -> display name and sort order, taken from the expansion's own
  -- bracket list so tooltip lines read the same as the window's dropdown.
  local bracketName, bracketOrder = {}, {}
  for i, br in ipairs(exp.brackets or {}) do
    bracketName[br.id] = br.name
    bracketOrder[br.id] = i
  end

  for _, spec in ipairs(cd.specs or {}) do
    for _, br in ipairs(spec.brackets or {}) do
      for slotKey, items in pairs(br.slots or {}) do
        for _, it in ipairs(items or {}) do
          if it.id and it.id > 0 then
            local list = index[it.id]
            if not list then list = {}; index[it.id] = list end
            table.insert(list, {
              specName = spec.name, specId = spec.id,
              bracketId = br.id,
              bracketName = bracketName[br.id] or br.id,
              bracketOrder = bracketOrder[br.id] or 99,
              slot = B.SLOT_NAMES[slotKey] or slotKey,
              rank = it.rank or 1,
            })
          end
        end
      end
    end
  end
  return index
end

-- Public so the smoke test can assert on it without a live tooltip.
function B:TooltipHits(itemId)
  if not itemId or not B.db then return nil end
  local hits = BuildIndex()[itemId]
  if not hits or #hits == 0 then return nil end

  local activeId = nil
  local ok, spec = pcall(function() return B:DetectSpec() end)
  if ok and spec then activeId = spec.id end

  local sorted = {}
  for i, h in ipairs(hits) do sorted[i] = h end
  table.sort(sorted, function(a, b)
    local ap = (a.specId == activeId) and 0 or 1
    local bp = (b.specId == activeId) and 0 or 1
    if ap ~= bp then return ap < bp end
    if a.rank ~= b.rank then return a.rank < b.rank end
    if a.bracketOrder ~= b.bracketOrder then return a.bracketOrder < b.bracketOrder end
    return (a.specName or "") < (b.specName or "")
  end)
  return sorted
end

local function Annotate(tooltip, itemId)
  if not (B.db and B.db.tooltips) then return end
  local hits = B:TooltipHits(itemId)
  if not hits then return end

  tooltip:AddLine(" ")
  tooltip:AddLine("|cff80ff40BiS Companion|r")
  for i = 1, math.min(#hits, MAX_LINES) do
    local h = hits[i]
    local tag = (h.rank == 1) and "|cff80ff40BiS|r" or ("|cffc8aa6ealt " .. h.rank .. "|r")
    tooltip:AddLine("  " .. h.specName .. " · " .. h.bracketName ..
      " — " .. h.slot .. " (" .. tag .. ")", 1, 1, 1)
  end
  if #hits > MAX_LINES then
    tooltip:AddLine("  |cff777777+" .. (#hits - MAX_LINES) .. " more spec/bracket combos|r")
  end
  tooltip:Show()   -- re-measure after adding lines
end

local function ItemIdFromTooltip(tooltip)
  if not tooltip.GetItem then return nil end
  local ok, _, link = pcall(tooltip.GetItem, tooltip)
  if not ok or not link then return nil end
  return tonumber(link:match("item:(%d+)"))
end

local function HookTooltip(tt)
  if not tt or tt.__biscHooked or not tt.HookScript then return end
  tt.__biscHooked = true
  tt:HookScript("OnTooltipSetItem", function(self)
    -- OnTooltipSetItem can fire repeatedly for one display; only annotate once.
    if self.__biscDone then return end
    local id = ItemIdFromTooltip(self)
    if not id then return end
    self.__biscDone = true
    B:Safe("tooltip", Annotate, self, id)
  end)
  tt:HookScript("OnTooltipCleared", function(self) self.__biscDone = nil end)
end

HookTooltip(GameTooltip)
HookTooltip(ItemRefTooltip)         -- chat links
HookTooltip(ShoppingTooltip1)       -- equipped-comparison tooltips
HookTooltip(ShoppingTooltip2)
