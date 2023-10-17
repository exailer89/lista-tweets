// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


// Eventos
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
}


// Funciones
function agregarTweet(e) {
    e.preventDefault();
    
    // Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;
    
    // Validacion del campo
    if (tweet === '') {
        mostrarError('Este campos no puede ir vacio');
        return;
    }

    console.log(tweet);
}

function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertar el mensaje en el contenido
    const contenido = document.querySelector('#contenedor-formulario');
    contenido.appendChild(mensajeError);

    // Elimina la alerta despues de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000)
}