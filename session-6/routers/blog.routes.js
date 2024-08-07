const router = require("express").Router();

const { createNewBlog, getAllBlogs, deleteBlogWithId, updateBlogsWithId } = require("../controllers/blogs.controller");

router.post("/new", createNewBlog);
router.get("/", getAllBlogs)
router.delete("/:id", deleteBlogWithId);
router.patch("/:id", updateBlogsWithId);

module.exports = router;