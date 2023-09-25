alert("Ejercicio 8");

let fibo = prompt("Dime que número de la serie quieres saber: ");
console.log(fibonacci(fibo));


function fibonacci(numero) {
    if (numero === 0) {
        return 0;
    } else if (numero === 1) {
        return 1;
    } else {
        return (fibonacci(numero - 1) + fibonacci(numero - 2));
    }
}

