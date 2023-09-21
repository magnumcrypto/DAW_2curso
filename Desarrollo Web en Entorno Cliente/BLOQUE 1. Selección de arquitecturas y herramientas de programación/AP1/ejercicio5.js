/* 
Actividad 5 –
    Implementa en un script la función o funciones que necesites para que mediante el uso de prompt()
    se le pida al usuario que introduzca los dos lados de un paralelogramo -figura geométrica de cuatro lados- y responda por consola
    -utilizando console.log- con el área y perímetro del paralelogramo calculados a partir de los datos introducidos por el usuario.
    Además, deberá informar de qué tipo de paralelogramo se trata:
        cuadrado -los cuatro lados iguales-
        rectangular –lados iguales dos a dos-.
    Nota: en el caso de que el usuario no introduzca números para alguno de los lados,
    el script volverá a pedirle que introduzca un número.
*/

document.addEventListener("DOMContentLoaded", function () {
    calculateFigure();
})



const calculateFigure = () => {

    let giveMeSideA = prompt("Medidas en m (metros) del lado A:");
    let giveMeSideB = prompt("Medidas en m (metros) del lado B:");

    let sideA = parseInt(giveMeSideA);
    let sideB = parseInt(giveMeSideB);

    const tipoCuadrado = "Cuadrado";
    const tipoRectangular = "Rectangular";

    const label = document.getElementById("tipo_figura_a");
    const labelSideA = document.getElementById("lado_a");
    const labelSideB = document.getElementById("lado_b");
    const labelArea = document.getElementById("area");
    const labelPerimetro = document.getElementById("perimetro");

    if (isNaN(sideA) || isNaN(sideB)) {
        alert("Las dos medidas deben de ser unidades númericas, no se aceptan otros carácteres.!");
        calculateFigure();
    } else {
        (sideA === sideB) ? label.innerHTML = "Es una figura de tipo " + tipoCuadrado : label.innerHTML = "Es una figura de tipo " + tipoRectangular;
        labelSideA.innerHTML = "Lado A de la figura: " + sideA + " metros.";
        labelSideB.innerHTML = "Lado B de la figura: " + sideB + " metros."; 2309834
        labelPerimetro.innerHTML = "Perimetro de la figura: " + (sideA + sideB) + " metros.";
        labelArea.innerHTML = "Area total de la figura: " + (sideA * sideB) + " metros cuadrados.";
    }
}