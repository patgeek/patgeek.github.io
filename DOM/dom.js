 let headers = document
 .querySelector("h1");//sélectionne juste le 1er élément h1 avec son contenu


 console.log(headers.innerText);

//sélectionne TOUS les éléments h1 et pas uniquement le 1er élément h1
 let h1s = document
            .querySelectorAll("h1");//le résultat est un array avec des h1
            
            
             
 console.log(h1s[0].innerText);
 console.log(h1s[1].innerText);
 console.log(h1s[2].innerText);

 console.log(h1s[0].innerHTML);
 console.log(h1s[1].innerHTML);
 console.log(h1s[2].innerHTML);

 //recupere tout le contenu text du body
 let body = document
                .body.innerText;

console.log(body);

const $node = document.querySelector(".js-node");
//$node ===> $ est une convention pour informer que la variable $node concerne un noeud du dom d'un document html

$node.classList.add("bg-grey");//on ajoute classe "bg-grey" au node
let classbgGrey = $node.classList.toggle("bg-grey");//
console.log(`classe "bg-grey"  was added to node:  ${classbgGrey}`);//classbgGrey = true
classbgGrey = $node.classList.toggle("bg-grey");
console.log(`classe "bg-grey"  was added to node:  ${classbgGrey}`);//classbgGrey = false
//toggle("bg-grey") ==> retourne true ou false pour vérifier si la classe "bg-grey" a été ajoutée ou non au node
/*
Toggling the class means if there is no class name assigned to the element, then a class name can be assigned to 
it dynamically or if a certain class is already present, then it can be removed dynamically
*/


$node.classList.add("border-darkred");//on ajoute classe "border-darkred" au node
//$node.classList.remove("bg-grey");//on supprime la classe "bg-grey" du node

const $link = document
                .querySelector(".js-moralis-link");

$link.setAttribute('href' , 'https://moralis.io');
//on vient de modifier la valeur de l'attribut href du node de class ".js-moralis-link"

let mylink = $link.getAttribute("href");//on récupère la valeur de l'attribut href de $link
//alert(mylink);


//récupérer l'attribut data-winner du div de la class js-winner
let winnerNumber = document
                    .querySelector(".js-winner").getAttribute("data-winner");

//console.log(`The winner is the number ${winnerNumber}`);
 
let allWiners = document.querySelector(".js-winner").dataset;
//dataset est un array qui contient tous les attributs data d'un node

console.log("************ all Winers **********");

console.log(allWiners);

//dataset.winner ==> récupère l'attribut data-winner du node de classe ".js-winner"
let $mywinner = document.querySelector(".js-winner").dataset.winner;
console.log(`The winner is the number ${$mywinner}`);

//on modifie la valeur de l'attribut data-winner du node de classe ".js-winner"
let newWinner =  document.querySelector(".js-winner").dataset.winner = "49";
console.log(`NEW Winner is the number ${newWinner}`);

const $button = document.querySelector(".js-button");


function clickHandler(event){
    event.preventDefault();//empêche le lien de diriger vers une autre page
    console.log(event.target); //event.target identifie sur quel élément on a cliqué
    alert("clicked");
}


$button.addEventListener("click",clickHandler);

const $mylink = document.querySelector(".js-link");

$mylink.addEventListener("click",clickHandler);


const $form = document.querySelector("form");

function submitHandler(event){
    event.preventDefault();//empêche le submit par défaut du button

    $input =  document.querySelector("[name=token-name]");
    alert($input.value);

    $input.value = "";
     
}


$form.addEventListener("submit",submitHandler);
