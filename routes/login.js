const express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var database = mongojs('mongodb://<hisham>:<hisham1>@ds051740.mlab.com:51740/agileproject',['accounts']);
router.get('/login',function (req , res , next) {
    res.send('LOGIN PAGE');
});
module.exports= router ;