

let base =parseFloat(prompt("Ingrese el valor de la base del triangulo"));
if(base<=0){

    alert("no es valor valido para la base")
}else{
    let altura =parseFloat(prompt("Ingrese el valor de la altura del triangulo"));
    if(altura<=0){
        alert("No es un valor valido para la altura")

    }else{
        if(altura==base){

            alert("Son valores repetidos no se puede ejecuar")
        }else{

            if(base>5 && altura>4){
                const area=(base*altura/2)
                console.log("se puede calcular el area del triangulo y esta es "+area+"cm°2")


            }else{
                console.log("No se puede calcular el area del triangulo")
                const calculo=((base*2)+10);
                console.log("el resultado del otro calculo es " +calculo)



            }
        }


    }


}
