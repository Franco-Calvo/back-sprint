import express from "express";
import Author from "./../models/Author.js";
let router = express.Router();

router.get("/", (req, res) => {
    return res
      .status(200)
      .send("Acá deberías ver todos los autores");
  });

router.post("/", async (req, res) => {
  try {
    req.body.user_id='63fe72b7c75248e38d293139';
    req.body.active=true;
    let author = await Author.create(req.body);
    return res.json({
      succes: true,
      author: author
    });
  } catch (error) {
    console.log(error);
    return res.json({
      succes: false,
      error:error,
      message: "No se pudo crear el autor",
    });
  }
});

export default router;
