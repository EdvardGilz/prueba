import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';

import { StatsDataModel } from '../../models/models';

/**
 * Generated class for the MesesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meses',
  templateUrl: 'meses.html',
})
export class MesesPage {
  public fechas: StatsDataModel[] = [];
  public fechasSelect;
  public sinData = false;

  constructor(public viewCtrl: ViewController,
              public api: ApiProvider,
              public params: NavParams) {
    this.api.verificaMeses().then((data) => {
      if (data.success == 0) {
        this.sinData = true;
      }
      else {
        this.sinData = false;
        this.fechas = data.data;
        for (var i=0; i<this.fechas.length; i++) {
          if (this.fechas[i].fechaVal == params.get('fecha')) {
            this.fechas[i].checked = true;
          }
          else {
            this.fechas[i].checked = false;
          }
        }
      }
    });
  }

  seleccionar() {
    this.viewCtrl.dismiss(this.fechasSelect);
  }

  cancelar() {
    this.viewCtrl.dismiss(this.params.get('fecha'));
  }

}
