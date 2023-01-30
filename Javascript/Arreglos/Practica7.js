var empleado=new Object();
var listasempleados=[];
let contadorem;
contadorem=parseInt(prompt("Cuantos empleados desea registrar"));
if(Number.isInteger(contadorem)&&contadorem>0){
    for(let i=0;i<contadorem;i++){

        empleado={
            nombre:prompt("Ingrese el nombre del empleado No "+(i+1)),
            usuario:prompt("ingrese el usuario del empleado No "+(i+1)),
            clave:prompt("ingrese la clave del empelado No "+(i+1))
        }
        listasempleados.push(empleado)
        empleado={}


    }

    console.log("esta es la lista de empleados con la informacion respectica : \n",listasempleados)

}else{

    alert("no es un numero valido de empleados intentetlo de nuevo")
}


//otra forma

let nombre
let usuario
let conta

let empleados=[]
let empelado={}

for(let i=0;i<2;i++){
    nombre=prompt("NOmbre")
    usuario=prompt("usuario")
    conta=prompt("contraseña")

    empleado.nombre=nombre
    empleado.usuario=usuario
    empleado.conta=conta

    empleados.push(empleado)
    empleado={}
}

//console.log(empleados)