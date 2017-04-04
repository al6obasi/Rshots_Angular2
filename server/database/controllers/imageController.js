var image = require('../models/imageModel.js');
var User = require ('../models/userModel');
module.exports = {
  
  addImage:function(req,res){
    User.find({user_id:req.body.img_uid},function(err,data){
        if (err) {
        res.json(err);
        }
   }).then(function(data){
      this.username = data[0].userName;
      this.userImage = data[0].picture;
      var img = req.body.img_data;
      var Uid = (req.body.img_uid);
      var date = new Date().toUTCString();
      image.create({
        img_date:date,
        img_uid:Uid,
        img_data:img,
        userPic:this.userImage,
        userName:this.username
      },function(err,ok){
         if(err){
            res.json(err);
          }       
        else{
          res.json("Your Image has been uploaded succesfully ! ")
        }
      })
   })
  },
  getall:function(req,res){
    image.find({},function(err,img){
      if(err){
        res.json(err)
      }else{
        res.json(img)
      }

    })
  },
  getAllById:function(req,res){
    console.log(req.params)
    var userId = (req.params.id);
     image.find({img_uid:userId},function(err,data){
        if (err) {
          throw err
        }
        res.json(data)
       })
  },
  getImgById:function (req,res) {
       image.find({_id:req.params.id},function (err,data){
         if (!data.length || data === undefined ) {
           res.json('no data for this image ')

         }else{
          console.log(data)
           res.json (data)
         }
       })  
  },
  removeImgeById:function (req , res){
    image.remove({_id:req.params.id},function (err , data){
        if (!err) {
          res.json(data);
        }
    })
  }
};