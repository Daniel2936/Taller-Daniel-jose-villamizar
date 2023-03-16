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
let fechaactual=new Date()

const lista=[]


btn.addEventListener('click',function(){

    function name(params) {
        
    }

    const persona=new Persona(cedula.value,nombre.value,apellidos.value,fechanac.value)

    lista.push(persona)


    console.log(lista)
})