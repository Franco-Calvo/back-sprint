import Manga from "../../models/Manga.js";

const controller = {
  get_mangas_from_author: async (req, res) => {
    let count = await Manga.countDocuments({ author_id: req.params.id });
    let pagination = {
      page: 1,
      limit: 4,
    };
    if (count > 4) {
      pagination.limit = count / 2;
    }
    try {
      let mangaNew = await Manga.find({ author_id: req.params.id })
        .select("title description cover_photo")
        .sort({ createdAt: -1 })
        .skip(
          pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0
        )
        .limit(pagination.limit > 0 ? pagination.limit : 0);
      let mangaOld = await Manga.find({ author_id: req.params.id })
        .select("title description cover_photo")
        .sort({ createdAt: 1 })
        .skip(
          pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0
        )
        .limit(pagination.limit > 0 ? pagination.limit : 0);
      return res.status(200).json({
        success: true,
        new: mangaNew,
        old: mangaOld,
        count: count,
      });
    } catch {
      return res.status(404).json({
        success: false,
        message: "This author has not mangas!",
      });
    }
  },
};
export default controller;
