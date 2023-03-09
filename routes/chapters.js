import express from 'express'
import chapterCreate from '../controllers/chapters/create.js'
import postschema from '../schemas/chapters.js'
import validator from '../middleware/validator.js'
import passport from '../middleware/passport.js'
import nextOrder from '../middleware/chapters/next_order.js'
import addFrontPhoto from '../middleware/chapters/add_front_photo.js'
import existsOrder from '../middleware/chapters/exists_order.js'
import is_active from '../middleware/authors/is_active.js'
import is_property_of from '../middleware/authors/is_property_of.js'
import chapterController from '../controllers/chapters/get_one.js'

let router = express.Router()


const { create } = chapterCreate
const { get_one } = chapterController
// router.get('/', function (req, res, next) {
//     res.send('chapters here');
// })



router.post('/', passport.authenticate('jwt', { session: false }), is_active, validator(postschema), existsOrder, nextOrder, addFrontPhoto, create)
router.get('/:id', get_one)
export default router
