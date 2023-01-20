let tipouva=prompt("Ingrese el tipo de la uva")
if(tipouva=="A" || tipouva=="B"){
    let tamauva=parseInt(prompt("ingrese el tamaño de la uva"))

    if(tamauva==1 || tamauva==2){
        let preciouva=parseFloat(prompt("Ingrese el precio del kilo de uva"))
        let cantidaduva=parseInt(prompt("Cuantos kilos desea comprar"))

        if(tipouva=="A"&&tamauva==1){
            let producto=(preciouva+20)*cantidaduva
            let total=producto -(producto*0.01)
            console.log("el productor recibira en total del producto"+producto);
            console.log("el productor recibira en total con el 10 % de descuento"+total);
            console.log("el tipo de uva vendido fue "+tipouva+" y el tamano fue "+tamauva)


        }else{
            if(tipouva=="A"&&tamauva==2){
                let producto=(preciouva+30)*cantidaduva
                let total=producto -(producto*0.1)
                console.log("el productor recibira en total del producto " +producto);
                console.log("el productor recibira en total con el 10 % de descuento "+total);
                console.log("el tipo de uva vendido fue "+tipouva+" y el tamano fue "+tamauva)
    
            }else{
                if(tipouva=="B"&&tamauva==1){
                    let producto=(preciouva-30)*cantidaduva
                    let total=producto -(producto*0.2)
                    console.log("el productor recibira en total del producto "+producto);
                    console.log("el productor recibira en total con el 20 % de descuento "+total);
                    console.log("el tipo de uva vendido fue "+tipouva+" y el tamano fue "+tamauva)
        
                }else{
                    if(tipouva=="B"&&tamauva==2){
                        let producto=(preciouva-50)*cantidaduva
                        let total=producto -(producto*0.01)
                        console.log("el productor recibira en total del producto "+producto);
                        console.log("el productor recibira en total con el 20 % de descuento "+total);
                        console.log("el tipo de uva vendido fue "+tipouva+" y el tamano fue "+tamauva)
            
                    }


                }



            }
            




        }



    }else{

        alert("No es un tamaño de uva valido")
    }


}else{
    
    alert("No es un tipo de uva valido")


}