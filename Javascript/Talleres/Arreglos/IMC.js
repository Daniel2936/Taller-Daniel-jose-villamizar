var familiar =new Object();
const familiares=[];
let opcion,cantfamilia,nombre,parentesco,peso,altura,resultado;

function formula(altura,peso){
    let formula=peso/(altura*altura)
    return (formula)
}

do {
    opcion=parseFloat(prompt(`Ingrese el numero para determinar la opcion a realizar
    1. Ingresar Familiares
    2. Ingresar datos necesarios
    3. Mostrar resultados
    4. Salir`))
    if(Number.isInteger(opcion)&&opcion>0&&opcion<=4){
        switch (opcion) {
            case 1:
                cantfamilia=parseFloat(prompt("Cuantos familiares desea ingresar"))
                if(Number.isInteger(cantfamilia)&&cantfamilia>0){
                    for(let i=0;i<cantfamilia;i++){
                        nombre=prompt(`Ingrese el nombre del familiar N${i+1}`)
                        parentesco=prompt(`Ingrese el parentesco de ${nombre}`)
                        familiar.nombre=nombre
                        familiar.parentesco=parentesco
                        familiar.peso=peso
                        familiar.altura=altura
                        familiares.push(familiar)
                        familiar={}
                    }
                }else{
                    alert("no es  un numero valido da familiares, vuelva a registrar")
                }
                break;
            case 2:
                familiares.forEach(el => {
                    peso=parseFloat(prompt(`Ingrese el peso de ${el.nombre} en kilos`))
                    if(peso>0){
                        altura=parseFloat(prompt(`Ingrese la altura de ${el.nombre} en metros`))
                        if(altura>0){
                            el.peso=peso
                            el.altura=altura                           
                        }else{
                            alert("No es un peso valido, por favor ingrese de nuevo desde el menu")
                        }
                    }else{
                        alert("No es un peso valido, por favor ingrese de nuevo desde el menu")
                    } 
                });                
                break;
            case 3:
                console.log(familiares)

                familiares.forEach(el => {
                    resultado=formula(el.altura,el.peso).toFixed(1)
                    if(resultado<18.5){
                        console.log(`EL IMC DE ${el.nombre} ES DE ${resultado} PESON: Bajo peso`)
                    }else{
                        if(resultado<25){
                            console.log(`EL IMC DE ${el.nombre} ES DE ${resultado} PESO : Normal`)
                        }else{
                            if(resultado<29){
                                console.log(`EL IMC DE ${el.nombre} ES DE ${resultado} PESO : Sobrepeso`)
                            }else{
                                if(resultado<35){
                                    console.log(`EL IMC DE ${el.nombre} ES DE ${resultado} PESO : Obeso I`)
                                }else{
                                    console.log(`EL IMC DE ${el.nombre} ES DE ${resultado} PESO : Obeso II`)
                                }
                            }
                        }
                    }
                });
                break;
            default:
                break;
        }
    }else{
        alert("No es una opcion valida intente de nuevo")
    } 
} while (opcion !=4);