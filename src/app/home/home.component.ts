import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { UserService } from '../user.service';
@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images:any;
  profile:any;	
  constructor( private auth:AuthService , private img:UserService ) {
	  	this.img.retriveAllImage().subscribe( result =>{
        if(!result.length){
          this.images = 'not yet :)';
        }
	  		this.images =  result.reverse() ;
	  		console.log(this.images);
	  	})
      this.sendInfo();
	  }

  ngOnInit() {
  }
    sendInfo(){
      if (localStorage.getItem('profile') !== undefined ) {
        this.profile =JSON.parse(localStorage.getItem('profile'));
        let userData = {
          user_id:this.profile.user_id,
          userName:this.profile.name,
          picture:this.profile.picture
        }
        this.img.login(userData).subscribe( ok => {
            console.log(JSON.parse(ok['_body']));
        })
      }
  }

}
