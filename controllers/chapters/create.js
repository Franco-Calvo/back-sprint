import Chapter from '../../models/Chapter.js'

const chapterCreate = {
    create: async (req, res, next) => {
        try {
            const chapter = await Chapter.create(req.body)
            res.status(201).json({
                success: true,
                response: chapter,
            })
        } catch (error) {
            next(error)
        }
    }

}

export default chapterCreate


