import Author from "../../models/Author.js";
import createError from "http-errors"

const controller = {
    get_me: async (req, res) => {
        try {
            const author = req.author;
            let me = await Author.findOne({ author })
                .select("name last_name city country date photo ")
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


