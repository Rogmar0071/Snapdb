export function computeCash(events) {
    let sales = 0;
    let purchases = 0;
    let expenses = 0;
    for (const e of events) {
        if (e.type === "PAYMENT")
            sales += e.amount ?? 0;
        if (e.type === "PURCHASE")
            purchases += e.amount ?? 0;
        if (e.type === "EXPENSE")
            expenses += e.amount ?? 0;
    }
    return sales - purchases - expenses;
}
