const Blogs = require("../models/blogs.models");
class BlogService {
    findAll = async () => {
        const blogs = await Blogs.find({})
        console.log("findallBlogs")
        return blogs;
    }


    save = async (doc) => {
        const result = await doc.save();
        return result;
    }
    create = async (body) => {
        const newblog = new Blogs(body)
        const newDoc = this.save(newblog);
        return newDoc;
    }
}

module.exports = BlogService
