let numero;
let suma=0

do{

  numero=parseInt(prompt("Ingrese un un numero diferente de 0"))
  if(numero<0){
    continue

  }else{

    suma+=numero
  }
}while(numero !=0)
