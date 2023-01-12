let numero1=parseInt(prompt("Ingrese el valor del primer numero"));
if(numero1<=0){

  alert("no es un numero entero valido, intente de nuevo")
}else{
  let numero2=parseInt(prompt("Ingrese el valor del segundo numero"));
  if(numero2<=0){
    alert("no es un numero entero valido, intente de nuevo")

  }else{
    if(numero1==numero2){
      alert("Son numeros iguales no se puede continuar")
    }else{
      let numero3=parseInt(prompt("Ingrese el valor del tercer numero"));
      if(numero3<=0){
        alert("no es un numero entero valido, intente de nuevo")


      }else{
        if(numero3==numero1||numero3==numero2){
          alert("Son numeros iguales, no se puede continuar")

        } else{
          if(numero1>numero2&&numero1>numero3){
            if(numero2>numero3){
              console.log("El numero mayor es "+numero1)
              console.log("El numero menor es "+numero3)

            }else{
              console.log("El numero mayor es "+numero1)
              console.log("El numero menor es "+numero2)
            }
            

          }else{
            if(numero2>numero1&numero2>numero3){
              if(numero1>numero3){
                console.log("El numero mayor es "+numero2)
                console.log("El numero menor es "+numero3)
  
              }else{
                console.log("El numero mayor es "+numero2)
                console.log("El numero menor es "+numero1)
              }
              
  
            }else{
              if(numero3>numero1&numero3>numero2){
                if(numero1>numero2){
                  console.log("El numero mayor es "+numero3)
                  console.log("El numero menor es "+numero2)
    
                }else{
                  console.log("El numero mayor es "+numero3)
                  console.log("El numero menor es "+numero1)
                }
                
    
              }


            }



          }




        }    

      }


    }


  }

}
  