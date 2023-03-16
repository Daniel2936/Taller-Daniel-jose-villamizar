class Persona {
    nombre
    peso
    estatura
    edad
    cedula

    constructor(nombre,peso,estatura,edad,cedula){
        this.nombre=nombre
        this.peso=peso
        this.estatura=estatura
        this.edad=edad
        this.cedula=cedula
    }

    calcularIMC(){
       const imc=this.peso/(this.estatura*this.estatura)
       return imc
    }

    info(){

        return `Su nombre es:${this.nombre } y su cedula es:${ this.cedula}`
    }
}

const santiago=new Persona("santiago ",70,1.65,19,1098767628)


console.log(santiago)
console.log(santiago.calcularIMC())
console.log(santiago.info())

const imcsantiago=santiago.calcularIMC()


console.log(santiago.edad)
console.log(santiago.estatura)
console.log(santiago.nombre)
console.log(santiago.peso)

const maria=new Persona("Maria",65,1.50,20,63897412)

console.log(maria)
console.log(maria.calcularIMC())
console.log(maria.info())

const angel=new Persona("Angel",40,1.12,14,9754286)

console.log(angel)
console.log(angel.calcularIMC())
console.log(angel.info())

