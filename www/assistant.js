function assistantReply(text){

  text = text.toLowerCase();

  if(text.includes("sale")){
    append({type:"sale",amount:100});
    return "Sale recorded 👍";
  }

  if(text.includes("expense")){
    append({type:"expense",amount:50});
    return "Expense saved.";
  }

  if(text.includes("inventory")){
    return "Stock level: " + inventory();
  }

  if(text.includes("cash")){
    return "Cash balance: " + cash();
  }

  return "Got it.";
}
