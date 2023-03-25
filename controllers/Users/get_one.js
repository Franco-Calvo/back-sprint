import User from "../../models/User.js";

const controller = {
  get_one: async (req, res) => {
    try {
      let users = await User.findOne({_id: req.params.id}).select(
        "name city country createdAt photo is_author is_acompany -_id"
      );
      if (users) {
        return res.status(200).json({
          success: true,
          data: users,
        });
      } else {
        return res.status(404).json({
          success: false,
          data: users,
          message: "This user dont exist already!",
        });
      }
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
};
export default controller;
