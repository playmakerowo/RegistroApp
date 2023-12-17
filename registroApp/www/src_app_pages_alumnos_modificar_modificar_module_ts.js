(self["webpackChunkregistroApp"] = self["webpackChunkregistroApp"] || []).push([["src_app_pages_alumnos_modificar_modificar_module_ts"],{

/***/ 5642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _encabezado_encabezado_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encabezado/encabezado.component */ 1843);
/* harmony import */ var _piedepagina_piedepagina_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piedepagina/piedepagina.component */ 1293);






let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _encabezado_encabezado_component__WEBPACK_IMPORTED_MODULE_0__.EncabezadoComponent,
            _piedepagina_piedepagina_component__WEBPACK_IMPORTED_MODULE_1__.PiedepaginaComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule
        ],
        exports: [
            _encabezado_encabezado_component__WEBPACK_IMPORTED_MODULE_0__.EncabezadoComponent,
            _piedepagina_piedepagina_component__WEBPACK_IMPORTED_MODULE_1__.PiedepaginaComponent
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 1843:
/*!***************************************************************!*\
  !*** ./src/app/components/encabezado/encabezado.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EncabezadoComponent": () => (/* binding */ EncabezadoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_encabezado_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./encabezado.component.html */ 670);
/* harmony import */ var _encabezado_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encabezado.component.scss */ 6118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let EncabezadoComponent = class EncabezadoComponent {
    constructor() { }
    ngOnInit() { }
};
EncabezadoComponent.ctorParameters = () => [];
EncabezadoComponent.propDecorators = {
    pageTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
EncabezadoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-encabezado',
        template: _raw_loader_encabezado_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_encabezado_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EncabezadoComponent);



/***/ }),

/***/ 1293:
/*!*****************************************************************!*\
  !*** ./src/app/components/piedepagina/piedepagina.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PiedepaginaComponent": () => (/* binding */ PiedepaginaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_piedepagina_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./piedepagina.component.html */ 3056);
/* harmony import */ var _piedepagina_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piedepagina.component.scss */ 9772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let PiedepaginaComponent = class PiedepaginaComponent {
    constructor() { }
    ngOnInit() { }
};
PiedepaginaComponent.ctorParameters = () => [];
PiedepaginaComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-piedepagina',
        template: _raw_loader_piedepagina_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_piedepagina_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PiedepaginaComponent);



/***/ }),

/***/ 9306:
/*!*********************************************************************!*\
  !*** ./src/app/pages/alumnos/modificar/modificar-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModificarPageRoutingModule": () => (/* binding */ ModificarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _modificar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modificar.page */ 6526);




const routes = [
    {
        path: '',
        component: _modificar_page__WEBPACK_IMPORTED_MODULE_0__.ModificarPage
    }
];
let ModificarPageRoutingModule = class ModificarPageRoutingModule {
};
ModificarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModificarPageRoutingModule);



/***/ }),

/***/ 4009:
/*!*************************************************************!*\
  !*** ./src/app/pages/alumnos/modificar/modificar.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModificarPageModule": () => (/* binding */ ModificarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _modificar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modificar-routing.module */ 9306);
/* harmony import */ var _modificar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modificar.page */ 6526);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let ModificarPageModule = class ModificarPageModule {
};
ModificarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _modificar_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModificarPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_modificar_page__WEBPACK_IMPORTED_MODULE_1__.ModificarPage]
    })
], ModificarPageModule);



/***/ }),

/***/ 6526:
/*!***********************************************************!*\
  !*** ./src/app/pages/alumnos/modificar/modificar.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModificarPage": () => (/* binding */ ModificarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_modificar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modificar.page.html */ 4834);
/* harmony import */ var _modificar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modificar.page.scss */ 4254);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_service_alumnos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/alumnos.service */ 1372);






let ModificarPage = class ModificarPage {
    constructor(alumnosService, router) {
        this.alumnosService = alumnosService;
        this.router = router;
    }
    ngOnInit() {
    }
};
ModificarPage.ctorParameters = () => [
    { type: src_app_service_alumnos_service__WEBPACK_IMPORTED_MODULE_2__.AlumnosService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ModificarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-modificar',
        template: _raw_loader_modificar_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modificar_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModificarPage);



/***/ }),

/***/ 6118:
/*!*****************************************************************!*\
  !*** ./src/app/components/encabezado/encabezado.component.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbmNhYmV6YWRvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 9772:
/*!*******************************************************************!*\
  !*** ./src/app/components/piedepagina/piedepagina.component.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWVkZXBhZ2luYS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 4254:
/*!*************************************************************!*\
  !*** ./src/app/pages/alumnos/modificar/modificar.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RpZmljYXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 670:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/encabezado/encabezado.component.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"ion-text-center\" size=\"short\" style=\"font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif\">\n            {{pageTitle}}\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button autoHide=\"false\"></ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>");

/***/ }),

/***/ 3056:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/piedepagina/piedepagina.component.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("    <!--<ion-tab-bar>\n      <ion-tabs>\n        <ion-tab-bar slot=\"bottom\">\n          <ion-tab-button tab=\"schedule\">\n            <ion-icon name=\"home-outline\"></ion-icon>\n            <ion-label>Home</ion-label>\n          </ion-tab-button>\n      \n          <ion-tab-button tab=\"speakers\">\n            <ion-icon name=\"person-circle\"></ion-icon>\n            <ion-label>Usuario</ion-label>\n          </ion-tab-button>  \n      \n          <ion-tab-button tab=\"about\">\n            <ion-icon name=\"settings-outline\"></ion-icon>\n            <ion-label>Ajustes</ion-label>\n          </ion-tab-button>\n        </ion-tab-bar>\n      </ion-tabs>\n    </ion-tab-bar>\n  -->\n\n");

/***/ }),

/***/ 4834:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alumnos/modificar/modificar.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <app-encabezado [pageTitle]=\"paginaTitulo\"></app-encabezado>\n</ion-header>\n<ion-row>\n  <ion-col>\n    <ion-card>\n      <ion-card-header style=\"text-align: center\">\n        <div>\n         \n        </div>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-input [(ngModel)]=\"qrData\" type=\"text\" placeholder=\"Nombre\" #nombre></ion-input>\n        <ion-input [(ngModel)]=\"a.apellido\" type=\"text\" placeholder=\"Apellido\" #apellido></ion-input>\n        <ion-input [(ngModel)]=\"a.run\" type=\"number\" placeholder=\"Run\" #run></ion-input>\n        <ion-input [(ngModel)]=\"a.dv\" type=\"text\" placeholder=\"Dv\" #dv ></ion-input>\n        <ion-input [(ngModel)]=\"a.carrera\" type=\"text\" placeholder=\"Carrera\" #carrera></ion-input>\n        <ion-input [(ngModel)]=\"a.seccion\" type=\"text\" placeholder=\"Seccion\" #seccion></ion-input>\n        <ion-input [(ngModel)]=\"a.estado\" type=\"text\" placeholder=\"Estado\" #estado></ion-input>\n        <ion-input [(ngModel)]=\"a.telefono\" type=\"number\" placeholder=\"Telefono\" #telefono></ion-input>\n        <ion-input [(ngModel)]=\"a.correo\" type=\"text\" placeholder=\"Correo\" #correo></ion-input>\n        <ion-input [(ngModel)]=\"a.sede\" type=\"text\" placeholder=\"Sede\" #sede ></ion-input>\n        \n        <ion-button\n          style=\"display: block; margin: 20px; width: auto\"\n          color=\"primary\"\n          (click)=\"updatePost(nombre, apellido, run, estado, carrera, seccion, sede, correo, telefono, dv )\"\n          >Modificar</ion-button>\n      </ion-card-content>\n    </ion-card>\n  </ion-col>\n</ion-row>\n<ion-content> </ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_alumnos_modificar_modificar_module_ts.js.map