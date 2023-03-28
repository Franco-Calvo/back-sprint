import Manga from "../../models/Manga.js";

const controller = {
  update: async (req, res, next) => {
    try {
      let { id } = req.params;
      let upd = await Manga.updateOne(
        { _id: id }, // objeto de búsqueda
        req.body // objeto con las propiedades a modificar
      );
      console.log(upd);
      return res.status(200).json({
        success: true,
        message: "Updated!",
        upd,
      });
    } catch (error) {
      next(error);
    }
  },
};

export default controller;
