/* 
Actividad 2 – 
Implementa el script anterior utilizando esta vez un bucle do while.
*/

document.addEventListener("DOMContentLoaded", function () {
    let giveMeYourAge;

    do {

        giveMeYourAge = window.prompt("Hola! ¿Cuántos años tienes?");
        giveMeYourAge = parseInt(giveMeYourAge);
        if (isNaN(giveMeYourAge)) window.alert("Tienes que introducir un número válido.");

    } while (isNaN(giveMeYourAge));

    document.getElementById("saludo").innerHTML = "El usuario tiene " + giveMeYourAge + " años.";
})