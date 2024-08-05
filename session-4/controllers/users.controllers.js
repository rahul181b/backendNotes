const { data } = require("../users.json");
const querySchema = require("../validator/users.validator")
const getAllUsers = (req, res) => {
    res.json(data);
}
const getQueryErrors = (data) => {
    const result = querySchema.validate(data);
    return result.error;
}
const getUsersById = (req, res) => {
    console.log("path params fun called ")
    const { uuid } = req.params;
    const result = data.find((item) => {
        return item.login.uuid === uuid
    })
    res.json(result);
}

const searchUsersByQuery = (req, res) => {
    console.log("query fun called")

    const { gender } = req.query;
    const { age } = req.query;
    const error = getQueryErrors({ gender, age })

    if (error) {
        return res.status(422).json(error)
    }

    if (gender && age) {
        const results = data.filter(
            (item) => item.gender === gender && Number(item.dob.age) >= Number(age)
        );
        res.json(results)
    }
    // use joi for validations npm i joi
    else if (gender) {
        if (!["male", "female"].includes(gender)) {
            return res.status(422).json({ "message": "Gender to search can either be 'male' or 'female'" });
        }
        const result = data.filter((item) => item.gender === gender)
        res.json(result);
    }
    else if (age) {
        if (!Number(age)) {
            return res.status(422).json({ message: "Age parameter should be a number" });
        }
        if (age >= 100 || age <= 0) {
            return res.status(422).json({ "message": "Age out of bounds. It should be a number between 0 and 100" })
        }
        const result = data.filter((item) => Number(item.dob.age) === Number(age));
        res.json(result);
    }
    else if (!age && !gender) {
        return res.status(422).json({
            message: "Missing Search Parameters, search using age and/or gender",
        });
    }

}
module.exports = {
    getAllUsers,
    getUsersById,
    searchUsersByQuery
}
