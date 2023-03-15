
const listapal=["casa","perro","planta","amistad","gato","lobo","familia","yuca","aula","doctor","mouse","raton"]


const random = Math.floor(Math.random() * listapal.length);
const palabraarr=listapal[random]
const nuevoarray=listapal.filter(word => word !=palabraarr);



let cont=0,cont2=0,cont3=0,listaletra=[]


function Cajapal(param,contador) {
    for(let i=0;i<contador;i++){
        param.innerHTML+=`<div id="${i}" class=" flex justify-center items-center w-[20%] text-8xl bg-violet-200 opacity-25 border-4 border-black border-t-0 border-l-0 border-r-0 m-[1%]"></div>` 
    }
}
function ahorcado(contador) {
    switch (contador) {
        case 1:
            let ahorcado1=document.getElementById('ahorcado')
            ahorcado1.innerHTML=`<img src="./Assets/Ahorcado1.png" class="p-[2%] w-[100%] h-[100%]" alt="">`
            
            break;
        case 2:
            let ahorcado2=document.getElementById('ahorcado')
            ahorcado2.innerHTML=`<img src="./Assets/Ahorcado2.png" class="p-[2%] w-[100%] h-[100%]" alt="">`
            
            break; 
        case 3:
            let ahorcado3=document.getElementById('ahorcado')
            ahorcado3.innerHTML=`<img src="./Assets/Ahorcado3.png" class="p-[2%] w-[100%] h-[100%]" alt="">`
            
            break;  
        case 4:
            let premio=document.getElementById('premio')
            premio.innerHTML=`<p class="text-7xl font-bold text-red-600 shadow-xl">PERDIOOOOOOOO</p>`
            let ahorcado4=document.getElementById('ahorcado')
            ahorcado4.innerHTML=`<img src="./Assets/Ahorcado.jpg" class="p-[2%] w-[100%] h-[100%]" alt="">`

            let resultado=document.getElementById('resultado')
            resultado.innerHTML=`<div class="W-[100%] bg-rose-300 flex justify-between items-center pl-[9%] pr-[9%] p-[1%] rounded-lg border border-2 border-orange-500 shadow-xl shadow-rose-400">
            <p class="text-4xl font-bold text-black shadow-xl">LA PALABRA ES:</p>
            <p class="text-6xl font-bold text-black shadow-xl">${palabraarr}</p> </div>`
            const reset=document.getElementById('reset')
            reset.innerHTML=`<button class="W-[40%] bg-rose-300 hover:bg-blue-400 rounded-lg p-[2%] text-black text-xl font-bold" id="resetbnt">Reset</button>`
            break;                    
    
        default:
            break;
    }

    
}
function buscar(letra,contador,lista) {

    for(let j=0;j<contador;j++){
        if (letra==lista[j]){
            let cajaletra=document.getElementById(`${j}`)
            cajaletra.innerHTML=`<p class="text-6xl text-black font-bold">${letra}</p>` 
            cont++
            cont2++
        }
    }

    
}

const cajapalabra=document.getElementById('palabra')

Cajapal(cajapalabra,listapal[random].length)

letra.addEventListener("keypress",function(event){

    if (event.key === "Enter") {
        const letra=document.getElementById('letra').value.toLowerCase()
        if(listaletra.includes(letra)){
            alert('Ya ingreso esta letra, OJO')
        }else{
            if((isNaN(letra))){
                listaletra.push(letra)
                const repetida=document.getElementById('repetidas')
                repetida.innerHTML=`<p class="text-4xl text-green-700 font-bold p-[2%] pb-0">Letras Usadas:</p>
                <div class="p-[2%] text-4xl text-black font-bold">${listaletra}</div>`

                buscar(letra,listapal[random].length,palabraarr)

                if(cont>=1){
                    alert('Felicidades acerto')
                }else{
                    alert('No es una palabra correcta siga intentando')
                }

                cont=0

                if(cont2==palabraarr.length){
                   let premio=document.getElementById('premio')
                   premio.innerHTML=`<p class="text-7xl font-bold text-blue-600 shadow-xl">GANOOOOO</p>`
                   const siguiente=document.getElementById('siguiente')
                   siguiente.innerHTML=`<button class="W-[40%] bg-rose-300 hover:bg-blue-400 rounded-lg p-[2%] text-black text-xl font-bold" id="siguientebtn">Siguiente Palabra</button>`
                }

                if(!palabraarr.includes(letra)){
                    cont3++
                    console.log(cont3)
                }

                ahorcado(cont3)
 
            }else{
                alert(" Error Solo se permiten letras en el juego")
            }
        }
    }
    document.getElementById('letra').value=""

})


// const siguientebtn=document.getElementById('siguientebtn')

// siguientebtn.addEventListener("click",function(){

//     listapal=nuevoarray
//     console.log(listapal)

// })

// const resetbtn=document.getElementById('resetbnt')
// resetbtn.addEventListener("click",function () {

//     console.log("loca")
    
// })

