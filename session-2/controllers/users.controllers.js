const { data } = require("../users.json");

const getAllUsers = (req, res) => {
    res.json(data);
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
    if (gender && age) {
        const results = data.filter(
            (item) => item.gender === gender && Number(item.dob.age) >= Number(age)
        );
        res.json(results)
    }
    else if (gender) {
        const result = data.filter((item) => item.gender === gender)
        res.json(result);
    }
    else if (age) {
        const result = data.filter((item) => Number(item.dob.age) === Number(age));
        res.json(result);
    }
    else {
        res.sendStatus(404);
    }
}
module.exports = {
    getAllUsers,
    getUsersById,
    searchUsersByQuery
}
