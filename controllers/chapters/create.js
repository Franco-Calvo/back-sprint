import Chapter from "../../models/Chapter.js"

const controller = {
    create: async (req, res) => {
        try {
            let chapter = await Chapter.create(req.body)
            return res.status(201).json({
                success: true,
                message: 'Chapter created successfully ',
                chapter: chapter
            })
        }
        catch (err) {
            console.log(err)
            return res.status(400).send('Could not create chapter')

        }
    }
}

export default controller
