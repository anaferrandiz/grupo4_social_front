window.addEventListener("load", () => {
    getAgricultores();
    
});

async function getAgricultores() {
    // const idUrl = URLSearchParams()
  
      try {
          const response = await fetch("http://localhost:3000/agricultores/", {
              method: "GET",
          });
  
          const result = await response.json();
          let render = document.getElementById('render')
          result.forEach(agricultor => {
              // Create a wrapper element and set the innerHTML
              const tarjetaAgricultor = document.createElement('div');
              tarjetaAgricultor.innerHTML = `
                <a href="../html/agricultor/${agricultor.id}.html">
                  <div class="section__agric">
                    <div class="wrap__h3__img">
                      <div class="agric__image-wrapper">
                        <picture>
                          <source srcset="../assets/paula_s.webp" media="(max-width:1000px)">
                          <img src="../assets/paula.webp" alt="Imagen de huerta" class="agric__image" loading="lazy">
                        </picture>
                      </div>
                    </div>
                    <div class="agric__data">
                      <h3 class="agric__name">${agricultor.nombre}</h3>
                      <p class="agric__description">${agricultor.descripcion}</p>
                      <div class="wrap__contact">
                        <p class="agric__contact">📞${agricultor.telefono}</p>
                        <p class="agric__info">Quiero saber más!</p>
                      </div>
                    </div>
                  </div>
                </a>
              `;
          
              // Append the newly created element to the render element
              render.appendChild(tarjetaAgricultor.firstElementChild);
          });
      } catch (error) {
          console.error("Error en la petición:", error);
          alert("Hubo un error al enviar los datos.");
      }
}

document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  console.log('params', params)
  const zonaId = params.get('zona');
  const zonaName = params.get('zonaName');
  console.log('zone', zonaId)
  if (zonaId) {
    try {
      const zonaTitle = document.getElementById('zona-title');
    if (zonaName && zonaTitle) {
      conaTitle.textContent = zonaName.toUpperCase();
    }
     //obtener agricultores zona seleccionada
const agricultores = await getAgricultores(zonaId);
printAgricultores(agricultores);
  } catch (error) {
    console.error("error al cargar los agricultores:", error);
  }
} else {
  console.error("no se recibió zona ID en la URL");
}});

//llama el endpoin para obtener agricultores por zonas 
const getAgricultoresOther = async (zonaId) => {
  try {
    const response = await fetch(`http://localhost:3000/index/${zonaId}/agricultores`);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error('Ocurrió un error:', error.message);
        throw new Error('Error al cargar los agricultores');
    }
    throw new Error('Error en la solicitud');
};

//render de agricultores en el conteiner
