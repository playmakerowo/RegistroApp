(self["webpackChunkregistroApp"] = self["webpackChunkregistroApp"] || []).push([["default-src_app_pages_alumnos_add-alumnos_add-alumnos_module_ts"],{

/***/ 3123:
/*!*************************************************************************!*\
  !*** ./src/app/pages/alumnos/add-alumnos/add-alumnos-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAlumnosPageRoutingModule": () => (/* binding */ AddAlumnosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _add_alumnos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-alumnos.page */ 631);




const routes = [
    {
        path: '',
        component: _add_alumnos_page__WEBPACK_IMPORTED_MODULE_0__.AddAlumnosPage
    }
];
let AddAlumnosPageRoutingModule = class AddAlumnosPageRoutingModule {
};
AddAlumnosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddAlumnosPageRoutingModule);



/***/ }),

/***/ 3223:
/*!*****************************************************************!*\
  !*** ./src/app/pages/alumnos/add-alumnos/add-alumnos.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAlumnosPageModule": () => (/* binding */ AddAlumnosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _add_alumnos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-alumnos-routing.module */ 3123);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/components.module */ 5642);
/* harmony import */ var _add_alumnos_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-alumnos.page */ 631);








let AddAlumnosPageModule = class AddAlumnosPageModule {
};
AddAlumnosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _add_alumnos_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddAlumnosPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule
        ],
        declarations: [_add_alumnos_page__WEBPACK_IMPORTED_MODULE_2__.AddAlumnosPage]
    })
], AddAlumnosPageModule);



/***/ }),

/***/ 631:
/*!***************************************************************!*\
  !*** ./src/app/pages/alumnos/add-alumnos/add-alumnos.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAlumnosPage": () => (/* binding */ AddAlumnosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_add_alumnos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-alumnos.page.html */ 6235);
/* harmony import */ var _add_alumnos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-alumnos.page.scss */ 9587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _service_alumnos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/alumnos.service */ 1372);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);







let AddAlumnosPage = class AddAlumnosPage {
    //this.alumnosService.createAlumno(nombre.value, apellido.value,run.value, estado.value, carrera.value,seccion.value).subscribe(
    //  (res) => console.log(res),
    //  (err) => console.log(err)
    //);
    constructor(alumnosService, router, AlertController, ActivatedRoute) {
        this.alumnosService = alumnosService;
        this.router = router;
        this.AlertController = AlertController;
        this.ActivatedRoute = ActivatedRoute;
        this.editing = false;
        this.alumno = {
            nombre: '',
            apellido: '',
            run: 0,
            estado: '',
            carrera: '',
            seccion: '',
            sede: '',
            correo: '',
            telefono: 0,
            dv: '',
        };
        this.paginaTitulo = "Agregar Alumnos";
    }
    ngOnInit() {
        this.ActivatedRoute.paramMap.subscribe((paramMap) => {
            if (paramMap.get('postId')) {
                this.editing = true;
                this.alumnosService.getPostById(paramMap.get('postId'))
                    .subscribe(res => {
                    this.alumno = res;
                });
            }
        });
    }
    updatePost() {
        this.alumnosService.updatePost(this.alumno.id, {
            nombre: this.alumno.nombre,
            apellido: this.alumno.apellido,
            run: this.alumno.run,
            estado: this.alumno.estado,
            carrera: this.alumno.carrera,
            seccion: this.alumno.seccion,
            sede: this.alumno.sede,
            correo: this.alumno.correo,
            telefono: this.alumno.telefono,
            dv: this.alumno.dv
        }).subscribe(res => {
            this.router.navigate(['/alumnos']);
        });
    }
    addAlumnos(nombre, apellido, run, estado, carrera, seccion, sede, correo, telefono, dv) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (nombre.value != "") {
                if (apellido.value != "") {
                    if (run.value != "") {
                        if (dv.value != "") {
                            if (carrera.value != "") {
                                if (seccion.value != "") {
                                    if (telefono.value != "") {
                                        if (correo.value != "") {
                                            if (sede.value != "") {
                                                const alerta = yield this.AlertController.create({
                                                    header: 'Agregar Alumno: ' + nombre.value,
                                                    message: 'Confirmar agregar',
                                                    buttons: [
                                                        {
                                                            text: 'agregar',
                                                            handler: () => {
                                                                console.log(nombre.value, apellido.value, run.value, estado.value, carrera.value, seccion.value, sede.value, correo.value, telefono.value, dv.value);
                                                                this.alumnosService.createAlumno(nombre.value, apellido.value, run.value, estado.value, carrera.value, seccion.value, sede.value, correo.value, telefono.value, dv.value).subscribe((res) => { this.router.navigate(['/alumnos']); }, (err) => console.log(err));
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
                                                    header: 'Sede en blanco',
                                                    buttons: ['Aceptar']
                                                });
                                                yield alert.present();
                                            }
                                        }
                                        else {
                                            console.log("no");
                                            const alert = yield this.AlertController.create({
                                                cssClass: 'my-custom-class',
                                                header: 'Correo en blanco',
                                                buttons: ['Aceptar']
                                            });
                                            yield alert.present();
                                        }
                                    }
                                    else {
                                        console.log("no");
                                        const alert = yield this.AlertController.create({
                                            cssClass: 'my-custom-class',
                                            header: 'Telefono en blanco',
                                            buttons: ['Aceptar']
                                        });
                                        yield alert.present();
                                    }
                                }
                                else {
                                    console.log("no");
                                    const alert = yield this.AlertController.create({
                                        cssClass: 'my-custom-class',
                                        header: 'Seccion en blanco',
                                        buttons: ['Aceptar']
                                    });
                                    yield alert.present();
                                }
                            }
                            else {
                                console.log("no");
                                const alert = yield this.AlertController.create({
                                    cssClass: 'my-custom-class',
                                    header: 'Carrera en blanco',
                                    buttons: ['Aceptar']
                                });
                                yield alert.present();
                            }
                        }
                        else {
                            console.log("no");
                            const alert = yield this.AlertController.create({
                                cssClass: 'my-custom-class',
                                header: 'DV en blanco',
                                buttons: ['Aceptar']
                            });
                            yield alert.present();
                        }
                    }
                    else {
                        console.log("no");
                        const alert = yield this.AlertController.create({
                            cssClass: 'my-custom-class',
                            header: 'RUN en blanco',
                            buttons: ['Aceptar']
                        });
                        yield alert.present();
                    }
                }
                else {
                    console.log("no");
                    const alert = yield this.AlertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Apellido en blanco',
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
AddAlumnosPage.ctorParameters = () => [
    { type: _service_alumnos_service__WEBPACK_IMPORTED_MODULE_2__.AlumnosService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
AddAlumnosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-add-alumnos',
        template: _raw_loader_add_alumnos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_alumnos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddAlumnosPage);



/***/ }),

/***/ 9587:
/*!*****************************************************************!*\
  !*** ./src/app/pages/alumnos/add-alumnos/add-alumnos.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYWx1bW5vcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 6235:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alumnos/add-alumnos/add-alumnos.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <app-encabezado [pageTitle]=\"paginaTitulo\"></app-encabezado>\n</ion-header>\n<ion-row>\n  <ion-col>\n    <ion-card>\n      <ion-card-header style=\"text-align: center\">\n        <div>\n         <ion-card-title>{{editing ? 'Modificar': 'Crear'}}</ion-card-title>\n        </div>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-input type=\"text\" placeholder=\"Nombre\" #nombre [(ngModel)]=\"alumno.nombre\" ></ion-input>\n        <ion-input type=\"text\" placeholder=\"Apellido\" #apellido [(ngModel)]=\"alumno.apellido\" ></ion-input>\n        <ion-input type=\"number\" placeholder=\"Run\" #run [(ngModel)]=\"alumno.run\">Rut:</ion-input>\n        <ion-input type=\"text\" placeholder=\"Dv\" #dv [(ngModel)]=\"alumno.dv\" ></ion-input>\n        <ion-input type=\"text\" placeholder=\"Carrera\" #carrera [(ngModel)]=\"alumno.carrera\"></ion-input>\n        <ion-input type=\"text\" placeholder=\"Seccion\" #seccion [(ngModel)]=\"alumno.seccion\"></ion-input>\n        <ion-item style=\"display: none\">\n          <ion-label>Estado</ion-label>\n          <ion-select placeholder=\"Seleccionar Estado\" #estado >\n            <ion-select-option value=\"true\" >Alumno</ion-select-option>\n            <ion-select-option value=\"false\" >Docente</ion-select-option>\n          </ion-select >\n        </ion-item>\n        <ion-input type=\"number\" placeholder=\"Telefono\" #telefono [(ngModel)]=\"alumno.telefono\" >Telefono:</ion-input>\n        <ion-input type=\"text\" placeholder=\"Correo\" #correo [(ngModel)]=\"alumno.correo\"></ion-input>\n        <ion-input type=\"text\" placeholder=\"Sede\" #sede  [(ngModel)]=\"alumno.sede\"></ion-input>\n        \n        <ion-button\n          style=\"display: block; margin: 20px; width: auto\"\n          color=\"primary\"\n          (click)=\"editing ? updatePost() : addAlumnos(nombre, apellido, run, estado, carrera, seccion, sede, correo, telefono, dv )\"\n          >{{editing ? 'Modificar': 'Crear'}}</ion-button>\n      </ion-card-content>\n    </ion-card>\n  </ion-col>\n</ion-row>\n<ion-content> </ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_alumnos_add-alumnos_add-alumnos_module_ts.js.map