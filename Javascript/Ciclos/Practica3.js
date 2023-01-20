let edad,peso;
let sumpesoninos=0, sumpesojovenes=0,sumpesoadltos=0, sumpesoviejos=0;

let contninos=0,contjovenes=0,contadultos=0,contviejos=0;


for(let i=0;i<20;i++){

edad=parseInt(prompt("Ingrese la edad de la persona"))
if(!Number.isInteger(edad)|| edad<0){

alert("No es una edad valida")

}else{
    peso=parseFloat(prompt("ingrese el peso de la persona"))
    if(peso<=0){
        alert("No es un peso valido intentelo de nuevo")

    }else{

        if(edad>=0 && edad<=12){
            sumpesoninos +=peso
            contninos++

        }else{
            if(edad>=13 && edad<=29){
                sumpesojovenes +=peso
                contjovenes++
    
            }else{
                if(edad>=30 && edad<=59){
                    sumpesoadltos +=peso
                    contadultos++
        
                }else{
                    if(edad>=60){
                        sumpesoviejos+=peso
                        contviejos++
            
                    }else{

                        continue
                    }


                }



            }



        }



    }

}



}

console.log("el promedio de peso de los ninos es: "+ (sumpesoninos/contninos))
console.log("el promedio de peso de los jovenes  es: "+ (sumpesojovenes/contjovenes))
console.log("el promedio de peso de los adultos es: "+ (sumpesoadltos/contadultos))
console.log("el promedio de peso de los viejos es: "+ (sumpesoviejos/contviejos))