// `https://api.1inch.exchange/v3.0/1/tokens`;//ethereum blockchain
//let api_url = `https://api.coinpaprika.com/v1/coins`;//eth blockchain
// `https://api.1inch.exchange/v3.0/56/tokens`;//binance smart chain

//https://api.1inch.exchange/v3.0/137/tokens //polygon blockchain

let api_url = `https://api.coinpaprika.com/v1/coins`; 

async function getTop10Tokens(){
    let response =  await fetch(api_url);
    const tokens = await  response.json();

    return tokens.filter(token =>token.rank >= 1 &&  token.rank <= 10)
            .map(token => token.symbol);
}
///////////////////////




async function getTop10Tokens(){
    let response =  await fetch(api_url);
    const tokens = await  response.json();

    return tokens.filter(token =>token.rank >= 1 &&  token.rank <= 10)
            .map(token => token.symbol);
}

//////////////////////

getTop10Tokens().then(console.log);






async function getTickerData(tickerList){

    const response = await fetch(api_url);
    const tokens = await response.json() ;

    const tokenList = Object.values(tokens);

   return tokenList.filter(token => tickerList.includes(token.symbol));
    //includes ==> vérifie si une valeur est présente dans une liste ==>return true or false
    // return une liste avec les symbol de la liste tokens passé en paramètre

      

}

//cette promise 
//getTop10Tokens()
// .then(tickerList => getTickerData(tickerList));

//est la même chose que cette promise
//getTop10Tokens().then(getTickerData);

   /*getTop10Tokens()
    .then(getTickerData)
    .then(console.log); */
  
    getTop10Tokens()
    .then(getTickerData)
    .then(renderForm);  

    function formSubmitted(event){
        event.preventDefault();

      const fromAddress =  document.querySelector("[name=from-token]").value;
     const toAddrress =   document.querySelector("[name=to-token]").value;

     console.log(fromAddress);
    }

    document.querySelector(".js-submit-quote")
        .addEventListener('click' , formSubmitted);

    function renderForm(tokens){
        const options = tokens.map(token=>
         `<option value=${token.name}>${token.name}(${token.symbol})</option>`);
         document.querySelector("[name=from-token]").innerHTML = options.join('');
         document.querySelector("[name=to-token]").innerHTML = options;
        // console.log(tokens);
        // console.log(options.join(''));
     }

     let [decimals, adress] = "18-0xxxx".split('-');
    

     console.log([decimals, adress]); //affiche 18 et 0xxxx

     console.log([decimals]);
      //affiche 18

      console.log([adress]);
      //affiche  0xxxx

      let a=5,b=18;

      [a,b] = [b,a];

      console.log([a,b]);
      //affiche 18 et 5
       let fromToken = [18,"0xxxxx"];
      //let fromToken = document.querySelector("[name=from-token]");
      const [fromDecimals,fromAdress] = fromToken;

      console.log("********** test  [fromDecimals,fromAdress] = fromToken *****************");
      console.log([fromDecimals]);
     
      console.log([fromAdress]);

     const to = 1645567235;

     from = 1000000000000000000;

     let result = to / from *(10 ** (18-8));

     console.log(result);


      let expr = "first,second".split(",").join("</li><li>");

      console.log(expr);
