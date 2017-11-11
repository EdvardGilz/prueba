import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AgregarProductosPage } from '../pages/agregar-productos/agregar-productos';
import { CuentaPage } from '../pages/cuenta/cuenta';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { EmpleadosPage } from '../pages/empleados/empleados';
import { EstadisticasPage } from '../pages/estadisticas/estadisticas';
import { LoginPage } from '../pages/login/login';
import { MesesPage } from '../pages/meses/meses';
import { PerfilPage } from '../pages/perfil/perfil';
import { ProductoDetallePage } from '../pages/producto-detalle/producto-detalle';
import { ProductosPage } from '../pages/productos/productos';
import { RegistroPage } from '../pages/registro/registro';
import { TiendaFormPage } from '../pages/tienda-form/tienda-form';
import { TiendaForm2Page } from '../pages/tienda-form2/tienda-form2';
import { TiendaForm3Page } from '../pages/tienda-form3/tienda-form3';

import { ApiProvider } from '../providers/api/api';
import { CommonFunctionsProvider } from '../providers/common-functions/common-functions';
import { GlobalProvider } from '../providers/global/global';

import { Network } from '@ionic-native/network';
import { IonicStorageModule } from '@ionic/storage';
import { HTTP } from '@ionic-native/http';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { AdMobFree } from '@ionic-native/admob-free';

@NgModule({
  declarations: [
    MyApp,
    AgregarProductosPage,
    CuentaPage,
    DashboardPage,
    EmpleadosPage,
    EstadisticasPage,
    LoginPage,
    MesesPage,
    PerfilPage,
    ProductoDetallePage,
    ProductosPage,
    RegistroPage,
    TiendaFormPage,
    TiendaForm2Page,
    TiendaForm3Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AgregarProductosPage,
    CuentaPage,
    DashboardPage,
    EmpleadosPage,
    EstadisticasPage,
    LoginPage,
    MesesPage,
    PerfilPage,
    ProductoDetallePage,
    ProductosPage,
    RegistroPage,
    TiendaFormPage,
    TiendaForm2Page,
    TiendaForm3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    CommonFunctionsProvider,
    GlobalProvider,
    Network,
    HTTP,
    BarcodeScanner,
    Toast,
    AdMobFree
  ]
})
export class AppModule {}
