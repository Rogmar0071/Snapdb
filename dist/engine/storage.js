const KEY = "snapdb_ledger";
export function loadLedger() {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
}
export function saveLedger(events) {
    localStorage.setItem(KEY, JSON.stringify(events));
}
