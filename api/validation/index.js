const Joi = require("joi");

export const userValidate = Joi.object({
  firstname: Joi.string().alphanum().min(3).max(30).required(),
  lastname: Joi.string().alphanum().min(3).max(30).required(),
  phone: Joi.string()
    .min(9)
    .max(11)
    .pattern(/^[0-9]+$/)
    .required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  password2: Joi.ref("password"),
  access_token: [Joi.string(), Joi.number()],
});
