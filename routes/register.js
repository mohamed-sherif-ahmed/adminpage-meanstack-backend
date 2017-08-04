const express = require('express');

var mongoose = require('./../db/mongoose');
var {User} = require('./../models/user');

var router = express.Router();

router.get('/', (req, res) => {
  var newUser = new User({
    username: "moh",
    password: "123",
    name: "mohaa",
    address: "1dsddf"
  });

  newUser.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    console.log(e);
  });
});

module.exports = router;
