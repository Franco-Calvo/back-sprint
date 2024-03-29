import Joi from "joi-oid";

const schema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    "string.min": "The name must have at least 3 characters",
    "string.max": "The name must have a maximum of 20 characters",
  }),
  email: Joi.string()
    .required()
    .min(8)
    .email({ minDomainSegments: 2 })
    .messages({
      invalid: "Not an object",
    }),
  photo: Joi.string()
    .uri()

    .min(8)
    .messages({
      "string.required": "Photo required",
      "string.uri": "Url required"
    }),
  password: Joi.string().min(8).max(50).messages({
    "string.min": "Password must be at least 8 characters",
    "string.max": "The password must have a maximum of 50 characters",
  }),
  is_author: Joi.boolean().messages({
    invalid: "Not a Boolean",
  }),
  is_company: Joi.boolean().messages({
    invalid: "Not a Boolean",
  }),
});

export default schema;
