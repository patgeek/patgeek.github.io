

const number = Number.parseInt(prompt("Enter a number:"));

/*
if(number % 2 === 1){
    alert(`${number}  is ODD`);
}else if(Number.isNaN(number)){
    alert(`${number}  is Not a Number`);
}else {
    alert(`${number} is EVEN`);
}
*/

switch(number){
    case 1: console.log("1rst Case");
            break;
    case 2: console.log("2nd Case");
            break;
    default: console.log("Try again");
            break;
}
