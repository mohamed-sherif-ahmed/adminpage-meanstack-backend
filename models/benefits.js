const mongoose = require('mongoose');
 var Benefits = mongoose.model('Benefits', {
   name: {
     type: String,
     required: true
   },
   address: {
     type: String,
   },
   zone: {
     type: String,
   },
   phone: {
     type: String
   }
  //  location: {
  //    type: {
  //      type: String,
  //    },
  //    coordinates: [Number],
  //  }
 });

 module.exports = {Benefits};
/*
testcase:
{
	"name": "moha",
	"address": "123",
	"zone": "NC",
	"phone": "0101001111"
}
*/
