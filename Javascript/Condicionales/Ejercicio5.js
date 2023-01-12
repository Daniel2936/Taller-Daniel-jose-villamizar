let numero1=parseInt(prompt("Ingrese el primer numero"));
if(numero1<=0){

alert("no es un numero valido")

}else{

  let numero2=parseInt(prompt("Ingrese el primer numero"));
  if(numero2<=0){
    alert("no es un numero valido")


  }else{

    if(numero1%numero2==0){
  
      console.log(numero1+" es multiplo de "+numero2)
    
    }else{
      if(numero2%numero1==0){
        console.log(numero2+" es multiplo de "+numero1)
    
    
    }else{
    
      console.log("Los 2 numeros no son multiplos")
    }
    
    
    }
    
  }
  

  }
