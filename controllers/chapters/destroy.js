import Chapter from "../../models/Chapter.js";

const controller = {
  destroy: async (req, res, next) => {
    try {
      let dst = await Chapter.deleteOne({_id: req.params.id});
      console.log(dst);
      return res.status(200).send(dst);
    } catch (error) {
      next(error);
    }
  },
};

export default controller;
