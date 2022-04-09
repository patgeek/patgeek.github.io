let top5cryptos = ["BTC" , "ETH" , "USDT" , "ADA" , "DOT"];

document
 .body
 .innerHTML = `${top5cryptos.join(" ||  ")}`;


 top5cryptos.push("VET");


 document
 .body
 .innerHTML = `${top5cryptos.join(" ||  ")}`;

 let cryptos = top5cryptos;
cryptos.push("SHIBA");

document
 .body
 .innerHTML = `${cryptos.join(" ||  ")}`;

 document
 .body
 .innerHTML = `${top5cryptos.join(" ||  ")}`;

 //copy ou clone du array top5cryptos
 let listcrypto = top5cryptos.slice();

 document
 .body
 .innerHTML = `${listcrypto.join(" ||  ")}`;


 //suppression du dernier element de la copie du tableau
 //listcrypto.pop();
 document
 .body
 .innerHTML = `${listcrypto.join(" ||  ")}`;

  
 document
 .body
 .innerHTML = `${top5cryptos.join(" ||  ")}`;
  
//copy ou clone du array top5cryptos de ETH à USDT
 listcrypto = top5cryptos.slice(1,4);

listcrypto.pop();
 document
 .body
 .innerHTML = `${listcrypto.join(" ||  ")}`;

 //autre façon de cloner un array
let clonetop5cryptos =  [...top5cryptos];
 document
 .body
 .innerHTML = `${clonetop5cryptos}`;

 //on copie 2 fois array top5cryptos
 clonetop5cryptos =  [...top5cryptos , ...top5cryptos];
 [...top5cryptos];
 document
 .body
 .innerHTML = `${clonetop5cryptos}`;

 //transformer array en Objet Json 
 const JsonFromArray = JSON.stringify(top5cryptos);
 document
 .body
 .innerHTML = `${JsonFromArray}`;

 //transformer Objet Json  en array
  const ArrayFromJson = JSON.parse(JSON.stringify(top5cryptos));
 document
 .body
 .innerHTML = `${ArrayFromJson}`; 

 //array of objects
 let transactions = [
    {
        currency : "ETH",
        amount: 100000000000000000
    },

    {
        currency : "BTC",
        amount: 0.2
    }

 ];

 //clone du array transactions
 //let clonedTransaction = [...transactions];
 let clonedTransaction = JSON.parse(JSON.stringify(transactions));
 clonedTransaction[1].amount += 0.3;

 console.log(`--------------Oringinal Transactions array----------`); 

 //console.log(`Original of Transactions currency ${JSON.stringify(transactions)}`);
 //console.log(`Original of Transactions amount ${transactions[1].amount}`);
console.log(transactions);

 console.log(`--------------Copy of Transactions array----------`); 
 console.log(clonedTransaction);
 //console.log(`Clone of Transactions currency ${JSON.stringify(clonedTransaction)}`);
 //console.log(`Clone of Transactions amount ${clonedTransaction[1].amount}`);