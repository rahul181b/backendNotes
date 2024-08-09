const Blogs = require("../models/blogs.models");
const BlogService = require("../services/blogs.service.js")

const BlogServiceInstance = new BlogService();
const createNewBlog = async (req, res) => {
    //To parse the Body object sent with the request we would need a middleware that comes with express app.use(express.json());
    try {
        console.log(req.body)

        const body = req.body
        const newBlogDoc = await BlogServiceInstance.create(body);
        //const result = await newBlogDoc.save();
        res.json(newBlogDoc);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }



}

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogServiceInstance.findAll();
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
const searchBlogs = async (req, res) => {
    const findWord = " ([A - Z]) \w+";

    const { title } = req.query;
    const author = req.query.email;
    const id = req.query.id
    console.log(req.query);
    console.log(author)
    console.log(title)
    // const result = await Blogs.find({
    //     $or: [
    //         { title },
    //         { author: { $elemMatch: { email: author } } },
    //     ],
    // });
    const result = await Blogs.findById({ _id: id })
    // const result = await Blogs.find({ title })
    res.json(result);


}

module.exports = { createNewBlog, getAllBlogs, deleteBlogWithId, updateBlogsWithId, searchBlogs };