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
  constructor( private auth:AuthService , private img:UserService ) {
	  	this.img.retriveAllImage().subscribe( result =>{
        if(!result.length){
          this.images = 'not yet :)';
        }
	  		this.images =  result.reverse() ;
	  		console.log(this.images);
	  	})
	  }

  ngOnInit() {
  }

}
