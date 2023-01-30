let s="samsung",i="iphone",x="xiaomi",m="motorola",h="huawei",o="oppo"
let invents=0,inventi=0,inventx=0,inventm=0,inventh=0,invento=0;
let cantidads,cantidadi,cantidadx,cantidadm,cantidadh,cantidado;
let valors=1200000,valori=4500000,valorx=850000,valorm=750000,valorh=1000000,valoro=680000;
let opcion,opcionventa;
let cantidadcel,ventas,marcacel;
let ventasam,ventaipho,ventaxia,ventamoto,ventahua,ventaopp
let totals=0,totali=0,totalx=0,totalm=0,totalh=0,totalo=0;
do {
    opcion=parseFloat(prompt(`que marca desea registrar
    1. Samsung
    2. Iphone
    3. Xiaomi
    4. Motorola
    5. HUawei
    6. Oppo
    7. No deseo ingresar mas celulares al inventario`))

    if(Number.isInteger(opcion)&&opcion>0&&opcion<8){
        switch (opcion) {
            case 1:
                cantidads=parseFloat(prompt("Cuantos telefonos desea ingresar de la marca Samsung?:"))
                if(Number.isInteger(cantidads)&&cantidads>0){
                    invents +=cantidads;
                }else{
                    alert("NO es un numero valido de celulares")
                }
                break;
            case 2:
                cantidadi=parseFloat(prompt("Cuantos telefonos desea ingresar de la marca Iphone?:"))
                if(Number.isInteger(cantidadi)&&cantidadi>0){
                    inventi +=cantidadi;
                }else{
                    alert("NO es un numero valido de celulares")
                }
                break;
            case 3:
                cantidadx=parseFloat(prompt("Cuantos telefonos desea ingresar de la marca Xiaomi?:"))
                if(Number.isInteger(cantidadx)&&cantidadx>0){
                    inventx +=cantidadx;
                }else{
                    alert("NO es un numero valido de celulares")
                }
                break;
            case 4:
                cantidadm=parseFloat(prompt("Cuantos telefonos desea ingresar de la marca Motorola?:"))
                if(Number.isInteger(cantidadm)&&cantidadm>0){
                    inventm +=cantidadm;
                }else{
                    alert("NO es un numero valido de celulares")
                }
                break;
            case 5:
                cantidadh=parseFloat(prompt("Cuantos telefonos desea ingresar de la marca Huawei?:"))
                if(Number.isInteger(cantidadh)&&cantidadh>0){
                    inventh +=cantidadh;
                }else{
                    alert("NO es un numero valido de celulares")
                }
                break;
            case 6:
                cantidado=parseFloat(prompt("Cuantos telefonos desea ingresar de la marca Oppo?:"))
                if(Number.isInteger(cantidado)&&cantidado>0){
                    invento +=cantidado;
                }else{
                    alert("No es un numero valido de celulares")
                }
                break;
            default:
                alert("Perfecto que tenga buen dia")
                break;
        }
    }else{
        alert("Ojo no es un numero valido")
    }  
} while (opcion!=7);

console.log(`El inventario despues de registrar los equipos queda asi:

1. Samsung== ${invents} unidades
2. Iphone==  ${inventi} unidades
3. Xiaomi==  ${inventx} unidades
4. Motorola== ${inventm} unidades
5. Huawei==   ${inventh} unidades
6. Oppo==   ${invento} unidades`)

do {
    opcionventa=parseFloat(prompt(`VENTA DE CELULARES

    1. Venta de celulares segun marca
    2. No registrar mas ventas y mostral el total de las ventas`))
    if(Number.isInteger(opcionventa)&&opcionventa==1){
        marcacel=prompt(`Que marca desea vender
        seleccione numero segun marca
        1. Samsung
        2- Iphone
        3. Xiaomi
        4. Motorola
        5. HUawei
        6. Oppo`)//falto arreglar las opciones con numeros
        switch (marcacel) {
            case s:
                ventasam=parseFloat(prompt("Cuantos telefonos desea vender de la marca Samsung"))
                if(Number.isInteger(ventasam)&&ventasam>0){
                    if(ventasam<=invents){
                        invents -=ventasam
                        console.log("la cantidad de telefonos samsung disponibles es: "+(invents))
                        totals +=(ventasam*valors)
                    }else{
                        if(invents==0){
                            alert(`Ya vendio todos los equipos de inventario
                            o no tienen ningun equipo en bodega`)
                        }else{
                            alert("NO hay esa cantidad de equipos en el inventario")
                        } 
                    }
                }else{
                    alert("no es una cantidad valida de celulares")
                }
                break;
            case i:
                ventaipho=parseFloat(prompt("Cuantos telefonos desea vender de la marca Iphone"))
                if(Number.isInteger(ventaipho)&&ventaipho>0){
                    if(ventaipho<=inventi){
                        inventi -=ventaipho
                        console.log("la cantidad de telefonos Iphone disponibles es: "+(inventi))
                        totali +=(ventaipho*valori)
                    }else{
                        if(inventi==0){
                            alert(`Ya vendio todos los equipos de inventario
                            o no tienen ningun equipo en bodega`)
                        }else{
                            alert("NO hay esa cantidad de equipos en el inventario")
                        } 
                    }
                }else{
                    alert("no es una cantidad valida de celulares")
                }
                break;
            case x:
                ventaxia=parseFloat(prompt("Cuantos telefonos desea vender de la marca Xiaomi"))
                if(Number.isInteger(ventaxia)&&ventaxia>0){
                    if(ventaxia<=inventx){
                        inventx -=ventaxia
                        console.log("la cantidad de telefonos Xiaomi disponibles es: "+(inventx))
                        totalx +=(ventaxia*valorx)
                    }else{
                        if(inventx==0){
                            alert(`Ya vendio todos los equipos de inventario
                            o no tienen ningun equipo en bodega`)
                        }else{
                            alert("NO hay esa cantidad de equipos en el inventario")
                        } 
                    }
                }else{
                    alert("no es una cantidad valida de celulares")
                }
                break;
            case m:
                ventamoto=parseFloat(prompt("Cuantos telefonos desea vender de la marca Motorola"))
                if(Number.isInteger(ventamoto)&&ventamoto>0){
                    if(ventamoto<=inventm){
                        inventm -=ventamoto
                        console.log("la cantidad de telefonos motorola disponibles es: "+(inventm))
                        totalm +=(ventamoto*valorm)
                    }else{
                        if(inventm==0){
                            alert(`Ya vendio todos los equipos de inventario
                            o no tienen ningun equipo en bodega`)
                        }else{
                            alert("NO hay esa cantidad de equipos en el inventario")
                        } 
                    }
                }else{
                    alert("no es una cantidad valida de celulares")
                }
                break;
            case h:
                ventahua=parseFloat(prompt("Cuantos telefonos desea vender de la marca Huawei"))
                if(Number.isInteger(ventahua)&&ventahua>0){
                    if(ventahua<=inventh){
                        inventh -=ventahua
                        console.log("la cantidad de telefonos Huawei disponibles es: "+(inventh))
                        totalh +=(ventahua*valorh)
                    }else{
                        if(inventh==0){
                            alert(`Ya vendio todos los equipos de inventario
                            o no tienen ningun equipo en bodega`)
                        }else{
                            alert("NO hay esa cantidad de equipos en el inventario")
                        } 
                    }
                }else{
                    alert("no es una cantidad valida de celulares")
                }
                break;
            case o:
                ventaopp=parseFloat(prompt("Cuantos telefonos desea vender de la marca Oppo"))
                if(Number.isInteger(ventaopp)&&ventaopp>0){
                    if(ventaopp<=invento){
                        invento -=ventaopp
                        console.log("la cantidad de telefonos Oppo disponibles es: "+(invento))
                        totalo +=(ventaopp*valoro)
                    }else{
                        if(invento==0){
                            alert(`Ya vendio todos los equipos de inventario
                            o no tienen ningun equipo en bodega`)
                        }else{
                            alert("NO hay esa cantidad de equipos en el inventario")
                        } 
                    }
                }else{
                    alert("no es una cantidad valida de celulares")
                }
                break
        
            default:
                alert("No es una marca valida, por favor verifique")
                break;
        }
       

    }else{
        if(opcionventa==2){
            alert("Muchas gracias buen dia")
        }else{
            alert("OJO no es un numero valido")

        }
        
    }
    
} while (opcionventa!=2);

console.log(`
El  Nuevo inventario despues de vender los equipos queda asi:

1. Samsung== ${invents} unidades
2. Iphone==  ${inventi} unidades
3. Xiaomi==  ${inventx} unidades
4. Motorola== ${inventm} unidades
5. Huawei==   ${inventh} unidades
6. Oppo==   ${invento} unidades`)

console.log(`Las ventas del dia fueron

1. Samsung == ${totals/valors} unidades vendidas con un valor de ${totals}
2. Iphone == ${totali/valori} unidades vendidas con un valor de ${totali}
3. Xiaomi == ${totalx/valorx} unidades vendidas con un valor de ${totalx}
4. Motorola == ${totalm/valorm} unidades vendidas con un valor de ${totalm}
5. Huawei == ${totalh/valorh} unidades vendidas con un valor de ${totalh}
5. Oppo == ${totalo/valoro} unidades vendidas con un valor de ${totalo}


EL TOTAL POR TODAS LAS VENTAS ES DE ${totals+totali+totalx+totalm+totalh+totalo}`)
