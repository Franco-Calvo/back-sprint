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
    req.body.is_online = false;
    req.body.is_admin = false;
    req.body.is_author = false;
    req.body.is_company = false;
    req.body.is_verified = false;
    req.body.verify_code = "2sjns8120mmfh1020sm1ñ29";
    let user = await User.create(req.body);
    return res.status(201).json("Se crearon los users");
  } catch (error) {
    console.log(error);
    return res.status(400).json("No se pudo crear");
  }
});

export default router;
