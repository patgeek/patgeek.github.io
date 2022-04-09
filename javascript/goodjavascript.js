//how to solve problem
//1 - state space
//2 - computation
//3 - return value

function sumFirstN(n){
    let sum = 0;//1 - define state space

    if(typeof n !== 'number'){
        return NaN;//Nan vaut 0
    }

    // 2 - computation
    /*for(let i=0; i<n; i+=1){
        sum += i; 
    }*/

    sum = n * (n+1) /2;

    return sum; //3 - return value

}

let res = sumFirstN(6);
console.log(res);

const cryptos = ['BTC' , 'ETH' , 'BNB' , 'ADA' , 'XRP'];

/*
function tickerToList2(tickers, isOrdered = false){
    //1 - define state space
   let tickerList = tickers;

   // computation
   if(!Array.isArray(tickers)) return " Not an array";
  
   if(isOrdered){
       return tickerList.sort().join("||");//tableau trié dans l'ordre
   }else{
    return tickerList.join("||");
   }

    //3 - return value
   return tickerList;
}

console.log("*********array dans le désordre ****************")
let mycryptos = tickerToList2(cryptos, false);

console.log(mycryptos);

console.log("*********array dans l'ordre ****************")
let mycryptos2 = tickerToList2(cryptos, true);

console.log(mycryptos2);

console.log("*********it is not an Array ****************")
let mycryptos3 = tickerToList2("papapap", true);

console.log(mycryptos3);
*/


function tickerToList(tickers, isOrdered = false){
    //1 - define state space
   let listItems = [];
   //let result  = isOrdered? `<ol>` : `<ul>`;

   // computation
   if(!Array.isArray(tickers)) return " Not an array";
  
    for(let crypto of cryptos){
        //result += `<li>${crypto}</li>`;
        listItems.push(`<li>${crypto}</li>`);
    }

    //let result2   = isOrdered?  result += `</ol>` : result += `</ul>`;
     
    //3 - return value
    return `
       ${isOrdered ? '<ol>' : '<ul>'}
           ${listItems.join("||")}
       ${isOrdered ? '</ol>' : '</ul>'}
       `;     

}

let myCryptos =  tickerToList(cryptos);
console.log("**********liste HTML non ordonnée***********");
console.log(myCryptos);
/* liste non ordonée ===> isOrdered initialisée à  false
affiche <ul>
<li>BTC</li>||<li>ETH</li>||<li>BNB</li>||<li>ADA</li>||<li>XRP</li>
</ul>
*/


myCryptos =  tickerToList(cryptos,true);
console.log("**********liste HTML Ordonnée***********");
console.log(myCryptos);
/* liste non ordonée ===> isOrdered = true
affiche <ul>
<li>BTC</li>||<li>ETH</li>||<li>BNB</li>||<li>ADA</li>||<li>XRP</li>
</ol>
*/
