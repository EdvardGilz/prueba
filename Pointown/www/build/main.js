webpackJsonp([14],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_functions_common_functions__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__registro_registro__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(storage, navCtrl, api, commonFunctions, global, loadingCtrl) {
        var _this = this;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.api = api;
        this.commonFunctions = commonFunctions;
        this.global = global;
        this.loadingCtrl = loadingCtrl;
        this.tipoUser = false;
        this.txtTipoUser = "Propietario";
        this.buttonDisabled = true;
        this.commonFunctions.checkNetwork();
        storage.get('credenciales').then(function (data) {
            if (data != null) {
                _this.global.setUser(data.iduser);
                _this.global.setTipoUser(data.tipo);
                _this.global.setUsername(data.user);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard__["a" /* DashboardPage */]);
                // console.log(data);
                // console.log(this.global.getUser());
                // this.login()
            }
        });
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Accediendo'
        });
        loading.present();
        this.api.loginApi(this.user, this.pass, this.tipoUser)
            .then(function (res) {
            _this.userData = res;
        })
            .then(function () {
            var validacion = _this.commonFunctions.entrar(_this.userData, _this.tipoUser, 0);
            if (validacion != 0) {
                _this.storage.set('credenciales', { user: _this.user, pass: _this.pass, tipo: _this.tipoUser, iduser: _this.userData.id });
                _this.global.setUsername(_this.user);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard__["a" /* DashboardPage */]);
            }
            loading.dismiss();
        });
    };
    LoginPage.prototype.verificaLlenado = function () {
        if (this.user && this.pass && this.user != "" && this.pass != "") {
            this.buttonDisabled = false;
        }
        else {
            this.buttonDisabled = true;
        }
    };
    LoginPage.prototype.tipoUserToggle = function () {
        if (this.tipoUser == false) {
            this.txtTipoUser = "Propietario";
        }
        else if (this.tipoUser == true) {
            this.txtTipoUser = "Colaborador";
        }
    };
    LoginPage.prototype.registro = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__registro_registro__["a" /* RegistroPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/edvard/Documents/Pointown/Pointown/src/pages/login/login.html"*/`<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n  \n  <div text-center style="padding:30px 20px 0px;">\n    <img style="width: auto; height: 80px;" src="assets/img/pt-logo.svg"/>\n    <p no-margin color="white">¡El pilón de tu negocio!</p>\n  </div>\n\n  <div style="padding:30px 20px 0px;">\n\n    <ion-list no-margin margin-top class="boxshadow">\n      \n      <ion-list-header no-margin text-left color="primarymedium">\n        <!--<ion-toggle [(ngModel)]="tipoUser" (ionChange)="tipoUserToggle()" (ionChange)="verificaLlenado()"></ion-toggle>\n        <ion-label color="dark">\n          {{txtTipoUser}}\n        </ion-label>-->\n      </ion-list-header>\n      \n      <ion-item no-padding padding-horizontal no-margin>\n        <ion-label floating>Username</ion-label>\n        <ion-input [(ngModel)]="user" (input)="verificaLlenado()" type="text" autocapitalize="none"></ion-input>\n      </ion-item>\n\n      <ion-item no-padding padding-horizontal no-margin>\n        <ion-label floating>Password</ion-label>\n        <ion-input [(ngModel)]="pass" (input)="verificaLlenado()" type="password"></ion-input>\n      </ion-item>\n      \n      <ion-item text-center>\n        <button ion-button block large color="primary" (click)="login()" [disabled]="buttonDisabled">Acceder</button>\n        <button no-margin ion-button small icon-right clear color="dark" *ngIf="tipoUser == false" (click)="registro()">\n          Registrar nueva cuenta <ion-icon name="person-add"></ion-icon></button>\n      </ion-item>\n\n    </ion-list>  \n\n    <ion-col text-right>\n      <small color="white">©2017 BIXNIA </small>\n    </ion-col>\n\n  </div>\n\n</ion-content>`/*ion-inline-end:"/Users/edvard/Documents/Pointown/Pointown/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_common_functions_common_functions__["a" /* CommonFunctionsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_common_functions_common_functions__["a" /* CommonFunctionsProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _f || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agregar-productos/agregar-productos.module": [
		303,
		13
	],
	"../pages/cuenta/cuenta.module": [
		304,
		12
	],
	"../pages/dashboard/dashboard.module": [
		305,
		11
	],
	"../pages/empleados/empleados.module": [
		306,
		10
	],
	"../pages/estadisticas/estadisticas.module": [
		307,
		9
	],
	"../pages/login/login.module": [
		308,
		8
	],
	"../pages/meses/meses.module": [
		309,
		7
	],
	"../pages/perfil/perfil.module": [
		310,
		6
	],
	"../pages/producto-detalle/producto-detalle.module": [
		311,
		5
	],
	"../pages/productos/productos.module": [
		312,
		4
	],
	"../pages/registro/registro.module": [
		313,
		3
	],
	"../pages/tienda-form/tienda-form.module": [
		314,
		2
	],
	"../pages/tienda-form2/tienda-form2.module": [
		316,
		1
	],
	"../pages/tienda-form3/tienda-form3.module": [
		315,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarProductosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_functions_common_functions__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_models__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AgregarProductosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AgregarProductosPage = (function () {
    function AgregarProductosPage(viewCtrl, navParams, api, commonFunctions) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.api = api;
        this.commonFunctions = commonFunctions;
        this.tipo = false;
        this.categoriasData = [];
        this.buttonDisabled = true;
        this.producto = new __WEBPACK_IMPORTED_MODULE_4__models_models__["a" /* ProductosDataModel */]();
        if (navParams.get('txt') != undefined) {
            this.nombre = navParams.get('txt');
        }
        if (navParams.get('codebar') != undefined) {
            this.codigo_B = parseInt(navParams.get('codebar'));
        }
        this.txtTipo = "Por pieza";
        api.getCategorias().then(function (data) {
            if (data.success == 1) {
                _this.categoriasData = data.data;
            }
            else {
                commonFunctions.despliegaAlerta("Error", "Error al cargar las categorias, Intentalo nuevamente");
            }
        });
    }
    AgregarProductosPage.prototype.tipoToggle = function () {
        if (this.tipo == false) {
            this.txtTipo = "Por pieza";
        }
        else if (this.tipo == true) {
            this.txtTipo = "A granel";
        }
    };
    AgregarProductosPage.prototype.verificaLlenado = function () {
        if (this.nombre && this.marca && this.presentacion && this.categoria && this.nombre != "" && this.marca != "" && this.presentacion != "" && this.categoria != "") {
            this.buttonDisabled = false;
        }
        else {
            this.buttonDisabled = true;
        }
    };
    AgregarProductosPage.prototype.guardar = function () {
        var _this = this;
        var tipo;
        if (this.tipo == false) {
            tipo = 0;
        }
        else {
            tipo = 1;
        }
        if (this.codigo_B == undefined || this.codigo_B == "") {
            this.codigo_B = "0";
        }
        this.producto.codigo = this.codigo_B;
        this.producto.nombre = this.nombre;
        this.producto.marca = this.marca;
        this.producto.presentacion = this.presentacion;
        this.producto.tipo = tipo;
        this.producto.categoria = this.categoria;
        this.api.addProducto(this.producto).then(function (data) {
            if (data.success == 1) {
                _this.commonFunctions.despliegaAlerta("Correcto", "El producto se ha agregado correctamente a la base de datos");
            }
            else {
                if (data.id == -1) {
                    _this.commonFunctions.despliegaAlerta("Error", "Ese codigo de barras ya está registrado");
                }
                else {
                    _this.commonFunctions.despliegaAlerta("Error", "Ocurrio un error, intentalo nuevamente");
                }
            }
            _this.viewCtrl.dismiss();
        });
    };
    AgregarProductosPage.prototype.regresar = function () {
        this.viewCtrl.dismiss();
    };
    AgregarProductosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agregar-productos',template:/*ion-inline-start:"/Users/edvard/Documents/Pointown/Pointown/src/pages/agregar-productos/agregar-productos.html"*/`<!--\n  Generated template for the AgregarProductosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  \n    <ion-list>\n  \n      <ion-list-header padding color="dark">\n  \n        <button ion-button clear icon-only item-left color="danger" (click)="regresar()">\n          <ion-icon name="close"></ion-icon>\n        </button>       \n  \n        <h2>Ficha de Producto</h2>\n        <p color="primarymedium">Agregar</p>\n  \n      </ion-list-header>    \n    \n      <ion-item padding-right>\n        <ion-label floating>Codigo de Barras</ion-label>\n        <ion-input [(ngModel)]="codigo_B" (input)="verificaLlenado()" type="number"></ion-input>\n      </ion-item>\n      <ion-item padding-right>\n        <ion-label floating>Nombre del producto</ion-label>\n        <ion-input [(ngModel)]="nombre" (input)="verificaLlenado()" type="text"></ion-input>\n      </ion-item>\n      <ion-item padding-right>\n        <ion-label floating>Marca</ion-label>\n        <ion-input [(ngModel)]="marca" (input)="verificaLlenado()" type="text"></ion-input>\n      </ion-item>\n      <ion-item padding-right>\n        <ion-label floating>Presentación (600ml, 1kg, 52,3g)</ion-label>\n        <ion-input [(ngModel)]="presentacion" (input)="verificaLlenado()" type="text"></ion-input>\n      </ion-item>\n      <ion-item padding-right>\n        <ion-toggle [(ngModel)]="tipo" (ionChange)="tipoToggle()" (ionChange)="verificaLlenado()"></ion-toggle>\n        <ion-label color="primary">\n          {{txtTipo}}\n        </ion-label>\n      </ion-item>\n      <ion-item padding-right>\n        <ion-label floating color="primary">Categoría</ion-label>\n        <ion-select [(ngModel)]="categoria" (ionChange)="verificaLlenado()">\n          <ion-option *ngFor="let categoriaD of categoriasData" value="{{categoriaD.id}}">{{categoriaD.descripcion}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item no-lines>\n        <button ion-button large block (click)="guardar()" [disabled]="buttonDisabled">Guardar</button>\n      </ion-item>\n      \n    </ion-list>\n    \n  </ion-content>\n  `/*ion-inline-end:"/Users/edvard/Documents/Pointown/Pointown/src/pages/agregar-productos/agregar-productos.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_common_functions_common_functions__["a" /* CommonFunctionsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_common_functions_common_functions__["a" /* CommonFunctionsProvider */]) === "function" && _d || Object])
    ], AgregarProductosPage);
    return AgregarProductosPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=agregar-productos.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuentaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_functions_common_functions__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CuentaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CuentaPage = (function () {
    function CuentaPage(navCtrl, global, alertCtrl, api, commonFunctions, loadingCtrl, barcodeScanner, admobFree) {
        this.navCtrl = navCtrl;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.commonFunctions = commonFunctions;
        this.loadingCtrl = loadingCtrl;
        this.barcodeScanner = barcodeScanner;
        this.admobFree = admobFree;
        this.productos = [];
        this.buttonDisabled = true;
        this.sumatoria = 0;
        this.pesos = ["100", "250", "500", "otro"];
        this.userId = global.getUser();
        this.admobFree.banner.show();
    }
    CuentaPage.prototype.scanner = function (tipo) {
        var _this = this;
        if (tipo == 2) {
            var prompt = this.alertCtrl.create({
                title: 'Buscar',
                message: "Busca por código o por nombre de producto",
                inputs: [
                    {
                        name: 'codigo',
                        placeholder: 'Código/Producto'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel'
                    },
                    {
                        text: 'Buscar',
                        handler: function (data) {
                            _this.barcode = data.codigo;
                            _this.buscarCodigo();
                        }
                    }
                ]
            });
            prompt.present();
        }
        else if (tipo == 1) {
            this.barcodeScanner.scan().then(function (barcodeData) {
                _this.barcode = barcodeData.text;
                if (barcodeData.format == "UPC_A") {
                    if (barcodeData.text.length > 12) {
                        _this.barcode = _this.barcode.substring(1);
                    }
                }
                _this.buscarCodigo();
            }, function (err) {
                _this.commonFunctions.despliegaAlerta("Error", "Error al leer el codigo, intentalo nuevamente");
                _this.barcode = "error";
            });
        }
    };
    CuentaPage.prototype.buscarCodigo = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Buscando...'
        });
        loading.present();
        this.api.buscarCodigo(this.barcode).then(function (data) {
            if (data.success == 1) {
                if (data.data.length > 1) {
                    var alert = _this.alertCtrl.create();
                    alert.setTitle('Productos');
                    for (var i = 0; i < data.data.length; i++) {
                        if (i == 0) {
                            _this.cheked = true;
                        }
                        else {
                            _this.cheked = false;
                        }
                        alert.addInput({
                            type: 'radio',
                            label: data.data[i].nombre + ", " + data.data[i].presentacion + ", " + data.data[i].marca,
                            value: String(i),
                            checked: _this.cheked
                        });
                    }
                    alert.addButton({
                        text: 'Ok',
                        handler: function (dataRes) {
                            data.data[dataRes].cantidad = 1;
                            if (data.data[dataRes].tipo == 1) {
                                _this.selectPeso(data.data[dataRes], 0);
                            }
                            else {
                                _this.sumar(data.data[dataRes]);
                            }
                        }
                    });
                    alert.present();
                }
                else {
                    data.data[0].cantidad = 1;
                    if (data.data[0].tipo == 1) {
                        _this.selectPeso(data.data[0], 0);
                    }
                    else {
                        _this.sumar(data.data[0]);
                    }
                }
            }
            else {
                _this.commonFunctions.despliegaAlerta("Error", "Producto no encontrado");
            }
            loading.dismiss();
        });
    };
    CuentaPage.prototype.sumar = function (data) {
        if (data.stock >= data.cantidad) {
            data.total = data.precio * data.cantidad;
            this.productos.push(data);
            this.buttonDisabled = false;
            this.sumatoria += data.total;
        }
        else {
            this.commonFunctions.despliegaAlerta("Falta de Stock", "Ya no hay stock");
        }
    };
    CuentaPage.prototype.restar = function (item) {
        this.sumatoria -= this.productos[item].total;
        this.productos.splice(item, 1);
        if (this.productos.length < 1) {
            this.buttonDisabled = true;
        }
    };
    CuentaPage.prototype.selectPeso = function (dataVal, tipo) {
        var _this = this;
        var data;
        if (tipo == 0) {
            data = dataVal;
        }
        else {
            data = this.productos[dataVal];
        }
        var extra;
        var precioPrev = 0;
        if (data.total) {
            precioPrev = data.total;
        }
        var alert = this.alertCtrl.create();
        alert.setTitle('Peso');
        for (var i = 0; i < this.pesos.length; i++) {
            if (i == 0) {
                this.cheked = true;
            }
            else {
                this.cheked = false;
            }
            if (i == this.pesos.length - 1) {
                extra = "";
            }
            else {
                extra = " gr";
            }
            alert.addInput({
                type: 'radio',
                label: String(this.pesos[i]) + extra,
                value: String(i),
                checked: this.cheked
            });
        }
        alert.addButton({
            text: 'Ok',
            handler: function (dataRes) {
                if (dataRes == _this.pesos.length - 1) {
                    _this.selectPeso2(data, tipo, precioPrev);
                }
                else {
                    data.cantidad = parseInt(_this.pesos[dataRes]);
                    data.total = data.precio * data.cantidad / 1000;
                    if (data.peso >= data.cantidad) {
                        if (tipo == 1) {
                            _this.sumatoria -= precioPrev;
                        }
                        _this.sumatoria += data.total;
                        if (tipo == 0) {
                            _this.productos.push(data);
                            _this.buttonDisabled = false;
                        }
                    }
                    else {
                        _this.sumatoria -= precioPrev;
                        data.cantidad = 0;
                        data.total = 0;
                        if (_this.sumatoria <= 0) {
                            _this.buttonDisabled = true;
                        }
                        _this.commonFunctions.despliegaAlerta("Falta de Stock", "Ya no hay stock");
                    }
                }
            }
        });
        alert.present();
    };
    CuentaPage.prototype.selectPeso2 = function (data, tipo, precioPrev) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Peso o precio',
            inputs: [
                {
                    name: 'peso',
                    placeholder: 'Peso en gramos',
                    type: 'tel'
                },
                {
                    name: 'precio',
                    placeholder: 'Precio',
                    type: 'tel'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel'
                },
                {
                    text: 'Ok',
                    handler: function (dataRes) {
                        if (dataRes.peso != "" || dataRes.precio != "") {
                            if (dataRes.peso != "") {
                                data.cantidad = parseInt(dataRes.peso);
                                data.total = data.precio * data.cantidad / 1000;
                            }
                            else if (dataRes.precio != "") {
                                data.total = parseInt(dataRes.precio);
                                data.cantidad = dataRes.precio * 1000 / data.precio;
                            }
                            if (data.peso >= data.cantidad) {
                                if (tipo == 1) {
                                    _this.sumatoria -= precioPrev;
                                }
                                _this.sumatoria += data.total;
                                if (tipo == 0) {
                                    _this.productos.push(data);
                                    _this.buttonDisabled = false;
                                }
                            }
                            else {
                                _this.sumatoria -= precioPrev;
                                data.cantidad = 0;
                                data.total = 0;
                                if (_this.sumatoria <= 0) {
                                    _this.buttonDisabled = true;
                                }
                                _this.commonFunctions.despliegaAlerta("Falta de Stock", "Ya no hay stock");
                            }
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    CuentaPage.prototype.addCantidad = function (index) {
        if (this.productos[index].stock > this.productos[index].cantidad) {
            this.productos[index].cantidad += 1;
            this.productos[index].total = this.productos[index].precio * this.productos[index].cantidad;
            this.sumatoria += this.productos[index].precio;
        }
    };
    CuentaPage.prototype.removeCantidad = function (index) {
        if (this.productos[index].cantidad > 1) {
            this.productos[index].cantidad -= 1;
            this.productos[index].total = this.productos[index].precio * this.productos[index].cantidad;
            this.sumatoria -= this.productos[index].precio;
        }
    };
    CuentaPage.prototype.save = function () {
        var _this = this;
        if (this.productos.length > 0) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Procesando compra...'
            });
            loading_1.present();
            this.global.setProductList(this.productos);
            this.api.addSells().then(function (data) {
                loading_1.dismiss();
                if (data.success == 1) {
                    _this.commonFunctions.despliegaAlerta("Procesada", "Compra procesada con exito<br>Total vendido: $" + _this.sumatoria.toFixed(2));
                    _this.navCtrl.pop();
                }
                else {
                    _this.commonFunctions.despliegaAlerta("Error", "Intentalo de nuevo");
                }
            });
        }
    };
    CuentaPage.prototype.regresar = function () {
        this.navCtrl.pop();
    };
    CuentaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cuenta',template:/*ion-inline-start:"/Users/edvard/Documents/Pointown/Pointown/src/pages/cuenta/cuenta.html"*/`<!--\n  Generated template for the CuentaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n      <ion-item no-lines text-right no-padding color="dark">\n  \n        <button ion-button clear large item-left color="danger" (click)="regresar()">\n          <ion-icon name="arrow-back"></ion-icon>\n        </button>\n        \n        <h1>\n          <span style="float:left;">Total:</span>\n          {{ sumatoria | currency:\'USD\':true:\'1.2-2\' }}\n        </h1>\n  \n      </ion-item>\n  \n  </ion-header>\n  \n  <ion-content>\n    \n    <ion-list>\n  \n      <ion-item-sliding *ngFor="let producto of productos; let i = index" (ionSwipe)="restar(i)">\n      \n      <ion-item color="white" no-padding>\n  \n        <ion-row>\n  \n          <ion-col width-25 text-center no-margin no-padding padding-left>\n            <span *ngIf="producto.tipo == 0">\n  \n              <button ion-button small icon-left block no-margin (click)="addCantidad(i)">\n                <ion-icon name="md-add"></ion-icon>{{producto.cantidad}}pz\n              </button>\n  \n              <button ion-button small icon-left block no-margin color="dark"(click)="removeCantidad(i)">\n                <ion-icon name="md-remove"></ion-icon>pz\n              </button>\n  \n            </span>\n            \n            <span *ngIf="producto.tipo == 1">\n              <button ion-button block (click)="selectPeso(i, 1)">\n                {{producto.cantidad | number: \'1.2-2\'}}g\n              </button>\n            </span>          \n          </ion-col>\n  \n          <ion-col no-magin no-padding padding-left>\n  \n              <h2 style="float:right;" color="danger"><strong>{{producto.total | currency:\'USD\':true:\'1.2-2\'}}</strong></h2>\n              <h2>{{producto.nombre}}</h2>\n              <p><span color="primary">{{producto.marca}}</span><br/>\n                <small>{{producto.precio | currency:\'USD\':true:\'1.2-2\'}} > {{producto.presentacion}}</small>\n              </p>\n  \n          </ion-col>\n  \n        </ion-row>  \n  \n      </ion-item>    \n  \n      <ion-item-options side="right">\n        <button color="danger" ion-button (click)="restar(i)">\n          <ion-icon name="trash"></ion-icon>\n          Eliminar\n        </button>\n      </ion-item-options>\n    \n    </ion-item-sliding>\n      \n    </ion-list>\n    \n    <ion-fab center bottom edge>\n      <button ion-fab color="danger" (click)="scanner(1)">\n        <ion-icon name="barcode"></ion-icon>\n      </button>\n    </ion-fab>     \n  \n  </ion-content>\n  \n  <ion-footer>\n    \n    <ion-toolbar>\n        \n        <ion-row>\n  \n          <ion-col>\n            \n            <button no-margin ion-button icon-right block small (click)="scanner(2)">            \n              Buscar <ion-icon name="search"></ion-icon>\n            </button>\n  \n          </ion-col>\n  \n          <ion-col>\n  \n            <button no-margin ion-button icon-right block small color="secondary" (click)="save()" [disabled]="buttonDisabled">            \n              ¡Venta! <ion-icon name="done-all"></ion-icon>            \n            </button>\n  \n          </ion-col>\n  \n        </ion-row>\n      \n    </ion-toolbar>\n  </ion-footer>\n  `/*ion-inline-end:"/Users/edvard/Documents/Pointown/Pointown/src/pages/cuenta/cuenta.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__providers_common_functions_common_functions__["a" /* CommonFunctionsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_common_functions_common_functions__["a" /* CommonFunctionsProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__["a" /* AdMobFree */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__["a" /* AdMobFree */]) === "function" && _h || Object])
    ], CuentaPage);
    return CuentaPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=cuenta.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_functions_common_functions__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global_global__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tienda_form_tienda_form__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__empleados_empleados__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__perfil_perfil__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__productos_productos__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__cuenta_cuenta__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__estadisticas_estadisticas__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DashboardPage = (function () {
    function DashboardPage(navCtrl, storage, api, commonFunctions, global, loadingCtrl, toast, admobFree) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.api = api;
        this.commonFunctions = commonFunctions;
        this.global = global;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.admobFree = admobFree;
        this.tiendas = [];
        this.correctoLogin = 1;
        this.userTipo = this.global.getTipoUser();
        this.username = this.global.getUsername();
        this.userId = this.global.getUser();
        if (this.userId == undefined) {
            this.correctoLogin = 0;
            this.commonFunctions.despliegaAlerta("Error de ingreso", "Por favor vuelve a logearte");
        }
    }
    DashboardPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.correctoLogin == 1) {
            // this.commonFunctions.checkNetwork();
            // AdMob.prepareInterstitial({
            //   adId: 'ca-app-pub-1057257651261369/7551627133',
            //   isTesting: false,
            //   autoShow: false
            // });
            // AdMob.createBanner({
            //   adId: 'ca-app-pub-1057257651261369/8330356336',
            //   isTesting: false,
            //   autoShow: true,
            //   position: 'TOP_CENTER'
            // });
            if (this.global.getPlataforma() == 1) {
                this.admobFree.interstitial.config({
                    id: 'ca-app-pub-1057257651261369/7551627133',
                    isTesting: false,
                    autoShow: false
                });
                this.admobFree.interstitial.prepare();
                this.admobFree.banner.config({
                    id: 'ca-app-pub-1057257651261369/8330356336',
                    isTesting: false,
                    autoShow: false,
                    bannerAtTop: true
                });
                this.admobFree.banner.prepare();
            }
            var loading_1 = this.loadingCtrl.create({
                content: 'Cargando tiendas'
            });
            loading_1.present();
            this.storage.get('tiendasData').then(function (data) {
                if (data != null) {
                    _this.tienda = data;
                    _this.global.setTiendasData(_this.tienda);
                    _this.showTiendas();
                }
                else {
                    _this.commonFunctions.checkNetwork();
                    _this.verificarTienda();
                }
            })
                .then(function () {
                loading_1.dismiss();
            });
        }
        else {
            this.salir();
        }
    };
    DashboardPage.prototype.verificarTienda = function () {
        var _this = this;
        this.api.verificaTienda().then(function (data) {
            _this.tienda = data;
        })
            .then(function () {
            if (_this.tienda.success == 1) {
                _this.global.setTiendasData(_this.tienda);
                _this.storage.set('tiendasData', _this.tienda);
            }
            else {
                _this.global.setNuevaTienda(0);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__tienda_form_tienda_form__["a" /* TiendaFormPage */]);
            }
        })
            .then(function () {
            _this.showTiendas();
        });
    };
    DashboardPage.prototype.showTiendas = function () {
        this.tiendasData = this.global.getTiendasData();
        if (this.tiendasData != undefined) {
            this.tiendas = this.tiendasData.data;
        }
    };
    DashboardPage.prototype.nuevaTienda = function () {
        this.global.setNuevaTienda(1);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__tienda_form_tienda_form__["a" /* TiendaFormPage */]);
    };
    DashboardPage.prototype.salir = function () {
        this.storage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
    };
    DashboardPage.prototype.editar = function (data) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Accediendo'
        });
        loading.present();
        this.global.setNuevaTienda(2);
        this.global.setTiendaId(data.id);
        this.api.verificaTienda2(data.id).then(function (data) {
            var tienda = data.data[0];
            _this.global.setTiendaData1(tienda.nombre, tienda.hora_a, tienda.hora_c, tienda.dias);
            _this.global.setTiendaData2(tienda.calle, tienda.num_ext, tienda.num_int, tienda.cp, tienda.colonia, tienda.municipio, tienda.pais, tienda.estado);
        })
            .then(function () {
            // AdMob.showInterstitial();
            _this.admobFree.interstitial.show();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__tienda_form_tienda_form__["a" /* TiendaFormPage */]);
            loading.dismiss();
        });
    };
    DashboardPage.prototype.agregarEmpleado = function (data) {
        // AdMob.showInterstitial();
        this.admobFree.interstitial.show();
        this.global.setTiendaId(data.id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__empleados_empleados__["a" /* EmpleadosPage */]);
    };
    DashboardPage.prototype.perfil = function () {
        // AdMob.showInterstitial();
        this.admobFree.interstitial.show();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__perfil_perfil__["a" /* PerfilPage */]);
    };
    DashboardPage.prototype.productos = function (data) {
        this.global.setTiendaId(data.id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__productos_productos__["a" /* ProductosPage */]);
    };
    DashboardPage.prototype.cuenta = function (data) {
        this.global.setTiendaId(data.id);
        if (data.sumaStock > 0) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__cuenta_cuenta__["a" /* CuentaPage */]);
        }
        else {
            this.commonFunctions.despliegaAlerta("No hay stock", "Agrega stock para usar el contador");
        }
    };
    DashboardPage.prototype.estadisticas = function (data) {
        // AdMob.showInterstitial();
        this.admobFree.interstitial.show();
        this.global.setTiendaId(data.id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__estadisticas_estadisticas__["a" /* EstadisticasPage */]);
    };
    DashboardPage.prototype.proximamente = function () {
        this.toast.show("Poximamente", '3000', 'bottom').subscribe();
    };
    ;
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/edvard/Documents/Pointown/Pointown/src/pages/dashboard/dashboard.html"*/`<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  \n    <ion-list no-lines no-padding no-margin>\n  \n      <ion-list-header color="primary">\n  \n        <ion-avatar item-left (click)="perfil()">\n          <img style="width: 40px; height: 40px;" src="assets/img/pt-user.svg"/>\n        </ion-avatar>\n  \n        <h2 (click)="perfil()">{{username}}</h2>\n        <p color="light" (click)="perfil()">Socio: PT-{{userId}}</p>\n        \n        <button ion-button icon-only small item-right margin-right color="danger" (click)="salir()">\n          <ion-icon name="log-out"></ion-icon>\n        </button>       \n        \n  \n      </ion-list-header>    \n  \n      <ion-item-divider text-wrap text-center>\n        <p *ngIf="userTipo == false">Selecciona la tienda que deseas administrar o agrega una nueva.</p>\n        <p *ngIf="userTipo == true">Mensaje para el empleado.</p>\n      </ion-item-divider>\n  \n  \n    </ion-list>\n  \n    <ion-card *ngFor="let tienda of tiendas">\n      <ion-card-content (click)="cuenta(tienda)">\n        <ion-row>\n  \n          <ion-col width-80>\n            <h1 color="black" padding-bottom>{{tienda.nombre}}</h1>\n            <p>Mes: <strong color="dark">{{tienda.sumaVentas | currency:\'USD\':true:\'1.2-2\'}}</strong></p>\n            <p>Stock: <strong color="dark">{{tienda.sumaStock}}</strong></p>\n            <p>Empleados: {{tienda.empleados}}</p>\n          </ion-col>\n          <ion-col>\n            <ion-avatar item-right>\n              <img style="width: 100px; height: 100px;" src="assets/img/pt-cash.svg"/>\n            </ion-avatar>\n          </ion-col>\n  \n        </ion-row>\n      </ion-card-content>\n      \n      <ion-row no-padding>\n        <ion-col no-padding *ngIf="userTipo == false">\n          <button no-margin ion-button full icon-only (click)="editar(tienda)">\n            <ion-icon color="dark" name="create"></ion-icon>\n          </button>\n        </ion-col>\n        <!--<ion-col no-padding *ngIf="userTipo == false">\n          <button no-margin ion-button full icon-only (click)="agregarEmpleado(tienda)">\n            <ion-icon color="light" name="person-add"></ion-icon>\n          </button>\n        </ion-col>-->\n        <ion-col no-padding *ngIf="userTipo == false" (click)="proximamente()">\n          <button no-margin ion-button full icon-only disabled="disabled" icon-left (click)="agregarEmpleado(tienda)">\n            <ion-icon color="light" name="person-add"></ion-icon>\n          </button>\n        </ion-col>\n  \n        <ion-col no-padding *ngIf="userTipo == false">\n          <button no-margin ion-button full icon-only (click)="estadisticas(tienda)">\n            <ion-icon color="secondary" name="stats"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col no-padding>\n          <button no-margin ion-button full icon-only color="dark" (click)="productos(tienda)">\n            <ion-icon color="primarymedium" name="archive"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      \n    </ion-card>\n  \n    <ion-fab center bottom (click)="proximamente()">\n      <button ion-fab (click)="nuevaTienda()" disabled="disabled" *ngIf="userTipo == false">\n        <ion-icon name="add"></ion-icon>\n      </button>    \n    </ion-fab>\n  \n  </ion-content>\n  `/*ion-inline-end:"/Users/edvard/Documents/Pointown/Pointown/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__providers_common_functions_common_functions__["a" /* CommonFunctionsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_common_functions_common_functions__["a" /* CommonFunctionsProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__providers_global_global__["a" /* GlobalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_global_global__["a" /* GlobalProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__["a" /* AdMobFree */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__["a" /* AdMobFree */]) === "function" && _h || Object])
    ], DashboardPage);
    return DashboardPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpleadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_functions_common_functions__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_models__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the EmpleadosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EmpleadosPage = (function () {
    function EmpleadosPage(navCtrl, alertCtrl, api, commonFunctions, global, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.commonFunctions = commonFunctions;
        this.global = global;
        this.loadingCtrl = loadingCtrl;
        this.differentPass = false;
        this.buttonDisabled = true;
        this.empleadosData = [];
        this.empleadoNuevo = new __WEBPACK_IMPORTED_MODULE_5__models_models__["d" /* UserDataModel */]();
        this.verificaEmpleados();
    }
    EmpleadosPage.prototype.verificaEmpleados = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Cargando datos'
        });
        loading.present();
        this.api.verificaEmpleados().then(function (data) {
            _this.empleadosData = data.data;
            _this.empleados = data.success;
            loading.dismiss();
        });
    };
    EmpleadosPage.prototype.verificaLlenado = function () {
        if (this.pass == this.pass2) {
            this.differentPass = false;
        }
        else {
            this.differentPass = true;
        }
        if (this.user && this.pass && this.pass2 && this.mail && this.user != "" && this.pass != "" && this.pass2 != "" && this.mail != "" && this.pass == this.pass2) {
            this.buttonDisabled = false;
        }
        else {
            this.buttonDisabled = true;
        }
    };
    EmpleadosPage.prototype.guardar = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Guardando...'
        });
        loading.present();
        this.empleadoNuevo.mail = this.mail;
        this.empleadoNuevo.username = this.user;
        this.empleadoNuevo.password = this.pass;
        this.api.nuevoEmpleado(this.empleadoNuevo).then(function (data) {
            if (data.success == 0) {
                if (data.id == 0) {
                    _this.commonFunctions.despliegaAlerta("Error", "Error al incertar el usuario, intentalo nuevamente");
                }
                else if (data.id == -1) {
                    _this.commonFunctions.despliegaAlerta("Error", "Ese nombre de usuario ya existe");
                }
            }
            else {
                _this.mail = "";
                _this.user = "";
                _this.pass = "";
                _this.pass2 = "";
                _this.verificaLlenado();
                _this.verificaEmpleados();
            }
            loading.dismiss();
        });
    };
    EmpleadosPage.prototype.eliminarEmpleado = function (data) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Estas a punto de eliminar al usuario',
            message: '¿Estas seguro que quieres eliminarlo?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel'
                },
                {
                    text: 'Si, borrar',
                    handler: function () {
                        _this.borrar(data);
                    }
                }
            ]
        });
        confirm.present();
    };
    EmpleadosPage.prototype.borrar = function (data) {
        var _this = this;
        this.api.eliminarEmpleado(data.idEmpleado).then(function (data) {
            if (data.success == 1) {
                _this.verificaEmpleados();
            }
            else {
                _this.commonFunctions.despliegaAlerta("Error", "Error al eliminar el usuario, intentalo nuevamente");
            }
        });
    };
    EmpleadosPage.prototype.regresar = function () {
        this.navCtrl.pop();
    };
    EmpleadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-empleados',template:/*ion-inline-start:"/Users/edvard/Documents/Pointown/Pointown/src/pages/empleados/empleados.html"*/`<!--\n  Generated template for the EmpleadosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  \n    <ion-list>\n      \n      <ion-list-header color="primary" text-wrap>\n  \n        <ion-avatar item-left>\n          <img style="width: 40px; height: 40px;" src="assets/img/pt-colab.svg"/>\n        </ion-avatar>\n  \n        <h2>Empleados y <br />colaboradores</h2>\n        \n        <button item-right ion-button icon-only margin-right clear color="light" (click)="regresar()">\n          <ion-icon name="close"></ion-icon>\n        </button>       \n  \n      </ion-list-header>    \n  \n      <ion-item-divider text-wrap padding-right no-lines text-center>\n        <p>Solo llena estos campos, Pointown® le notificará a tu colaborador.</p>\n      </ion-item-divider>\n      \n  \n      <ion-item padding-right>\n        <ion-label floating>Correo electronico</ion-label>\n        <ion-input [(ngModel)]="mail" (input)="verificaLlenado()" type="email"></ion-input>\n      </ion-item>\n      <ion-item padding-right>\n        <ion-label floating>Nombre de usuario</ion-label>\n        <ion-input [(ngModel)]="user" (input)="verificaLlenado()" type="text"></ion-input>\n      </ion-item>\n      <ion-item padding-right>\n        <ion-label floating>Contraseña</ion-label>\n        <ion-input [(ngModel)]="pass" (input)="verificaLlenado()" type="password"></ion-input>\n      </ion-item>\n      <ion-item padding-right>\n        <ion-label floating>Verificar Contraseña</ion-label>\n        <ion-input [(ngModel)]="pass2" (input)="verificaLlenado()" type="password"></ion-input>\n      </ion-item>\n      <ion-item text-center>\n        <ion-badge margin-bottom color="danger" *ngIf="differentPass == true">Contraseñas diferentes</ion-badge>\n        <button ion-button large block icon-right color="secondary" (click)="guardar()" [disabled]="buttonDisabled">Guardar</button>\n      </ion-item>\n      \n      <ion-item-divider *ngIf="empleados == 1">\n          Tu lista de empleados\n      </ion-item-divider>\n  \n      <ion-item *ngFor="let empleado of empleadosData" (click)="eliminarEmpleado(empleado)">\n        {{empleado.username}}\n        <ion-icon color="danger" name="close-circle" item-right></ion-icon>\n      </ion-item>\n  \n    </ion-list>\n  \n  \n  </ion-content>\n  `/*ion-inline-end:"/Users/edvard/Documents/Pointown/Pointown/src/pages/empleados/empleados.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_common_functions_common_functions__["a" /* CommonFunctionsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_common_functions_common_functions__["a" /* CommonFunctionsProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _f || Object])
    ], EmpleadosPage);
    return EmpleadosPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=empleados.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstadisticasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_models__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__meses_meses__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the EstadisticasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EstadisticasPage = (function () {
    function EstadisticasPage(navCtrl, api, modalCtrl, loadingCtrl, toast, admobFree) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.admobFree = admobFree;
        this.estadisticasMes = new __WEBPACK_IMPORTED_MODULE_5__models_models__["b" /* StatsDataModel */]();
        this.estadisticasDia = [];
        this.vacio = 1;
        this.btnDisabled = true;
        this.fecha = "actual";
        this.obtenerEstadisticas(this.fecha);
        // InAppPurchase.getProducts(['pruebasuscripcion1']).then((products) => {
        //   console.log(products);
        // })
        // .catch((err) => {
        //   console.log(err);
        // });
        // AdMob.createBanner({
        //   adId: 'ca-app-pub-1057257651261369/8330356336',
        //   isTesting: false,
        //   autoShow: true,
        //   position: 'TOP_CENTER'
        // });
        this.admobFree.banner.show();
    }
    EstadisticasPage.prototype.obtenerEstadisticas = function (fecha) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Cargando Estadisticas'
        });
        loading.present();
        this.api.getStats(true, fecha).then(function (data) {
            _this.estadisticasMes = data.data[0];
        });
        this.api.getStats(false, fecha).then(function (data) {
            _this.estadisticasDia = data.data;
            for (var i in _this.estadisticasDia) {
                if (_this.estadisticasDia[i].totalMes > 0 || _this.estadisticasDia[i].totalVentas > 0 || _this.estadisticasDia[i].totalInvertido > 0) {
                    _this.vacio = 0;
                    //this.btnDisabled = false;
                }
            }
            loading.dismiss();
        });
    };
    EstadisticasPage.prototype.regresar = function () {
        this.navCtrl.pop();
    };
    EstadisticasPage.prototype.seleccionarMes = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__meses_meses__["a" /* MesesPage */], { fecha: this.estadisticasMes.fechaVal });
        modal.onDidDismiss(function (data) {
            _this.fecha = data;
            _this.obtenerEstadisticas(_this.fecha);
        });
        modal.present();
    };
    EstadisticasPage.prototype.enviarInforme = function () {
        var _this = this;
        this.api.enviarInforme(this.fecha).then(function (data) {
            if (data.success == 1) {
                _this.toast.show("Se envió el informe a tu correo", '5000', 'bottom').subscribe();
            }
            else {
                _this.toast.show("Ocurrió un error, intentalo nuevamente", '5000', 'bottom').subscribe();
            }
        });
    };
    EstadisticasPage.prototype.proximamente = function () {
        this.toast.show("Poximamente", '3000', 'bottom').subscribe();
    };
    EstadisticasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estadisticas',template:/*ion-inline-start:"/Users/edvard/Documents/Pointown/Pointown/src/pages/estadisticas/estadisticas.html"*/`<!--\n  Generated template for the EstadisticasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <ion-toolbar padding color="primary">\n    \n    \n    <ion-buttons left>\n      <button ion-button clear item-left color="danger" (click)="regresar()">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n    </ion-buttons>\n\n    <ion-buttons left>\n      <ion-avatar>\n        <img style="width: 40px; height: 40px;" src="assets/img/pt-stats.svg"/>\n      </ion-avatar>\n    </ion-buttons>\n\n    <ion-title>\n      Estatus\n    </ion-title>\n    \n    <ion-buttons right>\n      <button item-right ion-button no-margin icon-right color="light" (click)="seleccionarMes()">\n        Mes <ion-icon name="arrow-down"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <!-- El resumen del mes-->\n  <ion-item-divider color="dark">\n    <h2>Resúmen: {{estadisticasMes.fecha}}</h2>\n  </ion-item-divider>\n  <ion-item text-wrap color="white">\n    <span color="primary">Total:</span> <span item-right>{{estadisticasMes.totalMes | currency:\'USD\':true:\'1.2-2\'}}</span> \n    <br /><small>Vendido en el mes</small>\n  </ion-item>\n  <ion-item text-wrap color="white">\n    <span color="primary">Invertido:</span> <span item-right>{{estadisticasMes.totalInvertido | currency:\'USD\':true:\'1.2-2\'}}</span>\n    <br /><small>Invertido en abastecer</small>\n  </ion-item>\n  <ion-item text-wrap color="white">\n    <span color="primary">Transacciones:</span><span item-right>{{estadisticasMes.totalVentas}}</span>\n    <br /><small>Ventas realizadas</small>\n  </ion-item>\n  <ion-item text-wrap color="white">\n    <span color="primary">En stock:</span><span item-right>{{estadisticasMes.totalStock}}</span>\n    <br /><small>Total de productos vendidos por transacción, restados al stock</small>\n  </ion-item>\n  <ion-item text-wrap color="white">\n    <span color="primary">Productos vendidos:</span><span item-right>{{estadisticasMes.totalVendidos}}</span>\n    <br /><small>Total de productos vendidos (sin contar a granel)</small>\n  </ion-item>\n  <ion-item text-wrap color="white">\n    <span color="primary">Producto más vendido:</span>\n    <br /><small>{{estadisticasMes.masVendido}}</small>\n  </ion-item>\n\n  <!-- La lista de transacciones de ese mes-->\n  <ion-item-divider color="dark">\n    <h2> Resumen por días</h2>\n  </ion-item-divider>\n\n  <span *ngFor="let estadistica of estadisticasDia">\n    <ion-card  *ngIf="estadistica.totalMes > 0 || estadistica.totalVentas > 0 || estadistica.totalInvertido > 0">\n      <ion-card-header color="dark">\n        <h2>{{estadistica.fecha}}</h2>\n      </ion-card-header>\n      <ion-card-content>\n        <p>Total: {{estadistica.totalMes | currency:\'USD\':true:\'1.2-2\'}}</p>\n        <p>Transacciones: {{estadistica.totalVentas}}</p>\n        <p>Invertido: {{estadistica.totalInvertido | currency:\'USD\':true:\'1.2-2\'}}</p>\n      </ion-card-content>\n    </ion-card>\n  </span>\n\n  <ion-card *ngIf="vacio == 1">\n    <ion-card-header>\n      Aun no haz realizado ninguna operacion\n    </ion-card-header>\n  </ion-card>\n\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar>\n    <div (click)="proximamente()">\n      <button item-right ion-button icon-right (click)="enviarInforme()" [disabled]="btnDisabled">\n        Enviar informe <ion-icon name="document"></ion-icon>\n      </button>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n`/*ion-inline-end:"/Users/edvard/Documents/Pointown/Pointown/src/pages/estadisticas/estadisticas.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__["a" /* Toast */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__["a" /* Toast */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__["a" /* AdMobFree */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__["a" /* AdMobFree */]) === "function" && _f || Object])
    ], EstadisticasPage);
    return EstadisticasPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=estadisticas.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MesesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MesesPage = (function () {
    function MesesPage(viewCtrl, api, params) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.api = api;
        this.params = params;
        this.fechas = [];
        this.sinData = false;
        this.api.verificaMeses().then(function (data) {
            if (data.success == 0) {
                _this.sinData = true;
            }
            else {
                _this.sinData = false;
                _this.fechas = data.data;
                for (var i = 0; i < _this.fechas.length; i++) {
                    if (_this.fechas[i].fechaVal == params.get('fecha')) {
                        _this.fechas[i].checked = true;
                    }
                    else {
                        _this.fechas[i].checked = false;
                    }
                }
            }
        });
    }
    MesesPage.prototype.seleccionar = function () {
        this.viewCtrl.dismiss(this.fechasSelect);
    };
    MesesPage.prototype.cancelar = function () {
        this.viewCtrl.dismiss(this.params.get('fecha'));
    };
    MesesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-meses',template:/*ion-inline-start:"/Users/edvard/Documents/Pointown/Pointown/src/pages/meses/meses.html"*/`<!--\n  Generated template for the MesesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  \n    <ion-list radio-group [(ngModel)]="fechasSelect">\n  \n      <ion-list-header padding-vertical color="dark">     \n  \n        <h2>Selector de Mes</h2>\n  \n        <span item-right>\n          <button ion-button icon-only no-margin clear color="light" (click)="cancelar()">\n            <ion-icon name="close"></ion-icon>\n          </button>       \n        </span>\n  \n      </ion-list-header>\n      \n      <ion-item *ngFor="let fecha of fechas">\n        <ion-label>{{fecha.fecha}}</ion-label>\n        <ion-radio value="{{fecha.fechaVal}}" checked="{{fecha.checked}}" (ionSelect)="seleccionar()"></ion-radio>\n      </ion-item>\n    </ion-list>\n  \n    <ion-card *ngIf="sinData == true">\n      <ion-card-header>\n        Sin Operaciones\n      </ion-card-header>\n    </ion-card>\n  \n  </ion-content>\n  `/*ion-inline-end:"/Users/edvard/Documents/Pointown/Pointown/src/pages/meses/meses.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object])
    ], MesesPage);
    return MesesPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=meses.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_functions_common_functions__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_models__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PerfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PerfilPage = (function () {
    function PerfilPage(navCtrl, alertCtrl, loadingCtrl, api, commonFunctions, admobFree) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.commonFunctions = commonFunctions;
        this.admobFree = admobFree;
        this.differentPass = false;
        this.buttonDisabled = true;
        this.userData = new __WEBPACK_IMPORTED_MODULE_5__models_models__["d" /* UserDataModel */]();
        api.verificaUserData().then(function (data) {
            var datos = data.data[0];
            _this.nombre = datos.nombre;
            _this.ap_p = datos.ap_p;
            _this.ap_m = datos.ap_m;
            _this.tel = datos.tel;
            _this.mail = datos.mail;
            _this.user = datos.username;
        });
        // AdMob.createBanner({
        //   adId: 'ca-app-pub-1057257651261369/8330356336',
        //   isTesting: false,
        //   autoShow: true,
        //   position: 'TOP_CENTER'
        // });
        this.admobFree.banner.show();
    }
    PerfilPage.prototype.activarBtn = function () {
        if (this.pass == this.pass2) {
            this.differentPass = false;
        }
        else {
            this.differentPass = true;
        }
        if (this.pass == this.pass2 && this.nombre != "" && this.ap_p != "" && this.ap_m != "" && this.tel != "" && this.mail != "") {
            this.buttonDisabled = false;
        }
        else {
            this.buttonDisabled = true;
        }
    };
    PerfilPage.prototype.guardar = function () {
        var _this = this;
        this.userData.nombre = this.nombre;
        this.userData.ap_p = this.ap_p;
        this.userData.ap_m = this.ap_m;
        this.userData.tel = this.tel;
        this.userData.mail = this.mail;
        this.userData.username = this.user;
        this.userData.password = this.pass;
        this.userData.passwordPrev = null;
        if (this.userData.password != undefined && this.userData.password != "") {
            var prompt = this.alertCtrl.create({
                title: 'Confirmar acción',
                message: 'Ingresa tu contraseña anterior',
                inputs: [
                    {
                        name: 'pass',
                        type: 'password',
                        placeholder: 'Contraseña anterior'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel'
                    },
                    {
                        text: 'Aceptar',
                        handler: function (data) {
                            _this.userData.passwordPrev = data.pass;
                            _this.guardando();
                        }
                    }
                ]
            });
            prompt.present();
        }
        else {
            this.guardando();
        }
    };
    PerfilPage.prototype.guardando = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Guardando'
        });
        loading.present();
        this.api.editarUserData(this.userData).then(function (data) {
            if (data.id == -1) {
                _this.commonFunctions.despliegaAlerta("Error", "Contraseña incorrecta");
            }
            else {
                _this.commonFunctions.despliegaAlerta("Correcto", "Datos guardados correctamente");
            }
            _this.pass = null;
            _this.pass2 = null;
            _this.buttonDisabled = true;
            loading.dismiss();
        });
    };
    PerfilPage.prototype.regresar = function () {
        this.navCtrl.pop();
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"/Users/edvard/Documents/Pointown/Pointown/src/pages/perfil/perfil.html"*/`<!--\n  Generated template for the PerfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  \n    <ion-list>\n  \n      <ion-list-header color="primary">\n  \n        <ion-avatar item-left>\n          <img style="width: 40px; height: 40px;" src="assets/img/pt-user.svg"/>\n        </ion-avatar>\n  \n        <h2>Mis datos</h2>\n  \n        <button ion-button icon-only item-right clear color="light" (click)="regresar()">\n          <ion-icon name="close"></ion-icon>\n        </button>       \n  \n  \n      </ion-list-header>\n  \n      \n      <ion-item padding-right>\n        <ion-label floating>Nombre</ion-label>\n        <ion-input [(ngModel)]="nombre" (input)="activarBtn()" type="text"></ion-input>\n      </ion-item>\n      <ion-item padding-right>\n        <ion-label floating>Apellido Paterno</ion-label>\n        <ion-input [(ngModel)]="ap_p" (input)="activarBtn()" type="text"></ion-input>\n      </ion-item>\n      <ion-item padding-right>\n        <ion-label floating>Apellido Materno</ion-label>\n        <ion-input [(ngModel)]="ap_m" (input)="activarBtn()" type="text"></ion-input>\n      </ion-item>\n      <ion-item padding-right>\n        <ion-label floating>Teléfono</ion-label>\n        <ion-input [(ngModel)]="tel" (input)="activarBtn()" type="tel"></ion-input>\n      </ion-item>\n      \n      <ion-item-divider>\n          Datos de suscripcion\n      </ion-item-divider>\n      \n      <ion-item padding-right>\n        <ion-label floating>Correo electronico</ion-label>\n        <ion-input [(ngModel)]="mail" (input)="activarBtn()" type="email"></ion-input>\n      </ion-item>\n      <ion-item padding-right>\n        <ion-label floating>Nombre de usuario</ion-label>\n        <ion-input [(ngModel)]="user" [disabled]="true" type="text"></ion-input>\n      </ion-item>\n      <ion-item padding-right>\n        <ion-label floating>Cambiar Contraseña</ion-label>\n        <ion-input [(ngModel)]="pass" (input)="activarBtn()" type="password"></ion-input>\n      </ion-item>\n      <ion-item padding-right>\n        <ion-label floating>Confirmar Contraseña</ion-label>\n        <ion-input [(ngModel)]="pass2" (input)="activarBtn()" type="password"></ion-input>\n      </ion-item>\n      <ion-item text-center>\n        <ion-badge margin-top color="danger" *ngIf="differentPass == true">Contraseñas diferentes</ion-badge>\n        <button ion-button large block icon-right color="secondary" (click)="guardar()" [disabled]="buttonDisabled">Guardar\n            <ion-icon name="checkmark-circle"></ion-icon>\n        </button>\n      </ion-item>\n          \n    </ion-list>\n    \n  \n  </ion-content>\n  `/*ion-inline-end:"/Users/edvard/Documents/Pointown/Pointown/src/pages/perfil/perfil.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_common_functions_common_functions__["a" /* CommonFunctionsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_common_functions_common_functions__["a" /* CommonFunctionsProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__["a" /* AdMobFree */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__["a" /* AdMobFree */]) === "function" && _f || Object])
    ], PerfilPage);
    return PerfilPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoDetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_functions_common_functions__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProductoDetallePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProductoDetallePage = (function () {
    function ProductoDetallePage(navParams, viewCtrl, api, commonFunctions, loadingCtrl, alertCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.api = api;
        this.commonFunctions = commonFunctions;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.id_pv = 0;
        this.cantidad = 0;
        this.precioCompra = 0;
        this.buttonDisabled = true;
        this.prodData = navParams.get('data');
        this.verificarStock();
    }
    ProductoDetallePage.prototype.verificarStock = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Buscando...'
        });
        loading.present();
        this.api.verificarStock(this.prodData.codigo).then(function (data) {
            _this.productoTipo = _this.prodData.tipo;
            if (_this.productoTipo == 0) {
                _this.txtPrecio = "Precio de venta por unidad";
                _this.txtStock = "Unidades";
            }
            else if (_this.productoTipo == 1) {
                _this.txtPrecio = "Precio de venta por kilo";
                _this.txtStock = "Peso en gramos";
            }
            _this.codigo = _this.prodData.codigo;
            _this.nombre = _this.prodData.nombre;
            if (data.data.length > 0) {
                _this.precio = data.data[0].precio;
                _this.id_pv = data.data[0].id_pv;
                if (data.data[0].tipo == 1) {
                    _this.stock = data.data[0].peso;
                }
                else {
                    _this.stock = data.data[0].stock;
                }
            }
            else {
                _this.stock = 0;
            }
            loading.dismiss();
        });
    };
    ProductoDetallePage.prototype.verificaLlenado = function () {
        if (this.precio && this.precio != "") {
            this.buttonDisabled = false;
        }
        else {
            this.buttonDisabled = true;
        }
    };
    ProductoDetallePage.prototype.guardar = function () {
        var _this = this;
        if (this.precio == undefined) {
            this.precio = 0;
        }
        var loading = this.loadingCtrl.create({
            content: 'Actualizando stock...'
        });
        loading.present();
        this.api.guardarStock(this.precio, this.stock, this.codigo, this.id_pv, this.productoTipo, this.cantidad, this.precioCompra)
            .then(function (data) {
            if (data.success == 1) {
                _this.commonFunctions.despliegaAlerta("Correcto!!", "Producto actualizado");
                _this.buttonDisabled = true;
            }
            else {
                if (data.id == -1) {
                    _this.commonFunctions.despliegaAlerta("Error", "Producto no actualizado, vuelve a intentarlo");
                    _this.buttonDisabled = true;
                }
                else if (data.id == -2) {
                    _this.commonFunctions.despliegaAlerta("Error", "Ocurrió un error al actualizar el producto, vuelve a intentrlo");
                    _this.buttonDisabled = true;
                }
                else {
                    _this.commonFunctions.despliegaAlerta("Error", "Ocurrió un error al actualizar el producto, vuelve a intentrlo");
                    _this.buttonDisabled = true;
                }
            }
            loading.dismiss();
            _this.cantidad = 0;
            _this.precioCompra = 0;
            _this.verificarStock();
        });
    };
    ProductoDetallePage.prototype.regresar = function () {
        this.viewCtrl.dismiss();
    };
    ProductoDetallePage.prototype.agregarStock = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Abastecer Stock',
            inputs: [
                {
                    name: 'cantidad',
                    placeholder: this.txtStock,
                    type: 'number'
                },
                {
                    name: 'precio',
                    placeholder: 'Precio de compra',
                    type: 'number'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel'
                },
                {
                    text: 'Guardar',
                    handler: function (data) {
                        if (data.cantidad != "" && data.precio != "") {
                            _this.cantidad = parseFloat(data.cantidad);
                            _this.precioCompra = parseFloat(data.precio);
                            _this.guardar();
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    ProductoDetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-producto-detalle',template:/*ion-inline-start:"/Users/edvard/Documents/Pointown/Pointown/src/pages/producto-detalle/producto-detalle.html"*/`<!--\n  Generated template for the ProductoDetallePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  \n    <ion-list>\n  \n      <ion-list-header padding-vertical color="dark">\n  \n        <button ion-button clear icon-only item-left color="danger" (click)="regresar()">\n          <ion-icon name="close"></ion-icon>\n        </button>       \n  \n        <h2>Ficha de Producto</h2>\n        <p color="primarymedium">Detalle</p>\n  \n      </ion-list-header>\n      \n      <ion-item padding-right>\n        <ion-label floating>Código</ion-label>\n        <ion-input type="text" [(ngModel)]="codigo" [disabled]="true"></ion-input>\n      </ion-item>\n      <ion-item padding-right>\n        <ion-label floating>Nombre</ion-label>\n        <ion-input type="text" [(ngModel)]="nombre" [disabled]="true"></ion-input>\n      </ion-item>\n      <ion-item padding-right>\n        <ion-label floating>{{txtStock}}</ion-label>\n        <ion-input type="text" [(ngModel)]="stock" [disabled]="true"></ion-input>\n      </ion-item>\n      <ion-item no-lines>\n        <button ion-button large block (click)="agregarStock()">Reabastecer stock</button>\n      </ion-item>\n  \n      <ion-item padding-right color="white">\n        <ion-label floating>{{txtPrecio}}</ion-label>\n        <ion-input type="number" [(ngModel)]="precio" (input)="verificaLlenado()"></ion-input>\n      </ion-item>     \n  \n      <ion-item no-lines color="white">\n        <button ion-button large block color="secondary" (click)="guardar()" [disabled]="buttonDisabled">Actualizar precio</button>\n      </ion-item>\n  \n  \n    </ion-list>\n  \n  </ion-content>\n  `/*ion-inline-end:"/Users/edvard/Documents/Pointown/Pointown/src/pages/producto-detalle/producto-detalle.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_common_functions_common_functions__["a" /* CommonFunctionsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_common_functions_common_functions__["a" /* CommonFunctionsProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object])
    ], ProductoDetallePage);
    return ProductoDetallePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=producto-detalle.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_functions_common_functions__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global_global__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__producto_detalle_producto_detalle__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agregar_productos_agregar_productos__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the ProductosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProductosPage = (function () {
    function ProductosPage(navCtrl, modalCtrl, api, commonFunctions, alertCtrl, loadingCtrl, barcodeScanner, admobFree, global, storage) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.commonFunctions = commonFunctions;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.barcodeScanner = barcodeScanner;
        this.admobFree = admobFree;
        this.global = global;
        this.storage = storage;
        this.productosAll = [];
        this.productosAllBK = [];
        // AdMob.createBanner({
        //   adId: 'ca-app-pub-1057257651261369/8330356336',
        //   isTesting: false,
        //   autoShow: true,
        //   position: 'TOP_CENTER'
        // });
        if (global.getPlataforma() == 1) {
            this.admobFree.banner.show();
        }
    }
    ProductosPage.prototype.ionViewWillEnter = function () {
        this.limpiarSearchbar();
    };
    ProductosPage.prototype.getAllProducts = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Cargando datos'
        });
        loading.present();
        this.storage.get('productosData').then(function (data) {
            if (data != null) {
                _this.colorearStock(data);
                _this.productosAll = data.data;
                _this.productosAllBK = data.data;
                loading.dismiss();
            }
            else {
                _this.api.productosTodos().then(function (data) {
                    _this.storage.set('productosData', data);
                    _this.colorearStock(data);
                    _this.productosAll = data.data;
                    _this.productosAllBK = data.data;
                    loading.dismiss();
                });
            }
        });
    };
    ProductosPage.prototype.colorearStock = function (data) {
        for (var i in data.data) {
            if (data.data[i].tipo == 0) {
                if (data.data[i].stock < 5) {
                    data.data[i].color = "danger";
                }
                else {
                    data.data[i].color = "secondary";
                }
            }
            else {
                if (data.data[i].stock < 250) {
                    data.data[i].color = "danger";
                }
                else {
                    data.data[i].color = "secondary";
                }
            }
        }
    };
    ProductosPage.prototype.scanner = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.barcode = barcodeData.text;
            if (barcodeData.format == "UPC_A") {
                if (barcodeData.text.length > 12) {
                    _this.barcode = _this.barcode.substring(1);
                }
            }
            _this.searchProduct(_this.barcode, 1);
        }, function (err) {
            _this.commonFunctions.despliegaAlerta("Error", "Error al leer el codigo, intentalo nuevamente");
        });
    };
    ProductosPage.prototype.searchProduct = function (ev, tipo) {
        var _this = this;
        if (tipo == 0) {
            var val = ev.target.value;
            this.productosAll = this.productosAllBK;
            if (val && val.trim() != '') {
                this.productosAll = this.productosAll.filter(function (item) {
                    console.log(item.nombre);
                    return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.marca.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
            }
        }
        else if (tipo == 1) {
            this.productosAll = this.productosAllBK;
            var val = ev;
            if (val && val.trim() != '') {
                this.productosAll = this.productosAll.filter(function (item) {
                    return (item.codigo.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
            }
        }
        if (this.productosAll.length <= 0) {
            var alert = this.alertCtrl.create({
                title: "Producto no encontrado",
                subTitle: "Quieres agregar el producto??",
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: function (data) {
                            _this.limpiarSearchbar();
                        }
                    },
                    {
                        text: 'Aceptar',
                        handler: function (data) {
                            var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__agregar_productos_agregar_productos__["a" /* AgregarProductosPage */], { txt: _this.txtSearchBar, codebar: _this.barcode });
                            modal.onDidDismiss(function () {
                                _this.limpiarSearchbar();
                            });
                            modal.present();
                        }
                    }
                ]
            });
            alert.present();
        }
    };
    ProductosPage.prototype.limpiarSearchbar = function () {
        this.getAllProducts();
        this.txtSearchBar = "";
    };
    ProductosPage.prototype.verificarStock = function (data) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__producto_detalle_producto_detalle__["a" /* ProductoDetallePage */], { data: data });
        modal.onDidDismiss(function () {
            _this.limpiarSearchbar();
        });
        modal.present();
    };
    ProductosPage.prototype.regresar = function () {
        this.navCtrl.pop();
    };
    ProductosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productos',template:/*ion-inline-start:"/Users/edvard/Documents/Pointown/Pointown/src/pages/productos/productos.html"*/`<!--\n  Generated template for the ProductosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  \n    <ion-list>\n  \n      <ion-list-header color="dark">\n  \n        <button ion-button clear item-left color="danger" (click)="regresar()">\n          <ion-icon name="arrow-back"></ion-icon>\n        </button>       \n  \n        <h2>Administración</h2>\n        <p color="primarymedium">Stock</p>\n  \n      </ion-list-header>    \n  \n      <ion-item no-padding text-wrapp *ngFor="let producto of productosAll" (click)="verificarStock(producto)">        \n  \n          <div padding-left>\n            <ion-badge style="float:right;" color="{{producto.color}}">{{producto.stock}}</ion-badge>\n            <h2 no-margin>{{producto.nombre}}</h2> \n            <p color="primary">{{producto.marca}}</p>\n          </div>\n          <div padding-left>\n            <p><ion-icon name="eye"></ion-icon> {{producto.presentacion}} <span style="float:right;">{{producto.codigo}}</span></p>          \n          </div>\n  \n      </ion-item>\n  \n    </ion-list>\n  \n  </ion-content>\n  \n  <ion-footer>\n    <ion-toolbar>\n  \n      <ion-row>\n  \n        <ion-col width-75 no-padding>\n          <ion-searchbar [(ngModel)]="txtSearchBar" (ionInput)="searchProduct($event, 0)"></ion-searchbar>\n        </ion-col>\n  \n        <ion-col>\n          <button ion-button small block color="danger" (click)="scanner()">\n            <ion-icon name="barcode"></ion-icon>\n          </button>\n        </ion-col>\n        \n      </ion-row>\n  \n    </ion-toolbar>\n  </ion-footer>\n  `/*ion-inline-end:"/Users/edvard/Documents/Pointown/Pointown/src/pages/productos/productos.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__providers_common_functions_common_functions__["a" /* CommonFunctionsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_common_functions_common_functions__["a" /* CommonFunctionsProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__["a" /* AdMobFree */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__["a" /* AdMobFree */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__providers_global_global__["a" /* GlobalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_global_global__["a" /* GlobalProvider */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _k || Object])
    ], ProductosPage);
    return ProductosPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=productos.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_functions_common_functions__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_models__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tienda_form_tienda_form__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the RegistroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RegistroPage = (function () {
    function RegistroPage(navCtrl, api, commonFunctions, global, storage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.commonFunctions = commonFunctions;
        this.global = global;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.differentPass = false;
        this.buttonDisabled = true;
        this.userData = new __WEBPACK_IMPORTED_MODULE_6__models_models__["d" /* UserDataModel */]();
    }
    RegistroPage.prototype.verificaLlenado = function () {
        if (this.pass == this.pass2) {
            this.differentPass = false;
        }
        else {
            this.differentPass = true;
        }
        if (this.user && this.pass && this.pass2 && this.mail && this.user != "" && this.pass != "" && this.pass2 != "" && this.mail != "" && this.pass == this.pass2) {
            this.buttonDisabled = false;
        }
        else {
            this.buttonDisabled = true;
        }
    };
    RegistroPage.prototype.registro = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Guardando...'
        });
        loading.present();
        this.userData.username = this.user;
        this.userData.password = this.pass;
        this.userData.mail = this.mail;
        this.api.registroD(this.userData).then(function (res) {
            _this.userDataRes = res;
        })
            .then(function () {
            var validacion = _this.commonFunctions.entrar(_this.userDataRes, false, 1);
            if (validacion != 0) {
                _this.storage.set('credenciales', { user: _this.user, pass: _this.pass, tipo: false });
                _this.global.setUsername(_this.user);
                _this.global.setNuevaTienda(0);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__tienda_form_tienda_form__["a" /* TiendaFormPage */]);
            }
            loading.dismiss();
        });
    };
    RegistroPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
    };
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registro',template:/*ion-inline-start:"/Users/edvard/Documents/Pointown/Pointown/src/pages/registro/registro.html"*/`<!--\n  Generated template for the RegistroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  \n    <ion-list>\n  \n      <ion-list-header color="primary">\n  \n        <ion-avatar item-left>\n          <img style="width: 40px; height: 40px;" src="assets/img/pt-user.svg"/>\n        </ion-avatar>\n  \n        <h2>Nuevo usuario <ion-icon name="ion-ios-personadd"></ion-icon></h2>\n  \n        <button ion-button item-right no-margin clear large color="light" (click)="login()">\n          <ion-icon name="close"></ion-icon>\n        </button>       \n  \n      </ion-list-header>\n      \n      <ion-item padding-right>\n        <ion-label floating>Correo electronico</ion-label>\n        <ion-input [(ngModel)]="mail" (input)="verificaLlenado()" type="email"></ion-input>\n      </ion-item>\n  \n      <ion-item padding-right>\n        <ion-label floating>Nombre de usuario</ion-label>\n        <ion-input [(ngModel)]="user" (input)="verificaLlenado()" type="text"></ion-input>\n      </ion-item>\n  \n      <ion-item padding-right>\n        <ion-label floating>Contraseña</ion-label>\n        <ion-input [(ngModel)]="pass" (input)="verificaLlenado()" (blur)="verificaLlenado()" type="password"></ion-input>\n      </ion-item>\n  \n      <ion-item padding-right>\n        <ion-label floating>Verificar Contraseña</ion-label>\n        <ion-input [(ngModel)]="pass2" (input)="verificaLlenado()" (blur)="verificaLlenado()" type="password"></ion-input>\n      </ion-item>\n  \n      <ion-item text-center padding>\n        <ion-badge color="danger" *ngIf="differentPass == true">La contraseñas deben ser iguales</ion-badge>      \n      </ion-item>\n  \n    </ion-list>\n    \n  </ion-content>\n  \n  <ion-footer text-right padding>\n  \n      <button ion-button no-margin small icon-right (click)="registro()" [disabled]="buttonDisabled">\n        Registrar<ion-icon name="arrow-forward"></ion-icon>\n      </button>\n  \n  </ion-footer>\n  `/*ion-inline-end:"/Users/edvard/Documents/Pointown/Pointown/src/pages/registro/registro.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_common_functions_common_functions__["a" /* CommonFunctionsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_common_functions_common_functions__["a" /* CommonFunctionsProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _f || Object])
    ], RegistroPage);
    return RegistroPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TiendaFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tienda_form2_tienda_form2__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TiendaFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TiendaFormPage = (function () {
    function TiendaFormPage(navCtrl, global, admobFree) {
        // AdMob.removeBanner();
        this.navCtrl = navCtrl;
        this.global = global;
        this.admobFree = admobFree;
        this.lun = true;
        this.mar = true;
        this.mie = true;
        this.jue = true;
        this.vie = true;
        this.sab = true;
        this.dom = true;
        this.horasDisabled = true;
        this.buttonDisabled = true;
        this.tienda = global.getTiendaData1();
        this.nuevo = global.getNuevaTienda();
        if (this.tienda.nombre != undefined) {
            var dias = this.tienda.dias.split(",");
            this.lun = false;
            this.mar = false;
            this.mie = false;
            this.jue = false;
            this.vie = false;
            this.sab = false;
            this.dom = false;
            for (var i = 0; i < dias.length; i++) {
                switch (dias[i]) {
                    case "1":
                        this.lun = true;
                        break;
                    case "2":
                        this.mar = true;
                        break;
                    case "3":
                        this.mie = true;
                        break;
                    case "4":
                        this.jue = true;
                        break;
                    case "5":
                        this.vie = true;
                        break;
                    case "6":
                        this.sab = true;
                        break;
                    case "7":
                        this.dom = true;
                        break;
                }
            }
            this.nombre = this.tienda.nombre;
            this.hora_a = this.tienda.hora_a;
            this.hora_c = this.tienda.hora_c;
        }
    }
    TiendaFormPage.prototype.verificaLlenado = function () {
        this.misHoras = "";
        if (this.hora_a && this.hora_a != "") {
            this.horasDisabled = false;
            var horaSelect = this.hora_a;
            var num = parseInt(horaSelect.substring(0, 2));
            for (var i = num + 1; i < 24; i++) {
                this.misHoras += i + ",";
            }
        }
        else {
            this.horasDisabled = true;
        }
        if ((this.nombre && this.hora_a && this.hora_c && this.nombre != "" && this.hora_a != "" && this.hora_c != "") && (this.lun == true || this.mar == true || this.mie == true || this.jue == true || this.vie == true || this.sab == true || this.dom == true)) {
            this.buttonDisabled = false;
        }
        else {
            this.buttonDisabled = true;
        }
    };
    TiendaFormPage.prototype.siguiente = function () {
        var dias = "";
        if (this.lun == true) {
            dias += "1";
        }
        if (this.mar == true) {
            if (dias.length == 0) {
                dias += "2";
            }
            else {
                dias += ",2";
            }
        }
        if (this.mie == true) {
            if (dias.length == 0) {
                dias += "3";
            }
            else {
                dias += ",3";
            }
        }
        if (this.jue == true) {
            if (dias.length == 0) {
                dias += "4";
            }
            else {
                dias += ",4";
            }
        }
        if (this.vie == true) {
            if (dias.length == 0) {
                dias += "5";
            }
            else {
                dias += ",5";
            }
        }
        if (this.sab == true) {
            if (dias.length == 0) {
                dias += "6";
            }
            else {
                dias += ",6";
            }
        }
        if (this.dom == true) {
            if (dias.length == 0) {
                dias += "7";
            }
            else {
                dias += ",7";
            }
        }
        var hora1 = this.hora_a;
        var hora2 = this.hora_c;
        this.global.setTiendaData1(this.nombre, hora1, hora2, dias);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tienda_form2_tienda_form2__["a" /* TiendaForm2Page */]);
    };
    TiendaFormPage.prototype.cancelar = function () {
        this.global.clearTiendaData();
        this.navCtrl.pop();
    };
    TiendaFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tienda-form',template:/*ion-inline-start:"/Users/edvard/Documents/Pointown/Pointown/src/pages/tienda-form/tienda-form.html"*/`<!--\n  Generated template for the TiendaFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  \n  \n    <ion-list>\n  \n      <ion-list-header color="primary">\n  \n        <ion-avatar item-left>\n          <img style="width: 40px; height: 40px;" src="assets/img/pt-est.svg"/>\n        </ion-avatar>\n  \n        <h2>Mi negocio</h2>\n        <p color="light">Datos</p>\n  \n        <span item-right *ngIf="nuevo == 1 || nuevo == 2">\n          <button ion-button icon-only no-margin clear color="light" (click)="cancelar()">\n            <ion-icon name="close"></ion-icon>\n          </button>       \n        </span>\n  \n      </ion-list-header>\n  \n      <ion-item padding-right margin-bottom>\n        <ion-label floating>Nombre de establecimiento</ion-label>\n        <ion-input [(ngModel)]="nombre" (input)="verificaLlenado()" type="text"></ion-input>\n      </ion-item>\n  \n      <ion-item-divider>\n        Días laborales\n      </ion-item-divider>\n  \n      <ion-item class="inline-checkbox">\n        <ion-label>L</ion-label>\n        <ion-checkbox [(ngModel)]="lun" (ionChange)="verificaLlenado()"></ion-checkbox>\n      </ion-item>\n      <ion-item class="inline-checkbox">\n        <ion-label>M</ion-label>\n        <ion-checkbox [(ngModel)]="mar" (ionChange)="verificaLlenado()"></ion-checkbox>\n      </ion-item>\n      <ion-item class="inline-checkbox">\n        <ion-label>M</ion-label>\n        <ion-checkbox [(ngModel)]="mie" (ionChange)="verificaLlenado()"></ion-checkbox>\n      </ion-item>\n      <ion-item class="inline-checkbox">\n        <ion-label>J</ion-label>\n        <ion-checkbox [(ngModel)]="jue" (ionChange)="verificaLlenado()"></ion-checkbox>\n      </ion-item>\n      <ion-item class="inline-checkbox">\n        <ion-label>V</ion-label>\n        <ion-checkbox [(ngModel)]="vie" (ionChange)="verificaLlenado()"></ion-checkbox>\n      </ion-item>\n      <ion-item class="inline-checkbox">\n        <ion-label>S</ion-label>\n        <ion-checkbox [(ngModel)]="sab" (ionChange)="verificaLlenado()"></ion-checkbox>\n      </ion-item>\n      <ion-item class="inline-checkbox">\n        <ion-label>D</ion-label>\n        <ion-checkbox [(ngModel)]="dom" (ionChange)="verificaLlenado()"></ion-checkbox>\n      </ion-item>\n  \n      <ion-item-divider>\n        Horario\n      </ion-item-divider>\n  \n  \n      <ion-grid no-padding padding-right>\n        <ion-row>\n          <ion-col width-50 no-padding>\n            <ion-item padding-right>\n              <ion-label floating>Abre (HH:MM)</ion-label>\n              <ion-datetime displayFormat="HH:mm" [(ngModel)]="hora_a" (ionChange)="verificaLlenado()"></ion-datetime>\n            </ion-item>\n          </ion-col>\n          <ion-col width-50 no-padding>          \n            <ion-item padding-left>\n              <ion-label floating>Cierra (HH:MM)</ion-label>\n              <ion-datetime displayFormat="HH:mm" hourValues="{{misHoras}}" [(ngModel)]="hora_c" [disabled]="horasDisabled" (ionChange)="verificaLlenado()"></ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n    </ion-list>\n    \n  </ion-content>\n  \n  <ion-footer text-right padding>\n  \n      <button ion-button no-margin small icon-right (click)="siguiente()" [disabled]="buttonDisabled">\n        Siguiente<ion-icon name="arrow-forward"></ion-icon>\n      </button>\n  \n  </ion-footer>\n  `/*ion-inline-end:"/Users/edvard/Documents/Pointown/Pointown/src/pages/tienda-form/tienda-form.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__["a" /* AdMobFree */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__["a" /* AdMobFree */]) === "function" && _c || Object])
    ], TiendaFormPage);
    return TiendaFormPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=tienda-form.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TiendaForm3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_functions_common_functions__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_models__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tienda_form_tienda_form__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the TiendaForm3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TiendaForm3Page = (function () {
    function TiendaForm3Page(navCtrl, storage, api, commonFunctions, global, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.api = api;
        this.commonFunctions = commonFunctions;
        this.global = global;
        this.loadingCtrl = loadingCtrl;
        this.userData = new __WEBPACK_IMPORTED_MODULE_6__models_models__["d" /* UserDataModel */]();
        this.buttonDisabled = true;
        this.username = global.getUsername();
    }
    TiendaForm3Page.prototype.verificaLlenado = function () {
        if (this.nombre && this.app_p && this.app_m && this.tel && this.nombre != "" && this.app_p != "" && this.app_m != "" && this.tel) {
            this.buttonDisabled = false;
        }
        else {
            this.buttonDisabled = true;
        }
    };
    TiendaForm3Page.prototype.guardar = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Guardando...'
        });
        loading.present();
        this.userData.nombre = this.nombre;
        this.userData.ap_p = this.app_p;
        this.userData.ap_m = this.app_m;
        this.userData.tel = this.tel;
        if (this.global.getUser() == undefined) {
            loading.dismiss();
            this.commonFunctions.despliegaAlerta("Error", "Error al agregar la tienda, ingresa con tu usuario y contraseña e intentalo de nuevo");
            this.storage.clear();
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
        }
        else {
            this.api
                .registroT(this.global.getTiendaData(), this.userData)
                .then(function (data) {
                _this.global.clearTiendaData();
                if (data.success == 1) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard__["a" /* DashboardPage */]);
                }
                else {
                    if (data.id == 0) {
                        _this.commonFunctions.despliegaAlerta("Error", "Error al agregar la tienda");
                    }
                    else if (data.id == -1) {
                        _this.commonFunctions.despliegaAlerta("Error", "Error al actualizar los datos de usuario");
                    }
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__tienda_form_tienda_form__["a" /* TiendaFormPage */]);
                }
                loading.dismiss();
            });
        }
    };
    TiendaForm3Page.prototype.volver = function () {
        this.navCtrl.pop();
    };
    TiendaForm3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tienda-form3',template:/*ion-inline-start:"/Users/edvard/Documents/Pointown/Pointown/src/pages/tienda-form3/tienda-form3.html"*/`<!--\n  Generated template for the TiendaForm3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  \n    <ion-list>\n  \n      <ion-list-header color="primary">\n  \n        <h2 no-margin>Hola <strong>{{username}}</strong></h2>\n        <p color="light">Información adicional</p>\n  \n        <button ion-button item-left no-margin clear color="white" (click)="volver()">\n          <ion-icon name="arrow-back"></ion-icon>\n        </button>       \n        \n      </ion-list-header>\n  \n      <ion-item-divider text-wrap text-center>\n        <p>Por favor complementa tu información.</p>\n      </ion-item-divider>\n      \n    \n      <ion-item padding-right>\n        <ion-label floating>Nombre</ion-label>\n        <ion-input [(ngModel)]="nombre" (input)="verificaLlenado()" type="text"></ion-input>\n      </ion-item>\n      <ion-item padding-right>\n        <ion-label floating>Apellido Paterno</ion-label>\n        <ion-input [(ngModel)]="app_p" (input)="verificaLlenado()" type="text"></ion-input>\n      </ion-item>\n      <ion-item padding-right>\n        <ion-label floating>Apellido Materno</ion-label>\n        <ion-input [(ngModel)]="app_m" (input)="verificaLlenado()" type="text"></ion-input>\n      </ion-item>\n      <ion-item padding-right>\n        <ion-label floating>Telefono</ion-label>\n        <ion-input [(ngModel)]="tel" (input)="verificaLlenado()" type="tel"></ion-input>\n      </ion-item>\n      \n    </ion-list>\n    \n  </ion-content>\n  \n  \n  <ion-footer text-center padding>\n      <button ion-button no-margin icon-right (click)="guardar()" [disabled]="buttonDisabled">\n        Finalizar <ion-icon name="partly-sunny"></ion-icon></button>\n  </ion-footer>\n  `/*ion-inline-end:"/Users/edvard/Documents/Pointown/Pointown/src/pages/tienda-form3/tienda-form3.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_common_functions_common_functions__["a" /* CommonFunctionsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_common_functions_common_functions__["a" /* CommonFunctionsProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _f || Object])
    ], TiendaForm3Page);
    return TiendaForm3Page;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=tienda-form3.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TiendaForm2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_functions_common_functions__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tienda_form_tienda_form__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tienda_form3_tienda_form3__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the TiendaForm2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TiendaForm2Page = (function () {
    function TiendaForm2Page(navCtrl, global, api, commonFunctions) {
        this.navCtrl = navCtrl;
        this.global = global;
        this.api = api;
        this.commonFunctions = commonFunctions;
        this.estados = ["Aguascalientes", "Baja California Norte", "Baja California Sur",
            "Campeche", "Ciudad de México", "Coahuila", "Colima", "Chiapas",
            "Chihuahua", "Durango", "Estado de México", "Guanajuato", "Guerrero",
            "Hidalgo", "Jalisco", "Michoacan", "Morelos", "Nayarit", "Nuevo Leon",
            "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí",
            "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz",
            "Yucatán", "Zacatecas"];
        this.tienda = global.getTiendaData2();
        this.nuevo = global.getNuevaTienda();
        if (this.nuevo == 0) {
            this.txtBtn = "Siguiente";
        }
        else {
            this.txtBtn = "Guardar";
        }
        if (this.tienda.calle != undefined) {
            this.calle = this.tienda.calle;
            this.num_e = this.tienda.num_ext;
            this.num_i = this.tienda.num_int;
            this.cp = this.tienda.cp;
            this.colonia = this.tienda.colonia;
            this.municipio = this.tienda.municipio;
            this.pais = this.tienda.pais;
            this.estado = this.tienda.estado;
        }
    }
    TiendaForm2Page.prototype.verificaLlenado = function () {
        if (this.calle == undefined || this.calle == "") {
            this.calle = "N/A";
        }
        if (this.num_e == undefined || this.num_e == "") {
            this.num_e = "N/A";
        }
        if (this.num_i == undefined || this.num_i == "") {
            this.num_i = "N/A";
        }
        if (this.cp == undefined || this.cp == "") {
            this.cp = "000000";
        }
        if (this.colonia == undefined || this.colonia == "") {
            this.colonia = "N/A";
        }
        if (this.municipio == undefined || this.municipio == "") {
            this.municipio = "N/A";
        }
        if (this.pais == undefined || this.pais == "") {
            this.pais = "N/A";
        }
        if (this.estado == undefined || this.estado == "") {
            this.estado = "N/A";
        }
    };
    TiendaForm2Page.prototype.siguiente = function () {
        var _this = this;
        this.verificaLlenado();
        this.global.setTiendaData2(this.calle, this.num_e, this.num_i, this.cp, this.colonia, this.municipio, this.pais, this.estado);
        if (this.nuevo == 0) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tienda_form3_tienda_form3__["a" /* TiendaForm3Page */]);
        }
        else if (this.nuevo == 1) {
            this.api
                .registroT(this.global.getTiendaData(), null)
                .then(function (data) {
                _this.global.clearTiendaData();
                if (data.success == 1) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard__["a" /* DashboardPage */]);
                }
                else {
                    if (data.id == 0) {
                        _this.commonFunctions.despliegaAlerta("Error", "Error al agregar la tienda");
                    }
                    else if (data.id == -1) {
                        _this.commonFunctions.despliegaAlerta("Error", "Error al actualizar los datos de usuario");
                    }
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tienda_form_tienda_form__["a" /* TiendaFormPage */]);
                }
            });
        }
        else if (this.nuevo == 2) {
            this.api.updateTienda(this.global.getTiendaData())
                .then(function (data) {
                _this.global.clearTiendaData();
                if (data.success == 1) {
                    _this.commonFunctions.despliegaAlerta("Correcto", "Tienda actualizada");
                }
                else {
                    _this.commonFunctions.despliegaAlerta("Error", "Error al actualizar la tienda");
                }
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard__["a" /* DashboardPage */]);
            });
        }
    };
    TiendaForm2Page.prototype.volver = function () {
        this.navCtrl.pop();
    };
    TiendaForm2Page.prototype.cancelar = function () {
        this.global.clearTiendaData();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    TiendaForm2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tienda-form2',template:/*ion-inline-start:"/Users/edvard/Documents/Pointown/Pointown/src/pages/tienda-form2/tienda-form2.html"*/`<!--\n  Generated template for the TiendaForm2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  \n<ion-list>\n\n  <ion-list-header color="primary">\n\n    <h2 no-margin>Mi negocio</h2>\n    <p color="light">ubicación</p>\n\n    <button ion-button icon-only item-left no-margin clear color="white" (click)="volver()">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>       \n\n    <span item-right *ngIf="nuevo == 1 || nuevo == 2">\n      <button ion-button icon-only no-margin clear color="light" (click)="cancelar()">\n        <ion-icon name="close"></ion-icon>\n      </button>       \n    </span>\n\n  </ion-list-header>\n\n  <ion-item padding-right>\n    <ion-label floating>Calle (Opcional)</ion-label>\n    <ion-input [(ngModel)]="calle" (input)="verificaLlenado()" type="text"></ion-input>\n  </ion-item>\n\n  <ion-grid no-padding padding-right>\n    <ion-row>\n      <ion-col width-33 no-padding>\n        <ion-item>\n          <ion-label floating>No. Ext. (Opcional)</ion-label>\n          <ion-input [(ngModel)]="num_e" (input)="verificaLlenado()" type="text"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col width-33 no-padding>\n        <ion-item>\n          <ion-label floating>No. Int. (Opcional)</ion-label>\n          <ion-input [(ngModel)]="num_i" (input)="verificaLlenado()" type="text"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col width-33 no-padding>\n        <ion-item no-margin>\n          <ion-label floating>C.P. (Opcional)</ion-label>\n          <ion-input no-margin [(ngModel)]="cp" (input)="verificaLlenado()" type="number"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-item padding-right>\n    <ion-label floating>Colonia (Opcional)</ion-label>\n    <ion-input [(ngModel)]="colonia" (input)="verificaLlenado()" type="text"></ion-input>\n  </ion-item>\n  <ion-item padding-right>\n    <ion-label floating>Municipio (Opcional)</ion-label>\n    <ion-input [(ngModel)]="municipio" (input)="verificaLlenado()" type="text"></ion-input>\n  </ion-item>\n  \n  <ion-grid no-padding padding-right>\n    <ion-row>\n      <ion-col width-50 no-padding>\n        <ion-item>\n          <ion-label floating>Pais (Opcional)</ion-label>\n          <ion-select [(ngModel)]="pais">\n            <ion-option value="mexico" selectedText="México">México</ion-option>\n          </ion-select>\n        </ion-item>          \n      </ion-col>\n      <ion-col width-50 no-padding>\n        <ion-item>\n          <ion-label floating>Estado (Opcional)</ion-label>\n          <ion-select [(ngModel)]="estado">\n            <ion-option *ngFor="let estadoS of estados" value="{{estadoS}}">{{estadoS}}</ion-option>\n          </ion-select>\n        </ion-item>          \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  \n</ion-list>\n\n</ion-content>\n\n<ion-footer text-right padding>\n\n  <button ion-button no-margin small icon-right (click)="siguiente()" [disabled]="buttonDisabled">\n    {{txtBtn}}<ion-icon name="arrow-forward"></ion-icon>\n  </button>\n\n</ion-footer>\n`/*ion-inline-end:"/Users/edvard/Documents/Pointown/Pointown/src/pages/tienda-form2/tienda-form2.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_common_functions_common_functions__["a" /* CommonFunctionsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_common_functions_common_functions__["a" /* CommonFunctionsProvider */]) === "function" && _d || Object])
    ], TiendaForm2Page);
    return TiendaForm2Page;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=tienda-form2.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_agregar_productos_agregar_productos__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cuenta_cuenta__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_empleados_empleados__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_estadisticas_estadisticas__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_meses_meses__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_perfil_perfil__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_producto_detalle_producto_detalle__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_productos_productos__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_registro_registro__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tienda_form_tienda_form__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tienda_form2_tienda_form2__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tienda_form3_tienda_form3__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_api_api__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_common_functions_common_functions__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_global_global__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_network__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_storage__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_http__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_barcode_scanner__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_toast__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_admob_free__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_agregar_productos_agregar_productos__["a" /* AgregarProductosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cuenta_cuenta__["a" /* CuentaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_empleados_empleados__["a" /* EmpleadosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_estadisticas_estadisticas__["a" /* EstadisticasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_meses_meses__["a" /* MesesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_producto_detalle_producto_detalle__["a" /* ProductoDetallePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_productos_productos__["a" /* ProductosPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tienda_form_tienda_form__["a" /* TiendaFormPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_tienda_form2_tienda_form2__["a" /* TiendaForm2Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tienda_form3_tienda_form3__["a" /* TiendaForm3Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/agregar-productos/agregar-productos.module#AgregarProductosPageModule', name: 'AgregarProductosPage', segment: 'agregar-productos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cuenta/cuenta.module#CuentaPageModule', name: 'CuentaPage', segment: 'cuenta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/empleados/empleados.module#EmpleadosPageModule', name: 'EmpleadosPage', segment: 'empleados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/estadisticas/estadisticas.module#EstadisticasPageModule', name: 'EstadisticasPage', segment: 'estadisticas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/meses/meses.module#MesesPageModule', name: 'MesesPage', segment: 'meses', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/producto-detalle/producto-detalle.module#ProductoDetallePageModule', name: 'ProductoDetallePage', segment: 'producto-detalle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productos/productos.module#ProductosPageModule', name: 'ProductosPage', segment: 'productos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tienda-form/tienda-form.module#TiendaFormPageModule', name: 'TiendaFormPage', segment: 'tienda-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tienda-form3/tienda-form3.module#TiendaForm3PageModule', name: 'TiendaForm3Page', segment: 'tienda-form3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tienda-form2/tienda-form2.module#TiendaForm2PageModule', name: 'TiendaForm2Page', segment: 'tienda-form2', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_24__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_agregar_productos_agregar_productos__["a" /* AgregarProductosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cuenta_cuenta__["a" /* CuentaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_empleados_empleados__["a" /* EmpleadosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_estadisticas_estadisticas__["a" /* EstadisticasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_meses_meses__["a" /* MesesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_producto_detalle_producto_detalle__["a" /* ProductoDetallePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_productos_productos__["a" /* ProductosPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tienda_form_tienda_form__["a" /* TiendaFormPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_tienda_form2_tienda_form2__["a" /* TiendaForm2Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tienda_form3_tienda_form3__["a" /* TiendaForm3Page */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_common_functions_common_functions__["a" /* CommonFunctionsProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_global_global__["a" /* GlobalProvider */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_admob_free__["a" /* AdMobFree */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/edvard/Documents/Pointown/Pointown/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/Users/edvard/Documents/Pointown/Pointown/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_http__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_global__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiProvider = (function () {
    function ApiProvider(http, global) {
        this.http = http;
        this.global = global;
        this.productos = [];
    }
    ApiProvider.prototype.loginApi = function (user, pass, tipo) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("http://pointown.com/tech/api/api.php/login/" + user + "/" + pass + "/" + tipo, {}, {});
        });
    };
    ApiProvider.prototype.registroD = function (userData) {
        var _this = this;
        var data = JSON.stringify(userData);
        return new Promise(function (resolve) {
            _this.http.post("http://pointown.com/tech/api/api.php/registroD/", data, {});
        });
    };
    ApiProvider.prototype.registroT = function (tiendaData, userData) {
        var _this = this;
        var data = JSON.stringify({ "tienda": tiendaData, "user": userData });
        var userId = this.global.getUser();
        return new Promise(function (resolve) {
            _this.http.post("http://pointown.com/tech/api/api.php/registroT/" + userId, data, {});
        });
    };
    ApiProvider.prototype.verificaTienda = function () {
        var _this = this;
        var userId = this.global.getUser();
        var userTipo = this.global.getTipoUser();
        return new Promise(function (resolve) {
            _this.http.get("http://pointown.com/tech/api/api.php/verificaTienda/" + userId + "/" + userTipo, {}, {});
        });
    };
    ApiProvider.prototype.updateTienda = function (tiendaData) {
        var _this = this;
        var data = JSON.stringify(tiendaData);
        var tiendaId = this.global.getTiendaId();
        return new Promise(function (resolve) {
            _this.http.post("http://pointown.com/tech/api/api.php/updateTienda/" + tiendaId, data, {});
        });
    };
    ApiProvider.prototype.verificaTienda2 = function (tiendaId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("http://pointown.com/tech/api/api.php/verificaTienda2/" + tiendaId, {}, {});
        });
    };
    ApiProvider.prototype.verificaEmpleados = function () {
        var _this = this;
        var tiendaId = this.global.getTiendaId();
        return new Promise(function (resolve) {
            _this.http.get("http://pointown.com/tech/api/api.php/verificaEmpleados/" + tiendaId, {}, {});
        });
    };
    ApiProvider.prototype.nuevoEmpleado = function (user) {
        var _this = this;
        var tiendaId = this.global.getTiendaId();
        var username = this.global.getUsername();
        var data = JSON.stringify(user);
        return new Promise(function (resolve) {
            _this.http.post("http://pointown.com/tech/api/api.php/nuevoEmpleado/" + tiendaId + "/" + username, data, {});
        });
    };
    ApiProvider.prototype.eliminarEmpleado = function (empleadoId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("http://pointown.com/tech/api/api.php/eliminarEmpleado/" + empleadoId, {}, {});
        });
    };
    ApiProvider.prototype.verificaUserData = function () {
        var _this = this;
        var userId = this.global.getUser();
        var userTipo = this.global.getTipoUser();
        return new Promise(function (resolve) {
            _this.http.get("http://pointown.com/tech/api/api.php/verificaUserData/" + userId + "/" + userTipo, {}, {});
        });
    };
    ApiProvider.prototype.editarUserData = function (user) {
        var _this = this;
        var userId = this.global.getUser();
        var userTipo = this.global.getTipoUser();
        var data = JSON.stringify(user);
        return new Promise(function (resolve) {
            _this.http.post("http://pointown.com/tech/api/api.php/editarUserData/" + userId + "/" + userTipo, data, {});
        });
    };
    ApiProvider.prototype.productosTodos = function () {
        var _this = this;
        var tiendaId = this.global.getTiendaId();
        return new Promise(function (resolve) {
            _this.http.get("http://pointown.com/tech/api/api.php/productosTodos/" + tiendaId, {}, {});
        });
    };
    ApiProvider.prototype.verificarStock = function (codigo) {
        var _this = this;
        var tiendaId = this.global.getTiendaId();
        return new Promise(function (resolve) {
            _this.http.get("http://pointown.com/tech/api/api.php/verificarStock/" + tiendaId + "/" + codigo, {}, {});
        });
    };
    ApiProvider.prototype.guardarStock = function (precio, stock, codigo, id_pv, productoTipo, cantidad, precioCompra) {
        var _this = this;
        var tiendaId = this.global.getTiendaId();
        return new Promise(function (resolve) {
            _this.http.get("http://pointown.com/tech/api/api.php/guardarStock/" + tiendaId + "/" + precio + "/" + stock + "/" + codigo + "/" + id_pv + "/" + productoTipo + "/" + cantidad + "/" + precioCompra, {}, {});
        });
    };
    ApiProvider.prototype.buscarCodigo = function (codigo) {
        var _this = this;
        var tiendaId = this.global.getTiendaId();
        return new Promise(function (resolve) {
            _this.http.get("http://pointown.com/tech/api/api.php/buscarCodigo/" + tiendaId + "/" + codigo, {}, {});
        });
    };
    ApiProvider.prototype.addSells = function () {
        var _this = this;
        this.productos = this.global.getProductList();
        var data = JSON.stringify(this.productos);
        return new Promise(function (resolve) {
            _this.http.post("http://pointown.com/tech/api/api.php/addSells/", data, {});
        });
    };
    ApiProvider.prototype.getCategorias = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("http://pointown.com/tech/api/api.php/getCategorias/", {}, {});
        });
    };
    ApiProvider.prototype.addProducto = function (producto) {
        var _this = this;
        var data = JSON.stringify(producto);
        return new Promise(function (resolve) {
            _this.http.post("http://pointown.com/tech/api/api.php/addProducto/", data, {});
        });
    };
    ApiProvider.prototype.getStats = function (bandera, fecha) {
        var _this = this;
        var tiendaId = this.global.getTiendaId();
        return new Promise(function (resolve) {
            _this.http.get("http://pointown.com/tech/api/api.php/getStats/" + tiendaId + "/" + bandera + "/" + fecha, {}, {});
        });
    };
    ApiProvider.prototype.verificaMeses = function () {
        var _this = this;
        var tiendaId = this.global.getTiendaId();
        var userId = this.global.getUser();
        return new Promise(function (resolve) {
            _this.http.get("http://pointown.com/tech/api/api.php/verificaMeses/" + tiendaId + "/" + userId, {}, {});
        });
    };
    ApiProvider.prototype.enviarInforme = function (fecha) {
        var _this = this;
        var tiendaId = this.global.getTiendaId();
        return new Promise(function (resolve) {
            _this.http.get("http://pointown.com/tech/api/api.php/enviarInforme/" + tiendaId + "/" + fecha, {}, {});
        });
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ionic_native_http__["a" /* HTTP */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ionic_native_http__["a" /* HTTP */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__global_global__["a" /* GlobalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__global_global__["a" /* GlobalProvider */]) === "function" && _b || Object])
    ], ApiProvider);
    return ApiProvider;
    var _a, _b;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonFunctionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_global__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the CommonFunctionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CommonFunctionsProvider = (function () {
    function CommonFunctionsProvider(platform, alertController, global, network, loadingCtrl) {
        this.platform = platform;
        this.alertController = alertController;
        this.global = global;
        this.network = network;
        this.loadingCtrl = loadingCtrl;
        this.conectado = 1;
        this.plataforma = 0;
    }
    CommonFunctionsProvider.prototype.checkNetwork = function () {
        var _this = this;
        var loading;
        if (!this.platform.is('core')) {
            this.plataforma = 1;
            this.global.setPlataforma(this.plataforma);
            var disconnect = this.network.onchange().subscribe(function (data) {
                if (data.type == "offline") {
                    loading = _this.loadingCtrl.create({
                        content: 'Sin conexión, Intentando conectar...'
                    });
                    loading.present();
                }
                else {
                    loading.dismiss();
                }
            });
        }
    };
    CommonFunctionsProvider.prototype.entrar = function (userData, tipoUser, from) {
        var valida = 0;
        if (from == 0) {
            if (userData.success == 0) {
                this.despliegaAlerta("Usuario no encontrado", "Revisa tus credenciales");
            }
            else {
                valida = 1;
            }
        }
        else if (from == 1) {
            if (userData.success == 0) {
                if (userData.id == 0) {
                    this.despliegaAlerta("Error", "Ocurrió un error, intentalo nuevamente");
                }
                else if (userData.id == -1) {
                    this.despliegaAlerta("Error", "Ese nombre de usuario ya existe");
                }
                else if (userData.id == -2) {
                    this.despliegaAlerta("Error", "Ese correo ya existe");
                }
            }
            else {
                valida = 1;
            }
        }
        if (valida == 1) {
            this.global.setUser(userData.id);
            this.global.setTipoUser(tipoUser);
        }
        return valida;
    };
    CommonFunctionsProvider.prototype.despliegaAlerta = function (titulo, subtitulo) {
        var alert = this.alertController.create({
            title: titulo,
            subTitle: subtitulo,
            buttons: ['OK']
        });
        alert.present();
    };
    CommonFunctionsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__global_global__["a" /* GlobalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__global_global__["a" /* GlobalProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object])
    ], CommonFunctionsProvider);
    return CommonFunctionsProvider;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=common-functions.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_models__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalProvider = (function () {
    function GlobalProvider() {
        this.productos = [];
        this.tienda = new __WEBPACK_IMPORTED_MODULE_1__models_models__["c" /* TiendaDataModel */]();
    }
    GlobalProvider.prototype.setUser = function (user) {
        this.idUsuario = user;
    };
    GlobalProvider.prototype.getUser = function () {
        return this.idUsuario;
    };
    GlobalProvider.prototype.setTipoUser = function (tipoUser) {
        this.tipoUser = tipoUser;
    };
    GlobalProvider.prototype.getTipoUser = function () {
        return this.tipoUser;
    };
    GlobalProvider.prototype.setPlataforma = function (plataforma) {
        this.plataforma = plataforma;
    };
    GlobalProvider.prototype.getPlataforma = function () {
        return this.plataforma;
    };
    GlobalProvider.prototype.setProductList = function (productList) {
        this.productos = productList;
    };
    GlobalProvider.prototype.getProductList = function () {
        return this.productos;
    };
    GlobalProvider.prototype.setProducto = function (data) {
        this.producto = data;
    };
    GlobalProvider.prototype.getProducto = function () {
        return this.producto;
    };
    GlobalProvider.prototype.setUsername = function (username) {
        this.username = username;
    };
    GlobalProvider.prototype.getUsername = function () {
        return this.username;
    };
    GlobalProvider.prototype.setTiendaData1 = function (nombre, hora_a, hora_c, dias) {
        this.tienda.nombre = nombre;
        this.tienda.hora_a = hora_a;
        this.tienda.hora_c = hora_c;
        this.tienda.dias = dias;
    };
    GlobalProvider.prototype.getTiendaData1 = function () {
        return this.tienda;
    };
    GlobalProvider.prototype.setTiendaData2 = function (calle, num_e, num_i, cp, colonia, municipio, pais, estado) {
        this.tienda.calle = calle;
        this.tienda.num_ext = num_e;
        this.tienda.num_int = num_i;
        this.tienda.cp = cp;
        this.tienda.colonia = colonia;
        this.tienda.municipio = municipio;
        this.tienda.pais = pais;
        this.tienda.estado = estado;
    };
    GlobalProvider.prototype.getTiendaData2 = function () {
        return this.tienda;
    };
    GlobalProvider.prototype.getTiendaData = function () {
        return this.tienda;
    };
    GlobalProvider.prototype.clearTiendaData = function () {
        this.tienda.nombre = null;
        this.tienda.hora_a = null;
        this.tienda.hora_c = null;
        this.tienda.dias = null;
        this.tienda.calle = null;
        this.tienda.num_ext = null;
        this.tienda.num_int = null;
        this.tienda.cp = null;
        this.tienda.colonia = null;
        this.tienda.municipio = null;
        this.tienda.pais = null;
        this.tienda.estado = null;
    };
    GlobalProvider.prototype.setTiendasData = function (data) {
        this.tiendaData = data;
    };
    GlobalProvider.prototype.getTiendasData = function () {
        return this.tiendaData;
    };
    GlobalProvider.prototype.setNuevaTienda = function (data) {
        this.nuevo = data;
    };
    GlobalProvider.prototype.getNuevaTienda = function () {
        return this.nuevo;
    };
    GlobalProvider.prototype.setTiendaId = function (id) {
        this.tiendaId = id;
    };
    GlobalProvider.prototype.getTiendaId = function () {
        return this.tiendaId;
    };
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SuccessModel */
/* unused harmony export TiendaModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TiendaDataModel; });
/* unused harmony export ProductosModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosDataModel; });
/* unused harmony export UserModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UserDataModel; });
/* unused harmony export CategoriaModel */
/* unused harmony export CategoriaDataModel */
/* unused harmony export StatsModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StatsDataModel; });
var SuccessModel = (function () {
    function SuccessModel() {
    }
    return SuccessModel;
}());

var TiendaModel = (function () {
    function TiendaModel() {
    }
    return TiendaModel;
}());

var TiendaDataModel = (function () {
    function TiendaDataModel() {
    }
    return TiendaDataModel;
}());

var ProductosModel = (function () {
    function ProductosModel() {
    }
    return ProductosModel;
}());

var ProductosDataModel = (function () {
    function ProductosDataModel() {
    }
    return ProductosDataModel;
}());

var UserModel = (function () {
    function UserModel() {
    }
    return UserModel;
}());

var UserDataModel = (function () {
    function UserDataModel() {
    }
    return UserDataModel;
}());

var CategoriaModel = (function () {
    function CategoriaModel() {
    }
    return CategoriaModel;
}());

var CategoriaDataModel = (function () {
    function CategoriaDataModel() {
    }
    return CategoriaDataModel;
}());

var StatsModel = (function () {
    function StatsModel() {
    }
    return StatsModel;
}());

var StatsDataModel = (function () {
    function StatsDataModel() {
    }
    return StatsDataModel;
}());

//# sourceMappingURL=models.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map