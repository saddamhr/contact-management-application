const mongoose = require('mongoose');
const valid = require('validator');
const Schema = mongoose.Schema;

const testAdminSchema = new Schema({
    testUserName: String,
    testAdminPassword: String
}) 

const TestAdmin = mongoose.model('TestAdmin', testAdminSchema);
module.exports = TestAdmin;