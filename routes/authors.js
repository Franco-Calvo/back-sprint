import express from "express";
import controller from "../controllers/authors/create.js";
import schema from "../schemas/authors.js";
import validator from '../middleware/validator.js'
import is_active from "../middleware/authors/is_active.js";
//import passport from '../middleware/passport.js'

const { create } = controller
let router = express.Router();

router.post("/authors"/*,passport.authenticate('jwt',{session:false})*/,validator(schema),create );

export default router;
