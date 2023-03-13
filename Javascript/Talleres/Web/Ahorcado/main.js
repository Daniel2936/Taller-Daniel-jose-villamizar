const listapal=["casa","solidaridad","seguridad","amistad","gato","lobo","familia","zoologico","abogado","periodista"]

const random = Math.floor(Math.random() * listapal.length);
console.log(listapal[random]);

const cantletra=listapal[random].length
 const palabraarr=listapal[random]
console.log(palabraarr[0])


letra.addEventListener("keypress",function(){
    if (event.key === "Enter") {
        const letra=document.getElementById('letra')
        let l=letra.value
        if((isNaN(letra.value))){

        }else{
            alert(" Error Solo se permiten letras en el juego")
          
        }
   
    }
    
})
const palabra=document.getElementById('palabra')

for(let i=0;i<cantletra;i++){
    palabra.innerHTML+=`<div id="${i+1}" class=" flex justify-center items-center w-[20%] text-8xl bg-violet-200 opacity-25 border-4 border-black border-t-0 border-l-0 border-r-0 m-[1%]"><p class="text-6xl text-black font-bold">a</p></div>`
    const letra[]
}




