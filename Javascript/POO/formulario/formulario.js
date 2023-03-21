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

const btn=document.querySelector('#submit')
const nombre=document.getElementById('nombre')
const apellidos=document.getElementById('apellidos')
const fechanac=document.getElementById('fechanac')
const cedula=document.getElementById('cedula')
const formulario=document.getElementById('formulario')
let fechaactual=new Date()
const lista=[]

formulario.addEventListener("submit", form);

function form(event) {
  event.preventDefault();
}

btn.addEventListener('click',function(){

        let fechaper=new Date(fechanac.value)
        let edad=(fechaactual.getFullYear())-(fechaper.getFullYear())
        const persona=new Persona(cedula.value,nombre.value,apellidos.value,fechanac.value,edad)
        
        if(nombre.value!=" "&& apellidos.value!=" " &&fechanac.value!=" "&&cedula.value!=""){
            lista.push(persona)
            console.log(lista)
            nombre.value=" "
            apellidos.value=" "
            fechanac.value=" "
            cedula.value=" " 
         }

        
    


})