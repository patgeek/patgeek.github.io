let api_url = `https://api.1inch.exchange/v3.0/1/tokens`;

 


async function get1InchEthUsdcData(){
   let  response = await fetch(api_url); //await doit être appelé dans un niveau(function, boucle ...etc) await
   let data = await response.json();
    

   document.body.innerHTML = `<p>${data.tokens["0x006bea43baa3f7a6f765f14f10a1a1b08334ef45"].symbol}</p>`//objet json contient une property "symbol`;
   document.body.innerHTML += `<p>${data.tokens["0x006bea43baa3f7a6f765f14f10a1a1b08334ef45"].name}</p>`;//objet json contient une property "name`;
     
    console.log("Inside function call");
    //return undefined;

    return data;//return n'est pas obligatoire
}


get1InchEthUsdcData();
console.log("After function call");
//"After function call" s'affiche avant "Inside function call" car la promise async await doit attendre un certain temps pour
//retourner une réponse
//dans l'attente de la réponse de la Promise contenue dans async function get1InchEthUsdcData() 
//console.log("After function call") s'éxécute en premier;


get1InchEthUsdcData().then(console.log);//log contient l'object retourné par la Prromise

 //let   data = await get1InchEthUsdcData();
//console.log(data);


