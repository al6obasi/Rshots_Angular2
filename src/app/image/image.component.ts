import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  // property we used it in advertisment componenet 

  image:any;
  comments:any;
  comId:any;
  private url;
  id :any;
  com:any;
  val:any;
  toggle:any = false;
  text:any;
  userId:any;
  inserted:any;
  deletedDone:any;
  dump :any;
  AvgRating:any;
  profile:any;

   //  constructor 

 constructor(private user:UserService , private route:ActivatedRoute) {

  // retrive the information for the image
		  this.url = this.route.params.subscribe( params => {
			   this.id = params['id'];
    		   console.log(this.id);
		})
  		this.user.getImagesByUserId(this.id).subscribe( ok=>{
    			 	this.image = ok;
      })
          // retrive all comment(s) for this advertisment order by most recent  .
      this.user.getCommById(this.id).subscribe( data =>{
          this.comments = data.reverse() ;
        	if (!data.length) {
        		return ;
        	}
        	else{
        		
          this.comId = data[0]._id;
        	}
       //   console.log(data)
      })
      // retrive the average rating for this advertisment 
     //  this.user.getAllRatingByAdID(this.id).subscribe( data =>{
     //      if (typeof(data) === 'string') {
     //      this.AvgRating =  0 ;
     //      }
     //      else{
     //          this.AvgRating = Math.floor(data) ;
     //       //   console.log(data);
     //      }
     // })
   }

  // ******** Comment functions ********* 
   
  commentAuth(id){
    this.profile = JSON.parse( localStorage.getItem('profile') );
    this.userId = this.profile.clientID;
   	return ( id == this.userId ) 
   }

  editComment(id){
  	this.comId = id;
   	this.toggle = !this.toggle ;
   }

  anotherSubmit(){
   	let updateCom = {
   		_id:this.comId,
   		text:this.text
   	}
   	this.user.editComm(updateCom).subscribe(Done =>{
   		this.dump = Done ;
   	})
    this.com ='';
    this.text ='';
    this.refreshCom();
   }
  
  insertComment(){
    this.profile = JSON.parse( localStorage.getItem('profile') );
    this.userId = this.profile.clientID;
   
   	let newCom = {
   		userId:this.userId,
   		imgId:this.id,
   		text:this.com
   	}
   	this.user.InsertCom(newCom).subscribe(Done => {
   		this.inserted = Done ;
      this.com ='';
      this.refreshCom();
    })
  }
  
  deleteComment(id){
   	this.user.delComm(id).subscribe(deleted =>{
   		this.deletedDone = deleted;
   		console.log(this.deletedDone);
   	})
   this.refreshCom();
   }
  
  isAuth(){
   	this.toggle = !this.toggle;
    this.profile = JSON.parse( localStorage.getItem('profile') );
    console.log(this.profile);
    this.userId = this.profile.clientID;
	console.log(this.userId);
	return typeof(this.userId) === 'string'; 
   }
  
  refreshCom(){
	   this.user.getCommById(this.id).subscribe(data =>{
	    	 this.comments = data.reverse() ;
     		 console.log(data)
	   })
  }
  ngOnInit() {


  }
  ngOnChanges() {
      this.refreshCom();
//      this.retriveRating();
  }


}
//

//export class AdvertismentComponent implements OnInit {

  // //  ******** rating functions ********* 
  
  // insertRateAdv(advId,value){
  //  // console.log(advId,value)
  //   this.dump = '';
  //   this.userId =localStorage.getItem('id');
  //   this.userId =JSON.parse(this.userId);
  //   let rate ={
  //     value:Number(value),
  //     postedBy:this.userId,
  //     advertismentId:advId 
  //   }
  //   this.user.insertRate(rate).subscribe( Done =>{
  //     this.dump = Done ;
  //   })
  //   this.val = 0;
  //   this.retriveRating();
  // }

  // retriveRating(){
  //   //console.log(this.id);
  //   this.user.getAllRatingByAdID(this.id).subscribe( Done =>{
  //       this.AvgRating= Done ;
  //   })
  //   // console.log(this.AvgRating);
  // }

  // refreshRating(){
  //         this.user.getAllRatingByAdID(this.id).subscribe( data =>{
  //             if (typeof(data) === 'string') {
  //             this.AvgRating =  0 ;
  //             }
  //             else{
  //               this.AvgRating = data ;
  //               console.log(data);
  //            }
  //       })
  // }

//}

