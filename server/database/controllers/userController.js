var users = require('../models/userModel.js');
module.exports = {
	login:function (req , res) {
		users.find({user_id:req.body.user_id},function(err,user){
    	    if(!user.length){
				var userid = req.body.user_id ; 
			    var date= new Date().toUTCString().substr(0,16);
		        users.create({
			      userDate:date,
			      user_id:userid
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
