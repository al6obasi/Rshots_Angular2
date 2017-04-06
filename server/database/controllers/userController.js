var users = require('../models/userModel.js');
module.exports = {
	login:function (req , res) {
		console.log(req.body)
		users.find({user_id:req.body.user_id},function(err,user){
    	    if(!user.length){
				var userid = req.body.user_id ; 
				var pic = req.body.picture;
				var name = req.body.userName;
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
	  		  		console.log('added your account to our database succesfully !')
			         res.json('added your account to our database succesfully !')
			       }
		       })
  		    }else{
  		  		console.log('You have an account in our database')
	            res.json('You have an account in our database')
  		   }
    	})
	}
}