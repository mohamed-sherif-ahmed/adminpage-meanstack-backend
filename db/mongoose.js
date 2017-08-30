const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://adminproject:agileadmin@ds153853.mlab.com:53853/agiledatabase');

module.exports = {mongoose};
