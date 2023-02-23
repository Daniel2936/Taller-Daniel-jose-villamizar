const kahoot={
    "Preguntas": [
        {
            "Pregunta": "¿Quien era Zelda en los juegos de nintendo?",
            "opcion1": " A. El protagonista",
            "opcion2": " B. La princesa",
            "opcion3": " C. Una diosa",
            "opcion4": " D. La villana",
            "respuesta": " B. La princesa"
        },
        {
            "Pregunta": "¿Samus de Metroid era?",
            "opcion1": " A. Hombre",
            "opcion2": " B. Mujer",
            "opcion3": " C. Extraterreste",
            "opcion4": " D. Un animal",
            "respuesta": " B. Mujer"
        },
        {
            "Pregunta": "¿Quien era el lider de la revolucion de robots en Detroit: become human?",
            "opcion1": " A. Alice",
            "opcion2": " B. Connor",
            "opcion3": " C. Kara",
            "opcion4": " D. Markus",
            "respuesta": " D. Markus"
        },
        {
            "Pregunta": "¿De que trata one piece",
            "opcion1": " A. Piratas",
            "opcion2": " B. Lejano oeste",
            "opcion3": " C. Un isekai",
            "opcion4": " D. Estrategia militar",
            "respuesta": " A. Piratas"
        },
        {
            "Pregunta": "¿El pokemon mas conocido es?",
            "opcion1": "A. Cleafairy",
            "opcion2": "B. Pikachu",
            "opcion3": "C. Snorlax",
            "opcion4": "D. Rattata",
            "respuesta": " B. Pikachu"
        }
    ]
    }

    const{Preguntas}=kahoot
const pregunta1=document.getElementById('question')
const{Pregunta}=kahoot.Preguntas[0]
pregunta1.innerHTML=Pregunta
const resp1=document.getElementById('resp1')
const{opcion1}=kahoot.Preguntas[0]
resp1.innerHTML=opcion1
const resp2=document.getElementById('resp2')
const{opcion2}=kahoot.Preguntas[0]
resp2.innerHTML=opcion2
const resp3=document.getElementById('resp3')
const{opcion3}=kahoot.Preguntas[0]
resp3.innerHTML=opcion3
const resp4=document.getElementById('resp4')
const{opcion4}=kahoot.Preguntas[0]
resp4.innerHTML=opcion4
const{respuesta}=kahoot.Preguntas[0]

let contador=0

function reemplazar(num,param) {
    const pregunta1=document.getElementById('question')
const{Pregunta}=kahoot.Preguntas[num]
pregunta1.innerHTML=Pregunta
const resp1=document.getElementById('resp1')
const{opcion1}=kahoot.Preguntas[num]
resp1.innerHTML=opcion1
const resp2=document.getElementById('resp2')
const{opcion2}=kahoot.Preguntas[num]
resp2.innerHTML=opcion2
const resp3=document.getElementById('resp3')
const{opcion3}=kahoot.Preguntas[num]
resp3.innerHTML=opcion3
const resp4=document.getElementById('resp4')
const{opcion4}=kahoot.Preguntas[num]
resp4.innerHTML=opcion4
const{respuesta}=kahoot.Preguntas[num]
console.log(respuesta)
console.log(param)

if(param==respuesta){

    alert("Felicidades, es la respuesta correcta")
    const resultado=document.getElementById('resultado')
    resultado.innerHTML=` 1 (B) es la RTA, 1/5`
}else{
    alert("NO es la respuesta correcta")
}

    
}

const btn1=document.getElementById('resp1')
btn1.addEventListener('click',function() {
    const rt=document.getElementById('resp1').innerHTML
    
    switch (contador) {
        case 0:
            reemplazar(0,rt)
            break;
        case 1:
            reemplazar(1,rt)
            break;
        case 2:
            reemplazar(2,rt)
            break;
        case 3:
            reemplazar(3,rt)
            break;
        case 4:
            reemplazar(4,rt)    
            break;
    
        default:
            contador<6
            break;
    }

   contador++
    
})

const btn2=document.getElementById('resp2')
btn2.addEventListener('click',function() {
    // if(opcion2==respuesta){
    //     alert("Felicidades, es la respuesta correcta")
    //     const resultado=document.getElementById('resultado')
    //     resultado.innerHTML=` 1 (B) es la RTA, 1/5`
        

    // }else{
    //     alert("Lo siento no es la respuesta correcta")
        

    // }
    const rt=document.getElementById('resp2').innerHTML

    switch (contador) {
        case 0:
            reemplazar(0,rt)
            break
        case 1:
            reemplazar(1,rt)
            break;
        case 2:
            reemplazar(2,rt)
            
            break;
        case 3:
            reemplazar(3,rt)
            
            break;
        case 4:
            reemplazar(4,rt)
            
            break;
    
        default:
            contador<6
            break;
    }
    contador++
    
})

const btn3=document.getElementById('resp3')
btn3.addEventListener('click',function() {
    // if(opcion1==respuesta){
    //     alert("Felicidades, es la respuesta correcta")
        

    // }else{
    //     alert("Lo siento no es la respuesta correcta")


    // }
    const rt=document.getElementById('resp3').innerHTML

    switch (contador) {
        case 0:
            reemplazar(0,rt)
            break;
        case 1:
            reemplazar(1,rt)
            break;
        case 2:
            reemplazar(2,rt)
            
            break;
        case 3:
            reemplazar(3,rt)
            
            break;
        case 4:
            reemplazar(4,rt)
            
            break;
    
        default:
            contador<6
            break;
    }
    
    contador++
})

const btn4=document.getElementById('resp4')
btn4.addEventListener('click',function() {
    // if(opcion1==respuesta){
    //     alert("Felicidades, es la respuesta correcta")


    // }else{
    //     alert("Lo siento no es la respuesta correcta")


    // }
    const rt=document.getElementById('resp4').innerHTML

    switch (contador) {
        case 0:
            reemplazar(0,rt)
            break;
        case 1:
            reemplazar(1,rt)
            break;
        case 2:
            reemplazar(2,rt)
            
            break;
        case 3:
            reemplazar(3,rt)
            
            break;
        case 4:
            reemplazar(4,rt)
            
            break;
    
        default:
            contador<6
            break;
    }
    contador++
})

console.log(kahoot)


