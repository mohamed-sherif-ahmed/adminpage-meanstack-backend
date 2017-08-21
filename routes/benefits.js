const express = require('express');

var mongoose = require('./../db/mongoose');
var {Benefits} = require('./../models/benefits');

var router = express.Router();

router.get('/all', (req, res) => {
  Benefits.find({}).then((doc) => {
    res.json(doc)
  }, (e) => {
    console.log(e);
  })
});

router.get('/:id', (req, res) => {
  var id = req.params.id;

  Benefits.findById(id, (err, doc) => {
    console.log(doc);
    res.json(doc);
  });
});

router.post('/add', (req,res) => {
  var newBenefit = new Benefits({
    name: req.body.name,
    address: req.body.address,
    zone: req.body.zone,
    phone: req.body.phone
  });

  newBenefit.save().then((doc) => {
    res.json({"done": true});
  }, (e) => {
    res.json({"done": false});
    console.log(e);
  });
});
module.exports = router;
