const express = require('express');

var mongoose = require('./../db/mongoose');
var {User} = require('./../models/user');

var router = express.Router();

router.post('/', (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  User.find({
    username: username,
    password: password
  }).then((doc) => {
    if (doc.length === 0) {
      res.json({found: false});
    }else {
      res.json({found: true});
    }
  }, (e) => {
    console.log(e);
  })
});

module.exports = router;
