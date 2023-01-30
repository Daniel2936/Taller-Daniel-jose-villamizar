var empleado=new Object();
var listaempleados=[];
var lista1=[],lista2=[],lista3=[]

let nombre
let usuario
let contra
let contador=0
contadorem=parseInt(prompt("Cuantos empleados desea registrar"));
if(Number.isInteger(contadorem)&&contadorem>0){
    for(let i=0;i<contadorem;i++){

        nombre=prompt("Ingrese el nombre del empleado No "+(i+1))
        usuario=prompt("ingrese el usuario del empleado No "+(i+1))
        contra=prompt("ingrese la clave del empelado No "+(i+1))
        
        empleado.nombre=nombre
        empleado.usuario=usuario
        empleado.contra=contra
        listaempleados.push(empleado)
        empleado={}

    }

    function buscar(arreglo,letra){
        if(arreglo.includes(letra)){
            return arreglo
        }

    }

    function reemplazar1(arreglo,letra,letra2){
        if(arreglo.includes(letra)){
            return arreglo.replaceAll(letra,letra2.toUpperCase())
        }

    }
    lista1= listaempleados.filter(element => {
         if(buscar(element.nombre,"e")){
            return element
            
         } 

    });
    lista2= listaempleados.filter(element => {
        if(buscar(element.usuario,"j")){
           return element
        } 

   });

    lista3= listaempleados.filter(element => {
        reemplazar1(element.contra,"a","x")
        reemplazar1(element.contra,"e","x")
        return element

   });
    console.log(lista1)
    console.log(lista2)
    console.log(lista3)



}else{

    alert("no es un numero valido de empleados intentetlo de nuevo")
}
