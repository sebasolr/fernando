//añade la variable que quieres modificar
let button = document.querySelector('.button')
//creas una funcion para quitar el borde inicial
function remove(){
    //tomar la variable le aplicas style y que estilo quieres = el valor que deseas
    button.style.border = 'none';
    //manipulas el dom, agregando un texto a tu boton
    button.textContent ='Agrega borde'
}
//funcion para agregar el borde
function add(){
    button.style.border = 'solid 1px black'
    button.textContent ='Quitar borde'
    
}
// creamos un evento, al momento de hacer click se activa la siguiente funcion
button.addEventListener('click', function(){
    //si el contenido del boton es igual a agrega borde se aplica la funcion add(agregar el borde), si no se cumple esa condicion se salta al else
    if(button.textContent === 'Agrega borde'){
        add()
        //si no se cumple la primera quitara el borde.
    }else{
        remove()
    }
})