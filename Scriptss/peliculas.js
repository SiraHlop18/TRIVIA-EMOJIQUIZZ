const preguntas = [

    '🤡🔪🎈🎈🎈🎈',
    '🚢🌊⚓️❤️🎻🌅',
    '🕷️🕸️🦸‍♂️🌆🏙️🕷️',
    '🍫🏭🍭🎩🍬🍪',
    '👶🍼🏀🍔🚗😂',
    '🌍🦍🚀🔬🐒🌿',
    '👠🐶🎨💄🖤🕶️',
    '🥋👦🎋👊🏆👴',
    '🏎️💨🚓🚨🔥🏁',
    '⚔️🏴‍☠️🌊🚢💰',
]
const opciones = [

    ['Stitches', 'It', 'Clownhouse', '31'],
    ['Titanic', 'Sirenita', 'Oceanos', 'Lejos del mar'],
    ['La telaraña de Charlot', 'Bob el constructor','Araña', 'Spiderman'],
    ['Home', 'Dulce Familia', 'Charli y la fabrica de chocolate', 'La cosa mas dulce'],
    ['Son como niños','Shrek', 'Mamá o Papá', 'Sing'],
    ['Monos', 'Planeta de los simios', 'El reino de los monos', 'King kong'],
    ['Malefica', 'Barbie', 'Cruella', 'Blanca nieves'],
    ['Kung fu panda', 'El luchador', 'The Hammer', 'Karate Kid'],
    ['Toy story', 'Rapidos y Furiosos', 'Interestelar', 'Al pacino'],
    ['Invicto', 'Piratas del Caribe', 'Buscando a Dory', 'Unidos'],

]

const clave = [

    [0, 10, 0, 0],
    [10, 0, 0, 0],
    [0, 0, 0, 10],
    [0, 0, 10, 0],
    [10, 0, 0, 0],
    [0, 10, 0, 0],
    [0, 0, 10, 0],
    [0, 0, 0, 10],
    [0, 10, 0, 0],
    [0, 10, 0, 0],
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