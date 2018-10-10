//INSTANCIATE THE CLASSES 
const cryptoAPI = new CryptoAPI();
const ui = new UI();

//CREATING THE VARIABLES

const form = document.getElementById('form');



//ADD EVENT LISTENER
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    //READ CURRENCY 
    const currencySelect = document.getElementById('currency').value;

    //READ CRYPTOCURRENCY
     const cryptoCurrencySelect= document.getElementById('cryptocurrency').value;
     
     //VALIDATE THAT THE SELECT HAS SOMETHINGc
     if(currencySelect==='' || cryptoCurrencySelect===''){
         //DISPLAY THE ERROR
         ui.printMessage('All the fields are Mandatory','deep-orange darken-4 card-panel');
     }else{
         //QUERY THE REST API
         cryptoAPI.queryAPI(currencySelect,cryptoCurrencySelect)
         .then(data => {
            ui.displayResult(data.result[0],currencySelect);
         })
     }
})