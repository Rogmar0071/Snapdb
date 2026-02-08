/* =====================================
   SNAP ENGINE
   Ledger + Deterministic Math
   Append only
   ===================================== */

const SnapEngine = (() => {

  const KEY = "snap_ledger_v1";

  let ledger = JSON.parse(localStorage.getItem(KEY) || "[]");

  function save(){
    localStorage.setItem(KEY, JSON.stringify(ledger));
  }

  function append(event){
    event.id = crypto.randomUUID();
    event.ts = Date.now();

    ledger.push(event);
    save();
  }

  function rebuild(){

    let stock = 0;
    let cash  = 0;
    let orders = 0;

    for(const e of ledger){

      switch(e.type){

        case "purchase":
          stock += e.qty;
          cash  -= e.amount;
          break;

        case "sale":
          stock -= e.qty;
          cash  += e.amount;
          break;

        case "expense":
          cash -= e.amount;
          break;

        case "order":
          orders += e.qty;
          break;

        case "dispatch":
          orders -= e.qty;
          break;
      }
    }

    return { stock, cash, orders };
  }

  function getLedger(){
    return ledger;
  }

  return { append, rebuild, getLedger };

})();
