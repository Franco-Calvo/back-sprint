import Author from "../../models/Author.js";
import createError from "http-errors"

const controller = {//inf prfl auth ok
    get_me: async (req, res) => {
        try {
<<<<<<< HEAD
            let me = await Author.findOne({ user_id:req.user })//aca busca el usuario que esta registrado
=======
            let me = await Author.findOne({ user_id:req.user })
>>>>>>> af0580ae9ac8b0f1f14421b2f6123465170f9d43
                .select("name city country date photo ")
               
            if (me) {
                return res.status(200).json({
                    success: true,
                    me,
                });
            }
            return next(createError(404, "Author not found"))
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: "Server error",
            });
        }
    },
};

export default controller


