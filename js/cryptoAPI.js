class CryptoAPI {

    //QUERYING THE REST API WITH  A CURRENCY AND CRYPTOCURRENCY
    async queryAPI(currency,cryptocurrency){
            const url = await fetch(`https://api.coinmarketcap.com/v1/ticker/${cryptocurrency}/?convert=${currency}`);

          //RETURN AS JSON
          const result = await url.json();
          //RETURN THE OBJECT 
          return {
              result
          }
    }

    async getCryptoCurrenciesList() {
        const url = await fetch('https://api.coinmarketcap.com/v1/ticker/');

        // Return this as a json
        const cryptoCurrencies = await url.json();

        // return the object
        return {
             cryptoCurrencies
        }
   }
}