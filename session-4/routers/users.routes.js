const { getAllUsers,
    getUsersById,
    searchUsersByQuery } = require("../controllers/users.controllers");

const { validateSearchQuery } = require("../middlewares/validators/users.validators");

const router = require("express").Router();

router.get("/search", validateSearchQuery, searchUsersByQuery);
router.get("/", getAllUsers);
router.get("/:uuid", getUsersById);

module.exports = router;