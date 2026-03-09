if not reaper.ImGui_GetBuiltinPath then
  reaper.MB("ReaImGui is not installed or too old.", "Error", 0)
  error("failed to initialize imgui")
end

package.path = reaper.ImGui_GetBuiltinPath() .. "/?.lua"

-- https://github.com/TypeScriptToLua/TypeScriptToLua/issues/1101
local ImGui = require("@NoResolution:imgui")("0.10")

return { ImGui = ImGui }
