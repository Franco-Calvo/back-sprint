import Manga from "../../models/Manga.js";
import Author from "../../models/Author.js";
import Chapter from "../../models/Chapter.js";

async function is_property_of_chapter(req, res, next) {
  const chapter = await Chapter.findOne({
    _id:req.params.id
  })
  const author = await Author.findOne({
    user_id: req.user._id,
  });
  let manga;
  if(chapter){
    manga = await Manga.findOne({
    _id: chapter.manga_id,
    author_id: author._id,
  });
  }else{
    return res.status(404).json({
      succes: false,
      message: "Chapter not found",
    });
  }
  if (manga) {
    return next();
  }
  return res.status(400).json({
    succes: false,
    message: "The manga is not by the author!",
  });
}
export default is_property_of_chapter;
