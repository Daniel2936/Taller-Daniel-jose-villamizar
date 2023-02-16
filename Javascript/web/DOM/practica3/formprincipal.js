const btn=document.querySelector('#submit')
const cajagrande=document.getElementById('contenedor')



// btn.addEventListener('click',function(){

//     const nombre=document.querySelector('#nombre').value
//     const apellido=document.querySelector('#apellidos').value
//     const edad=document.querySelector('#edad').value
//     const fecha=document.querySelector('#fechanac').value
//     const salario=document.querySelector('#salario').value
//     const objeto={

//         nombre,
//         apellido,
//         edad,
//         fecha,
//         salario


//     }

//     console.log(objeto)
// })



btn.addEventListener('click',function(){
    const nombre= document.querySelector('#nombre').value
    const apellido= document.querySelector('#apellidos').value
    const salario= document.querySelector('#salario').value


     cajagrande.innerHTML+=`<div id="caja">
        <div><img class="circol"  src="./assets/descarga.png" alt=""></div>
        <p id="nome">${nombre}</p>
        <p id="ape">${apellido}</p>
        <p id="sala">${salario}</p>
    </div>`

        document.getElementById('formulario').reset()
       
})