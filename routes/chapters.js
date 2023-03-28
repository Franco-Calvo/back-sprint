import express from "express";
import chapterCreate from "../controllers/chapters/create.js";
import postschema from "../schemas/chapters.js";
import validator from "../middleware/validator.js";
import passport from "../middleware/passport.js";
import nextOrder from "../middleware/chapters/next_order.js";
import addFrontPhoto from "../middleware/chapters/add_front_photo.js";
import existsOrder from "../middleware/chapters/exists_order.js";
import is_active from "../middleware/authors/is_active.js";
import is_property_of from "../middleware/authors/is_property_of.js";
<<<<<<< HEAD
=======
import is_property_of_chapter from "../middleware/chapters/is_property_of_chapter.js";
>>>>>>> d61d0c9dac88ca38ab9c9e764d1514b2fdd05431
import find_id from "../middleware/auth/find_id.js";
import getCharpters from "../controllers/chapters/get_charpters.js";
import chapter_get_one from "../controllers/chapters/get_one.js";
import chapter_readAll from "../controllers/chapters/read_all.js";
import updateController from "../controllers/chapters/update.js";
import deleteController from "../controllers/chapters/destroy.js";

let router = express.Router();

const { schema, editschema } = postschema;
const { destroy } = deleteController;
const { update } = updateController;
const { create } = chapterCreate;
const { get_chapter } = getCharpters;
const { read_all } = chapter_readAll;
const { get_one } = chapter_get_one;

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  is_active,
  validator(schema),
  is_property_of,
  existsOrder,
  nextOrder,
  addFrontPhoto,
  create
);

router.get("/", get_chapter);
router.get("/", read_all);
router.get("/:id", get_one);

router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  is_active,
  validator(editschema),
  find_id,
  is_property_of,
  update
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  is_active,
  find_id,
  is_property_of_chapter,
  destroy
);

export default router;
