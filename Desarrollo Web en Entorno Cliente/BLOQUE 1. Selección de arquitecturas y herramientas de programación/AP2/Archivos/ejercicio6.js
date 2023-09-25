/*
Actividad 6 –
En el archivo almuerzos.html proporcionado,
implementa un script para que cuando se cargue la página la tabla con las imágenes aparezca oculta al usuario.
Al hacer éste doble click sobre el titulo 'Almuerzos', se mostrará la tabla.
Si vuelve a hacer doble click, se ocultará otra vez. Y así sucesivamente.
*/

document.addEventListener("DOMContentLoaded", function () {
    const arraySrcOfImages = [];
    const images = document.querySelectorAll(".container img");
    images.forEach(element => {
        arraySrcOfImages.push(element.src);
        element.src = "";
    })

    const title = document.getElementsByTagName("h1")[0];

    title.addEventListener("click", function () {
        images.forEach((element, index) => { element.src = arraySrcOfImages[index] })
    })
    title.addEventListener("mouseover", function () { this.title = "Haz doble CLICK!" })
})