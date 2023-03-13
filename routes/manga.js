import express from "express";
import mangaSchema from "../schemas/mangas.js";
import validator from "../middleware/validator.js";
import mangaCreate from "../controllers/manga/create.js";
import exist_title from "../middleware/manga/exist_title.js";
import is_active from "../middleware/authors/is_active.js";
import passport from "../middleware/passport.js";
import getOne from "../controllers/manga/get_one.js";
import getMangas from "../controllers/manga/get_mangas.js";
import allController from "../controllers/category/all.js";
import getMangasController from "../controllers/manga/get_mangas_from_author.js";

let router = express.Router();
const {create} = mangaCreate;
const {get_one} = getOne;
const {all} = allController;
const {allget} = getMangas;
const {get_mangas_from_author} = getMangasController;

router.post(
  "/",
  passport.authenticate("jwt", {session: false}),
  is_active,
  validator(mangaSchema),
  exist_title,
  create
);

router.get("/", all);
router.get("/view", allget);
router.get("/:id", get_one);
router.get("/authors/:id", get_mangas_from_author);

export default router;
