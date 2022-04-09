
const transaction =
 `{"fromtoken":{
    "symbol":"ETH",
    "name": "Ethereum",
    "decimals":18
    },
    "toToken":{
        "symbol":"USDC",
        "name": "USD Coin",
        "decimals":6
    }
}`;

const jsonObj = JSON.parse(transaction);//transforme string en objet json
console.log(jsonObj);

const jsonString = JSON.stringify(jsonObj);//transforme objet json en string
console.log(jsonString);