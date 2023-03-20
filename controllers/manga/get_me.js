import manga from "../../models/Manga.js";
import User from '../../models/User.js'

const controller = {
  get_me: async (req, res) => {
    try {
      const {author_id} = req.body
      const mangas = await manga.find({author_id});
      res.json(mangas);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Ocurrió un error");
    }
  },
};

export default controller;
