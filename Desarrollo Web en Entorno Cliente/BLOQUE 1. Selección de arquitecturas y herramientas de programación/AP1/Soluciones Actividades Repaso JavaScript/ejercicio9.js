alert("Ejercicio 9");

let lottery = [];

lottery.push(Math.floor(Math.random() * 50) + 1);
addNumber(0, 5, 50);
lottery.push(Math.floor(Math.random() * 12) + 1);
addNumber(4, 7, 12);

function addNumber(start, total, numbers) {
    let check = false;
    do {
        let num = Math.floor(Math.random() * numbers) + 1;
        for (let i = start; i < lottery.length; i++) {
            if (lottery[i] === num) {
                check = false;
            }
        }
        if (check === true) {
            lottery.push(num);
        } else {
            check = true;
        }
    } while (lottery.length !== total);
}


console.log(lottery);