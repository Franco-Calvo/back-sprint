/* import Company from "../../models/Company.js";
import createError from "http-errors"

const controller = {
    update: async(req,res,next) => {
        try{
            let company = await Company.findOneAndUpdate({ user_id: req.user }, req.body, { new: true })
            .select("name website logo ")
           
            if(company){
                return res.status(200).json({
                    success: true,
                    company
                })
            }
            return next ( createError(404, "no es company" ))
        }catch(error){
            return res.status(500).json({
                success: false,
                message: "Server error"
            })
        }
    }
}


export default controller */
