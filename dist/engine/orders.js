export function computeOutstanding(events) {
    let orders = 0;
    let dispatch = 0;
    for (const e of events) {
        if (e.type === "ORDER")
            orders += e.qtyIn ?? 0;
        if (e.type === "DISPATCH")
            dispatch += e.qtyOut ?? 0;
    }
    return orders - dispatch;
}
