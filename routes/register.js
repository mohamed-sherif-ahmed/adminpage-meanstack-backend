const express = require('express');

var mongoose = require('./../db/mongoose');
var {User} = require('./../models/user');

var router = express.Router();

router.post('/', (req, res) => {
  var newUser = new User({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    address: req.body.address
  });

  newUser.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.send()
    console.log(e);
  });
});

module.exports = router;
