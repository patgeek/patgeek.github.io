 console.log("  moralis is COOL");

//alert("  moralis is COOL");
let name = prompt(`Ènter your name`);
document
 .querySelector(".js-container")
 .innerHTML = `your name is:   ${name}`;

/*document
 .querySelector(".js-container")
 .innerHTML = `moralis is COOL!!! ${5%2==='1'}`;*/

 //$0.querySelector.innerHTML="trick";

 var  coinName = "bitcoin";

let  newbitcoin = 43000;//block scope

const PI=3.14;

//objects
const purchase = {
  coinName : coinName,
  amount : newbitcoin

};

console.log(purchase);

console.log(`Object Name     ${purchase.toString()}`);

console.log(`Coin Name  : ${purchase.coinName}`);

console.log(`Coin Value  : ${purchase.amount}`);

let key1 = `coinName`;

let key2 = `amount`;

console.log(`Coin Name by Key===> ${purchase[key1]}`);
console.log(`Coin Value by Key===> ${purchase[key2]}`);

purchase.owner = {
  name : "Tu Minh Tri",
  account : "122222"
};


console.log(`Coin Owner Name==> ${purchase.owner.name}`);
//${purchase.owner?.name} ===> présence optionnelle du property name dans l'objet owner

console.log(`Coin Owner Account==> ${purchase.owner.account}`);

let cheatCode = [0,1,3,4,5,6];

console.log(`1er element ===>  ${cheatCode[0]}`);
console.log(`2ème element ===>  ${cheatCode[1]}`);
console.log(`3ème element ===>  ${cheatCode[2]}`);
console.log(`4ème element ===>  ${cheatCode[3]}`);
console.log(`5ème element ===>  ${cheatCode[4]}`);
console.log(`6ème element ===>  ${cheatCode[5]}`);

console.log(`le tableau contient ==> ${cheatCode.length} ellements`);

console.log(`4ème element vaut ${cheatCode.at(3)}`);

console.log(`ensemble du tableau ${cheatCode.toString()}`);

console.log(`ensemble du tableau séparé par un espace blanc ${cheatCode.join(" ")}`);



document
 .body
 .innerHTML = `<ul>
                <li>1er Element ${cheatCode.at(0)}</li>
                <li>2ème Element ${cheatCode.at(1)}</li>
                <li>3ème Element ${cheatCode[2]}</li>
                <li>4ème Element ${cheatCode[3]}</li>
                <li>5ème Element ${cheatCode.at(4)}</li>
                <li>6ème Element ${cheatCode.at(5)}</li>
                <li>Tableau tri&eacute; ${cheatCode.sort()}</li>
                <li>Tableau invers&eacute; ${cheatCode.reverse()}</li>
              </ul>`;