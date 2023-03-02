import Manga from '../../models/Manga.js'

async function is_property_of(req,res,next) {
    const manga = await Manga.findOne({
        manga_id:req.body.manga_id,
        author_id: req.body.author_id})
    if (manga) {
        return next()
    }
    return res.status(400).json({
        succes:false,
        message: 'The manga is not by the author!',
        data: manga
    })
}
export default is_property_of