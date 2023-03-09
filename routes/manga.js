import express from 'express'
import mangaSchema from '../schemas/mangas.js'
import validator from '../middleware/validator.js'
import mangaCreate from '../controllers/manga/create.js'
import exist_title from '../middleware/manga/exist_title.js'
import is_active from '../middleware/authors/is_active.js'
import passport from '../middleware/passport.js'
import getOne from '../controllers/manga/get_one.js'

let router = express.Router()
const { create } = mangaCreate
const {get_one} = getOne


router.post("/", passport.authenticate('jwt',{session:false}),is_active , validator(mangaSchema),exist_title, create);

router.get("/:id",get_one);
export default router