import { Component } from '@angular/core';
import { NavParams, ViewController, LoadingController } from 'ionic-angular';

import { Api } from '../../providers/api';
import { CommonFunctions } from '../../providers/common-functions';

// import { ProductosDataModel } from '../../models/models';

/*
  Generated class for the ProductoDetalle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-producto-detalle',
  templateUrl: 'producto-detalle.html'
})
export class ProductoDetallePage {
  public codigo;
  public nombre;
  public precio;
  public stock;
  public id_pv = 0;
  public txtPrecio;
  public txtStock;
  public productoTipo;

  public buttonDisabled = true;
  public prodData;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public api: Api,
              public commonFunctions: CommonFunctions,
              public loadingCtrl: LoadingController) {
    this.prodData = navParams.get('data');
    
    this.verificarStock();
  }

  verificarStock() {
    let loading = this.loadingCtrl.create({
      content: 'Buscando...'
    });
    loading.present();

    this.api.verificarStock(this.prodData.codigo).then((data) => {
      this.productoTipo = this.prodData.tipo;

      if (this.productoTipo == 0) {
        this.txtPrecio = "Precio por unidad";
        this.txtStock = "Unidades";
      }
      else if (this.productoTipo == 1) {
        this.txtPrecio = "Precio por kilo";
        this.txtStock = "Peso en gramos";
      }

      this.codigo = this.prodData.codigo;
      this.nombre = this.prodData.nombre;

      if (data.data.length > 0) {
        this.precio = data.data[0].precio;
        this.id_pv = data.data[0].id_pv;
        if (data.data[0].tipo == 1) {
          this.stock = data.data[0].peso;
        }
        else {
          this.stock = data.data[0].stock;
        }
      }

      loading.dismiss();
    });
  }

  verificaLlenado() {
    if (this.precio && this.stock && this.precio != "" && this.stock != "") {
      this.buttonDisabled = false;
    }
    else {
      this.buttonDisabled = true;
    }
  }

  guardar() {
    let loading = this.loadingCtrl.create({
      content: 'Actualizando stock...'
    });
    loading.present();

    this.api.guardarStock(this.precio, this.stock, this.codigo, this.id_pv, this.productoTipo)
    .then((data) => {
      if (data.success == 1) {
        this.commonFunctions.despliegaAlerta("Correcto!!", "Producto actualizado");
        this.buttonDisabled = true;
      }
      else {
        if (data.id == -1) {
          this.commonFunctions.despliegaAlerta("Error", "Producto no actualizado, vuelve a intentarlo");
          this.buttonDisabled = true;
        }
        else if (data.id == -2) {
          this.commonFunctions.despliegaAlerta("Error", "Ocurrió un error al actualizar el producto, vuelve a intentrlo");
          this.buttonDisabled = true;
        }
      }
      loading.dismiss();
    });
  }

  regresar() {
    this.viewCtrl.dismiss();
  }

}
