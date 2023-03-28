import Chapter from "../../models/Chapter.js";

const controller = {
  destroy: async (req, res, next) => {
    try {
<<<<<<< HEAD
      let dst = await Chapter.deleteOne({_id: req.body._id});
=======
      let dst = await Chapter.deleteOne({_id: req.params.id});
>>>>>>> d61d0c9dac88ca38ab9c9e764d1514b2fdd05431
      console.log(dst);
      return res.status(200).send(dst);
    } catch (error) {
      next(error);
    }
  },
};

export default controller;
