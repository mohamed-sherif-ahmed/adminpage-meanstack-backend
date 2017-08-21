const mongoose = require('mongoose');
 var News = mongoose.model('News', {
   title: {
     type: String,
     required: true
   },
   body: {
     type: String
   }
 });

 module.exports = {News};

/*
testcase
{
	"title": "News !",
	"body": "dfgfgfgdfsf vf  s d fds fd\ndsfsdfsdf"
}
*/
