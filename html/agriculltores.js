const headers = {
    method: "get",
    headers: {
        "Content-Type": "application/json"
    },
};
fetch("localhost:3000/agricultores", headers)
.then(res => res.json())
.then(data => {
    console.log(data);
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