const express = require('express');

var mongoose = require('./../db/mongoose');
var {News} = require('./../models/news');

var router = express.Router();

router.post('/add', (req, res) => {
  var newNews = new News({
    title: req.body.title,
    body: req.body.body
  });
  newNews.save().then((doc) => {
    res.json({"done": true});
  }, (e) => {
    res.json({"done": false});
    console.log(e)
  });
});

module.exports = router;
