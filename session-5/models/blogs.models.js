const mongoose = require("mongoose");


const blogSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    author: { type: [String] },
    content: { type: String, default: "" },
    publishedAt: { type: Date, default: null },
},
    { timestamps: true } //will add createdAt and updatedAt timestamps
);


const blogModel = mongoose.model("Blogs", blogSchema, 'WebsiteBlogs');

module.exports = blogModel;