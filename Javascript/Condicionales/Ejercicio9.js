let diametro=parseFloat(prompt("ingrese el valor del diametro de la rueda"))
let grosor=parseFloat(prompt("Ingrese el valor del grosor de la rueda"))
if(diametro>1.4){
    console.log("la rueda es para un vehiculo grande")
    if(grosor<0.4){
        console.log("el grosor para esta rueda es inferior al recomendado")
    } 

}else{
    if(diametro>0.8){
        console.log("la rueda es para un vehiculo mediano")
        if(grosor<0.25){
            console.log("el grosor para esta rueda es inferior al recomendado")
        }
        

    }else{
        console.log("la rueda es para un vehiculo pequeño")

    }


}