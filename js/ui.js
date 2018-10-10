class UI {
    constructor() {
         this.init();
    }
    init() {
         this.printCryptoCurrencies();
    }
    // Prints the <option> for the form
    printCryptoCurrencies() {
         cryptoAPI.getCryptoCurrenciesList()
              .then(data => {
                   const cryptoCurrencies = data.cryptoCurrencies;
                 
                   //BUILD THE SELECT FROM THE  REST API
                   const select = document.getElementById('cryptocurrency');

                   cryptoCurrencies.forEach(currency => {
                       //ADD THE OPTION
                       const option= document.createElement('option');
                       option.value= currency.id;
                       option.appendChild(document.createTextNode(currency.name));
                       select.appendChild(option);
                       
                       
                   });

        })
    }
    //PRINTS A MESSAGE TWO PARAMETERS, MESSAGE AND CLASSES
    printMessage(message,className){
        const div= document.createElement('div');

        //ADD THE CLASSES
        div.className= className;
        //ADD THE MESSAGE 
        div.appendChild(document.createTextNode(message));
         const messageDiv = document.querySelector('.messages');
         messageDiv.appendChild(div);
          
        //REMOVE THE MESSAGE
        setTimeout( () =>{
                 
            document.querySelector('.messages div').remove();
              
        } ,2000);    

    }
    //PRINT THE RESULT OF THE VALUATION/ RATE
    displayResult(result,currency){
            
        //READ THE CURRENCY
        let currencyName;
        currencyName ='price_'+ currency.toLowerCase();
        
        //REMOVE THE PREVIOUS RESULT 
        const prevResult = document.querySelector('#result > div');
        if(prevResult){
            prevResult.remove();
        }

        const value = result[currencyName]; 
        let HTMLTemplet = '';
        HTMLTemplet+=`
            <div class="card cyan darken-3">
             <div class="card-content white-text">
             <span class= "card-title">Result</span>
             <p>price of ${result.name} in ${currency} is  ${value}</p>
             <p>Last Hour: ${result.percent_change_1h}%</p>
             <p>Last Day: ${result.percent_change_24h}%</p>
             <p>Last 7Day: ${result.percent_change_7d}%</p>

             
             </div>
            </div>
        `;
        this.showSpinner();
        //AFTER 1 SECOND PRINT THE RESULT AND REMOVE THE SPINNER 
        setTimeout(() =>{
            //PRINT THE RESULT
            const divResult = document.querySelector('#result');
        divResult.innerHTML=HTMLTemplet;
            //HIDE THE SPINNER
            document.querySelector('.spinner img').remove();
        },1000)
        
   }
   showSpinner(){
       const spinerGIF= document.createElement('img');
       spinerGIF.src = 'img/spinner.gif';
       document.querySelector('.spinner').appendChild(spinerGIF);
   }
}  
