(self["webpackChunkregistroApp"] = self["webpackChunkregistroApp"] || []).push([["src_app_pages_horario_horario_module_ts"],{

/***/ 2830:
/*!*********************************************************!*\
  !*** ./src/app/pages/horario/horario-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorarioPageRoutingModule": () => (/* binding */ HorarioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _horario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horario.page */ 879);




const routes = [
    {
        path: '',
        component: _horario_page__WEBPACK_IMPORTED_MODULE_0__.HorarioPage
    }
];
let HorarioPageRoutingModule = class HorarioPageRoutingModule {
};
HorarioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HorarioPageRoutingModule);



/***/ }),

/***/ 8612:
/*!*************************************************!*\
  !*** ./src/app/pages/horario/horario.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorarioPageModule": () => (/* binding */ HorarioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _horario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horario-routing.module */ 2830);
/* harmony import */ var _horario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horario.page */ 879);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 1562);









let HorarioPageModule = class HorarioPageModule {
};
HorarioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _horario_routing_module__WEBPACK_IMPORTED_MODULE_0__.HorarioPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionModule
        ],
        declarations: [_horario_page__WEBPACK_IMPORTED_MODULE_1__.HorarioPage]
    })
], HorarioPageModule);



/***/ }),

/***/ 879:
/*!***********************************************!*\
  !*** ./src/app/pages/horario/horario.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorarioPage": () => (/* binding */ HorarioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_horario_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./horario.page.html */ 5519);
/* harmony import */ var _horario_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horario.page.scss */ 8254);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let HorarioPage = class HorarioPage {
    constructor() {
        this.paginaTitulo = "Horario";
    }
    ngOnInit() {
    }
};
HorarioPage.ctorParameters = () => [];
HorarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-horario',
        template: _raw_loader_horario_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_horario_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HorarioPage);



/***/ }),

/***/ 8254:
/*!*************************************************!*\
  !*** ./src/app/pages/horario/horario.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("mat-expansion-panel {\n  background-color: #012345;\n}\n\nmat-panel-title {\n  font-size: small;\n}\n\nmat-panel-description {\n  -webkit-text-decoration: solid;\n          text-decoration: solid;\n  font-size: small;\n}\n\n.button {\n  transition-duration: 0.4s;\n  font-size: 12px;\n  width: auto;\n  text-align: center;\n}\n\n.button span {\n  margin-right: 10px;\n}\n\n.button:hover {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcmFyaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kseUJBQUE7QUFBSjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDSSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFNQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU1FO0VBQ0Usa0JBQUE7QUFISjs7QUFNRTtFQUNFLFlBQUE7QUFISiIsImZpbGUiOiJob3JhcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5tYXQtZXhwYW5zaW9uLXBhbmVse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEsIDM1LCA2OSk7XHJcbiAgICBcclxufVxyXG5cclxubWF0LXBhbmVsLXRpdGxle1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbm1hdC1wYW5lbC1kZXNjcmlwdGlvbntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogc29saWQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi5idXR0b24ge1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uIHNwYW57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b246aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 5519:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/horario/horario.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <app-encabezado [pageTitle]=\"paginaTitulo\"></app-encabezado>\n</ion-header>\n\n<ion-content class=\"background\" [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <app-encabezado [pageTitle]=\"paginaTitulo\"></app-encabezado>\n  </ion-header>\n\n  <ion-grid>\n    <ion-card>\n            <ion-card-header style=\"text-align: center;\">\n              <ion-card class=\"card1\" style=\"text-align: center;\">\n                <div style=\"margin: 15px 15px ;\">\n                  <img class=\"imagen1\" src=\"../../assets/img/Logo_DuocUC.png\" alt=\"\"\n                    style=\"justify-content:center;border-radius: 5px; width: auto; height: auto;\">\n                </div>\n              </ion-card>\n            </ion-card-header>\n\n      <ion-row>\n\n        <ion-col>\n          <ion-card>\n            <ion-card-content>\n              <ion-card-header>\n                <ion-card-title style=\"float: left;\">\n                  <h2 style=\"text-decoration: underline ;\">Horario:</h2> \n                </ion-card-title>\n              </ion-card-header>\n              <ion-button ion-button [routerLink]=\"['/listado-asistencias']\" style=\"display: block; margin: 20px; width: auto;\" fill=\"outline\" color=\"success\">\n                  Ver asistencias\n              </ion-button>\n            <mat-accordion class=\"mat-accordion\">\n              <mat-expansion-panel class=\"mat-expansion-panel\">\n                <mat-expansion-panel-header>\n                  <mat-panel-title>LUNES</mat-panel-title>\n                  <mat-panel-description class=\"mat-panel-description\">INGENIERIA EN INFORMATICA</mat-panel-description>\n                </mat-expansion-panel-header>\n                <div>\n\n                </div>\n              </mat-expansion-panel>\n              <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>MARTES</mat-panel-title>\n                  <mat-panel-description class=\"mat-panel-description\">INGENIERIA EN INFORMATICA</mat-panel-description>\n                </mat-expansion-panel-header>\n                <div>\n\n                </div>\n              </mat-expansion-panel>\n              <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>MIERCOLES</mat-panel-title>\n                  <mat-panel-description class=\"mat-panel-description\">INGENIERIA EN INFORMATICA</mat-panel-description>\n                </mat-expansion-panel-header>\n                <div>\n                  \n                </div>\n              </mat-expansion-panel>\n              <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>JUEVES</mat-panel-title>\n                  <mat-panel-description class=\"mat-panel-description\">INGENIERIA EN INFORMATICA</mat-panel-description>\n                </mat-expansion-panel-header>\n                <div>\n                  \n                </div>\n              </mat-expansion-panel>\n              <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>VIERNES</mat-panel-title>\n                  <mat-panel-description class=\"mat-panel-description\">INGENIERIA EN INFORMATICA</mat-panel-description>\n                </mat-expansion-panel-header>\n                <div>\n                  \n                </div>\n              </mat-expansion-panel>\n            </mat-accordion>\n          </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n  </ion-grid>\n</ion-content>\n\n<app-piedepagina></app-piedepagina>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_horario_horario_module_ts.js.map