import express from 'express'
import Chapter from '../models/Chapter.js';
import controller from '../controllers/chapters/create.js'
let router = express.Router();

router.post('/', async (req, res) => {
    try {
        req.body.manga_id = '63ffafade652fa554fe009eb'
        let controller = await Chapter.create(req.body)
        return res.status(201).json({
            success: true,
            message: "capitulo creado correctamente.",
            controller: controller
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'no se pudo crear el capitulo'
        })
    }
})

export default router