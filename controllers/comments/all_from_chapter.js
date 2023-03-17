import Comment from "../../models/Comment.js";



const controller = {

    all_from_chapter: async (req, res, next) => {
        try {
            let comments = await Comment.find({ chapter_id: req.query.chapter_id }).select('text user_id').populate('user_id', 'name photo')
            if (comments) {
                return res.status(200).json({
                    success: true,
                    comments
                })
            }



        } catch (error) {
            next(error)
        }
    }
}

export default controller


