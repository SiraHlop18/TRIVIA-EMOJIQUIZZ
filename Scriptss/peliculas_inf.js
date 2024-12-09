//Variables

const preguntas = ["🤢😡😃😭😨👧", "🎈🏠🏞️👴👦🐶", "🌹👸🦁🏰🕯️🕰️", "👸🍎🏰🎶🍳🤴", "🤠🚀🌌🧸🤖👨‍🚀", "🐼🥋🍜💪🎋🔥", "🚗🔴🏁🏎️💨🚦", "👸💄👠🎀👜💅", "🍌👓💛😂👷‍♂️🍔 ", "🐠🌊🐟🐋🚤🗺️"];

const opciones = [["Intensamente", "Los increibles", "Los Minions", "Red"], ["Tarsán", "Up", "Bolt", "Coco"], ["La Bella Durmiente", "Blanca Nieves", "La Bella y la Bestia", "Peter Pan"], ["La Bella Durmiente", "Aladín", "Barbie", "Blanca Nieves"], ["Toy Story", "Grandes Heroes", "Ralph el Demoledor", "Chiken Little"], ["Kung Fu Panda", "Tierra de osos", "Madagascar", "La Era de Hielo"], ["Turbo", "Cars", "Aviones", "Bolt"], ["Barbie", "Encanto", "La Bella Durmiente", "Juego de gemelas"], ["Zootopia", "Los Minions", "Bee Movie", "El Libro de la Selva"], ["Luca", "La sirenita", "Moana", "Buscando a Nemo"]];

const clave = [
    [10, 0, 0, 0],
    [0, 10, 0, 0],
    [0, 0, 10, 0],
    [0, 0, 0, 10],
    [10, 0, 0, 0],
    [10, 0, 0, 0],
    [0, 10, 0, 0],
    [10, 0, 0, 0],
    [0, 10, 0, 0],
    [0, 0, 0, 10],
];

var i = 0;
var puntaje = 0;

//en el documento que tenga el ID que se muestre se mostrara la pregunta con sus opciones.
function mostrarPreguntas() {
    document.getElementById('pregunta').innerHTML = preguntas[i];
    document.getElementById('op1').innerHTML = opciones[i][0];
    document.getElementById('op2').innerHTML = opciones[i][1];
    document.getElementById('op3').innerHTML = opciones[i][2];
    document.getElementById('op4').innerHTML = opciones[i][3];


}


function actualizarPuntaje(valor) {
    if (valor != -1) {
        puntaje = clave[i][valor] + puntaje;

    }

    i = i + 1;
    if (preguntas.length > i) {
        mostrarPreguntas();
    } else {
        mostrarResultado();
    }
}

document.getElementById('op1').addEventListener('click', function () {
    actualizarPuntaje(0);
})
document.getElementById('op2').addEventListener('click', function () {
    actualizarPuntaje(1);
})
document.getElementById('op3').addEventListener('click', function () {
    actualizarPuntaje(2);
})
document.getElementById('op4').addEventListener('click', function () {
    actualizarPuntaje(3);
})
document.getElementById('siguiente').addEventListener('click', function () {
    actualizarPuntaje();
})




function mostrarResultado(){
 localStorage.setItem('puntaje',puntaje);
 location.href='Puntaje.html'

}

function actualizarPuntaje(valor) {
    // Verificar si valor está definido
    if (valor !== undefined) {
        // Solo actualizar el puntaje si se seleccionó una opción
        puntaje = clave[i][valor] + puntaje;
    }

    i = i + 1;
    
    // Verificar si hay más preguntas
    if (i < preguntas.length) {
        mostrarPreguntas();  // Mostrar la siguiente pregunta
    } else {
        mostrarResultado();  // Mostrar los resultados finales
    }
}


mostrarPreguntas();