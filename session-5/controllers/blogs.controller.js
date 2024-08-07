const Blogs = require("../models/blogs.models");

const createNewBlog = async (req, res) => {
    //To parse the Body object sent with the request we would need a middleware that comes with express app.use(express.json());
    console.log(req.body)
    const { title } = req.body
    const newBlogDoc = new Blogs({ title });
    const result = await newBlogDoc.save();
    res.json(result);


}

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blogs.find({})
        res.json(blogs);
    } catch (error) {
        res.status(402).json({ message: "could not fetch the blog from db ", error })
    }
}

const deleteBlogWithId = async (req, res) => {
    try {
        const { id } = req.params
        console.log("id is :--", id)
        const result = await Blogs.findOneAndDelete({ _id: id });
        res.json(result)

    } catch (error) {
        res.status(500).json({ message: "couldn't delete blog post ", error })
        console.log(error)
    }


}

const updateBlogsWithId = async (req, res) => {
    try {
        const { id } = req.params;
        const filter = { _id: id };// condition to find document
        const update = req.body;// updates to be performed
        //new: true -> returns the updated document
        const result = await Blogs.findByIdAndUpdate(filter, update, { new: true });
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "failed to update the blog", error });
        console.log(error);
    }
}

module.exports = { createNewBlog, getAllBlogs, deleteBlogWithId, updateBlogsWithId };