// component build in 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// import component build out  
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

// import services
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

const appRoutingProviders:any[] = [];
const appRoutes: Routes = [
     {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]

  },
     {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
       {
    path: 'addImg',
    component: UploadImageComponent
  },
  { path: "**",redirectTo:"welcome"}

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NavComponent,
    UploadImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
    
  providers: [ UserService, appRoutingProviders, AuthService, AuthGuard, { provide: LocationStrategy, useClass: HashLocationStrategy } ],
  bootstrap: [AppComponent]
})
export class AppModule { };
