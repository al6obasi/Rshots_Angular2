import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  moduleId:module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	profile:any;
  userId:any;
	constructor (private auth:AuthService ){
	this.profile =JSON.parse(localStorage.getItem('profile'));
  this.userId = this.profile.clientID;
	console.log(this.userId)
  }
  ngOnInit() {

  }

}








