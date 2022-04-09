  
  // `https://api.1inch.exchange/v3.0/1/tokens`;//ethereum blockchain
//let api_url = `https://api.coinpaprika.com/v1/coins`;//eth blockchain
// `https://api.1inch.exchange/v3.0/56/tokens`;//binance smart chain

//https://api.1inch.exchange/v3.0/137/tokens //polygon blockchain
  
  // connect to Moralis server

  const serverUrl = "https://jogzl85gxwv3.usemoralis.com:2053/server";
  const appId = "v8UcByqTXoiJfnYCXTFXbySvtVB0StPNls4XquFV";


  Moralis.initialize(appId);
  Moralis.serverUrl = serverUrl;
  
  Moralis.start({ serverUrl, appId });

  const $tokenBalanceTbody = document.querySelector(".js-token-balances");

  //Converting from wei using custom function
  const tokenValue = (value, decimals) =>
    (decimals ? value / Math.pow(10, decimals) : value);

  // add from here down
  async function login() {
    let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.authenticate();
    }
    console.log("logged in user:", user);
    getStats();
  }

  async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
  }

  async function getStats(){
    const options = {
      chain: "ETH",
      address: "0x5b3BB6F93548f195129C3E9213F3DeE2532d44a6",
    };

    
    const balances = await Moralis.Web3API.account.getTokenBalances(options);
    console.log("*********** Balance ***********");
    console.log(balances);

    $tokenBalanceTbody.innerHTML = balances.map((token,index)=>`
      <tr>
        <td>${index + 1}</td>
        <td>${token.symbol}</td>
        <td>${tokenValue(token.balance,token.decimals)}</td>
        <td>Button</td>
      </tr>
    `).join('');

  }

  document.getElementById("btn-login").addEventListener("click",login);
  document.getElementById("btn-logout").addEventListener("click",logOut);


 
  let api_url = `https://api.coinpaprika.com/v1/coins`; 

async function getTop10Tokens(){


    console.log("***Top 10 Coin Paprika *********");
    let response =  await fetch(api_url);
    const tokens = await  response.json();

    

    return tokens.filter(token =>token.rank >= 1 &&  token.rank <= 10)
            .map(token => token.symbol);
}

getTop10Tokens().then(console.log);



async function getTickerData(tickerList){
    console.log("********Top 10 Polygon BlockChain ************");

    const response = await fetch("https://api.1inch.exchange/v3.0/137/tokens");
    const tokens = await response.json() ;

    const tokenList = Object.values(tokens.tokens);

    

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
