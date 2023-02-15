const opcion1=document.getElementById('menu1')
const opcion2=document.getElementById('menu2')
const opcion3=document.getElementById('menu3')
const opcion4=document.getElementById('menu4')
const opcion5=document.getElementById('menu5')

const contenido=document.getElementById('relleno')

opcion1.addEventListener('click',function (){
    contenido.innerHTML=`<h1>Receta del dia</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem IPsum has been the industry's standar dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fice centuries,but also the leap into electronic typesseting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing sfotware like Aldus PageMaker including versions of Lorem Ipsum</p>
    <div class="imagen"><img src="https://i.blogs.es/2d7201/1/1366_2000.jpg" height="250" width="300"></div>`

})

opcion2.addEventListener('click',function (){
    contenido.innerHTML=`<h1>Platos Fuertes</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem IPsum has been the industry's standar dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fice centuries,but also the leap into electronic typesseting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing sfotware like Aldus PageMaker including versions of Lorem Ipsum</p>
    <div class="imagen"><img src="https://cdn7.kiwilimon.com/brightcove/7147/7147.jpg" height="250" width="300"></div>`

})

opcion3.addEventListener('click',function (){
    contenido.innerHTML=`<h1>Ensaladas</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem IPsum has been the industry's standar dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fice centuries,but also the leap into electronic typesseting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing sfotware like Aldus PageMaker including versions of Lorem Ipsum</p>
    <div class="imagen"><img src="http://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2018/01/ensalada11.jpg" height="250" width="300"></div>
    `

})

opcion4.addEventListener('click',function (){
    contenido.innerHTML=`<h1>Postres</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem IPsum has been the industry's standar dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fice centuries,but also the leap into electronic typesseting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing sfotware like Aldus PageMaker including versions of Lorem Ipsum</p>
    <div class="imagen"><img src="https://www.elespectador.com/resizer/X76eSg3VU_4fZI24vl9Ky3p545Y=/525x350/filters:quality(70):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/TJERDCQCIFAQXJZL2AFMX23QR4.jpg" height="250" width="300"></div>`

})

opcion5.addEventListener('click',function (){
    contenido.innerHTML=`<h1>Bebidas</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem IPsum has been the industry's standar dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fice centuries,but also the leap into electronic typesseting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing sfotware like Aldus PageMaker including versions of Lorem Ipsum</p>
    <div class="imagen"><img src="https://www.hrs-heatexchangers.com/wp-content/uploads/2021/06/HRS-Beverages-1140x600-1.png" height="250" width="300"></div>`

})


