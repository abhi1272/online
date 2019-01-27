(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".aboutUs{\r\n    margin-top:7vh;\r\n    color:grey;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    font-weight: 200;\r\n}\r\n.head{\r\n    color: green;\r\n}\r\n.about{\r\n    margin-top: 10vh;\r\n    font-family: Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-weight: 100;\r\n    font-size: 1.2rem;\r\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n <h3 class=\"aboutUs\">About US</h3><br>\n  <div class=\"row\">\n    <div class=\"col-sm-7\">\n        <h1 class=\"head\">Improving health through superior products</h1>\n      <p class=\"about\">\n          Founded by the Arun kumar Singh and Avinash Kumar, Awzing Heathcare pvt. ltd. is one of India’s most respected pharmaceutical companies committed to deliver better health through superior products.<br>\n          <br>\n          Awzing has several pharma products that address the needs of relevant and growing therapeutic areas like gastroenterology, cardiology, diabetology, psychiatry, neurology, anti-bacterials, anti-infectives and pain management.\n        \n      </p>\n    </div>\n    <img class=\"col-sm-5 img-responsive\"  src=\"./assets/img/logos/med1.jpg\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        console.log('about constructor called');
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n\tcolor:white;\r\n}\r\n.navbar{\r\n\tbackground-color:black;\r\n}\r\n.logo{\r\n\theight:6vh;\r\n\tmargin-left: -4vw;\r\n}\r\n.nav-link:hover{\r\n\tbackground-color:grey;\r\n}\r\n.footer-distributed{\r\n\tbackground-color:black;\r\n\tbox-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\r\n\tbox-sizing: border-box;\r\n\twidth: 100%;\r\n\ttext-align: left;\r\n\tfont: bold 16px sans-serif;\r\n\tpadding: 20px 40px;\r\n\tmargin-top: 80px;\r\n}\r\n.footer-distributed .footer-left,\r\n.footer-distributed .footer-center,\r\n.footer-distributed .footer-right{\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n}\r\n/* Footer left */\r\n.footer-distributed .footer-left{\r\n\twidth: 30%;\r\n}\r\n/* The company logo */\r\n.footer-distributed h3{\r\n\tcolor:  #ffffff;\r\n\tfont: normal 36px 'Cookie', cursive;\r\n\tmargin: 0;\r\n}\r\n.footer-distributed h3 span{\r\n\tcolor:  #5383d3;\r\n}\r\n/* Footer links */\r\n.footer-distributed .footer-links{\r\n\tcolor:  #ffffff;\r\n\tmargin: 20px 0 12px;\r\n\tpadding: 0;\r\n}\r\n.footer-distributed .footer-links a{\r\n\tdisplay:inline-block;\r\n\tline-height: 1.8;\r\n\ttext-decoration: none;\r\n\tcolor:  inherit;\r\n}\r\n.footer-distributed .footer-company-name{\r\n\tcolor:  #8f9296;\r\n\tfont-size: 14px;\r\n\tfont-weight: normal;\r\n\tmargin: 0;\r\n}\r\n/* Footer Center */\r\n.footer-distributed .footer-center{\r\n\twidth: 35%;\r\n}\r\n.footer-distributed .footer-center i{\r\n\tbackground-color:  #33383b;\r\n\tcolor: #ffffff;\r\n\tfont-size: 25px;\r\n\twidth: 38px;\r\n\tborder-radius: 50%;\r\n\ttext-align: center;\r\n\tline-height: 30px;\r\n\tmargin: 10px 5px;\r\n\tvertical-align: middle;\r\n}\r\n.footer-distributed .footer-center i.fa-envelope{\r\n\tfont-size: 17px;\r\n\tline-height: 38px;\r\n}\r\n.footer-distributed .footer-center p{\r\n\tdisplay: inline-block;\r\n\tcolor: #ffffff;\r\n\tvertical-align: middle;\r\n\tmargin:0;\r\n}\r\n.footer-distributed .footer-center p span{\r\n\tdisplay:block;\r\n\tfont-weight: normal;\r\n\tfont-size:14px;\r\n\tline-height:2;\r\n}\r\n.footer-distributed .footer-center p a{\r\n\tcolor:  #5383d3;\r\n\ttext-decoration: none;;\r\n}\r\n/* Footer Right */\r\n.footer-distributed .footer-right{\r\n\twidth: 20%;\r\n}\r\n.footer-distributed .footer-company-about{\r\n\tline-height: 20px;\r\n\tcolor:  #92999f;\r\n\tfont-size: 13px;\r\n\tfont-weight: normal;\r\n\tmargin: 0;\r\n}\r\n.footer-distributed .footer-company-about span{\r\n\tdisplay: block;\r\n\tcolor:  #ffffff;\r\n\tfont-size: 14px;\r\n\tfont-weight: bold;\r\n\tmargin-bottom: 20px;\r\n}\r\n.footer-distributed .footer-icons{\r\n\tmargin-top: 25px;\r\n}\r\n.footer-distributed .footer-icons a{\r\n\tdisplay: inline-block;\r\n\twidth: 35px;\r\n\theight: 35px;\r\n\tcursor: pointer;\r\n\tbackground-color:  #33383b;\r\n\tborder-radius: 2px;\r\n\r\n\tfont-size: 20px;\r\n\tcolor: #ffffff;\r\n\ttext-align: center;\r\n\tline-height: 35px;\r\n\r\n\tmargin-right: 3px;\r\n\tmargin-bottom: 5px;\r\n}\r\n/* If you don't want the footer to be responsive, remove these media queries */\r\n@media (max-width: 880px) {\r\n\r\n\t.footer-distributed{\r\n\t\tfont: bold 14px sans-serif;\r\n\t}\r\n\r\n\t.footer-distributed .footer-left,\r\n\t.footer-distributed .footer-center,\r\n\t.footer-distributed .footer-right{\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t\tmargin-bottom: 35px;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t.footer-distributed .footer-center i{\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-lg navbar-dark\">\n  <div class=\"container navbar-inner\">\n    <a class=\"navbar-brand img-fluid\" routerLink=\"/home\"><img class=\"logo img-responsive\" src=\"./assets/img/logos/logo.jpg\"></a>\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\" data-toggle=\"collapse\"\n      data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"navbar-collapse collapse\" [attr.aria-expanded]=\"!isCollapsed\" [ngClass]=\"{collapse: !isCollapsed}\">\n      <ul class=\"nav navbar-nav ml-auto\" (click)=\"isCollapsed = !isCollapsed\">\n        <li class=\"nav-item\" ><a class=\"nav-link font-weight-bold\" routerLink=\"/home\">Home</a></li>\n        <li class=\"nav-item\" ><a class=\"nav-link font-weight-bold\" routerLink=\"/about\">About</a></li>\n        <li class=\"nav-item\" ><a class=\"nav-link font-weight-bold\" routerLink=\"/product\">Product</a></li>\n        <li class=\"nav-item\" ><a class=\"nav-link font-weight-bold\" routerLink=\"/contact\">Contact</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<br><br>\n<div>\n  <router-outlet></router-outlet>\n</div>\n<!-- Footer -->\n<footer class=\"footer-distributed row\">\n\n  <div class=\"footer-left col-md-5\">\n\n    <h3>Awzing<span></span></h3>\n\n    <p class=\"footer-links\">\n      <a href=\"#\">Home</a> ·\n      <a href=\"#\">About</a> ·\n      <a href=\"#\">Product</a>.\n      <a href=\"#\">Contact</a>\n    </p>\n\n    <p class=\"footer-company-name\">Awzing Healthcare pvt. ltd. &copy; 2018</p>\n\n    <div class=\"footer-icons\">\n\n\n      <a href=\"https://www.facebook.com/AwzingPvt/\"><i class=\"fa fa-facebook\"></i></a>\n\n    </div>\n\n  </div>\n\n  <div class=\"footer-center col-md-4\">\n\n    <div>\n      <i class=\"fa fa-map-marker\"></i>\n      <p><span>S.NO, Haripur,Sector-4</span> Panchkula(HR), India</p>\n    </div>\n\n    <div>\n      <i class=\"fa fa-envelope\"></i>\n      <p><a href=\"mailto:support@company.com\">support@awzing.com</a></p>\n    </div>\n\n  </div>\n\n  <div class=\"footer-right col-md-3\">\n\n    <img style=\"height:180px;margin-left:35px\" src=\"./assets/img/logos/thank.jpg\">\n    <!--   \n    <p class=\"footer-company-about\">\n      <span>About the company</span> Awzing Heathcare pvt. ltd. is a pharmaceutical company headquartered at New Delhi, The\n      capital of India. Our main activities are focused on to improve the quality of life by providing better health services\n      by developing and marketing quality and proprietary pharmaceutical product.\n    </p>\n  -->\n  </div>\n\n</footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _single_product_view_single_product_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./single-product-view/single-product-view.component */ "./src/app/single-product-view/single-product-view.component.ts");
/* harmony import */ var _product_list_view_product_list_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product-list-view/product-list-view.component */ "./src/app/product-list-view/product-list-view.component.ts");
/* harmony import */ var _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product-create/product-create.component */ "./src/app/product-create/product-create.component.ts");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/product-edit/product-edit.component.ts");
/* harmony import */ var _product_delete_product_delete_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./product-delete/product-delete.component */ "./src/app/product-delete/product-delete.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//Router module used for setting up the application level route 













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"],
                _single_product_view_single_product_view_component__WEBPACK_IMPORTED_MODULE_13__["SingleProductViewComponent"],
                _product_list_view_product_list_view_component__WEBPACK_IMPORTED_MODULE_14__["ProductListViewComponent"],
                _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_15__["ProductCreateComponent"],
                _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_16__["ProductEditComponent"],
                _product_delete_product_delete_component__WEBPACK_IMPORTED_MODULE_17__["ProductDeleteComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot({
                    timeOut: 5000,
                    positionClass: 'toast-top-right',
                    preventDuplicates: true,
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
                    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], pathMatch: 'full' },
                    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"] },
                    { path: 'product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"] },
                    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"] },
                    { path: 'product-list', component: _product_list_view_product_list_view_component__WEBPACK_IMPORTED_MODULE_14__["ProductListViewComponent"] },
                    { path: 'product/view/:id', component: _single_product_view_single_product_view_component__WEBPACK_IMPORTED_MODULE_13__["SingleProductViewComponent"] },
                    { path: 'product/create', component: _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_15__["ProductCreateComponent"] },
                    { path: "**", component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back{\r\n  background: -webkit-linear-gradient(left, #0072ff, #00c6ff);\r\n}\r\n.contact-form{\r\n  background: #fff;\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\r\n  width: 70%;\r\n}\r\n.contact-form .form-control{\r\n  border-radius:1rem;\r\n}\r\n.contact-image{\r\n  text-align: center;\r\n}\r\n.contact-image img{\r\n  border-radius: 6rem;\r\n  width: 11%;\r\n  margin-top: -3%;\r\n  -webkit-transform: rotate(29deg);\r\n          transform: rotate(29deg);\r\n}\r\n.contact-form form{\r\n  padding: 14%;\r\n}\r\n.contact-form form .row{\r\n  margin-bottom: -7%;\r\n}\r\n.contact-form h3{\r\n  margin-bottom: 8%;\r\n  margin-top: -10%;\r\n  text-align: center;\r\n  color: #0062cc;\r\n}\r\n.contact-form .btnContact {\r\n  width: 50%;\r\n  border: none;\r\n  border-radius: 0.5rem;\r\n  padding: 1.8%;\r\n  margin-left:11vw;\r\n  background: green;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n.btnContactSubmit\r\n{\r\n  width: 50%;\r\n  border-radius: 1rem;\r\n  padding: 1.5%;\r\n  color: #fff;\r\n  background-color: #0062cc;\r\n  border: none;\r\n  cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container contact-form\">\n    <div class=\"contact-image\">\n        <img src=\"https://image.ibb.co/kUagtU/rocket_contact.png\" alt=\"rocket_contact\" />\n    </div>\n    <form method=\"post\">\n        <h3>Drop Us a Message</h3>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <input type=\"text\" [(ngModel)]=\"Name\" name=\"txtName\" class=\"form-control\" placeholder=\"Your Name *\"\n                         required />\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" [(ngModel)]=\"Email\" name=\"txtEmail\" class=\"form-control\" placeholder=\"Your Email *\"\n                        value=\"\" />\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" [(ngModel)]=\"Phone\" name=\"txtPhone\" class=\"form-control\" placeholder=\"Your Phone Number *\"\n                        value=\"\" />\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <textarea name=\"txtMsg\" [(ngModel)]=\"Message\" class=\"form-control\" placeholder=\"Your Message *\"\n                        style=\"width: 100%; height: 150px;\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"submit\" (click)=\"sendMessage()\" name=\"btnSubmit\" class=\"btnContact\" value=\"Send Message\" />\n                </div>\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = /** @class */ (function () {
    function ContactComponent(ProductService, toastr, router) {
        this.ProductService = ProductService;
        this.toastr = toastr;
        this.router = router;
        console.log('contact construtor called');
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.sendMessage = function () {
        var _this = this;
        if (this.Name === "" || this.Name === undefined || this.Name === null) {
            this.toastr.error('complete the form with your Name');
        }
        else if (this.Email === "" || this.Email === undefined || this.Email === null) {
            this.toastr.error('Give us your email to contact you');
        }
        else {
            var emailBody = {
                name: this.Name,
                email: this.Email,
                phone: this.Phone,
                message: this.Message
            };
            this.ProductService.sendEmail(emailBody).subscribe(function (data) {
                _this.toastr.success(data['name'] + " , Thanks for contacting, will conatct you soon");
                _this.router.navigateByUrl('/home');
            }, function (error) {
                _this.toastr.error('some error occured on server, please try again later');
                console.log(error.err.message);
            });
        }
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welimg{\r\n    margin: 7vh 0vw 0 0;\r\n\r\n}\r\n.portfolio-item{\r\n    margin-bottom: 2vh;\r\n}\r\n.about{\r\n    font-size: 1.2rem;\r\n    margin: 2vh;\r\n    padding: 4vh;\r\n    font-family: Cochin, Georgia, Times, 'Times New Roman', serif;\r\n}\r\n.readMore{\r\n    margin-top: -1vh 10vw;\r\n}\r\n.ourProduct{\r\n    font-size: 2rem;\r\n    font-family: Helvetica, sans-serif;\r\n    margin-bottom: 3vh;\r\n    color:#2E8B57;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img class=\"d-block w-100 img-fluid\" src=\"./assets/img/slides/7.jpg\" alt=\"First slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100 img-fluid\" src=\"./assets/img/slides/4.jpg\" alt=\"Second slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100 img-fluid\" src=\"./assets/img/slides/11.JPG\" alt=\"Third slide\">\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n  </div>\n</header>\n<!-- Page Content -->\n<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-5\">\n      <img class=\"welimg img-fluid\" src=\"./assets/img/slides/wel1.jpg\">\n    </div>\n    <div class=\"about col-md-6\">\n      <h3 style=\"color:green\">Welcome to Awzing Heathcare pvt. ltd.</h3>\n        <p>Awzing Heathcare pvt. ltd. is a pharmaceutical company headquartered at Panchkula(HR). Our main activities are focused on to improve the quality of life by providing better health services by developing and marketing quality and proprietary pharmaceutical product.\n        Every molecule here is researched to trace the soul of happiness. Our significant achievements during the last few years have helped us build an Organization and infrastructure that has led Awzing to spread its wings. </p>\n        <p>At Awzing, New and innovative business models are in motion to make the most of emerging opportunities. We aim to market high quality and affordable pharmaceuticals to be made available everywhere, everyday.</p>\n        <div class=\"readMore\"> <a routerLink=\"/about\" class=\"btn\">Read More</a></div>\n      </div>\n  </div>\n  <p class=\"ourProduct\">Our Products</p>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-sm-6 portfolio-item\">\n      <div class=\"card\">\n        <a href=\"#\"><img class=\"card-img-top\" src=\"./assets/img/logos/5.JPG\" alt=\"\"></a>\n        <h4 class=\"card-title text-center\">\n          <a href=\"#\">Pantozing-DSR</a>\n        </h4>\n      </div>\n    </div>\n    \n    <div class=\"col-lg-4 col-sm-6 portfolio-item\">\n      <div class=\"card\">\n        <a href=\"#\"><img class=\"card-img-top\" src=\"./assets/img/logos/2.JPG\" alt=\"\"></a>\n        <h4 class=\"card-title text-center\">\n          <a href=\"#\">Zawinac-P</a>\n        </h4>\n      </div>\n    </div>\n\n    <div class=\"col-lg-4 col-sm-6 portfolio-item\">\n      <div class=\"card\">\n        <a href=\"#\"><img class=\"card-img-top\" src=\"./assets/img/logos/3.JPG\" alt=\"\"></a>\n        <h4 class=\"card-title text-center\">\n          <a href=\"#\">Klorofen</a>\n        </h4>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /.row -->\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.home = 'home';
        console.log('home constructor called');
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/product-create/product-create.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-create/product-create.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }"

/***/ }),

/***/ "./src/app/product-create/product-create.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-create/product-create.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n\n  <div class=\"row\" style=\"text-align:left\">\n    <div class=\"col-md-12\">\n      <form (ngSubmit)=\"createProduct()\">\n\n        <div class=\"form-group\">\n\n          <label>Product Name</label>\n          <input type=\"text\" name=\"ProductName\" [(ngModel)]=\"ProductName\" class=\"form-control\" placeholder=\"Enter product Name\"\n            required>\n\n        </div>\n\n        <div class=\"form-group\">\n          <label>Pack Size</label>\n          <input type=\"text\" name=\"Packing\" [(ngModel)]=\"Packing\" class=\"form-control\" placeholder=\"Enter PackSize\"\n            required>\n        </div>\n        <div class=\"form-group\">\n          <label>Batch</label>\n          <textarea name=\"Batch\" [(ngModel)]=\"Batch\" class=\"form-control\" rows=\"3\" required></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label>MRP</label>\n          <textarea name=\"MRP\" [(ngModel)]=\"MRP\" class=\"form-control\" rows=\"3\" required></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label>Expiry</label>\n          <textarea name=\"Expiry\" [(ngModel)]=\"Expiry\" class=\"form-control\" rows=\"3\" required></textarea>\n        </div>\n\n\n\n        <button type=\"submit\" class=\"btn btn-primay\">Create Product</button>\n      </form>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/product-create/product-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-create/product-create.component.ts ***!
  \************************************************************/
/*! exports provided: ProductCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCreateComponent", function() { return ProductCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductCreateComponent = /** @class */ (function () {
    function ProductCreateComponent(productService) {
        this.productService = productService;
    }
    ProductCreateComponent.prototype.ngOnInit = function () {
    };
    ProductCreateComponent.prototype.createProduct = function () {
        var productData = {
            ProductName: this.ProductName,
            Batch: this.Batch,
            Packing: this.Packing,
            MRP: this.MRP,
            Expiry: this.Expiry
        };
        this.productService.createProduct(productData).subscribe(function (data) {
            console.log("Product Created");
            console.log(data);
        }, function (error) {
            console.log('some error occured');
            console.log(error.err.message);
        });
    };
    ProductCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-create',
            template: __webpack_require__(/*! ./product-create.component.html */ "./src/app/product-create/product-create.component.html"),
            styles: [__webpack_require__(/*! ./product-create.component.css */ "./src/app/product-create/product-create.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ProductCreateComponent);
    return ProductCreateComponent;
}());



/***/ }),

/***/ "./src/app/product-delete/product-delete.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-delete/product-delete.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-delete/product-delete.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-delete/product-delete.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  product-delete works!\n</p>\n"

/***/ }),

/***/ "./src/app/product-delete/product-delete.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-delete/product-delete.component.ts ***!
  \************************************************************/
/*! exports provided: ProductDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDeleteComponent", function() { return ProductDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductDeleteComponent = /** @class */ (function () {
    function ProductDeleteComponent() {
    }
    ProductDeleteComponent.prototype.ngOnInit = function () {
    };
    ProductDeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-delete',
            template: __webpack_require__(/*! ./product-delete.component.html */ "./src/app/product-delete/product-delete.component.html"),
            styles: [__webpack_require__(/*! ./product-delete.component.css */ "./src/app/product-delete/product-delete.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductDeleteComponent);
    return ProductDeleteComponent;
}());



/***/ }),

/***/ "./src/app/product-edit/product-edit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  product-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.ts ***!
  \********************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent() {
    }
    ProductEditComponent.prototype.ngOnInit = function () {
    };
    ProductEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-edit',
            template: __webpack_require__(/*! ./product-edit.component.html */ "./src/app/product-edit/product-edit.component.html"),
            styles: [__webpack_require__(/*! ./product-edit.component.css */ "./src/app/product-edit/product-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/product-list-view/product-list-view.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/product-list-view/product-list-view.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.card{\r\n    margin-bottom: 4vh;\r\n}\r\n.prod{\r\n    width: 100%;\r\n    height: 36vh;\r\n}\r\n.head{\r\n     color: grey;\r\n}\r\n.ourProduct{\r\n    color: green;\r\n}\r\n.quote{\r\n    font-family: Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    color: #556B2F;\r\n}"

/***/ }),

/***/ "./src/app/product-list-view/product-list-view.component.html":
/*!********************************************************************!*\
  !*** ./src/app/product-list-view/product-list-view.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:2vh\">\n  <img src=\"./assets/img/logos/prod.jpg\" class=\"prod img-responsive\">\n  <br><br>\n  <h2 class=\"quote\">\n    We make a wide range of prescription medicines, vaccines<br>\n    and consumer healthcare products.\n  </h2>\n  <br>\n  <div class=\"row\">\n    <h2 class=\"ourProduct col-sm-4\">Our Products</h2>\n    <h6 class=\"col-sm-4\"><a [routerLink]=\"['/product']\">Image view</a></h6>\n    <h6 class=\"col-sm-4\"><a [routerLink]=\"['/product-list']\">List view</a></h6>\n  </div>\n  <br>\n  <ul class=\"list-group\" class='row'>\n    <li class=\"list-group-item col-md-1\">No.</li>\n    <li class=\"list-group-item col-md-4\">ProductName</li>\n    <li class=\"list-group-item col-md-2\">Pack Size</li>\n    <li class=\"list-group-item col-md-2\">MRP</li>\n    <li class=\"list-group-item col-md-1\">Batch</li>\n  </ul>\n\n  \\"

/***/ }),

/***/ "./src/app/product-list-view/product-list-view.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/product-list-view/product-list-view.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListViewComponent", function() { return ProductListViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductListViewComponent = /** @class */ (function () {
    function ProductListViewComponent() {
    }
    ProductListViewComponent.prototype.ngOnInit = function () {
    };
    ProductListViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list-view',
            template: __webpack_require__(/*! ./product-list-view.component.html */ "./src/app/product-list-view/product-list-view.component.html"),
            styles: [__webpack_require__(/*! ./product-list-view.component.css */ "./src/app/product-list-view/product-list-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductListViewComponent);
    return ProductListViewComponent;
}());



/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductService = /** @class */ (function () {
    function ProductService(_http, Toastr) {
        this._http = _http;
        this.Toastr = Toastr;
        this.baseUrl = 'http://api.awzing.com/api/v1';
    }
    ProductService.prototype.createProduct = function (productData) {
        console.log('create product service call');
        var myResponse = this._http.post(this.baseUrl + '/products/add', productData);
        console.log(productData);
        return myResponse;
    };
    ProductService.prototype.sendEmail = function (emailBody) {
        console.log('send email api called');
        var myResponse = this._http.post(this.baseUrl + '/products/mail', emailBody, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        return myResponse;
    };
    ProductService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = "Error: " + error.error.message;
        }
        else {
            // server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        this.Toastr.error('currectly not able to onnect to server: will be back soon');
        //window.alert('currectly not able to onnect to server: will be back soon');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.card{\r\n    margin-bottom: 4vh;\r\n}\r\n.prod{\r\n    width: 100%;\r\n    height: 36vh;\r\n}\r\n.head{\r\n     color: grey;\r\n}\r\n.ourProduct{\r\n    text-decoration: underline;\r\n    color: green;\r\n}\r\n.quote{\r\n    font-family: Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    color: #556B2F;\r\n}"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:2vh\">\n  <img src=\"./assets/img/logos/prod.jpg\" class=\"prod img-responsive\">\n  <br><br>\n  <h2 class=\"quote\">\n    We make a wide range of prescription medicines, vaccines<br>\n      and consumer healthcare products.\n  </h2>\n  <br>\n  <div class=\"row\">\n      <h2 class=\"ourProduct col-sm-4\">Our Products</h2>\n       <h6 class=\"col-sm-4\"><a [routerLink]=\"['/product']\">Image view</a></h6>\n       <h6 class=\"col-sm-4\"><a [routerLink]=\"['/product-list']\">List view</a></h6>\n  </div>\n  <br>\n  <div class=\"row\"> \n    <div class=\"col-md-4 col-sm-6 portfolio-item\">\n      <div class=\"card\">\n        <a href=\"#\"><img class=\"card-img-top\" src=\"./assets/img/logos/1.JPG\" alt=\"\"></a>\n        <h4 class=\"card-title text-center\">\n          <a href=\"#\">Zingofolvin</a>\n        </h4>\n      </div>\n    </div>\n\n    <div class=\"col-md-4 col-sm-6 portfolio-item\">\n      <div class=\"card\">\n        <a href=\"#\"><img class=\"card-img-top\" src=\"./assets/img/logos/2.JPG\" alt=\"\"></a>\n        <h4 class=\"card-title text-center\">\n          <a href=\"#\">Zawinac-P</a>\n        </h4>\n      </div>\n    </div>\n\n    <div class=\"col-md-4 col-sm-6 portfolio-item\">\n      <div class=\"card\">\n        <a href=\"#\"><img class=\"card-img-top\" src=\"./assets/img/logos/3.JPG\" alt=\"\"></a>\n        <h4 class=\"card-title text-center\">\n          <a href=\"#\">Klorofen</a>\n        </h4>\n      </div>\n    </div>\n\n    <div class=\"col-md-4 col-sm-6 portfolio-item\">\n      <div class=\"card\">\n        <a href=\"#\"><img class=\"card-img-top\" src=\"./assets/img/logos/4.JPG\" alt=\"\"></a>\n        <h4 class=\"card-title text-center\">\n          <a href=\"#\">Zawinac-SP</a>\n        </h4>\n      </div>\n    </div>\n\n    <div class=\"col-md-4 col-sm-6 portfolio-item\">\n      <div class=\"card\">\n        <a href=\"#\"><img class=\"card-img-top\" src=\"./assets/img/logos/5.JPG\" alt=\"\"></a>\n        <h4 class=\"card-title text-center\">\n          <a href=\"#\">Pantozing-DSR</a>\n        </h4>\n      </div>\n    </div>\n    <div class=\"col-md-4 col-sm-6 portfolio-item\">\n      <div class=\"card\">\n        <a href=\"#\"><img class=\"card-img-top\" src=\"./assets/img/logos/6.JPG\" alt=\"\"></a>\n        <h4 class=\"card-title text-center\">\n          <a href=\"#\">Zimicob</a>\n        </h4>\n      </div>\n    </div>\n    <div class=\"col-md-4 col-sm-6 portfolio-item\">\n      <div class=\"card\">\n        <a href=\"#\"><img class=\"card-img-top\" src=\"./assets/img/logos/7.JPG\" alt=\"\"></a>\n        <h4 class=\"card-title text-center\">\n          <a href=\"#\">Zingofolvin</a>\n        </h4>\n      </div>\n    </div>\n\n    <div class=\"col-md-4 col-sm-6 portfolio-item\">\n      <div class=\"card\">\n        <a href=\"#\"><img class=\"card-img-top\" src=\"./assets/img/logos/8.JPG\" alt=\"\"></a>\n        <h4 class=\"card-title text-center\">\n          <a href=\"#\">Zingflox-200</a>\n        </h4>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/single-product-view/single-product-view.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/single-product-view/single-product-view.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/single-product-view/single-product-view.component.html":
/*!************************************************************************!*\
  !*** ./src/app/single-product-view/single-product-view.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  single-product-view works!\n</p>\n"

/***/ }),

/***/ "./src/app/single-product-view/single-product-view.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/single-product-view/single-product-view.component.ts ***!
  \**********************************************************************/
/*! exports provided: SingleProductViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleProductViewComponent", function() { return SingleProductViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SingleProductViewComponent = /** @class */ (function () {
    function SingleProductViewComponent() {
    }
    SingleProductViewComponent.prototype.ngOnInit = function () {
    };
    SingleProductViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-product-view',
            template: __webpack_require__(/*! ./single-product-view.component.html */ "./src/app/single-product-view/single-product-view.component.html"),
            styles: [__webpack_require__(/*! ./single-product-view.component.css */ "./src/app/single-product-view/single-product-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SingleProductViewComponent);
    return SingleProductViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Barh\Desktop\Awazing_Pharma\Awzing\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map