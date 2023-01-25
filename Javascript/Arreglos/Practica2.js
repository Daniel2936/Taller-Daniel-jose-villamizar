//unir una letra a una palabra al principio y al final

//function unir (p1,p2){
  //  return p2.concat(p1)+p2}

// console.log(unir("daniel","s"))

//buscar si una letra esta en una palabra, acuerde que los strings son arreglos

//function buscar (p1,p2){
    //if(p1.includes(p2)){
        // return alert(`La letra :${p2} esta en la palabra ${p1}`)
    //}else{
        //return console.log(`La letra :${p2} esta en la palabra ${p1}`)
    //}
//}

//let palabra=prompt("Ingrese la palabra")
//let letra=prompt("Ingrese la letra")
//console.log(buscar(palabra,letra))

//buscar si una letra esta en la palabra cambiarla las veces que sean necesarios y ponerla en mayuscula

//function sancocho(p1,p2,p3){
    //if(p1.includes(p2)){
        //return p1.replaceAll(p2,p3.toUpperCase())
    //}else{

        //alert(`la letra ${p2}no se encuentra en la palabra ${p1}`)
    //}
//}

//let palabra1=prompt("Ingrese la palabra")
//let letra1=prompt("Ingrese la letra a buscar")
//let letra2=prompt("Ingrese la letra a reemplazar")
//console.log(sancocho(palabra1,letra1,letra2))

// otro metodo

let palabra = prompt("Ingrese una palabra")
let letra = prompt("Ingrese una letra")

while(letra.length < 1 || letra.length > 1){
    letra = prompt("Ingrese una letra")
}

const concatWords = (p,l,la) =>{
    let np = ""
    for (let index = 0; index < p.length; index++) {
            if(p[index].includes(l)){
                np += p[index].replace(p[index], la.toUpperCase())
            }else{
                np += p[index].replace(p[index], p[index].toLowerCase())
            }
    }
    
    console.log(np)

    return p
}

let resultado = concatWords(palabra, letra, "x")

console.log(resultado)