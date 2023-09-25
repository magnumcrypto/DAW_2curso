alert("Ejercicio 1");

ask();

function ask() {
    let age = prompt("¿Que edad tienes?");
    if (isNaN(age) === false) {
        alert("Naciste en " + (2023 - age));
    } else {
        ask();
    }
}

