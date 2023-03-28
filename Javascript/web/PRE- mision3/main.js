
const main= async()=>{

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    data= await response.json()
console.log(data)
const caja=document.getElementById('caja')
for(let i=0;i<20;i++){

    caja.innerHTML+=`<div class="w-[95%] rounded-xl border-2 border-black ml-[3%] p-[2%] flex-col bg-red-200 shadow-xl hover:bg-red-400" id="accion${i}" >
    <h2 class="text-center text-2xl font-bold pb-[2%] overline">${data[i].title}</h2>
    <p class="text-justify text-xl">${data[i].body}</p>  
    </div>`
}



window.addEventListener('click', function(e) {
    if (document.getElementById('accion1').contains(e.target)) {
      console.log(e.target);
      alert("Si es esta caja");
    } else {
      alert("NO es esta caja");
      console.log(e.target);
    }
  })

}

main()