var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
		username:String,
		userId:{type: String,
       	   ref: 'users'},
   	    userImage:String,
        imgId:{type: mongoose.Schema.Types.ObjectId,
           ref: 'image'},
        text:String,
        date:String
});
module.exports = mongoose.model('Comment', CommentSchema);
