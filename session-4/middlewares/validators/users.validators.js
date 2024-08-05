

const joi = require("joi");

const querySchema = joi.object().keys({
    age: joi.number().integer().min(0).max(100),
    gender: joi.string().valid("male", "female")
})


const validateSearchQuery = (req, res, next) => {
    const { gender } = req.query;
    const { age } = req.query;

    const { error } = querySchema.validate({ gender, age });
    if (error) {
        return res.status(403).json(error);
    }
    next();
}

module.exports = { validateSearchQuery };