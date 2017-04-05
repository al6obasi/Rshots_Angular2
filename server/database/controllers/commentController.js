var Comment = require('../models/commentModel.js');
var User = require ('../models/userModel.js');
module.exports = {
	insertComment : function (req,res) {
	    var username = '';
	    var userImage ;
		    var date = new Date().toUTCString();
		User.find({user_id:req.body.userId},function(err,data){
			if (err) {
				res.json(err);
			}
		}).then(function(data){
		this.username = data[0].userName;
		this.userImage = data[0].picture;
		var userId = req.body.userId ;
		var imgId = req.body.imgId ;
		var text = req.body.text ;
		 Comment.create ({
		 	username:this.username,
		 	userImage:this.userImage,
			userId :userId ,
			imgId :imgId ,
			text :text ,
			date:date
		},function (err,result) {
			if (err) {
				throw err ;
			}
			else{
				console.log(result);
				console.log("insert successfuly");
				res.json(result);
			}
		})

		})
	},
	getCommentsById : function (req , res) {
		console.log(req.params)
		 Comment.find({imgId:req.params.advId},function(err,data){
   		   if(err){
        	res.json(err)
      	   }else{
      	   	console.log('retrived successfuly !',data)
        	res.json(data)
      	   }
    	})
	},
	editComment: function (req,res) {
	   Comment.update({_id:req.body._id},{text:req.body.text},function(err,data){
      		if(err){
        		res.json(err)
      		}
      		else{
      			console.log('edit successfuly !')
        		res.json(data)
      		}
  	  })
	},
	removeCommentById: function (req,res) {
		console.log(req.params)
       Comment.remove({_id:req.params._id},function(err,data){
          if(err){
           res.json(err)
          }
          else{
          	console.log('done !!!')
            res.json(data)
          }
       })
	} 
}