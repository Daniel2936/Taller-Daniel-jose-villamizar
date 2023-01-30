const arreglo=["hola",2,5,7,2,8,"juanjo",14,"tablero","cable"]

console.log(arreglo[8])

// arreglo.pop()

// console.log(arreglo)

// arreglo.shift()

// console.log(arreglo)

//arreglo.splice(6,0,9)
//console.log(arreglo)

//const copia=arreglo.slice(0,6)
//console.log(copia)

// arreglo.sort -- permite ordenar elementos alfabeticamente no numeros

let suma=0
let suma2=0
let suma3=[]
for(let i=0; i<arreglo.length;i++){
    if(!isNaN(arreglo[i])){
        suma +=arreglo[i]
    }
}
//console.log(suma)

arreglo.forEach(element => {
    if(!isNaN(element)){
        suma2 +=element
    }
});

//console.log(suma2)
//otra forma retornar los enteros con un foreach

arreglo.forEach(element => {
    
    if(!isNaN(element)){
        suma3.push(element)
    }
});

console.log(suma3)

//otro metodo pero retornar los strings

let nuevoarreglo=arreglo.filter(element => {
    
    if(isNaN(element)){
        return element
    }
});

console.log(nuevoarreglo)