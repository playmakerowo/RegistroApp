(self["webpackChunkregistroApp"] = self["webpackChunkregistroApp"] || []).push([["src_app_pages_alumnos_alumnos_module_ts"],{

/***/ 8445:
/*!*********************************************************!*\
  !*** ./src/app/pages/alumnos/alumnos-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlumnosPageRoutingModule": () => (/* binding */ AlumnosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _alumnos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alumnos.page */ 1602);




const routes = [
    {
        path: '',
        component: _alumnos_page__WEBPACK_IMPORTED_MODULE_0__.AlumnosPage
    },
    {
        path: 'add-alumnos',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_pages_alumnos_add-alumnos_add-alumnos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./add-alumnos/add-alumnos.module */ 3223)).then(m => m.AddAlumnosPageModule)
    },
];
let AlumnosPageRoutingModule = class AlumnosPageRoutingModule {
};
AlumnosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AlumnosPageRoutingModule);



/***/ }),

/***/ 154:
/*!*************************************************!*\
  !*** ./src/app/pages/alumnos/alumnos.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlumnosPageModule": () => (/* binding */ AlumnosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 5642);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _alumnos_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alumnos-routing.module */ 8445);
/* harmony import */ var _alumnos_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alumnos.page */ 1602);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 1562);









let AlumnosPageModule = class AlumnosPageModule {
};
AlumnosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _alumnos_routing_module__WEBPACK_IMPORTED_MODULE_1__.AlumnosPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionModule
        ],
        declarations: [_alumnos_page__WEBPACK_IMPORTED_MODULE_2__.AlumnosPage]
    })
], AlumnosPageModule);



/***/ }),

/***/ 1602:
/*!***********************************************!*\
  !*** ./src/app/pages/alumnos/alumnos.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlumnosPage": () => (/* binding */ AlumnosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_alumnos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./alumnos.page.html */ 3244);
/* harmony import */ var _alumnos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alumnos.page.scss */ 6869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _service_alumnos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/alumnos.service */ 1372);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);







let AlumnosPage = class AlumnosPage {
    constructor(alumnosService, router, AlertController) {
        this.alumnosService = alumnosService;
        this.router = router;
        this.AlertController = AlertController;
        //se reciben los arreglos dentro de la variable
        this.alumnos = [];
        this.paginaTitulo = "Alumnos";
    }
    cargarLista() {
        this.alumnosService.getAll().subscribe((res) => {
            console.log(res);
            this.alumnos = res;
        }, (err) => console.log(err));
    }
    createAlumno() {
        this.router.navigate(['add-alumnos']);
    }
    ngOnInit() {
        this.cargarLista();
    }
    ionViewWillEnter() {
        this.cargarLista();
    }
    deleteAlumno(id, nombre) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alerta = yield this.AlertController.create({
                header: 'eliminar alumno: ' + nombre,
                message: 'Confirmar eliminar',
                buttons: [
                    {
                        text: 'Eliminar',
                        handler: () => {
                            console.log(id);
                            this.alumnosService.deleteAlumno(id).subscribe((res) => { location.reload(); }, (err) => { console.log(err); });
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel'
                    },
                ]
            });
            yield alerta.present();
        });
    }
};
AlumnosPage.ctorParameters = () => [
    { type: _service_alumnos_service__WEBPACK_IMPORTED_MODULE_2__.AlumnosService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
AlumnosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-alumnos',
        template: _raw_loader_alumnos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_alumnos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AlumnosPage);



/***/ }),

/***/ 6869:
/*!*************************************************!*\
  !*** ./src/app/pages/alumnos/alumnos.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbHVtbm9zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 3244:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alumnos/alumnos.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n    <app-encabezado [pageTitle]=\"paginaTitulo\"></app-encabezado>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <ion-row>\n            <ion-col>\n                    <ion-card-content *ngFor=\"let alumno of alumnos\" >\n                        <mat-accordion class=\"mat-accordion\">\n                            <mat-expansion-panel style=\"margin-left: -15px; margin-right: -15px;\"  class=\"mat-expansion-panel\">\n                              <mat-expansion-panel-header  style=\"margin-top: 15px; margin-bottom: 7px;\" >\n                                <mat-panel-title class=\"col-6\" style=\"text-align: left;\">\n                                    <ion-avatar slot=\"start\" style=\"margin-right: 10px;\"><img style=\"height: 30px; width: 30px;\" [src]=\"alumno.imagen && alumnos.imagen.formats.small.url ? 'http://localhost:8081' + alumnos.imagen.formats.small.url: 'https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png' \" alt=\"\">\n                                    </ion-avatar>\n                                    {{alumno.nombre}} {{alumno.apellido}} \n                                </mat-panel-title>\n                                <mat-panel-description class=\"col-6\" style=\"text-align: left;\" >Rut: {{alumno.run}}-{{alumno.dv}}  </mat-panel-description>\n                              </mat-expansion-panel-header>\n                              <ion-card style=\"margin-left: -20px; margin-right: -20px;\">\n                                  <ion-card-content>\n                                    <p style=\"font-size: 20px;\">Datos del alumno</p>\n                                    <p style=\"font-size: 15px;\">Nombre: {{alumno.nombre}} {{alumno.apellido}} </p>\n                                    <p style=\"font-size: 15px;\">Rut: {{alumno.run}}-{{alumno.dv}}  </p>\n                                    <p style=\"font-size: 15px;\">Seccion: {{alumno.seccion}} </p>\n                                    <p style=\"font-size: 15px;\">Carrera: {{alumno.carrera}} </p>\n                                    <p style=\"font-size: 15px;\">Correo: {{alumno.correo}} </p>\n                                    <p style=\"font-size: 15px;\">Telefono: {{alumno.telefono}}</p>\n                                    <p style=\"font-size: 15px;\">Sede: {{alumno.sede}} </p>\n                                    <div *ngIf=\"alumno.estado === true\">\n                                        <h3>alumno</h3>\n                                    </div>\n                                    <div *ngIf=\"alumno.estado === false\">\n                                        <h3>docente</h3>\n                                      </div>\n                                  </ion-card-content>\n                                <ion-button ion-button [routerLink]=\"['/','posts', 'edit', alumno.id]\" style=\"display: block; margin: 20px; width: auto;\"  color=\"warning\">\n                                    <ion-icon style=\"margin: 5px;\" name=\"create-outline\"></ion-icon>Modificar\n                                </ion-button>\n                                <ion-button ion-button (click)=\"deleteAlumno(alumno.id, alumno.nombre)\" style=\"display: block; margin: 20px; width: auto;\"  color=\"danger\">\n                                    <ion-icon style=\"margin: 5px;\" name=\"trash\"></ion-icon>Eliminar\n                                </ion-button>\n                              </ion-card>\n                            </mat-expansion-panel>\n                            \n                          </mat-accordion>\n                    </ion-card-content>\n\n            </ion-col>\n        </ion-row>\n    </ion-card>\n\n    <!-- Boton \"Mas\" de agregar alumnos-->\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button (click)=\"createAlumno()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n\n<app-piedepagina></app-piedepagina>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_alumnos_alumnos_module_ts.js.map