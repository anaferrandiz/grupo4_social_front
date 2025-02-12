// Obtener el ID desde la URL
const param = new URLSearchParams(document.location.search);
const id = param.get('id');
async function getAgricultor(id) {
    if (!id) {
        console.error("No se encontró un ID en la URL");
        return;
    }
    try {
        // Hacer la petición al endpoint con el ID como parámetro
        const response = await fetch(`http://localhost:3000/agricultores/${id}`, {
            method: "GET",
        });
        if (!response.ok) {
            throw new Error("Error al obtener los datos del agricultor");
        }
        const result = await response.json();
        // Verificar si se encontró el agricultor
        if (result.length === 0) {
            console.warn("No se encontró un agricultor con este ID");
            return;
        }
        let agricultor = result; 
        let render = document.getElementById('render');
        const tarjetaAgricultor = document.createElement('div');
        tarjetaAgricultor.innerHTML = `
            <div class="section__agric">
                <div class="wrap__h3__img">
                    <div class="agric__image-wrapper">
                        <picture>
                            <source srcset="../assets/paula.webp" media="(max-width:1000px)">
                            <img src="../assets/paula.webp" alt="Imagen de huerta" class="agric__image" loading="lazy">
                        </picture>
                    </div>
                </div>
                <div class="section">
                    <div class="agric__data">
                        <h3 class="agric__name">${agricultor.nombre}</h3>
                        <p class="agric__description">${agricultor.descripcion}</p>
                        <p class="agric__description">${agricultor.descripcion_extra}</p>
                        <div class="wrap__contact">
                            <p class="agric__contact">
                                <a href="tel:+${agricultor.telefono}">📞 ${agricultor.telefono}</a>
                            </p>
                            <p class="agric__contact">
                                <a href="https://www.google.com/maps?q=${encodeURIComponent(agricultor.direccion)}" target="_blank">${agricultor.direccion}</a>
                            </p>  
                            <p class="agric__contact">
                                <a href="mailto:${agricultor.email}">${agricultor.email}</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="wrap__caja">
                    <h4 class="agric__caja agric__name">La caja</h4>
                    <p class="p__agric__caja__p">${agricultor.descripcion_caja}</p>
                    <div class="wrap__agric__caja__img">
                        <picture>
                            <source srcset="../assets/${agricultor.imagen_caja_s}" media="(max-width:1000px)">
                            <img src="../assets/${agricultor.imagen_caja}" alt="Imagen de la caja" class="caja__img" loading="lazy">
                        </picture>
                    </div>
                </div>
            </div>
        `;
        render.appendChild(tarjetaAgricultor);
    } catch (error) {
        console.error("Error en la petición:", error);
        alert("Hubo un error al obtener los datos del agricultor.");
    }
}
// Llamar a la función con el ID obtenido de la URL
getAgricultor(id);