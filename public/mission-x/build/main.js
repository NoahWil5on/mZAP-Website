webpackJsonp([0],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_info_user_info__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_click_click__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Vanilla ionic import


//providers import



var FilterPage = (function () {
    function FilterPage(navCtrl, navParams, translate, viewCtrl, userInfo, click) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.viewCtrl = viewCtrl;
        this.userInfo = userInfo;
        this.click = click;
        this.range = {};
        this.status = ["To Do", "Complete"];
        this.type = ["building", "bugs", "pest", "trash", "cnd"];
        this.error = "";
        this.target = "";
        this.target = navParams.get('target');
    }
    FilterPage.prototype.ionViewDidLoad = function () {
        this.range.lower = -5;
        this.range.upper = 50;
    };
    FilterPage.prototype.statusClick = function () {
        this.click.click('filterStatus');
    };
    FilterPage.prototype.ratingClick = function () {
        this.click.click('filterRating');
    };
    FilterPage.prototype.typeClick = function () {
        this.click.click('filterType');
    };
    //dismiss this modal
    FilterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    //when filter is clicked, all data from page is thrown into user-info provider
    //to be accessed by map.ts
    FilterPage.prototype.filter = function () {
        this.click.click('filterFilter');
        if (this.status.length < 1 || this.type.length < 1) {
            this.error = this.translate.text.filter.error;
            return;
        }
        var obj = {
            upper: this.range.upper,
            lower: this.range.lower,
            status: this.status,
            type: this.type
        };
        switch (this.target) {
            case 'reports':
                this.userInfo.filterReports = obj;
                break;
            case 'map':
                this.userInfo.filter = obj;
                break;
            default:
                break;
        }
        this.viewCtrl.dismiss(true);
    };
    return FilterPage;
}());
FilterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-filter',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\filter\filter.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-grid class="ionic-title">\n\n            <ion-row>\n\n                <ion-col text-left>\n\n                </ion-col>\n\n                <ion-col col-auto class="title">\n\n                    {{translate.text.filter.filter}}\n\n                </ion-col>\n\n                <ion-col text-right>\n\n                    <ion-buttons end>\n\n                        <button ion-button clear style="color: white;" (click)="dismiss()">X</button>\n\n                    </ion-buttons>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-item>\n\n        <ion-label>{{translate.text.filter.type}}</ion-label>\n\n        <ion-select [(ngModel)]="type" multiple="true" okText="OK" [cancelText]="translate.text.filter.cancel" (click)="typeClick()">\n\n            <ion-option value="building">{{translate.text.other.building}}</ion-option>\n\n            <ion-option value="bugs">{{translate.text.other.bug}}</ion-option>\n\n            <ion-option value="pest">{{translate.text.other.pest}}</ion-option>\n\n            <ion-option value="trash">{{translate.text.other.trash}}</ion-option>\n\n            <ion-option value="cnd">{{translate.text.other.cnd}}</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>{{translate.text.filter.status}}</ion-label>\n\n        <ion-select [(ngModel)]="status" multiple="true" okText="OK" [cancelText]="translate.text.filter.cancel" (click)="statusClick()">\n\n            <ion-option value="To Do">{{translate.text.other.todo}}</ion-option>\n\n            <ion-option value="Complete">{{translate.text.other.complete}}</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label floating>Rating Range</ion-label>\n\n        <ion-range dualKnobs="true" [(ngModel)]="range" min="-5" max="50" pin="true" (click)="ratingClick()">\n\n            <ion-label range-left>-5</ion-label>\n\n            <ion-label range-right>50+</ion-label>\n\n        </ion-range>\n\n    </ion-item>\n\n    <button (click)="filter()" ion-button>Filter</button>\n\n    <p class="error">{{error}}</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\filter\filter.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_translator_translator__["a" /* TranslatorProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_user_info_user_info__["a" /* UserInfoProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_click_click__["a" /* ClickProvider */]])
], FilterPage);

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_images_images__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_info_user_info__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_click_click__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//vanilla ionic imports



//page imports

//firebase imports


//provider imports




var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, afAuth, afDB, images, userInfo, storage, translate, menuCtrl, click) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afDB = afDB;
        this.images = images;
        this.userInfo = userInfo;
        this.storage = storage;
        this.translate = translate;
        this.menuCtrl = menuCtrl;
        this.click = click;
        this.imageData = "";
        //user input data
        this.email = "";
        this.pass1 = "";
        this.pass2 = "";
        this.name = "";
        this.image = false;
        this.startTrue = true;
        this.refName = "";
        this.url = "";
        this.error = "";
        this.images.doClear();
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
    };
    RegisterPage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.enable(true);
    };
    RegisterPage.prototype.inputClick = function (input) {
        this.click.click('register' + input);
    };
    /*Tries to create account*/
    RegisterPage.prototype.createAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.click.click('registerCreateAccount');
                this.startTrue = false;
                /*Checks to make sure fields are filled in (no profile image required)*/
                if (this.pass1 === this.pass2) {
                    if (this.pass1.length > 0 && this.email.length > 0 && this.name.length > 0) {
                        /*Create user*/
                        this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.pass1).then(function (_) {
                            /*add user display name*/
                            _this.afAuth.auth.currentUser.updateProfile({
                                displayName: _this.name,
                                photoURL: ""
                            }).then(function (_) {
                                _this.storage.set('mission_x_email', _this.email);
                                _this.storage.set('mission_x_password', _this.pass1);
                                var today = new Date();
                                //let date = (today.getMonth()+1) + "-" + today.getDate() + "-" + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                                /*Checks if user submitted an image*/
                                if (_this.image) {
                                    /*Fetches image*/
                                    var promiseObject = _this.images.uploadToFirebase("posts");
                                    promiseObject.promise.then(function (res) {
                                        _this.url = res;
                                        _this.refName = promiseObject.refName;
                                        /*pushes user details to database*/
                                        _this.afDB.object('users/' + _this.afAuth.auth.currentUser.uid).update({
                                            rating: 0,
                                            visits: 1,
                                            lastActive: today,
                                            firstActive: today,
                                            name: _this.name,
                                            refName: _this.refName,
                                            email: _this.email,
                                            url: _this.url
                                        }).then(function (_) {
                                            _this.userInfo.pageState = 'map';
                                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */]);
                                        }).catch(function (e) {
                                            alert(e.message);
                                        });
                                    }).catch(function (e) {
                                        alert(e.message);
                                    });
                                }
                                else {
                                    /*If no image just add some basic info*/
                                    _this.afDB.object('users/' + _this.afAuth.auth.currentUser.uid).update({
                                        rating: 0,
                                        posts: 0,
                                        visits: 1,
                                        lastActive: today,
                                        firstActive: today,
                                        name: _this.name,
                                        email: _this.email
                                    }).then(function (_) {
                                        _this.userInfo.pageState = 'map';
                                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */]);
                                    }).catch(function (e) {
                                        console.log(e.message);
                                    });
                                }
                            }).then(function (_) {
                                firebase.database().ref('/userRating/').child(_this.afAuth.auth.currentUser.uid).set({
                                    likes: 0,
                                    posts: 0,
                                    postLikes: 0,
                                    resolves: 0,
                                    complete: 0
                                });
                            }).catch(function (e) {
                                _this.error = e.message;
                            });
                        }).catch(function (e) {
                            _this.error = e.message;
                        });
                    }
                    else {
                        this.error = this.translate.text.register.fill;
                    }
                }
                else {
                    this.error = this.translate.text.register.identical;
                }
                return [2 /*return*/];
            });
        });
    };
    /*Finds content that isn't filled in correctly*/
    RegisterPage.prototype.checkContent = function (data) {
        if (this.startTrue)
            return false;
        if (data.length > 0) {
            switch (this.error) {
                case "The email address is badly formatted.":
                    if (data == this.email)
                        return true;
                    else
                        return false;
                case "Password should be at least 6 characters":
                    if (data == this.pass1 || data == this.pass2)
                        return true;
                    else
                        return false;
                case "Passwords must be identical":
                    if (data == this.pass1 || data == this.pass2)
                        return true;
                    else
                        return false;
                default:
                    return false;
            }
        }
        return true;
    };
    /*Fetch image from camera*/
    RegisterPage.prototype.cameraRequest = function () {
        var _this = this;
        this.click.click('registerCamera');
        var promise = this.images.doGetCameraImage(100, 100);
        promise.then(function (res) {
            _this.imageData = "data:image/jpg;base64," + res;
            _this.preview.nativeElement.setAttribute('src', _this.imageData);
            _this.image = true;
        }).catch(function (e) {
        });
    };
    /*Fetch image from album*/
    RegisterPage.prototype.albumRequest = function () {
        var _this = this;
        this.click.click('registerAlbum');
        var promise = this.images.doGetAlbumImage(100, 100);
        promise.then(function (res) {
            _this.imageData = "data:image/jpg;base64," + res;
            _this.preview.nativeElement.setAttribute('src', _this.imageData);
            _this.image = true;
        }).catch(function (e) {
        });
    };
    return RegisterPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('preview'),
    __metadata("design:type", Object)
], RegisterPage.prototype, "preview", void 0);
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\register\register.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-grid class="ionic-title">\n\n            <ion-row>\n\n                <ion-col text-left>\n\n                </ion-col>\n\n                <ion-col col-auto class="title">\n\n                    {{translate.text.register.create}}\n\n                </ion-col>\n\n                <ion-col text-right>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-color: #fcf80c">\n\n    <ion-item>\n\n        <ion-label floating [class.redText]="checkContent(name)">{{translate.text.register.name}}</ion-label>\n\n        <ion-input type="text" clearInput [(ngModel)]="name" (click)="inputClick(\'Name\')"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label floating [class.redText]="checkContent(email)">{{translate.text.register.email}}</ion-label>\n\n        <ion-input type="email" clearInput [(ngModel)]="email" (click)="inputClick(\'Email\')"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label floating [class.redText]="checkContent(pass1)">{{translate.text.register.pass1}}</ion-label>\n\n        <ion-input type="password" clearInput [(ngModel)]="pass1" (click)="inputClick(\'Password1\')"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label floating [class.redText]="checkContent(pass2)">{{translate.text.register.pass2}}</ion-label>\n\n        <ion-input type="password" clearInput [(ngModel)]="pass2" (click)="inputClick(\'Password2\')"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <p style="color: #3fbc05">{{translate.text.register.pic}}</p>\n\n        <ion-grid no-padding>\n\n            <ion-row>\n\n                <ion-col text-center no-padding [class.no-height]="imageData.length < 1">\n\n                    <img width="100px" #preview />\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-6 no-padding>\n\n                    <button ion-button block clear style="color: black;" (click)="cameraRequest()">\n\n                        <img src="assets/new/camera.png" style="width: 55px; padding-right: 10px;" alt="Camera" />\n\n                        {{translate.text.register.openCam}}</button>\n\n                </ion-col>\n\n                <ion-col col-6 no-padding>\n\n                    <button ion-button block clear style="color: black;" (click)="albumRequest()">\n\n                        <img src="assets/new/album.png" style="width: 55px; padding-right: 10px;" alt="Album" />\n\n                        {{translate.text.register.openAlb}}</button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-item>\n\n    <div padding-top>\n\n        <button ion-button full (click)="createAccount()" class="submit-button">{{translate.text.register.register}}</button>\n\n    </div>\n\n    <p class="error">{{error}}</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_6__providers_images_images__["a" /* ImagesProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_user_info_user_info__["a" /* UserInfoProvider */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_8__providers_translator_translator__["a" /* TranslatorProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_9__providers_click_click__["a" /* ClickProvider */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_forgot__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_info_user_info__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_click_click__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//vanilla ionic imports



//page imports

//import { MapPage } from '../map/map';

//import { HomePage } from '../home/home';

//provider imports



//fire base imports



var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, afAuth, alertCtrl, afDB, userInfo, loadingCtrl, menuCtrl, storage, translate, click) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.afDB = afDB;
        this.userInfo = userInfo;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.translate = translate;
        this.click = click;
        //user email and password
        this.email = "";
        this.password = "";
        this.error = "";
        this.language = "";
        this.storage.get('mzap_language').then(function (language) {
            _this.language = language;
        }).catch(function (e) {
            _this.language = "es";
        });
    }
    //on enter, check if the user has a saved sign in
    LoginPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.menuCtrl.enable(false);
        /*this.afAuth.auth.onAuthStateChanged(user => {
            if(this.afAuth.auth.currentUser)
                 this.runUser(this.afAuth.auth.currentUser);
        });*/
        this.storage.get('mission_x_email').then(function (email) {
            if (!email)
                return;
            _this.storage.get('mission_x_password').then(function (pass) {
                _this.afAuth.auth.signInWithEmailAndPassword(email, pass).then(function (data) {
                    _this.runUser(_this.afAuth.auth.currentUser);
                })
                    .catch(function (e) {
                    alert(_this.translate.text.login.noLogin);
                });
            });
        }).catch(function (e) {
            return;
        });
    };
    //once a user is signed in, update all necessary information and change page
    LoginPage.prototype.runUser = function (user) {
        var today = new Date();
        /*get current date and time*/
        var date = (today.getMonth() + 1) + "-" + today.getDate() + "-" + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var self = this;
        /*upate user visits and last active time*/
        if (__WEBPACK_IMPORTED_MODULE_11_firebase__["database"]().ref('users/').child(user.uid + "")) {
            __WEBPACK_IMPORTED_MODULE_11_firebase__["database"]().ref('users/').child(user.uid + "").once("value", function (snapshot) {
                if (snapshot.val() && snapshot.val().visits) {
                    self.afDB.object('users/' + self.afAuth.auth.currentUser.uid).update({
                        visits: snapshot.val().visits + 1,
                        lastActive: date
                    }).then(function (_) {
                        self.userInfo.pageState = 'map';
                        self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__map_map__["a" /* MapPage */]);
                    }).catch(function (e) {
                        alert(e.message);
                    });
                }
            });
        }
    };
    LoginPage.prototype.emailClick = function () {
        this.click.click('loginEmail');
    };
    LoginPage.prototype.passwordClick = function () {
        this.click.click('loginPassword');
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.enable(true);
    };
    //login user
    LoginPage.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loader;
            return __generator(this, function (_a) {
                this.click.click('loginLogin');
                loader = this.loadingCtrl.create({
                    content: this.translate.text.login.verify
                });
                loader.present();
                //try signing in user and updating their local sign in data
                this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(function (data) {
                    _this.storage.set('mission_x_email', _this.email);
                    _this.storage.set('mission_x_password', _this.password);
                    loader.dismiss();
                    _this.runUser(_this.afAuth.auth.currentUser);
                }).catch(function (e) {
                    loader.dismiss();
                    _this.error = e.message;
                });
                return [2 /*return*/];
            });
        });
    };
    //send user to register page
    LoginPage.prototype.register = function () {
        this.click.click('loginRegister');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    //send user to forgot password page
    LoginPage.prototype.forgot = function () {
        this.click.click('loginForgot');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__forgot_forgot__["a" /* ForgotPage */]);
    };
    //display info about signing in anonymously
    LoginPage.prototype.info = function () {
        var alert = this.alertCtrl.create({
            title: this.translate.text.login.anonymousAlertTitle,
            subTitle: this.translate.text.login.anonymousAlertSubTitle,
            buttons: [this.translate.text.login.ok]
        });
        alert.present();
    };
    LoginPage.prototype.goHome = function () {
        this.click.click('loginAnonymous');
        try {
            this.userInfo.pageState = 'map';
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__map_map__["a" /* MapPage */]);
        }
        catch (e) {
            alert(e.message);
        }
    };
    //set language
    LoginPage.prototype.setLang = function () {
        this.click.click('settingsUpdateLanguage');
        //check which language is selected
        switch (this.language) {
            case 'en':
                this.storage.set('mzap_language', 'en');
                this.translate.selectLanguage(this.translate.en);
                break;
            case 'es':
                this.storage.set('mzap_language', 'es');
                this.translate.selectLanguage(this.translate.es);
                break;
            default:
                break;
        }
    };
    LoginPage.prototype.languageClick = function () {
        this.click.click('settingsSelectLanguage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\login\login.html"*/'<ion-content padding id="login-content" >\n\n    <ion-grid>\n\n        <ion-row class="flex">\n\n            <ion-col text-center style="padding: 30px">\n\n                <img src="assets/images/logo.png" alt="mZAP" />\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row class="flex-big">\n\n            <ion-col class="main-col">\n\n                <ion-row class="input-section">\n\n                    <ion-col padding>\n\n                        <ion-row class="input-top">\n\n                            <ion-col col-3 class="input-col">\n\n                                <img src="assets/mail.png" alt="lock" class="full-height"/>\n\n                            </ion-col>\n\n                            <ion-col>\n\n                                <ion-input type="email" [(ngModel)]="email" clearInput class="login-input" (click)="emailClick()"></ion-input>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                        <ion-row class="half-height">\n\n                            <ion-col col-3 class="input-col">\n\n                                <img src="assets/lock.png" alt="lock" class="full-height"/>\n\n                            </ion-col>\n\n                            <ion-col>\n\n                                <ion-input type="password" [(ngModel)]="password" clearInput class="login-input" (click)="passwordClick()"></ion-input>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n                        <button ion-button clear class="login-button"\n\n                                (click)="login()">\n\n                            {{translate.text.login.login}}\n\n                        </button>\n\n                        <p class="error" style="color: black">{{error}}</p> \n\n                        <p text-center>{{translate.text.login.account}}<a (click)="register()" class="link">{{translate.text.login.signUp}}</a></p>\n\n\n\n                <ion-row class="padding-row">\n\n                    <ion-col text-wrap text-center>\n\n                        <button ion-button clear style="color: white" (click)="forgot()" text-wrap>{{translate.text.login.password}}</button>\n\n                    </ion-col><!--\n\n                    <ion-col col-6 text-wrap>\n\n                        <button ion-button clear style="color: white" (click)="goHome()" text-wrap>{{translate.text.login.anonymous}}</button>\n\n                    </ion-col>-->\n\n                </ion-row>\n\n                <ion-row text-center>\n\n                    <ion-col class="language" col-auto text-right>\n\n                        <ion-select [(ngModel)]="language" (ionChange)="setLang()">\n\n                            <ion-option value="en">English</ion-option>\n\n                            <ion-option value="es">Español</ion-option>\n\n                        </ion-select>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_6__providers_user_info_user_info__["a" /* UserInfoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__providers_translator_translator__["a" /* TranslatorProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_click_click__["a" /* ClickProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filter_filter__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_info_user_info__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_click_click__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//vanilla ionic imports


//image viewer import

//import pages



//provider imports



//firebase imports

var ReportsPage = ReportsPage_1 = (function () {
    function ReportsPage(navCtrl, navParams, menuCtrl, translate, loadCtrl, userInfo, imageViewerCtrl, modal, click) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.translate = translate;
        this.loadCtrl = loadCtrl;
        this.userInfo = userInfo;
        this.imageViewerCtrl = imageViewerCtrl;
        this.modal = modal;
        this.click = click;
        this.reports = [];
    }
    ReportsPage.prototype.ionViewDidLoad = function () {
        this.doLoad();
    };
    //check to see if posts is filtered out
    ReportsPage.prototype.doCheck = function (item) {
        if (!this.userInfo.filterReports)
            return true;
        var check = false;
        //filter by type
        for (var i = 0; i < this.userInfo.filterReports.type.length; i++) {
            if (item.type == this.userInfo.filterReports.type[i]) {
                check = true;
                break;
            }
        }
        if (!check)
            return false;
        check = false;
        //filter by status
        for (i = 0; i < this.userInfo.filterReports.status.length; i++) {
            if (item.status == this.userInfo.filterReports.status[i]) {
                check = true;
                break;
            }
        }
        if (!check)
            return false;
        if (!item.likes) {
            item.likes = 0;
        }
        //filter by rating
        if (item.likes <= this.userInfo.filterReports.upper &&
            item.likes >= this.userInfo.filterReports.lower) {
            return true;
        }
        return false;
    };
    //Open filter modal
    ReportsPage.prototype.openFilter = function () {
        var _this = this;
        this.click.click('reportsFilter');
        var filterPage = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__filter_filter__["a" /* FilterPage */], { target: 'reports' });
        filterPage.onDidDismiss(function (data) {
            if (data) {
                _this.navCtrl.setRoot(ReportsPage_1);
            }
        });
        filterPage.present();
    };
    //load in all posts
    ReportsPage.prototype.doLoad = function () {
        var self = this;
        __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/positions/').once('value').then(function (snapshot) {
            snapshot.forEach(function (item) {
                //filter out results
                if (!self.doCheck(item.val()))
                    return;
                //create object to hold data on each post
                var obj = {
                    type: item.val().type,
                    status: item.val().status,
                    description: item.val().description,
                    show: item.val().show,
                    name: item.val().name,
                    id: item.val().id,
                    url: item.val().url,
                    lat: item.val().lat,
                    lng: item.val().lng
                };
                //translate type
                switch (item.val().type) {
                    case 'bugs':
                        obj.type = self.translate.text.other.bug;
                        break;
                    case 'building':
                        obj.type = self.translate.text.other.building;
                        break;
                    case 'trash':
                        obj.type = self.translate.text.other.trash;
                        break;
                    case 'pest':
                        obj.type = self.translate.text.other.pest;
                        break;
                    case 'cnd':
                        obj.type = self.translate.text.other.cnd;
                        break;
                }
                //translate status
                switch (item.val().status) {
                    case 'Complete':
                        obj.status = self.translate.text.other.complete;
                        break;
                    case 'To Do':
                        obj.status = self.translate.text.other.todo;
                        break;
                }
                self.reports.unshift(obj);
            });
        });
    };
    //go to location of point on map
    ReportsPage.prototype.showOnMap = function (lat, lng) {
        //remove filters and update menu pageState
        this.userInfo.filter = undefined;
        this.userInfo.pageState = 'map';
        //set zoom and position of map
        this.userInfo.lat = lat;
        this.userInfo.lng = lng;
        this.userInfo.zoom = 20;
        //go to map
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */]);
    };
    //Check out user's profile
    ReportsPage.prototype.doProfile = function (id) {
        this.click.click('reportsShowProfile');
        this.userInfo.profileView = id;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
    };
    //pop up of image when image is clicked on
    ReportsPage.prototype.presentImage = function (image) {
        this.click.click('reportsPresent');
        var imageViewer = this.imageViewerCtrl.create(image);
        imageViewer.present();
    };
    //open nav menu
    ReportsPage.prototype.openMenu = function () {
        this.click.click('reportsMenu');
        this.menuCtrl.open();
    };
    return ReportsPage;
}());
ReportsPage = ReportsPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-reports',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\reports\reports.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-grid class="ionic-title">\n\n            <ion-row>\n\n                <ion-col text-left>\n\n                    <ion-buttons start>\n\n                        <button ion-button clear item-start (click)="openMenu()" class=\'nav-burg\'>\n\n                            <img class="nav-burg" src="assets/hamburger.png" alt="nav"/>\n\n                        </button>\n\n                    </ion-buttons>\n\n                </ion-col>\n\n                <ion-col col-auto class="title">\n\n                    {{translate.text.reports.reports}}\n\n                </ion-col>\n\n                <!-- <ion-col text-right>\n\n                    <ion-buttons end>\n\n                        <button ion-button clear item-end class=\'nav-filter\' (click)="openFilter()">\n\n                            <img class="nav-filter" src="assets/images/buttons/filter.png" alt="nav"/>\n\n                        </button>\n\n                    </ion-buttons>\n\n                </ion-col> -->\n\n                <ion-col></ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card padding *ngFor="let report of reports">\n\n        <h1 [style.border-color]="report.type">{{report.description}}</h1>          \n\n        <ion-grid no-padding>\n\n            <ion-row class="flex-row">\n\n                <ion-col>\n\n                    <ion-item>\n\n                        <p text-wrap><b>{{translate.text.reports.status}}</b>{{report.status}}</p>\n\n                    </ion-item>\n\n                    <ion-item *ngIf="report.show">\n\n                        <p text-wrap><b>{{translate.text.reports.by}}</b>{{report.name}}</p>\n\n                    </ion-item>\n\n                    <ion-item *ngIf="!report.show">\n\n                        <p text-wrap><b>{{translate.text.reports.by}}</b>{{translate.text.reports.anonymous}}</p>\n\n                    </ion-item>\n\n                </ion-col>\n\n                <!-- <ion-col col-6>\n\n                    <img *ngIf="report.url" [src]="report.url" #thisImage (click)="presentImage(thisImage)"/>\n\n                </ion-col> -->\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col text-left no-padding>\n\n                    <button ion-button color="primary" (click)="showOnMap(report.lat,report.lng)">\n\n                        {{translate.text.reports.map}}\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col text-right no-padding>\n\n                    <button ion-button color="secondary" *ngIf="report.show" (click)="doProfile(report.id)">\n\n                        {{translate.text.reports.profile}}\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\reports\reports.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_translator_translator__["a" /* TranslatorProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7__providers_user_info_user_info__["a" /* UserInfoProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_8__providers_click_click__["a" /* ClickProvider */]])
], ReportsPage);

var ReportsPage_1;
//# sourceMappingURL=reports.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//vanilla ionic imports

var TranslatorProvider = (function () {
    function TranslatorProvider() {
        //The text that will be used by all the pages
        this.text = {};
        //English verstion of Text
        this.en = {
            add: {
                describe: "Additional Description",
                openCam: "Open Camera",
                openAlb: "Open Album",
                username: "Show Username?",
                submit: "Submit",
                submitting: "Submitting Content...",
                imageAlertTitle: "Are you sure you want to submit this without a photo?",
                imageAlertSubTitle: "Adding a photo will allow other users to better assess your report",
                cancel: "Cancel",
                error: "Fill out all fields",
                thanks: "Thanks!",
                share: "Tell your friends about mZAP!",
                show: "Username is visible",
                noShow: "Username is NOT visible",
                errorType: "*Add a type to the report*",
                errorImage: "*Add a photo of the incident*",
                title1: "Here you can specify what and how many items you need.",
                title2: "Here you can add additional details and give the post a color.",
                sub1: "Don't see something on the list? You can enter other items at the bottom. Click the plus/minus buttons on the bottom right to change all the amounts of needed items.",
                item: "Item Name",
                success: "Submitted Successfully!"
            },
            confirmation: {
                success: "Successfully Submitted!",
                report: "Report:",
                type: "Type:",
                description: "Description:",
                viewable: "Your name is viewable to other users on this post",
                notViewable: "Your name is not viewable to other users on this post",
                pic: "Picture:",
                map: "Back to Map",
                share: "Thank you! Share your Report!"
            },
            infoWindow: {
                resolve: "Resolve",
                wait: "Waiting to be marked complete",
                author: "Posted by: ",
                noAuthor: "Posted anonymously",
                status: "Status: ",
                delete: "Delete",
                mark: "Mark Complete",
                note: "Note (Optional)",
                photo: "Add Photo*",
                openCam: "Open Camera",
                openAlb: "Open Album",
                resolution: "Resolve!",
                deleteAlertTitle: "Are you sure?",
                deleteAlertSubTitle: "Deleting a post is permanent and cannot be undone",
                cancel: "Cancel",
                submitting: "Submitting Content...",
                submitted: "Successfully Submitted",
                ok: "OK",
                error: "Fill out all fields",
                marking: "Marking as complete...",
                marked: "Marked as Complete!",
                editPost: "Edit Post",
                notes: "Notes",
                edit: "Edit",
                info: "Info",
                aboutTitle: "What is Global Chat?",
                aboutMessage: "Global chat is a way for you to communicate with everyone using the app. When you post a message here, everyone will be able to see and respond to it.",
                aboutTitle2: "What is the commenting feature?",
                aboutMessage2: "When you comment on a post everyone will be able to see your comment. This feature allows community members to better communicate what needs to be done in order to resolve an issue.",
            },
            login: {
                email: "Email",
                password: "Password",
                noLogin: "Unable to sign user in at this time",
                signUp: "CREATE ACCOUNT",
                forgot: "FORGOT ACCOUNT",
                anonymous: "Sign in anonymously",
                verify: "Verifying User...",
                anonymousAlertTitle: "Sign in anonymously",
                anonymousAlertSubTitle: "When signed in anonymously you can view other's posts but you cannot interact with or create them",
                ok: "OK"
            },
            map: {
                go: "Go",
                buildingTitle: "Abandoned building",
                buildingDescription: "Report an abandoned building at this location",
                bugsTitle: "Mosquitos",
                bugsDescription: "Report a breeding location of mosquitos at this location",
                pestsTitle: "Pests",
                pestsDescription: "Make a report on pests you found at this location",
                trashTitle: "Garbage",
                trashDescription: "Report an instance of garbage at this location",
                cndTitle: "Cats/Dogs",
                cndDescription: "Report a citing of stray animals",
                ok: "OK",
                cancel: "Cancel"
            },
            profile: {
                profile: "Profile",
                post: "Posts: ",
                last: "Last Active: ",
                first: "Account Created: ",
                reports: "My Reports:",
                type: "Type: ",
                status: "Status: ",
                map: "View on Map",
                posts: "Posts",
                resolves: "Resolves",
            },
            register: {
                create: "Creat an Account",
                name: "Name*",
                email: "Email*",
                pass1: "Password*",
                pass2: "Re-enter Password*",
                pic: "Add a Profile Picture",
                openCam: "Open Camera",
                openAlb: "Open Album",
                register: "Register",
                fill: "Be sure to fill out all fields",
                identical: "Passwords must be identical"
            },
            reports: {
                reports: "Reports",
                type: "Type: ",
                status: "Status: ",
                by: "Reported By: ",
                anonymous: "Anonymous",
                map: "View on Map",
                profile: "View Profile"
            },
            settings: {
                settings: "Settings",
                logout: "Logout",
                return: "Return to Login",
                lang: "Language",
                posts: "My Posts",
                notifications: "Notifications",
                resolves: "My Resolutions",
                comments: "My Comments",
                likes: "My Liked Posts"
            },
            topRated: {
                topRated: "Top Rated Users",
                you: "You",
                fetch: "Fetching Top Users..."
            },
            menu: {
                user: "Unknown User",
                home: "Home",
                map: "Map",
                reports: "Reports",
                rankings: "Rankings",
                settings: "Settings",
                logout: "Logout",
                share: "Share mZAP",
            },
            discussion: {
                discussion: "Discussion"
            },
            filter: {
                filter: "Filter",
                type: "Type:",
                status: "Status:",
                rating: "Rating:",
                cancel: "Cancel",
                error: "Select at least one status and one type"
            },
            editProfile: {
                edit: "Edit Profile",
                loading: "Updating User Profile...",
                name: "Name",
                pic: "Picture",
                submit: "Submit",
                delete: "Delete",
                error: "Name must be at least 2 characters in length",
                openCam: "Open Camera",
                openAlb: "Open Album"
            },
            editPost: {
                edit: "Edit Post",
                description: "Description of Report",
                type: "Type",
                status: "Status",
                change: "Change Picture",
                openCam: "Open Camera",
                openAlb: "Open Album",
                submit: "Submit",
                show: "Show Username",
                error: "Report must contain a description",
                submitted: "Submitted Successfully!",
                success: "Deleted Successfuly!"
            },
            home: {
                view: "View Map",
                report: "Report",
                reports: "All Reports"
            },
            resolve: {
                noPost: "No one has submitted a resolve yet. Gather up your friends and resolve this post!",
                add: "Add a Resolve!",
                note: "Note(optional)",
                noDesc: "*No Description*",
                good: "Does Everthing Look Good?",
                noImage: "No Image Added",
            },
            forgot: {
                forgot: "Forgot Password",
                loading: "Sending password reset email...",
                sent: "Email sent successfully!",
                check: "Check your email to reset your password",
                enter: "Enter Email",
                send: "Email Me",
                directions: "Enter your email and we will send you a link to reset your password."
            },
            tutorial: {
                help1: "Thank you for creating an account! mZAP is an app that allows you to report things in your community that need to be cleaned up and fixed, including standing water, trash, and broken roofs among others. You can then view these reports and organize groups to clean up these issues.",
                help2: "Here is the map. The blue location icon marks your location. Each red icon shows a report and its type.",
                help3: "You can make a report by clicking the 'plus' button. Then you can take a picture, add a description, and upload it to the map!",
                help4: "Other users can then view your post by clicking on it on the map. There they can comment and upload photos of the work they've done to improve or resolve the situation.",
                ready: "Thats it! Now you're ready to become an mZAPPER!"
            },
            other: {
                cnd: "Cats/Dogs",
                complete: "Resolved",
                todo: "To Do",
                building: "Abandoned Building",
                pest: "Pests",
                trash: "Trash",
                bug: "Mosquitos",
                water: "Standing Water",
                road: "Blocked Road",
                tree: "Fallen Tree",
                rocked: "Rocks in Road",
                electricity: "Exposed Electricity",
                language: "ENGLISH"
            },
            items: {
                e00: "Solar Panel Nomad 100",
                e01: "Yeti 400 Lithium Generator",
                e02: "Lighthouse Lantern (LAL 350 x 3)",
                e03: "Outfitter Shelter",
                e04: "Lodge Shelter",
                e05: "GZ Power + Outfitter Shelter",
                e06: "GZ Power + Lodge Shelte",
                e07: "Porter cooling bag",
                e08: "Insulin Cooling Case L x 150",
                e09: "Insulin Cooling Case XL x 150",
                e10: "Lifestraw",
                e11: "Mosquito Nets",
                e12: "Insulin",
                e13: "Glucometers",
                e14: "Maternal care",
                e15: "High blood pressure cuffs",
                e16: "Portable devices (tablets)",
                e17: "Cots",
                e18: "First Aid Kit",
                e19: "Hand sanitizer",
            }
        };
        //Spanish Version of text
        this.es = {
            add: {
                describe: "Despicion Adicional",
                openCam: "Abrir Cámara",
                openAlb: "Abrir Album",
                username: "¿Mostrar su nombre de usuario?",
                submit: "Enviar",
                submitting: "Enviando contenido...",
                imageAlertTitle: "¿Está seguro de querer enviar sin foto?",
                imageAlertSubTitle: "Incluir una foto ayudará a otros usuarios a entender mejor su reporte",
                cancel: "Cancelar",
                error: "Leene todos los espacios",
                thanks: "¡Gracias!",
                share: "¡Dile a tus amigos acerca mZAP!",
                show: "Nombre de usuario visible",
                noShow: "El nombre de usuario NO está visible",
                errorType: "*Añadir un tipo al informe*",
                errorImage: "*Añadir una foto del incidente*",
                title1: "Aquí puede especificar qué y cuántos elementos necesita.",
                title2: "Aquí puede agregar detalles adicionales y darle un color a la publicación.",
                sub1: "¿No ves algo en la lista? Puede ingresar otros elementos en la parte inferior. Haga clic en los botones más / menos en la parte inferior derecha para cambiar todas las cantidades de elementos necesarios.",
                item: "Nombre del Árticulo",
                success: "¡Envio Exitoso!"
            },
            confirmation: {
                success: "¡Envio Exitoso!",
                report: "Reporte:",
                type: "Tipo:",
                description: "Descripción:",
                viewable: "Su nombre será visto por otros usuarios en este reporte",
                notViewable: "Su nombre no será visto por otros usuarios en este reporte",
                pic: "Imagen:",
                map: "Volver al Mapa",
                share: "¡Gracias! ¡Comparte tu Reporte!"
            },
            infoWindow: {
                resolve: "Resolver",
                wait: "Esperando marca de completado",
                author: "Reportado por: ",
                noAuthor: "Reporte anónimo",
                status: "Estado: ",
                delete: "Borrar",
                mark: "Marcar como completado",
                note: "Nota (Opcional)",
                photo: "Incluir Foto*",
                openCam: "Abrir Cámara",
                openAlb: "Abrir Album",
                resolution: "¡Resolver!",
                deleteAlertTitle: "¿Está Seguro?",
                deleteAlertSubTitle: "Eliminar una publicación es permanente y no se puede deshacer",
                cancel: "Cancelar",
                submitting: "Enviando Contenido...",
                submitted: "¡Envio Exitoso!",
                ok: "OK",
                error: "Leene todos los espacios",
                marking: "Marcando como completado...",
                marked: "¡Marcado como completado!",
                editPost: "Editar publicación",
                notes: "Notas",
                edit: "Editar",
                info: "Detalles",
                aboutTitle: "¿Qué es Global Chat?",
                aboutMessage: "El chat global es una forma de comunicarse con todos los usuarios de la aplicación. Cuando publique un mensaje aquí, todo el mundo podrá verlo y responder a él.",
                aboutTitle2: "¿Cuál es la función de comentarios?",
                aboutMessage2: "Cuando comenta una publicación, todos podrán ver su comentario. Esta característica permite a los miembros de la comunidad comunicar mejor lo que se debe hacer para resolver un problema.",
            },
            login: {
                email: "Correo Electrónico",
                noLogin: "No se puede firmar usuario en este momento",
                password: "Contraseña",
                signUp: "CREAR UNA CUENTA",
                forgot: "OLVIDÓ LA CUENTA",
                anonymous: "Ingresar de manera anónima",
                verify: "Verificando Usuario...",
                anonymousAlertTitle: "Ingresar de manera anónima",
                anonymousAlertSubTitle: "Cuando ingresa de manera anónima usted puede ver los reportes de otros pero no puede interactuar con o crear reportes.",
                ok: "OK"
            },
            map: {
                go: "Ir",
                buildingTitle: "Edificación Abandonada",
                buildingDescription: "Reportar una edificación abandonada en esta ubicación",
                bugsTitle: "Mosquitos",
                bugsDescription: "Reportar una zona de reproducción de mosquitos en esta ubicación",
                pestsTitle: "Plagas",
                pestsDescription: "Hacer un reporte de plagas encontradas en esta ubicación",
                trashTitle: "Desperdicio/Basura",
                trashDescription: "Reporte una isntancia de basura en esta ubicacióm",
                cndTitle: "Gatos/Perros",
                cndDescription: "Reporte una cita de animales callejeros",
                ok: "OK",
                cancel: "Cancelar",
            },
            profile: {
                profile: "Perfíl",
                post: "Publicación: ",
                last: "Último Activo: ",
                first: "Cuenta Creada: ",
                reports: "Mis Reportes:",
                type: "Tipo: ",
                status: "Estado: ",
                map: "Ver en el Mapa",
                posts: "mensajes",
                resolves: "resolvers",
            },
            register: {
                create: "Crear una cuenta",
                name: "Nombre*",
                email: "Correo Electrónico*",
                pass1: "Contraseña*",
                pass2: "Re-Ingrese su contraseña*",
                pic: "Añadir una foto de perfíl",
                openCam: "Abrir Cámara",
                openAlb: "Abrir Album",
                register: "Registrarse",
                fill: "Asegúrese de llenar todos los espacios",
                identical: "Las contraseñas debe ser idénticas"
            },
            reports: {
                reports: "Reportes",
                type: "Tipo: ",
                status: "Estado:",
                by: "Reportado Por: ",
                anonymous: "Anónimo",
                map: "Ver en el Mapa",
                profile: "Ver Perfil"
            },
            settings: {
                settings: "Ajustes",
                logout: "Salir",
                return: "Volver a Ingresar",
                lang: "Idioma",
                posts: "Mis Publicaciones",
                notifications: "Notificaciones",
                resolves: "Mis Resoluciones",
                comments: "Mis Comentarios",
                likes: "Mis Posts Favoritos"
            },
            topRated: {
                topRated: "Usuarios mejor calificados",
                you: "tú",
                fetch: "buscando usuarios mejor calificados..."
            },
            menu: {
                home: "Casa",
                user: "Usuario Desconocido",
                map: "Mapas",
                reports: "Reportes",
                rankings: "Clasificación",
                settings: "Ajustes",
                logout: "Salir",
                share: "Compártelo mZAP",
            },
            discussion: {
                discussion: "Discusión"
            },
            filter: {
                filter: "Filtrar",
                type: "Tipo:",
                status: "Estado:",
                rating: "Clasificación:",
                cancel: "Cancelar",
                error: "Seleccione al menos un estado y un tipo"
            },
            editProfile: {
                edit: "Editar Perfil",
                loading: "Actualización de Perfil de Usuario...",
                name: "Nombre",
                pic: "Imagen",
                submit: "Enviar",
                delete: "Borrar",
                error: "El nombre debe tener al menos 2 caracteres de longitud",
                openCam: "Abrir Cámara",
                openAlb: "Abrir Album"
            },
            editPost: {
                edit: "Editar post",
                description: "Descripción del informe",
                type: "Tipo",
                status: "Estado",
                change: "cambiar imagen",
                openCam: "Abrir Cámara",
                openAlb: "Abrir Album",
                submit: "Enviar",
                show: "Mostrar nombre de usuario",
                error: "Informe debe contener una descripción",
                submitted: "¡Envio Exitoso!",
                success: "¡Borrado Exitosamente!"
            },
            home: {
                view: "Ver el Mapa",
                report: "Reportar",
                reports: "Todos los Informes"
            },
            forgot: {
                forgot: "Olvidó tu Contraseña",
                loading: "Enviar correo electrónico de restablecimiento de contraseña...",
                sent: "¡Correo enviado correctamente!",
                check: "Revise su correo electrónico para restablecer su contraseña",
                enter: "Ingrese Correo Electrónico",
                send: "Envíeme un Correo Electrónico",
                directions: "Ingrese su correo electrónico y le enviaremos un enlace para restablecer su contraseña."
            },
            tutorial: {
                help1: "Gracias por crear una cuenta! mZAP es una aplicación que te permite reportar situaciones o cosas en tu comunidad que necesitan ser limpiadas y arregladas incluyendo estancamientos de agua, basura y techos rotos, entre otros. Tú puedes ver estos reportes y organizar grupos para limpiar estos problemas.",
                help2: "Este es el mapa. El icono azul demarca tu ubicación. Cada icono rojo muestra un reporte y su características.",
                help3: "Tú puedes hacer un reporte haciendo click en el botón 'mas' (+). Después, puedes tomar una foto, añadir una descripción y subirla al mapa!",
                help4: "Otros usuarios podrán entonces ver tus reportes haciendo click sobre ellos en el mapa. Allí, ellos podrán hacer comentarios y subir fotos del trabajo que han hecho para mejorar o resolver la situación.",
                ready: "¡Esto es todo! ¡Ya estas listo para ser un mZAPPER!"
            },
            resolve: {
                noPost: "Nadie ha presentado una resolución todavía. Recoge a tus amigos y resuelve este post!",
                add: "¡Añada una resolución!",
                note: "Nota (opcional)",
                noDesc: "*Sin descripción*",
                good: "¿Todo se ve bien?",
                noImage: "No se ha añadido imagen",
            },
            other: {
                cnd: "Gatos/Perros",
                complete: "Resuelto",
                todo: "Incompleto",
                building: "Edificación Abandonada",
                pest: "Plagas",
                trash: "Desperdicio/Basura",
                bug: "Mosquitos",
                water: "Agua Estancada",
                road: "Camino Bloqueado",
                tree: "Arbol Caido",
                rocked: "Rocas en la Carretera",
                electricity: "Electricidad Expuesta",
                language: "ESPAÑOL"
            },
            items: {
                e00: "Solar Panel Nomad 100",
                e01: "Yeti 400 Lithium Generator",
                e02: "Lighthouse Lantern (LAL 350 x 3)",
                e03: "Outfitter Shelter",
                e04: "Lodge Shelter",
                e05: "GZ Power + Outfitter Shelter",
                e06: "GZ Power + Lodge Shelte",
                e07: "Porter cooling bag",
                e08: "Insulin Cooling Case L x 150",
                e09: "Insulin Cooling Case XL x 150",
                e10: "Lifestraw",
                e11: "Mosquito Nets",
                e12: "Insulin",
                e13: "Glucometers",
                e14: "Maternal care",
                e15: "High blood pressure cuffs",
                e16: "Portable devices (tablets)",
                e17: "Cots",
                e18: "First Aid Kit",
                e19: "Hand sanitizer",
            }
        };
        this.selectLanguage(this.es);
    }
    //sets language to whatever is put into the parameter
    TranslatorProvider.prototype.selectLanguage = function (lang) {
        this.text = lang;
    };
    return TranslatorProvider;
}());
TranslatorProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TranslatorProvider);

//# sourceMappingURL=translator.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//vanilla ionic imports


//firebase imports
//import * as firebase from 'firebase';

var UserInfoProvider = (function () {
    function UserInfoProvider(toastCtrl, afAuth) {
        this.toastCtrl = toastCtrl;
        this.afAuth = afAuth;
        this.pageState = 'map';
        this.mapEdit = true;
        this.lat = null;
        this.lng = null;
        this.zoom = null;
        this.allowPosition = false;
        this.loggedIn = false;
        this.isApp = false;
        this.isMobile = false;
        this.openInfo = false;
        this.notificationCount = -1;
        this.isApp = !document.URL.startsWith('http');
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
            this.isMobile = true;
        }
    }
    return UserInfoProvider;
}());
UserInfoProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
], UserInfoProvider);

//# sourceMappingURL=user-info.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Vanilla ionic import

//firebase import


var LikeProvider = (function () {
    function LikeProvider(afAuth) {
        this.afAuth = afAuth;
    }
    //takes post id, value of like (-1,1), and sends callback to tell map the new value
    LikeProvider.prototype.like = function (post, callback) {
        var self = this;
        var value = 0;
        //var valToAdd = value;
        var ref = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('/positions/').child(post);
        if (!this.afAuth.auth.currentUser)
            return;
        //check if the user has already liked this post and what value they posted on it
        var user = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref("/userLikes/" + this.afAuth.auth.currentUser.uid + "/likedPosts/" + post);
        user.once('value', function (userSnapshot) {
            //if user has liked the post and isn't changing their value return
            if (!userSnapshot.val()) {
                value = 1;
            }
            else {
                if (Number.parseInt(userSnapshot.val()) == -1) {
                    value = 1;
                }
                else {
                    value = -1;
                }
            }
            user.set(value).then(function (_) {
                ref.once('value', function (snapshot) {
                    //if this is the first time the post is receiving a like
                    if (!snapshot.hasChild('likes')) {
                        ref.child('likes').set(value).then(function (_) {
                            self.updateOtherUserLikes(snapshot.val().id, value);
                            self.updateLikes();
                            callback(value);
                        });
                    }
                    else {
                        var likes = Number.parseInt(snapshot.val().likes);
                        ref.child('likes').set(likes + value).then(function (_) {
                            self.updateOtherUserLikes(snapshot.val().id, value);
                            if (!userSnapshot.val()) {
                                self.updateLikes();
                            }
                            callback(likes + value);
                        });
                    }
                });
            });
        });
        //if the user has already liked the post but this is a new value then the post should
        //be double valued. ex.) post starts at 0 and user 'A' likes it. Post should go to 1.
        //if user 'A' goes back and dislikes it post shouldn't go back to 0, it should go to -1
        //because if they had disliked it at 0 post would have gone to -1. so delta should be 2
        // if(userSnapshot.val() != undefined){
        //     valToAdd *= 2;
        // }
        // else{
        //     self.updateLikes();
        // }
    };
    LikeProvider.prototype.updateLikes = function () {
        var self = this;
        var userRating = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('/userRating/').child(self.afAuth.auth.currentUser.uid);
        userRating.once('value', function (snap) {
            if (!snap.hasChild('likes')) {
                userRating.child('likes').set(1);
            }
            else {
                userRating.child('likes').set(snap.val().likes + 1);
            }
        });
    };
    LikeProvider.prototype.updateOtherUserLikes = function (uid, val) {
        var userRating = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('/userRating/').child(uid);
        userRating.once('value', function (snap) {
            if (!snap.hasChild('postLikes')) {
                userRating.child('postLikes').set(val);
            }
            else {
                userRating.child('postLikes').set(snap.val().postLikes + val);
            }
        });
    };
    //check if the user has already liked this post before
    //used for styling
    //takes post ID and sends a callback of the user's like preference for this post
    LikeProvider.prototype.likeable = function (post, callback) {
        if (!this.afAuth.auth.currentUser)
            return;
        var user = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref("/userLikes/" + this.afAuth.auth.currentUser.uid + "/likedPosts/" + post);
        user.once('value', function (userSnapshot) {
            if (userSnapshot.val()) {
                callback(Number.parseInt(userSnapshot.val()));
            }
            else {
                callback(0);
            }
        });
    };
    return LikeProvider;
}());
LikeProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
], LikeProvider);

//# sourceMappingURL=like.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_map_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_info_user_info__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_click_click__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_images_images__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//vanilla ionic imports



//page imports

//provider imports




//fire base imports



var LoginComponent = (function () {
    function LoginComponent(navCtrl, navParams, afAuth, alertCtrl, afDB, userInfo, loadingCtrl, menuCtrl, storage, translate, click, mapPage, ngZone, images) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.afDB = afDB;
        this.userInfo = userInfo;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.translate = translate;
        this.click = click;
        this.mapPage = mapPage;
        this.ngZone = ngZone;
        this.images = images;
        //user email and password
        this.email = "";
        this.name = "";
        this.password = "";
        this.error = "";
        this.language = "";
        this.bounce = true;
        this.press = false;
        this.menuCtrl.enable(false);
        this.storage.get('mzap_language').then(function (language) {
            _this.language = language;
        }).catch(function (e) {
            _this.language = "es";
        });
        this.storage.get('mission_x_email').then(function (email) {
            if (!email)
                return;
            _this.storage.get('mission_x_password').then(function (pass) {
                _this.afAuth.auth.signInWithEmailAndPassword(email, pass).then(function (data) {
                    _this.runUser(_this.afAuth.auth.currentUser);
                }).catch(function (e) {
                    var prob = _this.alertCtrl.create({
                        title: ":(",
                        subTitle: _this.translate.text.login.noLogin
                    });
                    prob.present();
                });
            }, function (_) {
                return;
            });
        }).catch(function (e) {
            return;
        });
        this.mapPage.loginState = 'login';
        this.menuCtrl.enable(false);
    }
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.menuCtrl.enable(false);
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.menuCtrl.enable(true);
        //this.userInfo.lookForUpdate();
    };
    //once a user is signed in, update all necessary information and change page
    LoginComponent.prototype.runUser = function (user) {
        var today = Date.now();
        /*get current date and time*/
        //var date = (today.getMonth() + 1) + "-" + today.getDate() + "-" + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var self = this;
        /*upate user visits and last active time*/
        if (__WEBPACK_IMPORTED_MODULE_10_firebase__["database"]().ref('users/').child(user.uid + "")) {
            __WEBPACK_IMPORTED_MODULE_10_firebase__["database"]().ref('users/').child(user.uid + "").once("value", function (snapshot) {
                if (snapshot.val() && snapshot.val().visits) {
                    self.afDB.object('users/' + self.afAuth.auth.currentUser.uid).update({
                        visits: snapshot.val().visits + 1,
                        lastActive: today
                    }).then(function (_) {
                        self.userInfo.pageState = 'map';
                        self.userInfo.loggedIn = true;
                        //self.mapPage.tut = true;
                    }).catch(function (e) {
                        alert(e.message);
                    });
                }
            });
        }
    };
    LoginComponent.prototype.emailClick = function () {
        this.click.click('loginEmail');
    };
    LoginComponent.prototype.passwordClick = function () {
        this.click.click('loginPassword');
    };
    LoginComponent.prototype.ionViewWillLeave = function () {
        this.menuCtrl.enable(true);
    };
    //login user
    LoginComponent.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (this.mapPage.loginState) {
                    case 'login':
                        this.login();
                        break;
                    case 'forgot':
                        this.forgotComponent.sendEmail();
                        break;
                    case 'create':
                        this.register();
                        break;
                    default:
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    LoginComponent.prototype.doBack = function () {
        if (this.create) {
            if (!this.create.dataSet) {
                this.mapPage.loginState = 'login';
            }
            else {
                this.create.dataSet = false;
                this.images.doClear;
            }
        }
        else {
            this.mapPage.loginState = 'login';
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: this.translate.text.login.verify
        });
        loader.present();
        //try signing in user and updating their local sign in data
        this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(function (data) {
            _this.storage.set('mission_x_email', _this.email);
            _this.storage.set('mission_x_password', _this.password);
            loader.dismiss();
            _this.runUser(_this.afAuth.auth.currentUser);
        }).catch(function (e) {
            loader.dismiss();
            _this.error = e.message;
        });
    };
    LoginComponent.prototype.register = function () {
        this.press = true;
        this.create.press = true;
        this.create.createAccount();
    };
    //display info about signing in anonymously
    LoginComponent.prototype.info = function () {
        var alert = this.alertCtrl.create({
            title: this.translate.text.login.anonymousAlertTitle,
            subTitle: this.translate.text.login.anonymousAlertSubTitle,
            buttons: [this.translate.text.login.ok]
        });
        alert.present();
    };
    //set language
    LoginComponent.prototype.setLang = function () {
        var _this = this;
        //check which language is selected
        this.storage.get('mzap_language').then(function (res) {
            switch (res) {
                case 'en':
                    _this.storage.set('mzap_language', 'es');
                    _this.translate.selectLanguage(_this.translate.es);
                    break;
                case 'es':
                    _this.storage.set('mzap_language', 'en');
                    _this.translate.selectLanguage(_this.translate.en);
                    break;
                default:
                    _this.storage.set('mzap_language', 'en');
                    _this.translate.selectLanguage(_this.translate.en);
                    break;
            }
        }, function (e) {
            _this.storage.set('mzap_language', 'en');
            _this.translate.selectLanguage(_this.translate.en);
        }).catch(function (e) {
            _this.storage.set('mzap_language', 'en');
            _this.translate.selectLanguage(_this.translate.en);
        });
    };
    LoginComponent.prototype.languageClick = function () {
        this.click.click('settingsSelectLanguage');
    };
    LoginComponent.prototype.skip = function () {
        this.userInfo.loggedIn = true;
        this.mapPage.tut = true;
    };
    LoginComponent.prototype.checkInput = function () {
        switch (this.mapPage.loginState) {
            case 'login':
                if (this.email.length < 1 || this.password.length < 1)
                    return false;
                break;
            case 'forgot':
                if (this.forgotComponent.email.length < 1)
                    return false;
                break;
            case 'create':
                return this.create.checkInput();
        }
        return true;
    };
    LoginComponent.prototype.checkPage = function () {
        if (!this.create) {
            this.bounce = true;
        }
        if (this.mapPage.loginState == 'login')
            return false;
        if (this.create) {
            if (!this.bounce) {
                if (this.create.photoState && !this.create.dataSet) {
                    return false;
                }
                return true;
            }
            this.bounce = false;
        }
        return true;
    };
    LoginComponent.prototype.checkPhotoState = function () {
        if (this.create) {
            return this.create.photoState;
        }
        return false;
    };
    LoginComponent.prototype.checkCreate = function () {
        if (this.mapPage.loginState != 'create')
            return false;
        if (this.create) {
            if (this.create.photoState && !this.create.dataSet) {
                return true;
            }
        }
        return false;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'login',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\login\login.html"*/'<div>\n  <div id="shader">\n  </div>\n  <!-- All content ends up in \'main\' -->\n  <div id="main">    \n    <!-- here the check and sometimes ex button are held -->\n    <ion-grid id="check-button">\n      <ion-row>\n        <ion-col text-center col-6 *ngIf="checkPage()">\n          <button ion-button clear (click)="doBack()">\n            <img src="assets/images/buttons/ex.png"/>\n          </button>\n        </ion-col>\n        <ion-col text-center>\n            <button ion-button clear (click)="skip()" *ngIf="checkCreate()">\n              <img src="assets/images/buttons/arrow.png"/>\n            </button>\n            <button ion-button clear (click)="submit()" [disabled]="!checkInput(press)" *ngIf="!checkCreate()">\n              <img src="assets/images/buttons/check.png"/>\n            </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <!-- login screen -->\n    <div *ngIf="mapPage.loginState == \'login\'" class="section">\n      <div id="logo-div">\n        <img src="assets/images/logo.png" />\n      </div>\n      <input type="email" style="background-color: none; margin-top: 20px;" [(ngModel)]="email" [placeholder]="translate.text.login.email" autocorrect="on"/>\n      <input type="password" style="background-color: none" [(ngModel)]="password" [placeholder]="translate.text.login.password" autocorrect="on"/>\n      <!-- <p class="error">{{error}}</p> -->\n      <div id="nav-buttons">\n        <button ion-button clear (click)="mapPage.loginState = \'forgot\'">{{translate.text.login.forgot}}</button>\n        <button ion-button clear (click)="mapPage.loginState = \'create\'">{{translate.text.login.signUp}}</button>\n        <button ion-button clear (click)="setLang()">{{translate.text.other.language}}</button>\n      </div>\n    </div>\n    <!-- forgot password screen -->\n    <div *ngIf="mapPage.loginState == \'forgot\'" class="section">\n      <div id="logo-div">\n        <img src="assets/images/logo.png" />\n      </div>\n      <forgot></forgot>\n    </div>\n    <!-- create account screen -->\n    <div *ngIf="mapPage.loginState == \'create\'" class="section">\n      <div id="logo-div" [class.hidden]="checkPhotoState()" class="show">\n        <img src="assets/images/logo.png" />\n      </div>\n      <create></create>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_user_info_user_info__["a" /* UserInfoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_translator_translator__["a" /* TranslatorProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_click_click__["a" /* ClickProvider */], __WEBPACK_IMPORTED_MODULE_3__pages_map_map__["a" /* MapPage */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_7__providers_images_images__["a" /* ImagesProvider */]])
], LoginComponent);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_click_click__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Vanilla ionic import


//import providers


//firebase import

var ForgotPage = (function () {
    function ForgotPage(navCtrl, navParams, afAuth, alertCtrl, loadingCtrl, translate, click) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.click = click;
        this.email = "";
        this.error = "";
    }
    ForgotPage.prototype.ionViewDidLoad = function () {
    };
    ForgotPage.prototype.emailClick = function () {
        this.click.click('forgotEmail');
    };
    ForgotPage.prototype.sendEmail = function () {
        this.click.click('forgotSend');
        var loader = this.loadingCtrl.create({
            content: this.translate.text.forgot.loading
        });
        loader.present();
        this.error = "";
        var self = this;
        this.afAuth.auth.sendPasswordResetEmail(this.email).then(function () {
            loader.dismiss();
            var sent = self.alertCtrl.create({
                title: this.translate.text.forgot.sent,
                subTitle: this.translate.text.forgot.check,
                buttons: ['OK']
            });
            sent.present();
        }).catch(function (error) {
            loader.dismiss();
            self.error = error.message;
        });
    };
    return ForgotPage;
}());
ForgotPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forgot',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\forgot\forgot.html"*/'<!--\n\n  Generated template for the ForgotPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-grid class="ionic-title">\n\n            <ion-row>\n\n                <ion-col text-left>\n\n                </ion-col>\n\n                <ion-col col-auto class="title">\n\n                    {{translate.text.forgot.forgot}}\n\n                </ion-col>\n\n                <ion-col text-right>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-item text-center>\n\n        <ion-label floating text-left>{{translate.text.forgot.enter}}</ion-label>\n\n        <ion-input [(ngModel)]="email" type="email" (click)="emailClick()" autocorrect="on"></ion-input>\n\n    </ion-item>\n\n    <div text-center padding>\n\n        <button (click)="sendEmail()" ion-button>{{translate.text.forgot.send}}</button>\n\n    </div>\n\n    <p class="error">{{error}}</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\forgot\forgot.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_translator_translator__["a" /* TranslatorProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_click_click__["a" /* ClickProvider */]])
], ForgotPage);

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_images_images__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_click_click__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_info_user_info__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//vanilla ionic import



//import pages

//provider imports




//firebase imports


var EditProfilePage = (function () {
    function EditProfilePage(navCtrl, navParams, viewCtrl, afAuth, translate, images, loadingCtrl, alertCtrl, storage, click, userInfo) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.afAuth = afAuth;
        this.translate = translate;
        this.images = images;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.click = click;
        this.userInfo = userInfo;
        this.imageData = "";
        this.user = {};
        this.name = "";
        this.error = "";
        this.dataSet = false;
        this.images.doClear();
    }
    EditProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/users/').child(this.afAuth.auth.currentUser.uid).once('value', function (snapshot) {
            _this.user = snapshot.val();
        }).then(function (_) {
            _this.name = _this.user.name;
        });
    };
    EditProfilePage.prototype.ngAfterViewInit = function () {
        var self = this;
        this.input.nativeElement.onchange = function (e) {
            var file = e.target.files[0];
            self.images.selectedFile = file;
            self.dataSet = true;
            setTimeout(function () {
                self.preview.nativeElement.setAttribute('src', URL.createObjectURL(file));
            }, 50);
        };
        this.input1.nativeElement.onchange = function (e) {
            var file = e.target.files[0];
            self.images.selectedFile = file;
            self.dataSet = true;
            setTimeout(function () {
                self.preview.nativeElement.setAttribute('src', URL.createObjectURL(file));
            }, 50);
        };
    };
    EditProfilePage.prototype.nameClick = function () {
        this.click.click('editProfileName');
    };
    EditProfilePage.prototype.dismiss = function (bool) {
        this.viewCtrl.dismiss(bool);
    };
    EditProfilePage.prototype.cameraRequest = function () {
        var _this = this;
        this.click.click('editProfileCamera');
        var promise = this.images.doGetCameraImage(100, 100);
        promise.then(function (res) {
            _this.imageData = "data:image/jpg;base64," + res;
            _this.preview.nativeElement.setAttribute('src', _this.imageData);
            _this.dataSet = true;
        }).catch(function (e) {
        });
    };
    EditProfilePage.prototype.albumRequest = function () {
        var _this = this;
        this.click.click('editProfileAlbum');
        var promise = this.images.doGetAlbumImage(100, 100);
        promise.then(function (res) {
            _this.imageData = "data:image/jpg;base64," + res;
            _this.preview.nativeElement.setAttribute('src', _this.imageData);
            _this.dataSet = true;
        }).catch(function (e) {
        });
    };
    EditProfilePage.prototype.submit = function () {
        var _this = this;
        this.click.click('editProfileSubmit');
        var loader = this.loadingCtrl.create({
            content: this.translate.text.editProfile.loading
        });
        if (this.name.length < 2) {
            this.error = this.translate.text.editProfile.error;
            return;
        }
        loader.present();
        if (this.dataSet) {
            // firebase.database().ref('/users/').child(this.afAuth.auth.currentUser.uid).once('value', snapshot => {
            // if(snapshot.hasChild('url')){
            //     firebase.storage().ref('/images/').child("profile").child(snapshot.val().refName).delete().then(_ => {
            //         var promiseObject = this.images.uploadToFirebase("profile");
            //         promiseObject.promise.then(res => {
            //             firebase.database().ref('/users/').child(this.afAuth.auth.currentUser.uid).update({
            //                 url: res,
            //                 refName: promiseObject.refName,
            //             }).then(() => {
            //                 this.updateUser(loader);
            //             });
            //         }).catch(e => {
            //             alert("Error: " +e.message);
            //         });
            //     });
            // }else{
            //     var promiseObject = this.images.uploadToFirebase("profile");
            //     promiseObject.promise.then(res => {
            //         firebase.database().ref('/users/').child(this.afAuth.auth.currentUser.uid).update({
            //             url: res,
            //             refName: promiseObject.refName,
            //         }).then(() => {
            //             this.updateUser(loader);
            //         });
            //     }).catch(e => {
            //         alert("Error: " +e.message);
            //     });
            // }
            var promiseObject = this.images.uploadToFirebase("profile");
            promiseObject.promise.then(function (res) {
                __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/users/').child(_this.afAuth.auth.currentUser.uid).update({
                    url: res,
                    refName: promiseObject.refName,
                }).then(function () {
                    _this.updateUser(loader);
                });
            }).catch(function (e) {
                alert("Error: " + e.message);
            });
            // })
        }
        else {
            this.updateUser(loader);
        }
    };
    EditProfilePage.prototype.delete = function () {
        var _this = this;
        var del = this.alertCtrl.create({
            title: "Are you sure you want to delete your account?",
            subTitle: "Deleting your profile is permanent and cannot be undone. All posts associated with you account will also be deleted",
            inputs: [{
                    name: "email",
                    placeholder: "Email",
                    type: "email"
                }],
            buttons: [{
                    text: "Delete",
                    handler: function (data) {
                        if ((data.email + "").toUpperCase() != (_this.afAuth.auth.currentUser.email + "").toUpperCase()) {
                            alert("Incorrect Email");
                        }
                        else {
                            _this.deleteAllData();
                        }
                    }
                }, {
                    text: "Cancel"
                }]
        });
        del.present();
    };
    EditProfilePage.prototype.deleteAllData = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Deleting User, this may take a while..."
        });
        loader.present();
        var self = this;
        //find all posts posted by this user
        __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/positions/').orderByChild('id').equalTo(this.afAuth.auth.currentUser.uid).once('value').
            then(function (snapshot) {
            console.log(snapshot.val());
            //delete each post
            snapshot.forEach(function (item) {
                //check if image exsists on this post
                __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/positions/').child(item.val().key).once('value', function (imageSnap) {
                    if (imageSnap.hasChild('url')) {
                        //if image delete image then delete rest of report
                        __WEBPACK_IMPORTED_MODULE_9_firebase__["storage"]().ref('/images/').child(item.val().refName).delete().then(function () {
                            self.deleteReport(item.val());
                        });
                        //if no image delete rest of report
                    }
                    else {
                        self.deleteReport(item.val());
                    }
                });
            });
        }).then(function () {
            //start deleting user
            __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/users/').child(_this.afAuth.auth.currentUser.uid).once('value').then(function (snap) {
                //check for profile image
                if (snap.hasChild('url')) {
                    //delete profile image
                    __WEBPACK_IMPORTED_MODULE_9_firebase__["storage"]().ref('/images/').child(snap.val().refName).delete();
                }
            }).then(function () {
                __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/userLikes/').once('value').then(function (likeSnap) {
                    //check if user has any likes
                    if (likeSnap.hasChild(self.afAuth.auth.currentUser.uid)) {
                        //delete any likes from this user
                        __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/userLikes/').child(self.afAuth.auth.currentUser.uid).remove();
                    }
                });
            }).then(function () {
                //delete user info
                __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/users/').child(self.afAuth.auth.currentUser.uid).remove().then(function () {
                    //permanently delete user
                    self.afAuth.auth.currentUser.delete().then(function () {
                        self.storage.remove('mission_x_password').then(function (_) {
                            self.storage.remove('mission_x_email').then(function (_) {
                                loader.dismiss();
                                self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                            });
                        });
                    });
                });
            });
        }).catch(function (e) {
            loader.dismiss();
        });
    };
    EditProfilePage.prototype.deleteReport = function (data) {
        //delete each "resolve" image from db
        __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/resolves/').child(data.key).once('value').then(function (snapshot) {
            //loop through resolve images and delete them from storage
            snapshot.forEach(function (item) {
                __WEBPACK_IMPORTED_MODULE_9_firebase__["storage"]().ref('/images/').child(item.val().refName).delete();
            });
        }).then(function () {
            //delete the directory for resolve on this report
            __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/resolves/').child(data.key).remove().then(function () {
                __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/messages/').child(data.key).remove();
            }).then(function () {
                //delete root report
                __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/positions/').child(data.key).remove();
            });
        });
    };
    EditProfilePage.prototype.updateUser = function (loader) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/users/').child(this.afAuth.auth.currentUser.uid).update({
            name: this.name
        }).then(function () {
            loader.dismiss();
            _this.dismiss(true);
        });
    };
    return EditProfilePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('file'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], EditProfilePage.prototype, "input", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('file1'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], EditProfilePage.prototype, "input1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('preview'),
    __metadata("design:type", Object)
], EditProfilePage.prototype, "preview", void 0);
EditProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-profile',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\edit-profile\edit-profile.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-grid class="ionic-title">\n\n            <ion-row>\n\n                <ion-col text-left>\n\n                </ion-col>\n\n                <ion-col col-auto class="title">\n\n                    {{translate.text.editProfile.edit}}\n\n                </ion-col>\n\n                <ion-col text-right>\n\n                    <ion-buttons end>\n\n                        <button ion-button clear style="color: white;" (click)="dismiss(false)">X</button>\n\n                    </ion-buttons>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card padding-bottom>\n\n        <ion-item>\n\n            <ion-label floating class="green-text" [class.red-text]="name.length < 1">{{translate.text.editProfile.name}}</ion-label>\n\n            <ion-input type="text" [(ngModel)]="name" maxlength="18" style="border-bottom: solid black 1px" (click)="nameClick()" autocorrect="on"></ion-input>\n\n        </ion-item>\n\n    </ion-card>\n\n\n\n        <ion-item>\n\n            <p class="green-text">{{translate.text.editProfile.pic}}</p>\n\n            <ion-grid no-padding>\n\n                <ion-row>\n\n                    <ion-col text-center no-padding [class.no-height]="!dataSet">\n\n                        <img width="100px" #preview />\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row [class.hidden]="userInfo.isApp">\n\n                    <ion-col col-6 text-center>\n\n                        <label>\n\n                            <img src="assets/new/camera.png" style="width: 55px; padding-right: 10px;"/>\n\n                            <input #file type="file" accept="image/*" capture="camera" class="fileInput"/>\n\n                        </label>\n\n                    </ion-col>\n\n                    <ion-col col-6 text-center>\n\n                        <label>\n\n                            <img src="assets/new/album.png" style="width: 55px; padding-right: 10px;"/>\n\n                            <input #file1 type="file" accept="image/*" class="fileInput"/>\n\n                        </label>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row [class.hidden]="!userInfo.isApp">\n\n                    <ion-col col-6 no-padding>\n\n                        <button ion-button block clear style="color: black;" (click)="cameraRequest()">\n\n                            <img src="assets/new/camera.png" style="width: 55px; padding-right: 10px;" alt="Camera" />\n\n                        </button>\n\n                    </ion-col>\n\n                    <ion-col col-6 no-padding>\n\n                        <button ion-button block clear style="color: black;" (click)="albumRequest()">\n\n                            <img src="assets/new/album.png" style="width: 55px; padding-right: 10px;" alt="Album" />\n\n                        </button>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n        </ion-item>\n\n\n\n    <ion-card>\n\n        <ion-grid no-padding>\n\n                <ion-row>\n\n                    <ion-col col-12 no-padding text-center>\n\n                        <button ion-button color="secondary" (click)="submit()">\n\n                            {{translate.text.editProfile.submit}}\n\n                        </button>\n\n                    </ion-col>\n\n                    <!--\n\n                    <ion-col col-6 no-padding text-center>\n\n                        <button ion-button color="danger" (click)="delete()">\n\n                            {{translate.text.editProfile.delete}}\n\n                        </button>\n\n                    </ion-col>\n\n-->\n\n                </ion-row>\n\n            </ion-grid>\n\n    </ion-card>\n\n    <p class="error">{{error}}</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\edit-profile\edit-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_5__providers_translator_translator__["a" /* TranslatorProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_images_images__["a" /* ImagesProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6__providers_click_click__["a" /* ClickProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_user_info_user_info__["a" /* UserInfoProvider */]])
], EditProfilePage);

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopRatedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rating_rating__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_info_user_info__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_click_click__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//vanilla ionic imports


//firebase imports

//providers import




//page imports

var TopRatedPage = (function () {
    function TopRatedPage(navCtrl, navParams, menuCtrl, loadingCtrl, translate, rating, userInfo, click) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.rating = rating;
        this.userInfo = userInfo;
        this.click = click;
        this.users = [];
    }
    //open nav menu
    TopRatedPage.prototype.openMenu = function () {
        this.click.click('topRatedMenu');
        this.menuCtrl.open();
    };
    TopRatedPage.prototype.ionViewDidLoad = function () {
        //look at and preserve the top 5 users on basis of visits
        /*
        */
        this.rating.calculateRating(this.callback, this);
    };
    TopRatedPage.prototype.callback = function () {
        var self = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('/users/');
        ref.orderByChild("rating").once("value").then(function (snapshot) {
            snapshot.forEach(function (user) {
                var imageURL = "assets/profile.png";
                if (user.val().url) {
                    imageURL = user.val().url;
                }
                //add user & user info to front of array
                self.users.unshift({
                    id: user.key,
                    name: user.val().name,
                    rating: user.val().rating,
                    img: imageURL,
                    place: "",
                });
            });
            self.users.sort(function (a, b) { return b.rating - a.rating; });
            self.users = self.users.splice(0, 5);
            for (var i = 0; i < 5; i++) {
                self.users.place = "#" + (i + 1);
            }
        });
    };
    //Check out user's profile
    TopRatedPage.prototype.doProfile = function (id) {
        this.click.click('topRatedViewProfile');
        this.userInfo.profileView = id;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__profile_profile__["a" /* ProfilePage */]);
    };
    return TopRatedPage;
}());
TopRatedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-top-rated',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\top-rated\top-rated.html"*/'<!--\n\n  Generated template for the TopRatedPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-grid class="ionic-title">\n\n            <ion-row>\n\n                <ion-col text-left>\n\n                    <ion-buttons start>\n\n                        <button ion-button clear item-start (click)="openMenu()" class=\'nav-burg\'>\n\n                            <img class="nav-burg" src="assets/hamburger.png" alt="nav"/>\n\n                        </button>\n\n                    </ion-buttons>\n\n                </ion-col>\n\n                <ion-col col-auto class="title">\n\n                    {{translate.text.topRated.topRated}}\n\n                </ion-col>\n\n                <ion-col text-right>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding-vertical id="login-content">\n\n    <ion-list>\n\n        <ion-item *ngFor="let user of users" (click)="doProfile(user.id)">\n\n            <ion-thumbnail item-start>\n\n                <div class="avatar" [style.background-image]="\'url(\' + user.img+ \')\'">\n\n                </div>\n\n            </ion-thumbnail>\n\n            <h2>{{user.name}}</h2>\n\n            <p>\n\n                <ion-icon name="star" style="color: #eab609"></ion-icon>\n\n                {{user.rating}}\n\n            </p>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\top-rated\top-rated.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_translator_translator__["a" /* TranslatorProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_rating_rating__["a" /* RatingProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_user_info_user_info__["a" /* UserInfoProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_click_click__["a" /* ClickProvider */]])
], TopRatedPage);

//# sourceMappingURL=top-rated.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.reportType = [];
        this.reports = false;
        this.mzap = false;
        this.gd = "Use this function to do blah blah blah on a something report is effective for rats trees bugs and birds and symbolic of national pride";
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        this.reportType.push({
            img: "http://www.placehold.it/40",
            title: "Abandoned Building",
            desc: this.gd,
        });
        this.reportType.push({
            img: "http://www.placehold.it/40",
            title: "Mosquitos",
            desc: this.gd,
        });
        this.reportType.push({
            img: "http://www.placehold.it/40",
            title: "Cats and Dogs",
            desc: this.gd,
        });
        this.reportType.push({
            img: "http://www.placehold.it/40",
            title: "Pests",
            desc: this.gd,
        });
        this.reportType.push({
            img: "http://www.placehold.it/40",
            title: "Trash",
            desc: this.gd,
        });
    };
    AboutPage.prototype.toggleReports = function () {
        this.reports = !this.reports;
    };
    AboutPage.prototype.toggleMzap = function () {
        this.mzap = !this.mzap;
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-grid class="ionic-title">\n      <ion-row>\n        <ion-col text-left>\n        </ion-col>\n        <ion-col col-auto class="title">\n          About\n        </ion-col>\n        <ion-col text-right>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item (click)="toggleMzap()" class="dropDown">\n    <h1>What is mZAP?</h1>\n    <div *ngIf="mzap">\n      <ion-item>\n        <div style="display: table">\n          <img class="cell" src="http://placehold.it/40" />\n          <h1 class="cell">mZAP</h1>\n        </div>\n        <p text-wrap>It\'s the app that does the which in what is it in about this app that you can\'t just regularly do which is cool</p>\n      </ion-item>\n    </div>\n  </ion-item>\n  <ion-item (click)="toggleReports()" class="dropDown">\n    <h1>What does each report do?</h1>\n    <div *ngIf="reports">\n      <ion-item *ngFor="let report of reportType">\n        <div style="display: table">\n          <img class="cell" [src]="report.img" />\n          <h1 class="cell" >{{report.title}}</h1>\n        </div>\n        <p text-wrap>{{report.desc}}</p>\n      </ion-item>\n    </div>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\about\about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_click_click__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//vanilla ionic imports



//page imports


//firebase imports


//provider imports


var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, afAuth, menuCtrl, storage, translate, click) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.translate = translate;
        this.click = click;
        this.myPost = true;
        this.comments = true;
        this.resolves = true;
        this.likes = true;
        this.storage.get('mzap_language').then(function (language) {
            _this.language = language;
        }).catch(function (e) {
            _this.language = "es";
        });
        __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref("users/" + this.afAuth.auth.currentUser.uid).once('value', function (snapshot) {
            if (snapshot.hasChild('notifyComments')) {
                _this.comments = snapshot.val().notifyComments;
            }
            else {
                _this.comments = true;
            }
            if (snapshot.hasChild('notifyMyPosts')) {
                _this.myPost = snapshot.val().notifyMyPosts;
            }
            else {
                _this.myPost = true;
            }
            if (snapshot.hasChild('notifyResolves')) {
                _this.resolves = snapshot.val().notifyResolves;
            }
            else {
                _this.resolves = true;
            }
            if (snapshot.hasChild('notifyLikes')) {
                _this.likes = snapshot.val().notifyLikes;
            }
            else {
                _this.likes = true;
            }
        });
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
    };
    SettingsPage.prototype.toggle = function () {
        __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref("users/" + this.afAuth.auth.currentUser.uid).update({
            notifyComments: this.comments,
            notifyMyPosts: this.myPost,
            notifyResolves: this.resolves,
            notifyLikes: this.likes
        });
    };
    //sign user out if signed in
    SettingsPage.prototype.logout = function () {
        var _this = this;
        this.click.click('settingsLogout');
        this.afAuth.auth.signOut().then(function (out) {
            _this.storage.remove('mission_x_password').then(function (_) {
                _this.storage.remove('mission_x_email').then(function (_) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                });
            });
        });
    };
    SettingsPage.prototype.languageClick = function () {
        this.click.click('settingsSelectLanguage');
    };
    //if not logged in, send user back to homepage
    SettingsPage.prototype.goLogin = function () {
        this.click.click('settingsLogout');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    //check if user is logged in
    SettingsPage.prototype.isLoggedIn = function () {
        if (this.afAuth.auth.currentUser)
            return true;
        return false;
    };
    SettingsPage.prototype.openMenu = function () {
        this.click.click('settingsMenu');
        this.menuCtrl.open();
    };
    //set language
    SettingsPage.prototype.setLang = function () {
        var _this = this;
        //check which language is selected
        this.storage.get('mzap_language').then(function (res) {
            switch (res) {
                case 'en':
                    _this.storage.set('mzap_language', 'es');
                    _this.translate.selectLanguage(_this.translate.es);
                    break;
                case 'es':
                    _this.storage.set('mzap_language', 'en');
                    _this.translate.selectLanguage(_this.translate.en);
                    break;
                default:
                    _this.storage.set('mzap_language', 'en');
                    _this.translate.selectLanguage(_this.translate.en);
                    break;
            }
        }, function (e) {
            _this.storage.set('mzap_language', 'en');
            _this.translate.selectLanguage(_this.translate.en);
        }).catch(function (e) {
            _this.storage.set('mzap_language', 'en');
            _this.translate.selectLanguage(_this.translate.en);
        });
    };
    SettingsPage.prototype.about = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__about_about__["a" /* AboutPage */]);
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\settings\settings.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-grid class="ionic-title">\n\n            <ion-row>\n\n                <ion-col text-left>\n\n                    <ion-buttons start>\n\n                        <button ion-button clear item-start (click)="openMenu()" class=\'nav-burg\'>\n\n                            <img class="nav-burg" src="assets/hamburger.png" alt="nav"/>\n\n                        </button>\n\n                    </ion-buttons>\n\n                </ion-col>\n\n                <ion-col col-auto class="title">\n\n                    {{translate.text.settings.setting}}\n\n                </ion-col>\n\n                <ion-col text-right>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <!--\n\n    <button ion-button (click)="logout()" *ngIf="isLoggedIn()">{{translate.text.settings.logout}}</button>\n\n    <button ion-button (click)="goLogin()" *ngIf="!isLoggedIn()">{{translate.text.settings.return}}</button>\n\n    -->\n\n    <!-- <div>\n\n        <h2>{{translate.text.settings.notifications}}</h2>\n\n        <ion-item>\n\n            <ion-label>{{translate.text.settings.posts}}</ion-label>\n\n            <ion-toggle color="main" [(ngModel)]="myPost" (ionChange)="toggle()"></ion-toggle>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>{{translate.text.settings.resolves}}</ion-label>\n\n            <ion-toggle color="main" [(ngModel)]="resolves" (ionChange)="toggle()"></ion-toggle>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>{{translate.text.settings.comments}}</ion-label>\n\n            <ion-toggle color="main" [(ngModel)]="comments" (ionChange)="toggle()"></ion-toggle>\n\n        </ion-item> \n\n        <ion-item>\n\n            <ion-label>{{translate.text.settings.likes}}</ion-label>\n\n            <ion-toggle color="main" [(ngModel)]="likes" (ionChange)="toggle()"></ion-toggle>\n\n        </ion-item> \n\n    </div> -->\n\n    <button ion-button clear class="language" (click)="setLang()">{{translate.text.other.language}}</button>\n\n    <!--\n\n    <button ion-button (click)="about()">About</button>\n\n    -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\settings\settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__providers_translator_translator__["a" /* TranslatorProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_click_click__["a" /* ClickProvider */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_info_user_info__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, navParams, menuCtrl, afAuth, userInfo, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.afAuth = afAuth;
        this.userInfo = userInfo;
        this.events = events;
        this.notes = [];
        this.change = [];
        var self = this;
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("notifications/" + this.afAuth.auth.currentUser.uid).once('value').then(function (snapshot) {
            snapshot.forEach(function (post) {
                if (typeof post.val() == 'number')
                    return;
                __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("notifications/" + self.afAuth.auth.currentUser.uid + "/" + post.key).once('value').then(function (snap) {
                    snap.forEach(function (item) {
                        var note = {
                            message: item.val().message,
                            name: item.val().name,
                            seen: item.val().seen,
                            time: item.val().time,
                            key: post.key
                        };
                        self.notes.push(note);
                        if (!note.seen) {
                            self.change.push({
                                key: post.key,
                                type: item.key
                            });
                        }
                    });
                }).then(function (_) {
                    self.notes.sort(function (a, b) { return b.time - a.time; });
                    self.userInfo.notificationCount = 0;
                });
            });
        });
    }
    NotificationsPage.prototype.ionViewWillLeave = function () {
        var _this = this;
        if (this.afAuth.auth.currentUser == null)
            return;
        this.change.forEach(function (item) {
            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("notifications/" + _this.afAuth.auth.currentUser.uid + "/" + item.key + "/" + item.type).update({ seen: true });
        });
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("notifications/" + this.afAuth.auth.currentUser.uid).update({ count: 0 });
    };
    NotificationsPage.prototype.openPost = function (key) {
        var self = this;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */]);
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("/positions/" + key).once('value', function (snapshot) {
            self.userInfo.activeData = snapshot.val();
        }).then(function () {
            self.userInfo.lat = self.userInfo.activeData.lat;
            self.userInfo.lng = self.userInfo.activeData.lng;
            self.userInfo.zoom = 20;
            self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */]);
            self.userInfo.pageState = 'map';
            self.userInfo.openInfo = true;
        });
    };
    //open nav menu
    NotificationsPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notifications',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\notifications\notifications.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-grid class="ionic-title">\n          <ion-row>\n              <ion-col text-left>\n                  <ion-buttons start>\n                      <button ion-button clear item-start (click)="openMenu()" class=\'nav-burg\'>\n                          <img class="nav-burg" src="assets/hamburger.png" alt="nav"/>\n                      </button>\n                  </ion-buttons>\n              </ion-col>\n              <ion-col col-auto class="title">\n                  Notifications\n              </ion-col>\n              <ion-col></ion-col>\n          </ion-row>\n      </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <div *ngFor="let note of notes">\n        <ion-item  [class.blue]="!note.seen" (click)="openPost(note.key)">\n            <h2><b>{{note.name}}</b></h2>\n            <p>{{note.message}}</p>\n        </ion-item>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\notifications\notifications.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3__providers_user_info_user_info__["a" /* UserInfoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_images_images__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_click_click__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_info_user_info__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//vanilla ionic imports


//provider imports




//firebase imports

var EditPostPage = (function () {
    function EditPostPage(navCtrl, navParams, viewCtrl, images, translate, ngZone, click, userInfo) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.images = images;
        this.translate = translate;
        this.ngZone = ngZone;
        this.click = click;
        this.userInfo = userInfo;
        this.imageData = "";
        this.data = {};
        this.resolves = [];
        this.deleted = [];
        this.dataSet = false;
        this.error = "";
        this.images.doClear();
        var self = this;
        this.data = this.userInfo.activeData;
        var ref = __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref('/resolves/');
        ref.once('value', function (snapshot) {
            if (!snapshot.hasChild(_this.data.key))
                return;
            ref.child(_this.data.key).once('value').then(function (snap) {
                snap.forEach(function (item) {
                    var obj = {
                        url: item.val().url,
                        refName: item.val().refName,
                        info: "",
                        delete: false,
                        key: item.key
                    };
                    if (item.val().info) {
                        obj.info = item.val().info;
                    }
                    self.resolves.push(obj);
                });
            });
        });
    }
    EditPostPage.prototype.dismiss = function (bool) {
        this.viewCtrl.dismiss(bool);
    };
    EditPostPage.prototype.cameraRequest = function () {
        var _this = this;
        this.click.click('editPostCamera');
        var promise = this.images.doGetCameraImage(600, 600);
        promise.then(function (res) {
            _this.imageData = "data:image/jpg;base64," + res;
            _this.preview.nativeElement.setAttribute('src', _this.imageData);
            _this.dataSet = true;
        }).catch(function (e) {
        });
    };
    EditPostPage.prototype.albumRequest = function () {
        var _this = this;
        this.click.click('editPostAlbum');
        var promise = this.images.doGetAlbumImage(600, 600);
        promise.then(function (res) {
            _this.imageData = "data:image/jpg;base64," + res;
            _this.preview.nativeElement.setAttribute('src', _this.imageData);
            _this.dataSet = true;
        }).catch(function (e) {
        });
    };
    EditPostPage.prototype.statusClick = function () {
        this.click.click('editPostStatus');
    };
    EditPostPage.prototype.typeClick = function () {
        this.click.click('editPostType');
    };
    EditPostPage.prototype.descriptionClick = function () {
        this.click.click('editPostDescription');
    };
    EditPostPage.prototype.submit = function () {
        this.click.click('editPostSubmit');
        if (this.data.description.length < 1) {
            this.error = this.translate.text.editPost.error;
            return;
        }
        var self = this;
        if (!this.dataSet) {
            __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref('/positions/').child(self.data.key).update(self.data).then(function (_) {
                self.actuallyDeleteResolves();
            });
        }
        else {
            if (this.data.refName) {
                __WEBPACK_IMPORTED_MODULE_6_firebase__["storage"]().ref('/images/').child(this.data.refName).delete().then(function (_) {
                    var promiseObject = self.images.uploadToFirebase("posts");
                    promiseObject.promise.then(function (res) {
                        self.data.url = res;
                        self.data.refName = promiseObject.refName;
                        __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref('/positions/').child(self.data.key).update(self.data).then(function (_) {
                            self.actuallyDeleteResolves();
                        });
                    }).catch(function (e) {
                        alert("Error: " + e.message);
                    });
                });
            }
            else {
                var promiseObject = self.images.uploadToFirebase("posts");
                promiseObject.promise.then(function (res) {
                    self.data.url = res;
                    self.data.refName = promiseObject.refName;
                    __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref('/positions/').child(self.data.key).update(self.data).then(function (_) {
                        self.actuallyDeleteResolves();
                    });
                }).catch(function (e) {
                    alert("Error: " + e.message);
                });
            }
        }
    };
    EditPostPage.prototype.actuallyDeleteResolves = function () {
        var self = this;
        if (this.deleted.length < 1) {
            this.dismiss(true);
            return;
        }
        this.deleted.forEach(function (item) {
            __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref('/positions/').child(self.data.key).child('resolves').child(item.key).remove()
                .then(function (_) {
                __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref('/resolves/').child(self.data.key).child(item.key).remove().then(function (_) {
                    __WEBPACK_IMPORTED_MODULE_6_firebase__["storage"]().ref('/images/').child(item.refName).delete();
                });
            });
        });
        this.dismiss(true);
    };
    EditPostPage.prototype.deleteResolve = function (item) {
        var _this = this;
        this.click.click('editPostDelete');
        this.ngZone.run(function () {
            _this.resolves[_this.resolves.indexOf(item)].delete = true;
        });
        this.deleted.push(item);
    };
    return EditPostPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */])
], EditPostPage.prototype, "slide", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('preview'),
    __metadata("design:type", Object)
], EditPostPage.prototype, "preview", void 0);
EditPostPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-post',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\edit-post\edit-post.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-grid class="ionic-title">\n\n            <ion-row>\n\n                <ion-col text-left>\n\n                </ion-col>\n\n                <ion-col col-auto class="title">\n\n                    {{translate.text.editPost.edit}}\n\n                </ion-col>\n\n                <ion-col text-right>\n\n                    <ion-buttons end>\n\n                        <button ion-button clear style="color: white;" (click)="dismiss(false)">X</button>\n\n                    </ion-buttons>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <div>\n\n        <ion-slides *ngIf="resolves.length > 0">\n\n            <ion-slide text-center *ngFor="let item of resolves">\n\n                <div text-center>\n\n                    <div style="display: inline-block; position: relative;">\n\n                        <div *ngIf="item.delete" class="shader"></div>\n\n                        <div>\n\n                            <button ion-button clear class="slide-x" (click)="deleteResolve(item)">X</button>\n\n                        </div>\n\n                        <img [src]=\'item.url\' sytle="margin-left: auto; margin-right: auto; display: block"/>\n\n                    </div>\n\n                </div>\n\n                <p *ngIf="item.info.length > 0">{{item.info}}</p>\n\n            </ion-slide>\n\n        </ion-slides>\n\n    </div>\n\n    <ion-card padding-bottom>\n\n        <ion-item>\n\n            <ion-label floating class="green-text" [class.red-text]="!data.description">{{translate.text.editPost.description}}</ion-label>\n\n            <ion-input type="text" style="border-bottom: solid black 1px" [(ngModel)]="data.description" (click)="descriptionClick()"></ion-input>\n\n        </ion-item>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-label>{{translate.text.editPost.type}}</ion-label>\n\n            <ion-select [(ngModel)]="data.type" (click)="typeClick()">\n\n                <ion-option value="bugs">{{translate.text.other.bug}}</ion-option>\n\n                <ion-option value="pest">{{translate.text.other.pest}}</ion-option>\n\n                <ion-option value="trash">{{translate.text.other.trash}}</ion-option>\n\n                <ion-option value="building">{{translate.text.other.building}}</ion-option>\n\n                <ion-option value="cnd">{{translate.text.other.cnd}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-label>{{translate.text.editPost.status}}</ion-label>\n\n            <ion-select [(ngModel)]="data.status" (click)="statusClick()">\n\n                <ion-option value="To Do">{{translate.text.other.todo}}</ion-option>\n\n                <ion-option value="Complete">{{translate.text.other.complete}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-label>{{translate.text.editPost.show}}</ion-label>\n\n            <ion-checkbox [(ngModel)]="data.show"></ion-checkbox>\n\n        </ion-item>\n\n    </ion-card>\n\n\n\n        <ion-item>\n\n            <p class="green-text">{{translate.text.editPost.change}}</p>\n\n            <ion-grid no-padding>\n\n                <ion-row>\n\n                    <ion-col text-center no-padding [class.no-height]="imageData.length < 1">\n\n                        <img width="100px" #preview />\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <ion-col col-6 no-padding>\n\n                        <button ion-button block clear style="color: black;" (click)="cameraRequest()">\n\n                            <img src="assets/new/camera.png" style="width: 55px; padding-right: 10px;" alt="Camera" />\n\n                            {{translate.text.editPost.openCam}}\n\n                        </button>\n\n                    </ion-col>\n\n                    <ion-col col-6 no-padding>\n\n                        <button ion-button block clear style="color: black;" (click)="albumRequest()">\n\n                            <img src="assets/new/album.png" style="width: 55px; padding-right: 10px;" alt="Album" />\n\n                            {{translate.text.editPost.openAlb}}\n\n                        </button>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n        </ion-item>\n\n \n\n    <div text-center padding-top>\n\n        <button ion-button color="secondary" (click)="submit()">\n\n            {{translate.text.editPost.submit}}\n\n        </button>    \n\n    </div>\n\n    <p class="error">{{error}}</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\edit-post\edit-post.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_images_images__["a" /* ImagesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_translator_translator__["a" /* TranslatorProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_4__providers_click_click__["a" /* ClickProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_user_info_user_info__["a" /* UserInfoProvider */]])
], EditPostPage);

//# sourceMappingURL=edit-post.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClickProvider = (function () {
    function ClickProvider() {
    }
    ClickProvider.prototype.click = function (place) {
        var ref = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('clicks');
        ref.once('value').then(function (snapshot) {
            if (snapshot.hasChild(place)) {
                ref.child(place).once('value').then(function (snap) {
                    var num = Number(snap.val());
                    ref.child(place).set(num + 1);
                });
            }
            else {
                ref.child(place).set(1);
            }
        });
    };
    return ClickProvider;
}());
ClickProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ClickProvider);

//# sourceMappingURL=click.js.map

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 220;

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_info_user_info__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Ionic imports


//provider imports

//firebase imports


//declare var FCMPlugin;
var MapPage = (function () {
    function MapPage(navCtrl, navParams, userInfo, events, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userInfo = userInfo;
        this.events = events;
        this.afAuth = afAuth;
        this.infoShow = false;
        this.addShow = false;
        this.comment = false;
        this.tut = false;
        this.loginState = 'login';
        this.mapState = "comment";
        this.id = '';
        var self = this;
        this.events.subscribe('tut:open', function () {
            _this.tut = true;
            // this.setup().then(token => {
            //   this.storeToken(token);
            // });
        });
        if (this.userInfo.notificationCount == -1) {
            setInterval(function () {
                if (!self.afAuth.auth.currentUser || self.afAuth.auth.currentUser == null)
                    return;
                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("/notifications/" + self.afAuth.auth.currentUser.uid).once('value', function (snapshot) {
                    if (snapshot.hasChild('count')) {
                        self.userInfo.notificationCount = snapshot.val().count;
                    }
                    else {
                        self.userInfo.notificationCount = 0;
                    }
                });
            }, 2000);
        }
        setTimeout(function () {
            if (self.userInfo.openInfo) {
                self.mapView.doOpen(self.userInfo.activeData, null);
                setTimeout(function () {
                    self.comment = true;
                }, 50);
            }
        }, 50);
    }
    return MapPage;
}());
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-map',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\map\map.html"*/'<ion-content>\n\n    <info class="pop-up" *ngIf="infoShow"></info>\n\n    <add class="pop-up" *ngIf="addShow"></add>\n\n    <login class="pop-up no-scroll" *ngIf="!userInfo.loggedIn"></login>\n\n    <tutorial class="pop-up" *ngIf="tut"></tutorial>\n\n    <comment-view class="pop-up" *ngIf="comment"></comment-view>\n\n    <map-view></map-view>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\map\map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_info_user_info__["a" /* UserInfoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		483
	],
	"../pages/add/add.module": [
		488
	],
	"../pages/confirmation/confirmation.module": [
		493
	],
	"../pages/discussion/discussion.module": [
		496
	],
	"../pages/edit-post/edit-post.module": [
		490
	],
	"../pages/edit-profile/edit-profile.module": [
		479
	],
	"../pages/filter/filter.module": [
		485
	],
	"../pages/forgot/forgot.module": [
		477
	],
	"../pages/home/home.module": [
		498
	],
	"../pages/info-window/info-window.module": [
		491
	],
	"../pages/login/login.module": [
		478
	],
	"../pages/map/map.module": [
		263
	],
	"../pages/notifications/notifications.module": [
		487
	],
	"../pages/profile/profile.module": [
		480
	],
	"../pages/register/register.module": [
		476
	],
	"../pages/reports/reports.module": [
		486
	],
	"../pages/settings/settings.module": [
		484
	],
	"../pages/top-rated/top-rated.module": [
		481
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 262;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_map_view_map_view__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_info_info__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_info_view_info_view__ = __webpack_require__(914);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_comment_view_comment_view__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_edit_view_edit_view__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_resolve_resolve__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_add_add__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_type_type__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_picture_picture__ = __webpack_require__(919);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_description_description__ = __webpack_require__(920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_confirm_confirm__ = __webpack_require__(921);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_login_login__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_create_create__ = __webpack_require__(925);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_forgot_forgot__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_tutorial_tutorial__ = __webpack_require__(927);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_add_resolve_add_resolve__ = __webpack_require__(928);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var MapPageModule = (function () {
    function MapPageModule() {
    }
    return MapPageModule;
}());
MapPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_3__components_map_view_map_view__["a" /* MapViewComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_info_info__["a" /* InfoComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_info_view_info_view__["a" /* InfoViewComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_comment_view_comment_view__["a" /* CommentViewComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_edit_view_edit_view__["a" /* EditViewComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_resolve_resolve__["a" /* ResolveComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_add_add__["a" /* AddComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_type_type__["a" /* TypeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_picture_picture__["a" /* PictureComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_description_description__["a" /* DescriptionComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_confirm_confirm__["a" /* ConfirmComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_login_login__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_forgot_forgot__["a" /* ForgotComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_create_create__["a" /* CreateComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_tutorial_tutorial__["a" /* TutorialComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_add_resolve_add_resolve__["a" /* AddResolveComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */]
        ]
    })
], MapPageModule);

//# sourceMappingURL=map.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZonesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_geolib__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_geolib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_geolib__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//vanilla ionic imports

//geographic distance calculator import

var ZonesProvider = (function () {
    function ZonesProvider() {
        this.nodeArray = [];
        this.points = [];
    }
    //called to find clusters on map
    ZonesProvider.prototype.runEval = function (myPoints, distance, threshold) {
        this.nodeArray = [];
        //makes copy of points as not to disturb their value
        this.points = myPoints.slice();
        this.eval(this.points, distance, threshold);
        //returns promise to be resolved along with the array of nodes
        //which describe where clusters are on the map
        return {
            promise: new Promise(function (resolve) {
                resolve("resolve");
            }),
            zones: this.nodeArray
        };
    };
    //run actual calculations on cluster with points, search distance, and cluster amount threshold
    ZonesProvider.prototype.eval = function (points, distance, threshold) {
        this.nodeArray = [];
        //while there are still points to search for
        while (points.length > 1) {
            var nodes = [];
            var newPoints = [];
            var change = false;
            nodes.push(points.shift());
            //look through all points and find distances
            for (var i = 0; i < points.length; i++) {
                //if distance is below specified value add it to node array and new point array
                if (__WEBPACK_IMPORTED_MODULE_1_geolib___default.a.getDistance({ latitude: nodes[0].lat, longitude: nodes[0].lng }, { latitude: points[i].lat, longitude: points[i].lng }) < distance) {
                    change = true;
                    nodes.push(points.splice(i, 1));
                    newPoints.push(nodes[nodes.length - 1]);
                }
            }
            //while we are still finding new points
            while (change) {
                change = false;
                var temp = [];
                //look through the new points
                for (var i = 0; i < newPoints.length; i++) {
                    //compare them to unmarked & unfound points
                    for (var b = 0; b < points.length; b++) {
                        //if distance is below specified value add it to node array and new point array
                        if (__WEBPACK_IMPORTED_MODULE_1_geolib___default.a.getDistance({ latitude: newPoints[i][0].lat, longitude: newPoints[i][0].lng }, { latitude: points[b].lat, longitude: points[b].lng }) < distance) {
                            change = true;
                            nodes.push(points.splice(b, 1));
                            temp.push(nodes[nodes.length - 1]);
                        }
                    }
                }
                if (change) {
                    newPoints = temp;
                }
            }
            //if all the points we found are enough to be considered a cluster
            if (nodes.length >= threshold) {
                //add the node
                this.nodeArray.push(this.findCenter(nodes));
            }
        }
    };
    //find the center of all the points in the cluster
    ZonesProvider.prototype.findCenter = function (nodes) {
        var lat = 0;
        var lng = 0;
        //var dist = 0;
        //add up their x and y positions
        for (var i = 0; i < nodes.length; i++) {
            if (i == 0) {
                lat += nodes[i].lat;
                lng += nodes[i].lng;
            }
            else {
                lat += nodes[i][0].lat;
                lng += nodes[i][0].lng;
            }
            /*if(i < nodes.length-1){
                var tempDist = geolib.getDistance(
                {latitude: nodes[0].lat, longitude: nodes[0].lng},
                {latitude: nodes[i+1][0].lat, longitude: nodes[i+1][0].lng})
                if(tempDist > dist){
                    dist = tempDist
                }
            }*/
        }
        //and divide it by the number o points
        lat = lat / nodes.length;
        lng = lng / nodes.length;
        return {
            lat: lat,
            lng: lng,
        };
    };
    return ZonesProvider;
}());
ZonesProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ZonesProvider);

//# sourceMappingURL=zones.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_info_user_info__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//vanilla ionic imports




//firebase imports


var ImagesProvider = (function () {
    function ImagesProvider(camera, mediaCapture, file, userInfo) {
        this.camera = camera;
        this.mediaCapture = mediaCapture;
        this.file = file;
        this.userInfo = userInfo;
    }
    //takes image and uploads it to firebase
    ImagesProvider.prototype.uploadToFirebase = function (location) {
        var _this = this;
        //gives the file an original name based on date and time
        var fileName = location + "-" + new Date().getTime() + ".png";
        if (!this.userInfo.isApp) {
            //return promise with image url and key when image is successfully uploaded
            return {
                promise: new Promise(function (resolve, reject) {
                    __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref('/images/').child(location).child(fileName).put(_this.selectedFile).then(function (data) {
                        resolve(data.downloadURL);
                    }).catch(function (e) {
                        reject(e);
                    });
                }),
                refName: fileName
            };
        }
        else {
            //return promise with image url and key when image is successfully uploaded
            return {
                promise: new Promise(function (resolve, reject) {
                    __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref('/images/').child(location).child(fileName).putString(_this.data, 'base64', { contentType: 'image/png' }).then(function (data) {
                        resolve(data.downloadURL);
                    }).catch(function (e) {
                        reject(e);
                    });
                }),
                refName: fileName
            };
        }
    };
    //clears current data on image
    ImagesProvider.prototype.doClear = function () {
        this.data = null;
        this.selectedFile = null;
    };
    //get picture from camera
    ImagesProvider.prototype.doGetCameraImage = function (width, height) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //picture properties
            _this.camera.getPicture({
                quality: 100,
                destinationType: _this.camera.DestinationType.DATA_URL,
                sourceType: _this.camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: _this.camera.EncodingType.PNG,
                targetWidth: width,
                targetHeight: height
            }).then(function (imageData) {
                _this.data = imageData;
                resolve(imageData);
            }, function (_error) {
                reject(_error);
            });
        });
    };
    //get picture from album
    ImagesProvider.prototype.doGetAlbumImage = function (width, height) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //picture properties
            _this.camera.getPicture({
                quality: 100,
                destinationType: _this.camera.DestinationType.DATA_URL,
                sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                allowEdit: true,
                encodingType: _this.camera.EncodingType.PNG,
                targetWidth: width,
                targetHeight: height
            }).then(function (imageData) {
                _this.data = imageData;
                resolve(imageData);
            }, function (_error) {
                reject(_error);
            });
        });
    };
    ImagesProvider.prototype.doGetVideo = function () {
        // var self = this;
        var onSuccess = function (videoData) {
            alert(JSON.stringify(videoData));
            var name = "filename.mp4";
            var path = videoData[0].fullPath + "";
            path = "file://" + path.replace("/private", "");
            //alert(path);
            //alert(self.file.dataDirectory);
            ////
            window.resolveLocalFileSystemURL(path, function (fileEntry) {
                alert("something Else");
                fileEntry.file(function (file) {
                    alert("fileEntry.file");
                    var fileReader = new FileReader();
                    fileReader.onloadend = function (result) {
                        alert("inside onloadend");
                        var arrayBuffer = result.target.result;
                        var blob = new Blob([new Uint8Array(arrayBuffer)], { type: 'video/mp4' });
                        __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref('/videos/').child(name).put(blob).catch(function (e) {
                            alert("Error uploading");
                        });
                    };
                    fileReader.onerror = function (error) {
                        alert("There has been an error");
                    };
                    fileReader.readAsArrayBuffer(file);
                });
            }, function (error) {
                alert("hey we're running an error");
            });
            ////
            //            self.file.readAsArrayBuffer(this.file.dataDirectory, videoData[0].name).then(data => {
            //                alert("something");
            //                // success
            //                console.log(data);
            //
            //                var blob = new Blob([data], {type: "video/mp4"});
            //
            //                console.log(blob);
            //
            //                var uploadTask = firebase.storage().ref('/videos/').child(name).put(blob);
            //
            //                uploadTask.on('state_changed', function(snapshot){
            //                    // Observe state change events such as progress, pause, and resume
            //                    // See below for more detail
            //
            //                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            //                    console.log('Upload is ' + progress + '% done'); 
            //
            //                }, function(error) {
            //                    // Handle unsuccessful uploads
            //                    alert("Error uploading: " + error)
            //                }, function() {
            //                    // Handle successful uploads on complete
            //                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            //                    var downloadURL = uploadTask.snapshot.downloadURL;
            //                    alert("Success! " + downloadURL);
            //                });
            //
            //            }).catch( error => {
            //                // error
            //                alert("Failed to read video file from directory, error.code");
            //            });
        };
        __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* MediaCapture */].captureVideo().then(onSuccess);
    };
    return ImagesProvider;
}());
ImagesProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* MediaCapture */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__user_info_user_info__["a" /* UserInfoProvider */]])
], ImagesProvider);

//# sourceMappingURL=images.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    return RegisterPageModule;
}());
RegisterPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]
        ]
    })
], RegisterPageModule);

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotPageModule = (function () {
    function ForgotPageModule() {
    }
    return ForgotPageModule;
}());
ForgotPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__forgot__["a" /* ForgotPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot__["a" /* ForgotPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__forgot__["a" /* ForgotPage */]
        ]
    })
], ForgotPageModule);

//# sourceMappingURL=forgot.module.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditProfilePageModule = (function () {
    function EditProfilePageModule() {
    }
    return EditProfilePageModule;
}());
EditProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]
        ]
    })
], EditProfilePageModule);

//# sourceMappingURL=edit-profile.module.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    return ProfilePageModule;
}());
ProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]
        ]
    })
], ProfilePageModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopRatedPageModule", function() { return TopRatedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__top_rated__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TopRatedPageModule = (function () {
    function TopRatedPageModule() {
    }
    return TopRatedPageModule;
}());
TopRatedPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__top_rated__["a" /* TopRatedPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__top_rated__["a" /* TopRatedPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__top_rated__["a" /* TopRatedPage */]
        ]
    })
], TopRatedPageModule);

//# sourceMappingURL=top-rated.module.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//vanilla ionic import

//firebase import


var RatingProvider = (function () {
    function RatingProvider(afAuth) {
        this.afAuth = afAuth;
        this.likes = 0;
        this.posts = 0;
        this.postLikes = 0;
        this.resolves = 0;
        this.complete = 0;
    }
    RatingProvider.prototype.calculateRating = function (callback, scope) {
        var _this = this;
        this.scope = scope;
        this.callback = callback;
        if (this.afAuth.auth.currentUser) {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('/userRating/').once('value').then(function (snapshot) {
                if (snapshot.hasChild(_this.afAuth.auth.currentUser.uid))
                    _this.runRating();
                else {
                    _this.callback.call(scope);
                }
            });
        }
        else {
            this.callback.call(scope);
        }
    };
    RatingProvider.prototype.runRating = function () {
        var _this = this;
        var self = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('/userRating/').child(this.afAuth.auth.currentUser.uid).once('value').then(function (snapshot) {
            if (snapshot.hasChild('likes')) {
                _this.likes = snapshot.val().likes;
            }
            if (snapshot.hasChild('posts')) {
                _this.posts = snapshot.val().posts;
            }
            if (snapshot.hasChild('postLikes')) {
                _this.postLikes = snapshot.val().postLikes;
            }
            if (snapshot.hasChild('resolves')) {
                _this.resolves = snapshot.val().resolves;
            }
            if (snapshot.hasChild('complete')) {
                _this.complete = snapshot.val().complete;
            }
        }).then(function (_) {
            self.saveRating();
        });
    };
    RatingProvider.prototype.saveRating = function () {
        var _this = this;
        var self = this;
        var rating = (this.likes * .5) + (this.posts * 2) + (this.postLikes) + (this.resolves * 3) + (this.complete);
        if (rating > 0)
            rating = Math.sqrt(rating);
        else {
            rating = 0;
        }
        //rating = 8.589348932;
        rating = rating.toFixed(2);
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('/users/').child(this.afAuth.auth.currentUser.uid).child('rating').set(rating)
            .then(function (_) {
            self.callback.call(_this.scope);
        });
    };
    return RatingProvider;
}());
RatingProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
], RatingProvider);

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    return AboutPageModule;
}());
AboutPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
        ],
    })
], AboutPageModule);

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    return SettingsPageModule;
}());
SettingsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]
        ]
    })
], SettingsPageModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageModule", function() { return FilterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilterPageModule = (function () {
    function FilterPageModule() {
    }
    return FilterPageModule;
}());
FilterPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */]
        ]
    })
], FilterPageModule);

//# sourceMappingURL=filter.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPageModule", function() { return ReportsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reports__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReportsPageModule = (function () {
    function ReportsPageModule() {
    }
    return ReportsPageModule;
}());
ReportsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__reports__["a" /* ReportsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reports__["a" /* ReportsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__reports__["a" /* ReportsPage */]
        ]
    })
], ReportsPageModule);

//# sourceMappingURL=reports.module.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationsPageModule = (function () {
    function NotificationsPageModule() {
    }
    return NotificationsPageModule;
}());
NotificationsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */]
        ]
    })
], NotificationsPageModule);

//# sourceMappingURL=notifications.module.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPageModule", function() { return AddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddPageModule = (function () {
    function AddPageModule() {
    }
    return AddPageModule;
}());
AddPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__add__["a" /* AddPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add__["a" /* AddPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__add__["a" /* AddPage */]
        ]
    })
], AddPageModule);

//# sourceMappingURL=add.module.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_images_images__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_click_click__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//vanilla ionic imports


//firebase imports



//provider imports



var AddPage = (function () {
    function AddPage(navCtrl, navParams, viewCtrl, modalCtrl, loadingCtrl, alertCtrl, afAuth, afDB, images, translate, click) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.afDB = afDB;
        this.images = images;
        this.translate = translate;
        this.click = click;
        this.type = '';
        this.dataSet = false;
        this.desc = "";
        this.url = "";
        this.refName = "";
        this.show = false;
        this.error = "";
        this.imageData = "";
        //clear any images from the images provider
        this.images.doClear();
    }
    AddPage.prototype.ionViewDidLoad = function () {
        this.data = this.navParams.get('type');
        this.pos = this.navParams.get('pos');
        var myType = "";
        myType += this.data;
        //translate type
        switch (myType) {
            case 'bugs':
                this.type = this.translate.text.other.bug;
                break;
            case 'building':
                this.type = this.translate.text.other.building;
                break;
            case 'trash':
                this.type = this.translate.text.other.trash;
                break;
            case 'pest':
                this.type = this.translate.text.other.pest;
                break;
            case 'pest':
                this.type = this.translate.text.other.cnd;
                break;
        }
    };
    //get image from camera and set dataSet to true
    AddPage.prototype.cameraRequest = function () {
        var _this = this;
        this.click.click('addCamera');
        var promise = this.images.doGetCameraImage(600, 600);
        promise.then(function (res) {
            _this.imageData = "data:image/jpg;base64," + res;
            _this.preview.nativeElement.setAttribute('src', _this.imageData);
            _this.dataSet = true;
        }).catch(function (e) {
        });
    };
    //get image from user album and set dataSet to true
    AddPage.prototype.albumRequest = function () {
        var _this = this;
        this.click.click('addAlbum');
        var promise = this.images.doGetAlbumImage(600, 600);
        promise.then(function (res) {
            _this.imageData = "data:image/jpg;base64," + res;
            _this.preview.nativeElement.setAttribute('src', _this.imageData);
            _this.dataSet = true;
        }).catch(function (e) {
        });
    };
    AddPage.prototype.videoRequest = function () {
        this.click.click('addVideo');
        this.images.doGetVideo();
    };
    //dismiss this modal
    AddPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddPage.prototype.descriptionClick = function () {
        this.click.click('addDescription');
    };
    //try to submit report
    AddPage.prototype.submit = function () {
        var _this = this;
        this.click.click('addSubmit');
        var loader = this.loadingCtrl.create({
            content: this.translate.text.add.submitting
        });
        //check to make sure post has sufficient data
        if (this.desc.length > 0) {
            if (!this.dataSet) {
                var imageAlert = this.alertCtrl.create({
                    title: this.translate.text.add.imageAlertTitle,
                    subTitle: this.translate.text.add.imageAlertSubTitle,
                    buttons: [{
                            text: this.translate.text.add.submit,
                            handler: function () {
                                loader.present();
                                var self = _this;
                                __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('users/').child(_this.afAuth.auth.currentUser.uid + "").once("value", function (snapshot) {
                                    //records how many posts the user has submitted
                                    self.afDB.object('users/' + self.afAuth.auth.currentUser.uid).update({
                                        posts: snapshot.val().posts + 1
                                    }).then(function (_) {
                                        //dismiss modal with info about post
                                        loader.dismiss();
                                        self.viewCtrl.dismiss({
                                            desc: self.desc,
                                            type: self.data,
                                            show: self.show,
                                            name: self.afAuth.auth.currentUser.displayName,
                                            id: self.afAuth.auth.currentUser.uid
                                        });
                                    }).catch(function (e) {
                                        loader.dismiss();
                                        alert(e.message);
                                    });
                                });
                            }
                        },
                        {
                            text: this.translate.text.add.cancel,
                        }]
                });
                imageAlert.present();
                //if the user submitted a photo with their post
            }
            else {
                loader.present();
                var promiseObject = this.images.uploadToFirebase("posts");
                promiseObject.promise.then(function (res) {
                    _this.url = res;
                    _this.refName = promiseObject.refName;
                    var self = _this;
                    __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('users/').child(_this.afAuth.auth.currentUser.uid + "").once("value", function (snapshot) {
                        //records how many posts the user has submitted
                        self.afDB.object('users/' + self.afAuth.auth.currentUser.uid).update({
                            posts: snapshot.val().posts + 1
                        }).then(function (_) {
                            loader.dismiss();
                            //dismiss modal with info on post
                            self.viewCtrl.dismiss({
                                desc: self.desc,
                                type: self.data,
                                show: self.show,
                                name: self.afAuth.auth.currentUser.displayName,
                                id: self.afAuth.auth.currentUser.uid,
                                url: self.url,
                                refName: self.refName
                            });
                        }).catch(function (e) {
                            alert(e.message);
                        });
                    });
                }).catch(function (e) {
                    loader.dismiss();
                    alert("Error: " + e.message);
                });
            }
        }
        else {
            this.error = this.translate.text.add.error;
        }
    };
    return AddPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('preview'),
    __metadata("design:type", Object)
], AddPage.prototype, "preview", void 0);
AddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\add\add.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n      <ion-grid class="ionic-title">\n\n        <ion-row>\n\n            <ion-col text-left>\n\n            </ion-col>\n\n            <ion-col col-auto class="title">\n\n                {{type}}\n\n            </ion-col>\n\n            <ion-col text-right>\n\n                <ion-buttons end>\n\n                <button ion-button clear style="color: white;" (click)="dismiss()">X</button>\n\n              </ion-buttons>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-color: #fcf80c">\n\n    <ion-item [class.red-glow]="desc.length < 1" style="margin-bottom: 15px; padding-bottom: 10px; padding-right: 5px">\n\n        <ion-label floating [class.red]="desc.length < 1">{{translate.text.add.describe}}</ion-label>\n\n        <ion-input type="text" clearInput [(ngModel)]="desc" (click)="descriptionClick()" autocorrect="on"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-grid no-padding>\n\n            <ion-row>\n\n                <ion-col text-center no-padding [class.no-height]="imageData.length < 1">\n\n                    <img width="100px" #preview />\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-6 no-padding>\n\n                    <button ion-button block clear style="color: black;" (click)="cameraRequest()">\n\n                        <img src="assets/new/camera.png" style="width: 55px; padding-right: 10px;" alt="Camera" />\n\n                        {{translate.text.add.openCam}}</button>\n\n                </ion-col>\n\n                <ion-col col-6 no-padding>\n\n                    <button ion-button block clear style="color: black;" (click)="albumRequest()">\n\n                        <img src="assets/new/album.png" style="width: 55px; padding-right: 10px;" alt="Album" />\n\n                        {{translate.text.add.openAlb}}</button>\n\n                </ion-col>\n\n            </ion-row>\n\n            <!--\n\n            <ion-row>\n\n                <ion-col col-6 no-padding>\n\n                    <button ion-button block clear style="color: black;" (click)="videoRequest()">\n\n                        <img src="assets/new/camera.png" style="width: 40px; padding-right: 10px;" alt="Camera" />\n\n                        Record Video</button>\n\n                </ion-col>\n\n            </ion-row>\n\n        -->\n\n        </ion-grid>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>{{translate.text.add.username}}</ion-label>\n\n        <ion-checkbox [(ngModel)]="show"></ion-checkbox>\n\n    </ion-item>\n\n    <button ion-button block (click)="submit()" class="submit-button" *ngIf="desc.length > 0">{{translate.text.add.submit}}</button>\n\n    <p class="error">{{error}}</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\add\add.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_5__providers_images_images__["a" /* ImagesProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_translator_translator__["a" /* TranslatorProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_click_click__["a" /* ClickProvider */]])
], AddPage);

//# sourceMappingURL=add.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPostPageModule", function() { return EditPostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_post__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditPostPageModule = (function () {
    function EditPostPageModule() {
    }
    return EditPostPageModule;
}());
EditPostPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__edit_post__["a" /* EditPostPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_post__["a" /* EditPostPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__edit_post__["a" /* EditPostPage */]
        ]
    })
], EditPostPageModule);

//# sourceMappingURL=edit-post.module.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindowPageModule", function() { return InfoWindowPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_window__ = __webpack_require__(492);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InfoWindowPageModule = (function () {
    function InfoWindowPageModule() {
    }
    return InfoWindowPageModule;
}());
InfoWindowPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__info_window__["a" /* InfoWindowPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__info_window__["a" /* InfoWindowPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__info_window__["a" /* InfoWindowPage */]
        ]
    })
], InfoWindowPageModule);

//# sourceMappingURL=info-window.module.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoWindowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_post_edit_post__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_images_images__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_click_click__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//vanilla ionic imports


//image popup viewing import

//page imports

//provider imports



//firebase imports


var InfoWindowPage = (function () {
    function InfoWindowPage(navCtrl, navParams, alertCtrl, viewCtrl, afAuth, images, loadingCtrl, ngZone, translate, imageViewerCtrl, modalCtrl, click) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.afAuth = afAuth;
        this.images = images;
        this.loadingCtrl = loadingCtrl;
        this.ngZone = ngZone;
        this.translate = translate;
        this.imageViewerCtrl = imageViewerCtrl;
        this.modalCtrl = modalCtrl;
        this.click = click;
        this.imageData = "";
        this.section = "info";
        //info on report
        this.data = {
            description: "",
            title: "",
            url: "",
            name: "",
            show: false,
            refName: "",
            key: ""
        };
        this.type = '';
        this.status = '';
        this.error = "";
        this.resolves = [];
        this.dataSet = false;
        this.info = "";
        this.images.doClear();
    }
    InfoWindowPage.prototype.ionViewDidLoad = function () {
        this.data = this.navParams.get('data');
        //translate type
        switch (this.data.type) {
            case 'bugs':
                this.type = this.translate.text.other.bug;
                break;
            case 'building':
                this.type = this.translate.text.other.building;
                break;
            case 'trash':
                this.type = this.translate.text.other.trash;
                break;
            case 'pest':
                this.type = this.translate.text.other.pest;
                break;
            case 'cnd':
                this.type = this.translate.text.other.cnd;
                break;
        }
        var self = this;
        //grab all of resolve images from db
        __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref('/resolves/').child(this.data.key).once('value').then(function (snapshot) {
            snapshot.forEach(function (child) {
                self.resolves.push(child.val());
            });
        });
        this.checkStatus();
    };
    InfoWindowPage.prototype.openEdit = function () {
        var _this = this;
        var editModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__edit_post_edit_post__["a" /* EditPostPage */], { data: this.data });
        editModal.onDidDismiss(function (data) {
            if (data) {
                _this.dismiss(true);
            }
        });
        editModal.present();
    };
    //show pop up of image when image is clicked on
    InfoWindowPage.prototype.presentImage = function (myImage) {
        var imageViewer = this.imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    //alert pops up before user deletes data
    InfoWindowPage.prototype.showPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: this.translate.text.infoWindow.deleteAlertTitle,
            subTitle: this.translate.text.infoWindow.deleteAlertSubTitle,
            buttons: [{
                    text: this.translate.text.infoWindow.delete,
                    handler: function (data) {
                        _this.deleteData();
                    }
                }, this.translate.text.infoWindow.cancel]
        });
        alert.present();
    };
    //if selected, this post and all data associated with it will be deleted
    InfoWindowPage.prototype.deleteData = function () {
        //checks to see if there are any images that need to be deleted
        var self = this;
        //check if there is an image
        __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref('/positions/').child(this.data.key).once('value').then(function (snapshot) {
            if (snapshot.hasChild('url')) {
                //if image delete image then delete rest of report
                __WEBPACK_IMPORTED_MODULE_7_firebase__["storage"]().ref('/images/').child(self.data.refName).delete().then(function () {
                    self.deleteReport();
                });
                //if no image delete rest of report
            }
            else {
                self.deleteReport();
            }
        });
    };
    //helper function for deleteDatat()
    InfoWindowPage.prototype.deleteReport = function () {
        var _this = this;
        this.click.click('infoWindowDelete');
        var self = this;
        //delete each "resolve" image from db
        __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref('/resolves/').child(this.data.key).once('value').then(function (snapshot) {
            //loop through resolve images and delete them from storage
            snapshot.forEach(function (item) {
                __WEBPACK_IMPORTED_MODULE_7_firebase__["storage"]().ref('/images/').child(item.val().refName).delete();
            });
        }).then(function () {
            //delete the directory for resolve on this report
            __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref('/resolves/').child(_this.data.key).remove().then(function () {
                __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref('/messages/').child(_this.data.key).remove();
            }).then(function () {
                //update post #
                var userRating = __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref('/userRating/').child(self.afAuth.auth.currentUser.uid);
                userRating.once('value', function (snap) {
                    userRating.child('posts').set(snap.val().posts - 1);
                }).then(function (_) {
                    //delete root report
                    __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref('/positions/').child(_this.data.key).remove().then(function () {
                        _this.dismiss(true);
                    });
                });
            });
        });
    };
    //dismiss this modal
    InfoWindowPage.prototype.dismiss = function (data) {
        if (data) {
            this.viewCtrl.dismiss(data);
        }
        else {
            this.viewCtrl.dismiss();
        }
    };
    //check if the current user is the OP
    InfoWindowPage.prototype.checkLogin = function () {
        if (this.afAuth.auth.currentUser) {
            if (this.afAuth.auth.currentUser.uid == this.data.id)
                return true;
        }
        return false;
    };
    //check if user is logged on
    InfoWindowPage.prototype.checkLoggedOn = function () {
        if (this.afAuth.auth.currentUser)
            return true;
        return false;
    };
    //submit a resolved image
    InfoWindowPage.prototype.submit = function () {
        var _this = this;
        this.click.click('infoWindowSubmitResolution');
        var self = this;
        var loader = this.loadingCtrl.create({
            content: this.translate.text.infoWindow.submitting
        });
        var successAlert = this.alertCtrl.create({
            title: this.translate.text.infoWindow.submitted,
            buttons: [{
                    text: this.translate.text.infoWindow.ok,
                    handler: function () {
                        _this.dismiss(false);
                    }
                }]
        });
        //makes sure that an image was included in resolve post
        if (this.dataSet) {
            loader.present();
            //upload image
            var promiseObject = this.images.uploadToFirebase("posts");
            promiseObject.promise.then(function (res) {
                var url = res;
                var refName = promiseObject.refName;
                var data = { url: url, refName: refName, info: _this.info };
                //get link to resolution info
                var key = __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref('/resolves/').child(_this.data.key).push(data).key;
                //link resolution info to actual report
                __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref('/positions/').child(_this.data.key).child('resolves').push(key).then(function (_) {
                    //update # of resolves
                    var userRating = __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref('/userRating/').child(self.afAuth.auth.currentUser.uid);
                    userRating.once('value', function (snap) {
                        if (!snap.hasChild('resolves')) {
                            userRating.child('resolves').set(1);
                        }
                        else {
                            userRating.child('resolves').set(snap.val().resolves + 1);
                        }
                    });
                    loader.dismiss();
                    successAlert.present();
                }).catch(function (e) {
                    loader.dismiss();
                    alert("Error: " + e.message);
                });
            }).catch(function (e) {
                loader.dismiss();
                alert("Error: " + e.message);
            });
        }
        else {
            this.error = this.translate.text.infoWindow.error;
        }
    };
    //request photo from user's camera
    InfoWindowPage.prototype.cameraRequest = function () {
        var _this = this;
        this.click.click('infoWindowCamera');
        var promise = this.images.doGetCameraImage(600, 600);
        promise.then(function (res) {
            _this.imageData = "data:image/jpg;base64," + res;
            _this.preview.nativeElement.setAttribute('src', _this.imageData);
            _this.dataSet = true;
        }).catch(function (e) {
        });
    };
    //request photo from user's album
    InfoWindowPage.prototype.albumRequest = function () {
        var _this = this;
        this.click.click('infoWindowAlbum');
        var promise = this.images.doGetAlbumImage(600, 600);
        promise.then(function (res) {
            _this.imageData = "data:image/jpg;base64," + res;
            _this.preview.nativeElement.setAttribute('src', _this.imageData);
            _this.dataSet = true;
        }).catch(function (e) {
        });
    };
    //sliding for resolved images
    InfoWindowPage.prototype.slideLeft = function () {
        this.click.click('infoWindowLeft');
        this.slide.slidePrev(300, null);
    };
    InfoWindowPage.prototype.slideRight = function () {
        this.click.click('infoWindowRight');
        this.slide.slideNext(300, null);
    };
    InfoWindowPage.prototype.infoClick = function () {
        this.click.click('infoWindowResolveInfo');
    };
    InfoWindowPage.prototype.markComplete = function () {
        var _this = this;
        this.click.click('infoWindowMarkComplete');
        var self = this;
        var loader = this.loadingCtrl.create({
            content: this.translate.text.infoWindow.marking
        });
        loader.present();
        //alert pops up after successful submission
        var alert = this.alertCtrl.create({
            title: this.translate.text.infoWindow.marked,
            buttons: [{
                    text: this.translate.text.infoWindow.ok,
                    handler: function () {
                        //dismiss this modal to refresh the screen
                        _this.dismiss(false);
                    }
                }]
        });
        //mark as complete on firebase
        __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref('/positions/').child(this.data.key).child('status').set('Complete').then(function (_) {
            //update # of completed posts
            var userRating = __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref('/userRating/').child(self.afAuth.auth.currentUser.uid);
            userRating.once('value', function (snap) {
                if (!snap.hasChild('complete')) {
                    userRating.child('complete').set(1);
                }
                else {
                    userRating.child('complete').set(snap.val().complete + 1);
                }
            });
            loader.dismiss();
            alert.present();
        }).catch(function (_) {
            loader.dismiss();
        });
    };
    //get the current status of the report
    InfoWindowPage.prototype.checkStatus = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref('/positions/').child(this.data.key);
        ref.once('value', function (snapshot) {
            var status = snapshot.val().status;
            //translate status
            switch (status) {
                case 'Complete':
                    _this.status = _this.translate.text.other.complete;
                    break;
                case 'To Do':
                    _this.status = _this.translate.text.other.todo;
                    break;
            }
        });
    };
    return InfoWindowPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */])
], InfoWindowPage.prototype, "slide", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('preview'),
    __metadata("design:type", Object)
], InfoWindowPage.prototype, "preview", void 0);
InfoWindowPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-info-window',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\info-window\info-window.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-grid class="ionic-title">\n\n        <ion-row>\n\n            <ion-col text-left>\n\n                <ion-buttons start>\n\n                    <button ion-button clear (click)="dismiss()" style="color: white">X</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n            <ion-col col-auto class="title">\n\n                {{type}}\n\n            </ion-col>\n\n            <ion-col text-right>\n\n                <ion-buttons end *ngIf="checkLogin()">\n\n                    <button ion-button clear item-end class=\'nav-edit\' (click)="openEdit()">\n\n                        <img class="nav-edit" src="assets/images/buttons/edit.png" alt="nav"/>\n\n                    </button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n  </ion-navbar>\n\n    <ion-toolbar *ngIf="checkLoggedOn()">\n\n        <ion-segment [(ngModel)]="section" color="secondary">\n\n            <ion-segment-button value="info">\n\n                {{translate.text.infoWindow.info}}\n\n            </ion-segment-button>\n\n            <ion-segment-button value="resolve">\n\n                {{translate.text.infoWindow.resolve}}\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div [(ngSwitch)]="section">\n\n        <div *ngSwitchCase="\'info\'">\n\n            <ion-slides>\n\n                <ion-slide *ngFor="let resolve of resolves">\n\n                    <img src=\'{{resolve.url}}\' alt="Resolve Image" #thisImage (click)="presentImage(thisImage)" />\n\n                    <p>{{resolve.info}}</p>\n\n                </ion-slide>\n\n            </ion-slides>\n\n            <ion-grid *ngIf="resolves.length > 0">\n\n                <ion-row>\n\n                    <ion-col>\n\n                        <button ion-button clear full (click)="slideLeft()">\n\n                            <ion-icon name="arrow-back"></ion-icon>\n\n                        </button>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <button ion-button clear full (click)="slideRight()">\n\n                            <ion-icon name="arrow-forward"></ion-icon>\n\n                        </button>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row *ngIf="status != \'Complete\'">\n\n                    <ion-col>\n\n                        <h2 style="color: orange" text-center>{{translate.text.infoWindow.wait}}</h2>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <h2>{{data.description}}</h2>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <div text-center *ngIf="data.url">\n\n                        <img [src]="data.url" #thisImage (click)="presentImage(thisImage)" />\n\n                    </div>\n\n                    <p *ngIf="data.show">{{translate.text.infoWindow.author}}{{data.name}}</p>\n\n                    <p *ngIf="!data.show">{{translate.text.infoWindow.noAuthor}}<p>\n\n                    <p>{{translate.text.infoWindow.status}}{{status}}</p>\n\n                </ion-card-content>\n\n            </ion-card>\n\n            <ion-grid *ngIf="checkLogin()">\n\n                <ion-row>\n\n                    <ion-col col-6>\n\n                        <button ion-button color="danger" (click)="showPrompt()" block>{{translate.text.infoWindow.delete}}</button>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <button ion-button color="secondary" block (click)="markComplete()" *ngIf="status != \'Complete\'">{{translate.text.infoWindow.mark}}</button>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n        </div>\n\n        <div *ngSwitchCase="\'resolve\'">\n\n            <ion-item>\n\n                <ion-label floating>{{translate.text.infoWindow.note}}</ion-label>\n\n                <ion-input type=\'text\' [(ngModel)]="info" (click)="infoClick()"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                {{translate.text.infoWindow.photo}}\n\n                <ion-grid no-padding>\n\n                    <ion-row>\n\n                        <ion-col text-center no-padding [class.no-height]="imageData.length < 1">\n\n                            <img width="100px" #preview />\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-col col-6 no-padding>\n\n                            <button ion-button block clear style="color: black;" (click)="cameraRequest()">\n\n                                <img src="assets/new/camera.png" style="width: 55px; padding-right: 10px;" alt="Camera" />\n\n                                {{translate.text.infoWindow.openCam}}</button>\n\n                        </ion-col>\n\n                        <ion-col col-6 no-padding>\n\n                            <button ion-button block clear style="color: black;" (click)="albumRequest()">\n\n                                <img src="assets/new/album.png" style="width: 55px; padding-right: 10px;" alt="Album" />\n\n                                {{translate.text.infoWindow.openAlb}}</button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <button ion-button (click)="submit()">{{translate.text.infoWindow.resolution}}</button>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\info-window\info-window.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4__providers_images_images__["a" /* ImagesProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_5__providers_translator_translator__["a" /* TranslatorProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_click_click__["a" /* ClickProvider */]])
], InfoWindowPage);

//# sourceMappingURL=info-window.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPageModule", function() { return ConfirmationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmation__ = __webpack_require__(494);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmationPageModule = (function () {
    function ConfirmationPageModule() {
    }
    return ConfirmationPageModule;
}());
ConfirmationPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__confirmation__["a" /* ConfirmationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirmation__["a" /* ConfirmationPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__confirmation__["a" /* ConfirmationPage */]
        ]
    })
], ConfirmationPageModule);

//# sourceMappingURL=confirmation.module.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sms__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_click_click__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//vanilla ionic imports


//social media sharing import

//image popup viewing import

//sms messaging import

//provider imports


var ConfirmationPage = (function () {
    function ConfirmationPage(navCtrl, navParams, viewCtrl, socialSharing, translate, imageViewerCtrl, sms, click) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.socialSharing = socialSharing;
        this.translate = translate;
        this.imageViewerCtrl = imageViewerCtrl;
        this.sms = sms;
        this.click = click;
    }
    ConfirmationPage.prototype.ionViewDidLoad = function () {
        //pulls in all data from modal.present()
        var myType = this.navParams.get('type');
        this.description = this.navParams.get('description');
        this.name = this.navParams.get('name');
        if (this.navParams.get('url')) {
            this.picture = this.navParams.get('url');
        }
        this.pos = this.navParams.get('pos');
        this.show = this.navParams.get('show');
        //translates type
        switch (myType) {
            case 'bugs':
                this.type = this.translate.text.other.bug;
                break;
            case 'building':
                this.type = this.translate.text.other.building;
                break;
            case 'trash':
                this.type = this.translate.text.other.trash;
                break;
            case 'pest':
                this.type = this.translate.text.other.pest;
                break;
            case 'cnd':
                this.type = this.translate.text.other.cnd;
                break;
        }
    };
    //dismiss this modal
    ConfirmationPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ConfirmationPage.prototype.shareTwitter = function () {
        this.click.click('confirmationTwitter');
        this.socialSharing.shareViaTwitter(this.description, this.picture, null);
    };
    ConfirmationPage.prototype.shareFacebook = function () {
        this.click.click('confirmationFacebook');
        this.socialSharing.shareViaFacebook(this.description, this.picture, null);
    };
    ConfirmationPage.prototype.shareWhatsapp = function () {
        this.click.click('confirmationWhatsapp');
        this.socialSharing.shareViaWhatsApp(this.description, this.picture, null);
    };
    ConfirmationPage.prototype.shareSMS = function () {
        this.click.click('confirmationSMS');
        this.sms.send('15859690983', "SMS is working!").then(function () {
            alert("it worked");
        }).catch(function (error) {
            alert(error);
        });
    };
    //pop up of image when image is clicked on
    ConfirmationPage.prototype.presentImage = function (image) {
        this.click.click('confirmationPresentImage');
        var imageViewer = this.imageViewerCtrl.create(image);
        imageViewer.present();
    };
    //whether or not to display user name
    ConfirmationPage.prototype.showName = function () {
        if (this.show)
            return true;
        return false;
    };
    return ConfirmationPage;
}());
ConfirmationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-confirmation',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\confirmation\confirmation.html"*/'<ion-content padding>\n\n    <h3 text-center style="color: #3fbc05; margin-top: 50px;" padding-bottom>{{translate.text.confirmation.success}}</h3>\n\n    <ion-card padding>\n\n        <h2>{{translate.text.confirmation.report}}</h2>\n\n        <ion-item text-wrap class="report-item">\n\n            <h4>{{translate.text.confirmation.type}}</h4>\n\n            <p>{{type}}</p>\n\n        </ion-item>\n\n        <ion-item text-wrap class="report-item">\n\n            <h4>{{translate.text.confirmation.description}}</h4>\n\n            <p>{{description}}</p>\n\n        </ion-item>\n\n        <ion-item text-wrap class="report-item">\n\n            <h4 *ngIf="showName()">{{translate.text.confirmation.viewable}}</h4>\n\n            <h4 *ngIf="!showName()">{{translate.text.confirmation.notViewable}}</h4>\n\n        </ion-item>\n\n        <ion-item text-wrap class="report-item" *ngIf="picture">\n\n            <h4>{{translate.text.confirmation.pic}}</h4>\n\n            <img [src]="picture" alt="Your Photo" #thisImage (click)="presentImage(thisImage)"/>\n\n        </ion-item>\n\n    </ion-card>\n\n    <div text-center>\n\n        <button ion-button (click)="dismiss()">{{translate.text.confirmation.map}}</button>\n\n    </div>\n\n    <h2 style="color: #3fbc05" >{{translate.text.confirmation.share}}</h2>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col text-center>\n\n                <button ion-button icon-only clear (click)=\'shareTwitter()\'>\n\n                    <ion-icon name="logo-twitter" style="color: #00aced; font-size: 24pt"></ion-icon>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col text-center>\n\n                <button ion-button icon-only clear (click)=\'shareFacebook()\'>\n\n                    <ion-icon name="logo-facebook" style="color: #3b5998; font-size: 24pt"></ion-icon>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col text-center>\n\n                <button ion-button icon-only clear (click)=\'shareWhatsapp()\'>\n\n                    <ion-icon name="logo-whatsapp" style="color: #34af23; font-size: 24pt"></ion-icon>\n\n                </button>\n\n            </ion-col>\n\n            <!--\n\n            <ion-col text-center>\n\n                <button ion-button icon-only clear (click)=\'shareSMS()\'>\n\n                    <ion-icon name="text" style="color: #34af23; font-size: 24pt"></ion-icon>\n\n                </button>\n\n            </ion-col>\n\n-->\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\confirmation\confirmation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_5__providers_translator_translator__["a" /* TranslatorProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_6__providers_click_click__["a" /* ClickProvider */]])
], ConfirmationPage);

//# sourceMappingURL=confirmation.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionPageModule", function() { return DiscussionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discussion__ = __webpack_require__(497);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DiscussionPageModule = (function () {
    function DiscussionPageModule() {
    }
    return DiscussionPageModule;
}());
DiscussionPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__discussion__["a" /* DiscussionPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__discussion__["a" /* DiscussionPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__discussion__["a" /* DiscussionPage */]
        ]
    })
], DiscussionPageModule);

//# sourceMappingURL=discussion.module.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscussionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_click_click__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//vanilla ionic imports


//provider imports


//firebase imports


var DiscussionPage = (function () {
    function DiscussionPage(navCtrl, navParams, viewCtrl, afAuth, translate, ngZone, click) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.afAuth = afAuth;
        this.translate = translate;
        this.ngZone = ngZone;
        this.click = click;
        this.messages = [];
        this.myId = this.afAuth.auth.currentUser.uid;
    }
    DiscussionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //scroll to bottom of page
        var dimensions = this.content.getContentDimensions();
        this.content.scrollTo(0, dimensions.scrollHeight + 100, 100);
        //the id of where the messages are stored in the db
        this.id = this.navParams.get('id');
        var self = this;
        //fetch all messages
        __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('/messages/').child(this.id).on('value', function (snapshots) {
            dimensions = _this.content.getContentDimensions();
            _this.content.scrollTo(0, dimensions.scrollHeight + 100, 100);
            self.messages = [];
            //for every message found, add to array
            for (var snap in snapshots.val()) {
                if (snapshots.hasOwnProperty(snap))
                    continue;
                console.log(snapshots.val()[snap]);
                self.messages.push(snapshots.val()[snap]);
            }
        });
    };
    //scrolls to bottom of screen
    DiscussionPage.prototype.ionViewWillEnter = function () {
        var dimensions = this.content.getContentDimensions();
        this.content.scrollTo(0, dimensions.scrollHeight + 100, 100);
    };
    DiscussionPage.prototype.checkUid = function (id) {
        if (this.myId == id)
            return true;
        return false;
    };
    DiscussionPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    //submit a message
    DiscussionPage.prototype.submit = function () {
        var _this = this;
        this.click.click('discussionSubmit');
        if (this.myText.trim().length < 1)
            return;
        var data = {
            name: this.afAuth.auth.currentUser.displayName,
            message: this.myText,
            id: this.afAuth.auth.currentUser.uid
        };
        //record messsage on firebase and format screen to fit new image
        __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('/messages/').child(this.id).push(data).then(function (res) {
            _this.myText = "";
            var el = _this.msg.nativeElement;
            el.style.cssText = 'height:auto; padding:0';
            el.style.cssText = 'height:' + (el.scrollHeight + 4) + 'px';
        });
    };
    //input box autoresizing
    DiscussionPage.prototype.resize = function () {
        var _this = this;
        this.ngZone.run(function () {
            var el = _this.msg.nativeElement;
            el.style.cssText = 'height:auto; padding:0;';
            el.style.cssText = 'height:' + (el.scrollHeight + 4) + 'px';
        });
    };
    DiscussionPage.prototype.textClick = function () {
        this.click.click('discussionMessage');
    };
    return DiscussionPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('msg'),
    __metadata("design:type", Object)
], DiscussionPage.prototype, "msg", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
], DiscussionPage.prototype, "content", void 0);
DiscussionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-discussion',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\discussion\discussion.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-grid class="ionic-title">\n\n            <ion-row>\n\n                <ion-col text-left>\n\n                </ion-col>\n\n                <ion-col col-auto class="title">\n\n                    {{translate.text.discussion.discussion}}\n\n                </ion-col>\n\n                <ion-col text-right>\n\n                    <ion-buttons end>\n\n                        <button ion-button clear style="color: white;" (click)="dismiss()">X</button>\n\n                    </ion-buttons>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding-bottom>\n\n    <div class="messages">\n\n        <div *ngFor="let message of messages">\n\n            <div class="message">\n\n                <p [class.own]="checkUid(message.id)" [class.other]="!checkUid(message.id)">{{message.message}}</p>\n\n            </div>\n\n            <div>\n\n                <p class="name" *ngIf="!checkUid(message.id)">{{message.name}}</p>\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <div class="chat">\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <div>\n\n                        <textarea #msg rows="1" (keyup)="resize()" [(ngModel)]="myText" placeholder="Aa" (click)="textClick()"></textarea>\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col text-center col-auto>\n\n                    <button ion-button clear icon-only (click)="submit()">\n\n                        <ion-icon name="send"></ion-icon>\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\discussion\discussion.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__providers_translator_translator__["a" /* TranslatorProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_3__providers_click_click__["a" /* ClickProvider */]])
], DiscussionPage);

//# sourceMappingURL=discussion.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(499);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reports_reports__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_info_user_info__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_click_click__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//vanilla ionic import


//import pages


//import providers



//firebase import

//declare var FCMPlugin;
var HomePage = (function () {
    function HomePage(navCtrl, navParams, translate, userInfo, menuCtrl, afAuth, click) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.userInfo = userInfo;
        this.menuCtrl = menuCtrl;
        this.afAuth = afAuth;
        this.click = click;
        /*  this.tokenSetup().then(token => {
              this.storeToken(token);
          });*/
    }
    /*ionViewDidLoad() {
        FCMPlugin.onNotification(function(data){
            if(data.wasTapped){
              //Notification was received on device tray and tapped by the user.
              alert( JSON.stringify(data) );
            }else{
              //Notification was received in foreground. Maybe the user needs to be notified.
              alert( JSON.stringify(data) );
            }
        });
        FCMPlugin.onTokenRefresh(function(token){
            alert( token );
        });
    }
    tokenSetup(){
        var promise = new Promise((resolve,reject) => {
            FCMPlugin.getToken(function(token){
                resolve(token);
            }, error => {
                reject(error);
            });
        });
        return promise;
    }
    storeToken(token){
        firebase.database().ref('/pushTokens/').push({
            id: this.afAuth.auth.currentUser.uid,
            devToken: token
        });
        
        firebase.database().ref('/testMessages/').push({
            sender: "Tom",
            message: "gotta be sending messages"
        });
    }*/
    HomePage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.enable(true);
    };
    HomePage.prototype.isLoggedIn = function () {
        if (this.afAuth.auth.currentUser)
            return true;
        return false;
    };
    HomePage.prototype.map = function (bool) {
        if (bool) {
            this.click.click('homeReportMap');
        }
        else {
            this.click.click('homeViewMap');
        }
        this.userInfo.mapEdit = bool;
        this.userInfo.pageState = "map";
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */]);
    };
    HomePage.prototype.reports = function () {
        this.click.click('homeViewReports');
        this.userInfo.pageState = "reports";
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__reports_reports__["a" /* ReportsPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\home\home.html"*/'<ion-content padding>\n\n    <div class="shader"></div>\n\n    <!--\n\n    <div class="main-container">\n\n        <div style="margin-top: 50px">\n\n            <h1 style="z-index: 1" class="title-main">MZAP</h1>\n\n        </div>\n\n        <!--<div class="main-flex">\n\n\n\n        </div>\n\n        <ion-card (click)="map(true)" *ngIf="isLoggedIn()" style="height: 150px">\n\n            <div>\n\n                <h1>{{translate.text.home.report}}</h1>\n\n            </div>\n\n        </ion-card>\n\n        <ion-card (click)="map(false)" style="height: 150px">\n\n            <div>\n\n                <h1>{{translate.text.home.view}}</h1>\n\n            </div>\n\n        </ion-card>\n\n        <ion-card (click)="reports()" style="height: 150px">\n\n            <div>\n\n                <h1>{{translate.text.home.reports}}</h1>\n\n            </div>\n\n        </ion-card>\n\n    </div>\n\n-->\n\n    <ion-grid>\n\n        <ion-row class="flex">\n\n            <ion-col>\n\n                <div class="title-main">\n\n                    <h1>¡mZAP!</h1>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row class="flex">\n\n            <ion-col>\n\n                <ion-card (click)="map(true)" *ngIf="isLoggedIn()">\n\n                    <div>\n\n                        <h1>{{translate.text.home.report}}</h1>\n\n                    </div>\n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row class="flex">\n\n            <ion-col>\n\n                <ion-card (click)="map(false)">\n\n                    <div>\n\n                        <h1>{{translate.text.home.view}}</h1>\n\n                    </div>\n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row class="flex">\n\n            <ion-col>\n\n                <ion-card (click)="reports()">\n\n                    <div>\n\n                        <h1>{{translate.text.home.reports}}</h1>\n\n                    </div>\n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_translator_translator__["a" /* TranslatorProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_user_info_user_info__["a" /* UserInfoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_6__providers_click_click__["a" /* ClickProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(546);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_img_viewer__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_sms__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_native__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_device_orientation__ = __webpack_require__(945);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_call_number__ = __webpack_require__(946);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_images_images__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_zones_zones__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_user_info_user_info__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_like_like__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_rating_rating__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_click_click__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__app_component__ = __webpack_require__(947);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_login_login__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_register_register__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_profile_profile__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_map_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_settings_settings__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_add_add__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_info_window_info_window__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_top_rated_top_rated__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_confirmation_confirmation__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_reports_reports__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_discussion_discussion__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_filter_filter__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_edit_profile_edit_profile__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_forgot_forgot__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_home_home__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_edit_post_edit_post__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_about_about__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_notifications_notifications__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_login_login_module__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_register_register_module__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_profile_profile_module__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_map_map_module__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_settings_settings_module__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_add_add_module__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_info_window_info_window_module__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_top_rated_top_rated_module__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_confirmation_confirmation_module__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_reports_reports_module__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_discussion_discussion_module__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_filter_filter_module__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_edit_profile_edit_profile_module__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_forgot_forgot_module__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_home_home_module__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_edit_post_edit_post_module__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_about_about_module__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_notifications_notifications_module__ = __webpack_require__(487);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//vanilla ionic imports














//import { CloudSettings } from '@ionic/cloud-angular';
//Angular fire imports



/*Custom Providers*/







/*Import all pages into project*/



















/*Import all modules (Ionic SHOULD do this for you but it doesn't which causes an error)*/


















var firebaseConfig = {
    apiKey: "AIzaSyDRGJKVHK1rsrUkff5wbocn33B4Dy2J0Wo",
    authDomain: "missionx-2247e.firebaseapp.com",
    databaseURL: "https://missionx-2247e.firebaseio.com",
    projectId: "missionx-2247e",
    storageBucket: "missionx-2247e.appspot.com",
    messagingSenderId: "856543302522"
};
// const cloudSettings: CloudSettings = {
//   'core': {
//     'app_id': '88f11293',
//   },
//   'push': {
//     'sender_id': '550547782302',
//     'pluginConfig': {
//       'ios': {
//         'badge': true,
//         'sound': true
//       },
//       'android': {
//         'iconColor': '#343434'
//       }
//     }
//   }
// };
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_24__app_component__["a" /* MyApp */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_24__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/top-rated/top-rated.module#TopRatedPageModule', name: 'TopRatedPage', segment: 'top-rated', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/filter/filter.module#FilterPageModule', name: 'FilterPage', segment: 'filter', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reports/reports.module#ReportsPageModule', name: 'ReportsPage', segment: 'reports', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add/add.module#AddPageModule', name: 'AddPage', segment: 'add', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-post/edit-post.module#EditPostPageModule', name: 'EditPostPage', segment: 'edit-post', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/info-window/info-window.module#InfoWindowPageModule', name: 'InfoWindowPage', segment: 'info-window', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/confirmation/confirmation.module#ConfirmationPageModule', name: 'ConfirmationPage', segment: 'confirmation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/discussion/discussion.module#DiscussionPageModule', name: 'DiscussionPage', segment: 'discussion', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_43__pages_login_login_module__["LoginPageModule"],
            __WEBPACK_IMPORTED_MODULE_44__pages_register_register_module__["RegisterPageModule"],
            __WEBPACK_IMPORTED_MODULE_45__pages_profile_profile_module__["ProfilePageModule"],
            __WEBPACK_IMPORTED_MODULE_46__pages_map_map_module__["MapPageModule"],
            __WEBPACK_IMPORTED_MODULE_47__pages_settings_settings_module__["SettingsPageModule"],
            __WEBPACK_IMPORTED_MODULE_48__pages_add_add_module__["AddPageModule"],
            __WEBPACK_IMPORTED_MODULE_49__pages_info_window_info_window_module__["InfoWindowPageModule"],
            __WEBPACK_IMPORTED_MODULE_50__pages_top_rated_top_rated_module__["TopRatedPageModule"],
            __WEBPACK_IMPORTED_MODULE_51__pages_confirmation_confirmation_module__["ConfirmationPageModule"],
            __WEBPACK_IMPORTED_MODULE_52__pages_reports_reports_module__["ReportsPageModule"],
            __WEBPACK_IMPORTED_MODULE_8_ionic_img_viewer__["b" /* IonicImageViewerModule */],
            __WEBPACK_IMPORTED_MODULE_53__pages_discussion_discussion_module__["DiscussionPageModule"],
            __WEBPACK_IMPORTED_MODULE_54__pages_filter_filter_module__["FilterPageModule"],
            __WEBPACK_IMPORTED_MODULE_55__pages_edit_profile_edit_profile_module__["EditProfilePageModule"],
            __WEBPACK_IMPORTED_MODULE_56__pages_forgot_forgot_module__["ForgotPageModule"],
            __WEBPACK_IMPORTED_MODULE_57__pages_home_home_module__["HomePageModule"],
            __WEBPACK_IMPORTED_MODULE_58__pages_edit_post_edit_post_module__["EditPostPageModule"],
            __WEBPACK_IMPORTED_MODULE_59__pages_about_about_module__["AboutPageModule"],
            __WEBPACK_IMPORTED_MODULE_60__pages_notifications_notifications_module__["NotificationsPageModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_24__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_25__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_add_add__["a" /* AddPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_info_window_info_window__["a" /* InfoWindowPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_top_rated_top_rated__["a" /* TopRatedPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_confirmation_confirmation__["a" /* ConfirmationPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_reports_reports__["a" /* ReportsPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_discussion_discussion__["a" /* DiscussionPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_filter_filter__["a" /* FilterPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_forgot_forgot__["a" /* ForgotPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_edit_post_edit_post__["a" /* EditPostPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_notifications_notifications__["a" /* NotificationsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_17__providers_images_images__["a" /* ImagesProvider */],
            __WEBPACK_IMPORTED_MODULE_18__providers_zones_zones__["a" /* ZonesProvider */],
            __WEBPACK_IMPORTED_MODULE_19__providers_user_info_user_info__["a" /* UserInfoProvider */],
            __WEBPACK_IMPORTED_MODULE_20__providers_translator_translator__["a" /* TranslatorProvider */],
            __WEBPACK_IMPORTED_MODULE_21__providers_like_like__["a" /* LikeProvider */],
            __WEBPACK_IMPORTED_MODULE_22__providers_rating_rating__["a" /* RatingProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_sms__["a" /* SMS */],
            __WEBPACK_IMPORTED_MODULE_23__providers_click_click__["a" /* ClickProvider */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_native__["a" /* MediaCapture */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_device_orientation__["a" /* DeviceOrientation */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_call_number__["a" /* CallNumber */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_filter_filter__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_map_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_zones_zones__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_info_user_info__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_like_like__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_click_click__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_img_viewer__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Ionic imports


// import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation';
//page imports


//provider imports





//image popup viewing import

//geographic distance calculator import
// import geolib from 'geolib';
//firebase imports



var MapViewComponent = (function () {
    /*Instantiate all imported classes*/
    function MapViewComponent(navCtrl, navParams, modal, ngZone, fireDB, afAuth, zones, menuCtrl, userInfo, translate, likeProvider, click, mapPage, events, imageViewerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.ngZone = ngZone;
        this.fireDB = fireDB;
        this.afAuth = afAuth;
        this.zones = zones;
        this.menuCtrl = menuCtrl;
        this.userInfo = userInfo;
        this.translate = translate;
        this.likeProvider = likeProvider;
        this.click = click;
        this.mapPage = mapPage;
        this.events = events;
        this.imageViewerCtrl = imageViewerCtrl;
        this.setOnce = true;
        this.showButtons = true;
        this.points = [];
        this.markers = [];
        this.heatMapData = [];
        this.dropDown = false;
        this.distance = 0;
        this.likeValue = false;
        this.likes = 0;
        this.deactivate = false;
        this.myMarker = undefined;
        this.myCircle = undefined;
        this.myOptions = undefined;
        // myDirection: any;
        // orientationSub: any;
        this.hybrid = false;
        this.myActiveData = {};
        this.type = '';
        mapPage.mapView = this;
    }
    MapViewComponent.prototype.ngAfterViewInit = function () {
        //checks if this is NOT the first time you're opening up the map
        if (this.userInfo.zoom != null) {
            //initializes map
            var latLng = new google.maps.LatLng(this.userInfo.lat, this.userInfo.lng);
            var options = {
                center: latLng,
                zoom: this.userInfo.zoom,
                disableDefaultUI: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.initMap(options, false);
            //if the user allows you to see their position add a blinking dot to their location
            if (this.userInfo.allowPosition) {
                var self = this;
                navigator.geolocation.getCurrentPosition(function (position) {
                    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    self.setPin(latLng);
                }, null, { enableHighAccuracy: true, maximumAge: 3000, timeout: 5000 });
            }
            return;
        }
        //if this is the first time opening up maps then run this function
        this.runNavigation();
    };
    MapViewComponent.prototype.toggleMap = function () {
        this.hybrid = !this.hybrid;
        if (this.hybrid) {
            this.map.setMapTypeId(google.maps.MapTypeId.HYBRID);
            this.map.setTilt(0);
        }
        else {
            this.map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
        }
    };
    MapViewComponent.prototype.setCenter = function () {
        var _this = this;
        var self = this;
        //check if the user is allowing you to see their position
        navigator.geolocation.getCurrentPosition(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            self.map.setCenter(latLng);
            self.map.setZoom(17);
            //self.myOptions.center = latLng;
            if (self.myOptions == undefined) {
                self.myOptions = {
                    strokeColor: '#444',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: '#aaa',
                    fillOpacity: 0.35,
                    map: _this.map,
                    center: latLng,
                    radius: 150
                };
            }
            else {
                self.myOptions.center = latLng;
            }
            if (self.myMarker) {
                self.myMarker.setPosition(latLng);
            }
        }, null, { enableHighAccuracy: true, maximumAge: 3000, timeout: 5000 });
    };
    //sets personal marker and circle
    MapViewComponent.prototype.setPin = function (latLng) {
        if (this.myCircle != null) {
            this.myCircle.setMap(null);
            this.myMarker.setMap(null);
            this.myCircle = null;
            this.myMarker = null;
        }
        var markerImage = new google.maps.MarkerImage('assets/new/dot.png', new google.maps.Size(20, 20), new google.maps.Point(0, 0), new google.maps.Point(10, 10));
        //personal marker
        this.myMarker = new google.maps.Marker({
            position: latLng,
            icon: markerImage,
            map: this.map,
        });
        //personal circle
        this.myCircle = new google.maps.Circle({
            strokeColor: '#444',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#aaa',
            fillOpacity: 0.35,
            map: this.map,
            center: latLng,
            radius: 150
        });
        if (this.map.getZoom() <= 12) {
            this.myMarker.setVisible(false);
            this.myCircle.setVisible(false);
        }
        this.animate(latLng);
    };
    MapViewComponent.prototype.runNavigation = function () {
        var self = this;
        //check if the user will let you see their position
        navigator.geolocation.getCurrentPosition(function (position) {
            self.userInfo.allowPosition = true;
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var options = {
                center: latLng,
                zoom: 17,
                disableDefaultUI: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            self.initMap(options, true);
        }, function () {
            var latLng = new google.maps.LatLng(18.318407, -65.296514);
            var options = {
                center: latLng,
                zoom: 12,
                disableDefaultUI: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            self.initMap(options, false);
        }, { enableHighAccuracy: true, maximumAge: 3000, timeout: 5000 });
    };
    //any time the "menu" button is clicked
    MapViewComponent.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    MapViewComponent.prototype.openFilter = function () {
        var _this = this;
        var filterPage = this.modal.create(__WEBPACK_IMPORTED_MODULE_2__pages_filter_filter__["a" /* FilterPage */], { target: 'map' });
        filterPage.onDidDismiss(function (data) {
            if (data) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_map_map__["a" /* MapPage */]);
            }
        });
        filterPage.present();
    };
    MapViewComponent.prototype.submitReport = function (data) {
        var newMarker;
        newMarker = {
            lat: this.map.getCenter().lat(),
            lng: this.map.getCenter().lng(),
            description: data.desc,
            type: data.type,
            show: data.show,
            name: this.afAuth.auth.currentUser.displayName,
            id: this.afAuth.auth.currentUser.uid,
            status: "To Do",
            checks: data.checks,
            key: "",
            date: Date.now(),
        };
        //var today = new Date();
        //var date = (today.getMonth() + 1) + "-" + today.getDate() + "-" + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        //newMarker.date = date;
        /*Push point to firebase and give it a reference*/
        var key = this.fireDB.list('positions').push(newMarker).key;
        this.fireDB.object('positions/' + key + '/key').set(key);
        newMarker.key = key;
        this.makeMarker(newMarker);
        //update # of posts
        var userRating = __WEBPACK_IMPORTED_MODULE_12_firebase__["database"]().ref('/userRating/').child(this.afAuth.auth.currentUser.uid);
        userRating.once('value', function (snap) {
            if (!snap.hasChild('posts')) {
                userRating.child('posts').set(1);
            }
            else {
                userRating.child('posts').set(snap.val().posts + 1);
            }
        }).then(function (_) {
            data.loader.dismiss();
        });
    };
    /*Checks if user is logged im*/
    MapViewComponent.prototype.isLoggedIn = function () {
        if (this.afAuth.auth.currentUser)
            return true;
        return false;
    };
    //show pop up of image when image is clicked on
    MapViewComponent.prototype.presentImage = function (myImage) {
        var imageViewer = this.imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    //runs if the map is touched
    //removes info drop down
    MapViewComponent.prototype.mapTouch = function () {
        this.dropDown = false;
        this.userInfo.activeData = {};
    };
    MapViewComponent.prototype.translateStatus = function (status) {
        //console.log(status);
        switch (status) {
            case 'Complete':
                return this.translate.text.other.complete;
            case 'To Do':
                return this.translate.text.other.todo;
            default:
                break;
        }
    };
    MapViewComponent.prototype.translateType = function (type) {
        switch (type) {
            case 'bugs':
                return this.translate.text.other.bug;
            case 'trash':
                return this.translate.text.other.trash;
            case 'building':
                return this.translate.text.other.building;
            case 'pest':
                return this.translate.text.other.pest;
            case 'cnd':
                return this.translate.text.other.cnd;
            case 'road':
                return this.translate.text.other.road;
            case 'electricity':
                return this.translate.text.other.electricity;
            case 'tree':
                return this.translate.text.other.tree;
            case 'rocked':
                return this.translate.text.other.rocked;
            case 'water':
                return this.translate.text.other.water;
            default:
                break;
        }
        ;
    };
    ////////////////////////////////////////////////////////////////////////////////////////
    MapViewComponent.prototype.likeable = function () {
        var self = this;
        this.likeProvider.likeable(this.userInfo.activeData.key, function (value) {
            //ngZone.run updates the DOM otherwise change is not visible
            self.ngZone.run(function () {
                if (value == 0 || value == -1) {
                    self.likeValue = false;
                }
                else {
                    self.likeValue = true;
                }
                self.deactivate = false;
            });
        });
    };
    MapViewComponent.prototype.like = function () {
        this.deactivate = true;
        var self = this;
        this.likeProvider.like(this.userInfo.activeData.key, function (val) {
            if (val > 99)
                val = 99;
            self.likes = val;
            self.likeable();
            self.deactivate = false;
        });
    };
    ////////////////////////////////////////////////////////////////////////////////////////
    MapViewComponent.prototype.openChat = function () {
        this.mapPage.infoShow = true;
        this.mapPage.mapState = "comment";
    };
    MapViewComponent.prototype.openResolve = function () {
        this.mapPage.infoShow = true;
        this.mapPage.mapState = "edit";
    };
    /*Is called anytime a point is found in the database or created*/
    MapViewComponent.prototype.makeMarker = function (data) {
        var selection = '';
        //switch for positions markers around the map
        //tells google what image to use as the marker
        switch (data.type) {
            case 'a':
                selection = 'assets/images/icons/cyan';
                break;
            case 'b':
                selection = 'assets/images/icons/yellow';
                break;
            case 'c':
                selection = 'assets/images/icons/blue';
                break;
            case 'd':
                selection = 'assets/images/icons/green';
                break;
            case 'e':
                selection = 'assets/images/icons/red';
                break;
            case 'f':
                selection = 'assets/images/icons/purple';
                break;
        }
        ;
        if (data.status == "To Do") {
            selection += ".png";
        }
        else {
            selection += "_gray.png";
        }
        var image = {
            url: selection,
            size: new google.maps.Size(40, 40),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(15, 15),
            scaledSize: new google.maps.Size(30, 30),
        };
        //creates the marker with the specified icon
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(data.lat, data.lng),
            icon: image,
            map: this.map
        });
        this.markers.push(marker);
        var self = this;
        if (this.map.getZoom() <= 12) {
            marker.setVisible(false);
            this.showButtons = false;
        }
        /*Allows an info window to pop up when a point is clicked*/
        google.maps.event.addListener(marker, 'click', function (e) {
            self.doOpen(data, marker);
        });
        google.maps.event.addListener(this.map, 'zoom_changed', function (e) {
            var zoom = self.map.getZoom();
            if (zoom > 12) {
                marker.setVisible(true);
                self.showButtons = true;
            }
            else {
                marker.setVisible(false);
                self.showButtons = false;
            }
        });
    };
    MapViewComponent.prototype.doOpen = function (data, marker) {
        this.deactivate = true;
        this.mapPage.infoShow = true;
        this.mapPage.mapState = "info";
        this.userInfo.activeData = data;
        this.myActiveMarker = marker;
    };
    MapViewComponent.prototype.message = function () {
        this.deactivate = true;
        this.mapPage.comment = true;
    };
    MapViewComponent.prototype.checkLikes = function (postId) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_12_firebase__["database"]().ref("/positions/" + postId + "/likes").once('value', function (snapshot) {
            _this.likes = snapshot.val();
        });
    };
    //make sure each point passes filter
    MapViewComponent.prototype.checkPoint = function (item) {
        if (!this.userInfo.filter)
            return true;
        var check = false;
        //filter by type
        for (var i = 0; i < this.userInfo.filter.type.length; i++) {
            if (item.type == this.userInfo.filter.type[i]) {
                check = true;
                break;
            }
        }
        if (!check)
            return false;
        check = false;
        //fileter by status
        for (i = 0; i < this.userInfo.filter.status.length; i++) {
            if (item.status == this.userInfo.filter.status[i]) {
                check = true;
                break;
            }
        }
        if (!check)
            return false;
        if (!item.likes) {
            item.likes = 0;
        }
        //filter by rating
        if (item.likes <= this.userInfo.filter.upper &&
            item.likes >= this.userInfo.filter.lower) {
            return true;
        }
        return false;
    };
    MapViewComponent.prototype.initMap = function (options, bool) {
        var _this = this;
        this.map = new google.maps.Map(this.mapElement.nativeElement, options);
        //Use self in event listeners because it moves out of the map's scope
        var self = this;
        /*Waits for map to load and then adds all the points to the map*/
        google.maps.event.addListenerOnce(this.map, 'idle', function (event) {
            self.fireDB.list('positions', { preserveSnapshot: true })
                .subscribe(function (snaps) {
                if (self.setOnce) {
                    //filter points and create markers
                    snaps.forEach(function (item) {
                        if (!self.checkPoint(item.val()))
                            return;
                        self.makeMarker(item.val());
                        self.points.push(item.val());
                        if (item.val().status != "Complete") {
                            self.heatMapData.push({ location: new google.maps.LatLng(item.val().lat, item.val().lng), weight: 100 });
                        }
                    });
                    self.heatMap = new google.maps.visualization.HeatmapLayer({
                        data: self.heatMapData,
                        map: self.map,
                        radius: 25,
                        maxIntensity: 250
                    });
                    if (self.map.getZoom() > 12) {
                        self.heatMap.setMap(null);
                    }
                    self.setOnce = false;
                }
            });
            // self.myDirection = new google.maps.Marker({
            //     position: new google.maps.LatLng(self.map.getCenter().lat(),self.map.getCenter().lng()),
            //     map: self.map,
            //     icon: {
            //         path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
            //         scale: 2,
            //         rotation: 10          
            //     }  
            // });   
            // self.orientationSub = self.deviceOrientation.watchHeading().subscribe((res: DeviceOrientationCompassHeading) => {
            //     self.myDirection.setIcon({
            //         path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
            //         scale: 2,
            //         rotation: res.magneticHeading  
            //     });
            // });
        });
        //anytime the bounds change update the "saved" position so if the 
        //user changes pages and comes back they will be at the same lat/lng
        //and same zoom as when they left the map
        google.maps.event.addListener(this.map, 'bounds_changed', function (event) {
            _this.userInfo.lat = _this.map.getCenter().lat();
            _this.userInfo.lng = _this.map.getCenter().lng();
            _this.userInfo.zoom = _this.map.getZoom();
        });
        //if the user let you see their position then place
        //a blinking dot at their location
        if (bool) {
            var latLng = new google.maps.LatLng(this.map.getCenter().lat(), this.map.getCenter().lng());
            var markerImage = new google.maps.MarkerImage('assets/new/dot.png', new google.maps.Size(20, 20), new google.maps.Point(0, 0), new google.maps.Point(10, 10));
            this.myMarker = new google.maps.Marker({
                position: latLng,
                icon: markerImage,
                map: this.map,
            });
            this.myCircle = new google.maps.Circle({
                strokeColor: '#444',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#aaa',
                fillOpacity: 0.35,
                map: this.map,
                center: latLng,
                radius: 150
            });
            this.animate(latLng);
            if (this.map.getZoom() <= 12) {
                this.myMarker.setVisible(false);
                this.myCircle.setVisible(false);
            }
        }
        google.maps.event.addListener(this.map, 'zoom_changed', function (e) {
            self.mapTouch();
            if (self.myCircle == undefined || !self.myCircle || self.myCircle == null)
                return;
            var zoom = self.map.getZoom();
            if (zoom > 12) {
                self.myMarker.setVisible(true);
                self.myCircle.setVisible(true);
                self.heatMap.setMap(null);
            }
            else {
                self.myMarker.setVisible(false);
                self.myCircle.setVisible(false);
                self.heatMap.setMap(self.map);
            }
        });
    };
    //animates the user's position
    MapViewComponent.prototype.animate = function (latLng) {
        var self = this;
        this.myOptions = {
            strokeColor: '#444',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#aaa',
            fillOpacity: 0.35,
            map: this.map,
            center: latLng,
            radius: 150
        };
        var skip;
        setInterval(function () {
            if (self.myOptions.radius > 150) {
                self.myOptions.radius = 0;
                skip = true;
            }
            if (!skip) {
                self.myOptions.strokeOpacity = (150 - self.myOptions.radius) / 150;
                self.myOptions.fillOpacity = (150 - self.myOptions.radius) / 150;
            }
            //fun little formula to make the circle's delta radius decrease at an inverse
            //exponential rate overtime
            self.myOptions.radius += Math.pow((320 - self.myOptions.radius) / 150, 2) / 3;
            self.myCircle.setOptions(self.myOptions);
            skip = false;
        }, 30);
    };
    return MapViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", Object)
], MapViewComponent.prototype, "mapElement", void 0);
MapViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'map-view',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\map-view\map-view.html"*/'<div>\n\n    <div id="drop-down" [class.up]="!dropDown">\n\n        <ion-grid class="info-grid" *ngIf="userInfo.activeData != {} && userInfo.activeData">\n\n            <ion-row [class.top-padding]="userInfo.isApp">\n\n                <ion-col class="map-info-col">\n\n                    <div class="map-status">\n\n                        <p class="p-status">{{translateStatus(userInfo.activeData.status)}}</p>\n\n                    </div>\n\n                    <h2 class="h2-type">{{translateType(userInfo.activeData.type)}}</h2>    \n\n                    <p class="p-description" *ngIf="userInfo.activeData.description">\n\n                        {{userInfo.activeData.description}}\n\n                    </p>\n\n                    <!-- <p class="p-status">{{distance}} Km Away</p>                -->\n\n                </ion-col>\n\n                <ion-col col-auto class="map-image-col">\n\n                    <div class="div-image" [style.background-image]="\'url(\' + userInfo.activeData.url + \')\'">\n\n                        <img [src]="userInfo.activeData.url" class="invisable" #thisImage (click)="presentImage(thisImage)"/>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n        <ion-grid class="button-grid" [class.grid-hidden]="!dropDown">\n\n            <ion-row>\n\n                <ion-col col-4>\n\n                    <button ion-button (click)="openResolve()">\n\n                        <ion-icon name="hammer"></ion-icon>\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                    <button ion-button (click)="openChat()">\n\n                        <ion-icon name="chatbubbles"></ion-icon>\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                    <button ion-button (click)="like()" *ngIf="userInfo.activeData != {}" [disabled]="deactivate">\n\n                        <div class="likeValue" [class.show-like]="likeValue">\n\n                            <p>+{{likes}}</p>\n\n                        </div>\n\n                        <ion-icon name="thumbs-up" [class.show]="!likeValue" [class.hidden]="likeValue"></ion-icon>\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </div>\n\n    <div class="top-div nav-div-left" [class.top]="userInfo.isApp">\n\n        <button (click)="openMenu()">\n\n            <div class="nav-button orange">\n\n                <img class="hamburg" src="assets/hamburger.png" alt="nav"/>\n\n            </div>\n\n            <div class="count" *ngIf="userInfo.notificationCount > 0">\n\n                {{userInfo.notificationCount}}\n\n            </div>\n\n        </button>\n\n    </div>\n\n    <div class="nav-div nav-div-left">\n\n\n\n    </div>\n\n    <div class="nav-div nav-div-right">\n\n        <button (click)="message()">\n\n            <div class="nav-button green">\n\n                <img class="message-box" src="assets/images/icons/messageBox.png" alt="nav"/>\n\n            </div>\n\n        </button>\n\n        <button (click)="toggleMap()">\n\n            <div class="nav-button green">\n\n                <img class="cog" src="assets/images/buttons/toggle_02.png" alt="nav"/>\n\n            </div>\n\n        </button>\n\n        <!-- <button (click)="openFilter()">\n\n          <div class="nav-button green">\n\n              <img class="filter" src="assets/images/buttons/filter.png" alt="nav"/>\n\n          </div>\n\n      </button> -->\n\n        <button (click)="setCenter()">\n\n            <div class="nav-button green">\n\n                <img class="cog" src="assets/target.png" alt="nav"/>\n\n            </div>\n\n        </button>\n\n    </div>\n\n    <div id="center-div" *ngIf="isLoggedIn()">\n\n        <div id="center-point">\n\n            <img src="assets/location_marker.png" alt="Drop Position" [class.hidden]="!showButtons" [class.show]="showButtons" />\n\n        </div>\n\n    </div>\n\n    <div id="controls" *ngIf="isLoggedIn()">\n\n        <div class="button-center add">\n\n            <button class="add-type" (click)="mapPage.addShow = true" [class.hidden]="!showButtons" [class.show]="showButtons">\n\n              <img src="assets/images/buttons/plus.png" alt="Plus" width="60"/>\n\n          </button>\n\n        </div>\n\n    </div>\n\n    <div #map id="map" (mousedown)="mapTouch()"></div>\n\n</div>'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\map-view\map-view.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4__providers_zones_zones__["a" /* ZonesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5__providers_user_info_user_info__["a" /* UserInfoProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_translator_translator__["a" /* TranslatorProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_like_like__["a" /* LikeProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_click_click__["a" /* ClickProvider */], __WEBPACK_IMPORTED_MODULE_3__pages_map_map__["a" /* MapPage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_9_ionic_img_viewer__["a" /* ImageViewerController */]])
], MapViewComponent);

//# sourceMappingURL=map-view.js.map

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_info_user_info__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_like_like__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_click_click__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_img_viewer__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__info_info__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//vanilla ionic imports


//provider imports




//image popup viewing import

//component imports

//firebase imports


var InfoViewComponent = (function () {
    function InfoViewComponent(userInfo, likeProvider, ngZone, click, imageViewerCtrl, translate, info, events, afAuth) {
        var _this = this;
        this.userInfo = userInfo;
        this.likeProvider = likeProvider;
        this.ngZone = ngZone;
        this.click = click;
        this.imageViewerCtrl = imageViewerCtrl;
        this.translate = translate;
        this.info = info;
        this.events = events;
        this.afAuth = afAuth;
        this.checks = [];
        this.hide = false;
        this.messages = [];
        this.type = 'assets/images/icons/cyan.png';
        this.subbing = false;
        this.subbed = false;
        this.status = "";
        this.myData = this.info.myData;
        this.checks = this.myData.checks;
        this.likeable();
        switch (this.userInfo.activeData.status) {
            case 'Complete':
                this.status = this.translate.text.other.complete;
                break;
            case 'To Do':
                this.status = this.translate.text.other.todo;
                break;
        }
        switch (this.myData.type) {
            case 'a':
                this.type = 'assets/images/icons/cyan.png';
                break;
            case 'b':
                this.type = 'assets/images/icons/yellow.png';
                break;
            case 'c':
                this.type = 'assets/images/icons/blue.png';
                break;
            case 'd':
                this.type = 'assets/images/icons/green.png';
                break;
            case 'e':
                this.type = 'assets/images/icons/red.png';
                break;
            case 'f':
                this.type = 'assets/images/icons/purple.png';
                break;
        }
        ;
        this.messages = [];
        //the id of where the messages are stored in the db
        this.id = this.userInfo.activeData.key;
        var self = this;
        //fetch all messages
        __WEBPACK_IMPORTED_MODULE_8_firebase__["database"]().ref('/messages/').child(this.id).on('value', function (snapshots) {
            self.messages = [];
            //for every message found, add to array
            for (var snap in snapshots.val()) {
                if (snapshots.hasOwnProperty(snap))
                    continue;
                self.messages.unshift(snapshots.val()[snap]);
            }
        });
        __WEBPACK_IMPORTED_MODULE_8_firebase__["database"]().ref("subscriptions/" + this.myData.key).once('value').then(function (snapshot) {
            snapshot.forEach(function (item) {
                if (item.val() == _this.afAuth.auth.currentUser.uid) {
                    _this.subbed = true;
                }
            });
        });
    }
    InfoViewComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var element = this.infoContent.nativeElement.parentElement;
        this.events.subscribe('backToInfo', function () {
            //this.hide = false;
            //smooth scrolling to top
            var startTop = element.scrollTop;
            var current = startTop;
            var startTime = Date.now();
            var endTime = startTime + 500;
            //runs until back to top
            var smoothSlide = setInterval(function () {
                var point = Date.now();
                //find the percentage of distance to travel given 
                //start,end, and current time
                var mult = 1 - ((point - startTime) / (endTime - startTime));
                current = startTop * mult;
                element.scrollTop = current;
                //if top is less than or equal to 0 exit
                if (current <= 0) {
                    element.scrollTop = 0;
                    clearInterval(smoothSlide);
                }
            }, 10);
        });
        this.events.subscribe('newMessage', function () {
            element.scrollTop = 0;
        });
        element.addEventListener("scroll", function (e) {
            if (element.scrollTop > _this.infoContent.nativeElement.offsetHeight) {
                _this.info.hideType = true;
            }
            else {
                _this.info.hideType = false;
            }
        });
    };
    InfoViewComponent.prototype.likeable = function () {
        var self = this;
        this.likeProvider.likeable(this.userInfo.activeData.key, function (value) {
            //ngZone.run updates the DOM otherwise change is not visible
            self.ngZone.run(function () {
                self.likeValue = value;
            });
        });
    };
    //called when user likes a post
    InfoViewComponent.prototype.like = function (value) {
        this.click.click('mapLike');
        //var self = this;
        // this.likeProvider.like(this.userInfo.activeData.key, value, function(likes){
        //     //updates post locally with callback function
        //     self.userInfo.activeData.likes = likes;
        // });
        this.likeValue = value;
    };
    //show pop up of image when image is clicked on
    InfoViewComponent.prototype.presentImage = function (myImage) {
        this.click.click('infoWindowPresentImage');
        var imageViewer = this.imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    InfoViewComponent.prototype.comment = function () {
        this.hide = true;
        this.info.state = "comment";
    };
    InfoViewComponent.prototype.resolve = function () {
        this.info.state = "edit";
    };
    //checks if this is a new message
    InfoViewComponent.prototype.checkMessage = function (message) {
        if (!message.time)
            return false;
        if (Date.now() - message.time < 5000) {
            return true;
        }
        return false;
    };
    InfoViewComponent.prototype.subscribe = function (bool) {
        var _this = this;
        if (this.subbing)
            return;
        this.subbing = true;
        __WEBPACK_IMPORTED_MODULE_8_firebase__["database"]().ref("subscriptions/" + this.myData.key).once('value').then(function (snapshot) {
            var found = false;
            var myItem;
            snapshot.forEach(function (item) {
                if (item.val() == _this.afAuth.auth.currentUser.uid) {
                    found = true;
                    myItem = item;
                }
            });
            if (!found && bool) {
                __WEBPACK_IMPORTED_MODULE_8_firebase__["database"]().ref("subscriptions/" + _this.myData.key).push(_this.afAuth.auth.currentUser.uid).then(function (_) {
                    _this.subbed = true;
                    _this.subbing = false;
                });
            }
            else if (!bool && myItem) {
                __WEBPACK_IMPORTED_MODULE_8_firebase__["database"]().ref("subscriptions/" + _this.myData.key + "/" + myItem.key).remove().then(function (_) {
                    _this.subbed = _this.subbing = false;
                });
            }
        });
    };
    return InfoViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('mainContent'),
    __metadata("design:type", Object)
], InfoViewComponent.prototype, "infoContent", void 0);
InfoViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'info-view',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\info-view\info-view.html"*/'<div class="show" [class.hidden]="hide" style="position: relative" #mainContent id="main-content">\n    <div class="author">\n        <img [src]="type"/>\n        <p>{{translate.text.infoWindow.author}} {{myData.name}}</p>\n    </div>\n    <p class="description" *ngIf="myData.description.length > 0">{{myData.description}}</p>\n    <div *ngFor="let check of checks" class="checks">\n        <ion-checkbox [(ngModel)]="check.state" color="secondary">\n        </ion-checkbox>\n        <p (click)="check.state = !check.state;" text-wrap>{{check.amount}} {{check.text}}</p>\n    </div>\n    <button ion-button class="subscribe" (click)="subscribe(true)" *ngIf="!subbed">subscribe</button>\n    <button ion-button class="subscribe" (click)="subscribe(false)" *ngIf="subbed">unsubscribe</button>\n    <!-- <ion-grid no-padding *ngIf="myData.url" id="image-grid">\n        <ion-row>\n            <ion-col no-padding>\n                <img [src]="myData.url" width="200" alt="Placeholder" #thisImage (click)="presentImage(thisImage)" />\n            </ion-col>\n            <ion-col col-auto class="likes" [class.row]="!myData.url" no-padding>\n            <ion-row text-center>\n                <button ion-button (click)="like(1)" full clear [class.greenButton]="likeValue == 1">\n                    <ion-icon name="thumbs-up"></ion-icon>\n                </button>\n            </ion-row>\n            <ion-row text-center>\n                <h3 text-center>{{myData.likes}}</h3>\n            </ion-row>\n            <ion-row text-center>\n                <button ion-button (click)="like(-1)" full clear [class.greenButton]="likeValue == -1">\n                    <ion-icon name="thumbs-down"></ion-icon>\n                </button>\n            </ion-row>\n            </ion-col>\n        </ion-row>\n    </ion-grid> \n    <div class="status">\n        <p>{{status}}</p>\n    </div>\n    <p>{{myData.description}}</p>\n    <ion-grid id="buttons-grid">\n        <ion-row>\n            <ion-col col-6 style="border-right: 1px solid #ddd">\n                <button ion-button block clear (click)="comment()">Comment</button>\n            </ion-col>\n            <ion-col col-6>\n                <button ion-button block clear (click)="resolve()">Resolve</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>-->\n    <!-- <div id="comment" #commentContent>\n        <div class="messages">\n            <div *ngFor="let message of messages">\n                <ion-grid class="message" [class.newMessage]="checkMessage(message)">\n                    <ion-row class="header-row">\n                        <ion-col no-padding col-3>\n                            <img [src]="message.url" width="40" />\n                        </ion-col>\n                        <ion-col no-padding class="header-info">\n                            <p><b>{{message.name}}</b></p>\n                            <p class="meta">{{message.date}}</p>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class="message-row">\n                        <ion-col no-padding>\n                            <p>{{message.message}}</p>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </div>\n    </div> -->\n</div>\n'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\info-view\info-view.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_info_user_info__["a" /* UserInfoProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_like_like__["a" /* LikeProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_4__providers_click_click__["a" /* ClickProvider */], __WEBPACK_IMPORTED_MODULE_6_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_5__providers_translator_translator__["a" /* TranslatorProvider */], __WEBPACK_IMPORTED_MODULE_7__info_info__["a" /* InfoComponent */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["a" /* AngularFireAuth */]])
], InfoViewComponent);

//# sourceMappingURL=info-view.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_click_click__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_info_user_info__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_map_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//vanilla ionic imports


//provider imports



//page imports

//firebase imports


var CommentViewComponent = (function () {
    function CommentViewComponent(navCtrl, navParams, viewCtrl, afAuth, translate, ngZone, click, userInfo, mapPage, alertCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.afAuth = afAuth;
        this.translate = translate;
        this.ngZone = ngZone;
        this.click = click;
        this.userInfo = userInfo;
        this.mapPage = mapPage;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.myText = "";
        this.messages = [];
        this.location = "main";
        if (this.mapPage.infoShow) {
            this.location = userInfo.activeData.key;
        }
        this.messages = [];
        var self = this;
        this.myId = this.afAuth.auth.currentUser.uid;
        __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref("/messages/" + this.location).on('value', function (snapshots) {
            self.messages = [];
            //for every message found, add to array
            for (var snap in snapshots.val()) {
                if (snapshots.hasOwnProperty(snap))
                    continue;
                var message = snapshots.val()[snap];
                if (self.checkMessage(message)) {
                    message.new = true;
                }
                else {
                    message.new = false;
                }
                self.messages.unshift(message);
            }
        });
    }
    CommentViewComponent.prototype.submit = function () {
        var _this = this;
        var today = new Date();
        var hour = today.getHours() + "";
        if (Number(hour) < 10) {
            hour = "0" + hour;
        }
        var seconds = today.getSeconds() + "";
        if (Number(seconds) < 10) {
            seconds = "0" + seconds;
        }
        var minutes = today.getMinutes() + "";
        if (Number(minutes) < 10) {
            minutes = "0" + minutes;
        }
        /*get current date and time*/
        var date = (today.getMonth() + 1) + "-" + today.getDate() + "-" + today.getFullYear() + " " + hour + ":" + minutes + ":" + seconds;
        __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref('/users/').child(this.afAuth.auth.currentUser.uid).once('value').then(function (snapshot) {
            var url = "assets/profile.png";
            if (snapshot.hasChild('url')) {
                url = snapshot.val().url + "";
            }
            if (_this.myText.trim().length < 1)
                return;
            var data = {
                name: _this.afAuth.auth.currentUser.displayName,
                message: _this.myText,
                id: _this.afAuth.auth.currentUser.uid,
                date: date,
                time: Date.now(),
                url: url
            };
            var element = _this.commentContent.nativeElement;
            //record messsage on firebase and format screen to fit new image
            __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref("/messages/" + _this.location).push(data).then(function (res) {
                element.scrollTop = 0;
                _this.myText = "";
                setTimeout(function () {
                    // get elements
                    var element = document.getElementById('messageInputBox');
                    var textarea = element.getElementsByTagName('textarea')[0];
                    // set default style for textarea
                    textarea.style.minHeight = '0';
                    textarea.style.height = '0';
                    // limit size to 96 pixels (6 lines of text)
                    var scroll_height = textarea.scrollHeight;
                    if (scroll_height > 160)
                        scroll_height = 160;
                    scroll_height += 3;
                    // apply new style
                    element.style.height = scroll_height + "px";
                    textarea.style.minHeight = scroll_height + "px";
                    textarea.style.height = scroll_height + "px";
                    textarea.style.paddingBottom = "0px";
                }, 10);
            });
        });
    };
    CommentViewComponent.prototype.resize = function () {
        // get elements
        var element = document.getElementById('messageInputBox');
        var textarea = element.getElementsByTagName('textarea')[0];
        // set default style for textarea
        textarea.style.minHeight = '0';
        textarea.style.height = '0';
        // limit size to 96 pixels (6 lines of text)
        var scroll_height = textarea.scrollHeight;
        if (scroll_height > 160)
            scroll_height = 160;
        scroll_height += 3;
        // apply new style
        element.style.height = scroll_height + "px";
        textarea.style.minHeight = scroll_height + "px";
        textarea.style.height = scroll_height + "px";
        textarea.style.paddingBottom = "0px";
    };
    CommentViewComponent.prototype.checkMessage = function (message) {
        if (Date.now() - message.time < 2000) {
            return true;
        }
        else {
            return false;
        }
    };
    CommentViewComponent.prototype.closeOut = function () {
        this.mapPage.comment = false;
    };
    CommentViewComponent.prototype.checkUID = function (message) {
        if (message.id == this.myId) {
            return true;
        }
        return false;
    };
    CommentViewComponent.prototype.doCommentInfo = function () {
        var alert;
        if (!this.mapPage.infoShow) {
            alert = this.alertCtrl.create({
                title: this.translate.text.infoWindow.aboutTitle,
                message: this.translate.text.infoWindow.aboutMessage,
                buttons: ['OK']
            });
        }
        else {
            alert = this.alertCtrl.create({
                title: this.translate.text.infoWindow.aboutTitle2,
                message: this.translate.text.infoWindow.aboutMessage2,
                buttons: ['OK']
            });
        }
        alert.present();
    };
    return CommentViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('msg'),
    __metadata("design:type", Object)
], CommentViewComponent.prototype, "msg", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
], CommentViewComponent.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('commentContent'),
    __metadata("design:type", Object)
], CommentViewComponent.prototype, "commentContent", void 0);
CommentViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'comment-view',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\comment-view\comment-view.html"*/'<div id="shader" (click)="closeOut()"></div>\n<div class="full" style="pointer-events: none">\n    <div class="section main">\n        <ion-grid class="check-button">\n            <ion-row>\n                <ion-col text-center>\n                    <button ion-button clear (click)="closeOut()">\n                        <img src="assets/images/buttons/ex.png"/>\n                    </button>\n                </ion-col>\n                <ion-col text-center>\n                    <button ion-button clear (click)="submit()" [disabled]="myText.trim().length < 1">\n                        <img src="assets/images/buttons/check.png"/>\n                    </button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <div class="type" style="right: 0">\n            <button ion-button clear icon-only (click)="doCommentInfo()">\n                <img src="assets/images/icons/question.png" width="40px" alt="type" />\n            </button>\n        </div>\n        <div id="comment" #commentContent>\n            <div class="messages">\n                <div *ngFor="let message of messages">\n                    <ion-grid class="message" [class.newMessage]="message.new" [class.my-message]="checkUID(message)">\n                        <ion-row class="header-row">\n                            <ion-col no-padding col-3>\n                                <div class="image-div" [style.background-image]="\'url(\' + message.url + \')\'">\n                                </div>\n                            </ion-col>\n                            <ion-col no-padding class="header-info">\n                                <p><b>{{message.name}}</b></p>\n                                <p class="meta">{{message.date}}</p>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row class="message-row">\n                            <ion-col no-padding>\n                                <p>{{message.message}}</p>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </div>\n            </div>\n        </div>\n        <div class="chat show">\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <div class="important-div">\n                            <ion-textarea #msg rows="1" id="messageInputBox" (input)="resize()" [(ngModel)]="myText" placeholder="Aa" autocorrect="on"></ion-textarea>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </div>\n</div>\n'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\comment-view\comment-view.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__providers_translator_translator__["a" /* TranslatorProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_3__providers_click_click__["a" /* ClickProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_user_info_user_info__["a" /* UserInfoProvider */], __WEBPACK_IMPORTED_MODULE_5__pages_map_map__["a" /* MapPage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */]])
], CommentViewComponent);

//# sourceMappingURL=comment-view.js.map

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_click_click__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_info_user_info__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__info_info__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_map_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//vanilla ionic imports


//provider imports



//component imports

//page imports

//firebase imports


var EditViewComponent = (function () {
    function EditViewComponent(navCtrl, navParams, viewCtrl, translate, ngZone, click, userInfo, mapPage, afAuth, alertCtrl, infoComponent) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.translate = translate;
        this.ngZone = ngZone;
        this.click = click;
        this.userInfo = userInfo;
        this.mapPage = mapPage;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.infoComponent = infoComponent;
        this.imageData = "";
        this.data = {};
        this.resolves = [];
        this.deleted = [];
        this.dataSet = false;
        this.error = "";
        this.colors = [];
        this.data = JSON.parse(JSON.stringify(this.userInfo.activeData));
        this.colors = [
            {
                value: 'a',
                color: '#24b9ed',
                border: '#126bd6'
            },
            {
                value: 'b',
                color: '#f2ea37',
                border: '#ffce07'
            },
            {
                value: 'c',
                color: '#3d4da1',
                border: '#21215f'
            },
            {
                value: 'd',
                color: '#57b947',
                border: '#1d5a2d'
            },
            {
                value: 'e',
                color: '#e82125',
                border: '#811517'
            },
            {
                value: 'f',
                color: '#9c248e',
                border: '#571853'
            },
        ];
    }
    EditViewComponent.prototype.ngAfterViewInit = function () {
        this.infoComponent.editComponent = this;
        this.data = JSON.parse(JSON.stringify(this.userInfo.activeData));
    };
    EditViewComponent.prototype.dismiss = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */]);
    };
    EditViewComponent.prototype.statusClick = function () {
        this.click.click('editPostStatus');
    };
    EditViewComponent.prototype.typeClick = function () {
        this.click.click('editPostType');
    };
    EditViewComponent.prototype.descriptionClick = function () {
        this.click.click('editPostDescription');
    };
    EditViewComponent.prototype.submit = function () {
        var _this = this;
        for (var i = 0; i < this.data.checks.length; i++) {
            this.data.checks[i].text = this.data.checks[i].text.trim();
            if (this.data.checks[i].amount > 999) {
                this.data.checks[i].amount = 999;
            }
            if (this.data.checks[i].amount < 0) {
                this.data.checks[i].amount = 0;
            }
            if (this.data.checks[i].text.length < 1 || !this.data.checks[i].amount || this.data.checks[i].amount < 1) {
                this.data.checks.splice(i, 1);
                i--;
            }
        }
        if (this.data.checks.length < 1)
            return;
        __WEBPACK_IMPORTED_MODULE_8_firebase__["database"]().ref('/positions/').child(this.data.key).set(this.data).then(function (_) {
            _this.userInfo.activeData = _this.data;
            var myAlert = _this.alertCtrl.create({
                title: _this.translate.text.editPost.submitted,
                buttons: ['OK']
            });
            myAlert.present();
            _this.dismiss();
        });
    };
    EditViewComponent.prototype.delete = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: this.translate.text.infoWindow.deleteAlertTitle,
            subTitle: this.translate.text.infoWindow.deleteAlertSubTitle,
            buttons: [{
                    text: this.translate.text.infoWindow.delete,
                    handler: function (data) {
                        _this.deleteData();
                    }
                }, this.translate.text.infoWindow.cancel]
        });
        alert.present();
    };
    //if selected, this post and all data associated with it will be deleted
    EditViewComponent.prototype.deleteData = function () {
        //checks to see if there are any images that need to be deleted
        var self = this;
        //check if there is an image
        __WEBPACK_IMPORTED_MODULE_8_firebase__["database"]().ref('/positions/').child(this.data.key).once('value').then(function (snapshot) {
            if (snapshot.hasChild('url')) {
                //if image delete image then delete rest of report
                __WEBPACK_IMPORTED_MODULE_8_firebase__["storage"]().ref('/images/').child("posts").child(self.data.refName).delete().then(function () {
                    self.deleteReport();
                });
                //if no image delete rest of report
            }
            else {
                self.deleteReport();
            }
        });
    };
    EditViewComponent.prototype.addAll = function () {
        this.loopArrays(this.data.checks, 1);
    };
    EditViewComponent.prototype.subAll = function () {
        this.loopArrays(this.data.checks, -1);
    };
    EditViewComponent.prototype.loopArrays = function (myArray, num) {
        for (var i = 0; i < myArray.length; i++) {
            var check = myArray[i];
            check.amount += num;
            if (check.amount > 999) {
                check.amount = 999;
            }
            if (check.amount < 0) {
                check.amount = 0;
            }
        }
    };
    EditViewComponent.prototype.convertToNumber = function (event) {
        var x = +event;
        x = Math.floor(x);
        if (x < 0) {
            x = 0;
        }
        else if (x > 999) {
            x = 999;
        }
        return x;
    };
    //helper function for deleteDatat()
    EditViewComponent.prototype.deleteReport = function () {
        var _this = this;
        //delete root report
        __WEBPACK_IMPORTED_MODULE_8_firebase__["database"]().ref('/positions/').child(this.data.key).remove().then(function () {
            var myAlert = _this.alertCtrl.create({
                title: _this.translate.text.edit.success,
                buttons: ['OK']
            });
            myAlert.present();
            _this.dismiss();
        });
    };
    return EditViewComponent;
}());
EditViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'edit-view',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\edit-view\edit-view.html"*/'<div>\n    <ion-card class="text-area">\n        <ion-item>\n            <ion-label floating class="green-text" [class.red-text]="data.description.trim().length < 1">{{translate.text.editPost.description}}</ion-label>\n            <ion-input type="text" maxlength="240" [(ngModel)]="data.description" autocorrect="on"></ion-input>\n        </ion-item>\n    </ion-card>\n    <ion-card>\n        <ion-grid class="color-grid">\n            <ion-row>\n                <ion-col text-center *ngFor="let color of colors">\n                    <div class="select" [class.select-border]="color.value == data.type" (click)="data.type = color.value">\n                        <div class="color-holder" [style.background-color]="color.color" [style.border-color]="color.border">\n                        </div>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-label>{{translate.text.editPost.status}}</ion-label>\n            <ion-select [(ngModel)]="data.status" (click)="statusClick()">\n                <ion-option value="To Do">{{translate.text.other.todo}}</ion-option>\n                <ion-option value="Complete">{{translate.text.other.complete}}</ion-option>\n            </ion-select>\n        </ion-item>\n    </ion-card>\n    <ion-grid>\n        <!-- own addage -->\n        <ion-row class="check-input" *ngFor="let check of data.checks">\n            <ion-col col-auto no-padding>\n                <div class="remove" *ngIf="data.checks.length > 1">\n                    <div class="image-holder" (click)="data.checks.splice(data.checks.indexOf(check),1)">\n                        <ion-icon name="remove"></ion-icon>\n                    </div>\n                </div>\n            </ion-col>\n            <ion-col no-padding>\n                <ion-input type="text" maxlength="40" [(ngModel)]="check.text"></ion-input>\n            </ion-col>\n            <ion-col class="num-holder" col-auto>\n                <ion-input type="number" min="0" max="999" step="1" [(ngModel)]="check.amount" (ngModelChange)="check.amount = convertToNumber($event)"></ion-input>\n            </ion-col>\n        </ion-row>\n\n        <!--Add/Sub row-->\n        <ion-row class="add-row">\n            <ion-col no-padding text-center>\n                <button ion-button [disabled]="data.checks[data.checks.length-1].text.length < 1" (click)="data.checks.push({text: \'\', state: false, amount: 0})"\n                    class="add">\n                    <ion-icon name="add"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col col-auto no-padding class="left-padding">\n                <div class="number">\n                    <div class="changer" (click)="addAll()">\n                        +\n                    </div>\n                    <div class="changer" (click)="subAll()">\n                        -\n                    </div>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <div text-center padding-top>\n        <ion-grid>\n            <ion-row>\n                <!-- <ion-col>\n                    <button ion-button color="secondary" (click)="submit()" style="padding: 0 10px">\n                        {{translate.text.editPost.submit}}\n                    </button>\n                </ion-col> -->\n                <ion-col>\n                    <button ion-button color="danger" (click)="delete()" block style="padding: 0 10px">\n                        {{translate.text.infoWindow.delete}}\n                    </button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n    <p class="error">{{error}}</p>\n</div>'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\edit-view\edit-view.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_translator_translator__["a" /* TranslatorProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_3__providers_click_click__["a" /* ClickProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_user_info_user_info__["a" /* UserInfoProvider */], __WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__info_info__["a" /* InfoComponent */]])
], EditViewComponent);

//# sourceMappingURL=edit-view.js.map

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResolveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_info__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_map_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_images_images__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_info_user_info__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_click_click__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//vanilla ionic imports


//parent components

//page imports

//image popup viewing import

//provider imports




//firebase imports


var ResolveComponent = (function () {
    function ResolveComponent(navCtrl, navParams, alertCtrl, viewCtrl, afAuth, images, loadingCtrl, ngZone, translate, imageViewerCtrl, modalCtrl, click, userInfo, infoComponent, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.afAuth = afAuth;
        this.images = images;
        this.loadingCtrl = loadingCtrl;
        this.ngZone = ngZone;
        this.translate = translate;
        this.imageViewerCtrl = imageViewerCtrl;
        this.modalCtrl = modalCtrl;
        this.click = click;
        this.userInfo = userInfo;
        this.infoComponent = infoComponent;
        this.events = events;
        // @ViewChild('preview') preview;
        this.imageData = "";
        this.section = "info";
        this.type = '';
        this.status = '';
        this.error = "";
        this.resolves = [];
        this.dataSet = false;
        this.info = "";
        this.images.doClear();
        this.data = this.userInfo.activeData;
        var self = this;
        //grab all of resolve images from db
        __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/resolves/').child(this.data.key).once('value').then(function (snapshot) {
            snapshot.forEach(function (child) {
                self.resolves.push(child.val());
            });
        });
        this.checkStatus();
    }
    // ngAfterViewInit() {
    //     var self = this;
    //     // this.input.nativeElement.onchange = function (e) {
    //     //     var file = e.target.files[0];
    //     //     self.images.selectedFile = file;
    //     //     self.dataSet = true;
    //     //     setTimeout(() => {
    //     //         self.preview.nativeElement.setAttribute('src', URL.createObjectURL(file));
    //     //     }, 50)
    //     // }
    //     // this.input1.nativeElement.onchange = function (e) {
    //     //     var file = e.target.files[0];
    //     //     self.images.selectedFile = file;
    //     //     self.dataSet = true;
    //     //     setTimeout(() => {
    //     //         self.preview.nativeElement.setAttribute('src', URL.createObjectURL(file));
    //     //     }, 50)
    //     // }
    // }
    //show pop up of image when image is clicked on
    ResolveComponent.prototype.presentImage = function (myImage) {
        var imageViewer = this.imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    //dismiss this modal
    ResolveComponent.prototype.dismiss = function (data) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_map_map__["a" /* MapPage */]);
    };
    //check if the current user is the OP
    ResolveComponent.prototype.checkLogin = function () {
        if (this.afAuth.auth.currentUser) {
            if (this.afAuth.auth.currentUser.uid == this.data.id)
                return true;
        }
        return false;
    };
    //check if user is logged on
    ResolveComponent.prototype.checkLoggedOn = function () {
        if (this.afAuth.auth.currentUser)
            return true;
        return false;
    };
    ResolveComponent.prototype.updateWindow = function () {
        this.infoComponent.edit = true;
    };
    ResolveComponent.prototype.add = function () {
        this.infoComponent.addResolve = true;
        this.events.publish("resolveRestart");
    };
    //submit a resolved image
    ResolveComponent.prototype.submit = function () {
        var _this = this;
        this.click.click('infoWindowSubmitResolution');
        var self = this;
        var loader = this.loadingCtrl.create({
            content: this.translate.text.infoWindow.submitting
        });
        var successAlert = this.alertCtrl.create({
            title: this.translate.text.infoWindow.submitted,
            buttons: [{
                    text: this.translate.text.infoWindow.ok,
                    handler: function () {
                        _this.dismiss(false);
                    }
                }]
        });
        //makes sure that an image was included in resolve post
        if (this.dataSet) {
            loader.present();
            //upload image
            var promiseObject = this.images.uploadToFirebase("resolves");
            promiseObject.promise.then(function (res) {
                var url = res;
                var refName = promiseObject.refName;
                var data = { url: url, refName: refName, info: _this.info };
                //get link to resolution info
                var key = __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/resolves/').child(_this.data.key).push(data).key;
                //link resolution info to actual report
                __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/positions/').child(_this.data.key).child('resolves').push(key).then(function (_) {
                    //update # of resolves
                    var userRating = __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/userRating/').child(self.afAuth.auth.currentUser.uid);
                    userRating.once('value', function (snap) {
                        if (!snap.hasChild('resolves')) {
                            userRating.child('resolves').set(1);
                        }
                        else {
                            userRating.child('resolves').set(snap.val().resolves + 1);
                        }
                    });
                    loader.dismiss();
                    successAlert.present();
                }).catch(function (e) {
                    loader.dismiss();
                    alert("Error: " + e.message);
                });
            }).catch(function (e) {
                loader.dismiss();
                alert("Error: " + e.message);
            });
        }
        else {
            this.error = this.translate.text.infoWindow.error;
        }
    };
    //request photo from user's camera
    ResolveComponent.prototype.cameraRequest = function () {
        var _this = this;
        this.click.click('infoWindowCamera');
        var promise = this.images.doGetCameraImage(600, 600);
        promise.then(function (res) {
            _this.imageData = "data:image/jpg;base64," + res;
            //this.preview.nativeElement.setAttribute('src', this.imageData);
            _this.dataSet = true;
        }).catch(function (e) {
        });
    };
    //request photo from user's album
    ResolveComponent.prototype.albumRequest = function () {
        var _this = this;
        this.click.click('infoWindowAlbum');
        var promise = this.images.doGetAlbumImage(600, 600);
        promise.then(function (res) {
            _this.imageData = "data:image/jpg;base64," + res;
            //this.preview.nativeElement.setAttribute('src', this.imageData);
            _this.dataSet = true;
        }).catch(function (e) {
        });
    };
    //sliding for resolved images
    ResolveComponent.prototype.slideLeft = function () {
        this.click.click('infoWindowLeft');
        this.slide.slidePrev(300, null);
    };
    ResolveComponent.prototype.slideRight = function () {
        this.click.click('infoWindowRight');
        this.slide.slideNext(300, null);
    };
    //get the current status of the report
    ResolveComponent.prototype.checkStatus = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/positions/').child(this.data.key);
        ref.once('value', function (snapshot) {
            var status = snapshot.val().status;
            //translate status
            switch (status) {
                case 'Complete':
                    _this.status = _this.translate.text.other.complete;
                    break;
                case 'To Do':
                    _this.status = _this.translate.text.other.todo;
                    break;
            }
        });
    };
    return ResolveComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */])
], ResolveComponent.prototype, "slide", void 0);
ResolveComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'resolve',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\resolve\resolve.html"*/'<div class="outer-div" [class.do-add]="infoComponent.addResolve">\n    <div id="resolve-content">\n        <ion-slides [pager]="resolves.length > 1" id="resolve-slides">\n            <ion-slide *ngFor="let resolve of resolves">\n                <div class="slide-div">\n                    <img src=\'{{resolve.url}}\' alt="Resolve Image" #thisImage (click)="presentImage(thisImage)" />\n                </div>\n                <div class="status">\n                </div>\n                <p>{{resolve.info}}</p>\n            </ion-slide>\n            <ion-slide *ngIf="resolves.length < 1">\n                <p style="color: #666">{{translate.text.resolve.noPost}}</p>\n            </ion-slide>\n        </ion-slides>\n        <ion-grid id="button-grid">\n            <ion-row>\n                <ion-col>\n                    <button ion-button block clear (click)="add()">{{translate.text.resolve.add}}</button>\n                </ion-col>\n            </ion-row>\n            <ion-row *ngIf="checkLogin()" style="border-top: none;">\n                <ion-col>\n                    <button ion-button block clear (click)="updateWindow()">{{translate.text.infoWindow.editPost}}</button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n    <div id="resolve-add">\n        <add-resolve></add-resolve>\n    </div>\n</div>\n    <!-- <ion-item>\n        <ion-label floating>{{translate.text.infoWindow.note}}</ion-label>\n        <ion-input type=\'text\' [(ngModel)]="info" autocorrect="on"></ion-input>\n    </ion-item>\n    <ion-item>\n        {{translate.text.infoWindow.photo}}\n        <ion-grid no-padding>\n            <ion-row>\n                <ion-col text-center no-padding [class.no-height]="!dataSet">\n                    <img width="100px" #preview />\n                </ion-col>\n            </ion-row>\n            <ion-row [class.hidden]="userInfo.isApp">\n                <ion-col col-6 text-center>\n                    <label>\n                        <img src="assets/new/camera.png" style="width: 55px; padding-right: 10px;" />\n                        <input #file type="file" accept="image/*" capture="camera" class="fileInput"/>\n                    </label>\n                </ion-col>\n                <ion-col col-6 text-center>\n                    <label>\n                        <img src="assets/new/album.png" style="width: 55px; padding-right: 10px;" />\n                        <input #file1 type="file" accept="image/*" class="fileInput"/>\n                    </label>\n                </ion-col>\n            </ion-row>\n            <ion-row [class.hidden]="!userInfo.isApp">\n                <ion-col col-6 no-padding>\n                    <button ion-button block clear style="color: black;" (click)="cameraRequest()">\n                        <img src="assets/new/camera.png" style="width: 55px; padding-right: 10px;" alt="Camera" />\n                    </button>\n                </ion-col>\n                <ion-col col-6 no-padding>\n                    <button ion-button block clear style="color: black;" (click)="albumRequest()">\n                        <img src="assets/new/album.png" style="width: 55px; padding-right: 10px;" alt="Album" />\n                    </button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-item>\n    <p text-center class="error">{{error}}</p>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <button ion-button block color="secondary" (click)="submit()">{{translate.text.infoWindow.resolution}}</button>\n            </ion-col>\n            <ion-col *ngIf="checkLogin()">\n                <button ion-button block (click)="updateWindow()">{{translate.text.infoWindow.editPost}}</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid> -->\n'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\resolve\resolve.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */], __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_5__providers_images_images__["a" /* ImagesProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_7__providers_translator_translator__["a" /* TranslatorProvider */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_8__providers_click_click__["a" /* ClickProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_user_info_user_info__["a" /* UserInfoProvider */], __WEBPACK_IMPORTED_MODULE_2__info_info__["a" /* InfoComponent */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */]])
], ResolveComponent);

//# sourceMappingURL=resolve.js.map

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_add__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TypeComponent = (function () {
    function TypeComponent(add, events) {
        this.add = add;
        this.events = events;
        this.types = [];
        this.types.push({
            url: 'assets/images/buttons/cnd.png',
            type: 'cnd',
            selected: false,
        });
        this.types.push({
            url: 'assets/images/buttons/bug.png',
            type: 'bugs',
            selected: false,
        });
        this.types.push({
            url: 'assets/images/buttons/pest.png',
            type: 'pest',
            selected: false,
        });
        this.types.push({
            url: 'assets/images/buttons/building.png',
            type: 'building',
            selected: false,
        });
        this.types.push({
            url: 'assets/images/buttons/trash.png',
            type: 'trash',
            selected: false,
        });
        this.types.push({
            url: 'assets/images/buttons/droplet.png',
            type: 'water',
            selected: false,
        });
        this.types.push({
            url: 'assets/images/buttons/road.png',
            type: 'road',
            selected: false,
        });
        this.types.push({
            url: 'assets/images/buttons/tree.png',
            type: 'tree',
            selected: false,
        });
        this.types.push({
            url: 'assets/images/buttons/electricity.png',
            type: 'electricity',
            selected: false,
        });
        this.types.push({
            url: 'assets/images/buttons/blocked_road.png',
            type: 'rocked',
            selected: false,
        });
        if (this.add.type != undefined) {
            this.checkSelection();
        }
    }
    TypeComponent.prototype.checkSelection = function () {
        var _this = this;
        this.types.forEach(function (type) {
            if (_this.add.type == type.type) {
                type.selected = true;
            }
        });
    };
    TypeComponent.prototype.selectTrue = function (selection) {
        this.types.forEach(function (type) {
            if (selection == type.type) {
                type.selected = true;
            }
            else {
                type.selected = false;
            }
        });
        this.add.type = selection;
        this.add.slideRight(false);
        this.events.publish('confirmType', selection);
    };
    return TypeComponent;
}());
TypeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'type',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\type\type.html"*/'<ion-grid>\n\n  <ion-row>\n\n    <ion-col col-4 *ngFor="let type of types" text-center class="type-button">\n\n      <button ion-button clear (click)="selectTrue(type.type)" [class.glow]="type.selected">\n\n        <img [src]=\'type.url\'/>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\type\type.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__add_add__["a" /* AddComponent */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */]])
], TypeComponent);

//# sourceMappingURL=type.js.map

/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PictureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_images_images__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_info_user_info__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_add__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PictureComponent = (function () {
    function PictureComponent(images, translate, add, userInfo, ngZone, events) {
        this.images = images;
        this.translate = translate;
        this.add = add;
        this.userInfo = userInfo;
        this.ngZone = ngZone;
        this.events = events;
        this.imageData = "";
        this.dataSet = false;
    }
    PictureComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        this.input.nativeElement.onchange = function (e) {
            var file = e.target.files[0];
            self.images.selectedFile = file;
            self.add.dataSet = true;
            setTimeout(function () {
                self.add.preview.nativeElement.setAttribute('src', URL.createObjectURL(file));
            }, 50);
            self.events.publish('confirmSource', URL.createObjectURL(file));
        };
        this.input1.nativeElement.onchange = function (e) {
            var file = e.target.files[0];
            self.images.selectedFile = file;
            self.add.dataSet = true;
            setTimeout(function () {
                self.add.preview.nativeElement.setAttribute('src', URL.createObjectURL(file));
            }, 50);
            self.events.publish('confirmSource', URL.createObjectURL(file));
        };
    };
    PictureComponent.prototype.cameraRequest = function () {
        var _this = this;
        var promise = this.images.doGetCameraImage(600, 600);
        promise.then(function (res) {
            _this.imageData = "data:image/jpg;base64," + res;
            _this.add.dataSet = true;
            setTimeout(function () {
                _this.add.preview.nativeElement.setAttribute('src', _this.imageData);
            }, 500);
            _this.events.publish('confirmSource', _this.imageData);
        }).catch(function (e) {
        });
    };
    /*Fetch image from album*/
    PictureComponent.prototype.albumRequest = function () {
        var _this = this;
        var promise = this.images.doGetAlbumImage(600, 600);
        promise.then(function (res) {
            _this.imageData = "data:image/jpg;base64," + res;
            _this.add.dataSet = true;
            setTimeout(function () {
                _this.add.preview.nativeElement.setAttribute('src', _this.imageData);
            }, 500);
            _this.events.publish('confirmSource', _this.imageData);
        }).catch(function (e) {
        });
    };
    return PictureComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('file'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], PictureComponent.prototype, "input", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('file1'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], PictureComponent.prototype, "input1", void 0);
PictureComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'picture',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\picture\picture.html"*/'<div class="pic-component-div">\n\n    <ion-grid no-padding>\n\n        <ion-row [class.hidden]="userInfo.isApp">\n\n            <ion-col col-6 text-center>\n\n                    <img src="assets/new/camera.png"/>\n\n                <label>\n\n                   \n\n                    <input #file type="file" accept="image/*" capture="camera" class="fileInput"/>\n\n                </label>\n\n            </ion-col>\n\n            <ion-col col-6 text-center>\n\n                    <img src="assets/new/album.png"/>\n\n                <label>\n\n                    \n\n                    <input #file1 type="file" accept="image/*" class="fileInput"/>\n\n                </label>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row [class.hidden]="!userInfo.isApp">\n\n            <ion-col col-6 text-center>\n\n                <button ion-button clear (click)="cameraRequest()">\n\n                    <img src="assets/new/camera.png"/>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col col-6 text-center>\n\n                <button ion-button clear (click)="albumRequest()">\n\n                    <img src="assets/new/album.png"/>\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</div>'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\picture\picture.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_images_images__["a" /* ImagesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_translator_translator__["a" /* TranslatorProvider */], __WEBPACK_IMPORTED_MODULE_5__add_add__["a" /* AddComponent */], __WEBPACK_IMPORTED_MODULE_4__providers_user_info_user_info__["a" /* UserInfoProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */]])
], PictureComponent);

//# sourceMappingURL=picture.js.map

/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_add__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_translator_translator__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DescriptionComponent = (function () {
    function DescriptionComponent(add, translate) {
        this.add = add;
        this.translate = translate;
        this.colors = [];
        this.colors = [
            { value: 'a',
                color: '#24b9ed',
                border: '#126bd6' },
            { value: 'b',
                color: '#f2ea37',
                border: '#ffce07' },
            { value: 'c',
                color: '#3d4da1',
                border: '#21215f' },
            { value: 'd',
                color: '#57b947',
                border: '#1d5a2d' },
            { value: 'e',
                color: '#e82125',
                border: '#811517' },
            { value: 'f',
                color: '#9c248e',
                border: '#571853' },
        ];
    }
    DescriptionComponent.prototype.checkColor = function (color) {
        return this.add.currentColor == color;
    };
    return DescriptionComponent;
}());
DescriptionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'description',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\description\description.html"*/'<div id="description-main">\n  <ion-item class="content">\n    <ion-label floating style="color: green" [class.red-text]="add.desc.length < 1">{{translate.text.add.describe}}</ion-label>\n    <!-- <ion-input maxlength="120" [(ngModel)]="add.desc"></ion-input> -->\n    <ion-input maxlength="240" [(ngModel)]="add.desc" autocorrect="on"></ion-input>\n  </ion-item>\n    <ion-grid class="content">\n      <ion-row>\n        <ion-col text-center *ngFor="let color of colors">\n            <div class="select" [class.select-border]="checkColor(color.value)" (click)="add.currentColor = color.value">\n              <div class="color-holder" [style.background-color]="color.color" [style.border-color]="color.border">\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</div>\n'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\description\description.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__add_add__["a" /* AddComponent */], __WEBPACK_IMPORTED_MODULE_2__providers_translator_translator__["a" /* TranslatorProvider */]])
], DescriptionComponent);

//# sourceMappingURL=description.js.map

/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_add__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_translator_translator__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//vanilla ionic imports


//component imports

//provider imports

var ConfirmComponent = (function () {
    function ConfirmComponent(add, events, translate) {
        this.add = add;
        this.events = events;
        this.translate = translate;
    }
    ConfirmComponent.prototype.addAll = function () {
        this.loopArrays(this.add.checks, 1);
        this.loopArrays(this.add.presets, 1);
    };
    ConfirmComponent.prototype.subAll = function () {
        this.loopArrays(this.add.checks, -1);
        this.loopArrays(this.add.presets, -1);
    };
    ConfirmComponent.prototype.loopArrays = function (myArray, num) {
        for (var i = 0; i < myArray.length; i++) {
            var check = myArray[i];
            check.amount += num;
            if (check.amount > 999) {
                check.amount = 999;
            }
            if (check.amount < 0) {
                check.amount = 0;
            }
        }
    };
    ConfirmComponent.prototype.convertToNumber = function (event) {
        var x = +event;
        x = Math.floor(x);
        if (x < 0) {
            x = 0;
        }
        else if (x > 999) {
            x = 999;
        }
        return x;
    };
    return ConfirmComponent;
}());
ConfirmComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'confirm',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\confirm\confirm.html"*/'<div id="main-confirm">\n  <ion-grid>\n\n    <!-- helper row -->\n    <ion-row class="helper">\n      <ion-col no-padding text-center>\n        <p>{{translate.text.add.item}}</p>\n      </ion-col>\n      <ion-col class="number" col-auto text-center>\n        <p>#</p>\n      </ion-col>\n    </ion-row>\n\n    <!--Presets-->\n    <ion-row class="preset" *ngFor="let preset of add.presets">\n      <ion-col no-padding>\n        <p text-wrap>{{preset.text}}</p>\n      </ion-col>\n      <ion-col class="num-holder" col-auto>\n        <ion-input type="number" min="0" max="999" step="1" [(ngModel)]="preset.amount" (ngModelChange)="preset.amount = convertToNumber($event)"></ion-input>\n      </ion-col>\n    </ion-row>\n\n    <!-- own addage -->\n    <ion-row class="check-input" *ngFor="let check of add.checks">\n      <ion-col col-auto no-padding>\n        <div class="remove" *ngIf="add.checks.length > 1">\n          <div class="image-holder" (click)="add.checks.splice(add.checks.indexOf(check),1)">\n            <ion-icon name="remove"></ion-icon>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col no-padding>\n        <ion-input type="text" maxlength="40" [(ngModel)]="check.text"></ion-input>\n      </ion-col>\n      <ion-col class="num-holder" col-auto>\n        <ion-input type="number" min="0" max="999" step="1" [(ngModel)]="check.amount" (ngModelChange)="check.amount = convertToNumber($event)"></ion-input>\n      </ion-col>\n    </ion-row>\n\n    <!--Add/Sub row-->\n    <ion-row class="add-row">\n      <ion-col no-padding>\n          <button ion-button [disabled]="add.checks[add.checks.length-1].text.length < 1" (click)="add.checks.push({text: \'\', state: false, amount: 0})"\n          class="add">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-auto no-padding class="left-padding">\n        <div class="number">\n          <div class="changer" (click)="subAll()">\n            -\n          </div>\n          <div class="changer" (click)="addAll()">\n            +\n          </div>          \n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\confirm\confirm.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__add_add__["a" /* AddComponent */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_3__providers_translator_translator__["a" /* TranslatorProvider */]])
], ConfirmComponent);

//# sourceMappingURL=confirm.js.map

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_map_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_images_images__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_user_info_user_info__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_click_click__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_img_viewer__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//vanilla ionic imports



//component imports 


//firebase imports



//provider imports




//image pop up import

var CreateComponent = (function () {
    function CreateComponent(navCtrl, navParams, afAuth, afDB, images, userInfo, storage, translate, menuCtrl, click, login, imageViewerCtrl, loadingCtrl, ngZone, mapPage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afDB = afDB;
        this.images = images;
        this.userInfo = userInfo;
        this.storage = storage;
        this.translate = translate;
        this.menuCtrl = menuCtrl;
        this.click = click;
        this.login = login;
        this.imageViewerCtrl = imageViewerCtrl;
        this.loadingCtrl = loadingCtrl;
        this.ngZone = ngZone;
        this.mapPage = mapPage;
        this.imageData = "";
        //user input data
        this.email = "";
        this.pass1 = "";
        this.pass2 = "";
        this.name = "";
        this.image = false;
        this.startTrue = true;
        this.refName = "";
        this.url = "";
        this.photoState = false;
        this.dataSet = false;
        this.press = false;
        this.error = "";
        this.login.create = this;
        this.images.doClear();
    }
    CreateComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        this.slides.lockSwipes(true);
        this.input.nativeElement.onchange = function (e) {
            var file = e.target.files[0];
            self.images.selectedFile = file;
            self.ngZone.run(function () {
                self.dataSet = true;
            });
            setTimeout(function () {
                self.preview.nativeElement.setAttribute('src', URL.createObjectURL(file));
            }, 50);
        };
        this.input1.nativeElement.onchange = function (e) {
            var file = e.target.files[0];
            self.images.selectedFile = file;
            self.ngZone.run(function () {
                self.dataSet = true;
            });
            setTimeout(function () {
                self.preview.nativeElement.setAttribute('src', URL.createObjectURL(file));
            }, 50);
        };
    };
    CreateComponent.prototype.addPhoto = function () {
        var _this = this;
        if (!this.dataSet)
            return;
        var loader = this.loadingCtrl.create({
            content: "Submitting Photo..."
        });
        loader.present();
        /*Fetches image*/
        var promiseObject = this.images.uploadToFirebase("profile");
        promiseObject.promise.then(function (res) {
            _this.url = res;
            _this.refName = promiseObject.refName;
            /*pushes user details to database*/
            _this.afDB.object('users/' + _this.afAuth.auth.currentUser.uid).update({
                refName: _this.refName,
                url: _this.url
            }).then(function (_) {
                loader.dismiss();
                _this.userInfo.loggedIn = true;
                //this.mapPage.tut = true;
            });
        });
    };
    /*Tries to create account*/
    CreateComponent.prototype.createAccount = function () {
        var _this = this;
        if (this.photoState || !this.checkInput(true)) {
            this.addPhoto();
            return;
        }
        var loader = this.loadingCtrl.create({
            content: "Creating Account..."
        });
        loader.present();
        this.startTrue = false;
        /*Create user*/
        this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.pass1).then(function (_) {
            /*add user display name*/
            _this.afAuth.auth.currentUser.updateProfile({
                displayName: _this.name,
                photoURL: ""
            }).then(function (_) {
                _this.storage.set('mission_x_email', _this.email);
                _this.storage.set('mission_x_password', _this.pass1);
                var today = Date.now();
                //let date = (today.getMonth() + 1) + "-" + today.getDate() + "-" + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                _this.afDB.object('users/' + _this.afAuth.auth.currentUser.uid).update({
                    rating: 0,
                    posts: 0,
                    visits: 1,
                    lastActive: today,
                    firstActive: today,
                    name: _this.name,
                    email: _this.email
                }).catch(function (e) {
                    _this.error = e.message;
                    return;
                });
            }).then(function (_) {
                __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref('/userRating/').child(_this.afAuth.auth.currentUser.uid).set({
                    likes: 0,
                    posts: 0,
                    postLikes: 0,
                    resolves: 0,
                    complete: 0
                }).then(function (_) {
                    _this.photoState = true;
                    _this.slideRight();
                    loader.dismiss();
                });
            }).catch(function (e) {
                _this.error = e.message;
                loader.dismiss();
                return;
            });
        }).catch(function (e) {
            _this.error = e.message;
            loader.dismiss();
            return;
        });
    };
    /*Fetch image from camera*/
    CreateComponent.prototype.cameraRequest = function () {
        var _this = this;
        var promise = this.images.doGetCameraImage(600, 600);
        promise.then(function (res) {
            _this.imageData = "data:image/jpg;base64," + res;
            _this.ngZone.run(function () {
                _this.dataSet = true;
            });
            setTimeout(function () {
                _this.preview.nativeElement.setAttribute('src', _this.imageData);
            }, 250);
        }).catch(function (e) {
        });
    };
    /*Fetch image from album*/
    CreateComponent.prototype.albumRequest = function () {
        var _this = this;
        var promise = this.images.doGetAlbumImage(600, 600);
        promise.then(function (res) {
            _this.imageData = "data:image/jpg;base64," + res;
            _this.ngZone.run(function () {
                _this.dataSet = true;
            });
            setTimeout(function () {
                _this.preview.nativeElement.setAttribute('src', _this.imageData);
            }, 250);
        }).catch(function (e) {
        });
    };
    CreateComponent.prototype.slideRight = function () {
        this.slides.lockSwipes(false);
        this.slides.slideNext(500, null);
        this.slides.lockSwipes(true);
    };
    CreateComponent.prototype.checkInput = function (press) {
        var ready = false;
        // /*Checks to make sure fields are filled in (no profile image required)*/
        if (this.pass1 === this.pass2) {
            if (this.pass1.length > 0 && this.pass2.length > 0 && this.email.length > 0 && this.name.length > 0) {
                console.log(this.pass1.length);
                console.log(this.pass2.length);
                console.log(this.name.length);
                console.log(this.email.length);
                ready = true;
            }
            else {
                console.log("perfect");
                if (press)
                    this.error = this.translate.text.register.fill;
            }
        }
        else {
            if (press)
                this.error = this.translate.text.register.identical;
        }
        return ready;
    };
    //show pop up image
    CreateComponent.prototype.presentImage = function (image) {
        var imageViewer = this.imageViewerCtrl.create(image);
        imageViewer.present();
    };
    return CreateComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('file'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], CreateComponent.prototype, "input", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('file1'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], CreateComponent.prototype, "input1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('thisImage'),
    __metadata("design:type", Object)
], CreateComponent.prototype, "preview", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */])
], CreateComponent.prototype, "slides", void 0);
CreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'create',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\create\create.html"*/'<div>\n  <ion-slides [class.absolute]="dataSet">\n    <ion-slide>\n      <form autocomplete="off">\n        <input type="email" class="text-field top" [(ngModel)]="name" name="myName" [placeholder]="translate.text.register.name" (keyup)="checkInput(press)" autocorrect="on"/>\n        <input type="email" class="text-field" [(ngModel)]="email" name="myEmail" [placeholder]="translate.text.register.email" (keyup)="checkInput(press)" autocorrect="on"/>\n        <input type="password" class="text-field" [(ngModel)]="pass1" name="myPass1" [placeholder]="translate.text.register.pass1" (keyup)="checkInput(press)" autocorrect="on"/>\n        <input type="password" class="text-field" [(ngModel)]="pass2" name="myPass2" [placeholder]="translate.text.register.pass2" (keyup)="checkInput(press)" autocorrect="on"/>\n      </form>\n      <p class="error">{{error}}</p>\n    </ion-slide>\n    <ion-slide>\n        <ion-grid no-padding style="height: 100%" *ngIf="!dataSet">\n            <ion-row [class.hidden]="userInfo.isApp">\n                <ion-col col-6 text-center>\n                    <label>\n                        <img src="assets/new/camera.png"/>\n                        <input #file type="file" accept="image/*" capture="camera" class="fileInput"/>\n                    </label>\n                </ion-col>\n                <ion-col col-6 text-center>\n                    <label>\n                        <img src="assets/new/album.png"/>\n                        <input #file1 type="file" accept="image/*" class="fileInput"/>\n                    </label>\n                </ion-col>\n            </ion-row>\n            <ion-row [class.hidden]="!userInfo.isApp">\n                <ion-col col-6 text-center>\n                    <button ion-button clear (click)="cameraRequest()">\n                        <img src="assets/new/camera.png"/>\n                    </button>\n                </ion-col>\n                <ion-col col-6 text-center>\n                    <button ion-button clear (click)="albumRequest()">\n                        <img src="assets/new/album.png"/>\n                    </button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <div *ngIf="dataSet" class="slide-image">\n          <img #thisImage (click)="presentImage(thisImage)"/>\n        </div> \n    </ion-slide>\n  </ion-slides>\n</div>\n'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\create\create.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_8__providers_images_images__["a" /* ImagesProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_user_info_user_info__["a" /* UserInfoProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_10__providers_translator_translator__["a" /* TranslatorProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */], __WEBPACK_IMPORTED_MODULE_11__providers_click_click__["a" /* ClickProvider */], __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_12_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_4__pages_map_map__["a" /* MapPage */]])
], CreateComponent);

//# sourceMappingURL=create.js.map

/***/ }),

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_click_click__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Vanilla ionic import


//import providers



//firebase import

var ForgotComponent = (function () {
    function ForgotComponent(navCtrl, navParams, afAuth, alertCtrl, loadingCtrl, translate, click, login) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.click = click;
        this.login = login;
        this.email = "";
        this.error = "";
        this.login.forgotComponent = this;
    }
    ForgotComponent.prototype.sendEmail = function () {
        var loader = this.loadingCtrl.create({
            content: this.translate.text.forgot.loading
        });
        loader.present();
        this.error = "";
        var self = this;
        this.afAuth.auth.sendPasswordResetEmail(this.email).then(function () {
            loader.dismiss();
            var sent = self.alertCtrl.create({
                title: this.translate.text.forgot.sent,
                subTitle: this.translate.text.forgot.check,
                buttons: ['OK']
            });
            sent.present();
        }).catch(function (error) {
            loader.dismiss();
            self.error = error.message;
        });
    };
    return ForgotComponent;
}());
ForgotComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'forgot',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\forgot\forgot.html"*/'<div>\n    <input type="email" style="background-color: none; margin-top: 20px;" [(ngModel)]="email" [placeholder]="translate.text.login.email" autocorrect="on"/>\n    <p style="color: #999; font-style: italic" text-center>{{translate.text.forgot.directions}}</p>\n    <p class="error">{{error}}</p>\n</div>\n'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\forgot\forgot.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_translator_translator__["a" /* TranslatorProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_click_click__["a" /* ClickProvider */], __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginComponent */]])
], ForgotComponent);

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_map_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_translator_translator__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//page imports

//provider imports

var TutorialComponent = (function () {
    function TutorialComponent(mapPage, translate) {
        this.mapPage = mapPage;
        this.translate = translate;
        this.types = [];
        this.types.push({
            name: this.translate.text.other.trash,
            src: "assets/images/buttons/trash.png"
        });
        this.types.push({
            name: this.translate.text.other.pest,
            src: "assets/images/buttons/pest.png"
        });
        this.types.push({
            name: this.translate.text.other.building,
            src: "assets/images/buttons/building.png"
        });
        this.types.push({
            name: this.translate.text.other.bug,
            src: "assets/images/buttons/bug.png"
        });
        this.types.push({
            name: this.translate.text.other.cnd,
            src: "assets/images/buttons/cnd.png"
        });
        this.types.push({
            name: this.translate.text.other.water,
            src: "assets/images/buttons/droplet.png"
        });
        this.types.push({
            name: this.translate.text.other.road,
            src: "assets/images/buttons/road.png"
        });
        this.types.push({
            name: this.translate.text.other.tree,
            src: "assets/images/buttons/tree.png"
        });
        this.types.push({
            name: this.translate.text.other.rocked,
            src: "assets/images/buttons/blocked_road.png"
        });
        this.types.push({
            name: this.translate.text.other.electricity,
            src: "assets/images/buttons/electricity.png"
        });
    }
    TutorialComponent.prototype.skip = function () {
        if (this.slides.isEnd()) {
            this.mapPage.tut = false;
        }
        this.slides.slideNext();
    };
    return TutorialComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */])
], TutorialComponent.prototype, "slides", void 0);
TutorialComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'tutorial',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\tutorial\tutorial.html"*/'<div>\n  <div id="shader" (click)="mapPage.tut = false">\n  </div>\n  <!-- All content ends up in \'main\' -->\n  <div id="main">    \n    <!-- here the check button is held -->\n    <div id="check-button">\n      <button ion-button clear (click)="skip()">\n        <img src="assets/images/buttons/arrow.png"/>\n      </button>\n    </div>\n    <ion-slides>\n      <ion-slide>\n        <div class="upper" padding style="background-color: #3fbc05;">\n          <img src="assets/images/logo.png" />\n        </div>\n        <div style="clear: both"></div>\n        <div class="lower">\n          <p>\n            {{translate.text.tutorial.help1}}\n          </p>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class="upper">\n          <img src="assets/images/map.png" />\n        </div>\n        <div style="clear: both"></div>\n        <div class="lower">\n          <p>\n              {{translate.text.tutorial.help2}}\n          </p>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class="upper">\n          <img src="assets/images/plus.png" />\n        </div>\n        <div style="clear: both"></div>\n        <div class="lower">\n          <p>\n              {{translate.text.tutorial.help3}}\n          </p>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class="upper">\n          <img src="assets/images/tabs.jpg" alt="image could not load"/>\n        </div>\n        <div style="clear: both"></div>\n        <div class="lower">\n          <p>\n              {{translate.text.tutorial.help4}}\n          </p>\n        </div>\n      </ion-slide>\n      <ion-slide *ngFor="let type of types">\n          <div text-center>\n            <img [src]="type.src" />\n          </div>\n          <div style="clear: both"></div>\n          <div class="lower">\n            <h1 text-center>\n                {{type.name}}\n            </h1>\n          </div>\n      </ion-slide> \n      <ion-slide>\n        <h2 text-center style="left: 50%; top: 50%; position: absolute; transform: translate(-50%,-50%); width: 100%">\n          {{translate.text.tutorial.ready}}\n        </h2>\n        <div class="upper" padding style="background-color: #3fbc05;">\n          <img src="assets/images/logo.png" />\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</div>'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\tutorial\tutorial.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__pages_map_map__["a" /* MapPage */], __WEBPACK_IMPORTED_MODULE_3__providers_translator_translator__["a" /* TranslatorProvider */]])
], TutorialComponent);

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddResolveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_info__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_map_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_info_user_info__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_images_images__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//vanilla ionic imports


//component imports

//page imports

//image pop up import

//provider imports



//firebase imports


var AddResolveComponent = (function () {
    function AddResolveComponent(userInfo, imageViewerCtrl, images, ngZone, info, events, loadingCtrl, alertCtrl, translate, navCtrl, afAuth) {
        this.userInfo = userInfo;
        this.imageViewerCtrl = imageViewerCtrl;
        this.images = images;
        this.ngZone = ngZone;
        this.info = info;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.desc = "";
        this.submitting = false;
    }
    AddResolveComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var self = this;
        this.input.nativeElement.onchange = function (e) {
            var file = e.target.files[0];
            self.images.selectedFile = file;
            self.ngZone.run(function () {
                self.info.dataSet = true;
            });
            setTimeout(function () {
                self.preview.nativeElement.setAttribute('src', URL.createObjectURL(file));
                self.preview2.nativeElement.setAttribute('src', URL.createObjectURL(file));
            }, 50);
            self.input.nativeElement.value = "";
        };
        this.input1.nativeElement.onchange = function (e) {
            var file = e.target.files[0];
            self.images.selectedFile = file;
            self.ngZone.run(function () {
                self.info.dataSet = true;
            });
            setTimeout(function () {
                self.preview.nativeElement.setAttribute('src', URL.createObjectURL(file));
                self.preview2.nativeElement.setAttribute('src', URL.createObjectURL(file));
            }, 50);
            self.input1.nativeElement.value = "";
        };
        this.events.subscribe("resolveSlideNext", function () {
            _this.slides.slideNext(500);
        });
        this.events.subscribe("resolveSlidePrev", function () {
            _this.slides.slidePrev(500);
        });
        this.events.subscribe("resolveRestart", function () {
            _this.slides.slideTo(0, 500);
        });
        this.events.subscribe("resolveSubmit", function () {
            _this.submit();
        });
        this.info.resolve = this;
    };
    //show pop up image
    AddResolveComponent.prototype.presentImage = function (image) {
        var imageViewer = this.imageViewerCtrl.create(image);
        imageViewer.present();
    };
    //request photo from user's camera
    AddResolveComponent.prototype.cameraRequest = function () {
        var _this = this;
        var promise = this.images.doGetCameraImage(600, 600);
        promise.then(function (res) {
            _this.imageData = "data:image/jpg;base64," + res;
            setTimeout(function () {
                _this.preview.nativeElement.setAttribute('src', _this.imageData);
                _this.preview2.nativeElement.setAttribute('src', _this.imageData);
            }, 50);
            _this.ngZone.run(function () {
                _this.info.dataSet = true;
            });
        }).catch(function (e) {
        });
    };
    //request photo from user's album
    AddResolveComponent.prototype.albumRequest = function () {
        var _this = this;
        var promise = this.images.doGetAlbumImage(600, 600);
        promise.then(function (res) {
            _this.imageData = "data:image/jpg;base64," + res;
            setTimeout(function () {
                _this.preview.nativeElement.setAttribute('src', _this.imageData);
                _this.preview2.nativeElement.setAttribute('src', _this.imageData);
            }, 50);
            _this.ngZone.run(function () {
                _this.info.dataSet = true;
            });
        }).catch(function (e) {
        });
    };
    AddResolveComponent.prototype.dismiss = function (data) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_map_map__["a" /* MapPage */]);
    };
    AddResolveComponent.prototype.submit = function () {
        var _this = this;
        if (this.submitting)
            return;
        this.submitting = true;
        var self = this;
        var loader = this.loadingCtrl.create({
            content: this.translate.text.infoWindow.submitting
        });
        var successAlert = this.alertCtrl.create({
            title: this.translate.text.infoWindow.submitted,
            buttons: [{
                    text: this.translate.text.infoWindow.ok,
                    handler: function () {
                        _this.dismiss(false);
                    }
                }]
        });
        loader.present();
        //upload image
        var promiseObject = this.images.uploadToFirebase("resolves");
        promiseObject.promise.then(function (res) {
            var url = res;
            var refName = promiseObject.refName;
            var data = {
                url: url,
                refName: refName,
                info: _this.desc,
                id: _this.afAuth.auth.currentUser.uid,
                name: _this.afAuth.auth.currentUser.displayName
            };
            //get link to resolution info
            var key = __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/resolves/').child(_this.userInfo.activeData.key).push(data).key;
            //link resolution info to actual report
            __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/positions/').child(_this.userInfo.activeData.key).child('resolves').push(key).then(function (_) {
                __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref("/positions/" + _this.userInfo.activeData.key + "/status").set('Complete');
                //update # of resolves
                var userRating = __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/userRating/').child(self.afAuth.auth.currentUser.uid);
                userRating.once('value', function (snap) {
                    if (!snap.hasChild('resolves')) {
                        userRating.child('resolves').set(1);
                    }
                    else {
                        userRating.child('resolves').set(snap.val().resolves + 1);
                    }
                });
                loader.dismiss();
                successAlert.present();
            }).catch(function (e) {
                loader.dismiss();
                alert("Error: " + e.message);
            });
        }).catch(function (e) {
            loader.dismiss();
            alert("Error: " + e.message);
        });
    };
    return AddResolveComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('file'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], AddResolveComponent.prototype, "input", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('file1'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], AddResolveComponent.prototype, "input1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */]),
    __metadata("design:type", Object)
], AddResolveComponent.prototype, "slides", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('thisImage'),
    __metadata("design:type", Object)
], AddResolveComponent.prototype, "preview", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('thisImage2'),
    __metadata("design:type", Object)
], AddResolveComponent.prototype, "preview2", void 0);
AddResolveComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'add-resolve',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\add-resolve\add-resolve.html"*/'<!-- Generated template for the AddResolveComponent component -->\n<div class="outer-div">\n  <ion-slides pager>\n    <ion-slide>\n        <div class="center">\n            <ion-grid no-padding class="show" [class.hidden]="info.dataSet">\n                <ion-row [class.hidden]="userInfo.isApp">\n                    <ion-col col-6 text-center>\n                        <label>\n                            <img src="assets/new/camera.png"/>\n                            <input #file type="file" accept="image/*" capture="camera" class="fileInput"/>\n                        </label>\n                    </ion-col>\n                    <ion-col col-6 text-center>\n                        <label>\n                            <img src="assets/new/album.png"/>\n                            <input #file1 type="file" accept="image/*" class="fileInput"/>\n                        </label>\n                    </ion-col>\n                </ion-row>\n                <ion-row [class.hidden]="!userInfo.isApp">\n                    <ion-col col-6 text-center>\n                        <button ion-button clear (click)="cameraRequest()">\n                            <img src="assets/new/camera.png"/>\n                        </button>\n                    </ion-col>\n                    <ion-col col-6 text-center>\n                        <button ion-button clear (click)="albumRequest()">\n                            <img src="assets/new/album.png"/>\n                        </button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <div *ngIf="info.dataSet" class="slide-image">\n                <img #thisImage (click)="presentImage(thisImage)" />\n            </div> \n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="center">\n            <ion-item>\n                <ion-label floating style="color: green" [class.red-text]="desc.length < 1">{{translate.text.resolve.note}}</ion-label>\n                <ion-input maxlength="120" [(ngModel)]="desc"></ion-input>\n            </ion-item>\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="center">\n            <div *ngIf="info.dataSet" class="slide-image2">\n            <img #thisImage2 (click)="presentImage(thisImage2)" />\n            </div> \n            <div class="status" *ngIf="info.dataSet">\n            </div>\n            <p *ngIf="desc.trim().length > 0">{{desc}}</p>\n            <p *ngIf="desc.trim().length < 1" style="color: #666" (click)="slides.slideTo(1,500)"><em>{{translate.text.resolve.noDesc}}</em></p>\n            <p *ngIf="!info.dataSet" class="error" (click)="slides.slideTo(0,500)" style="border: 1px solid red; border-radius: 5px;">{{translate.text.resolve.noImage}}</p>\n            <p *ngIf="info.dataSet" class="confirm" text-wrap>{{translate.text.resolve.good}}</p>\n        </div>\n    </ion-slide>\n  </ion-slides>\n</div>\n'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\add-resolve\add-resolve.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_user_info_user_info__["a" /* UserInfoProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_6__providers_images_images__["a" /* ImagesProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_2__info_info__["a" /* InfoComponent */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__providers_translator_translator__["a" /* TranslatorProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */]])
], AddResolveComponent);

//# sourceMappingURL=add-resolve.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_map_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_info_user_info__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_images_images__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//vanilla ionic imports



//provider imports 



//firebase imports


var InfoComponent = (function () {
    function InfoComponent(mapPage, translate, userInfo, afAuth, ngZone, events, images, alertCtrl, navCtrl) {
        this.mapPage = mapPage;
        this.translate = translate;
        this.userInfo = userInfo;
        this.afAuth = afAuth;
        this.ngZone = ngZone;
        this.events = events;
        this.images = images;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.state = 'none';
        this.edit = false;
        this.addResolve = false;
        this.hideType = false;
        this.status = "";
        this.selection = "";
        this.id = "";
        this.myText = "";
        this.dataSet = false;
        var data = this.userInfo.activeData;
        this.myData = JSON.parse(JSON.stringify(data));
        this.state = this.mapPage.mapState;
        //translate status
        switch (data.status) {
            case 'Complete':
                this.status = this.translate.text.other.complete;
                break;
            case 'To Do':
                this.status = this.translate.text.other.todo;
                break;
        }
        this.id = this.userInfo.activeData.key;
    }
    InfoComponent.prototype.ngAfterViewInit = function () {
        this.state = this.mapPage.mapState;
    };
    InfoComponent.prototype.checkState = function (state) {
        return state == this.state;
    };
    InfoComponent.prototype.updateState = function (state) {
        this.state = state;
        this.edit = false;
    };
    InfoComponent.prototype.closeOut = function () {
        this.mapPage.infoShow = false;
    };
    InfoComponent.prototype.loggedAuth = function () {
        return this.afAuth.auth.currentUser.uid == this.userInfo.activeData.id;
    };
    InfoComponent.prototype.backToInfo = function () {
        if (this.edit) {
            this.edit = false;
            return;
        }
        if (this.addResolve) {
            if (this.resolve != undefined) {
                if (this.dataSet && this.resolve.slides.getActiveIndex() == 0) {
                    this.dataSet = false;
                    this.images.doClear();
                    return;
                }
                else if (this.resolve.slides.getActiveIndex() == 1 && this.resolve.desc.length > 0) {
                    this.resolve.desc = "";
                    return;
                }
                else if (this.resolve.slides.getActiveIndex() == 2) {
                    this.events.publish("resolveRestart");
                    return;
                }
            }
            this.addResolve = false;
            return;
        }
        this.addResolve = false;
        this.closeOut();
        this.state = 'info';
        this.events.publish('backToInfo');
    };
    InfoComponent.prototype.next = function () {
        if (this.resolve != undefined) {
            if (this.resolve.slides.getActiveIndex() == 2) {
                this.resolve.submit();
            }
            else {
                this.events.publish("resolveSlideNext");
            }
        }
    };
    InfoComponent.prototype.checkCheck = function () {
        if (this.resolve != undefined && this.addResolve) {
            if (this.dataSet && this.resolve.slides.getActiveIndex() == 0) {
                return true;
            }
            else if (this.resolve.slides.getActiveIndex() == 1) {
                return true;
            }
            else if (this.resolve.slides.getActiveIndex() == 2 && this.dataSet) {
                return true;
            }
        }
        return false;
    };
    InfoComponent.prototype.updateChecks = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref("/positions/" + this.myData.key + "/checks").set(this.myData.checks).then(function (_) {
            var myAlert = _this.alertCtrl.create({
                title: _this.translate.text.infoWindow.submitted,
                buttons: ['OK']
            });
            myAlert.present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__pages_map_map__["a" /* MapPage */]);
        });
    };
    InfoComponent.prototype.doCommentInfo = function () {
        var alert = this.alertCtrl.create({
            title: this.translate.text.infoWindow.aboutTitle,
            message: this.translate.text.infoWindow.aboutMessage,
            buttons: ['OK']
        });
        alert.present();
    };
    return InfoComponent;
}());
InfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'info',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\info\info.html"*/'<div id="shader" (click)="closeOut()"></div>\n\n<!-- info view -->\n<div class="full" style="pointer-events: none">\n  <div class="section" [class.main]="checkState(\'comment\') || checkState(\'info\')" [class.resolve]="!userInfo.isMobile">\n    <button class="edit show" ion-button clear (click)="state = \'edit\'; edit=true" [class.hidden]="checkState(\'comment\')">\n      <img src="assets/images/buttons/edit_button.png" width="40"/>\n    </button>\n    <ion-grid class="check-button">\n      <ion-row>\n        <ion-col text-center>\n          <button class="show" ion-button clear (click)="closeOut()" [class.hidden]="checkState(\'comment\')">\n            <img src="assets/images/buttons/ex.png"/>\n          </button>\n        </ion-col>\n        <ion-col text-center>\n          <button class="show chat-button" ion-button clear (click)="mapPage.comment = true;" [class.hidden]="checkState(\'comment\')">\n            <img src="assets/images/buttons/chat.png"/>\n          </button>\n        </ion-col>\n        <ion-col text-center>\n            <button class="show" ion-button clear (click)="updateChecks()" [class.hidden]="checkState(\'comment\')">\n              <img src="assets/images/buttons/check.png"/>\n            </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div style="height: 100%; width: 100%; overflow: hidden; position: relative;">\n      <info-view class="page"></info-view>\n    </div>\n  </div>\n\n  <!-- edit view -->\n  <div class="full" class="section" [class.main]="checkState(\'edit\') && edit">\n      <ion-grid class="check-button" [class.no-click]="!checkState(\'edit\')">\n        <ion-row>\n          <ion-col text-center>\n            <button class="show" ion-button clear (click)="state = \'info\'; edit = false;" [class.hidden]="!checkState(\'edit\')">\n              <img src="assets/images/buttons/ex.png"/>\n            </button>\n          </ion-col>\n          <ion-col text-center class="show">\n              <button class="show" ion-button clear (click)="editComponent.submit()">\n                <img src="assets/images/buttons/check.png"/>\n              </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n      <div style="height: 100%; width: 100%; overflow: hidden; position: relative;">\n        <div class="page" style="overflow: scroll">\n          <edit-view></edit-view>\n        </div>\n      </div>\n    </div>\n</div>'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\info\info.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__pages_map_map__["a" /* MapPage */], __WEBPACK_IMPORTED_MODULE_4__providers_translator_translator__["a" /* TranslatorProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_user_info_user_info__["a" /* UserInfoProvider */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_5__providers_images_images__["a" /* ImagesProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavController */]])
], InfoComponent);

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_top_rated_top_rated__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_map_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_reports_reports__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_user_info_user_info__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_click_click__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//vanilla ionic imports





//import { SocialSharing } from '@ionic-native/social-sharing';
// import { Push, PushToken } from '@ionic/cloud-angular';
// import { CallNumber } from '@ionic-native/call-number';
//page imports







//import { HomePage } from '../pages/home/home';
//provider imports



//firebase imports


var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth, menuCtrl, userInfo, translate, storage, click, events) {
        var _this = this;
        this.afAuth = afAuth;
        this.menuCtrl = menuCtrl;
        this.userInfo = userInfo;
        this.translate = translate;
        this.storage = storage;
        this.click = click;
        this.events = events;
        this.name = '';
        this.imgSrc = '';
        this.notificationCount = 0;
        this.share = false;
        this.ratedPage = __WEBPACK_IMPORTED_MODULE_5__pages_top_rated_top_rated__["a" /* TopRatedPage */];
        this.profilePage = __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */];
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            _this.storage.get('mzap_language').then(function (res) {
                if (!res) {
                    _this.runLogin();
                    return;
                }
                ;
                switch (res) {
                    case 'en':
                        _this.translate.selectLanguage(_this.translate.en);
                        break;
                    case 'es':
                        _this.translate.selectLanguage(_this.translate.es);
                        break;
                    default:
                        _this.translate.selectLanguage(_this.translate.es);
                        break;
                }
                _this.runLogin();
            }).catch(function (e) {
                _this.runLogin();
            });
        });
        // this.push.register().then((t: PushToken) => {
        //     return this.push.saveToken(t);
        // }).then((t: PushToken) => {
        //     console.log('Token saved:', t.token);
        // });
        // this.push.rx.notification().subscribe((msg) => {
        //     alert(msg.title + ': ' + msg.text);
        // });
        /*
        setTimeout(function updatePosition() {
            navigator.geolocation.getCurrentPosition((position) => {
                    firebase.database().ref('/trackPosition/').set({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },null,{enableHighAccuracy: true, maximumAge:3000, timeout: 5000});
            setTimeout(updatePosition, 15000);
        }, 15000);*/
    }
    MyApp.prototype.runLogin = function () {
        var _this = this;
        this.storage.get('mission_x_email').then(function (email) {
            if (!email) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */];
                return;
            }
            ;
            _this.storage.get('mission_x_password').then(function (pass) {
                _this.afAuth.auth.signInWithEmailAndPassword(email, pass).then(function (data) {
                    _this.runUser(_this.afAuth.auth.currentUser);
                })
                    .catch(function (e) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */];
                    alert(_this.translate.text.login.noLogin);
                });
            }).catch(function (e) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */];
            });
        }).catch(function (e) {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */];
        });
    };
    // call(){
    //     this.caller.callNumber('15857499752',true).catch(e => {
    //         alert(e.message);
    //         alert(e);
    //         alert("That didn't work");
    //     })
    // }
    MyApp.prototype.runUser = function (user) {
        //var today = new Date();
        /*get current date and time*/
        //var date = (today.getMonth()+1) + "-" + today.getDate() + "-" + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var self = this;
        /*upate user visits and last active time*/
        if (__WEBPACK_IMPORTED_MODULE_15_firebase__["database"]().ref('users/').child(user.uid + "")) {
            __WEBPACK_IMPORTED_MODULE_15_firebase__["database"]().ref('users/').child(user.uid + "").once("value", function (snapshot) {
                if (snapshot.val() && snapshot.val().visits) {
                    __WEBPACK_IMPORTED_MODULE_15_firebase__["database"]().ref('/users/').child(self.afAuth.auth.currentUser.uid).update({
                        visits: snapshot.val().visits + 1,
                        lastActive: Date.now()
                    }).then(function (_) {
                        self.userInfo.pageState = 'map';
                        self.userInfo.loggedIn = true;
                        self.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */];
                    }).catch(function (e) {
                        alert(e.message);
                    });
                }
            });
        }
    };
    //open top page
    MyApp.prototype.topRated = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_top_rated_top_rated__["a" /* TopRatedPage */]);
        this.userInfo.pageState = 'top';
        this.menuCtrl.close();
    };
    //open map page
    MyApp.prototype.map = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */]);
        this.userInfo.pageState = 'map';
        this.menuCtrl.close();
    };
    //open profile page
    MyApp.prototype.profile = function () {
        this.userInfo.profileView = this.afAuth.auth.currentUser.uid;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */]);
        this.userInfo.pageState = 'profile';
        this.menuCtrl.close();
    };
    //open register page
    MyApp.prototype.register = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */]);
        this.menuCtrl.close();
    };
    //open settings page
    MyApp.prototype.settings = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */]);
        this.userInfo.pageState = 'settings';
        this.menuCtrl.close();
    };
    //open reports page
    MyApp.prototype.reports = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_reports_reports__["a" /* ReportsPage */]);
        this.userInfo.pageState = 'reports';
        this.menuCtrl.close();
    };
    MyApp.prototype.notifications = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__["a" /* NotificationsPage */]);
        this.userInfo.pageState = 'notifications';
        this.menuCtrl.close();
    };
    //open side nav
    MyApp.prototype.openMenu = function () {
        var _this = this;
        if (this.checkLogin()) {
            __WEBPACK_IMPORTED_MODULE_15_firebase__["database"]().ref('users').child(this.afAuth.auth.currentUser.uid).once('value').then(function (snapshot) {
                _this.name = snapshot.val().name;
                _this.imgSrc = snapshot.val().url;
            });
        }
    };
    MyApp.prototype.tutorial = function () {
        var _this = this;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */]);
        this.userInfo.pageState = 'map';
        setTimeout(function () {
            _this.menuCtrl.close();
            _this.events.publish('tut:open');
        }, 100);
    };
    //check if current user is signed in
    MyApp.prototype.checkLogin = function () {
        return (this.afAuth.auth.currentUser) ? true : false;
    };
    //check which page the user is on
    MyApp.prototype.checkPage = function (page) {
        return (this.userInfo.pageState == page);
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.click.click('settingsLogout');
        this.afAuth.auth.signOut().then(function (out) {
            _this.storage.remove('mission_x_password').then(function (_) {
                _this.storage.remove('mission_x_email').then(function (_) {
                    _this.userInfo.loggedIn = false;
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */]);
                    _this.menuCtrl.close();
                });
            });
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\app\app.html"*/'<ion-menu side="left" type="push" [content]="mycontent" (ionOpen)="openMenu()">\n\n    <ion-content>\n\n        <header text-center>\n\n            <div class="menu-shader">\n\n\n\n            </div>\n\n            <div class="div-holder" *ngIf="checkLogin()">\n\n                <button ion-button style="height: 100%" clear (click)="profile()">\n\n                    <div *ngIf="imgSrc">\n\n                        <div text-center class="image-div" [style.background-image]="\'url(\' + imgSrc + \')\'"></div>\n\n                        <h2 style="color: white">{{name}}</h2>\n\n                    </div>\n\n                    <div *ngIf="!imgSrc">\n\n                        <div text-center class="image-div"></div>\n\n                        <h2 style="color: white">{{name}}</h2>\n\n                    </div>\n\n                </button>\n\n            </div>\n\n            <div class="div-holder" *ngIf="!checkLogin()">\n\n                <button ion-button style="height: 100%" clear (click)="register()">\n\n                    <div>\n\n                        <img src="assets/profile.png" alt="Profile Image" />\n\n                        <h2 style="color: black">{{translate.text.menu.user}}</h2>\n\n                    </div>\n\n                </button>\n\n            </div>\n\n        </header>\n\n        <div class="bottom-shade">\n\n        </div>\n\n        <div class="background">\n\n            <button class="menu-button" (click)="map()" [class.nav-item]="checkPage(\'map\')">\n\n                {{translate.text.menu.map}}\n\n            </button>\n\n        </div>\n\n        <div class="background">\n\n            <button class="menu-button" (click)="notifications()" [class.nav-item]="checkPage(\'notifications\')">\n\n                Notifications\n\n            </button>\n\n            <div class="notification" *ngIf="userInfo.notificationCount > 0">\n\n                <p>{{userInfo.notificationCount}}</p>\n\n            </div>\n\n        </div>\n\n        <div class="background">\n\n            <button class="menu-button" (click)="reports()" [class.nav-item]="checkPage(\'reports\')">\n\n                {{translate.text.menu.reports}}\n\n            </button>\n\n        </div>\n\n        <!-- <div class="background">\n\n            <button class="menu-button" (click)="topRated()" [class.nav-item]="checkPage(\'top\')">\n\n                {{translate.text.menu.rankings}}\n\n            </button>\n\n        </div> -->\n\n        <div class="background">\n\n            <button class="menu-button" (click)="settings()" [class.nav-item]="checkPage(\'settings\')">\n\n                {{translate.text.menu.settings}}\n\n            </button>\n\n        </div>\n\n        <div class="background">\n\n            <button class="menu-button" (click)="logout()">\n\n                {{translate.text.menu.logout}}\n\n            </button>\n\n        </div>\n\n        <ion-grid class="hide-symbols" [class.show-symbols]="share">\n\n            <ion-row *ngIf="!userInfo.isApp">\n\n                <ion-col text-center>\n\n                    <a href="https://twitter.com/home?status=mzap.org">\n\n                        <ion-icon name="logo-twitter" style="color: #00aced; font-size: 24pt"></ion-icon>\n\n                    </a>\n\n                </ion-col>\n\n                <ion-col text-center>\n\n                    <a href="https://www.facebook.com/sharer/sharer.php?u=mzap.org">\n\n                        <ion-icon name="logo-facebook" style="color: #3b5998; font-size: 24pt"></ion-icon>\n\n                    </a>\n\n                </ion-col>\n\n                <ion-col text-center>\n\n                    <a href="whatsapp://send" data-href="mzap.org">\n\n                        <ion-icon name="logo-whatsapp" style="color: #34af23; font-size: 24pt"></ion-icon>\n\n                    </a>\n\n                </ion-col>\n\n            </ion-row>\n\n            <!-- <ion-row *ngIf="userInfo.isApp">\n\n                <ion-col text-center>\n\n                    <button ion-button icon-only clear (click)=\'shareTwitter()\'>\n\n                        <ion-icon name="logo-twitter" style="color: #00aced; font-size: 24pt"></ion-icon>\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col text-center>\n\n                    <button ion-button icon-only clear (click)=\'shareFacebook()\'>\n\n                        <ion-icon name="logo-facebook" style="color: #3b5998; font-size: 24pt"></ion-icon>\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col text-center>\n\n                    <button ion-button icon-only clear (click)=\'shareWhatsapp()\'>\n\n                        <ion-icon name="logo-whatsapp" style="color: #34af23; font-size: 24pt"></ion-icon>\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row> -->\n\n        </ion-grid>\n\n        <!-- <button ion-button (click)="tutorial()" class="tutorial">Tutorial</button>\n\n        <button ion-button (click)="share = !share" [class.menu-sharing]="share" class="menu-share">{{translate.text.menu.share}}</button> -->\n\n        <!-- <button ion-button (click)="call()">Call Mom</button> -->\n\n    </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */], __WEBPACK_IMPORTED_MODULE_12__providers_user_info_user_info__["a" /* UserInfoProvider */], __WEBPACK_IMPORTED_MODULE_13__providers_translator_translator__["a" /* TranslatorProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_14__providers_click_click__["a" /* ClickProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_map_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_info_user_info__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_images_images__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//page imports

//provider imports 



//firebase imports

var AddComponent = (function () {
    function AddComponent(mapPage, translate, userInfo, afAuth, images, loadingCtrl, socialSharing, events, alertCtrl) {
        this.mapPage = mapPage;
        this.translate = translate;
        this.userInfo = userInfo;
        this.afAuth = afAuth;
        this.images = images;
        this.loadingCtrl = loadingCtrl;
        this.socialSharing = socialSharing;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.dataSet = false;
        this.type = undefined;
        this.desc = "";
        this.show = true;
        this.url = "";
        this.refName = "";
        this.error = "";
        this.scroll = 1;
        this.share = true;
        this.submitted = false;
        this.currentColor = 'a';
        this.checks = [];
        this.presets = [];
        this.checks.push({ text: "", state: false, amount: 0 });
        this.presets = [
            { text: this.translate.text.items.e00, state: false, amount: 0 },
            { text: this.translate.text.items.e01, state: false, amount: 0 },
            { text: this.translate.text.items.e02, state: false, amount: 0 },
            { text: this.translate.text.items.e03, state: false, amount: 0 },
            { text: this.translate.text.items.e04, state: false, amount: 0 },
            { text: this.translate.text.items.e05, state: false, amount: 0 },
            { text: this.translate.text.items.e06, state: false, amount: 0 },
            { text: this.translate.text.items.e07, state: false, amount: 0 },
            { text: this.translate.text.items.e08, state: false, amount: 0 },
            { text: this.translate.text.items.e09, state: false, amount: 0 },
            { text: this.translate.text.items.e10, state: false, amount: 0 },
            { text: this.translate.text.items.e11, state: false, amount: 0 },
            { text: this.translate.text.items.e12, state: false, amount: 0 },
            { text: this.translate.text.items.e13, state: false, amount: 0 },
            { text: this.translate.text.items.e14, state: false, amount: 0 },
            { text: this.translate.text.items.e15, state: false, amount: 0 },
            { text: this.translate.text.items.e16, state: false, amount: 0 },
            { text: this.translate.text.items.e17, state: false, amount: 0 },
            { text: this.translate.text.items.e18, state: false, amount: 0 },
            { text: this.translate.text.items.e19, state: false, amount: 0 },
        ];
    }
    AddComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.main.nativeElement.style.transform = "translate(-50%,-50%)";
        }, 10);
    };
    AddComponent.prototype.openInfo = function () {
        if (this.slide.getActiveIndex() == 0) {
            var alert1 = this.alertCtrl.create({
                title: this.translate.text.add.title1,
                subTitle: this.translate.text.add.sub1,
                buttons: ['OK']
            });
            alert1.present();
        }
        else {
            var alert2 = this.alertCtrl.create({
                title: this.translate.text.add.title2,
                buttons: ['OK']
            });
            alert2.present();
        }
    };
    AddComponent.prototype.closeOut = function () {
        this.mapPage.addShow = false;
    };
    AddComponent.prototype.loggedAuth = function () {
        return this.afAuth.auth.currentUser.uid == this.userInfo.activeData.id;
    };
    //sliding for resolved images
    AddComponent.prototype.slideLeft = function () {
        this.slide.slidePrev(500, null);
    };
    AddComponent.prototype.slideRight = function (bool) {
        if (!bool) {
            if (this.slide.getActiveIndex() == 1) {
                this.doSubmit();
            }
        }
        if (this.slide.getActiveIndex() == 2) {
            this.mapPage.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_map_map__["a" /* MapPage */]);
        }
        this.slide.slideNext(500, null);
    };
    AddComponent.prototype.goToSlide = function () {
        this.slide.slideTo(this.scroll, 500);
    };
    AddComponent.prototype.doSubmit = function () {
        var _this = this;
        for (var b = 0; b < this.checks.length; b++) {
            this.checks[b].text = this.checks[b].text.trim();
            if (this.checks[b].amount > 999) {
                this.checks[b].amount = 999;
            }
            if (this.checks[b].text.length < 1 || !this.checks[b].amount || this.checks[b].amount < 1) {
                this.checks.splice(b, 1);
                b--;
            }
        }
        for (var i = 0; i < this.presets.length; i++) {
            if (this.presets[i].amount > 999) {
                this.presets[i].amount = 999;
            }
            if (!this.presets[i].amount || this.presets[i].amount < 1) {
                this.presets.splice(i, 1);
                i--;
            }
        }
        this.checks = this.presets.concat(this.checks);
        if (this.checks.length < 1)
            return;
        var loader = this.loadingCtrl.create({
            content: this.translate.text.add.submitting,
        });
        loader.present();
        this.submitted = true;
        this.mapPage.mapView.submitReport({
            show: true,
            type: this.currentColor,
            desc: this.desc,
            checks: this.checks,
            loader: loader,
        });
        loader.onDidDismiss(function () {
            var myAlert = _this.alertCtrl.create({
                title: _this.translate.text.add.success,
                buttons: ['OK']
            });
            myAlert.present();
            _this.mapPage.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_map_map__["a" /* MapPage */]);
        });
    };
    AddComponent.prototype.doShare = function () {
        var _this = this;
        this.share = true;
        setTimeout(function () {
            //this.slideRight(true);
            _this.slide.lockSwipes(true);
        }, 50);
    };
    AddComponent.prototype.runCheck = function (slide) {
        // if (slide == 1) {
        //   if (!this.dataSet) return false;
        // }
        if (this.slide.getActiveIndex() != slide)
            return false;
        return true;
    };
    AddComponent.prototype.submit = function () {
        var amount = 0;
        this.presets.forEach(function (item) {
            if (item.amount && item.amount > 0)
                amount++;
        });
        this.checks.forEach(function (item) {
            item.amount = Math.floor(item.amount);
            if (item.text.trim().length > 0 && item.amount && item.amount >= 1)
                amount++;
        });
        if (amount > 0)
            return true;
        return false;
    };
    return AddComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('main'),
    __metadata("design:type", Object)
], AddComponent.prototype, "main", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */])
], AddComponent.prototype, "slide", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('preview'),
    __metadata("design:type", Object)
], AddComponent.prototype, "preview", void 0);
AddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'add',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\add\add.html"*/'<div id="shader" (click)="closeOut()">\n\n\n\n</div>\n\n<div id="main" #main  class="noPadding" [class.notType]="this.slide.getActiveIndex() != 0">\n\n  <div class="type" (click)="openInfo()" *ngIf="this.slide.getActiveIndex() != 2">\n\n    <img width="40" src="assets/images/icons/question.png"/>\n\n  </div>\n\n  <div class="nav-buttons" [class.show]="runCheck(0)" [class.hidden]="!runCheck(0)">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col text-center>\n\n          <button ion-button clear (click)="slideRight(true)">\n\n            <img src=\'assets/images/buttons/check.png\'/>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <div class="nav-buttons" [class.show]="runCheck(1) && submit()" [class.hidden]="!runCheck(1) || !submit()">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col text-center>\n\n          <button ion-button clear (click)="slideRight(false)">\n\n            <img src=\'assets/images/buttons/check.png\'/>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <!-- <div class="nav-buttons" [class.show]="runCheck(2)" [class.hidden]="!runCheck(2)">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col text-center>\n\n          <button ion-button clear (click)="slideRight(false)">\n\n            <img src=\'assets/images/buttons/check.png\'/>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div> -->\n\n\n\n  <div class="scroll-div">\n\n  <ion-slides>\n\n    <ion-slide>\n\n      <confirm></confirm>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <description></description>\n\n    </ion-slide>\n\n    <!-- <ion-slide class="thanks" *ngIf="submitted">\n\n      <h2 text-center padding>{{translate.text.add.thanks}}</h2>\n\n      <p text-center >{{translate.text.add.share}}</p>\n\n    </ion-slide> -->\n\n  </ion-slides>\n\n    </div>\n\n  <!-- <button ion-button (click)="share = !share">Viewable</button> -->\n\n</div>'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\components\add\add.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__pages_map_map__["a" /* MapPage */], __WEBPACK_IMPORTED_MODULE_5__providers_translator_translator__["a" /* TranslatorProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_user_info_user_info__["a" /* UserInfoProvider */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_6__providers_images_images__["a" /* ImagesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], AddComponent);

//# sourceMappingURL=add.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_profile_edit_profile__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_translator_translator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_info_user_info__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_click_click__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_img_viewer__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//vanilla ionic imports


//pages import


//provider imports



//image pop up import

//firebase imports


var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, menuCtrl, afAuth, translate, imageViewerCtrl, userInfo, modalCtrl, click) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.afAuth = afAuth;
        this.translate = translate;
        this.imageViewerCtrl = imageViewerCtrl;
        this.userInfo = userInfo;
        this.modalCtrl = modalCtrl;
        this.click = click;
        this.reports = [];
        this.user = {};
        this.rating = {};
        this.theReports = "";
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.reports = [];
        var self = this;
        //fetch user posts from firebase
        __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('/positions/').orderByChild('id').equalTo(this.userInfo.profileView)
            .once('value').then(function (snapshot) {
            snapshot.forEach(function (item) {
                if (!item.val().show && self.afAuth.auth.currentUser.uid != self.userInfo.profileView)
                    return;
                //create object to hold data on each post
                var obj = {
                    type: item.val().type,
                    status: item.val().status,
                    description: item.val().description,
                    url: item.val().url,
                    lat: item.val().lat,
                    lng: item.val().lng
                };
                //translate type
                switch (item.val().type) {
                    case 'bugs':
                        obj.type = self.translate.text.other.bug;
                        break;
                    case 'building':
                        obj.type = self.translate.text.other.building;
                        break;
                    case 'trash':
                        obj.type = self.translate.text.other.trash;
                        break;
                    case 'pest':
                        obj.type = self.translate.text.other.pest;
                        break;
                    case 'cnd':
                        obj.type = self.translate.text.other.cnd;
                        break;
                }
                //translate status
                switch (item.val().status) {
                    case 'Complete':
                        obj.status = self.translate.text.other.complete;
                        break;
                    case 'To Do':
                        obj.status = self.translate.text.other.todo;
                        break;
                }
                //push post to front of array
                self.reports.unshift(obj);
            });
        });
        __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('users').child(this.userInfo.profileView).once('value').then(function (snapshot) {
            _this.user = snapshot.val();
        }).then(function (_) {
            if (_this.translate.text == _this.translate.en) {
                _this.theReports = _this.user.name + "'s Reports";
            }
            else {
                _this.theReports = "Los informes de " + _this.user.name;
            }
        });
        __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('userRating').child(this.userInfo.profileView).once('value').then(function (snapshot) {
            if (snapshot.val()) {
                _this.rating = snapshot.val();
            }
            else {
                _this.rating = {
                    posts: 0,
                    resolves: 0
                };
            }
        });
    };
    //Check if this is your own user profile
    ProfilePage.prototype.checkProfile = function () {
        return (this.userInfo.profileView == this.afAuth.auth.currentUser.uid) ? true : false;
    };
    //show pop up image
    ProfilePage.prototype.presentImage = function (image) {
        var imageViewer = this.imageViewerCtrl.create(image);
        imageViewer.present();
    };
    //open menu
    ProfilePage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    //Bring up Edit Modal
    ProfilePage.prototype.openEdit = function () {
        var _this = this;
        if (!this.checkProfile())
            return;
        var editModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__edit_profile_edit_profile__["a" /* EditProfilePage */], null);
        editModal.onDidDismiss(function (res) {
            if (res) {
                _this.ionViewDidLoad();
            }
        });
        editModal.present();
    };
    //bring user to location on map
    ProfilePage.prototype.showOnMap = function (lat, lng) {
        this.click.click('profileShowOnMap');
        //remove filters and update menu pageState
        this.userInfo.filter = undefined;
        this.userInfo.pageState = 'map';
        //set zoom and position of map
        this.userInfo.lat = lat;
        this.userInfo.lng = lng;
        this.userInfo.zoom = 20;
        //go to map
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */]);
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\profile\profile.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-grid class="ionic-title">\n\n            <ion-row>\n\n                <ion-col text-left>\n\n                    <ion-buttons start *ngIf="checkProfile() && !navCtrl.canGoBack()">\n\n                        <button ion-button clear item-start (click)="openMenu()" class=\'nav-burg\'>\n\n                            <img class="nav-burg" src="assets/hamburger.png" alt="nav"/>\n\n                        </button>\n\n                    </ion-buttons>\n\n                </ion-col>\n\n                <ion-col col-auto class="title" *ngIf="checkProfile()">\n\n                    {{translate.text.profile.profile}}\n\n                </ion-col>\n\n                <ion-col col-auto class="title" *ngIf="!checkProfile()">\n\n                    {{user.name}}\n\n                </ion-col>\n\n                <ion-col text-right>\n\n                    <ion-buttons end *ngIf="checkProfile()">\n\n                        <button ion-button clear item-end class=\'nav-edit\' (click)="openEdit()">\n\n                            <img class="nav-edit" src="assets/images/buttons/edit.png" alt="nav"/>\n\n                        </button>\n\n                    </ion-buttons>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div text-center class="image-div" *ngIf="user.url" [style.background-image]="\'url(\' + user.url + \')\'" (click)="openEdit()">\n\n        <!-- <img  width="100" alt="Profile Pic" #thisImage (click)="presentImage(thisImage)"/> -->\n\n    </div>\n\n    <div text-center class="image-div" *ngIf="!user.url" (click)="openEdit()">\n\n    </div>\n\n    <div text-center>\n\n        <h2>\n\n            {{user.name}}\n\n        </h2>\n\n    </div>\n\n    <ion-card no-padding>\n\n        <ion-grid *ngIf="rating != {}" class="stat-div">\n\n            <ion-row>\n\n                <ion-col text-center>\n\n                    <h2>{{rating.posts}}</h2>\n\n                    <p>{{translate.text.profile.posts}}</p>\n\n                </ion-col>\n\n                <!-- <ion-col text-center>\n\n                    <h2>{{rating.resolves}}</h2>\n\n                    <p>{{translate.text.profile.resolves}}</p>\n\n                </ion-col> -->\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-card>\n\n\n\n        <!-- <ion-row>\n\n            <ion-col>\n\n                <p>{{translate.text.profile.post}}{{user.posts}}</p>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col>\n\n                <p>{{translate.text.profile.last}}{{user.lastActive}}</p>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col>\n\n                <p>{{translate.text.profile.first}}{{user.firstActive}}</p>\n\n            </ion-col>\n\n        </ion-row> -->\n\n    <div *ngIf="reports.length > 0" padding-top>\n\n        <h2 text-left *ngIf="checkProfile()">{{translate.text.profile.reports}}</h2>\n\n        <h2 text-left *ngIf="!checkProfile()">{{theReports}}</h2>\n\n        <ion-card *ngFor="let report of reports">\n\n            <ion-card-header text-wrap>\n\n                    <h1 [style.border-color]="report.type">{{report.description}}</h1>   \n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <ion-grid>\n\n                    <ion-row class=\'flex-row\'>\n\n                        <ion-col col-6>\n\n                            <ion-item>\n\n                                <p text-wrap><b>{{translate.text.profile.status}}</b>{{report.status}}</p>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-6>\n\n                            <img [src]=\'report.url\' #thisImage (click)="presentImage(thisImage)" alt="Image of Report" *ngIf="report.url"/>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-card-content>\n\n            <div padding>\n\n                <button block ion-button color="primary" (click)="showOnMap(report.lat,report.lng)">{{translate.text.profile.map}}</button>\n\n            </div>\n\n        </ion-card>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Noah Wil5on\Documents\mZAP Files\Mission X\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4__providers_translator_translator__["a" /* TranslatorProvider */],
        __WEBPACK_IMPORTED_MODULE_7_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_5__providers_user_info_user_info__["a" /* UserInfoProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__providers_click_click__["a" /* ClickProvider */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ })

},[541]);
//# sourceMappingURL=main.js.map