import Chapter from "../../models/Chapter.js";

const controller = {
  update: async (req, res) => {
    try {
      let update = await Chapter.findOneAndUpdate(
        {_id: req.body._id},
        req.body,
        {new: true}
      );
      if (update) {
        return res.status(200).json({
          succes: true,
          data: update,
          message: "Successfully modified chapter",
        });
      } else {
        return res.status(404).json({
          succes: false,
          message: "Chapter not found",
        });
      }
    } catch (error) {
      return res.status(400).json({
        succes: false,
        message: error.message,
      });
    }
  },
};

export default controller;
