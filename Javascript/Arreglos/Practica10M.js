let array=[]

for(let i=0;i<3;i++){
    array[i]=[]
    for(let j=0;j<3;j++){
        j=== i ? array[i][j]=1:array[i][j]=0


    }
}

//console.log(array)

let array2=[]
let cont=0

for(let i=0;i<3;i++){
    array2[i]=[]
    for(let j=0;j<3;j++){
        cont++
        array2[i][j]=cont
        



    }
}

console.log(array2)