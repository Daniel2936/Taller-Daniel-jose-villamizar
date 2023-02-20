const caja1=document.getElementById('caja1')
const caja2=document.getElementById('caja2')
const caja3=document.getElementById('caja3')
const caja4=document.getElementById('caja4')
const caja5=document.getElementById('caja5')
const caja6=document.getElementById('caja6')
const caja7=document.getElementById('caja7')
const caja8=document.getElementById('caja8')
const caja9=document.getElementById('caja9')
const btn=document.getElementById('reset')

let matriz=[
    [" "," "," "],
    [" "," "," "],
    [" "," "," "]
]
let contador=0;
btn.addEventListener('click',function(){

    contador++
    
})



caja1.addEventListener('click',function(){

    if(contador==0||contador%2==0){
        caja1.innerHTML=`<p id="forma">O</p>`
        let valor=document.getElementById('forma').innerText
        matriz[0][0]=valor
        console.log(matriz)
        contador++
        caja1.removeEventListener()
    }else{
        caja1.innerHTML=`<p id="forma">X</p>`
        let valor=document.getElementById('forma').innerHTML
        matriz[0][0]=valor
        console.log(matriz)
        contador++
    }
    
})


caja2.addEventListener('click',function(){

    if(contador==0||contador%2==0){
        caja2.innerHTML=`<p id="forma">O</p>`
        let valor=document.getElementById('forma').innerHTML
        matriz[0][1]=valor
        contador++
        console.log(contador)
    }else{
        caja2.innerHTML=`<p id="forma">X</p>`
        let valor=document.getElementById('forma').innerHTML
        matriz[0][1]=valor
        contador++
    }
    
})


caja3.addEventListener('click',function(){

    if(contador==0||contador%2==0){
        caja3.innerHTML=`<p id="forma">O</p>`
        let valor=document.getElementById('forma').innerHTML
        matriz[0][2]=valor
        contador++
    }else{
        caja3.innerHTML=`<p id="forma">X</p>`
        let valor=document.getElementById('forma').innerHTML
        matriz[0][2]=valor
        contador++

    }
    
})

caja4.addEventListener('click',function(){

    if(contador==0||contador%2==0){
        caja4.innerHTML=`<p id="forma">O</p>`
        let valor=document.getElementById('forma').innerHTML
        matriz[1][0]=valor
        contador++
    }else{
        caja4.innerHTML=`<p id="forma">X</p>`
        let valor=document.getElementById('forma').innerHTML
        matriz[1][0]=valor
        contador++

    }
    
})


caja5.addEventListener('click',function(){

    if(contador==0||contador%2==0){
        caja5.innerHTML=`<p id="forma">O</p>`
        let valor=document.getElementById('forma').innerHTML
        matriz[1][1]=valor
        contador++
    }else{
        caja5.innerHTML=`<p id="forma">X</p>`
        let valor=document.getElementById('forma').innerHTML
        matriz[1][1]=valor
        contador++

    }
    
})


caja6.addEventListener('click',function(){

    if(contador==0||contador%2==0){
        caja6.innerHTML=`<p id="forma">O</p>`
        let valor=document.getElementById('forma').innerHTML
        matriz[1][2]=valor
        contador++
    }else{
        caja6.innerHTML=`<p id="forma">X</p>`
        let valor=document.getElementById('forma').innerHTML
        matriz[1][2]=valor
        contador++

    }
    
})


caja7.addEventListener('click',function(){

    if(contador==0||contador%2==0){
        caja7.innerHTML=`<p id="forma">O</p>`
        let valor=document.getElementById('forma').innerHTML
        matriz[2][0]=valor
        contador++
    }else{
        caja7.innerHTML=`<p id="forma">X</p>`
        let valor=document.getElementById('forma').innerHTML
        matriz[2][0]=valor
        contador++

    }
    
})


caja8.addEventListener('click',function(){

    if(contador==0||contador%2==0){
        caja8.innerHTML=`<p id="forma">O</p>`
        let valor=document.getElementById('forma').innerHTML
        matriz[2][1]=valor
        contador++
    }else{
        caja8.innerHTML=`<p id="forma">X</p>`
        let valor=document.getElementById('forma').innerHTML
        matriz[2][1]=valor
        contador++

    }
    
})


caja9.addEventListener('click',function(){

    if(contador==0||contador%2==0){
        caja9.innerHTML=`<p id="forma">O</p>`
        let valor=document.getElementById('forma').innerHTML
        matriz[2][2]=valor
        contador++
    }else{
        caja9.innerHTML=`<p id="forma">X</p>`
        let valor=document.getElementById('forma').innerHTML
        matriz[2][2]=valor
        contador++

    }


    
})



