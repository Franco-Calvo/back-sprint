import express from 'express'
import mangaSchema from '../schemas/mangas.js'
import validator from '../middleware/validator.js'
import mangaCreate from '../controllers/manga/create.js'
//import exist_title from '../middleware/manga/exist_title.js'
import allController from '../controllers/category/all.js'
//import is_active from '../middleware/authors/is_active.js'
import passport from '../middleware/passport.js'

let router = express.Router()
const { create } = mangaCreate
const { all } = allController

router.post("/", passport.authenticate('jwt',{session:false}) , validator(mangaSchema), create);
router.get('/',all)
export default router