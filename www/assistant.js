/* =====================================
   SNAP ASSISTANT
   Suggest only (no math)
   Converts chat -> events
   ===================================== */

const SnapAssistant = (() => {

  function parse(text){

    text = text.toLowerCase();

    const number = n => parseFloat(n);

    if(text.includes("buy") || text.includes("bought")){
      return {
        type:"purchase",
        qty:number(text.match(/\d+/)?.[0] || 0),
        amount:number(text.match(/r?(\d+)/)?.[1] || 0)
      };
    }

    if(text.includes("sold") || text.includes("sale")){
      return {
        type:"sale",
        qty:number(text.match(/\d+/)?.[0] || 0),
        amount:number(text.match(/r?(\d+)/)?.[1] || 0)
      };
    }

    if(text.includes("expense")){
      return {
        type:"expense",
        amount:number(text.match(/r?(\d+)/)?.[1] || 0)
      };
    }

    return null;
  }

})();
