


const url='https://pokeapi.co/api/v2/pokemon/'

const btn=document.getElementById('buscari')



async function buscar(){

    const imagen=document.getElementById('imagen')

    const pokemon= document.getElementById('pokemon')
    const response =await fetch(url+pokemon.value)
    const data= await response.json()
    imagen.innerHTML =`<img src="${data.sprites["front_default"]}"  />`
    const datos=document.getElementById('caracteristicas')
    datos.innerHTML=`<p>${data.abilities[0].value}</p>`

    console.log(data)

    

}


btn.addEventListener('click', buscar )

