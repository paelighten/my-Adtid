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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n* {\n    font-family: 'Kanit-Light';\n/* font-size:14px; */\n}\n\n@font-face {\n    font-family: 'Kanit-Light';\n    src: url('Kanit-Light.ttf') format('opentype');\n    font-weight: normal;\n    font-style: normal;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav> -->\n\n\n\n\n\n\n<!-- <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n  Launch demo modal\n</button>\n\n\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        ...\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n <main-menu></main-menu>\n <index-page></index-page>"

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
        this.title = 'my-project';
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "./src/app/main-menu/main-menu.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_3__["MainMenuComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-bg {\n    background-image: linear-gradient(to right, #ef4137, #f15a29);\n}\n\n.landing,{\n    height: 30em;\n}\n\n.section-wrapper {\n    max-width: 70em;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.register-btn, .theme-color-button {\n    background-color: #f05a28;\n    color:#fff;\n    width: 100%;\n}\n\n.login-btn {\n    background-color: #231f20;\n    color: #fff;\n    width: 100%;\n}\n\n.macbook-bg {\n    background-image: url('macBook.png');\n    width:100%;\n    height: 22em;\n    background-size: 34em;\n    background-repeat: no-repeat;\n    background-position: center bottom; \n}\n\n.sponser-section, .reason-section {\n    background-color: #f9f9f9;\n}\n\n.slide-container {\n    padding-top: 2em;\n}\n\n.temp-slide-item {\n    background-image: url('scb-slide.png');\n    height: 23em;\n    background-size: cover;\n    background-position: center;\n}\n\n.sponser-slide-col {\n    position: relative;\n}\n\n.sponser-slide-ctn {\n    width: 90%;\n    margin-left: auto;\n    margin-right: auto;\n    /* position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); */\n    /* padding: 2em 15%; */\n}\n\n.carousel-indicators li {\n    width: 0.5em;\n    height: 0.5em;\n    border-radius: 50%;\n}\n\n.color-theme {\n    color: #f05a28;\n}\n\n.theme-outline-btn {\n    background-color : transparent;\n    border: 1px solid #f05a28;\n    color: #f05a28;\n}\n\n.open-course, .news-section {\n    background-color: #111111;\n}\n\n.reason-section, .reward-section, .target-detail-section, .news-section, \n.open-course, .sponser-section, .schedule-section   {\n    padding: 3em 10%;\n}\n\n.border-bt {\n    border: 1px solid;\n    width: 5em;\n    margin: 0.75em 0;\n}\n\n.open-course-detail-row {\n    line-height: 3em;\n    position: relative;\n}\n\n.more-detail {\n    position: absolute;\n    right: 0;\n}\n\n.tutor-row .col {\n    border: 1px solid;\n    margin: 0 1em;\n    height: 20em;\n}\n\n.tutor-indicators {\n    bottom: -1em;\n    margin: 0;\n}\n\n.small-text-size {\n    font-size: 0.8rem;\n}\n\n.super-small-text-size {\n    font-size :0.7rem;\n}\n\n.reason-item-row {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.reason-item {\n    /* margin-top: 2em; */\n    padding: 1.5em;\n}\n\n.reason-item-icon {\n    width: 3em;\n    height: 3em;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.medal-pic {\n    width: 11em;\n    height: 7em;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.col-centered {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.target-section {\n    background-image: linear-gradient(to bottom, #f05a28, #fe3d2b);\n    padding: 3.5em 10%;\n}\n\n.theme-background {\n    background-color: #f05a28;\n}\n\n.target-detail-header, {\n    padding: 1.5em;\n    margin: 0 1em;\n}\n\n.target-detail-item {\n    padding: 1.5em;\n    padding-bottom: 0;\n}\n\n.target-detail-item-border {\n    border-bottom: 2px solid #fe3d2b;\n    padding-bottom: 1.5em;\n}\n\n.fitst-target-item {\n    height:100%;\n    padding: 1em;\n}\n\n.news-pic {\n    background-color: #bdbdbd;\n}\n\n.news-desc {\n    background-color: #fff;\n    padding: 0.5em;\n    min-height: 8em;\n}\n\n.news-date, .news-type {\n    color: #b6b6b6;\n}\n\n.news-header {\n    color: #000000;\n    font-size: 0.9rem;\n}\n\n.news-item {\n    padding: 0.5em;\n}\n\n.custom-button-icon {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translate(0,-50%);\n            transform: translate(0,-50%);\n}\n\n.left-icon {\n    left: -0.5em;\n}\n\n.right-icon {\n    right: -0.5em;\n}\n\n.schedule-tb {\n    border: 1px solid #acacac;\n    border-radius: 0.2em;\n    margin-top: 0.75em;\n}\n\n.tb-header {\n    padding: 0.5em;\n}\n\n.tb-body {\n    /* border-top: 1px solid #acacac; */\n    margin-bottom: 1em;\n    margin: 0.5em;\n    position: relative;\n}\n\n.schedule-tb .tb-body ~ .tb-body{\n    border-top:1px solid #acacac;\n}\n\n.tb-botton {\n    position: absolute;\n    -webkit-transform: translate(0, -50%);\n            transform: translate(0, -50%);\n    top : 50%;\n    padding: 0.25em;\n    background-color: #f05a28;\n    border-radius: 0.2em;\n    right : 0.5em;\n    color: #ffffff;\n}\n\n.schedule-btn {\n   width: 100%;\n   margin-top:1.1em;\n}\n\n@media screen and (max-width : 450px) {\n    .reason-section, .reward-section, .target-detail-section, .news-section, .open-course, .schedule-section   {\n        padding: 3em 1.5em;\n    }\n\n    .sponser-section {\n        padding: 3em 0.5em;\n    }\n}\n\n@media screen and (max-width : 750px) and (min-width : 450px) {\n    .reason-section, .reward-section, .target-detail-section, .news-section, .open-course, .schedule-section  {\n        padding: 3em 2em;\n    }\n\n    .sponser-section {\n        padding: 3em 1.5em;\n    }\n}\n\n@media screen and (min-width : 750px) and (max-width: 1024px) {\n    .reason-section, .reward-section, .target-detail-section, .news-section, .open-course, .schedule-section   {\n        padding: 3em 3.5em;\n    }\n\n    .sponser-section {\n        padding: 3em 2.5em;\n    }\n}"

/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-0\">\n  <div>\n    <div class=\"landing container-bg\">\n      <div class=\"row\">\n        <div class=\"col-sm-10 offset-sm-1 col-md-8 offset-md-2\">\n          <div class=\"row logo-row text-center\">\n            <div class=\"col text-center\"><span style=\"font-size:3rem; color:#fff\">Adtid</span></div>\n          </div>\n          <div class=\"row logo-row text-center\">\n            <div class=\"col text-center\">\n              <span style=\"font-size:1.5rem; color:#fff\">สอบกับ แอดติด แอดยังไงก็ติด</span><br/>\n              <span style=\"color:#fff\">แอดติด สนามสอบออนไลน์ เสมือนจริงแห่งเดียวในประเทศไทย สอบ วิเคราะห์ แนะนำ ครบจบในที่เดียว</span>\n            </div>\n          </div>\n          <div class=\"row macbook-bg  d-none d-sm-block m-0\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row user-mgmt-row mt-2 mt-sm-3 section-wrapper\">\n      <div class=\"col-10 offset-1 col-sm-4 offset-sm-2 col-lg-3 offset-lg-3\">\n        <button type=\"button\" class=\"btn btn-lg register-btn\">สมัครสอบ ฟรี</button>\n      </div>\n      <div class=\"col-10 offset-1 col-sm-4 offset-sm-0 col-lg-3 mt-2 mt-sm-0\">\n        <button type=\"button\" class=\"btn btn-lg login-btn\">เข้าสู่ระบบ</button>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"sponser-section\">\n    <div class=\"section-wrapper\">\n      <div class=\"row m-0\">\n        <!-- slide -->\n        <div class=\"col-12 col-md-6 offset-0 p-0 sponser-slide-col\">\n          <div class=\"sponser-slide-ctn\">\n            <div id=\"sponserSlide\" class=\"carousel slide\" data-ride=\"carousel\">\n              <ol class=\"carousel-indicators\">\n                <li data-target=\"#sponserSlide\" data-slide-to=\"0\" class=\"active\"></li>\n                <li data-target=\"#sponserSlide\" data-slide-to=\"1\"></li>\n                <li data-target=\"#sponserSlide\" data-slide-to=\"2\"></li>\n              </ol>\n              <div class=\"carousel-inner\">\n                <div class=\"carousel-item active\">\n                  <div class=\"temp-slide-item\"></div>\n                </div>\n                <div class=\"carousel-item\">\n                  <div class=\"temp-slide-item\"></div>\n                </div>\n                <div class=\"carousel-item\">\n                  <div class=\"temp-slide-item\"></div>\n                  <!-- <img class=\"d-block w-100\" src=\"../../assets/img/scb-slide.png\"> -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 col-md-6 py-4\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <h3>ทุกคําถาม ทุกความกังวลใจ<br/> ทุกความเจ็บปวด เรื่องแอดมิชชั่น\n              </h3>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              ลองมาแล้วทุกอย่าง ทุกแอพฯ ก็ยังไม่มั่นใจ ต้องมาลองสอบออนไลน์ เสมือนจริง และยื่น คะแนนกับแอดติด\n              <label class=\"color-theme m-0\">โปรแกรมเดียวเปลี่ยนชีวิต แอดติด แอดยังไงก็ติด</label>\n            </div>\n          </div>\n          <div class=\"row mt-3\">\n            <div class=\"col\">\n              <label class=\"color-theme m-0\">ทดลองกับแอดติด ก่อนแอดจริง</label> ระบบอัจฉริยะ จะช่วยประเมินโอกาสแอดติด ลองได้ถึง\n              4 รอบ\n            </div>\n          </div>\n          <div class=\"row mt-3\">\n            <div class=\"col -4 offset-4 offset-md-0\">\n              <button type=\"button\" class=\"btn theme-outline-btn px-4\">สมัครสอบ ฟรี</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"open-course text-white\">\n    <div class=\"section-wrapper\">\n      <div class=\"row m-0\">\n        <div class=\"col text-center\">\n          <h4>วิชาที่เปิดสอบ</h4>\n          <div class=\"border-bt col-centered\"></div>\n        </div>\n      </div>\n      <div class=\"row m-0 open-course-detail-row\">\n        <div class=\"col text-center\">\n          สอบฟรี ทุกวิชา สนับสนุนโดย PEPTINE\n        </div>\n        <div class=\"more-detail\">\n          เพิ่มเติม >\n        </div>\n      </div>\n      <div id=\"openCourseSlide\" class=\"carousel slide\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators tutor-indicators\">\n          <li data-target=\"#openCourseSlide\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#openCourseSlide\" data-slide-to=\"1\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <div class=\"row tutor-row\">\n              <div class=\"col\">t1</div>\n              <div class=\"col\">t2</div>\n              <div class=\"col d-none d-sm-block\">t3</div>\n              <div class=\"col d-none d-md-block\">t4</div>\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <div class=\"row tutor-row\">\n              <div class=\"col\">t1</div>\n              <div class=\"col\">t2</div>\n              <div class=\"col\">t3</div>\n              <div class=\"col\">t4</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"schedule-section\">\n    <div class=\"section-wrapper\">\n      <div class=\"row m-0\">\n        <div class=\"col text-center\">\n          <h4>ตารางสอบ รอบ ก.ค. 61</h4>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col text-center color-theme \">\n          สอบออนไลน์ ที่ไหนก็สอบได้ สมัครเลย ฟรี\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12 col-sm-6 col-lg-4 \">\n          <div class=\"schedule-tb\">\n            <div class=\"tb-header theme-background text-white\">วันเสาร์ 30 มิ.ย. 61 </div>\n            <div class=\"tb-body\">\n              <span class=\"small-text-size\">O-NET คณิตศาสตร์</span><br/>\n              <span class=\"super-small-text-size\">08.30 - 10.30 น</span>\n              <span class=\"tb-botton\">สมัครสอบ</span>\n            </div>\n            <div class=\"tb-body\">\n              <span class=\"small-text-size\">O-NET คณิตศาสตร์</span><br/>\n              <span class=\"super-small-text-size\">08.30 - 10.30 น</span>\n              <span class=\"tb-botton\">สมัครสอบ</span>\n            </div>\n            <div class=\"tb-body\">\n              <span class=\"small-text-size\">O-NET คณิตศาสตร์</span><br/>\n              <span class=\"super-small-text-size\">08.30 - 10.30 น</span>\n              <span class=\"tb-botton\">สมัครสอบ</span>\n            </div>\n          </div>\n          <div class=\"schedule-tb\">\n            <div class=\"tb-header theme-background text-white\">วันเสาร์ 30 มิ.ย. 61 </div>\n            <div class=\"tb-body\">\n              <span class=\"small-text-size\">O-NET คณิตศาสตร์</span><br/>\n              <span class=\"super-small-text-size\">08.30 - 10.30 น</span>\n              <span class=\"tb-botton\">สมัครสอบ</span>\n            </div>\n            <div class=\"tb-body\">\n              <span class=\"small-text-size\">O-NET คณิตศาสตร์</span><br/>\n              <span class=\"super-small-text-size\">08.30 - 10.30 น</span>\n              <span class=\"tb-botton\">สมัครสอบ</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 d-none d-lg-block\"></div>\n        <div class=\"col-12 col-sm-6 col-lg-4 \">\n          <div class=\"schedule-tb\">\n            <div class=\"tb-header theme-background text-white\">วันเสาร์ 30 มิ.ย. 61 </div>\n            <div class=\"tb-body\">\n              <span class=\"small-text-size\">O-NET คณิตศาสตร์</span><br/>\n              <span class=\"super-small-text-size\">08.30 - 10.30 น</span>\n              <span class=\"tb-botton\">สมัครสอบ</span>\n            </div>\n            <div class=\"tb-body\">\n              <span class=\"small-text-size\">O-NET คณิตศาสตร์</span><br/>\n              <span class=\"super-small-text-size\">08.30 - 10.30 น</span>\n              <span class=\"tb-botton\">สมัครสอบ</span>\n            </div>\n          </div>\n          <div class=\"schedule-tb\">\n            <div class=\"tb-header theme-background text-white\">วันเสาร์ 30 มิ.ย. 61 </div>\n            <div class=\"tb-body\">\n              <span class=\"small-text-size\">O-NET คณิตศาสตร์</span><br/>\n              <span class=\"super-small-text-size\">08.30 - 10.30 น</span>\n              <span class=\"tb-botton\">สมัครสอบ</span>\n            </div>\n            <div class=\"tb-body\">\n              <span class=\"small-text-size\">O-NET คณิตศาสตร์</span><br/>\n              <span class=\"super-small-text-size\">08.30 - 10.30 น</span>\n              <span class=\"tb-botton\">สมัครสอบ</span>\n            </div>\n          </div>\n          <div class=\"btn schedule-btn theme-outline-btn d-none d-sm-block\">กติกาและเงื่อนไข</div>\n        </div>\n      </div>\n      <div class=\"row d-block d-sm-none\">\n        <div class=\"col-7 offset-3 offset-sm-0 col-sm-5 col-md-4 col-lg-3 col-centered\">\n          <button type=\"button\" class=\"btn schedule-btn theme-outline-btn\">กติกาและเงื่อนไข</button>\n        </div>\n      </div>\n      <div class=\"row mt-4\">\n        <div class=\"col-7 offset-3 offset-sm-0 col-sm-5 col-md-4 col-lg-3 col-centered\">\n          <button type=\"button\" class=\"btn theme-color-button\">สมัครสอบ ฟรี</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"reason-section\">\n    <div class=\"section-wrapper\">\n      <div class=\"row m-0\">\n        <div class=\"col text-center\">\n          <h4>เหตุผลที่ ต้องลอง สนามสอบ แอดติด 62</h4>\n          <div class=\"border-bt col-centered\"></div>\n        </div>\n      </div>\n      <div class=\"row mt-4\">\n        <div class=\"col-12 col-sm-4 reason-item\" *ngFor=\"let reason of testArray\">\n          <div class=\"reason-item-row\">\n            <img src=\"../../assets/img/clock-logo.png\" class=\"reason-item-icon\">\n          </div>\n          <div class=\"reason-item-row\">\n            <div class=\"col p-0 text-center\">\n              {{reason.header}} <br/>\n              <span class=\"small-text-size\">{{reason.body}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"reward-section\">\n    <div class=\"section-wrapper\">\n      <div class=\"row m-0\">\n        <div class=\"col text-center\">\n          <h4>สอบทุกรอบมีรางวัล</h4>\n          <div class=\"border-bt col-centered\"></div>\n        </div>\n      </div>\n      <div class=\"row mt-3\">\n        <div class=\"col text-center color-theme \">\n          สำหรับน้องๆ ที่สอบได้ TOP 3 ในแต่ละรายวิชา\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12 col-sm-4 mt-3\" *ngFor=\"let reward of rewardList; let i = index\">\n          <div class=\"row\">\n            <img class=\"medal-pic\" src=\"../../assets/img/medao.png\">\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12 offset-0 col-md-10 offset-md-1 text-center\">\n              <span class=\"color-theme\">รางวัลที่ {{i + 1}}</span><br/>\n              <span class=\"small-text-size\">{{reward.content}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row mt-4\">\n        <div class=\"col-7 col-sm-5 col-md-4 col-lg-3 col-centered\">\n          <span class=\"oi oi-star custom-button-icon left-icon color-theme\"></span>\n          <button type=\"button\" class=\"btn theme-color-button\">ประกาศผล TOP 10</button>\n          <span class=\"oi oi-star custom-button-icon right-icon color-theme\"></span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"target-section text-white\">\n    <div class=\"section-wrapper\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <h3>ตั้งเป้าหมายคณะในฝัน แล้วไปให้ถึง</h3>\n          <div class=\"border-bt\"></div>\n          <div class=\"mt-4 \">\n            ค้นหาคณะที่ใช่ ประเมิณและเพิ่มโอกาสแอดติด ด้วยข้อมูลคณะกว่า 133 มหาวิทยาลัย และกว่า 4,000 สาขา <br/>\n          </div>\n          <div class=\"pt-2 small-text-size\">\n            อยากสอบติดคณะนี้ แต่เริ่มอ่านหนังสือไม่ถูก ไม่รู้ต้องทำคะแนนให้ได้เท่าไร? ทำยังไงให้เข้าได้ชัวร์ อยากเป็นตนที่ติด หรือ คนที่ตก\n          </div>\n          <div class=\"pt-3\">\n            <button type=\"button\" class=\"btn color-theme\">เริ่มตั้งเป้าหมาย</button>\n          </div>\n        </div>\n        <div class=\"col-6\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"target-detail-section\">\n    <div class=\"section-wrapper\">\n      <div class=\"row\">\n        <div class=\"col-12 col-sm-6 col-md-4 target-detail-item\">\n          <div class=\"theme-background text-white fitst-target-item\">\n            <h5>ตั้งเป้าหมายในฝันช่วยอะไรบ้าง</h5>\n            <div class=\"small-text-size\">ดูทั้งหมด ></div>\n          </div>\n        </div>\n        <div class=\"col-12 col-sm-6 col-md-4 target-detail-item\" *ngFor=\"let detail of targetDetailList\">\n          <div class=\"\">\n            <div>{{detail.header}}</div>\n            <div class=\"small-text-size target-detail-item-border\">\n              {{detail.body}}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"news-section text-white\">\n    <div class=\"section-wrapper\">\n      <div class=\"row m-0\">\n        <div class=\"col text-center\">\n          <h4>ข่าว / ประกาศ</h4>\n          <div class=\"border-bt col-centered\"></div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12 text-right\">\n          ดูทั้งหมด >\n        </div>\n      </div>\n      <div class=\"row m-0\">\n        <div class=\"col-12 col-sm-6 news-item\" *ngFor=\"let news of newsList\">\n          <div class=\"row m-0\">\n            <div class=\"col-6 news-pic\">pic</div>\n            <div class=\"col-6 news-desc\">\n              <span class=\"small-text-size news-date\">25 พ.ย. 61</span><br/>\n              <span class=\"text-black news-header\">หัวข้อข่าวยาวไปยาวไปยาวไป ยาวไปยาวไป 2 บรรทัดพอ..</span><br/>\n              <span class=\"small-text-size news-type\">ช่าว / การศึกษา</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
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

var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
        this.testString = {
            header: "หัวข้อเหตุผล",
            body: "Use AD’TID by usierra to upload to or download UI elements from a centralized library, and share them with your team."
        };
        this.testArray = [];
        this.targetDetail = {
            header: "ADTID HEADER",
            body: "Choose from all sorts of user triggers to define rich interactions. You can reproduce any action you can think of without technical expertise"
        };
        this.targetDetailList = [];
        this.rewardList = [];
        this.rewardDetail = {
            content: "ได้รับทุนการศึกษา 2,000 บาท พร้อมแพคเกจคอร์สเรียนยูเซียร่า"
        };
        this.newsList = [];
    }
    IndexComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < 6; i++) {
            this.testArray.push(this.testString);
            this.targetDetailList.push(this.targetDetail);
        }
        this.targetDetailList.splice(0, 1);
        for (var j = 0; j < 4; j++) {
            this.newsList.push("a");
            this.rewardList.push(this.rewardDetail);
        }
        this.rewardList.splice(0, 1);
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'index-page',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/main-menu/main-menu.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-navbar {\n    padding:0 10%;\n    text-align: center;\n    background-image: linear-gradient(to right, #ef4137, #f15a29);\n    color: #ffffff;\n    padding-top: 1em;\n}\n\n.custom-navbar-mobile {\n    background-image: linear-gradient(to right, #ef4137, #f15a29);\n    color: #ffffff;\n    padding-top: 1em;\n}\n\n.custom-navbar .custom-navbar-btn {\n    line-height: 3em;\n}\n\n.custom-navbar-btn:hover {\n    background-color: #FF6633;\n}\n\n.username-icon {\n    padding: 0.5em;\n    margin-right: 0.5em;\n    border: 1px solid #fff;\n    border-radius: 50%;\n}\n\n.custom-navbar .login-btn {\n    padding: 0.25em 1em;\n    border : 1px solid #ffffff;\n    border-radius: 0.25em;\n    cursor: pointer;\n}\n\n.custom-input {\n    height: 2em;\n    margin-top: 0.5em;\n    border-radius: 1em;\n    border:none;\n}\n\n.submenu span, .tcas-dropdown span {\n    font-size: 0.8rem;\n}\n\n.submenu {\n    max-width: 50em;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.tcas-dropdown{\n    min-width: 22em;\n    border-radius: 0;\n    border: none;\n    top: -2px !important;\n}\n\n.show .custom-dropdown-btn {\n    background-color: #fff;\n    color: #000;\n}\n\n.custom-navbar-nav, .custom-navbar-footer {\n    display: flex;\n    flex-direction: column;\n    list-style: none;\n    padding :0.5em 1em;\n    border-bottom: 1px solid #eeefef;\n    background-color: #ffffff;\n    margin: 0;\n    color: #000000;\n}\n\n.custom-navbar-footer {\n    background-image: linear-gradient(to right, #ef4137, #f15a29);\n    color: #ffffff;\n    border-bottom: none;\n}\n\n.custom-navbar-nav li, .custom-navbar-footer li {\n    line-height: 2em;\n}\n\n.custom-collapse-item {\n    position: absolute;\n    z-index: 1;\n    width: 100%;\n}\n\n.custom-input-icon {\n    position: absolute;\n    top : 50%;\n    -webkit-transform: translate(0, -50%);\n            transform: translate(0, -50%);\n    right: 0.5em;\n    color: #f15a29;\n}\n\n.section-wrapper {\n    max-width: 70em;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.dropdown-user-menu {\n    padding: 0;\n    border:none;\n    left: -8em !important;\n}\n\n.user-dropdown-header {\n    line-height: 4em;\n    background-color: #FF6633;\n    color: #fff;\n}\n\n.user-drowpdown-body {\n    line-height: 2.5em;\n}\n\n.user-drowpdown-body:last-child {\n    border-top:1px solid #acacac;\n}\n\n@media screen and (max-width: 850px) {\n    .custom-navbar {\n        padding: 0 5%;\n    }\n}"

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav-bar custom-navbar d-none d-md-block\">\n  <div class=\"section-wrapper\">\n    <div class=\"row first-row\">\n      <div class=\"col-1\">\n        <span class=\"custom-navbar-btn\">logo</span>\n      </div>\n      <div class=\"col p-0 search-input-ctn\">\n        <input type=\"text\" placeholder=\"ค้นหา\" class=\"form-control custom-input\" aria-label=\"Small\">\n        <span class=\"oi oi-magnifying-glass custom-input-icon\"></span>\n      </div>\n      <div class=\"col-2 p-0 custom-navbar-btn\" >\n        <span class=\"\">ตั้งเป้าหมาย</span>\n      </div>\n      <div class=\"col-2 p-0 custom-navbar-btn\">\n        <span class=\"\">สมัครสอบ Adtid</span>\n      </div>\n      <div class=\"col-2 p-0 custom-navbar-btn\" *ngIf=\"isLogedin\">\n        <span class=\"\">แจ้งเตือน</span>\n      </div>\n      <div class=\"col-2 p-0 custom-navbar-btn\" (click)=\"loginAction()\" *ngIf=\"!isLogedin\">\n        <span class=\" login-btn\">เข้าสู่ระบบ</span>\n      </div>\n      <div class=\"col-2 p-0 custom-navbar-btn\" *ngIf=\"isLogedin\" id=\"dropdownUserMenu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <div class=\"dropdown\">\n            <span class=\"oi oi-person username-icon\"></span>\n            <span class=\"dropdown-toggle\">username</span>\n        </div>\n        <div class=\"dropdown-menu dropdown-user-menu\" aria-labelledby=\"dropdownUserMenu\">\n          <div class=\"row m-0\">\n            <div class=\"col-12 user-dropdown-header\">ภาพรวมบัญชี</div>\n            <div class=\"col-12 user-drowpdown-body\">ข้อมูลนักเรียน</div>\n            <div class=\"col-12 user-drowpdown-body\">ข้อมูลการสอบ</div>\n            <div class=\"col-12 user-drowpdown-body\">ตั้งเป้าหมายคณะ</div>\n            <div class=\"col-12 user-drowpdown-body\">ประวัติการชำระเงิน</div>\n            <div class=\"col-12 user-drowpdown-body\">ตั้งค่าโปรไฟล์</div>\n            <div class=\"col-12 user-drowpdown-body\">ออกจากระบบ</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row submenu mt-2\">\n      <div class=\"col p-0\">\n        <span class=\"custom-navbar-btn\">เกี่ยวกับ ADTID</span>\n      </div>\n      <div class=\"col p-0 custom-dropdown-btn\" id=\"dropdownTcaMenu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <span class=\"custom-navbar-btn dropdown-toggle\">\n          สอบ TCAS 62\n        </span>\n        <div class=\"dropdown-menu tcas-dropdown\" aria-labelledby=\"dropdownTcaMenu\">\n          <div class=\"row px-3\">\n            <div class=\"col-6\"><span>สมัครสอบ</span></div>\n            <div class=\"col-6\"><span>ประกาศผลสอบ</span></div>\n          </div>\n          <div class=\"row  px-3\">\n            <div class=\"col-6\"><span>ห้องสอบออนไลน์</span></div>\n            <div class=\"col-6\"><span>ประกาศ TOP 10</span></div>\n          </div>\n          <div class=\"row  px-3\">\n            <div class=\"col-6\"><span>ชั้นตอนการทดสอบออนไลน์</span></div>\n            <div class=\"col-6\"><span>ประวัติการสอบ</span></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col p-0\">\n        <span class=\"custom-navbar-btn\">เกติกาและเงื่อนไข</span>\n      </div>\n      <div class=\"col p-0\">\n        <span class=\"custom-navbar-btn\">ข่าวและประกาศ</span>\n      </div>\n      <div class=\"col p-0\">\n        <span class=\"custom-navbar-btn\">ผู้ออกข้อสอบ</span>\n      </div>\n      <div class=\"col p-0\">\n        <span class=\"custom-navbar-btn\">ช่วยเหลือ</span>\n      </div>\n      <div class=\"col p-0\">\n        <span class=\"custom-navbar-btn\">ติดต่อเรา</span>\n      </div>\n    </div>\n  </div>\n</nav>\n<nav class=\"nav-bar custom-navbar-mobile navbar-expand-md d-block d-md-none\">\n  <a class=\"navbar-brand\" href=\"#\">Adtid</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarMobile\" aria-controls=\"navbarMobile\"\n    aria-expanded=\"false\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse custom-collapse-item\" id=\"navbarMobile\">\n    <ul class=\"custom-navbar-nav\">\n      <li>หน้าแรก</li>\n    </ul>\n    <ul class=\"custom-navbar-nav\">\n      <li>เข้าสู่ระบบ</li>\n      <li>สมัครสมาชิก</li>\n      <li>ตั้งเป้าหมายคณะ</li>\n    </ul>\n    <ul class=\"custom-navbar-nav\">\n      <li>สมัครสอบ</li>\n      <li>ขั้นตอนการสอบออนไลน์</li>\n      <li>ประกาศ TOP 10</li>\n    </ul>\n    <ul class=\"custom-navbar-nav\">\n      <li>กติกาและเงื่อนไข</li>\n      <li>ข่าว / ประกาศ</li>\n      <li>ผู้ออกสอบ</li>\n      <li>ช่วยเหลือ</li>\n      <li>เกี่ยวกับ AD'TID</li>\n    </ul>\n    <ul class=\"custom-navbar-footer\">\n      <li>ติดต่อเรา</li>\n      <li>นโยบายความเป็นส่วนตัว</li>\n      <li>เงื่อนไขข้อตกลงการใช้บริการ</li>\n    </ul>\n    <!-- <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n    </ul> -->\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.ts ***!
  \**************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
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

var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent() {
        this.isLogedin = false;
    }
    MainMenuComponent.prototype.ngOnInit = function () {
    };
    MainMenuComponent.prototype.loginAction = function () {
        this.isLogedin = !this.isLogedin;
    };
    MainMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main-menu',
            template: __webpack_require__(/*! ./main-menu.component.html */ "./src/app/main-menu/main-menu.component.html"),
            styles: [__webpack_require__(/*! ./main-menu.component.css */ "./src/app/main-menu/main-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainMenuComponent);
    return MainMenuComponent;
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

module.exports = __webpack_require__(/*! /Users/chakrit/Desktop/workspace/my-project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map