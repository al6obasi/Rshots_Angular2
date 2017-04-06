import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  // property we used it in image componenet 

  images:any;
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
  profile:any;

   //  constructor 

 constructor(private user:UserService , private route:ActivatedRoute) {
  // get the img _ id from params 

      this.url = this.route.params.subscribe( params => {
         this.id = params['id'];
           console.log(this.id);
    });
  // retrive the information for the images
  		this.user.getImgById(this.id).subscribe( ok=>{
        console.log(ok)
    			 	this.images = ok;
      })
          // retrive all comment(s) for this image order by most recent  .
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
     
   }

  // ******** Comment functions ********* 
   
  commentAuth(id){
    this.profile = JSON.parse( localStorage.getItem('profile') );
    this.userId = this.profile.user_id;
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
      this.refreshCom();
    })
    this.com ='';
    this.text ='';
   }
  
  insertComment(){
    this.profile = JSON.parse( localStorage.getItem('profile') );
    this.userId = this.profile.user_id;
   
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
      this.refreshCom();
    })
   }
  
  isAuth(){
   	this.toggle = !this.toggle;
    this.profile = JSON.parse( localStorage.getItem('profile') );
    this.userId = this.profile.user_id;
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
  }


}


