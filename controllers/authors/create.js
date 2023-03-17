import Author from "../../models/Author.js";

const controller = {
  create: async (req, res) => {
    try {
      console.log(req.body.user_id);
      req.body.user_id = req.user._id;
      req.body.active = true;
      let author = await Author.create(req.body);
      return res.json({
        succes: true,
        data: author,
        message: "Author created successfully",
      });
    } catch (error) {
      console.log(error);
      return res.json({
        succes: false,
        error: error,
        message: "Could not create author",
      });
    }
  },
};

export default controller;
