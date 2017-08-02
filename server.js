const express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var index = require('./routes/index');
var login = require('./routes/login');

//view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/',index);
app.use('/login',login);

app.listen(3000);