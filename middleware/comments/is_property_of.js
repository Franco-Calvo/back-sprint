import Comment from "../../models/Comment.js";

const is_propery_of = async (req, res, next) => {
    try {
        const comment = await Comment.findOne({ _id: req.params.id, user_id: req.user._id })
        console.log(comment)
        if (comment) {
            return next()
        } else {
            return res.status(404).json({ message: 'Comment is propery of' });
        }

    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });

    }
};

export default is_propery_of