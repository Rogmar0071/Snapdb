import { computeInventory } from "./inventory";
import { computeOutstanding } from "./orders";
import { computeCash } from "./cash";
export function rebuild(events) {
    return {
        inventory: computeInventory(events),
        outstanding: computeOutstanding(events),
        cash: computeCash(events)
    };
}
