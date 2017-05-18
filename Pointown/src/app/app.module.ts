import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { Registro } from '../pages/registro/registro';
import { Dashboard } from '../pages/dashboard/dashboard';
import { TiendaForm } from '../pages/tienda-form/tienda-form';
import { TiendaForm2 } from '../pages/tienda-form2/tienda-form2';
import { TiendaForm3 } from '../pages/tienda-form3/tienda-form3';
import { Empleados } from '../pages/empleados/empleados';
import { Perfil } from '../pages/perfil/perfil';
import { Productos } from '../pages/productos/productos';
import { ProductoDetalle } from '../pages/producto-detalle/producto-detalle';
import { Cuenta } from '../pages/cuenta/cuenta';
import { AgregarProductos } from '../pages/agregar-productos/agregar-productos';
import { Estadisticas } from '../pages/estadisticas/estadisticas';
import { Meses } from '../pages/meses/meses';

import { Api } from '../providers/api';
import { CommonFunctions } from '../providers/common-functions';
import { Global } from '../providers/global';

@NgModule({
  declarations: [
    MyApp,
    Login,
    Registro,
    Dashboard,
    TiendaForm,
    TiendaForm2,
    TiendaForm3,
    Empleados,
    Perfil,
    Productos,
    ProductoDetalle,
    Cuenta,
    AgregarProductos,
    Estadisticas,
    Meses
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    Registro,
    Dashboard,
    TiendaForm,
    TiendaForm2,
    TiendaForm3,
    Empleados,
    Perfil,
    Productos,
    ProductoDetalle,
    Cuenta,
    AgregarProductos,
    Estadisticas,
    Meses
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Api,
    CommonFunctions,
    Global,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
