var users = require('../models/userModel.js');
module.exports = {
	login:function (req , res) {
		console.log(req.body)
		users.find({user_id:req.body.clientID},function(err,user){
    	    if(!user.length){
				var userid = req.body.clientID ; 
				var pic = req.body.picture;
				var name = req.body.name;
			    var date= new Date().toUTCString().substr(0,16);
		        users.create({
			      userDate:date,
			      user_id:userid,
			      userName:name,
			      picture:pic
		        },function(err,ok){
			       if(err){
			          res.json(err);
			        }       
			       else{
			         res.json('added your account to our database succesfully !')
			       }
		       })
  		  }else{
	           res.json('You have an account in our database')
  		  }
    	})
	}
}
