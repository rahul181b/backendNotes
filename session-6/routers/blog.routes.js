const router = require("express").Router();

const { createNewBlog, getAllBlogs, deleteBlogWithId, updateBlogsWithId, searchBlogs } = require("../controllers/blogs.controller");

router.post("/new", createNewBlog);
router.get("/", getAllBlogs)
router.delete("/:id", deleteBlogWithId);
router.patch("/:id", updateBlogsWithId);
router.get("/search", searchBlogs)

module.exports = router;