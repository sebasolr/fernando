//añade la variable que quieres modificar
let button = document.querySelector('.button')
//creas una funcion para quitar el borde inicial

//esto hace lo mismo que el evento
document.getElementById('button').onclick = function MyFuncion () {
     //si el contenido del boton es igual a agrega borde se aplica la funcion add(agregar el borde), si no se cumple esa condicion se salta al else
     if(button.textContent === 'Agrega borde'){
        button.style.border = 'solid 1px black'
        button.textContent ='Quitar borde' 
        //si no se cumple la primera quitara el borde.
        }else{
        button.style.border = 'none';
        button.textContent ='Agrega borde'
        }
    }