alert("Ejercicio 10");

let month = prompt("Dime mes");
let days = parseInt(prompt("Dime dias del mes"));
let startingDay = prompt("Dime dia de la semana que empieza el mes");

calendar(month, days, startingDay);

function calendar(month, days, startingDay) {
    startingDay = startingDay.toLowerCase();
    let calend = new Array(2);
    for (let i = 0; i < 7; i++) {
        calend[i] = new Array(7);
    }
    let day = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    for (let i = 0; i < 7; i++) {
        calend[0][i] = day[i];
        if (day[i].toLowerCase() === startingDay) {
            calend[1][i] = 1;
        }
    }

    let counter = 1;
    for (let i = 1; i < calend.length; i++) {
        for (let j = 0; j < calend[i].length; j++) {
            if (calend[i][j] === 1) {
                calend[i][j] = counter;
                if (j !== 6 && counter !== days) {
                    calend[i][j + 1] = 1;
                } else {
                    if (i !== 6 && counter !== days) {
                        calend[i + 1][0] = 1;
                    } else {
                        break;
                    }
                }
                if (counter === days) {
                    break;
                } else {
                    counter += 1;
                }
            }
        }
    }
    console.log("Calendario del mes de " + month);
    console.table(calend);
}