import manga from '../../models/Manga.js'

const controller = {
    get_one: async (req, res) => {
        let one = await manga.findOne({_id:req.params.id}).select("title description -_id")
        if(one){
            return res
            .status(200)
            .json({ category: one })
        }else{
            return res.status(400).json({
                success: false,
                message: "This manga dont exist already!",
        });
        }
    }
}
export default controller

