import Manga from "../../models/Manga.js";

const controller = {

  all: async (req, res, next) => {
  const result = {}

  let pagination = {
    page: 1,
    limit: 6
  }

  if (req.query.title) {
    result.title = new RegExp(req.query.title.trim(), 'i')
  }

  if (req.query.category) {
    pagination.page = req.query.page
  }

  if (req.query.quantity) {
    pagination.limit = req.query.quantity
  }
    try {
      let all = await Manga.find(result)
      .select('title category -_id')
      .sort({title: 1, })
      .skip (pagination.page > 0 ? (pagination.page-1)* pagination.limit : 0)
      .limit ( pagination.limit > 0 ? pagination.limit : 0)
      return res.status(200).json({ mangas: all });
    } catch (err) {
      next(err);
    }
  },
};

export default controller;
