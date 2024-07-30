const joi = require("joi");

const querySchema = joi.object().keys({
    age: joi.number().integer().min(0).max(100),
    gender: joi.string().valid("male", "female")
})

module.exports = querySchema;