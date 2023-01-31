// Se desea llenar una lista con 20 animales, y le han pedido a usted que sabe
//  programar que les ayude para solicitar esos 20 nombres,
//  mostrarlos ordenados alfabéticamente, Luego solicitar al usuario un número entre el 1 y el 20 y que le
//  permita ver cuales animales se encuentra entre el número dicho 
// y el final de la lista. También cree una opción que permita al usuario escribir el 
// nombre de un animal y verificar si ese animal se encuentra en la lista

//crt+k+c  crt+k+u

const lista=[]

let menu;numero


do {

    menu =parseFloat(prompt(`Ingrese una opcion valida:
1. llenar lista y ordenar
2. solicitar rango
3. Verificar animal 
4. Salir`))
if(Number.isInteger(menu)&&menu>0){
    switch (menu) {
        case 1:
            for(let i=0;i<5;i++){
                lista[i]=prompt(`Ingrese el nombre del animal N ${i}`)
            }
            
            lista.sort()
            
            console.log(lista)
            
            break;

        case 2:
            numero=parseInt(prompt("Ingrese un numero entre 1 y 5 para ver el rango de animales"))
            if((Number.isInteger(numero)&&numero>=10&&numero<=5)){
                



            }else{
                alert("No es un numero valido")
            }

    
        default:
            break;
    }


}else{

    alert("no es un numero valido intentelo de nuevo")
}

    
} while (menu!=4);

