/*
Actividad 7 –
En el archivo almuerzos.html proporcionado,
implementa un script para que cuando el usuario pase el cursor por encima de cualquiera de las imágenes de la tabla,
ésta cambie su opacidad a la mitad.
Si hace click sobre dicha imagen,
saltará una pantalla modal con el nombre del bocadillo y un enlace que llevará a una URL con información sobre él mismo.
Los nombres de los bocadillos son:
    Chivito, Blanco y negro, Brascada, Almussafes, Tortilla de patatas, Calamares en alioli.
*/

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".container img");
    setStyle(images);
})

function setStyle(images) {
    images.forEach(element => {
        element.addEventListener("mouseover", function () {
            this.style.opacity = "0.5";
        })
        element.addEventListener("mouseout", function () {
            this.style.opacity = "1";
        })
        element.addEventListener("click", function () {
            const imageName = getImageName(this.id);
            showModal(imageName);
        })
    });
}

function getImageName(imageId) {
    const imageNames = {
        "modal1": "Chivito",
        "modal2": "Blanco y negro",
        "modal3": "Brascada",
        "modal4": "Almussafes",
        "modal5": "Tortilla de patatas",
        "modal6": "Calamares en alioli"
    }
    return imageNames[imageId];
}

function showModal(imageName) {
    const modal = document.querySelector(".modal");
    const modalContent = modal.querySelector(".modal-content");
    const modalTitle = modalContent.querySelector("h1");

    modalTitle.textContent = imageName;
    modal.classList.add("show-modal");

    const closeButton = modalContent.querySelector(".close-button");
    closeButton.addEventListener("click", function () {
        modal.classList.remove("show-modal");
    });
}