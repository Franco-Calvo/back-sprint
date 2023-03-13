import Author from "../../models/Author.js";

const controller = {
  get_one: async (req, res) => {
    let author = await Author.findOne({_id: req.params.id}).select(
      "name city country photo -_id"
    );
    if (author) {
      return res.status(200).json({
        success: true,
        data: author,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "This author dont exist already!",
      });
    }
  },
};
export default controller;
