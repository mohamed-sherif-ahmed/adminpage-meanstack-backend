const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

//database config
const {mongoose} = require('./db/mongoose');

//database models
const {user} = require('./models/user');

//routes
const login = require('./routes/login');

var app = express();
var router = express.Router();

app.use(express.static(path.join(__dirname, 'public/ng-adminsystem/dist')));

app.use((req, res, next) => {
	var now = new Date().toString();
	console.log(`Time: ${now} : ${req.method} ${req.url}`);
	next();
});

app.use('/login', login);

app.listen(3000);
