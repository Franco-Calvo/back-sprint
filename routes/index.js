import express from "express";
import userRouter from "./auth.js";
import authorRouter from "./authors.js";
import chapterRouter from "./chapters.js";
import mangaRouter from "./manga.js";


let router = express.Router();

 function authorIsActive(req, res, next) {
  //Esto viene de passport
  req.user = {
    is_author: true,
    is_active: true,
  };

  //Tener otro middleware o dentro del mismo verificar si es author
  if (req.user.is_author) {
    if (req.user.is_active) {
      next();
    }
  }

  function isAuthor(req, res, next) {
    req.user = {
      is_author: true,
      is_active: true,
    };

    if (req.user.is_author) {
      next();
    }

    return res.status(400).json({
      message: "Bad request",
    });
  }
} 

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

//rutas de todos los recursos
//a traves del metodo .use() le indico al enrutador principal que use esas rutas con esa palabrita(endpoint)
router.use("/auth", userRouter);
router.use("/authors", authorRouter);
router.use("/mangas", mangaRouter);
router.use("/chapters", chapterRouter);


export default router;
