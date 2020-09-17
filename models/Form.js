const mongoose = require('mongoose');


// SCHEMA
const form = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    postCode: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    numberOfWindow: {
        type: String
    },
    numberOfExternalDoor: {
        type: String
    },
    homeOwner: {
        type: String
    },
    changingTheWindows: {
        type: String
    }

});

// MODEL
module.exports = User = mongoose.model('form', form);