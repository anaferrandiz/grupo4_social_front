document.getElementById("huertaForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const fotos = formData.getAll("fotosHuerta");

    if (fotos.length < 3) {
      alert("Debes subir al menos 3 fotos de la huerta.");
      return;
    }

    const progressBar = document.getElementById("progressBar");
    progressBar.style.width = "50%";

    try {
      const response = await fetch("http://localhost:3000/api/formulario", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      progressBar.style.width = "100%";
      alert(result.message);
    } catch (err) {
      console.error(err);
      alert("Ocurrió un error al enviar el formulario.");
    }
  });
