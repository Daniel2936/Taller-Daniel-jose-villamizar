let numero1=Math.floor(Math.random()*10)
let numero2=Math.floor(Math.random()*10)

let residuo1=numero1%numero2
let residuo2=numero2%numero1
switch(residuo1){

    case 0:
        console.log(numero1,"  "+numero2+ " Son multiplos");
    break;

    default:
        console.log(numero1,"  "+numero2+ " No Son multiplos");
        break;
}