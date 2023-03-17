import Author from "../../models/Author.js";

const controller = {
  create: async (req, res) => {
    try {
      req.body.user_id = req.user._id;
      let author = await Author.create(req.body);
      return res.status(201).json({
        succes: true,
        data: author,
        message: "Author created successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        succes: false,
        message: error.message,
      });
    }
  },
};

export default controller;
