let opcion,cantEstudiante;
let nombre,codigo,newCodigo,nivel,nombreNivel,sumNotas, promEstudiante,promGeneral=0,aprobo;
let nota1,nota2,nota3

let estudiante=new Object()
let estudiantes=[]


do {
    opcion=parseFloat(prompt(`Digite el numero correspondiente para la accion indicada
    1. Definir cantidad de estudiantes
    2. Registrar datos  estudiantes
    3. Mostrar listado de estudiantes
    4. Registrar notas estudiantes
    5. Imprimir notas estudiantes
    6. Salir`))
    if(Number.isInteger(opcion)&&opcion>0&&opcion<7){
        switch (opcion) {
            case 1:
                cantEstudiante=parseFloat(prompt("Cuantos estudiantes desea registrar"))
                if(Number.isInteger(cantEstudiante)&&cantEstudiante>0){
                    alert(`Se definieron un total de ${cantEstudiante} estudiantes`)
                }else{
                    alert("No es valida esta cantidad de estudiantes")
                }
                break;
            case 2:
                for(let i=0;i<cantEstudiante;i++){
                    nombre=prompt(`Escriba el nombre del estudiante N ${i+1}`)
                    codigo=parseFloat(prompt(`Digite el codigo del estudiante N ${i+1} (solo se admiten numeros mayores a 0)`))
                    if (i==0){
                        if(Number.isInteger(codigo)&&codigo>0){
                            estudiante.codigo=codigo
                            estudiante.nombre=nombre;
                            estudiante.promedio=promEstudiante
                            estudiante.aprobo=aprobo
                        }else{
                            alert("No es un codigo valido, Intente de nuevo registrar los estudiantes")
                            estudiantes=[]
                            break
                        }
                    }else{
                        if(Number.isInteger(codigo)&&codigo>0){
                            estudiantes.forEach(el => {
                                if(el.codigo==codigo){
                                    alert(`El codigo se repite con el de ${el.nombre}, intente de nuevo el registro`)
                                    newCodigo=parseFloat(prompt(`Digite un codigo valido para ${nombre}`))
                                    estudiante.codigo=newCodigo
                                    estudiante.nombre=nombre
                                    estudiante.promedio=promEstudiante
                                    estudiante.aprobo=aprobo                   
                                }else{
                                    estudiante.codigo=codigo
                                    estudiante.nombre=nombre;
                                    estudiante.promedio=promEstudiante
                                    estudiante.aprobo=aprobo                                 
                                }                                
                            });
                        }else{
                            alert("NO es un codigo valido, Intente de nuevo registrar los estudiantes") 
                            estudiantes=[] 
                            break
                        }
                    }
                    nivel=parseFloat(prompt(`Marque el numero segun corresponda al nivel del estudiante
                    1. Beginner
                    2. Junior
                    3. Senior`))
                    if(Number.isInteger(nivel)&& nivel>0 &&nivel<4){
                        switch (nivel) {
                            case 1:
                                nombreNivel="Beginner"
                                estudiante.nivel=nombreNivel
                                estudiantes.push(estudiante)
                                estudiante={}
                                
                                break;
                             case 2:
                                nombreNivel="Junior"
                                estudiante.nivel=nombreNivel
                                estudiantes.push(estudiante)
                                estudiante={}
                                
                                break;
                             case 3:
                                nombreNivel="Senior"
                                estudiante.nivel=nombreNivel
                                estudiantes.push(estudiante)
                                estudiante={}                             
                                break;
                        
                            default:
                                break;
                        }
                    }else{
                        alert("no es un codigo valido, ingrese desde el menu nuevamente")   
                        estudiantes=[]                    
                        break
                    } 
                }      
                break;
            case 3:
                console.log(estudiantes)
                
                break;
            case 4:
                estudiantes.forEach(e => {
                    nota1=parseFloat(prompt(`Ingresa la nota 1 de ${e.nombre}`))
                    if(nota1>=0 && nota1<=5){
                        nota2=parseFloat(prompt(`Ingresa la nota 2 de ${e.nombre}`))
                        if(nota2>=0 && nota2<=5){
                            nota3=parseFloat(prompt(`Ingresa la nota 3 de ${e.nombre}`))
                            if(nota3>=0 && nota3<=5){
                                promEstudiante=((nota1+nota2+nota3)/3)
                                e.promedio=promEstudiante
                                promGeneral +=promEstudiante
                                if(promEstudiante>=3.5){
                                    aprobo="aprobo"
                                    e.aprobo=aprobo
                                    alert(`${e.nombre} aprobo la materia`)
                                }else{
                                    aprobo="Reprobo"
                                    e.aprobo=aprobo
                                    alert(`${e.nombre} Reprobo la materia`)
                                }
                            }else{
                                alert("NO es una nota valida intente de nuevo")
                            }
                        }else{
                            alert("no es una nota valida intente de nuevo")
                        }
                    }else{
                        alert("No es una nota valida intente de nuevo")
                    }    
                });                
                break;
            case 5:
                estudiantes.forEach(element => {
                    console.log(`El promedio de ${element.nombre} es de ${element.promedio} ${element.aprobo}`)                  
                });
                console.log("El promedio general del curso fue "+(promGeneral/cantEstudiante))               
                break;
            default:
                break;
        }
    }else{
        alert("No es un numero valido para las opciones, intente otra vez")
    } 
} while (opcion!=6);