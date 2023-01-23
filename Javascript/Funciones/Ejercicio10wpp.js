const sueldo=950000
let contadorautos=0

function comision1(num1){
    let total=num1*170000
    return total
}

function comision2(num1){
    let total=num1*0.05
    return total
}

let vendedor=parseInt(prompt("cuantos vendedores desea ingresar al sistema"))
if(vendedor>0){
    for(let i=0;i<vendedor;i++){
        let autosvendidos=parseInt(prompt("Cauntos autos vendio este mes el vendedor No"+(i+1)))
        if(Number.isInteger(autosvendidos)&&autosvendidos>0){
            let comisiones1=comision1(autosvendidos)
            for(let j=0;j<autosvendidos;j++){
                let valorauto=parseFloat(prompt("Ingrese el valor del auto No "+(j+1)))
                contadorautos= contadorautos + comision2(valorauto);
            }
            console.log("Las comisiones por cantdidad de autos vendidos para el vendedor No "+(i+1)+" Es "+comisiones1)
            console.log("Las comisiones por valor de autos vendidos para el vendedor No "+(i+1)+" Es "+contadorautos)
            console.log("El sueldo completo del empleado No "+(i+1)+" Este mes es: $ "+(sueldo+comisiones1+contadorautos))



        }else{

            alert("No es un numero de autos valido, revise todo")
            break
        }

    }
}else{

    alert("No es un numero valido de vendedores intente de nuevo")
}
