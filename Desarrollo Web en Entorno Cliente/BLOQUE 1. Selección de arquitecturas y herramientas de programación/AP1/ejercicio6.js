/* 
Actividad 6 –
    Implementa en un script la función o funciones que necesites para que mediante prompt()
    se le pida al usuario que introduzca un número y a continuación muestre por pantalla el resultado del factorial de ese número.
    Se deberá utilizar el bucle ‘for’.
        Nota: factorial del número 5 = 5*4*3*2*1.
        Factorial del número 7 = 7*6*5*4*3*2*1.
*/

document.addEventListener("DOMContentLoaded", function () {
    calculaFactorial();
})

const calculaFactorial = () => {
    let giveMeANumber = prompt("Elige un número:");
    let number = parseInt(giveMeANumber);

    const labelArea = document.getElementById("area");
    const labelPerimetro = document.getElementById("perimetro");
    let factorial = 1;
    if (isNaN(number)) {
        alert("Obligatoriamente tiene que ser un valor númerico!");
        calculaFactorial();
    } else {
        for (i = 1; i <= number; i++) {
            factorial *= i;
        }
        labelPerimetro.innerHTML = "El resultado del factorial del número " + number + " es " + factorial;
    }
}