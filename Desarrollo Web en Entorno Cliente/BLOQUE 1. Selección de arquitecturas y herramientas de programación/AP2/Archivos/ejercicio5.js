/*
Actividad 5 –
En el archivo index.html proporcionado,
implementa un script para que cuando el usuario haga click se realicen los siguientes cambios sobre los párrafos:
    -Primer párrafo: la fuente –tipo de letra- cambia de color, pasa a negrita y el tamaño cambia a 20px.
    -Segundo párrafo: la fuente –tipo de letra- cambia de color, pasa a negrita y el tamaño cambia a 30px.
    -Tercer párrafo: la fuente –tipo de letra- cambia de color, pasa a negrita y el tamaño cambia a 40px.
    -Cuarto párrafo: la fuente –tipo de letra- cambia de color, pasa a negrita y el tamaño cambia a 50px.
*/

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nutrition a");
    const elements = document.querySelectorAll(".nutrition li");

    applyChanges(elements, links);
})

function applyChanges(elements, links) {
    elements.forEach((li, index) => {
        console.log(li)
        li.addEventListener("click", function () {
            links[index].style.color = "white";
            links[index].style.fontWeight = "bold";
            links[index].style.fontSize = "30px";
            /*             if (index === 0) {
                            links[index].style.color = "white";
                            links[index].style.fontWeight = "bold";
                            links[index].style.fontSize = "30px";
                        }
                        if (index === 1) {
                            links[index].style.color = "white";
                            links[index].style.fontWeight = "bold";
                            links[index].style.fontSize = "30px";
                        }
                        if (index === 2) {
                            links[index].style.color = "white";
                            links[index].style.fontWeight = "bold";
                            links[index].style.fontSize = "30px";
                        }
                        if (index === 3) {
                            links[index].style.color = "white";
                            links[index].style.fontWeight = "bold";
                            links[index].style.fontSize = "30px";
                        } */
        })
    })
}