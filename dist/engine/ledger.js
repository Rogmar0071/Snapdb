import { loadLedger, saveLedger } from "./storage";
export class Ledger {
    constructor() {
        this.events = loadLedger();
    }
    getAll() {
        return [...this.events];
    }
    append(event) {
        if (!event.reference)
            throw new Error("Reference required");
        if (this.events.find(e => e.reference === event.reference))
            throw new Error("Duplicate reference");
        this.events.push(event);
        saveLedger(this.events);
    }
    clear() {
        this.events = [];
        saveLedger(this.events);
    }
}
