(self["webpackChunkregistroApp"] = self["webpackChunkregistroApp"] || []).push([["src_app_pages_home_home_module_ts"],{

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

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 8102);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 7603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let HomePage = class HomePage {
    constructor() {
        this.paginaTitulo = "Registro App";
        this.date = new Date().toISOString();
    }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



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

/***/ 7603:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.button {\n  transition-duration: 0.4s;\n  display: inline-block;\n  font-size: 12px;\n  width: auto;\n  text-align: center;\n  margin: 10px;\n  height: 30px;\n}\n\n.button span {\n  margin-right: 10px;\n}\n\n.button:hover {\n  color: white;\n}\n\n.botonqr {\n  justify-content: center;\n  margin-top: 20px;\n  width: 100px;\n  cursor: pointer;\n  cursor: hand;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7QUFGRjs7QUFLQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5idXR0b24ge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5idXR0b24gc3BhbntcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYm90b25xcntcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6MTAwcHg7XG4gIGN1cnNvcjpwb2ludGVyO1xuICBjdXJzb3I6aGFuZDtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG4iXX0= */");

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

/***/ 8102:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n\n    <ion-toolbar>\n            <app-encabezado [pageTitle]=\"paginaTitulo\"></app-encabezado>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\" [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <app-encabezado [pageTitle]=\"paginaTitulo\"></app-encabezado>\n  </ion-header>\n\n  <ion-grid>\n\n    <ion-card>\n      <ion-card-header style=\"text-align: center;\">\n        <ion-datetime [(ngModel)]=\"date\" ></ion-datetime>\n        <ion-datetime displayFormat=\"hh:mm a\" [(ngModel)]=\"date\" ></ion-datetime>\n        <ion-card-subtitle style=\"text-align: center;margin-block: 5px;\">\n        </ion-card-subtitle>\n        <div>\n          <img class=\"imagen1\" src=\"../../assets/img/Logo_DuocUC.png\" alt=\"\"\n            style=\"justify-content:center;border-radius: 5px;\">\n        </div>\n\n        <ion-card-title>Bienvenido</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content style=\"text-align: center;\">\n        Por reglamento académico tienes que tener un 60% de asistencia en cada uno de tus ramos para aprobar el curso,\n        en esta sección podrás revisar el avance y así no repetir por no ir a clases.\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-item style=\"text-align: center;\">\n        <ion-icon name=\"qr-code-outline\"></ion-icon>\n        <ion-label style=\"font-size: 15px;\">Registrar asistencia</ion-label>\n      </ion-item>\n\n      <ion-card-content style=\"text-align: center;\">\n        Registrar asistencia mediante codigo QR, pulsando el boton Leer QR.\n      </ion-card-content>\n      <ion-card-content style=\"text-align: center;\">\n        <ion-button ion-button [routerLink]=\"['/leer-qr']\" class=\"button\" color=\"success\" style=\"display: inline-block;\">\n          <ion-icon name=\"scan-outline\" slot=\"start\" ></ion-icon>\n          Leer QR\n        </ion-button>\n        \n      </ion-card-content>\n      \n\n    </ion-card>\n\n\n    <ion-card>\n      <ion-item ion-item ion-item [routerLink]=\"['/listado-asistencias']\" class=\"ion-activated\">\n        <ion-icon name=\"checkmark-done-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Asistencias</ion-label>\n      </ion-item>\n\n      <ion-item ion-item ion-item [routerLink]=\"['/horario']\" class=\"ion-activated\">\n        <ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Horario</ion-label>\n      </ion-item>\n\n    </ion-card>\n    <ion-card>\n      <ion-item ion-item [routerLink]=\"['/ajustes']\">\n        <ion-icon name=\"settings-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Ajustes</ion-label>\n      </ion-item>\n      <ion-item ion-item [routerLink]=\"['/login']\">\n        <ion-icon name=\"log-in-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Cerrar sesion</ion-label>\n      </ion-item>\n\n    </ion-card>\n  </ion-grid>\n</ion-content>\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map