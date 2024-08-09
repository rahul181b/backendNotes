const mongoose = require("mongoose");
const validator = require("validator")
//nested schema 
const authorSchema = new mongoose.Schema(
    {
        fullName: { type: String, maxlength: 25 },
        twitterHandle: { type: String },
        email: {
            type: String,
            required: true,
            maxlength: 50,
            validate: (value) => validator.isEmail(value), //returns boolean value
        },
        image: { type: String },
    },
    { _id: false }
);

// to not to generate id for author schema


const blogSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    author: [authorSchema],
    content: { type: String, default: "" },
    publishedAt: { type: Date, default: null },
},
    { timestamps: true } //will add createdAt and updatedAt timestamps
);


const blogModel = mongoose.model("Blogs", blogSchema, 'WebsiteBlogs');

module.exports = blogModel;