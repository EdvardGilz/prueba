import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';
import { AdMobFree } from '@ionic-native/admob-free';

import { ApiProvider } from '../../providers/api/api';
import { CommonFunctionsProvider } from '../../providers/common-functions/common-functions';
import { GlobalProvider } from '../../providers/global/global';

import { TiendaDataModel, TiendaModel } from '../../models/models';

import { LoginPage } from '../login/login';
import { TiendaFormPage } from '../tienda-form/tienda-form';
import { EmpleadosPage } from '../empleados/empleados';
import { PerfilPage } from '../perfil/perfil';
import { ProductosPage } from '../productos/productos';
import { CuentaPage } from '../cuenta/cuenta';
import { EstadisticasPage } from '../estadisticas/estadisticas';

/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  public tiendasData;
  public tiendas: TiendaDataModel[] = [];
  public tienda: TiendaModel;
  public userTipo;
  public username;
  public userId;
  private correctoLogin = 1;

  constructor(private navCtrl: NavController,
              private storage: Storage,
              private api: ApiProvider,
              private commonFunctions: CommonFunctionsProvider,
              private global: GlobalProvider,
              private loadingCtrl: LoadingController,
              private toast: Toast,
              private admobFree: AdMobFree) {
    this.userTipo = this.global.getTipoUser();
    this.username = this.global.getUsername();
    this.userId = this.global.getUser();
    if (this.userId == undefined) {
      this.correctoLogin = 0;
      this.commonFunctions.despliegaAlerta("Error de ingreso", "Por favor vuelve a logearte");
    }
  }

  ionViewWillEnter() {
    if (this.correctoLogin == 1) {
      // this.commonFunctions.checkNetwork();
      // AdMob.prepareInterstitial({
      //   adId: 'ca-app-pub-1057257651261369/7551627133',
      //   isTesting: false,
      //   autoShow: false
      // });

      // AdMob.createBanner({
      //   adId: 'ca-app-pub-1057257651261369/8330356336',
      //   isTesting: false,
      //   autoShow: true,
      //   position: 'TOP_CENTER'
      // });

      if (this.global.getPlataforma() == 1) {
        this.admobFree.interstitial.config({
          id: 'ca-app-pub-1057257651261369/7551627133',
          isTesting: false,
          autoShow: false
        });
        this.admobFree.interstitial.prepare();

        this.admobFree.banner.config({
          id: 'ca-app-pub-1057257651261369/8330356336',
          isTesting: false,
          autoShow: false,
          bannerAtTop: true
        });
        this.admobFree.banner.prepare();
      }

      let loading = this.loadingCtrl.create({
        content: 'Cargando tiendas'
      });
      loading.present();

      this.storage.get('tiendasData').then((data) => {
        if (data != null) {
          this.tienda = data;
          this.global.setTiendasData(this.tienda);
          this.showTiendas();
        }
        else {
          this.commonFunctions.checkNetwork();
          this.verificarTienda();
        }
      })
      .then(() => {
        loading.dismiss();
      });

    }
    else {
      this.salir();
    }
    
  }

  verificarTienda() {
    this.api.verificaTienda().then((data) => {
      this.tienda = data;
    })
    .then(() => {
      if (this.tienda.success == 1) {
        this.global.setTiendasData(this.tienda);
        this.storage.set('tiendasData', this.tienda);
      }
      else {
        this.global.setNuevaTienda(0);
        this.navCtrl.setRoot(TiendaFormPage);
      }
    })
    .then(()=> {
      this.showTiendas();
    });
  }

  showTiendas() {
    this.tiendasData = this.global.getTiendasData();
    if (this.tiendasData != undefined) {
      this.tiendas = this.tiendasData.data;
    }
  }

  nuevaTienda() {
    this.global.setNuevaTienda(1);
    this.navCtrl.push(TiendaFormPage);
  }

  salir() {
    this.storage.clear();
    this.navCtrl.setRoot(LoginPage);
  }

  editar(data) {
    let loading = this.loadingCtrl.create({
      content: 'Accediendo'
    });
    loading.present();

    this.global.setNuevaTienda(2);
    this.global.setTiendaId(data.id);

    this.api.verificaTienda2(data.id).then((data) => {
      let tienda = data.data[0];
      this.global.setTiendaData1(tienda.nombre, tienda.hora_a, tienda.hora_c, tienda.dias);
      this.global.setTiendaData2(tienda.calle, tienda.num_ext, tienda.num_int, tienda.cp, tienda.colonia, tienda.municipio, tienda.pais, tienda.estado);
    })
    .then(() => {
      // AdMob.showInterstitial();
      this.admobFree.interstitial.show();
      this.navCtrl.push(TiendaFormPage);
      loading.dismiss();
    });
  }

  agregarEmpleado(data) {
    // AdMob.showInterstitial();
    this.admobFree.interstitial.show();
    this.global.setTiendaId(data.id);
    this.navCtrl.push(EmpleadosPage);
  }

  perfil() {
    // AdMob.showInterstitial();
    this.admobFree.interstitial.show();
    this.navCtrl.push(PerfilPage);
  }

  productos(data) {
    this.global.setTiendaId(data.id);
    this.navCtrl.push(ProductosPage);
  }

  cuenta(data) {
    this.global.setTiendaId(data.id);
    if (data.sumaStock > 0) {
      this.navCtrl.push(CuentaPage);
    }
    else {
      this.commonFunctions.despliegaAlerta("No hay stock", "Agrega stock para usar el contador");
    }
  }

  estadisticas(data) {
    // AdMob.showInterstitial();
    this.admobFree.interstitial.show();
    this.global.setTiendaId(data.id);
    this.navCtrl.push(EstadisticasPage);
  }

  proximamente() {
    this.toast.show("Poximamente", '3000', 'bottom').subscribe();
  };

}
