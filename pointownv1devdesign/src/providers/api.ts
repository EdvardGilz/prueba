import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { SuccessModel, ProductosModel, ProductosDataModel, UserModel, UserDataModel, TiendaModel, TiendaDataModel, CategoriaModel } from '../models/models';

import { Global } from './global';

/*
  Generated class for the Api provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Api {
  public productos: ProductosDataModel[] = [];

  constructor(public http: Http,
              public global: Global) {}
  
  loginApi(user: string, pass: string, tipo: boolean) {
    return new Promise<SuccessModel>(resolve => {
      this.http.get(`http://bixnia.com/labs/api_v4/api.php/login/${user}/${pass}/${tipo}`)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  
  registroD(userData: UserDataModel) {
    var data = JSON.stringify(userData);
    return new Promise<SuccessModel>(resolve => {
      this.http.post(`http://bixnia.com/labs/api_v4/api.php/registroD/`, data)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  
  registroT(tiendaData: TiendaDataModel, userData: UserDataModel) {
    var data = JSON.stringify({"tienda":tiendaData, "user":userData});
    var userId = this.global.getUser();
    
    return new Promise<SuccessModel>(resolve => {
      this.http.post(`http://bixnia.com/labs/api_v4/api.php/registroT/${userId}`, data)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  
  verificaTienda() {
    var userId = this.global.getUser();
    var userTipo = this.global.getTipoUser();
    
    return new Promise<TiendaModel>(resolve => {
      this.http.get(`http://bixnia.com/labs/api_v4/api.php/verificaTienda/${userId}/${userTipo}`)
        .map(res => <TiendaModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  updateTienda(tiendaData: TiendaDataModel) {
    var data = JSON.stringify(tiendaData);
    var tiendaId = this.global.getTiendaId();

    return new Promise<SuccessModel>(resolve => {
      this.http.post(`http://bixnia.com/labs/api_v4/api.php/updateTienda/${tiendaId}`, data)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  verificaTienda2(tiendaId) {
    return new Promise<TiendaModel>(resolve => {
      this.http.get(`http://bixnia.com/labs/api_v4/api.php/verificaTienda2/${tiendaId}`)
        .map(res => <TiendaModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  verificaEmpleados() {
    var tiendaId = this.global.getTiendaId();

    return new Promise<UserModel>(resolve => {
      this.http.get(`http://bixnia.com/labs/api_v4/api.php/verificaEmpleados/${tiendaId}`)
        .map(res => <UserModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  nuevoEmpleado(user: UserDataModel) {
    var tiendaId = this.global.getTiendaId();
    var data = JSON.stringify(user);

    return new Promise<SuccessModel>(resolve => {
      this.http.post(`http://bixnia.com/labs/api_v4/api.php/nuevoEmpleado/${tiendaId}`, data)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  eliminarEmpleado(empleadoId) {
    return new Promise<SuccessModel>(resolve => {
      this.http.get(`http://bixnia.com/labs/api_v4/api.php/eliminarEmpleado/${empleadoId}`)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  verificaUserData() {
    var userId = this.global.getUser();
    var userTipo = this.global.getTipoUser();

    return new Promise<UserModel>(resolve => {
      this.http.get(`http://bixnia.com/labs/api_v4/api.php/verificaUserData/${userId}/${userTipo}`)
        .map(res => <UserModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  editarUserData(user: UserDataModel) {
    var userId = this.global.getUser();
    var userTipo = this.global.getTipoUser();
    var data = JSON.stringify(user);

    return new Promise<SuccessModel>(resolve => {
      this.http.post(`http://bixnia.com/labs/api_v4/api.php/editarUserData/${userId}/${userTipo}`, data)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  productosTodos() {
    return new Promise<ProductosModel>(resolve => {
      this.http.get(`http://bixnia.com/labs/api_v4/api.php/productosTodos/`)
        .map(res => <ProductosModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  verificarStock(codigo) {
    var tiendaId = this.global.getTiendaId();
    
    return new Promise<ProductosModel>(resolve => {
      this.http.get(`http://bixnia.com/labs/api_v4/api.php/verificarStock/${tiendaId}/${codigo}`)
        .map(res => <ProductosModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  guardarStock(precio, stock, codigo, id_pv, productoTipo, cantidad, precioCompra) {
    var tiendaId = this.global.getTiendaId();
    
    return new Promise<SuccessModel>(resolve => {
      this.http.get(`http://bixnia.com/labs/api_v4/api.php/guardarStock/${tiendaId}/${precio}/${stock}/${codigo}/${id_pv}/${productoTipo}/${cantidad}/${precioCompra}`)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  buscarCodigo(codigo) {
    var tiendaId = this.global.getTiendaId();
    
    return new Promise<ProductosModel>(resolve => {
      this.http.get(`http://bixnia.com/labs/api_v4/api.php/buscarCodigo/${tiendaId}/${codigo}`)
        .map(res => <ProductosModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  addSells() {
    this.productos = this.global.getProductList();
    var data = JSON.stringify(this.productos);
    
    return new Promise<SuccessModel>(resolve => {
      this.http.post(`http://bixnia.com/labs/api_v4/api.php/addSells/`, data)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  getCategorias() {
    return new Promise<CategoriaModel>(resolve => {
      this.http.get(`http://bixnia.com/labs/api_v4/api.php/getCategorias/`)
        .map(res => <CategoriaModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  addProducto(producto: ProductosDataModel) {
    var data = JSON.stringify(producto);
    
    return new Promise<SuccessModel>(resolve => {
      this.http.post(`http://bixnia.com/labs/api_v4/api.php/addProducto/`, data)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }










  
  
  
  allCodes() {
    return new Promise<ProductosModel>(resolve => {
      this.http.get(`http://bixnia.com/labs/api_v4/api.php/allCodes`)
        .map(res => <ProductosModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  
  getProducts() {
    var userId = this.global.getUser();
    return new Promise<ProductosModel>(resolve => {
      this.http.get(`http://bixnia.com/labs/api_v4/api.php/getProducts/${userId}`)
        .map(res => <ProductosModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  
  addProduct(prodData: ProductosDataModel) {
    var userId = this.global.getUser();
    var data = JSON.stringify(prodData);
    
    return new Promise<SuccessModel>(resolve => {
      this.http.post(`http://bixnia.com/labs/api_v4/api.php/addProduct/${userId}/`, data)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  
  
  
  desactivarProducto(codigo: string) {
    var userId = this.global.getUser();
    
    return new Promise<SuccessModel>(resolve => {
      this.http.get(`http://bixnia.com/labs/api_v4/api.php/desactivarProducto/${userId}/${codigo}`)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  
  activarProducto(codigo: string) {
    var userId = this.global.getUser();
    
    return new Promise<ProductosModel>(resolve => {
      this.http.get(`http://bixnia.com/labs/api_v4/api.php/activarProducto/${userId}/${codigo}`)
        .map(res => <ProductosModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  
  actualizarProducto(precio: string, stock: string, id_pv: string) {
    return new Promise<SuccessModel>(resolve => {
      this.http.get(`http://bixnia.com/labs/api_v4/api.php/actualizarProducto/${precio}/${stock}/${id_pv}`)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

}