const { getAllUsers,
    getUsersById,
    searchUsersByQuery } = require("../controllers/users.controllers")

const router = require("express").Router();

router.get("/search", searchUsersByQuery);
router.get("/", getAllUsers);
router.get("/:uuid", getUsersById);

module.exports = router;