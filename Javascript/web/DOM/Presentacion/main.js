
// const formulario=document.getElementById('formulario')
// const input1=document.getElementById('1')
// const input2=document.getElementById('2')


// formulario.addEventListener("submit",form);

//     function form(event) {
//         event.preventDefault();

//         alert(`${input1.value + input2.value} engordar`)

//     }

const btn1=document.getElementById('boton')
const caja1=document.getElementById('caja')

cont=0
function añadirtexto(){

    caja1.innerHTML+=`<p>Gracias por el click</p>`
    cont++
    if(cont>=4){
        btn1.removeEventListener("click",añadirtexto)
    }
    
}

btn1.addEventListener("click",añadirtexto)




