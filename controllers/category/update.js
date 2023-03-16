import Category from "../../models/Category.js";

const controller = {
  update: async (req, res, next) => {
    try {
      let { id } = req.params;
      let upd = await Category.updateOne(
        { _id: id }, //Objeto de búsqueda
        req.body //Objeto con las propiedades a modificar
      );

      console.log(upd)
      return res.status(200).send(upd)
    } catch (error) {
      next(error);
    }
  },
};


export default controller