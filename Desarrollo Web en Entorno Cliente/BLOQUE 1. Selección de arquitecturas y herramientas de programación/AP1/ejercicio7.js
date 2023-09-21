/*
Actividad 7 –
    Implementa en un script la función o funciones que necesites para que mediante prompt()
    se le pida al usuario introduzca una palabra o frase y le responda por pantalla si esa palabra es un palíndromo.
    No se podrá utilizar la función reverse().
    Nota: Palíndromo: palabra o frase que se lee igual de atrás hacia adelante.
    Ejemplos: ‘Ana’. ‘Otto’. ‘Dábale arroz a la zorra el abad’.
*/

document.addEventListener("DOMContentLoaded", function () {
    compruebaPalindromo();
})


const compruebaPalindromo = () => {
    let dameFrase = prompt("Dime una frase o una palabra");

    const removeAccents = (str) => {
        str = str.toLowerCase();
        str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return str = str.replace(/ /g, "");
    }

    dameFrase = removeAccents(dameFrase);
    let counter = 0;

    const palindromo = document.getElementById("saludo");
    for (let k = 0; k < dameFrase.length; k++) {
        if (dameFrase[k] === dameFrase[(dameFrase.length - 1) - k]) counter++;
    }
    return (counter === dameFrase.length) ? palindromo.innerHTML = "SI es palindromo" : palindromo.innerHTML = "NO es palindromo";
}