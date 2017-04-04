var mongo = require('mongoose');

var users = new mongo.Schema({
    userDate:String,
    user_id:String
});
var user = mongo.model('users',users)
module.exports = user;
