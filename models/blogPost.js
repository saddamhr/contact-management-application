const mongoose = require('mongoose');

// SCHEMA
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body: String,
    blogCategory: String,
    date: {
        type: String,
        default: Date.now()
    }
});



// MODEL
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost;