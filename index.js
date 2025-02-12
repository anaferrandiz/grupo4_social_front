'use strict'

// MENÚ RESPONSIVE

const headerBtn = document.querySelector('.header__button')
const headerNav = document.querySelector('.header__nav')
// console.log(headerBtn)
// console.log(headerNav)

headerBtn.addEventListener('click', function () {
    headerNav.classList.toggle('isActive')
})



document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos todos los botones de las zonas
    const zonas = document.querySelectorAll(".zone__image-wrapper button");

    zonas.forEach((zona) => {
        zona.addEventListener("click", () => {
            const zonaId = zona.id; // Obtener el ID del botón
            window.location.href = `html/agricultores.html?zona=${zonaId}`; // Redirigir con el parámetro en la URL
        });
    });
});