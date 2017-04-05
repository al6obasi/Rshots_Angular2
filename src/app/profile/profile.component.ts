import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {UserService} from '../user.service';

@Component({
  moduleId:module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	profile:any;
  userId:any;
  images:any;
	constructor (private auth:AuthService , private img: UserService ){
      if (localStorage.getItem('profile') !== undefined) {
        console.log('yeaa')
          this.profile = JSON.parse( localStorage.getItem('profile') );
          console.log(this.profile);
          this.userId = this.profile.user_id;
        	console.log(this.userId);
          this.img.getImagesByUserId(this.userId).subscribe( result =>{
                this.images =  result.reverse() ;
                console.log(this.images);
              })
      this.sendInfo();
      }
  }
  ngOnInit() {

  }
  remove(id){
    this.img.remove(id).subscribe( result =>{
      console.log(id)
      console.log(result);
      })
    this.refresh();
  }
  refresh(){
    this.img.getImagesByUserId(this.userId).subscribe( result =>{
        this.images =  result.reverse() ;
        console.log(this.images);
    })
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








