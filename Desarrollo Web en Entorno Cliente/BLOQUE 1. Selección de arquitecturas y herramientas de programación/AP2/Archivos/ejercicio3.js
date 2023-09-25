/*
Actividad 3 –
En el archivo index.html proporcionado,
implementa un script para que cuando el usuario pase el cursor del ratón sobre el título de primer nivel (h1),
el contenido del título (Casa Pepe) se cambie por otro de tú elección (Ejemplo: Tu bar para almorzar).
*/

function changeTitle() {
    this.innerHTML = "El mejor ALMUERZO";
}

function originalTitle() {
    this.innerHTML = "Casa Pepe";
}
const title = document.getElementsByTagName("h1")[0];

title.addEventListener("mouseover", changeTitle);
title.addEventListener("mouseout", originalTitle);