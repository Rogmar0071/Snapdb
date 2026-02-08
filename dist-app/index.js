// @ts-nocheck
/*
  Snap App entry
  App = UI only
  Engine = math
  No typing needed here
*/
import * as Engine from "../dist/engine/index.js";
async function boot() {
    console.log("SnapDB booting…");
    const ledger = Engine.createLedger();
    ledger.append({
        type: "SNAPSHOT",
        ref: crypto.randomUUID(),
        timestamp: Date.now(),
        data: {}
    });
    console.log("Ledger ready:", ledger.events.length);
}
boot();
