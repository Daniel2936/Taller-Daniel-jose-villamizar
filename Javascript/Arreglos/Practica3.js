//ingrese una palabra, la letra que quiere cambiar y la posicion en la cual quiere cambiar dicha letra

function reemplazar(p1,l1,l2){
    p1=p1.split('')
    p1.splice(l2,1,l1);
    p1=p1.join('')
    console.log(`la palabra nueva es :${p1}`)

}

reemplazar("andrea","o",4)
