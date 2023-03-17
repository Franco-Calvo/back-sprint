import express from "express";
import createController from "../controllers/authors/create.js";
import getOneController from "../controllers/authors/get_one.js";
import schema from "../schemas/authors.js";
import validator from "../middleware/validator.js";
import passport from "../middleware/passport.js";



const { create } = createController;
const { get_one } = getOneController;

let router = express.Router();

router.post("/",passport.authenticate("jwt", { session: false }),validator(schema),create);

router.get("/:id", get_one);


export default router;
