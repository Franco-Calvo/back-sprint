import express from "express";
import createController from "../controllers/authors/create.js";
import getOneController from "../controllers/authors/get_one.js";
import schema from "../schemas/authors.js";
import validator from "../middleware/validator.js";
import passport from "../middleware/passport.js";
import getMecontroller from "../controllers/authors/get_me.js";
import updateController from "../controllers/authors/update.js";
import find_id from "../middleware/auth/find_id.js";
import is_active from "../middleware/authors/is_active.js";
import schemaUpdate from "../schemas/update.js";
import read_allController from "../controllers/authors/read_all.js"

const { create } = createController;
const { get_one } = getOneController;
const {get_me}=getMecontroller;
const {update}=updateController;
const {read_all}=read_allController;

let router = express.Router();

router.post("/",passport.authenticate("jwt", { session: false }),validator(schema),create);
router.get("/me", passport.authenticate("jwt", { session:false }), find_id, get_me );
router.put("/me", passport.authenticate("jwt", { session:false }),validator(schemaUpdate), find_id,is_active, update )
router.get("/:id", get_one);
router.get('/', read_all)


export default router;
