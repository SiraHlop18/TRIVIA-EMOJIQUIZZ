var puntaje = localStorage.getItem('puntaje');

document.getElementById('resultado').innerHTML = ` 
${puntaje}` ;


if (puntaje > 70){
    document.getElementById('mensaje').innerHTML = "Felicidades, lograste adivinar correctamente.";

}
else if (puntaje > 30){
    document.getElementById('mensaje').innerHTML = "Bien hecho, pero puedes hacerlo mejor.";
}
else {
    document.getElementById('mensaje').innerHTML = "¡Vuelve a intentarlo, puedes hacerlo mejor!";
}