
const listapal=["casa","perro","planta","amistad","gato","lobo","familia","yuca","aula","doctor","mouse","raton"]


const random = Math.floor(Math.random() * listapal.length);
const cantletra=listapal[random].length
const palabraarr=listapal[random]
const nuevoarray=listapal.filter(word => word !=palabraarr);
console.log(nuevoarray)

// function listas(array) {
//     const random = Math.floor(Math.random() * array.length);
//     const cantletra=listapal[random].length
//     const palabraarr=listapal[random]
//     const nuevoarray=listapal.filter(word => word !=palabraarr);
//     console.log(nuevoarray)
    
// }

const palabra=document.getElementById('palabra')

for(let i=0;i<cantletra;i++){
    palabra.innerHTML+=`<div id="${i}" class=" flex justify-center items-center w-[20%] text-8xl bg-violet-200 opacity-25 border-4 border-black border-t-0 border-l-0 border-r-0 m-[1%]"></div>` 
}

cont=0
cont2=0
let listaletra=[]

letra.addEventListener("keypress",function(){
    if (event.key === "Enter") {
        const letra=document.getElementById('letra').value
        if(listaletra.includes(letra)){
            alert('Ya ingreso esta letra, OJO')
        }else{
            if((isNaN(letra))){
                listaletra.push(letra)
                const repetida=document.getElementById('repetidas')
                repetida.innerHTML=`<p class="text-4xl text-green-700 font-bold p-[2%] pb-0">Letras Usadas:</p>
                <div class="p-[2%] text-4xl text-black font-bold">${listaletra}</div>`
                for(let j=0;j<cantletra;j++){
                    if (letra==palabraarr[j]){
                        let le=document.getElementById(`${j}`)
                        le.innerHTML=`<p class="text-6xl text-black font-bold">${letra}</p>` 
                        cont++
                        cont2++
                    }
                }
                if(cont>=1){
                    alert('Felicidades acerto')
                }else{
                    alert('No es una palabra correcta siga intentando')
                }

                if(cont2==palabraarr.length){
                   let premio=document.getElementById('premio')
                   premio.innerHTML=`<p class="text-7xl font-bold text-blue-600 shadow-xl">GANOOOOO</p>`
                   const siguiente=document.getElementById('siguiente')
                   siguiente.innerHTML=`<button class="W-[40%] bg-rose-300 hover:bg-blue-400 rounded-lg p-[2%] text-black text-xl font-bold" id="siguientebtn">Siguiente Palabra</button>`

                }
                cont=0
            }else{
                alert(" Error Solo se permiten letras en el juego")
            }
        }
    }
    document.getElementById('letra').value=""
})

 const siguientebtn=document.getElementById('siguientebtn')

siguientebtn.addEventListener("click",function(){

    listapal=nuevoarray
    console.log(listapal)

})


