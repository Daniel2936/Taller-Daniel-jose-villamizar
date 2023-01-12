let nota=parseInt(prompt("Ingrese la calificacion a validar"));
if(Number.isInteger(nota)){
    if(nota=>10){

        console.log("si es una nota valida")




    }else{
        console.log("no es una nota valida en el rango 1 a 20")
        alert("No es una calificacion valida")
    }


}else{

    alert("No es una calificacion valida")
}
