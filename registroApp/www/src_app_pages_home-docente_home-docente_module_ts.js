(self["webpackChunkregistroApp"] = self["webpackChunkregistroApp"] || []).push([["src_app_pages_home-docente_home-docente_module_ts"],{

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

/***/ 7181:
/*!*******************************************************************!*\
  !*** ./src/app/pages/home-docente/home-docente-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeDocentePageRoutingModule": () => (/* binding */ HomeDocentePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_docente_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-docente.page */ 5548);




const routes = [
    {
        path: '',
        component: _home_docente_page__WEBPACK_IMPORTED_MODULE_0__.HomeDocentePage
    }
];
let HomeDocentePageRoutingModule = class HomeDocentePageRoutingModule {
};
HomeDocentePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomeDocentePageRoutingModule);



/***/ }),

/***/ 7850:
/*!***********************************************************!*\
  !*** ./src/app/pages/home-docente/home-docente.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeDocentePageModule": () => (/* binding */ HomeDocentePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _home_docente_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-docente-routing.module */ 7181);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/components.module */ 5642);
/* harmony import */ var _home_docente_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-docente.page */ 5548);








let HomeDocentePageModule = class HomeDocentePageModule {
};
HomeDocentePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_docente_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeDocentePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule
        ],
        declarations: [_home_docente_page__WEBPACK_IMPORTED_MODULE_2__.HomeDocentePage]
    })
], HomeDocentePageModule);



/***/ }),

/***/ 5548:
/*!*********************************************************!*\
  !*** ./src/app/pages/home-docente/home-docente.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeDocentePage": () => (/* binding */ HomeDocentePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_docente_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home-docente.page.html */ 7224);
/* harmony import */ var _home_docente_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-docente.page.scss */ 4206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let HomeDocentePage = class HomeDocentePage {
    constructor() {
        this.paginaTitulo = "APP QR";
        this.date = new Date().toISOString();
    }
    ngOnInit() {
    }
};
HomeDocentePage.ctorParameters = () => [];
HomeDocentePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home-docente',
        template: _raw_loader_home_docente_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_docente_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomeDocentePage);



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

/***/ 4206:
/*!***********************************************************!*\
  !*** ./src/app/pages/home-docente/home-docente.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".button {\n  transition-duration: 0.4s;\n  display: inline-block;\n  font-size: 12px;\n  width: auto;\n  text-align: center;\n  margin: 10px;\n  height: 30px;\n}\n\n.button span {\n  margin-right: 10px;\n}\n\n.button:hover {\n  color: white;\n}\n\n.botonqr {\n  justify-content: center;\n  margin-top: 20px;\n  width: 100px;\n  cursor: pointer;\n  cursor: hand;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtZG9jZW50ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUVFO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoiaG9tZS1kb2NlbnRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uIHNwYW57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b246aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuYm90b25xcntcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIGN1cnNvcjpoYW5kO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgfVxyXG4gICJdfQ== */");

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

/***/ 7224:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home-docente/home-docente.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n    <app-encabezado [pageTitle]=\"paginaTitulo\"></app-encabezado>\n</ion-header>\n\n<ion-content class=\"background\" [fullscreen]=\"true\">\n    <ion-header collapse=\"condense\">\n        <app-encabezado [pageTitle]=\"paginaTitulo\"></app-encabezado>\n    </ion-header>\n\n    <ion-grid>\n        <ion-card>\n            <ion-card-header style=\"text-align: center;\">\n                    <div style=\"pointer-events:none\">        \n                        <ion-datetime [(ngModel)]=\"date\" ></ion-datetime>\n                        <ion-datetime displayFormat=\"hh:mm a\" [(ngModel)]=\"date\" ></ion-datetime>\n                    </div>\n                <div>\n                    <img class=\"imagen1\" src=\"../../assets/img/Logo_DuocUC.png\" alt=\"\" style=\"justify-content:center;border-radius: 5px;\">\n                </div>\n\n                <ion-card-title>Bienvenido</ion-card-title>\n            </ion-card-header>\n        </ion-card>\n\n        <ion-card>\n            <ion-item style=\"text-align: center;\">\n                <ion-icon name=\"qr-code-outline\"></ion-icon>\n                <ion-label style=\"font-size: 15px;\">Crear QR de asistencia</ion-label>\n            </ion-item>\n\n            <ion-card-content style=\"text-align: center;\">\n                Crear sesion de asistencia para alumnos mediante codigo QR, pulsando el boton crear QR.\n            </ion-card-content>\n            <ion-card-content style=\"text-align: center;\">\n                <ion-button class=\"button\" color=\"success\" style=\"display: inline-block;\" [routerLink]=\"['/QR']\">\n                    <ion-icon name=\"add-outline\"></ion-icon>\n                    Crear QR\n                </ion-button>\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n            <ion-item [routerLink]=\"['/alumnos']\" class=\"ion-activated\">\n                <ion-icon name=\"people-outline\" slot=\"start\"></ion-icon>\n                <ion-label>Alumnos</ion-label>\n            </ion-item>\n\n            <ion-item ion-item ion-item [routerLink]=\"['/listado-asistencias']\">\n                <ion-icon name=\"stopwatch-outline\" slot=\"start\"></ion-icon>\n                <ion-label>Listado de asistencias</ion-label>\n            </ion-item>\n\n        </ion-card>\n        <ion-card>\n            <ion-item ion-item [routerLink]=\"['/ajustes']\">\n                <ion-icon name=\"settings-outline\" slot=\"start\"></ion-icon>\n                <ion-label>Ajustes</ion-label>\n            </ion-item>\n            <ion-item ion-item [routerLink]=\"['/home']\" class=\"ion-activated\">\n                <ion-icon name=\"eye-outline\" slot=\"start\"></ion-icon>\n                <ion-label>Vista Alumno</ion-label>\n            </ion-item>\n            <ion-item ion-item [routerLink]=\"['/login-profe']\">\n                <ion-icon name=\"log-in-outline\" slot=\"start\"></ion-icon>\n                <ion-label>Cerrar sesion</ion-label>\n            </ion-item>\n\n\n        </ion-card>\n    </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home-docente_home-docente_module_ts.js.map