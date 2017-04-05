import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor( private http:Http) { }
    // Image services :- 
    addImg(data){
        return this.http.post('/api/addImage',data).map(res=>res.json());
    };
    login(data){
        return this.http.post('/api/login',data).map(res=>res.json());
    };
    retriveAllImage(){
    	return this.http.get('/api/getall').map(res=>res.json());;
    };
    getImagesByUserId(userId){
        return this.http.get('/api/getAllById/'+userId).map( res=>res.json());
    };
    remove(id){
        return this.http.delete('/api/removeImgeById/'+id).map( res=>res.json());
    };
    getImgById(id){
        return this.http.get('/api/getImgById/'+id).map( res=>res.json());
    }
      // Comments services :- 
  
    InsertCom (data){
      return this.http.post('/api/insertComment',data).map(res=>res.json());
    };

    getCommById (imgId){
       return this.http.get('/api/getCommentsById/'+imgId).map(res=>res.json());
    };

    editComm (data){
       return this.http.put('/api/editComment',data).map(res=>res.json());
    };
    delComm (comId){
       return this.http.delete('/api/removeCommentById/delete/'+comId).map(res=>res.json());
    };

}
