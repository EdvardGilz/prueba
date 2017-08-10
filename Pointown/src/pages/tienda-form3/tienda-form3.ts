import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';
import { CommonFunctionsProvider } from '../../providers/common-functions/common-functions';
import { GlobalProvider } from '../../providers/global/global';

import { UserDataModel } from '../../models/models';

import { DashboardPage } from '../dashboard/dashboard';
import { TiendaFormPage } from '../tienda-form/tienda-form';

/**
 * Generated class for the TiendaForm3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tienda-form3',
  templateUrl: 'tienda-form3.html',
})
export class TiendaForm3Page {
  public nombre;
  public app_p;
  public app_m;
  public tel;
  public username;
  public userData: UserDataModel = new UserDataModel();
  
  public buttonDisabled = true;

  constructor(public navCtrl: NavController,
              public api: ApiProvider,
              public commonFunctions: CommonFunctionsProvider,
              public global: GlobalProvider,
              public loadingCtrl: LoadingController) {
    this.username = global.getUsername();
  }

  verificaLlenado() {
    if (this.nombre && this.app_p && this.app_m && this.tel && this.nombre != "" && this.app_p != "" && this.app_m != "" && this.tel)  {
      this.buttonDisabled = false;
    }
    else {
      this.buttonDisabled = true;
    }
  }
  
  guardar() {
    let loading = this.loadingCtrl.create({
      content: 'Guardando...'
    });
    loading.present();
    
    this.userData.nombre = this.nombre;
    this.userData.ap_p = this.app_p;
    this.userData.ap_m = this.app_m;
    this.userData.tel = this.tel;
    
    this.api
      .registroT(this.global.getTiendaData(), this.userData)
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
        loading.dismiss();
      });
  }

  volver() {
    this.navCtrl.pop();
  }

}
