import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_BfNCGSFqbyqyiIG42WDKGnO2W8uARDwXllVbDdKI');


 

 export  async  function convertCurrency(fromCurrency , toCurrency, units) {
const res = await freecurrencyapi.latest ({
     base_currency: fromCurrency,
        currencies:  toCurrency
     });
     const multiplier = res.data[toCurrency];
     return multiplier*units;
}



