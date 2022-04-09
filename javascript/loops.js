const cryptos = ['BTC' , 'ETH' , 'BNB' , 'ADA' , 'XRP'];

 

console.log("-----for let--------");
for(let crypto of cryptos){
    console.log(crypto);
}

console.log("-----for in--------");

for(let index in cryptos){
    console.log(cryptos[index]);
}

console.log("-----for i++--------");
for(let i=0; i<cryptos.length ; i+=1){
    console.log(cryptos[i]);
}

console.log("-----while cryptos--------");
let i=0;
while(i<cryptos.length){
    console.log(cryptos[i]);
    i++;
}


let value = null;

/*console.log("-----Do while--------");
do{
    value = prompt("Enter a number: ");
}while( !(value>0)); 

console.log(value);*/

console.log("----- while prompt--------");
while( !(value>0)){
    value = prompt("Enter a number: ");
}

console.log(value);



console.log("----- for  cryptos i++--------");
for(let i=0; i<cryptos.length ; i++){
    console.log(i);
}



console.log("----- for  cryptos ++i--------");
for(let i=0; i<cryptos.length ; ++i){
    console.log(i);
}


console.log("----- for  cryptos i+=1--------");
for(let i=0; i<cryptos.length ; i+=1){
    console.log(i);
}

console.log("----- forEach  cryptos  1--------");

cryptos.forEach(function(crypto)  {
    console.log(crypto);
});


console.log("----- forEach  cryptos  2--------");

cryptos.forEach(crypto => {
    console.log(crypto);
});


const paragraphs = cryptos.map(function(crypto){
    document
        .body
        .innerHTML += `<p>${crypto}</p>`;
});

const paragraphs2 = cryptos.map(function(crypto){
     return `<p>${crypto}</p>`;
});

document
    .body
    .innerHTML += paragraphs2.join(" || ");


