 


const wei = 1000000000000000000;//18 zero

const eth = Math.log10(wei);//convertit en base 10
console.log(eth);
//affiche 18

console.time("label");

let sum = 0;

for(let i = 0; i < 10000; i+=1){
    sum += i;
}

console.timeEnd("label");
//affiche label: 0.28ms ===> temps de traitement de la boucle for


let api_url = `https://api.1inch.exchange/v3.0/1/tokens`;

//fetch(api_url);//appelle le web service contenu dans api_url
console.log("*********data*************");
let webservice = fetch(api_url).then(response => response.json())
.then(data => {
    document.body.innerHTML = `<p>${data.tokens["0x006bea43baa3f7a6f765f14f10a1a1b08334ef45"].symbol}</p>`//objet json contient une property "symbol`;
    document.body.innerHTML += `<p>${data.tokens["0x006bea43baa3f7a6f765f14f10a1a1b08334ef45"].name}</p>`;//objet json contient une property "name`;
    console.log(data);
    console.timeEnd("fetch");//temps écoulé pour que la promise soit terminée
});

console.log("after the fetch promise ");//le programme peut exécuter console.log avant que se termine la Promise
console.time("fetch");//démarrage du chronomètre avant le début d'éxecution de la Promise

console.log("*********log*************");
webservice = fetch(api_url)
            .then(response => response.json())
            .then(console.log);
 
 
 


//2 status de promise: Fullfilled ou Rejected
Promise.reject().catch(error => console.log(error));
//on provoque un rejet de promise et on récupère l'erreur du reject dans catch 