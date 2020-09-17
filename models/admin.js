const mongoose = require('mongoose');

// SCHEMA
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

// MODEL
const User = new mongoose.model('User', userSchema);

module.exports = User;