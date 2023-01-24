
let opcion
let suma1,suma2
let resta1,resta2
let divi1,divi2
let multi1,multi2
let poten1,poten2
let x,y,raiz


function suma(num1,num2) {
    return num1+num2  
}

function resta(num1,num2) {
    return num1-num2  
}
function division(num1,num2){
    return num1/num2
}
function multi(num1,num2) {
    return num1*num2
}


do {
    opcion=parseInt(prompt(`Seleccione la operacion a realizar:
    1. Sumar 2 numeros
    2. Restar 2 numeros
    3. Dividr 2 numeros
    4. Multiplicar 2 numeros
    5. Potencia de 2 numeros
    6. Raiz cuadrada de un numero
    0. Salir`))
       
    switch (opcion) {
        case 1:
            sum1=parseInt(prompt("Ingrese el primer numero"))
            sum2=parseInt(prompt("Ingrese el segundo  numero"))
            console.log("El resultado de la suma es "+ suma(sum1,sum2))
            break;
        case 2:
            resta1=parseInt(prompt("Ingrese el primer numero"))
            resta2=parseInt(prompt("Ingrese el primer numero"))
            console.log("El resultado de la resta es: "+resta(resta1,resta2))
            break;
        case 3:
            divi1=parseInt(prompt("Ingrese el primer numero"))
            divi2=parseInt(prompt("Ingrese el segundo numero"))
            if(divi2==0){
                alert("NO es un numero valido, no se puede dividor por o")
            }else{

                console.log("El resultado de la division es: "+division(divi1,divi2))
            }
            break;
        case 4:
            multi1=parseInt(prompt("Ingrese el primer numero"))
            multi2=parseInt(prompt("Ingrese el segundo numero"))
            console.log("El resultado de la multiplicacion es: "+multi(multi1,multi2))
            break;
        case 5:
            poten1=parseInt(prompt("Ingrese el primer numero"))
            poten2=parseInt(prompt("Ingrese el segundo numero"))
            x=Math.pow(poten1,poten2)
            console.log("La potencia de los 2 numeros es: "+x)
            break;
        case 6:
            raiz=parseInt(prompt("Ingrese el numero a calcular la raiz"))
            z=Math.sqrt(raiz)
            console.log("La raiz del  numero es: " +z)

            break;
    
        default:
            break;
    }

    
} while (opcion!=0);
