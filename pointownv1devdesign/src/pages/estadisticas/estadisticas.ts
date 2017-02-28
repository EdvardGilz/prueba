import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Api } from '../../providers/api';
// import { CommonFunctions } from '../../providers/common-functions';
// import { Global } from '../../providers/global';

import { StatsDataModel } from '../../models/models';

/*
  Generated class for the Estadisticas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-estadisticas',
  templateUrl: 'estadisticas.html'
})
export class EstadisticasPage {
  public estadisticasMes: StatsDataModel = new StatsDataModel();
  public estadisticasDia: StatsDataModel[] = [];

  constructor(public navCtrl: NavController, 
              public api: Api) {

    api.getStats(true).then((data) => {
      this.estadisticasMes = data.data[0];
    });

    api.getStats(false).then((data) => {
      this.estadisticasDia = data.data;
    });
  }

}
