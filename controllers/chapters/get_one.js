import Chapter from "../../models/Chapter.js";

const getController = {
    get_one: async (req, res) => {
        try {
            const one = await Chapter.findOne({ _id: req.params.id }).select("pages _id").sort({ pageNumber: 1 });
            if (one) {
                return res.status(200).json({ Chapter: one })
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
}
export default getController;


