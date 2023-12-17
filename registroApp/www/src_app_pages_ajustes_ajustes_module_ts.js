(self["webpackChunkregistroApp"] = self["webpackChunkregistroApp"] || []).push([["src_app_pages_ajustes_ajustes_module_ts"],{

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

/***/ 3886:
/*!*********************************************************!*\
  !*** ./src/app/pages/ajustes/ajustes-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AjustesPageRoutingModule": () => (/* binding */ AjustesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ajustes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajustes.page */ 2555);




const routes = [
    {
        path: '',
        component: _ajustes_page__WEBPACK_IMPORTED_MODULE_0__.AjustesPage
    }
];
let AjustesPageRoutingModule = class AjustesPageRoutingModule {
};
AjustesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AjustesPageRoutingModule);



/***/ }),

/***/ 9465:
/*!*************************************************!*\
  !*** ./src/app/pages/ajustes/ajustes.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AjustesPageModule": () => (/* binding */ AjustesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ajustes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajustes-routing.module */ 3886);
/* harmony import */ var _ajustes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajustes.page */ 2555);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let AjustesPageModule = class AjustesPageModule {
};
AjustesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _ajustes_routing_module__WEBPACK_IMPORTED_MODULE_0__.AjustesPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_ajustes_page__WEBPACK_IMPORTED_MODULE_1__.AjustesPage]
    })
], AjustesPageModule);



/***/ }),

/***/ 2555:
/*!***********************************************!*\
  !*** ./src/app/pages/ajustes/ajustes.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AjustesPage": () => (/* binding */ AjustesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_ajustes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ajustes.page.html */ 9638);
/* harmony import */ var _ajustes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajustes.page.scss */ 9393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AjustesPage = class AjustesPage {
    constructor() {
        this.paginaTitulo = "Ajustes";
    }
    ngOnInit() {
    }
};
AjustesPage.ctorParameters = () => [];
AjustesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-ajustes',
        template: _raw_loader_ajustes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ajustes_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AjustesPage);



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

/***/ 9393:
/*!*************************************************!*\
  !*** ./src/app/pages/ajustes/ajustes.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhanVzdGVzLnBhZ2Uuc2NzcyJ9 */");

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

/***/ 9638:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ajustes/ajustes.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <app-encabezado [pageTitle]=\"paginaTitulo\"></app-encabezado>\n</ion-header>\n\n<ion-content class=\"background\" [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <app-encabezado [pageTitle]=\"paginaTitulo\"></app-encabezado>\n  </ion-header>\n\n  <ion-grid>\n\n    <ion-card>\n      <ion-card-header style=\"text-align: center;\">\n        <ion-card-subtitle style=\"text-align: center;margin-block: 5px;\">\n        </ion-card-subtitle>\n        <div>\n          <img class=\"imagen1\" src=\"../../assets/img/Logo_DuocUC.png\" alt=\"\"\n            style=\"justify-content:center;border-radius: 5px;\">\n        </div>\n\n        <ion-card-title>Ajusta Tu App</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content style=\"text-align: center;\">\n        Configura tus notificaciones, seguridad de inicio de sesion y pide ayuda en caso de que la necesites\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-item ion-item [routerLink]=\"['/home']\">\n        <ion-icon name=\"notifications-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Notificaciones</ion-label>\n      </ion-item>\n\n      <ion-item ion-item [routerLink]=\"['/home']\" class=\"ion-activated\">\n        <ion-icon name=\"lock-closed-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Seguridad inicio de sesión</ion-label>\n      </ion-item>\n\n      <ion-item ion-item [routerLink]=\"['/home']\">\n        <ion-icon name=\"help-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Ayuda</ion-label>\n      </ion-item>\n\n    </ion-card>\n    <ion-card>\n      <ion-item ion-item [routerLink]=\"['/login']\">\n        <ion-icon name=\"log-in-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Cerrar sesion</ion-label>\n      </ion-item>\n\n    </ion-card>\n  </ion-grid>\n</ion-content>\n\n<app-piedepagina></app-piedepagina>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ajustes_ajustes_module_ts.js.map