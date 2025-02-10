
// Convertir imágenes a Base64
async function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

    let fotoBase64 = "";
    if (fotoFile) {
        fotoBase64 = await toBase64(fotoFile);
    }
    let huertaFotosBase64 = [];
    for (let file of huertaFotosInput) {
        huertaFotosBase64.push(await toBase64(file));
    }
 }


// Enviar datos al backend
async function sendData() {
    //const fotoFile = document.querySelector('input[type="file"]').files[0];

    const form = document.getElementById('agricultoresForm')

    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const direccion = document.getElementById("direccion").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const localizacion = document.getElementById('localizacion').value;
    const horarios = document.getElementById('horarios').value;
    const descripcion = document.getElementById('descripcion').value;
    //const huertaFotosInput = document.getElementById("huertaFotos").files;
    const tipoCaja = document.getElementById('tipoCajaSelect').value;
    const disponibilidad = document.getElementById('diponibilidadSelect').value;
    const precio = document.getElementById("precio").value;
    const envioRecogida = document.getElementById('envioRecogida').value;
    const tipoPago = document.getElementById('tipoPago').value;

    const agricultorData = {
        nombre:nombre,
        apellidos: apellidos,
        direccion: direccion,
        telefono: telefono,
        email:email,
        //fotoPerfil: fotoBase64,
        localizacion: localizacion,
        horarios: horarios,
        descripcion: descripcion,
        //fotos: huertaFotosBase64,
        tipoCaja: tipoCaja,
        disponibilidad: disponibilidad,
        precio: precio,
        envioRecogida: envioRecogida,
        tipoPago: tipoPago,
    };

    console.log("Datos enviados:", agricultorData);

    try {
        const response = await fetch("http://localhost:3000/agricultores", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(agricultorData)
        });

        console.log("Respuesta:", response);
        const result = await response.json();
        console.log("Respuesta del servidor:", result);
        alert(`Se ha creado correctamente el agricultor ${result.nombre} con email ${result.email}`);
    } catch (error) {
        console.error("Error en la petición:", error);
        alert("Hubo un error al enviar los datos.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const nextButtons = document.querySelectorAll(".next-btn");
    const prevButtons = document.querySelectorAll(".prev-btn");
    const forms = document.querySelectorAll(".form-container");
    let currentFormIndex = 0;

    // Función de manejo para avanzar en los formularios
    async function handleNext(index) {
        try {
            // if (index === 0) await savePersonalData();
            // if (index === 1) await saveHuertaData();

            forms[currentFormIndex].classList.remove("active");
            currentFormIndex++;
            forms[currentFormIndex].classList.add("active");
        } catch (error) {
            console.error("Error al avanzar en el formulario:", error);
        }
    }

    // Usar un bucle `for...of` en lugar de `forEach`
    for (let button of nextButtons) {
        button.addEventListener("click", async (event) => {
            event.preventDefault();
            const index = Array.from(nextButtons).indexOf(button);
            await handleNext(index);
        });
    }

    for (let button of prevButtons) {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            forms[currentFormIndex].classList.remove("active");
            currentFormIndex--;
            forms[currentFormIndex].classList.add("active");
        });
    }
});
