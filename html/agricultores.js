document.addEventListener("DOMContentLoaded", async () => { 
const agricultores = await getAgricultores();
if (agricultores) {
    printAgricultores (agricultores)
}
})
const getAgricultores = () => {
    return fetch('localhost:3000/agricultores')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.json();
        })
        .catch((error) => {
            console.error('Ocurrió un error:', error.message);
            throw new Error('Error al cargar la pagina');
        });
};

const printAgricultores = (agricultores) => {
const list = document.getElementById("agric__data");
list.innerHTML='';
agricultores.forEach(agricultor => { 
    const item = document.createElement('li');
    item.textContent = agricultor.name;
    list.appendChild(item);
});
}