import express from "express";
import User from "./../models/User.js";

let router = express.Router();

router.get("/", (req, res) => {
  return res
    .status(200) // 200: Éxito para la lectura
    .send("Acá deberías ver todos los usuarios"); // Send envía mensajes al cliente
});

router.post("/", async (req, res) => {
  // Crear Users
  try {
    let user = await User.create(req.body);
    return res.status(201).send("Se crearon los users");
  } catch (error) {
    console.log(error);
    return res.status(400).send("No se pudo crear");
  }
});

export default router;
