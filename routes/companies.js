import express from 'express'
import controller from '../controllers/companies/create_company.js'
import readAll from '../controllers/companies/read_all.js'
import schema from '../schemas/companies.js'
import validator from '../middleware/validator.js'
import passport from '../middleware/passport.js'


const { create } = controller
const { read_all } = readAll

let router = express.Router();

router.post('/', passport.authenticate('jwt', { session: false }), validator(schema), create)
router.get('/', read_all)

export default router