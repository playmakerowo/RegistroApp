(self["webpackChunkregistroApp"] = self["webpackChunkregistroApp"] || []).push([["src_app_pages_login-create_login-create_module_ts"],{

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

/***/ 5989:
/*!*******************************************************************!*\
  !*** ./src/app/pages/login-create/login-create-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginCreatePageRoutingModule": () => (/* binding */ LoginCreatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_create_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-create.page */ 7961);




const routes = [
    {
        path: '',
        component: _login_create_page__WEBPACK_IMPORTED_MODULE_0__.LoginCreatePage
    }
];
let LoginCreatePageRoutingModule = class LoginCreatePageRoutingModule {
};
LoginCreatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginCreatePageRoutingModule);



/***/ }),

/***/ 7686:
/*!***********************************************************!*\
  !*** ./src/app/pages/login-create/login-create.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginCreatePageModule": () => (/* binding */ LoginCreatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_create_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-create-routing.module */ 5989);
/* harmony import */ var _login_create_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-create.page */ 7961);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let LoginCreatePageModule = class LoginCreatePageModule {
};
LoginCreatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _login_create_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginCreatePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_login_create_page__WEBPACK_IMPORTED_MODULE_1__.LoginCreatePage]
    })
], LoginCreatePageModule);



/***/ }),

/***/ 7961:
/*!*********************************************************!*\
  !*** ./src/app/pages/login-create/login-create.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginCreatePage": () => (/* binding */ LoginCreatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_create_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login-create.page.html */ 3113);
/* harmony import */ var _login_create_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-create.page.scss */ 9363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/users.service */ 8320);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);







let LoginCreatePage = class LoginCreatePage {
    constructor(UserService, router, AlertController) {
        this.UserService = UserService;
        this.router = router;
        this.AlertController = AlertController;
        this.crearLogin = "Crear Cuenta";
    }
    ngOnInit() {
    }
    addUser(nombre, pass, pass2, estado) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (nombre.value != "") {
                if (pass.value != "") {
                    if (pass2.value != "") {
                        if (pass2.value === pass.value) {
                            const alerta = yield this.AlertController.create({
                                header: 'Agregar User: ' + nombre.value,
                                message: 'Confirmar agregar',
                                buttons: [
                                    {
                                        text: 'agregar',
                                        handler: () => {
                                            console.log(nombre.value, pass.value, estado.value);
                                            this.UserService.createUser(nombre.value, pass.value, estado.value).subscribe((res) => { this.router.navigate(['/login']); }, (err) => console.log(err));
                                        }
                                    },
                                    {
                                        text: 'Cancelar',
                                        role: 'cancel'
                                    },
                                ]
                            });
                            yield alerta.present();
                        }
                        else {
                            console.log("no");
                            const alert = yield this.AlertController.create({
                                cssClass: 'my-custom-class',
                                header: 'Las claves no coinciden',
                                buttons: ['Aceptar']
                            });
                            yield alert.present();
                        }
                    }
                    else {
                        console.log("no");
                        const alert = yield this.AlertController.create({
                            cssClass: 'my-custom-class',
                            header: 'password 2 en blanco',
                            buttons: ['Aceptar']
                        });
                        yield alert.present();
                    }
                }
                else {
                    console.log("no");
                    const alert = yield this.AlertController.create({
                        cssClass: 'my-custom-class',
                        header: 'password 1 en blanco',
                        buttons: ['Aceptar']
                    });
                    yield alert.present();
                }
            }
            else {
                console.log("no");
                const alert = yield this.AlertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Nombre en blanco',
                    buttons: ['Aceptar']
                });
                yield alert.present();
            }
        });
    }
};
LoginCreatePage.ctorParameters = () => [
    { type: _service_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
LoginCreatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login-create',
        template: _raw_loader_login_create_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_create_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginCreatePage);



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

/***/ 9363:
/*!***********************************************************!*\
  !*** ./src/app/pages/login-create/login-create.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1jcmVhdGUucGFnZS5zY3NzIn0= */");

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

/***/ 3113:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-create/login-create.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <app-encabezado [pageTitle]=\"crearLogin\"></app-encabezado>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <app-encabezado [pageTitle]=\"tituloReestablecer\"></app-encabezado>\n  </ion-header>\n\n  <ion-grid>\n\n    <ion-card>\n      <ion-card-header style=\"text-align: center;\">\n        <ion-card class=\"card1\" style=\"text-align: center;\">\n          <div style=\"margin: 15px 15px ;\">\n            <img class=\"imagen1\" src=\"../../assets/img/Logo_DuocUC.png\" alt=\"\"\n              style=\"justify-content:center;border-radius: 5px; width: auto; height: auto;\">\n          </div>\n\n        </ion-card>\n      </ion-card-header>\n\n\n      <ion-card-content style=\"text-align: center;\">\n        <ion-card>\n          <ion-card-title>Crear Usuario</ion-card-title>\n          <ion-text style=\"font-weight: bold;\">\n            Bienvenido al portal para crear de tu cuenta Duoc, ingresa los datos para\n            iniciar el proceso.\n          </ion-text>\n          <form class=\"form\">\n            <ion-item>\n              <ion-label type=\"text\" position=\"stacked\"></ion-label>\n              <ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>\n              <ion-input placeholder=\"Nombre de Usuario\" #nombre required minlength=\"1\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\"></ion-label>\n              <ion-icon name=\"key-outline\" slot=\"start\"></ion-icon>\n              <ion-input type=\"password\" placeholder=\"Contraseña\" #pass></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\"></ion-label>\n              <ion-icon name=\"key-outline\" slot=\"start\"></ion-icon>\n              <ion-input type=\"password\" placeholder=\"Repetir Contraseña\" #pass2></ion-input>\n            </ion-item>\n            <ion-item>\n            <ion-icon name=\"man-outline\" slot=\"start\"></ion-icon>\n            \n              <ion-select placeholder=\"Seleccionar Estado\" value=\"true\" #estado>\n                <ion-select-option value=\"true\" >Alumno</ion-select-option>\n                <ion-select-option value=\"false\" >Docente</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </form>\n        </ion-card>\n            <div>\n                <ion-button (click)=\"addUser(nombre, pass, pass2, estado)\" class=\"button\" color=\"success\">Crear Usuario\n                  <ion-icon name=\"person-add-outline\" slot=\"start\"></ion-icon>\n                </ion-button>\n            </div>\n      </ion-card-content>\n    </ion-card>\n\n  </ion-grid>\n</ion-content>\n\n<app-piedepagina></app-piedepagina>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login-create_login-create_module_ts.js.map