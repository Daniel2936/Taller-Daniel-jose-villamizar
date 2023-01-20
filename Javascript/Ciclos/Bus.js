//3. : hay dos tipos de buses (A, B), el director de una escuela está organizando un viaje de estudios y requiere determinar cuánto debe cobrar a cada alumno
// y cuánto debe pagar a la compañía de viajes por el servicio. La forma de cobrar es la siguiente:
// * Si son 100 alumnos o más, el costo por cada alumno es de 65 euros.
// * De 50 a 99 alumnos, el costo es de 70 euros.
// * De 30 a 49 alumnos, el costo es de 95 euros.
// * Menos de 30 alumnos, el costo de la renta del autobús es de 4000 euros, sin importar el número de alumnos.
// pedirle a cada estudiante el promedio de sus notas, si el promedio supera a 3.5 se va en el bus A y si no en el bus B
// el bus A tiene un descuento del 7% por alumno y el bus B de 3%
// Realiza un algoritmo que permita determinar el pago a la compañía de autobuses y lo que debe pagar cada alumno por el viaje.



let numestudiante=parseInt(prompt("Ingrese el numero de estudiantes que viajaran"))
if(Number.isInteger(numestudiante) || numestudiante>0){

    for(let i=0;i<numestudiante;i++){

        let notaestudiante=parseFloat(prompt("ingrese la nota del estudiante"+(i+1)))
        

    }

    
}else{


    alert("no es un numero valido")
}