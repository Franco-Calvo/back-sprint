import express from "express";
import userRouter from "./auth.js";
import authorRouter from "./authors.js";
import chapterRouter from "./chapters.js";
import mangaRouter from "./manga.js";
import commentsRouter from './comments.js';
import companyRouter from './companies.js'
import paymentRouter from "./payment.js";

const router = express.Router();

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
router.use("/comments", commentsRouter);
router.use("/companies", companyRouter)
router.use("/payment", paymentRouter);
// router.use("/categories", categories);

export default router;
