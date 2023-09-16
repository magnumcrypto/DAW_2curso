/* 
Actividad 1 – 
Implementa en un script la función o funciones que necesites para que mediante el uso de prompt()
se le pregunte al usuario cuántos años tiene y tras capturar su respuesta,
se muestre por pantalla una alerta que indique el año en que nació. Si el usuario introduce por error letras en lugar de números, 
volverá a preguntar al usuario cuántos años tiene hasta que éste introduzca un número. 
Para realizar este script deberás utilizar la sentencia condicional ‘if’.
*/

document.addEventListener("DOMContentLoaded", function () {
    const askForAge = () => {
        let giveMeYourAge = window.prompt("Hola! ¿Cuántos años tienes?");
        giveMeYourAge = parseInt(giveMeYourAge);

        if (isNaN(giveMeYourAge)) {
            window.alert("Tienes que introducir un número válido.");
            askForAge(); // Llama recursivamente a la función para volver a pedir la edad.
        } else {
            document.getElementById("saludo").innerHTML = "El usuario tiene " + giveMeYourAge + " años.";
        }
    }

    askForAge(); // Llama a la función por primera vez.
})
