import manga from "../../models/Manga.js";

const controller = {
  get_one: async (req, res) => {
<<<<<<< HEAD
    let one = await manga
      .findOne({ _id: req.params.id })
      .select("title description -_id");
    if (one) {
      return res.status(200).json({ manga: one });
    } else {
      return res.status(400).json({
        success: false,
        message: "This manga dont exist already!",
      })
=======
    try {
      let one = await manga.findOne({ _id: req.params.id })
          .select("title cover_photo description author_id category _id")
          .populate("category_id","name -_id")
          .populate("author_id", "name _id")
        if (one) {
          return res.status(200).json({ manga: one });
        } else {
          return res.status(400).json({
            success: false,
            message: "This manga dont exist already!",
          });
        }
    }
    catch (error) {
      next(error)
>>>>>>> 8370e096aff322688447ab75bd7e1ee2cf6939b5
    }
  },
}
export default controller;


