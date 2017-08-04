const mongoose = require('mongoose');
 var User = mongoose.model('User', {
   name: {
     type: String,
     required: true
   },
   username: {
     type: String,
     required: true
   },
   password: {
     type: String,
     required: true
   },
   address: {
     type: String
   }
 });

 module.exports = {Todo};
