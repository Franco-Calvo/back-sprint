import Joi from "joi-oid";

const schema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    "string.min": "The name must have at least 3 characters",
    "string.max": "The name must have a maximum of 20 characters",
  }),
  last_name: Joi.string().min(3).max(20).messages({
    "string.min": "The last name must have at least 3 characters",
    "string.max": "The last name must have a maximum of 20 characters",
  }),
  city: Joi.string().max(20).messages({
    "string.max": "The city must have a maximum of 20 characters",
  }),
  country: Joi.string().max(20).messages({
    "string.max": "The country must have a maximum of 20 characters",
  }),
  date: Joi.date().less("now").messages({
    invalid: "Not a date",
    "date.less": "The date is greater than the current date",
  }),
  photo: Joi.string().uri().messages({
    invalid: "The photo url is not correct",
  }),
});
export default schema