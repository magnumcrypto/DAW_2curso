/*
Actividad 2 –
En el archivo index.html proporcionado,
implementa un script para introducir una imagen de fondo de tu elección al div cuya clase es header (<div class=”header”>).
*/
const nuevaImagen = document.createElement("img");
nuevaImagen.style.width = "30%";
nuevaImagen.style.height = "80%";
nuevaImagen.src = './src/img/imagen_fondo.jpg';


const header = document.querySelector(".header");

header.appendChild(nuevaImagen);



