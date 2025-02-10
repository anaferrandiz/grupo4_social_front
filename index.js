'use strict'

// MENÚ RESPONSIVE

const headerBtn = document.querySelector('.header__button')
const headerNav = document.querySelector('.header__nav')
// console.log(headerBtn)
// console.log(headerNav)

headerBtn.addEventListener('click', function () {
    headerNav.classList.toggle('isActive')
})

document.addEventListener('DOMContentLoaded', async () => {
    const zonas = await getZonas();
    if (zonas) {
        printZonas(zonas);
    }
});

const getZonas = async () => {
    try {
        const response = await fetch('http://localhost:3000/index');
        if (response.ok) {
            return await response.json();    
        }
    } catch (error) {
        console.error('Ocurrió un error:', error.message);
        throw new Error('Error al cargar las zonas');
    }
    throw new Error('Error en la solicitud');
};

//html
const printZonas = (zonas) => {
    const list = document.getElementById('zona');
    if (!list) {
        console.error("'No se encontró el elemento con ID 'zona'");
        return;
    }

    //limpiar las opciones previas, excepto la primera
    list.innerHTML = '<option selected disabled>Elige la zona de la horta</option>';

    //recorrer el array de zonas y agregarlas como opciones al select

    zonas.forEach(zona => {
        let option = document.createElement('option');
        option.value = zona._id;
        option.textContent = zona.nombre;
        list.appendChild(option);
    });
 
    //agregar al event listener despues de que el select esté lleno
    list.addEventListener("change", function () {
        const selectedId = list.value;
        const selectedText = list.options[list.selectedIndex].text;

        if (selectedId) {
            window.location.href = `paginas/agricultores.html?zonaId=${selectedId}&zonaName=${encodeURIComponent(selectedText)}`;
        }
    })
}