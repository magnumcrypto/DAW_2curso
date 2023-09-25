alert("Ejercicio 2");

let age;
do {
    age = prompt("¿Que edad tienes?");
} while (isNaN(age));

alert("Naciste en " + (2023 - age));