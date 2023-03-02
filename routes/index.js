import express from "express";
import userRouter from "./users.js";
import chapterRouter from "./chapters.js";
import mangaRouter from './manga.js'

let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/auth', userRouter)
router.use("/mangas", mangaRouter);
router.use("/chapters", chapterRouter)

export default router