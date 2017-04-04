import { Component, OnInit,ChangeDetectorRef} from '@angular/core';
import { ViewChild } from '@angular/core';
import { UserService } from './../user.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
	 image:string;
   userId:any;
   profile:any;
	 message:any;
	 @ViewChild('input')
	 myinput: any;
  	constructor(private img:UserService,private changeDetectorRef: ChangeDetectorRef) {
   }

  ngOnInit() {
  this.profile =JSON.parse(localStorage.getItem('profile'));
//   console.log(this.profile);

   this.userId = this.profile.clientID;
   console.log(this.userId);
  }
  // upload image start
    fileChange(input){
    this.readFiles(input.files);

    }
  readFile(file, reader, callback){
    // Set a callback funtion to fire after the file is fully loaded
    reader.onload = () => {
      // callback with the results
      callback(reader.result);
    }
    
    // Read the file
    reader.readAsDataURL(file);
  }
  readFiles(files){
    // Create the file reader
    let reader = new FileReader();
    
    // If there is a file
    if (files[0]){
      // Start reading this file
      this.readFile(files[0], reader, (result) =>{
        // Create an img element and add the image file data to it
      this.image=result;
       // console.log(this.image) 
       
       
      });
    }else{
      // When all files are done This forces a change detection
      this.changeDetectorRef.detectChanges();
    }
  }
  // upload image end 
   addImg(){
        let newImage = {
        img_data:this.image,
        img_uid:this.userId
        }
        // console.log(newImage);
        // send image to the services function to send it to back-end
        this.img.addImg(newImage).subscribe( ok => {
            this.message=ok;
          console.log(this.message);
        });
    }
  reset() {
    this.myinput.nativeElement.value = "";
  }
}

