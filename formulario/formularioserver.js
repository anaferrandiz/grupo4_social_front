const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(cors());
app.use(express.json());

app.post("/submit", upload.array("huertaFotos", 10), (req, res) => {
    if (req.files.length < 3) {
        return res.status(400).json({ error: "Debe subir al menos 3 fotos de la huerta." });
    }
    res.json({ success: true, message: "Formulario enviado correctamente." });
});

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
