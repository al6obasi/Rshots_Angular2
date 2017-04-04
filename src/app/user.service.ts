import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor( private http:Http) { }
    addImg(data){
	  		//console.log(data);
	        return this.http.post('/api/addImage',data)
	            
	    };
    login(userId){
        return this.http.post('/api/login',userId)
    }

}
