import express from "express";
import createController from "../controllers/authors/create.js";
import getOneController from "../controllers/authors/get_one.js";
import schema from "../schemas/authors.js";
import validator from "../middleware/validator.js";
import passport from "../middleware/passport.js";
import getMecontroller from "../controllers/authors/getMe.js";
import updateController from "../controllers/authors/update.js";
import find_id from "../middleware/auth/find_id.js";
import is_active from "../middleware/authors/is_active.js";
import schemaUpdate from "../schemas/update.js";

const { create } = createController;
const { get_one } = getOneController;
const {me}=getMecontroller;
const {update}=updateController;

let router = express.Router();

router.post("/",passport.authenticate("jwt", { session: false }),validator(schema),create);
router.get("/me", passport.authenticate("jwt", { session:false }), find_id, me );
router.put("/me", passport.authenticate("jwt", { session:false }),validator(schemaUpdate), find_id,is_active, update )
router.get("/:id", get_one);

export default router;
