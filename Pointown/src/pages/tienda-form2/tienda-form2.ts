import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';
import { CommonFunctionsProvider } from '../../providers/common-functions/common-functions';
import { GlobalProvider } from '../../providers/global/global';

import { TiendaDataModel } from '../../models/models';

import { TiendaFormPage } from '../tienda-form/tienda-form';
import { TiendaForm3Page } from '../tienda-form3/tienda-form3';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the TiendaForm2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tienda-form2',
  templateUrl: 'tienda-form2.html',
})
export class TiendaForm2Page {
  public calle;
  public num_e;
  public num_i;
  public cp;
  public colonia;
  public municipio;
  public pais;
  public estado;
  public txtBtn;
  public estados;

  public tienda: TiendaDataModel;

  // public buttonDisabled = true;
  public nuevo;

  constructor(public navCtrl: NavController, 
              public global: GlobalProvider,
              public api: ApiProvider,
              public commonFunctions: CommonFunctionsProvider) {
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
      this.estado = this.tienda.estado
    }
  }

  verificaLlenado() {
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
  }
  
  siguiente() {
    this.verificaLlenado();
    this.global.setTiendaData2(this.calle, this.num_e, this.num_i, this.cp, this.colonia, this.municipio, this.pais, this.estado);
    
    if (this.nuevo == 0) {
      this.navCtrl.push(TiendaForm3Page);
    }
    else if (this.nuevo == 1) {
      this.api
        .registroT(this.global.getTiendaData(), null)
        .then((data) => {
          this.global.clearTiendaData();
          if (data.success == 1) {
            this.navCtrl.setRoot(DashboardPage);
          }
          else {
            if (data.id == 0) {
              this.commonFunctions.despliegaAlerta("Error", "Error al agregar la tienda");
            }
            else if (data.id == -1) {
              this.commonFunctions.despliegaAlerta("Error", "Error al actualizar los datos de usuario");
            }
            
            this.navCtrl.setRoot(TiendaFormPage);
          }
        });
    }
    else if (this.nuevo == 2) {
      this.api.updateTienda(this.global.getTiendaData())
      .then((data) => {
        this.global.clearTiendaData();
          if (data.success == 1) {
            this.commonFunctions.despliegaAlerta("Correcto", "Tienda actualizada");
          }
          else {
            this.commonFunctions.despliegaAlerta("Error", "Error al actualizar la tienda");
          }
          this.navCtrl.setRoot(DashboardPage);
      });
    }
  }

  volver() {
    this.navCtrl.pop();
  }

  cancelar() {
    this.global.clearTiendaData();
    this.navCtrl.setRoot(DashboardPage);
  }

}
