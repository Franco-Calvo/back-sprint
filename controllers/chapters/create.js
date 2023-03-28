import Chapter from "../../models/Chapter.js";

const controller = {
    create: async (req, res) => {
        try {

            // req.body.manga_id = '63ffafade652fa554fe009eb';

            let chapter = await Chapter.create(req.body);
            return res.status(201).json({
                success: true,
                response: req.body,
                title: req.body.title,
                // message: "capitulo creado correctamente.",
                // chapter: chapter,
            });

        } catch (error) {
            return res.status(400).json({
                success: false,
                message: 'no se pudo crear el capitulo'
            })
        }
    },
};

export default controller;
