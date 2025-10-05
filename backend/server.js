const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Crear la aplicación
const app = express();
app.use(cors());
app.use(express.json());

// Puerto de ejecución
const PORT = process.env.PORT || 3000;

// Endpoint principal
app.get("/", (req, res) => {
  res.send("✅ Servidor del Proyecto LLM funcionando correctamente.");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor iniciado en http://localhost:${PORT}`);
});
