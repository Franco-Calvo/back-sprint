import Chapter from '../../models/Chapter.js'

async function nextOrder(req, res, next) {
    if (!req.body.order) {
        let chapter = await Chapter.find({ manga_id: req.body.manga_id }).sort("-order")
        chapter = chapter[0]
        req.body.order = chapter.order + 1
    }

    next()
}

export default nextOrder



