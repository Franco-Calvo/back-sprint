import Manga from "../../models/Manga.js";
import Author from "../../models/Author.js";

async function is_property_of(req, res, next) {
  req.body.manga_id === undefined ? (req.body.manga_id = req.params.id) : null;
  const author = await Author.findOne({
    user_id: req.user._id,
  });
  const manga = await Manga.findOne({
    _id: req.body.manga_id,
    author_id: author._id,
  });
  if (manga) {
    return next();
  }
  return res.status(400).json({
    succes: false,
    message: "The manga is not by the author!",
  });
}
export default is_property_of;
