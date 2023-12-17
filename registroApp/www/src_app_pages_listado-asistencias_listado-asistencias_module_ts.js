(self["webpackChunkregistroApp"] = self["webpackChunkregistroApp"] || []).push([["src_app_pages_listado-asistencias_listado-asistencias_module_ts"],{

/***/ 7754:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/listado-asistencias/listado-asistencias-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListadoAsistenciasPageRoutingModule": () => (/* binding */ ListadoAsistenciasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _listado_asistencias_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listado-asistencias.page */ 1336);




const routes = [
    {
        path: '',
        component: _listado_asistencias_page__WEBPACK_IMPORTED_MODULE_0__.ListadoAsistenciasPage
    }
];
let ListadoAsistenciasPageRoutingModule = class ListadoAsistenciasPageRoutingModule {
};
ListadoAsistenciasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListadoAsistenciasPageRoutingModule);



/***/ }),

/***/ 6528:
/*!*************************************************************************!*\
  !*** ./src/app/pages/listado-asistencias/listado-asistencias.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListadoAsistenciasPageModule": () => (/* binding */ ListadoAsistenciasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _listado_asistencias_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listado-asistencias-routing.module */ 7754);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/components.module */ 5642);
/* harmony import */ var _listado_asistencias_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listado-asistencias.page */ 1336);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 1562);









let ListadoAsistenciasPageModule = class ListadoAsistenciasPageModule {
};
ListadoAsistenciasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _listado_asistencias_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListadoAsistenciasPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionModule
        ],
        declarations: [_listado_asistencias_page__WEBPACK_IMPORTED_MODULE_2__.ListadoAsistenciasPage]
    })
], ListadoAsistenciasPageModule);



/***/ }),

/***/ 1336:
/*!***********************************************************************!*\
  !*** ./src/app/pages/listado-asistencias/listado-asistencias.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListadoAsistenciasPage": () => (/* binding */ ListadoAsistenciasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_listado_asistencias_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./listado-asistencias.page.html */ 2292);
/* harmony import */ var _listado_asistencias_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listado-asistencias.page.scss */ 8893);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ListadoAsistenciasPage = class ListadoAsistenciasPage {
    constructor() {
        this.paginaTitulo = "Asistencias";
    }
    ngOnInit() {
    }
};
ListadoAsistenciasPage.ctorParameters = () => [];
ListadoAsistenciasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-listado-asistencias',
        template: _raw_loader_listado_asistencias_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_listado_asistencias_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ListadoAsistenciasPage);



/***/ }),

/***/ 8893:
/*!*************************************************************************!*\
  !*** ./src/app/pages/listado-asistencias/listado-asistencias.page.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("mat-expansion-panel {\n  background-color: #012345;\n}\n\nmat-panel-title {\n  font-size: small;\n}\n\nmat-panel-description {\n  -webkit-text-decoration: solid;\n          text-decoration: solid;\n  font-size: small;\n}\n\n.button {\n  transition-duration: 0.4s;\n  font-size: 12px;\n  width: auto;\n  text-align: center;\n}\n\n.button span {\n  margin-right: 10px;\n}\n\n.button:hover {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhZG8tYXNpc3RlbmNpYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kseUJBQUE7QUFBSjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDSSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFNQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU1FO0VBQ0Usa0JBQUE7QUFISjs7QUFNRTtFQUNFLFlBQUE7QUFISiIsImZpbGUiOiJsaXN0YWRvLWFzaXN0ZW5jaWFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5tYXQtZXhwYW5zaW9uLXBhbmVse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEsIDM1LCA2OSk7XHJcbiAgICBcclxufVxyXG5cclxubWF0LXBhbmVsLXRpdGxle1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbm1hdC1wYW5lbC1kZXNjcmlwdGlvbntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogc29saWQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi5idXR0b24ge1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uIHNwYW57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b246aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 2292:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listado-asistencias/listado-asistencias.page.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <app-encabezado [pageTitle]=\"paginaTitulo\"></app-encabezado>\n</ion-header>\n\n<ion-content class=\"background\" [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <app-encabezado [pageTitle]=\"paginaTitulo\"></app-encabezado>\n  </ion-header>\n\n  <ion-grid>\n    <ion-card>\n      <ion-card-header style=\"text-align: center;\">\n        <ion-card class=\"card1\" style=\"text-align: center;\">\n          <div style=\"margin: 15px 15px ;\">\n            <img class=\"imagen1\" src=\"../../assets/img/Logo_DuocUC.png\" alt=\"\"\n              style=\"justify-content:center;border-radius: 5px; width: auto; height: auto;\">\n          </div>\n\n        </ion-card>\n      </ion-card-header>\n\n      <ion-row>\n\n        <ion-col>\n          <ion-card>\n            <ion-card-content>\n              <ion-card-header>\n                <ion-card-title style=\"float: left;\">\n                  <h2 style=\"text-decoration: underline ;\">Asistencias:</h2> \n                </ion-card-title>\n              </ion-card-header>\n              <ion-button ion-button [routerLink]=\"['/horario']\" style=\"display: block; margin: 20px; width: auto;\" fill=\"outline\" color=\"success\">\n                  Ver Horario\n              </ion-button>\n            <mat-accordion class=\"mat-accordion\">\n              <mat-expansion-panel class=\"mat-expansion-panel\">\n                <mat-expansion-panel-header>\n                  <mat-panel-title>ASY4131-003D(P)</mat-panel-title>\n                  <mat-panel-description class=\"mat-panel-description\">Arquitectura</mat-panel-description>\n                </mat-expansion-panel-header>\n                <div>\n                  <p style=\"font-size: 20px; color: yellow;\">95%</p>\n                  <p style=\"font-size: 15px;\">N° de clases registradas: 11</p>\n                  <p style=\"font-size: 15px;\">Asistencia: 11</p>\n                  <ion-progress-bar color=\"success\" value=\"0.95\"></ion-progress-bar>\n                </div>\n              </mat-expansion-panel>\n              <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>CSY4111-002D(P)</mat-panel-title>\n                  <mat-panel-description>Calidad De Software</mat-panel-description>\n                </mat-expansion-panel-header>\n                <div>\n                  <p style=\"font-size: 20px; color: yellow;\">100%</p>\n                  <p style=\"font-size: 15px;\">N° de clases registradas: 11</p>\n                  <p style=\"font-size: 15px;\">Asistencia: 11</p>\n                  <ion-progress-bar color=\"success\" value=\"1.0\"></ion-progress-bar>\n                </div>\n              </mat-expansion-panel>\n              <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>MAT4140-003D(P)</mat-panel-title>\n                  <mat-panel-description>Estadistica Descriptiva</mat-panel-description>\n                </mat-expansion-panel-header>\n                <div>\n                  <p style=\"font-size: 20px; color: yellow;\">60%</p>\n                  <p style=\"font-size: 15px;\">N° de clases registradas: 11</p>\n                  <p style=\"font-size: 15px;\">Asistencia: 11</p>\n                  <ion-progress-bar color=\"success\" value=\"0.6\"></ion-progress-bar>\n                </div>\n              </mat-expansion-panel>\n              <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>EAY4470-004D(T)</mat-panel-title>\n                  <mat-panel-description>Etica Para El Trabajo</mat-panel-description>\n                </mat-expansion-panel-header>\n                <div>\n                  <p style=\"font-size: 20px; color: yellow;\">100%</p>\n                  <p style=\"font-size: 15px;\">N° de clases registradas: 5</p>\n                  <p style=\"font-size: 15px;\">Asistencia: 5</p>\n                  <ion-progress-bar color=\"success\" value=\"1.0\"></ion-progress-bar>\n                </div>\n              </mat-expansion-panel>\n              <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>INI5111-007D(T)</mat-panel-title>\n                  <mat-panel-description>Ingles Intermedio</mat-panel-description>\n                </mat-expansion-panel-header>\n                <div>\n                  <p style=\"font-size: 20px; color: yellow;\">50%</p>\n                  <p style=\"font-size: 15px;\">N° de clases registradas: 23</p>\n                  <p style=\"font-size: 15px;\">Asistencia: 23</p>\n                  <ion-progress-bar color=\"danger\" value=\"0.5\"></ion-progress-bar>\n                </div>\n              </mat-expansion-panel>\n              <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>PGY4121-005D(P)</mat-panel-title>\n                  <mat-panel-description>Programacion De Aplicaciones Moviles</mat-panel-description>\n                </mat-expansion-panel-header>\n                <div>\n                  <p style=\"font-size: 20px; color: yellow;\">100%</p>\n                  <p style=\"font-size: 15px;\">N° de clases registradas: 12</p>\n                  <p style=\"font-size: 15px;\">Asistencia: 12</p>\n                  <ion-progress-bar color=\"success\" value=\"1.0\"></ion-progress-bar>\n                </div>\n              </mat-expansion-panel>\n            </mat-accordion>\n          </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n    </ion-card>\n\n  </ion-grid>\n</ion-content>\n\n<app-piedepagina></app-piedepagina>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_listado-asistencias_listado-asistencias_module_ts.js.map