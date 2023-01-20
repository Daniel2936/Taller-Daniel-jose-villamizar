let entero=parseInt(prompt("ingrese el numero entero"))
if(entero<=0){
alert("no es un numero entero valido")

}else{
   for(let i=0;i<=entero;i++){

    if((i+1)%2==0){

        console.log("es numero impar ", i)

    }else{

        continue
    }

   }

}