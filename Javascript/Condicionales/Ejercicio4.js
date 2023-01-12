let nota=parseInt(prompt("Ingrese una nota a validar"));
if(Number.isNaN(nota)){

    alert("No es una nota valida")
}else{
    if(nota<=20&&nota>=1){
        if(nota<=9){

            console.log("La calificacion equivalente es E")
        }else{
            if(nota<=12){

                console.log("La calificacion equivalente es D")
            }else{
                if(nota<=15){

                    console.log("La calificacion equivalente es C")
                }else{
                    if(nota<=18){

                        console.log("La calificacion equivalente es B")
                    }else{
                        if(nota<=20){

                            console.log("La calificacion equivalente es A")
                        }


                    }


                }


            }


            
        }


    }else{

        alert("No es numero valido")
    }



}   



