const mongoose = require('mongoose');

// SCHEMA
const Schema = mongoose.Schema;
const AddUserSchema = new Schema({
    name: String,
    district: String,
    phone: String,
    email: String,
    date: {
        type: String,
        default: Date.now()
    }
});



// MODEL
const AddUser = mongoose.model('AddUser', AddUserSchema);

module.exports = AddUser;