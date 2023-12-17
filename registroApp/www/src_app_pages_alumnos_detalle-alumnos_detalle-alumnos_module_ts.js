(self["webpackChunkregistroApp"] = self["webpackChunkregistroApp"] || []).push([["src_app_pages_alumnos_detalle-alumnos_detalle-alumnos_module_ts"],{

/***/ 6205:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/alumnos/detalle-alumnos/detalle-alumnos-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleAlumnosPageRoutingModule": () => (/* binding */ DetalleAlumnosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _detalle_alumnos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-alumnos.page */ 4050);




const routes = [
    {
        path: '',
        component: _detalle_alumnos_page__WEBPACK_IMPORTED_MODULE_0__.DetalleAlumnosPage
    }
];
let DetalleAlumnosPageRoutingModule = class DetalleAlumnosPageRoutingModule {
};
DetalleAlumnosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetalleAlumnosPageRoutingModule);



/***/ }),

/***/ 5774:
/*!*************************************************************************!*\
  !*** ./src/app/pages/alumnos/detalle-alumnos/detalle-alumnos.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleAlumnosPageModule": () => (/* binding */ DetalleAlumnosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 5642);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _detalle_alumnos_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalle-alumnos-routing.module */ 6205);
/* harmony import */ var _detalle_alumnos_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalle-alumnos.page */ 4050);









let DetalleAlumnosPageModule = class DetalleAlumnosPageModule {
};
DetalleAlumnosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _detalle_alumnos_routing_module__WEBPACK_IMPORTED_MODULE_1__.DetalleAlumnosPageRoutingModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_detalle_alumnos_page__WEBPACK_IMPORTED_MODULE_2__.DetalleAlumnosPage]
    })
], DetalleAlumnosPageModule);



/***/ }),

/***/ 4050:
/*!***********************************************************************!*\
  !*** ./src/app/pages/alumnos/detalle-alumnos/detalle-alumnos.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleAlumnosPage": () => (/* binding */ DetalleAlumnosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_detalle_alumnos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./detalle-alumnos.page.html */ 7322);
/* harmony import */ var _detalle_alumnos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalle-alumnos.page.scss */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _service_alumnos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/alumnos.service */ 1372);







let DetalleAlumnosPage = class DetalleAlumnosPage {
    constructor(activateRouter, alumnosService, AlertController, router) {
        this.activateRouter = activateRouter;
        this.alumnosService = alumnosService;
        this.AlertController = AlertController;
        this.router = router;
    }
    ngOnInit() {
    }
    home() {
        this.router.navigate(['/home']);
    }
};
DetalleAlumnosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _service_alumnos_service__WEBPACK_IMPORTED_MODULE_2__.AlumnosService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
DetalleAlumnosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-detalle-alumnos',
        template: _raw_loader_detalle_alumnos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_detalle_alumnos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DetalleAlumnosPage);



/***/ }),

/***/ 7868:
/*!*************************************************************************!*\
  !*** ./src/app/pages/alumnos/detalle-alumnos/detalle-alumnos.page.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhbGxlLWFsdW1ub3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 7322:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alumnos/detalle-alumnos/detalle-alumnos.page.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title> {{alumno.nombre}} </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"deleteAlumno(aux.id)\">\n                <ion-icon name=\"trash\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <ion-card-header style=\"text-align: center;\">\n\n            <div>\n                <img class=\"imagen1\" [src]=\"alumno.imagen\" alt=\"\" style=\"justify-content:center;border-radius: 5px;\">\n            </div>\n\n            <ion-card-title>{{alumno.nombre}}</ion-card-title>\n        </ion-card-header>\n\n        <ion-card-content style=\"text-align: center;\">\n            {{alumno.carrera}}\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>\n\n<app-piedepagina></app-piedepagina>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_alumnos_detalle-alumnos_detalle-alumnos_module_ts.js.map