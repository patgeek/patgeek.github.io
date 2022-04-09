function createTransactionobject(amount, ticker){

    return{
            //les accolades {} permettent de retourner un Object
    };
}


function createTransactiono(ticker, amount ){
    const transaction = { };//object vide

    transaction.ticker = ticker; //on ajoute des properties à l'object transaction
    transaction.amount = amount;
    

    return transaction;//return object transaction
   
}

const newTransaction = createTransactiono("ETH", 2e18);//2e18 ===>18 zero après le 2 soit 2000000000000000000

console.log(newTransaction);
//affiche ==>{ amount: 'ETH', ticker: 2000000000000000000 }

//on peut modifier les properties amount et ticker de la constante newTransaction
newTransaction.ticker = "BTC";
newTransaction.amount = "1";
console.log(newTransaction);

//Par contre, comme newTransaction est une constante ===> on ne peut pas attribuer un autre objet à newTransaction
//l'instruction suivante est donc interdite
//newTransaction = createTransactiono("BTC", 18);
//TypeError: Assignment to constant variable.

//Par contre, à nouveau on peut modifier les properties amount et ticker de la constante newTransaction
newTransaction.ticker = "VET";
newTransaction.amount = "1e5";
console.log(newTransaction);


function sum(a,b){
    return a+b;
}

console.log(sum(1,1));

console.log(sum(1,sum(1,1)));

const sum2 = (a,b) => a + b;
console.log(sum2(10,5));

const prod = function(a,b) {
    return a*b;
} 

console.log(prod(10,10));

const prod2 = (a,b)  =>{
    return a*b;
} 

console.log(prod2(3,3));
//console.log(prod2);

const sumC = a=> (b=> a+b);
console.log(sumC(4)(4));

const sumC2 = a=> b=> a+b;
console.log(sumC2(2)(2));

function calculateVelocity(speed,acceleration,time){
    return speed + acceleration * time;
}

console.log(calculateVelocity(2,3,5));

const velocity = (speed,acceleration,time) =>{
    return speed + acceleration * time;
}

console.log(velocity(2,3,5));

const velocity2 = (speed,acceleration,time) => speed + acceleration * time;
console.log(velocity2(2,3,5));
