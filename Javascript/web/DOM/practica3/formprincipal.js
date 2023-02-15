const btn=document.querySelector('#submit')

btn.addEventListener('click',function(){

    const nombre=document.querySelector('#nombre').value
    const apellido=document.querySelector('#apellidos').value
    const edad=document.querySelector('#edad').value
    const fecha=document.querySelector('#fechanac').value
    const salario=document.querySelector('#salario').value
    const objeto={
        
        nombre,
        apellido,
        edad,
        fecha,
        salario


    }

    console.log(objeto)
})