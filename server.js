const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//database config
const {mongoose} = require('./db/mongoose');

//database models
const {user} = require('./models/user');

//routes
const login = require('./routes/login');

var app = express();
var router = express.Router();

//middleware
app.use(express.static(path.join(__dirname, 'public/ng-adminsystem/dist')));
app.use(bodyParser.json());
app.use((req, res, next) => {
	var now = new Date().toString();
	console.log(`Time: ${now} : ${req.method} ${req.url}`);
	next();
});

//apis
app.use('/login', login);

app.listen(3000);
