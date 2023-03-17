import Manga from "../../models/Manga.js";

const controller = {
  deleteC: async (req, res, next) => {
    try {
      const { id } = req.params;
      let dst = await Manga.deleteOne({ _id: id });
      console.log(dst);
      return res.status(200).json({
        dst,
      });
    } catch (error) {
      next(error);
    }
  },
};

export default controller;
