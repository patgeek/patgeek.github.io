let api_url = `https://api.coinpaprika.com/v1/coins`; 

async function getTop10Tokens(){
    let response =  await fetch(api_url);
    const tokens = await  response.json();

    return tokens.filter(token =>token.rank >= 1 &&  token.rank <= 10)
            .map(token => token.symbol);
}

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

   getTop10Tokens()
    .then(getTickerData)
    .then(console.log); 
