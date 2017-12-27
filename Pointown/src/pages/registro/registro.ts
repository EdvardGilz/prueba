import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ApiProvider } from '../../providers/api/api';
import { CommonFunctionsProvider } from '../../providers/common-functions/common-functions';
import { GlobalProvider } from '../../providers/global/global';

import { SuccessModel, UserDataModel } from '../../models/models';

import { LoginPage } from '../login/login';
import { TiendaFormPage } from '../tienda-form/tienda-form';

/**
 * Generated class for the RegistroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  public user;
  public pass;
  public pass2;
  public mail;
  public differentPass = false;
  public buttonDisabled = true;

  public userData: UserDataModel = new UserDataModel();
  public userDataRes: SuccessModel;

  constructor(public navCtrl: NavController,
              public api: ApiProvider,
              public commonFunctions: CommonFunctionsProvider,
              public global: GlobalProvider,
              public storage: Storage,
              public loadingCtrl: LoadingController) {}

  verificaLlenado() {
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
  }
  
  registro() {
    let loading = this.loadingCtrl.create({
      content: 'Guardando...'
    });
    loading.present();

    this.userData.username = this.user;
    this.userData.password = this.pass;
    this.userData.mail = this.mail;
    
    this.api.registroD(this.userData).then((res) => {
      this.userDataRes = res;
    })
    .then(() => {
      let validacion = this.commonFunctions.entrar(this.userDataRes, false, 1);
      if (validacion != 0) {
        this.storage.set('credenciales', {user:this.user, pass:this.pass, tipo:false});
        this.global.setUsername(this.user);
        this.global.setNuevaTienda(0);
        this.navCtrl.setRoot(TiendaFormPage);
        
      }
      loading.dismiss();
    });
  }
  
  login() {
    this.navCtrl.setRoot(LoginPage);
  }

}
