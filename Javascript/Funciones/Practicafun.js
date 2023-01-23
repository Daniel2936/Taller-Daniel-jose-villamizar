
let opcion=parseInt(prompt("que desea 1--- sumas 3 numeros, 2--- restar 2 numeros"))
var x,z=0

function suma(num1,num2,num3){
    return num1+num2+num3
}

function resta(num1,num2){
    return num1-num2
}

if(Number.isInteger(opcion)){
    switch (opcion) {
        case 1:
            let variable1=parseFloat(prompt("Ingrese el primer numero"))
            let variable2=parseFloat(prompt("Ingrese el segundo numero"))
            let variable3=parseFloat(prompt("Ingrese el tercer numero"))
            x=suma(variable1,variable2,variable3)
            console.log("el resultado de la suma es "+x)        
            break;
        
        case 2:
            let variable4=parseFloat(prompt("Ingrese el primer numero"))
            let variable5=parseFloat(prompt("Ingrese el segundo numero"))
            z=resta(variable4,variable5)
            console.log("El resultado de la resta es "+z)
            break;

        default:
            alert("no es un numero valido")
            break;
    }
}else{
    alert("no es un numero valido")
}

