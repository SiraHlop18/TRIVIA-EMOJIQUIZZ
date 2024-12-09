const preguntas = [
    '🏦💰🎭🎬🔫👺',
    '👨‍🔬💎💊🚐⚗️💰',
    '🚲👻👾🔦🎢👽',
    '🎭💊🚬🎶📱👩',
    '🍍🌊🐙🐿️🦀🍔',
    '🐷🎈🐘👪🚗📚',
    '🍩📺🍺🍔💛👨‍👩‍👧‍👦',
    '🦑🎪🎮💰👥🔴',
    '👨‍👩‍👦‍👦🍺📺🤣🎶🐕',
    '👴👦🌌⚗️🔬🥒',
]

const opciones = [

    ['Spy x family', 'The boys', 'La casa de papel', 'El oso'],
    ['Breakind bad', 'Doom PatrolL', 'Titanes', 'Los 100'],
    ['Fringe', 'Dark', 'Stranger Things', 'The expanse'],
    ['Jerarquia', 'The 8 show', 'Euphoria', 'Bridgerton'],
    ['Macha y el oso', 'Pocoyo', 'Jorge el curioso', 'Bob Sponja'],
    ['Teletubbies', 'Doki', 'Peppa pig', 'Cleo y Cuquin'],
    ['Los simpson', 'Merlina', 'Seinfeld', 'Derry Girls'],
    ['Hannibal', 'El juego del calamar', 'El juego de la muerte', 'Estamos muertos'],
    ['Padre de Familia', 'Dulce Hogar', 'El castillo Vagabundo ', 'Dahmer'],
    ['Chernobyl', 'Them', 'The OA', 'Rick y Morty'],
]
const clave = [

    [0, 0, 10, 0],
    [10, 0, 0, 0],
    [0, 0, 10, 0],
    [0, 0, 10, 0],
    [0, 0, 0, 10],
    [0, 0, 10, 0],
    [10, 0, 0, 0],
    [0, 10, 0, 0],
    [10, 0, 0, 0],
    [0, 0, 0, 10],
]
var i = 0;
var puntaje = 0;


function mostrarPreguntas() {
    document.getElementById('pregunta').innerHTML = preguntas[i];
    document.getElementById('op1').innerHTML = opciones[i][0];
    document.getElementById('op2').innerHTML = opciones[i][1];
    document.getElementById('op3').innerHTML = opciones[i][2];
    document.getElementById('op4').innerHTML = opciones[i][3];

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
 


function actualizarPuntaje(valor) {
    puntaje = clave[i][valor] + puntaje;

    i = i + 1;
    if (preguntas.length > i) {
        mostrarPreguntas();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado(){
 localStorage.setItem('puntaje',puntaje);
 location.href='Puntaje.html'

}


mostrarPreguntas();
