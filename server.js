const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const login = require('./routes/login');

var app = express();
var router = express.Router();
mongoose.connect('mongodb://localhost:27017/Adminpage');

app.use(express.static(path.join(__dirname, 'public/ng-adminsystem/dist')));

app.use((req, res, next) => {
	var now = new Date().toString();
	console.log(`Time: ${now} : ${req.method} ${req.url}`);
	next();
});

app.use('/login', login);

app.listen(3000);
