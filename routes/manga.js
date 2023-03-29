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
import getMe from "../controllers/manga/get_me.js";
import find_id from "../middleware/auth/find_id.js";
import update_controller from "../controllers/manga/update.js";
import delete_controller from "../controllers/manga/delete.js";
import is_property_of from "../middleware/authors/is_property_of.js";

let router = express.Router();
const { get_me } = getMe;
const { create } = mangaCreate;
const { get_one } = getOne;
const { all } = allController;
const { allget } = getMangas;
const { get_mangas_from_author } = getMangasController;
const { update } = update_controller;
const { deleteC } = delete_controller;

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  is_active,
  validator(mangaSchema),
  exist_title,
  create
);

router.get("/", all);
router.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  find_id,
  get_me
);
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  find_id,
  is_active,
  is_property_of,
  update
);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  find_id,
  is_active,
  is_property_of,
  deleteC
);
router.get("/view", allget);
router.get("/:id", get_one);
router.get("/authors/:id", get_mangas_from_author);

export default router;
