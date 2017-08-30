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

router.get('/:id', (req, res) => {
  console.log(req.params.id)
  User.findById(req.params.id, (err, doc) => {
    console.log(doc);
    console.log(err);
    res.json(doc);
  })
});

module.exports = router;
