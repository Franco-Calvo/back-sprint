import express from 'express'
import allController from '../controllers/category/all.js'
import updateController from '../controllers/category/update.js'

const { all } = allController
const {update} = updateController

let router = express.Router();

router.get('/', all)
router.put('/:id', update)

export default router