import Joi from "joi-oid";

const schema = Joi.object({
  name: Joi.string().required().messages({
    'string.min': "El nombre debe tener al menos 3 caracteres",
    'string.max': "El nombre debe tener como máximo 20 caracteres"
  }),
  mail: Joi.string()
    .required()
    .min(8)
    .email({ minDomainSegments: 2 })
    .messages({
      invalid: "No es un object",
    }),
  password: Joi.string().required().min(8).max(50),
  photo: Joi.string().required().uri().min(8),
});

export default schema;
