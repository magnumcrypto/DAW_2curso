alert("Ejercicio 6");

let num = prompt("Dime el número");
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

alert("El factorial de " + num + " es " + factorial);
