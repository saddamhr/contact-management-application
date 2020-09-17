const express = require("express");
const router = express.Router();
const passwordHash = require('password-hash');
const AddUser = require("../models/addUser");

// ROUTES

// GET BLOG POST
router.get("/", (req, res) => {
  AddUser.find({}).then((data) => {
    res.json(data);
  });
});

// POST BLOG POST
router.post("/save", (req, res) => {
  console.log("Body: ", req.body);
  const data = req.body;

  const newAddUser = new AddUser(data);

  newAddUser.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
      return;
    }
    return res.json({
      msg: "We received your data!!!",
    });
  });
});

module.exports = router;
