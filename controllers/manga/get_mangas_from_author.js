import Manga from "../../models/Manga.js";

const controller = {
  get_mangas_from_author: async (req, res) => {
    let count = await Manga.countDocuments({author_id: req.params.id});
    let order = req.query.new === "true" ? -1 : 1;
    let pagination = {
      page: 1,
      limit: 4,
    };
    if (count > 4) {
      pagination.limit = count / 2;
    }
    try {
      let manga = await Manga.find({author_id: req.params.id})
        .select("title description cover_photo -_id")
        .sort({createdAt: order})
        .skip(
          pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0
        )
        .limit(pagination.limit > 0 ? pagination.limit : 0);
      return res.status(200).json({
        success: true,
        data: manga,
      });
    } catch {
      next(err);
    }
  },
};
export default controller;
