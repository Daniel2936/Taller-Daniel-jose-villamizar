let numero1=parseInt(prompt("Ingrese el primer numero"))
if(numero1>=1&&numero1<=10){
    let numero2=parseInt(prompt("Ingrese el segundo numero"))
    if(numero2>=1&&numero2<=10){
        let numero3=parseInt(prompt("Ingrese el tercer numero"))
        if(numero3>=1&&numero3<=10){

            let promedio=(numero1+numero2+numero3)/3
            let calculo=(promedio>5)?"true":"false"
            console.log(calculo)


        }else{
            alert("el numero esta fuera del rango, intentelo de nuevo")

        }


    }else{
        alert("el numero esta fuera del rango, intentelo de nuevo")
    }


}else{

    alert("el numero esta fuera del rango, intentelo de nuevo")
}