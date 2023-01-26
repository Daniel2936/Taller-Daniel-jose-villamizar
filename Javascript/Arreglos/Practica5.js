const arroz={
    nombre:"arroz con pollo",
    precio:15000
}
const pastas={
    nombre:"pastas",
    precio:12000
}
const Mute={
    nombre:"mute",
    precio:20000
}
const Pescado={
    nombre:"Pescado frito",
    precio:17000
}
const sobre={
    nombre:"sobrebarriga",
    precio:25000
}

var menu=new Object();
var pedido=[]

let clientes=parseInt(prompt("cuantos clientes desea ingresar al sistema"))
let orden
let total=0
if(Number.isInteger(clientes)&&clientes>0){
    for(let i=0;i<clientes;i++){
        orden=prompt("Que desea pedir el cliente N "+(i+1))
        switch (orden) {
            case arroz.nombre:
                menu =Object.assign({} , arroz)
                pedido.push(menu)
                menu={}
                break;
            case pastas.nombre:
                menu =Object.assign({} , pastas)
                pedido.push(menu)
                menu={}
                break;
            case Mute.nombre:
                menu =Object.assign({} , Mute)
                pedido.push(menu)
                menu={}
                break;
            case Pescado.nombre:
                menu =Object.assign({} , Pescado)
                pedido.push(menu)
                menu={}
                break;
            case sobre.nombre:
                menu =Object.assign({} , sobre)
                pedido.push(menu)
                menu={}
                break;
            
            default:
                alert("NO es un plato valido")
                break;
        }
    }
    console.log(pedido)
    pedido.forEach(e1=>{
        total+=e1.precio

    })
    console.log("el total de la cuenta es $: "+total)
}else{
    alert("No es numero valido de clientes haga de nuevo")
}