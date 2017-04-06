webpackJsonp([1,4],{

/***/ 1069:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(555);


/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(1045);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// declare var Auth0Lock: any;
var Auth0Lock = __webpack_require__(449).default;
var AuthService = (function () {
    function AuthService(user, router) {
        var _this = this;
        this.user = user;
        this.router = router;
        // We'll use the Auth0 Lock widget for capturing user credentials.
        this.options = {
            theme: {
                logo: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/15036283_1534461186580402_6434649023422279976_n.jpg?oh=f75754430b0dffcbf7f67d2dc020e04e&oe=5957E701",
                primaryColor: 'green'
            }
        };
        this.lock = new Auth0Lock('6kN9HXmMKMQPM0fHUR0GiKt4iSYcX3it', 'maltobasi.auth0.com', this.options);
        this
            .router
            .events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationStart */]; })
            .filter(function (event) { return (/access_token|id_token|error/).test(event.url); })
            .subscribe(function () {
            console.log('inside event ');
            _this.lock.resumeAuth(window.location.hash, function (error, authResult) {
                if (error)
                    return console.log(error);
                localStorage.setItem('id_token', authResult.idToken);
                localStorage.setItem('profile', JSON.stringify(authResult));
                _this.router.navigate(['/home']);
            });
        });
        this.lock.on("authenticated", function (authResult) {
            _this.lock.getProfile(authResult.idToken, function (error, profile) {
                if (error) {
                    throw new Error(error);
                }
                localStorage.setItem('id_token', authResult.idToken);
                localStorage.setItem('profile', JSON.stringify(profile));
            });
            // this.sendInfo();
        });
        this.lock.on('authorization_error', function (error) {
            this.lock.show({
                flashMessage: {
                    type: 'error',
                    text: error.error_description
                }
            });
        });
    }
    // This method will display the lock widget
    AuthService.prototype.login = function () {
        this.lock.show({
            allowedConnections: ["facebook", 'twitter'],
            allowSignUp: true, flashMessage: {
                type: 'success',
                text: 'maltobasi@hotmail.com'
            } });
    };
    // This method will log the use out
    AuthService.prototype.logout = function () {
        // To log out, just remove the token and profile
        // from local storage
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
        // Send the user back to the public deals page after logout
        this.router.navigateByUrl('');
        console.log('yeaaa');
    };
    // Finally, this method will check to see if the user is logged in. We'll be able to tell by checking to see if they have a token and whether that token is valid or not.
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.ngOnInit = function () {
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/admin/Desktop/Rshots_Angular2/src/auth.service.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(1046);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    // Image services :- 
    UserService.prototype.addImg = function (data) {
        return this.http.post('/api/addImage', data).map(function (res) { return res.json(); });
    };
    ;
    UserService.prototype.login = function (data) {
        return this.http.post('/api/login', data).map(function (res) { return res.json(); });
    };
    ;
    UserService.prototype.retriveAllImage = function () {
        return this.http.get('/api/getall').map(function (res) { return res.json(); });
        ;
    };
    ;
    UserService.prototype.getImagesByUserId = function (userId) {
        return this.http.get('/api/getAllById/' + userId).map(function (res) { return res.json(); });
    };
    ;
    UserService.prototype.remove = function (id) {
        return this.http.delete('/api/removeImgeById/' + id).map(function (res) { return res.json(); });
    };
    ;
    UserService.prototype.getImgById = function (id) {
        return this.http.get('/api/getImgById/' + id).map(function (res) { return res.json(); });
    };
    // Comments services :- 
    UserService.prototype.InsertCom = function (data) {
        return this.http.post('/api/insertComment', data).map(function (res) { return res.json(); });
    };
    ;
    UserService.prototype.getCommById = function (imgId) {
        return this.http.get('/api/getCommentsById/' + imgId).map(function (res) { return res.json(); });
    };
    ;
    UserService.prototype.editComm = function (data) {
        return this.http.put('/api/editComment', data).map(function (res) { return res.json(); });
    };
    ;
    UserService.prototype.delComm = function (comId) {
        return this.http.delete('/api/removeCommentById/delete/' + comId).map(function (res) { return res.json(); });
    };
    ;
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=/Users/admin/Desktop/Rshots_Angular2/src/user.service.js.map

/***/ }),

/***/ 554:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 554;


/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(673);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/admin/Desktop/Rshots_Angular2/src/main.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(950),
            styles: [__webpack_require__(944)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/Users/admin/Desktop/Rshots_Angular2/src/app.component.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nav_nav_component__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__upload_image_upload_image_component__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_guard_service__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__image_image_component__ = __webpack_require__(676);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
// component build in 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var appRoutingProviders = [];
var appRoutes = [
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'addImg',
        component: __WEBPACK_IMPORTED_MODULE_10__upload_image_upload_image_component__["a" /* UploadImageComponent */]
    },
    {
        path: 'image',
        component: __WEBPACK_IMPORTED_MODULE_14__image_image_component__["a" /* ImageComponent */]
    },
    {
        path: 'image/:id',
        component: __WEBPACK_IMPORTED_MODULE_14__image_image_component__["a" /* ImageComponent */]
    },
    { path: "**", redirectTo: "welcome" }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_9__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_10__upload_image_upload_image_component__["a" /* UploadImageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__image_image_component__["a" /* ImageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__user_service__["a" /* UserService */], appRoutingProviders, __WEBPACK_IMPORTED_MODULE_12__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_11__auth_guard_service__["a" /* AuthGuard */], { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* HashLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
;
//# sourceMappingURL=/Users/admin/Desktop/Rshots_Angular2/src/app.module.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        // If user is not logged in we'll send them to the homepage 
        if (!this.auth.loggedIn()) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Users/admin/Desktop/Rshots_Angular2/src/auth-guard.service.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(auth, img) {
        var _this = this;
        this.auth = auth;
        this.img = img;
        this.img.retriveAllImage().subscribe(function (result) {
            if (!result.length) {
                _this.images = 'not yet :)';
            }
            _this.images = result.reverse();
            console.log(_this.images);
        });
        this.sendInfo();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.sendInfo = function () {
        if (localStorage.getItem('profile') !== undefined) {
            this.profile = JSON.parse(localStorage.getItem('profile'));
            var userData = {
                user_id: this.profile.user_id,
                userName: this.profile.name,
                picture: this.profile.picture
            };
            this.img.login(userData).subscribe(function (ok) {
                console.log(JSON.parse(ok['_body']));
            });
        }
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(951),
            styles: [__webpack_require__(945)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/admin/Desktop/Rshots_Angular2/src/home.component.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(204);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageComponent = (function () {
    //  constructor 
    function ImageComponent(user, route) {
        // get the img _ id from params 
        var _this = this;
        this.user = user;
        this.route = route;
        this.toggle = false;
        this.url = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            console.log(_this.id);
        });
        // retrive the information for the images
        this.user.getImgById(this.id).subscribe(function (ok) {
            console.log(ok);
            _this.images = ok;
        });
        // retrive all comment(s) for this image order by most recent  .
        this.user.getCommById(this.id).subscribe(function (data) {
            _this.comments = data.reverse();
            if (!data.length) {
                return;
            }
            else {
                _this.comId = data[0]._id;
            }
            //   console.log(data)
        });
    }
    // ******** Comment functions ********* 
    ImageComponent.prototype.commentAuth = function (id) {
        this.profile = JSON.parse(localStorage.getItem('profile'));
        this.userId = this.profile.user_id;
        return (id == this.userId);
    };
    ImageComponent.prototype.editComment = function (id) {
        this.comId = id;
        this.toggle = !this.toggle;
    };
    ImageComponent.prototype.anotherSubmit = function () {
        var _this = this;
        var updateCom = {
            _id: this.comId,
            text: this.text
        };
        this.user.editComm(updateCom).subscribe(function (Done) {
            _this.dump = Done;
            _this.refreshCom();
        });
        this.com = '';
        this.text = '';
    };
    ImageComponent.prototype.insertComment = function () {
        var _this = this;
        this.profile = JSON.parse(localStorage.getItem('profile'));
        this.userId = this.profile.user_id;
        var newCom = {
            userId: this.userId,
            imgId: this.id,
            text: this.com
        };
        this.user.InsertCom(newCom).subscribe(function (Done) {
            _this.inserted = Done;
            _this.com = '';
            _this.refreshCom();
        });
    };
    ImageComponent.prototype.deleteComment = function (id) {
        var _this = this;
        this.user.delComm(id).subscribe(function (deleted) {
            _this.deletedDone = deleted;
            console.log(_this.deletedDone);
            _this.refreshCom();
        });
    };
    ImageComponent.prototype.isAuth = function () {
        this.toggle = !this.toggle;
        this.profile = JSON.parse(localStorage.getItem('profile'));
        this.userId = this.profile.user_id;
        return typeof (this.userId) === 'string';
    };
    ImageComponent.prototype.refreshCom = function () {
        var _this = this;
        this.user.getCommById(this.id).subscribe(function (data) {
            _this.comments = data.reverse();
            console.log(data);
        });
    };
    ImageComponent.prototype.ngOnInit = function () {
    };
    ImageComponent.prototype.ngOnChanges = function () {
        this.refreshCom();
    };
    ImageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-image',
            template: __webpack_require__(952),
            styles: [__webpack_require__(946)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], ImageComponent);
    return ImageComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/admin/Desktop/Rshots_Angular2/src/image.component.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent(auth) {
        this.auth = auth;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(953),
            styles: [__webpack_require__(947)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], NavComponent);
    return NavComponent;
    var _a;
}());
//# sourceMappingURL=/Users/admin/Desktop/Rshots_Angular2/src/nav.component.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(auth, img) {
        var _this = this;
        this.auth = auth;
        this.img = img;
        if (localStorage.getItem('profile') !== undefined) {
            console.log('yeaa');
            this.profile = JSON.parse(localStorage.getItem('profile'));
            console.log(this.profile);
            this.userId = this.profile.user_id;
            console.log(this.userId);
            this.img.getImagesByUserId(this.userId).subscribe(function (result) {
                _this.images = result.reverse();
                console.log(_this.images);
            });
            this.sendInfo();
        }
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.remove = function (id) {
        var _this = this;
        this.img.remove(id).subscribe(function (result) {
            console.log(id);
            console.log(result);
            _this.refresh();
        });
    };
    ProfileComponent.prototype.refresh = function () {
        var _this = this;
        this.img.getImagesByUserId(this.userId).subscribe(function (result) {
            _this.images = result.reverse();
            console.log(_this.images);
        });
    };
    ProfileComponent.prototype.sendInfo = function () {
        if (localStorage.getItem('profile') !== undefined) {
            this.profile = JSON.parse(localStorage.getItem('profile'));
            var userData = {
                user_id: this.profile.user_id,
                userName: this.profile.name,
                picture: this.profile.picture
            };
            this.img.login(userData).subscribe(function (ok) {
                console.log(JSON.parse(ok['_body']));
            });
        }
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(954),
            styles: [__webpack_require__(948)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/admin/Desktop/Rshots_Angular2/src/profile.component.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadImageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadImageComponent = (function () {
    function UploadImageComponent(img, changeDetectorRef) {
        this.img = img;
        this.changeDetectorRef = changeDetectorRef;
        this.sendInfo();
    }
    UploadImageComponent.prototype.ngOnInit = function () {
        this.profile = JSON.parse(localStorage.getItem('profile'));
        //   console.log(this.profile);
        this.userId = this.profile.user_id;
        console.log(this.userId);
    };
    // upload image start
    UploadImageComponent.prototype.fileChange = function (input) {
        this.readFiles(input.files);
    };
    UploadImageComponent.prototype.readFile = function (file, reader, callback) {
        // Set a callback funtion to fire after the file is fully loaded
        reader.onload = function () {
            // callback with the results
            callback(reader.result);
        };
        // Read the file
        reader.readAsDataURL(file);
    };
    UploadImageComponent.prototype.readFiles = function (files) {
        var _this = this;
        // Create the file reader
        var reader = new FileReader();
        // If there is a file
        if (files[0]) {
            // Start reading this file
            this.readFile(files[0], reader, function (result) {
                // Create an img element and add the image file data to it
                _this.image = result;
                // console.log(this.image) 
            });
        }
        else {
            // When all files are done This forces a change detection
            this.changeDetectorRef.detectChanges();
        }
    };
    // upload image end 
    UploadImageComponent.prototype.addImg = function () {
        var _this = this;
        var newImage = {
            img_data: this.image,
            img_uid: this.userId
        };
        // console.log(newImage);
        // send image to the services function to send it to back-end
        this.img.addImg(newImage).subscribe(function (ok) {
            _this.message = ok;
            console.log(_this.message);
        });
    };
    UploadImageComponent.prototype.reset = function () {
        this.myinput.nativeElement.value = "";
    };
    UploadImageComponent.prototype.sendInfo = function () {
        if (localStorage.getItem('profile') !== undefined) {
            this.profile = JSON.parse(localStorage.getItem('profile'));
            var userData = {
                user_id: this.profile.user_id,
                userName: this.profile.name,
                picture: this.profile.picture
            };
            this.img.login(userData).subscribe(function (ok) {
                console.log(JSON.parse(ok['_body']));
            });
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'), 
        __metadata('design:type', Object)
    ], UploadImageComponent.prototype, "myinput", void 0);
    UploadImageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upload-image',
            template: __webpack_require__(955),
            styles: [__webpack_require__(949)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === 'function' && _b) || Object])
    ], UploadImageComponent);
    return UploadImageComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/admin/Desktop/Rshots_Angular2/src/upload-image.component.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/admin/Desktop/Rshots_Angular2/src/environment.js.map

/***/ }),

/***/ 944:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 945:
/***/ (function(module, exports) {

module.exports = "img{\n\twidth: 356px;\n\theight: 280px;\n}\nul{\n  font-size: 22px;\n  color: blue;\n\n}\n.jumbotron {\n  padding-top: 6rem;\n  padding-bottom: 6rem;\n  margin-bottom: 0;\n  background-color: #fff;\n}\n\n.jumbotron p:last-child {\n  margin-bottom: 0;\n}\n\n.jumbotron-heading {\n  font-weight: 300;\n  text-align:center;\n}\n\n.jumbotron .container {\n  max-width: 40rem;\n}\n\n.lead {\n  text-align:center;\n}\n\n.album {\n  /*min-height: 50rem;  Can be removed; just added for demo purposes */\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  background-color: #f7f7f7;\n}\n\n.card {\n  float: left;\n  width: 33.333%;\n  padding: .75rem;\n  margin-bottom: 2rem;\n  border: 0;\n}\n\n.card img {\n  margin-bottom: .75rem;\n}\n\n.card-text {\n  font-size: 85%;\n}\n\n.media-heading {\n  font-size : 18px;\n}\n\n"

/***/ }),

/***/ 946:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 947:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 948:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 949:
/***/ (function(module, exports) {

module.exports = ".row_centermessage{\n\tfont-size: 15px;\n\tcolor: blue;\n}"

/***/ }),

/***/ 950:
/***/ (function(module, exports) {

module.exports = "<app-nav>\n</app-nav>\n<br><br>\n<h1>Welcome  in Rshots </h1>\n<div><p class=\"alert alert-success\" *ngIf = \"auth.loggedIn()\" > You are logged in </p></div>\n<div><p class=\"alert alert-danger\" *ngIf = \"!auth.loggedIn()\" > You are not logged in !!! </p></div>\n<br>\n<br>\n<router-outlet>\n</router-outlet>"

/***/ }),

/***/ 951:
/***/ (function(module, exports) {

module.exports = " <section class=\"jumbotron text-center\">\n    <div class=\"commentBox\">\n            <div  class=\"col-md-1\" *ngFor=\"let img of images \"  >\n          \n        <img class=\"img-circle\" style=\"width:9%;height:19%\" src=\"{{img.userPic}}\">\n              <li> {{img.userName}}</li>\n                  <li class=\"media-heading\">{{img.img_date}}</li>\n              <img class=\"album\" data-src=\"{{img.img_data}}\" >\n\n               <a  class=\"navbar-brand\" href=\"#\"        \n              [routerLink]=\"['/image/'+img._id]\"  >Comments</a>\n              <hr>\n                  <br>\n          </div>\n          </div>\n </section>\n\n\n\n\n\n\n"

/***/ }),

/***/ 952:
/***/ (function(module, exports) {

module.exports = "    <br>\n    <br>\n    <div class=\"album text-muted\">\n      <div class=\"container\">\n        <div class=\"row\">\n\n          <div  class=\"col-md-4\"  *ngFor=\"let image of images\" >\n        <img class=\"img-circle\" style=\"width :11%;height:15%\" src=\"{{image.userPic}}\">\n            <img class = \"img\" data-src=\"{{image.img_data}}\" >\n            <p class=\"card-text\">\n            </p>\n                <p >Posted date: {{image.img_date}}</p>\n                <p >Posted By: {{image.userName}}</p>\n\n          </div>\n        </div>\n                <br>\n                <br>\n                </div>\n                </div>\n            <div class=\"detailBox\">\n    <div class=\"titleBox\">\n      <label>Comment Box</label>\n        <button type=\"button\" class=\"close\" aria-hidden=\"true\">&times;</button>\n\n    <br>\n    <div class=\"commentBox\">\n\n            <div class=\"commentBox\">\n        \n        <h3 class=\"taskDescription\" style=\"color: black\" *ngIf=\"isAuth()\" > Leave your comment below </h3>\n        <h3 class=\"taskDescription\" style=\"color: black\" *ngIf=\"!isAuth()\" >Sign up /Sign in to leave your comment below</h3>\n    </div>\n            <ul class=\"divcomment\">\n                \n          <div  class=\"divcomment\" *ngFor=\"let comm of comments\">\n         \n                <div class=\"commenterImage\">\n                  <img src=\"{{comm.userImage}}\" />\n                </div>\n          \t\t <h4>\n          \t\t    {{comm.username}} \t\n               </h4> \n               <h5>\n              {{comm.text}}\n              </h5>\n          \t\t &nbsp; &nbsp; &nbsp; Posted date : {{comm.date}}   \n        &nbsp;\t<button *ngIf = \"commentAuth(comm.userId)\"  (click)=\"editComment(comm._id)\" type=\"submit\"  >Edit</button>\n        \t&nbsp;<button *ngIf = \"commentAuth(comm.userId)\" (click)=\"deleteComment(comm._id)\" type=\"submit\"   >delete</button>\n        <button  (click)=\"!editComment(comm._id)\"  type=\"submit\" *ngIf=toggle >Cancel</button>\n          \n          <br>\n      <hr>\n\n        <div class=\"col-md-12\">\n      <br>\n          </div>\n        </div>\n   <br>\n                </ul>\n\n\n<button  (click)=\"anotherSubmit();!editComment();anotherSubmit()\" type=\"submit\" *ngIf=toggle >Post</button>\n<textarea id=\"myTextarea\"    [hidden]=!toggle [(ngModel)]=\"text\">\n   </textarea>\n   <input type=\"text\" style=\"width: 100%;\" [(ngModel)]=\"com\" *ngIf=\"isAuth()\" placeholder=\"insert comment\"/>\n<button  (click)=\"insertComment()\" type=\"submit\"  *ngIf=\"isAuth()\" [hidden]=toggle>Post</button>\n<br>\n<br>\n    </div>\n    </div>\n    </div>"

/***/ }),

/***/ 953:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-fixed-top navbar-dark bg-inverse\">\n  <a class=\"navbar-brand\" *ngIf = \"auth.loggedIn()\"  [routerLink]=\"['home']\">Home</a>\n  <ul class=\"nav navbar-nav\">\n    <li class=\"nav-item\">\n      <a  class=\"navbar-brand\"      \n       *ngIf = \"auth.loggedIn()\"  [routerLink]=\"['profile']\" >Profile</a>\n    </li>\n        <li class=\"nav-item\">\n      <a  class=\"navbar-brand\"  *ngIf=\"auth.loggedIn()\" [routerLink]=\"['addImg']\">Share your image </a>\n    </li>\n    \n  </ul>\n  \n  <ul class=\"nav navbar-nav pull-right\">\n  <li class=\"nav-item\">\n      <a class=\"nav-link\" *ngIf = \"auth.loggedIn()\" (click)=\"auth.logout()\">Log out</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\" *ngIf = \"!auth.loggedIn()\"(click)=\"auth.login()\"> Log in </a>\n    </li>    \n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"https://github.com/al6obasi/Rshots_Angular2\">\n     github <i class=\"fa fa-github\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n  \n</div>\n\n\n\n\n"

/***/ }),

/***/ 954:
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"row\">\n    <div class=\"col-md-2\">\n        <img class=\"img-circle\" style=\"width:30%\" src=\"{{profile.picture}}\">\n     </div>\n     <div class=\"col-md-10\">\n         <h1>{{profile.nickname}}'s profile</h1>\n         <p>Name : {{profile.name}}</p>\n         <p>Gender: {{profile.gender}}</p>\n         <p>Registeration Date : {{profile.created_at}}</p>\n\n     </div>    \n</div>\n<br>\n <section class=\"jumbotron text-center\">\n      <div class=\"album text-muted\">\n      <h3> Manage your pictures </h3>\n            <div  class=\"col-md-4\" *ngFor=\"let img of images \"  >\n              <img class=\"img-square\" style=\"width:25.5%\" data-src=\"{{img.img_data}}\">\n\n              <div class=\"card-text\">\n                  <div class=\"media-heading\">{{img.img_date}}</div>\n              </div>\n              <ul>\n                \n               <li><button class=\"btn-danger\" type=\"submit\" (click)=\"remove(img._id)\">Remove image </button></li>\n              <a  class=\"navbar-brand\" href=\"#\"        \n              [routerLink]=\"['/image/'+img._id]\">Comments</a>\n                  <br>\n                  <hr>\n              </ul>\n      </div>\n      </div>\n    </section>\n\n\n\n\n\n\n"

/***/ }),

/***/ 955:
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n<form role=\"form\" (submit)=\"addImg();reset()\"  #myNgForm=\"ngForm\">\n<div class=\"row\">\n     <div class=\"col-md-4\"></div>\n    <div class=\"col-md-4 title\">\n      <h2 class=\"hadd\">Feel free to share your image !!</h2>\n      </div>\n      <div class=\"col-md-4\"></div>\n      </div>\n      <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n        </div>\n        <div class=\"col-md-3\"></div>\n      </div>\n      <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n           <div class=\"form-group\">\n          <label>upload image</label>\n          <input type=\"file\"  (change)=\"fileChange(input)\" #input  required accept=\"image/*\"/>\n        </div>\n\n        </div>\n        <div class=\"col-md-3\"></div>\n      </div>\n      <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n        <div class=\"col-xs-12 col-md-6\">\n        <button \n        class=\"btn btn-warning btn-block btn-lg\" type=\"submit\">Publish</button>\n                  <hr class=\"colorgraph\">\n        </div>\n        <div class=\"col-md-3\"></div>\n      </div>\n      <div class=\"row_centermessage\">\n        <span  *ngIf=\"message\" >{{message}}!!</span>\n      </div>\n       </form>\n  </div>\n  <br><br>"

/***/ })

},[1069]);
//# sourceMappingURL=main.bundle.map