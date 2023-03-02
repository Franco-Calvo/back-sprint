import express from 'express'
let router = express.Router()
import chapterCreate from '../controllers/chapters/create.js'

const { create } = chapterCreate
router.get('/', function (req, res, next) {
    res.send('chapters here');
});

router.post('/', create)

export default router
