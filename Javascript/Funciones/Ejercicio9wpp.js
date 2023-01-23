let vendedor=parseInt(prompt("cuantos vendedores desea ingresar"))

function porcentaje(num1,num2,num3){
    let total=(num1+num2+num3)*0.1
    return total;
}

if(vendedor>0){
    for(let i=0;i<vendedor;i++){
        let sueldobase=parseFloat(prompt("Ingrese el sueldo base del vendedor No"+(i+1)))
        if(sueldobase>=0){
            let venta1=parseFloat(prompt("Ingrese el valor de la venta1  del vendedor No"+(i+1)))
            if(venta1>=0){
                let venta2=parseFloat(prompt("Ingrese el valor de la venta2 del vendedor No"+(i+1)))
                if (venta2>=0){
                    let venta3=parseFloat(prompt("Ingrese el valor de la venta3 del vendedor No"+(i+1)))
                    if(venta3>=0){

                        let totalventas=venta1+venta2+venta3
                        let comision=porcentaje(venta1,venta2,venta3)
                        console.log("El sueldo base del vendedor "+(i+1)+ " es: "+sueldobase)
                        console.log("El total de ventas realizadas por el vendedor "+(i+1)+" fue: "+totalventas)
                        console.log("las comisiones recibidas por el vendedor "+(i+1)+" son: "+comision)
                        console.log("El total que recibira el vendedor "+(i+1)+" es: ",(sueldobase+comision))

                    }else{
                        alert("no es ul sueldo valido")
                        break
                    }

                }else{
                    alert("no es ul sueldo valido")
                    break
                }

            }else{
                alert("no es ul sueldo valido")
                break
            }
        }else{
            alert("no es ul sueldo valido")
            break
        }
    }
}else{

    alert("No es un numero valido de vendedores, intente de nuevo")
}