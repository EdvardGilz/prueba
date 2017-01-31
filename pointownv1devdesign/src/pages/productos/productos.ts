import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';

import { Api } from '../../providers/api';
import { CommonFunctions } from '../../providers/common-functions';

import { ProductosDataModel } from '../../models/models';

import { ProductoDetallePage } from '../producto-detalle/producto-detalle';
import { AgregarProductosPage } from '../agregar-productos/agregar-productos';

/*
  Generated class for the Productos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html'
})
export class ProductosPage {
  public barcode;
  public productosAll: ProductosDataModel[] = [];
  public productosAllBK: ProductosDataModel[] = [];
  public txtSearchBar;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public api: Api,
              public commonFunctions: CommonFunctions,
              public alertCtrl: AlertController) {
    
  }

  ionViewWillEnter() {
    this.limpiarSearchbar();
  }

  getAllProducts() {
    this.api.productosTodos().then((data) => {
      this.productosAll = data.data;
      this.productosAllBK = data.data;
    });
  }

  scanner() {
    BarcodeScanner.scan().then((barcodeData) => {
      this.barcode = barcodeData.text;

      if (barcodeData.format == "UPC_A") {
        if (barcodeData.text.length > 12) {
          this.barcode = this.barcode.substring(1);
        }
      }
      this.searchProduct(this.barcode, 1);
    }, (err) => {
      this.commonFunctions.despliegaAlerta("Error", "Error al leer el codigo, intentalo nuevamente");
    })
  }

  searchProduct(ev, tipo) {
    if (tipo == 0) {
      var val = ev.target.value;
      this.productosAll = this.productosAllBK;
      if (val && val.trim() != '') {
        this.productosAll = this.productosAll.filter((item) => {
          return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }
    else if (tipo == 1) {
      this.productosAll = this.productosAllBK;
      var val = ev;
      if (val && val.trim() != '') {
        this.productosAll = this.productosAll.filter((item) => {
          return (item.codigo.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }
    
    if (this.productosAll.length <= 0) {
      let alert = this.alertCtrl.create({
        title: "Producto no encontrado",
        subTitle: "Quieres agregar el producto??",
        buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: data => {
                this.limpiarSearchbar();
              }
            },
            {
              text: 'Aceptar',
              handler: data => {
                let modal = this.modalCtrl.create(AgregarProductosPage, {txt: this.txtSearchBar, codebar: this.barcode});
                modal.onDidDismiss(() => {
                  this.limpiarSearchbar();
                });
                modal.present();
              }
            }
          ]
      });
      alert.present();
    }
    
  }

  limpiarSearchbar() {
    this.getAllProducts();
    this.txtSearchBar = "";
  }

  verificarStock(data) {
    let modal = this.modalCtrl.create(ProductoDetallePage, {data: data});
    modal.onDidDismiss(() => {
      this.limpiarSearchbar();
    });
    modal.present();
  }

  regresar() {
    this.navCtrl.pop();
  }

}