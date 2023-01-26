var lista = new Object();
var listas=[]
let notastotales=0,promedio=0
let estudiantes=parseInt(prompt("Cuantos estudiantes desea ingresar"))
if(Number.isInteger(estudiantes) && estudiantes>0){
    for(let i=0;i<estudiantes;i++){
        lista={
            nombre:prompt("Ingrese el nombre del estudante No "+(i+1)),
            edad:parseInt(prompt("ingrese la edad del estudiante No "+(i+1))),
            nota:parseFloat(prompt("ingrese la nota del estudiante No "+(i+1)))
        }
     
        listas.push(lista)
        lista={}
    }

    listas.forEach(e1=>{
        promedio+=e1.nota

    })

    console.log(listas)
    console.log("el promedio de las notas del curso es: "+(promedio/listas.length))


}else{

    alert("no es un numero valido de estudiantes intente de nuevo")
}