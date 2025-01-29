document.addEventListener("DOMContentLoaded", function () {
  const formContainers = document.querySelectorAll(".form-container");
  const nextButtons = document.querySelectorAll(".next-btn");
  const prevButtons = document.querySelectorAll(".prev-btn");
  let currentForm = 0;

  function showForm(index) {
      formContainers.forEach((form, i) => {
          form.classList.toggle("active", i === index);
      });
  }

  nextButtons.forEach((btn, index) => {
      btn.addEventListener("click", () => {
          if (index === 1) {
              const files = document.getElementById("huertaFotos").files;
              if (files.length < 3) {
                  document.getElementById("photoError").textContent = "Debe subir al menos 3 fotos.";
                  return;
              }
              document.getElementById("photoError").textContent = "";
          }
          currentForm++;
          showForm(currentForm);
      });
  });

  prevButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
          currentForm--;
          showForm(currentForm);
      });
  });

  showForm(currentForm);
});

document.getElementById("precio").addEventListener("input", function (e) {
    let value = e.target.value;

    // Evita números negativos
    if (value < 0) {
        e.target.value = "";
        return;
    }

    // Limita a 2 decimales
    let num = parseFloat(value);
    if (!isNaN(num)) {
        e.target.value = num.toFixed(2);
    }
});
