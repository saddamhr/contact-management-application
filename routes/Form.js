const express = require('express');
const mongoose = require('mongoose');
const Form = require('../models/Form');
const route = express.Router();

// const URI = "mongodb+srv://dbUser:dbUser@cluster0.r5usd.mongodb.net/test?retryWrites=true&w=majority";

route.post('/', async (req, res) => {
    const { name, email, postCode, phoneNumber, numberOfWindow, numberOfExternalDoor, homeOwner, changingTheWindows } = req.body;
    let formData = {};
    formData.name = name;
    formData.email = email;
    formData.postCode = postCode;
    formData.phoneNumber = phoneNumber;
    formData.numberOfWindow = numberOfWindow;
    formData.numberOfExternalDoor = numberOfExternalDoor;
    formData.homeOwner = homeOwner;
    formData.changingTheWindows = changingTheWindows;
    let formModel = new Form(formData);
    await formModel.save();
    res.json(formModel);
})

// route.get('/api/getForm', async (req, res) => {
//     client = new MongoClient(URI, { useNewUrlParser: true });
//     client.connect(err => {
//         const collection = await client.db("test").collection("forms");
//         collection.find().toArray((err, documents) => {
//             if (err) {
//                 console.log(err)
//                 res.status(500).send({ message: err });
//             }
//             else {
//                 res.send(documents);
//             }
//         });
//         client.close();
//     });
// });

module.exports = route;