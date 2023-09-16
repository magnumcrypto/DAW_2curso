/* 
Actividad 4 – 
Implementa el script anterior utilizando esta vez
la sentencia condicional ‘switch’.
*/

document.addEventListener("DOMContentLoaded", function () {
    let examGrade;

    do {
        examGrade = window.prompt("¿Qué nota has sacado en el examen?");
        if (isNaN(examGrade) || examGrade < 0 || examGrade > 10) window.alert("Tiene que ser un númerop y estar entre 0 y 10");
        examGrade = parseInt(examGrade);
    } while (isNaN(examGrade) || examGrade < 0 || examGrade > 10);

    function calification(grade) {
        let nota;
        switch (true) {
            case grade > 9:
                nota = "sobresaliente";
                break;
            case grade >= 9:
                nota = "notable alto";
                break;
            case grade >= 7:
                nota = "notable";
                break;
            case grade >= 6:
                nota = "bien";
                break;
            case grade >= 5:
                nota = "suficiente";
                break;
            default:
                nota = "insuficiente";
        }
        return nota;
    }

    const result = calification(examGrade).toUpperCase();
    const message = `Has sacado un ${result}.`;
    document.getElementById("saludo").innerHTML = message;
})