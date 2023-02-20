const caja1=document.getElementById('caja1')
const caja2=document.getElementById('caja2')
const caja3=document.getElementById('caja3')
const caja4=document.getElementById('caja4')
const caja5=document.getElementById('caja5')
const caja6=document.getElementById('caja6')
const caja7=document.getElementById('caja7')
const caja8=document.getElementById('caja8')
const caja9=document.getElementById('caja9')
let numero=Math.floor(Math.random()*2)


caja1.addEventListener('click',function(){

    if(numero==1){
        caja1.innerHTML=`<p id="forma">O</p>`
        let valor=document.getElementById('forma').innerHTML
        console.log(valor);
    }else{
        caja1.innerHTML=`<p id="forma">X</p>`

    }
    
})

