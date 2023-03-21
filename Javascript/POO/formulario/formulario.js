class Persona{
    cedula
    nombre 
    apellidos
    fechanaci
    edad

    constructor(cedula,nombre,apellidos,fechanaci,edad){
        this.cedula=cedula
        this.nombre=nombre
        this.apellidos=apellidos
        this.fechanaci=fechanaci
        this.edad=edad
    }

}
const nombre=document.getElementById('nombre')
const apellidos=document.getElementById('apellidos')
const fechadenacimiento = document.getElementById("fechadenaciemiento");
const cedula=document.getElementById('cedula')
const formulario=document.getElementById('formulario')
const cajanombre=document.getElementById('nombrecompleto')
const cajacumple=document.getElementById('cumple')
let fechaactual=new Date()
let anoactual=fechaactual.getFullYear()
let mesactual=fechaactual.getMonth()+1
let diaactual=fechaactual.getDate()
console.log(diaactual)
const lista=[]

formulario.addEventListener("submit", form);

function form(event) {
  event.preventDefault();
  let fechaper=new Date(fechadenacimiento.value)
  let anonaci=fechaper.getFullYear()
  let mesnaci=fechaper.getMonth()+1
  let dianaci=fechaper.getDate()+1
  console.log(anonaci,mesnaci,dianaci)
        let edad=(fechaactual.getFullYear())-(fechaper.getFullYear())
        const persona=new Persona(cedula.value,nombre.value,apellidos.value,fechadenacimiento.value,edad)
        
        lista.push(persona)
        console.log(lista)
        cajanombre.innerHTML+=`<p>${nombre.value}  ${apellidos.value}</p>`
        if(anoactual==anonaci&&mesactual==mesnaci&&diaactual==dianaci){
            cajacumple.innerHTML+=`<p>SI CUMPLE HOY</p>`
            
        }else{
            cajacumple.innerHTML+=`<p>NO CUMPLE HOY</p>`
        }


            nombre.value="" 
            apellidos.value=""
            fechadenacimiento.value=""
            cedula.value="" 

}

// cuando le de la opcion buscar por medio de la cedula, la cual debe validar que solo ingrese numeros, debe mostrar nombre, apellidos fecha de nacimiento
// hoy cumples años bien y si no cuantos dias faltan para que cymplan años, hacer la validacion para que no ponga una fecha mayor a la actual