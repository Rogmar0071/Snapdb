const ledger = [];

function append(event){
  ledger.push({...event, ts:Date.now()});
}

function inventory(){
  let total=0;
  ledger.forEach(e=>{
    if(e.type==="in") total+=e.qty;
    if(e.type==="out") total-=e.qty;
  });
  return total;
}

function cash(){
  let c=0;
  ledger.forEach(e=>{
    if(e.type==="sale") c+=e.amount;
    if(e.type==="expense") c-=e.amount;
  });
  return c;
}
