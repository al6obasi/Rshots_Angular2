var mongoose = require('mongoose');

var image = new mongoose.Schema({
    img_date:String,
    img_data:String,
    img_uid:{
    	type: String,
       	   ref: 'users'
       	}
});
var img = mongoose.model('image',image)
module.exports = img;
