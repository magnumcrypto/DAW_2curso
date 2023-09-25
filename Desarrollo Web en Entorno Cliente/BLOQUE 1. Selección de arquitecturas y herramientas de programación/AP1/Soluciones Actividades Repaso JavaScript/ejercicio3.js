alert("Ejercicio 3");

mark();

function mark() {
    let qualification = parseInt(prompt("Dime que nota tienes", ""));
    if (qualification < 5 && qualification >= 0) {
        alert("Insuficiente");
    } else if (qualification >= 5 && qualification < 6) {
        alert("Suficiente");
    } else if (qualification >= 6 && qualification < 7) {
        alert("Bien");
    } else if (qualification >= 7 && qualification < 8) {
        alert("Notable");
    } else if (qualification >= 8 && qualification < 9) {
        alert("Notable alto");
    } else if (qualification >= 9 && qualification <= 10) {
        alert("Sobresaliente");
    } else {
        alert("La nota no es correcta");
        mark();
    }
}