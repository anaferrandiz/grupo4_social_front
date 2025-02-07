document.getElementById("form-agricultor").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar recarga de página

    // Obtener datos del formulario
    const formData = new FormData(event.target);
    const agricultor = {
        nombre: formData.get("nombre"),
        direccion: formData.get("direccion"),
        telefono: formData.get("telefono"),
        email: formData.get("email")
    };

    console.log("Enviando agricultor:", agricultor); // Para depuración

    // Enviar al backend con fetch
    fetch("http://localhost:3000/agricultores", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(agricultor)
    })
    .then(response => response.json())
    .then(data => console.log("Respuesta del servidor:", data))
    .catch(error => console.error("Error en fetch:", error));
});
