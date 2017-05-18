import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Api } from '../../providers/api';
import { CommonFunctions } from '../../providers/common-functions';
import { Global } from '../../providers/global';

import { SuccessModel } from '../../models/models';

import { Registro } from '../registro/registro';
import { Dashboard } from '../dashboard/dashboard';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  public user;
  public pass;
  public plataforma: number;
  public tipoUser = false;
  public txtTipoUser = "Propietario";

  public buttonDisabled = true;
  
  public userData: SuccessModel;

  constructor(public storage: Storage,
              public navCtrl: NavController,
              public api: Api) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
