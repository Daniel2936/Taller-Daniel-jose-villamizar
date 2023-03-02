


const url='https://pokeapi.co/api/v2/pokemon/'

const btn=document.getElementById('buscari')
const data=document.getElementById('caracteristicas')



async function buscar(){

    const imagen=document.getElementById('imagen')

    const pokemon= document.getElementById('pokemon')
    const response =await fetch(url+pokemon.value)
    const data= await response.json()
    // imagen.innerHTML =`<img src="${data.sprites["front_default"]}"  />`
    const {front_default}=data.sprites.other["official-artwork"]
    imagen.innerHTML =`<img src="${front_default}"/>`

    console.log(data)

    

}


btn.addEventListener('click', buscar )

