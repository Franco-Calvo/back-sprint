import Manga from "../../models/Manga.js";
import Chapter from "../../models/Chapter.js";

const controller = {
  deleteC: async (req, res, next) => {
    try {
      const { id } = req.params;
      let dst = await Manga.deleteOne({ _id: id });
      let dstChapter = await Chapter.deleteMany({ manga_id: id });
      console.log(dst)
      return res.status(200).json({
        dst,
        dstChapter,
      }); //Corregir status
    } catch (error) {
      next(error);
    }
  },
};

export default controller;
