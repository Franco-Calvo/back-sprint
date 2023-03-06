import Joi from "joi"

const schema = Joi.object({
    title: Joi
        .string()
        .required()
        .min(4)
        .max(30)
        .messages({
            'string.min': 'the title must be at least 4 characteres',
            'string.max': 'the title must not have more than 30 characters',
            'string.required': 'the title is required',
        }),
    order: Joi
        .number(),
    pages: Joi
        .string().uri()
        .required()
        .min(1)
        .messages({
            'any.required': 'the pages have to be url',
            'string.empty': 'the pages cannot be empty'
        }),

    manga_id: Joi
        .string()
        .required(),
})

export default schema