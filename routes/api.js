const express = require("express");
const router = express.Router();
const passwordHash = require('password-hash');
// const passwordHash = require('./lib/password-hash');

// IMPORT MODELS
const AddUser = require("../models/addUser");
const FormPost = require("../models/Form");
const User = require("../models/admin");
const TestAdmin = require('../models/TestAdmin');

const route = require("./Form");


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

// POST FORM DATA
router.post("/formModel", (req, res) => {
  console.log("Body: ", req.body);
  const data = req.body;

  const formPost = new FormPost(data);

  formPost.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
      return;
    }
    return res.json({
      msg: "We received your data!!!",
    });
  });
});

// GET FORM DATA
router.get("/formModel", (req, res) => {
  FormPost.find({}).then((data) => {
    console.log("Data: ", data);
    res.json(data);
  });
});


// DELETE BLOG POST
router.route("/delete-student/:id").delete((req, res) => {
  BlogPost.findByIdAndRemove(req.params.id, (error, data) => {
    console.log(req.param.id);
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      });
    }
  });
});

// UPDATE BLOG POST
router.post("/update-student/:id", (req, res) => {
  console.log(req.body);

  BlogPost.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.json(data);
      console.log("Blog updated successfully !");
    }
  });
});

// ADMIN REGISTRATION
router.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({
    email: email,
    password: password,
  });

  newUser.save((err) => {
    err ? console.log(err) : res.send("Successfully create user");
  });
});


// ADMIN LOGIN
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }, (err, foundResults) => {
    if (err) {
      console.log(err);
    } else {
      if (foundResults.password === password) {
        res.redirect("/api/login");
      } else {
        res.send("Incorrect Email Or Password");
      }
    }
  });
});


// TEST ADMIN LOGIN
router.post('/test-login', (req, res, next) => {

  let testUserName = req.body.testUserName;
  let testAdminPassword = req.body.testAdminPassword;

  TestAdmin.findOne({ testUserName }, (err, foundResults) => {
    if (err) {
      console.log(err);
    } else {
      if (passwordHash.verify(testAdminPassword, foundResults.password)) {
        res.send("Successful!!!");
        // res.redirect("/api/login");
      } else {
        res.send("Incorrect Email Or Password");
      }
    }
  });
  
})

// TEST ADMIN REGISTER
// router.post('/test-register', (req, res, next) => {
//   bcrypt.hash(req.body.testAdminPassword, 10, (err, hash) => {
//     if (err) {
//       res.json({
//         error: err
//       })

//       let admin = new TestAdmin({
//         testUserName: req.body.testUserName,
//         testAdminPassword: hash
//       })

//       admin.save((error) => {
//         if (error) {
//           res.status(500).json({ msg: "Sorry, internal server errors" });
//           return;
//         }
//         return res.json({
//           msg: "We received your data!!!",
//         });
//       });
//     }
//   })
// })

router.post("/test-register", (req, res) => {
  console.log("Body: ", req.body);

  const hashedPassword = passwordHash.generate(req.body.testAdminPassword);

  const testAdmin = new TestAdmin({
    testUserName: req.body.testUserName,
    testAdminPassword: hashedPassword
  });

  testAdmin.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
      return;
    }
    return res.json({
      msg: "We received your data!!!",
    });
  });
});


// ADMIN LOGOUT
router.post("/logout", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }, (err, foundResults) => {
    if (err) {
      console.log(err);
    } else {
      if (foundResults.password === password) {
        res.redirect("/api/login");
      } else {
        res.send("Incorrect Email Or Password");
      }
    }
  });
});

router.get("/name", (req, res) => {
  const data = {
    username: "Saddam",
    age: 5,
  };
  res.json(data);
});

module.exports = router;
