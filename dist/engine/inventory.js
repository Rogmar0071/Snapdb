export function computeInventory(events) {
    const stock = {};
    for (const e of events) {
        if (!e.item)
            continue;
        const current = stock[e.item] ?? 0;
        const qty = (e.qtyIn ?? 0) -
            (e.qtyOut ?? 0);
        stock[e.item] = current + qty;
    }
    return stock;
}
