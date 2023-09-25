alert("Ejercicio 4");

mark();

function mark() {
    let qualification = parseInt(prompt("Dime que nota tienes", ""));
    switch (qualification) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            alert("Insuficiente");
            break;
        case 5:
            alert("Suficiente");
            break;
        case 6:
            alert("Bien");
            break;
        case 7:
            alert("Notable");
            break;
        case 8:
            alert("Notable alto");
            break;
        case 9:
            alert("Sobresaliente");
            break;
        case 10:
            alert("Excelente");
            break;
        default:
            alert("La nota no es correcta");
            mark();
            break;
    }
}