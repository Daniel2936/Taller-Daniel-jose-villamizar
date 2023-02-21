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
let contador=1;
btn.addEventListener('click',function(){

    document.getElementById('caja1').innerHTML= ""
    document.getElementById('caja2').innerHTML= ""
    document.getElementById('caja3').innerHTML= ""
    document.getElementById('caja4').innerHTML= ""
    document.getElementById('caja5').innerHTML= ""
    document.getElementById('caja6').innerHTML= ""
    document.getElementById('caja7').innerHTML= ""
    document.getElementById('caja8').innerHTML= ""
    document.getElementById('caja9').innerHTML= ""
    console.log(matriz)
    matriz=[
        [" "," "," "],
        [" "," "," "],
        [" "," "," "]
    ]
    contador++

   
    
})



caja1.addEventListener('click',function(){

    if(contador==1||contador%2!=0){
        caja1.innerHTML=`<p id="forma">O</p>`
        let valor1=document.getElementById('caja1').innerText
        matriz[0][0]=valor1
        contador++
    }else{
        caja1.innerHTML=`<p id="forma">X</p>`
        let valor2=document.getElementById('caja1').innerText
        matriz[0][0]=valor2
        contador++
    }
    
})


caja2.addEventListener('click',function(){

    if(contador==1||contador%2!=0){
        caja2.innerHTML=`<p id="forma">O</p>`
        let valor1=document.getElementById('caja2').innerText
        matriz[0][1]=valor1
        contador++
    }else{
        caja2.innerHTML=`<p id="forma">X</p>`
        let valor2=document.getElementById('caja2').innerText
        matriz[0][1]=valor2
        contador++
    }
    
})


caja3.addEventListener('click',function(){

    if(contador==1||contador%2!=0){
        caja3.innerHTML=`<p id="forma">O</p>`
        let valor1=document.getElementById('caja3').innerText
        matriz[0][2]=valor1
        contador++
    }else{
        caja3.innerHTML=`<p id="forma">X</p>`
        let valor2=document.getElementById('caja3').innerText
        matriz[0][2]=valor2
        contador++

    }
    
})

caja4.addEventListener('click',function(){

    if(contador==1||contador%2!=0){
        caja4.innerHTML=`<p id="forma">O</p>`
        let valor1=document.getElementById('caja4').innerText
        matriz[1][0]=valor1
        contador++
    }else{
        caja4.innerHTML=`<p id="forma">X</p>`
        let valor2=document.getElementById('caja4').innerText
        matriz[1][0]=valor2
        contador++

    }
    
})


caja5.addEventListener('click',function(){

    if(contador==1||contador%2!=0){
        caja5.innerHTML=`<p id="forma">O</p>`
        let valor1=document.getElementById('caja5').innerText
        matriz[1][1]=valor1
        contador++
    }else{
        caja5.innerHTML=`<p id="forma">X</p>`
        let valor2=document.getElementById('caja5').innerText
        matriz[1][1]=valor2
        contador++

    }
    
})


caja6.addEventListener('click',function(){

    if(contador==1||contador%2!=0){
        caja6.innerHTML=`<p id="forma">O</p>`
        let valor1=document.getElementById('caja6').innerText
        matriz[1][2]=valor1
        contador++
    }else{
        caja6.innerHTML=`<p id="forma">X</p>`
        let valor2=document.getElementById('caja6').innerText
        matriz[1][2]=valor2
        contador++

    }
    
})


caja7.addEventListener('click',function(){

    if(contador==1||contador%2!=0){
        caja7.innerHTML=`<p id="forma">O</p>`
        let valor1=document.getElementById('caja7').innerText
        matriz[2][0]=valor1
        contador++
    }else{
        caja7.innerHTML=`<p id="forma">X</p>`
        let valor2=document.getElementById('caja7').innerText
        matriz[2][0]=valor2
        contador++

    }
    
})


caja8.addEventListener('click',function(){

    if(contador==1||contador%2!=0){
        caja8.innerHTML=`<p id="forma">O</p>`
        let valor1=document.getElementById('caja8').innerText
        matriz[2][1]=valor1
        contador++
    }else{
        caja8.innerHTML=`<p id="forma">X</p>`
        let valor2=document.getElementById('caja8').innerText
        matriz[2][1]=valor2
        contador++

    }
    
})


caja9.addEventListener('click',function(){

    if(contador==1||contador%2!=0){
        caja9.innerHTML=`<p id="forma">O</p>`
        let valor1=document.getElementById('caja9').innerText
        matriz[2][2]=valor1
        contador++
    }else{
        caja9.innerHTML=`<p id="forma">X</p>`
        let valor2=document.getElementById('caja9').innerText
        matriz[2][2]=valor2
        contador++

    }


    
})



