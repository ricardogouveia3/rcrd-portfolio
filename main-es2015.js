(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/job-list/job-list.component */ "./src/app/components/job-list/job-list.component.ts");




class AppComponent {
    constructor() {
        this.title = 'rcrd-portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-job-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_2__["JobListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/job-list/job-list.component */ "./src/app/components/job-list/job-list.component.ts");
/* harmony import */ var _components_single_job_single_job_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/single-job/single-job.component */ "./src/app/components/single-job/single-job.component.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _components_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_6__["JobListComponent"], _components_single_job_single_job_component__WEBPACK_IMPORTED_MODULE_7__["SingleJobComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _components_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_6__["JobListComponent"], _components_single_job_single_job_component__WEBPACK_IMPORTED_MODULE_7__["SingleJobComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 11, vars: 0, consts: [[1, "container"], ["href", "/", 1, "header-link"], ["src", "assets/img/logo-w.svg", "alt", ""], [1, "options"], ["id", "filter"], ["src", "assets/img/icons/filter.svg", "alt", ""], ["id", "search"], ["src", "assets/img/icons/search.svg", "alt", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  width: 100%;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #4a4a4a;\n  padding: 10px 15px;\n}\n@media screen and (max-width: 700px) {\n  header[_ngcontent-%COMP%] {\n    position: relative;\n    height: unset;\n    padding: 20px 15px;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n@media screen and (max-width: 700px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    row-gap: 10px;\n  }\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.header-link[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media screen and (max-width: 700px) {\n  .header-link[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.header-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n}\n@media screen and (max-width: 700px) {\n  .header-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n}\nh1[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\";\n  margin-left: 10px;\n  color: #ffffff;\n  font-weight: 100;\n  text-transform: uppercase;\n}\n@media screen and (max-width: 700px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n}\n.options[_ngcontent-%COMP%] {\n  display: flex;\n  -moz-column-gap: 10px;\n       column-gap: 10px;\n  display: none;\n}\n@media screen and (max-width: 700px) {\n  .options[_ngcontent-%COMP%] {\n    -moz-column-gap: 20px;\n         column-gap: 20px;\n  }\n}\nbutton[_ngcontent-%COMP%] {\n  width: 50px;\n  cursor: not-allowed;\n  background-color: transparent;\n  border: 0;\n  display: flex;\n}\n@media screen and (max-width: 700px) {\n  button[_ngcontent-%COMP%] {\n    width: 35px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaWNhcmRvZ291dmVpYTMvRGV2L3JjcmQtcG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBYkY7SUFjSSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtFQ0VGO0FBQ0Y7QUREQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNJRjtBREZFO0VBUEY7SUFRRyxzQkFBQTtJQUNBLGFBQUE7RUNLRDtBQUNGO0FESkE7RUFDRSxxQkFBQTtBQ09GO0FETEE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1FGO0FETkU7RUFMRjtJQU1JLHNCQUFBO0VDU0Y7QUFDRjtBRFJFO0VBQ0UsV0FBQTtBQ1VKO0FEUkk7RUFIRjtJQUlJLFdBQUE7RUNXSjtBQUNGO0FEVkE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNhRjtBRFhFO0VBUEY7SUFRSSxnQkFBQTtFQ2NGO0FBQ0Y7QURiQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0VBQ0EsYUFBQTtBQ2dCRjtBRGRFO0VBTEY7SUFNSSxxQkFBQTtTQUFBLGdCQUFBO0VDaUJGO0FBQ0Y7QURoQkE7RUFDRSxXQUFBO0VBRUEsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDa0JGO0FEaEJFO0VBUkY7SUFTSSxXQUFBO0VDbUJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJcbiAgcG9zaXRpb246IGZpeGVkXG4gIHRvcDogMFxuICBsZWZ0OiAwXG4gIHotaW5kZXg6IDEwXG4gIHdpZHRoOiAxMDAlXG4gIGhlaWdodDogMTAwcHhcbiAgZGlzcGxheTogZmxleFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICBhbGlnbi1pdGVtczogY2VudGVyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGFcbiAgcGFkZGluZzogMTBweCAxNXB4XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgaGVpZ2h0OiB1bnNldFxuICAgIHBhZGRpbmc6IDIwcHggMTVweFxuXG4uY29udGFpbmVyXG4gIHdpZHRoOiAxMDAlXG4gIG1hcmdpbjogMCBhdXRvXG4gIGRpc3BsYXk6IGZsZXhcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweClcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgIHJvdy1nYXA6IDEwcHhcblxuYVxuICB0ZXh0LWRlY29yYXRpb246IG5vbmVcblxuLmhlYWRlci1saW5rXG4gIGRpc3BsYXk6IGZsZXhcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KVxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cblxuICBpbWdcbiAgICB3aWR0aDogNzBweFxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpXG4gICAgICB3aWR0aDogNTBweFxuXG5oMVxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnXG4gIG1hcmdpbi1sZWZ0OiAxMHB4XG4gIGNvbG9yOiAjZmZmZmZmXG4gIGZvbnQtd2VpZ2h0OiAxMDBcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KVxuICAgIGZvbnQtc2l6ZTogMS41ZW1cblxuLm9wdGlvbnNcbiAgZGlzcGxheTogZmxleFxuICBjb2x1bW4tZ2FwOiAxMHB4XG4gIGRpc3BsYXk6IG5vbmUgLy8gYXMgbm90IHJlYWR5XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpXG4gICAgY29sdW1uLWdhcDogMjBweFxuXG5idXR0b25cbiAgd2lkdGg6IDUwcHhcbiAgLy8gY3Vyc29yOiBwb2ludGVyXG4gIGN1cnNvcjogbm90LWFsbG93ZWRcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcbiAgYm9yZGVyOiAwXG4gIGRpc3BsYXk6IGZsZXhcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweClcbiAgICB3aWR0aDogMzVweFxuIiwiaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIGhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogdW5zZXQ7XG4gICAgcGFkZGluZzogMjBweCAxNXB4O1xuICB9XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcm93LWdhcDogMTBweDtcbiAgfVxufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaGVhZGVyLWxpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5oZWFkZXItbGluayB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLmhlYWRlci1saW5rIGltZyB7XG4gIHdpZHRoOiA3MHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLmhlYWRlci1saW5rIGltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICB9XG59XG5cbi5vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sdW1uLWdhcDogMTBweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5vcHRpb25zIHtcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xuICB9XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMzVweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/job-list/job-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/job-list/job-list.component.ts ***!
  \***********************************************************/
/*! exports provided: JobListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobListComponent", function() { return JobListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/portfolio.service */ "./src/app/services/portfolio.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _single_job_single_job_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../single-job/single-job.component */ "./src/app/components/single-job/single-job.component.ts");





const _c0 = ["jobListElement"];
function JobListComponent_app_single_job_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-single-job", 3);
} if (rf & 2) {
    const job_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("job", job_r3)("jobIndex", i_r4);
} }
class JobListComponent {
    constructor(portfolioService) {
        this.portfolioService = portfolioService;
        this.jobList = [];
    }
    ngOnInit() {
        this.portfolioService.fetchPortfolioData().subscribe((response) => {
            response.data ? this.jobList.push(...response.data) : this.jobList.push(...response);
        });
    }
    ngAfterViewInit() {
        window.addEventListener('wheel', (event) => {
            this.captureScroll(event);
        }, false);
    }
    captureScroll(event) {
        if (window.innerWidth >= 700) {
            event.preventDefault();
            if (event.deltaY) {
                this.jobListElement.nativeElement.scrollLeft += event.deltaY;
            }
            else if (event.deltaX) {
                this.jobListElement.nativeElement.scrollLeft += -event.deltaX;
            }
        }
    }
}
JobListComponent.ɵfac = function JobListComponent_Factory(t) { return new (t || JobListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_portfolio_service__WEBPACK_IMPORTED_MODULE_1__["PortfolioService"])); };
JobListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JobListComponent, selectors: [["app-job-list"]], viewQuery: function JobListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.jobListElement = _t.first);
    } }, decls: 5, vars: 1, consts: [["mainElement", ""], ["jobListElement", ""], [3, "job", "jobIndex", 4, "ngFor", "ngForOf"], [3, "job", "jobIndex"]], template: function JobListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, JobListComponent_app_single_job_4_Template, 1, 2, "app-single-job", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jobList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _single_job_single_job_component__WEBPACK_IMPORTED_MODULE_3__["SingleJobComponent"]], styles: ["main[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n@media screen and (max-width: 700px) {\n  main[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    overflow-y: hidden;\n  }\n}\nul[_ngcontent-%COMP%] {\n  overflow: auto;\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  display: flex;\n}\nul[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n@media screen and (max-width: 700px) {\n  ul[_ngcontent-%COMP%] {\n    flex-direction: column;\n    overflow-x: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaWNhcmRvZ291dmVpYTMvRGV2L3JjcmQtcG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9qb2ItbGlzdC9qb2ItbGlzdC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9qb2ItbGlzdC9qb2ItbGlzdC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBRENFO0VBSkY7SUFLSSxnQkFBQTtJQUNBLGtCQUFBO0VDRUY7QUFDRjtBRERBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FDSUY7QURGRTtFQUNFLFlBQUE7QUNJSjtBREZFO0VBVkY7SUFXSSxzQkFBQTtJQUNBLGtCQUFBO0VDS0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvam9iLWxpc3Qvam9iLWxpc3QuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluXG4gIG92ZXJmbG93LXg6IGhpZGRlblxuICBvdmVyZmxvdy15OiBhdXRvXG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpXG4gICAgb3ZlcmZsb3cteDogYXV0b1xuICAgIG92ZXJmbG93LXk6IGhpZGRlblxuXG51bFxuICBvdmVyZmxvdzogYXV0b1xuICBwYWRkaW5nOiAwXG4gIG1hcmdpbjogMFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmVcbiAgZGlzcGxheTogZmxleFxuXG4gICY6bGFzdC1jaGlsZFxuICAgIGJvcmRlcjogbm9uZVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KVxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICBvdmVyZmxvdy14OiBoaWRkZW5cbiIsIm1haW4ge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICBtYWluIHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgfVxufVxuXG51bCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbn1cbnVsOmxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICB1bCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-job-list',
                templateUrl: './job-list.component.html',
                styleUrls: ['./job-list.component.sass'],
            }]
    }], function () { return [{ type: _services_portfolio_service__WEBPACK_IMPORTED_MODULE_1__["PortfolioService"] }]; }, { jobListElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['jobListElement', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/single-job/single-job.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/single-job/single-job.component.ts ***!
  \***************************************************************/
/*! exports provided: SingleJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleJobComponent", function() { return SingleJobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "background-color": a0 }; };
class SingleJobComponent {
    constructor() { }
    ngOnInit() {
        this.jobIndex = this.jobIndex + 1;
        this.jobIndex < 10 ? (this.jobIndex = '0' + this.jobIndex.toString()) : '';
    }
}
SingleJobComponent.ɵfac = function SingleJobComponent_Factory(t) { return new (t || SingleJobComponent)(); };
SingleJobComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleJobComponent, selectors: [["app-single-job"]], inputs: { job: "job", jobIndex: "jobIndex" }, decls: 11, vars: 7, consts: [["target", "_blank", 3, "href", "ngStyle"], [1, "white"], [1, "content"], [1, "text"], [1, "index"], [1, "type"]], template: function SingleJobComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.job.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.job.bgColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jobIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.job.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.job.type);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["li[_ngcontent-%COMP%] {\n  height: 100vh;\n  min-width: 450px;\n  background-color: white;\n  border: none;\n  border-right: 1px solid #bdc3c7;\n}\n@media screen and (max-width: 700px) {\n  li[_ngcontent-%COMP%] {\n    height: unset;\n  }\n}\na[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  display: flex;\n}\na[_ngcontent-%COMP%]:hover   .white[_ngcontent-%COMP%] {\n  opacity: 0;\n}\na[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%] {\n  padding-bottom: 100px;\n}\n.white[_ngcontent-%COMP%], .content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n@media screen and (max-width: 700px) {\n  .white[_ngcontent-%COMP%], .content[_ngcontent-%COMP%] {\n    height: unset;\n    position: relative;\n  }\n}\n.white[_ngcontent-%COMP%] {\n  background-color: #fff;\n  opacity: 1;\n  transition: opacity 0.35s ease;\n}\n@media screen and (max-width: 700px) {\n  .white[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 120px 20px 20px 20px;\n  z-index: 1;\n  color: #4a4a4a;\n  transition: color 0.35s ease;\n}\n.content[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n@media screen and (max-width: 700px) {\n  .content[_ngcontent-%COMP%] {\n    padding: 40px;\n    color: #ffffff;\n  }\n}\n.text[_ngcontent-%COMP%] {\n  width: 100%;\n  transition: padding 0.35s ease;\n}\n@media screen and (max-width: 700px) {\n  .text[_ngcontent-%COMP%] {\n    padding-bottom: 70px;\n  }\n}\n.index[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-family: monospace;\n}\nh2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 3em;\n  max-width: 75%;\n  line-height: 1.5;\n}\n@media screen and (max-width: 700px) {\n  h2[_ngcontent-%COMP%] {\n    font-size: 2em;\n  }\n}\n.type[_ngcontent-%COMP%] {\n  color: #ffffff;\n  z-index: 0;\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n  text-transform: uppercase;\n  font-weight: 200;\n}\n@media screen and (max-width: 700px) {\n  .type[_ngcontent-%COMP%] {\n    left: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaWNhcmRvZ291dmVpYTMvRGV2L3JjcmQtcG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9zaW5nbGUtam9iL3NpbmdsZS1qb2IuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2luZ2xlLWpvYi9zaW5nbGUtam9iLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUNDRjtBRENFO0VBUEY7SUFRSSxhQUFBO0VDRUY7QUFDRjtBRERBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNJRjtBREZFO0VBQ0UsVUFBQTtBQ0lKO0FERkU7RUFDRSxxQkFBQTtBQ0lKO0FERkE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNLRjtBREhFO0VBUEY7SUFRSSxhQUFBO0lBQ0Esa0JBQUE7RUNNRjtBQUNGO0FETEE7RUFDRSxzQkFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtBQ1FGO0FETkU7RUFMRjtJQU1JLGFBQUE7RUNTRjtBQUNGO0FEUkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUNXRjtBRFRFO0VBQ0UsY0FBQTtBQ1dKO0FEVEU7RUFYRjtJQVlJLGFBQUE7SUFDQSxjQUFBO0VDWUY7QUFDRjtBRFhBO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0FDY0Y7QURaRTtFQUpGO0lBS0ksb0JBQUE7RUNlRjtBQUNGO0FEZEE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7QUNpQkY7QURmQTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDa0JGO0FEaEJFO0VBTkY7SUFPSSxjQUFBO0VDbUJGO0FBQ0Y7QURsQkE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDcUJGO0FEbkJFO0VBVEY7SUFVSSxVQUFBO0VDc0JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpbmdsZS1qb2Ivc2luZ2xlLWpvYi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImxpXG4gIGhlaWdodDogMTAwdmhcbiAgbWluLXdpZHRoOiA0NTBweFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxuICBib3JkZXI6IG5vbmVcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2JkYzNjN1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KVxuICAgIGhlaWdodDogdW5zZXRcblxuYVxuICBoZWlnaHQ6IDEwMCVcbiAgd2lkdGg6IDEwMCVcbiAgcG9zaXRpb246IHJlbGF0aXZlXG4gIGRpc3BsYXk6IGZsZXhcblxuICAmOmhvdmVyIC53aGl0ZVxuICAgIG9wYWNpdHk6IDBcblxuICAmOmhvdmVyIC50ZXh0XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4XG5cbi53aGl0ZSwgLmNvbnRlbnRcbiAgcG9zaXRpb246IGFic29sdXRlXG4gIHRvcDogMFxuICBsZWZ0OiAwXG4gIGhlaWdodDogMTAwJVxuICB3aWR0aDogMTAwJVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KVxuICAgIGhlaWdodDogdW5zZXRcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcblxuLndoaXRlXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZcbiAgb3BhY2l0eTogMVxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zNXMgZWFzZVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KVxuICAgIGRpc3BsYXk6IG5vbmVcblxuLmNvbnRlbnRcbiAgZGlzcGxheTogZmxleFxuICBhbGlnbi1pdGVtczogY2VudGVyXG4gIHBhZGRpbmc6IDEyMHB4IDIwcHggMjBweCAyMHB4XG4gIHotaW5kZXg6IDFcbiAgY29sb3I6ICM0YTRhNGFcbiAgdHJhbnNpdGlvbjogY29sb3IgLjM1cyBlYXNlXG5cbiAgJjpob3ZlclxuICAgIGNvbG9yOiAjZmZmZmZmXG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpXG4gICAgcGFkZGluZzogNDBweFxuICAgIGNvbG9yOiAjZmZmZmZmXG5cbi50ZXh0XG4gIHdpZHRoOiAxMDAlXG4gIHRyYW5zaXRpb246IHBhZGRpbmcgLjM1cyBlYXNlXG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpXG4gICAgcGFkZGluZy1ib3R0b206IDcwcHhcblxuLmluZGV4XG4gIGZvbnQtc2l6ZTogMmVtXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2VcblxuaDJcbiAgbWFyZ2luOiAwXG4gIGZvbnQtc2l6ZTogM2VtXG4gIG1heC13aWR0aDogNzUlXG4gIGxpbmUtaGVpZ2h0OiAxLjVcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweClcbiAgICBmb250LXNpemU6IDJlbVxuXG4udHlwZVxuICBjb2xvcjogI2ZmZmZmZlxuICB6LWluZGV4OiAwXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICBib3R0b206IDIwcHhcbiAgbGVmdDogMjBweFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXG4gIGZvbnQtd2VpZ2h0OiAyMDBcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweClcbiAgICBsZWZ0OiA0MHB4XG4iLCJsaSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1pbi13aWR0aDogNDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiZGMzYzc7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICBsaSB7XG4gICAgaGVpZ2h0OiB1bnNldDtcbiAgfVxufVxuXG5hIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuYTpob3ZlciAud2hpdGUge1xuICBvcGFjaXR5OiAwO1xufVxuYTpob3ZlciAudGV4dCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuLndoaXRlLCAuY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLndoaXRlLCAuY29udGVudCB7XG4gICAgaGVpZ2h0OiB1bnNldDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cblxuLndoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cyBlYXNlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLndoaXRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTIwcHggMjBweCAyMHB4IDIwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjNGE0YTRhO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjM1cyBlYXNlO1xufVxuLmNvbnRlbnQ6aG92ZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5jb250ZW50IHtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG59XG5cbi50ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IHBhZGRpbmcgMC4zNXMgZWFzZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC50ZXh0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbiAgfVxufVxuXG4uaW5kZXgge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cblxuaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBtYXgtd2lkdGg6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgfVxufVxuXG4udHlwZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB6LWluZGV4OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgbGVmdDogMjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC50eXBlIHtcbiAgICBsZWZ0OiA0MHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleJobComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-single-job',
                templateUrl: './single-job.component.html',
                styleUrls: ['./single-job.component.sass'],
            }]
    }], function () { return []; }, { job: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], jobIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/portfolio.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/portfolio.service.ts ***!
  \***********************************************/
/*! exports provided: PortfolioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioService", function() { return PortfolioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class PortfolioService {
    constructor(http) {
        this.http = http;
    }
    fetchPortfolioData() {
        return this.getPortfolioData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(() => {
            console.error('Failed to fetch portfolio data. Using backup JSON');
            return this.getBackupPortfolioData;
        }));
    }
    get getPortfolioData() {
        return this.http
            .get('https://api.rcrd.dev/portfolio');
    }
    get getBackupPortfolioData() {
        return this.http
            .get('data/backup-portfolio.json');
    }
}
PortfolioService.ɵfac = function PortfolioService_Factory(t) { return new (t || PortfolioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PortfolioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PortfolioService, factory: PortfolioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ricardogouveia3/Dev/rcrd-portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map