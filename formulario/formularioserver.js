const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const upload = multer({ dest: "uploads/" });

app.post("/api/formulario", upload.fields([
  { name: "fotoPerfil", maxCount: 1 },
  { name: "fotosHuerta", maxCount: 10 },
]), (req, res) => {
  const fotosHuerta = req.files.fotosHuerta || [];

  if (fotosHuerta.length < 3) {
    return res.status(400).json({ message: "Debes subir al menos 3 fotos de la huerta." });
  }

  res.json({ message: "Formulario enviado exitosamente." });
});

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
