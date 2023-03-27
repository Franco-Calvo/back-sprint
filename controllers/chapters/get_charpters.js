import Chapter from "../../models/Chapter.js";

const controller = {
  get_chapter: async (req, res, next) => {
    let chapters = {};
    let pagination = {
      page: 1,
      limit: 4,
    };
    if (req.query.manga_id) {
      chapters.manga_id = req.query.manga_id;
    }
    if (req.query.page) {
      pagination.page = req.query.page;
    }
    try {
      let allChapter = await Chapter.find(chapters);
      let chapter = await Chapter.find(chapters)
        .select("title order pages _id")
        .populate({
          path: "manga_id",
          select: "cover_photo -_id",
        })
        .sort({ order: 1 })
        .skip(
          pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0
        )
        .limit(pagination.limit > 0 ? pagination.limit : 0);
      return res.status(200).json({ chapter: chapter, allChapter: allChapter });
    } catch (error) {
      next(error);
    }
  },
};
export default controller;
