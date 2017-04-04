var mongoose = require('mongoose');

var users = new mongoose.Schema({
	userName:String,
	picture:String,
    userDate:String,
    user_id:String
});
var user = mongoose.model('users',users)
module.exports = user;
