let api_url = `https://api.1inch.exchange/v3.0/1/tokens`;//ethereum blockchain


async function parseTokens(){
    try{

        let response = await fetch(api_url);
        let tokens = await response.json();
       // console.log(Object.entries(tokens.tokens));
      // let tokenList = Object.entries(tokens.tokens);
      let tokenList = Object.values(tokens.tokens);
       
       let listItems = tokenList.map( token => 
         `<li>${token.symbol} ${token.name} ${token.address}</li>`);
         //map ===> traitement sur chacun des élements d'un tableau

       document.body.innerHTML += `<ul>${listItems.join('<p> &nbsp;</p>')}</ul>`;
    }
    catch(e){
            console.log(`Error===>${e}`);
    }
}

parseTokens();

let numberArray = [1,2,3,4,5].map(x => `<li>${x}</li>`);

console.log(numberArray);



let numberArray2 = [1,2,3,4,5].map( x=> [ (x=> `<li>${x}</li>`) ("a") , (x=> `<li>${x}</li>`) ("b") , (x=> `<li>${x}</li>`) (3),
(x=> `<li>${x}</li>`) (4) , (x=> `<li>${x}</li>`) (5)]); 
//la fonction map() remplace chaque element du tableau par ("a") ou ("b") ou 3,4,5

console.log(numberArray2);

let i = 0;
let numberArray3 = [1,2,3,4,5].map( x=> [ (x=> `<li>${x}</li>`) (i+=1) , (x=> `<li>${x}</li>`) (i+=1) , (x=> `<li>${x}</li>`) (i+=1),
(x=> `<li>${x}</li>`) (i+=1) , (x=> `<li>${x}</li>`)(i+=1)]); 
//la fonction map() remplace chaque element du tableau par (i+=2)

console.log(numberArray3);

let numberArray4 = [1,2,3,4,5].filter( x => x % 2 === 0).map(x => `<li>${x}</li>`);
//filter(x % 2 === 0) ===> teste si chaque element du tableau est pair
console.log(numberArray4);


async function parseFilterTokens(){
    document.body.innerHTML += "<p><h2>TOKENS with 6 decimals</h2></p>" 
    try{

        let response = await fetch(api_url);
        let tokens = await response.json();
       // console.log(Object.entries(tokens.tokens));
      // let tokenList = Object.entries(tokens.tokens);
      let tokenList = Object.values(tokens.tokens);
       
      //map pour verifier si un token a un decimal === 6
       let listItems = tokenList.filter( token => token.decimals === 6).map( token => 
         `<li>${token.symbol} ${token.name} ${token.address} <strong> decimals: ${token.decimals} </strong></li>`);
         //map ===> traitement sur chacun des élements d'un tableau

       document.body.innerHTML += `<ul>${listItems.join('<p> &nbsp;</p>')}</ul>`;
    }
    catch(e){
            console.log(`Error===>${e}`);
    }
}


parseFilterTokens();