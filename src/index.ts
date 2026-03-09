import * as json from "reaper-api/json";
import { deferLoop, log } from "reaper-api/utils";
import { ImGui } from "./shim";
import { copy } from "reaper-api/clipboard";
import { inspect } from "reaper-api/inspect";

log(ImGui.ChildFlags_AlwaysUseWindowPadding);

const ctx = ImGui.CreateContext("My script");

deferLoop(
  (stop) => {
    const [visible, open] = ImGui.Begin(ctx, "My window", true);
    if (visible) {
      ImGui.Text(ctx, "Hello World!");
      ImGui.End(ctx);
    }

    if (!open) stop();
  },
  () => {},
);
