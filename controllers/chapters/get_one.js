import Chapter from "../../models/Chapter.js";

const controller = {
    get_one: async (req, res, next) => {
        try {
            const one = await Chapter.findOne({ _id: req.params.id }).select("title order pages _id");
            console.log(one)
            if (one) {
                return res.status(200).json({ chapter: one });
            } else {
                return res.status(400).json({
                    success: false,
                    message: 'This chapter does not exist'
                });
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json({
                success: false,
                message: 'Internal server error'
            });

        }
    }
};

export default controller;

