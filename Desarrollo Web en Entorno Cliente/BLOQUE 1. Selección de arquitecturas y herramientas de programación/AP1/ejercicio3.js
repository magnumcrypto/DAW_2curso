/* 
Actividad 3 – 
Implementa en un script la función o funciones que necesites para que mediante el uso de prompt()
se le pregunte al usuario que nota numérica ha obtenido a final de curso y le devuelva la calificación “en letra”:
    insuficiente (menos de 5 puntos),
    suficiente (entre 5 y 6 puntos),
    bien (entre 6 y 7 puntos),
    notable (entre 7 y 8 puntos),
    notable alto (entre 8 y 9 puntos)
    y sobresaliente (más de 9 puntos).
Para realizar este script deberás utilizar la sentencia condicional ‘if’.
*/

document.addEventListener("DOMContentLoaded", function () {
    let examGrade;
    do {
        examGrade = window.prompt("¿Que nota has sacado en el examen?");
        if (isNaN(examGrade) || examGrade < 0 || examGrade > 10) window.alert("Tiene que ser un número y estar entre 0 y 10");
        examGrade = parseInt(examGrade);
    } while (isNaN(examGrade) || (examGrade < 0 || examGrade > 10));

    function calification(grade) {
        if (grade > 9) return "Sobresaliente";
        if (grade >= 8) return "Notable Alto";
        if (grade >= 7) return "Notable";
        if (grade >= 6) return "Bien";
        if (grade >= 5) return "Suficiente";
        return "Insuficiente";
    }

    const result = calification(examGrade).toUpperCase();
    const message = `Has sacado un ${result}.`;
    document.getElementById("saludo").innerHTML = message;
})