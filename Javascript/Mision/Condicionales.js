let estudiantes=parseInt(prompt("cuantos estudiantes desea registrar"));
let examen1,examen2,examen3,promexamen
let trabajos1,trabajos2,prometrabajo;
let notafinal,promnotafinal;
let autoevaluacion,coevaluacion,promautoevalucion
let totalnotaestudiante

if(estudiantes>0){
     for(let i=0;i<estudiantes;i++){
        examen1=parseFloat(prompt("Ingrese La nota de examenes N1 del estudiante N "+(i+1)))
        if(examen1>=0 && examen1<=5){
            examen2=parseFloat(prompt("Ingrese La nota de examenes N2 del estudiante N "+(i+1)))
            if(examen2>=0 && examen2<=5){
                examen3=parseFloat(prompt("Ingrese La nota de examenes N3 del estudiante N "+(i+1)))
                if(examen3>=0 && examen3<=5){
                    promexamen=((examen1+examen2+examen3)/3)*0.55
                    trabajos1=parseFloat(prompt("Ingrese La nota de trabajos  N1 del estudiante N "+(i+1)))
                    if(trabajos1>=0 && trabajos1<=5){
                        trabajos2=parseFloat(prompt("Ingrese La nota de trabajos  N2 del estudiante N "+(i+1)))
                        if(trabajos2>=0 && trabajos2<=5){
                            prometrabajo=((trabajos1+trabajos2)/2)*0.15
                            notafinal=parseFloat(prompt ("Ingrese la nota final del estudiante N "+(i+1)))
                            if(notafinal>=0 && notafinal<=5){
                                promnotafinal=notafinal*0.2
                                autoevaluacion=parseFloat(prompt ("Ingrese la nota de autoevaluacion  del estudiante N "+(i+1)))
                                if(autoevaluacion>=0 && autoevaluacion<=5){
                                    coevaluacion=parseFloat(prompt ("Ingrese la nota de coevaluacion del profesor al estudiante N "+(i+1)))
                                    if(coevaluacion>=0 && coevaluacion<=5){
                                        promautoevalucion=((autoevaluacion+coevaluacion)/2)*0.1
                                        totalnotaestudiante=promexamen+prometrabajo+promnotafinal+promautoevalucion
                                        if(totalnotaestudiante>=4.7 && totalnotaestudiante<=5){
                                            console.log("La notal final del estudiante es: "+totalnotaestudiante)
                                            console.log("El estudiante está en un nivel superior")
                                            console.log("el estudiante aprueba el curso")
                                        }else{
                                            if(totalnotaestudiante>=4 && totalnotaestudiante<=4.6){
                                                console.log("La notal final del estudiante es: "+totalnotaestudiante)
                                                console.log("El estudiante está en un nivel alto")
                                                console.log("el estudiante aprueba el curso")

                                            }else{
                                                if(totalnotaestudiante>=3 && totalnotaestudiante<=3.9){
                                                    console.log("La notal final del estudiante es: "+totalnotaestudiante)
                                                    console.log("El estudiante está en un nivel basico")
                                                    console.log("el estudiante aprueba el curso")

                                                }else{
                                                    if(totalnotaestudiante>=2 && totalnotaestudiante<=2.9){
                                                        console.log("La notal final del estudiante es: "+totalnotaestudiante)
                                                        console.log("El estudiante está en un nivel bajo")
                                                        console.log("el estudiante reprueba el curso")

                                                    }else{
                                                        if(totalnotaestudiante>=0 && totalnotaestudiante<=1.9){
                                                            console.log("La notal final del estudiante es: "+totalnotaestudiante)
                                                            console.log("El estudiante está en un nivel muy bajo")
                                                             console.log("el estudiante reprueba el curso")

                                                        }

                                                    }

                                                }

                                            }

                                        }

                                    }else{
                                        alert("No es una nota valida intentelo de nuevo")
                                        break

                                    }

                                }else{
                                    alert("No es una nota valida intentelo de nuevo")
                                    break
                                }

                            }else{
                                alert("No es una nota valida intentelo de nuevo")
                                break

                            }

                        }else{
                            alert("No es una nota valida intentelo de nuevo")
                            break

                        }

                    }else{
                        alert("No es una nota valida intentelo de nuevo")
                         break

                    }

                }else{
                    alert("No es una nota valida intentelo de nuevo")
                    break                  
                }

            }else{

                alert("No es una nota valida intentelo de nuevo")
                break
            }
            
        }else{
            alert("No es una nota valida intentelo de nuevo")
            break
        }

    }

}else{

    alert("No es un numero valido de estudiantes")
}