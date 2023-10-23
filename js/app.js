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

    const tweetObj = {
        id: Date.now(), // A falta de BD, utilizaremos esto como identificador único.
        tweet: tweet
    }

    // Añadir al arreglo de Tweets
    tweets = [...tweets, tweetObj];

    // Crear el HTML para que se muestre el Tweet.
    crearHTML();

    // Reiniciar el Formulario
    formulario.reset();
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


// Muestra un listado de los Tweets
function crearHTML() {

    limpiarHTML();

    if (tweets.length > 0) {
        tweets.forEach( tweet => {
            // Crear el HTML
            const li = document.createElement('li');

            // Añadir Texto
            li.innerText = tweet.tweet;

            // Insertarlo en el HTML
            listaTweets.appendChild(li);
        });
    }
}

// Limpiar el HTML
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}