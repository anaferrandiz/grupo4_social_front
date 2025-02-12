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
              tarjetaAgricultor.innerHTML = 
              `
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
                         <a href="../html/agricultor.html?id=${agricultor._id}">Quiero saber más!</a>
                      </div>
                    </div>
                  </div>
              `;
          
              // Append the newly created element to the render element
              render.appendChild(tarjetaAgricultor.firstElementChild);
          });
      } catch (error) {
          console.error("Error en la petición:", error);
          alert("Hubo un error al enviar los datos.");
      }
}


getAgricultores();