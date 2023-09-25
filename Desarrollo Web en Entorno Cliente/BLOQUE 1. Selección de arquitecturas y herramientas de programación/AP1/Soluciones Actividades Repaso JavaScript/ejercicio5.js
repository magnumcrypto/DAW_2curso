alert("Ejercicio 5");
ask();

function ask() {
    let sideA, sideB;
    do {
        sideA = prompt("Por favor, dime el lado 1:");
    } while (isNaN(sideA));

    do {
        sideB = prompt("Por favor, dime el lado 2:");
    } while (isNaN(sideB));
    calculate(sideA, sideB);
};

function calculate(sideA, sideB) {
    console.log("El area es: " + (sideA * sideB));
    console.log("El perimetro es: " + (2 * sideA + 2 * sideB));

    if (sideB === sideA) {
        console.log("Se trata de un cuadrado");
    } else {
        console.log("Se trata de un rectangulo");
    }
};
