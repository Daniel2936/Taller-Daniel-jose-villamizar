const kahoot={
    "Preguntas": [
        {
            "Pregunta": "¿Quien era Zelda en los juegos de nintendo?",
            "opcion1": " A. El protagonista.",
            "opcion2": " B. La princesa.",
            "opcion3": " C. Una diosa.",
            "opcion4": " D. La villana.",
            "respuesta": "B. La princesa"
        },
        {
            "Pregunta": "¿Samus de Metroid era?",
            "opcion1": "Hombre",
            "opcion2": "Mujer",
            "opcion3": "Extraterreste",
            "opcion4": "Un animal",
            "respuesta": "Mujer"
        },
        {
            "Pregunta": "¿Quien era el lider de la revolucion de robots en Detroit: become human?",
            "opcion1": "Alice",
            "opcion2": "Connor",
            "opcion3": "Kara",
            "opcion4": "Markus",
            "respuesta": "Markus"
        },
        {
            "Pregunta": "¿De que trata one piece",
            "opcion1": "Piratas",
            "opcion2": "Lejano oeste",
            "opcion3": "Un isekai",
            "opcion4": "Estrategia militar",
            "respuesta": "Piratas"
        },
        {
            "Pregunta": "¿El pokemon mas conocido es?",
            "opcion1": "Cleafairy",
            "opcion2": "Pikachu",
            "opcion3": "Snorlax",
            "opcion4": "Rattata",
            "respuesta": "Pikachu"
        }
    ]
    }

console.log(kahoot)

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