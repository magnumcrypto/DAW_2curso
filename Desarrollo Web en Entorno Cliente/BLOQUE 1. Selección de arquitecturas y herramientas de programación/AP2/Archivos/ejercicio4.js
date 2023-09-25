/*
Actividad 4 –
En el archivo index.html proporcionado,
implementa un script para que cuando se cargue la pantalla
se oculten los contenidos incluidos bajo la clase "nutrition”.
A continuación, implementa la lógica necesaria para que cuando el usuario haga click sobre el logo
que has introducido en el Ejercicio 1, se muestren los elementos incluidos bajo la clase "nutrition”.
*/

window.addEventListener("load", function () {
    const links = this.document.querySelectorAll(".nutrition li");

    const estadoOriginal = [];
    links.forEach((li) => {
        estadoOriginal.push(li.style.display);
        li.style.display = "none";
    });

    const image = document.getElementsByTagName("img")[0];

    image.addEventListener("click", function () {
        links.forEach((li, index) => {
            li.style.display = estadoOriginal[index];
        });
    })
})

