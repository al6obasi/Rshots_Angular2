import { Injectable ,OnInit } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';
import { UserService } from './user.service';
// declare var Auth0Lock: any;
let Auth0Lock: any = require('auth0-lock').default;
@Injectable()
export class AuthService {
  userId:any;
  profile:any;
  // We'll use the Auth0 Lock widget for capturing user credentials
lock = new Auth0Lock('6kN9HXmMKMQPM0fHUR0GiKt4iSYcX3it', 'maltobasi.auth0.com', {});

  constructor(private user:UserService, public router: Router) {
  this
    .router
    .events
    .filter(event => event instanceof NavigationStart)
    .filter((event: NavigationStart) => (/access_token|id_token|error/).test(event.url))
    .subscribe(() => {
      console.log('inside event ')
      this.lock.resumeAuth(window.location.hash, (error, authResult) => {
        if (error) return console.log(error);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('profile', JSON.stringify(authResult)); 
        this.router.navigate(['/home']);
      });
  });
    this.lock.on("authenticated", (authResult:any) => {
      this.lock.getProfile(authResult.idToken, function(error:any, profile:any){
          if(error){
              throw new Error(error);
          }
            localStorage.setItem('id_token', authResult.idToken);
            localStorage.setItem('profile', JSON.stringify(profile)); 

      });
            this.sendInfo();
    });

}

  // This method will display the lock widget
  login() {
    this.lock.show();
  }

  // This method will log the use out
  logout() {
    // To log out, just remove the token and profile
    // from local storage
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');

    // Send the user back to the public deals page after logout
    this.router.navigateByUrl('/home');
    console.log('yeaaa')
  }

  // Finally, this method will check to see if the user is logged in. We'll be able to tell by checking to see if they have a token and whether that token is valid or not.
  loggedIn() {
    return tokenNotExpired();
  }
    sendInfo(){
            this.profile =JSON.parse(localStorage.getItem('profile'));
            this.userId = this.profile.clientID;
            this.user.login(this.userId).subscribe( ok => {
          console.log(JSON.parse(ok['_body']));
        });;
    }
  ngOnInit(){
  }

}




