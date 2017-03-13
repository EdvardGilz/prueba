import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController } from 'ionic-angular';
import { Toast, InAppPurchase } from 'ionic-native';

import { Api } from '../../providers/api';

import { StatsDataModel } from '../../models/models';

import { MesesPage } from '../meses/meses';

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
  public vacio = 1;
  public fecha;
  public btnDisabled = true;

  constructor(public navCtrl: NavController, 
              public api: Api,
              public modalCtrl: ModalController,
              public loadingCtrl: LoadingController) {
    this.fecha = "actual";
    this.obtenerEstadisticas(this.fecha);

    InAppPurchase.getProducts(['pruebasuscripcion1']).then((products) => {
      console.log(products);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  obtenerEstadisticas(fecha) {
    let loading = this.loadingCtrl.create({
      content: 'Cargando Estadisticas'
    });
    loading.present();

    this.api.getStats(true, fecha).then((data) => {
      this.estadisticasMes = data.data[0];
    });

    this.api.getStats(false, fecha).then((data) => {
      this.estadisticasDia = data.data;
      for(var i in this.estadisticasDia) {
        if (this.estadisticasDia[i].totalMes > 0 || this.estadisticasDia[i].totalVentas > 0 || this.estadisticasDia[i].totalInvertido > 0) {
          this.vacio = 0;
          this.btnDisabled = false;
        }
      }
      loading.dismiss();
    });
  }

  regresar() {
    this.navCtrl.pop();
  }

  seleccionarMes() {
    let modal = this.modalCtrl.create(MesesPage, {fecha:this.estadisticasMes.fechaVal});
    modal.onDidDismiss(data => {
      this.fecha = data;
      this.obtenerEstadisticas(this.fecha);
    });
    
    modal.present();
  }

  enviarInforme() {
    this.api.enviarInforme(this.fecha).then((data) => {
      if (data.success == 1) {
        Toast.show("Se envió el informe a tu correo", '5000', 'bottom').subscribe();
      }
      else {
        Toast.show("Ocurrió un error, intentalo nuevamente", '5000', 'bottom').subscribe();
      }
    });
  }

}
