const express = require("express");
const router = express.Router();

// Lista temporal de usuarios (conectamos la base de datos)
let usuarios = [];

//  Ruta para obtener todos los usuarios
router.get("/", (req, res) => {
  res.json(usuarios);
});

//  Ruta para registrar un nuevo usuario
router.post("/", (req, res) => {
  const { nombre, correo } = req.body;

  // Validación básica
  if (!nombre || !correo) {
    return res.status(400).json({ mensaje: "Faltan datos del usuario." });
  }

  const nuevoUsuario = { id: usuarios.length + 1, nombre, correo };
  usuarios.push(nuevoUsuario);

  res.status(201).json({ mensaje: "Usuario registrado correctamente.", usuario: nuevoUsuario });
});

module.exports = router;
