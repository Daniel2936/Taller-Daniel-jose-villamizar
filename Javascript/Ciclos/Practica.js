let cond
let nombre;
let nota

do {
 
  nombre=prompt("Ingrese el nombre del estudiante")
  nota=parseFloat(prompt("Ingrese la nota del estudiante"))
  
  if(nota>=0&&nota<=5){
    if(nota>3.5){
        alert("el estudiante aprobó")
      }  else{
    
        alert("el estudiante no aprobó")
      }


  }else{

    alert("nota no valida")
  }

cond=parseInt(prompt("desea ingresar un nuevo estudiante, 1 --- si , 2, noooo"))

} while (cond==1);