import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';

import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { TiendaFormPage } from '../pages/tienda-form/tienda-form';
import { TiendaForm2Page } from '../pages/tienda-form2/tienda-form2';
import { TiendaForm3Page } from '../pages/tienda-form3/tienda-form3';
import { EmpleadosPage } from '../pages/empleados/empleados';
import { PerfilPage } from '../pages/perfil/perfil';
import { ProductosPage } from '../pages/productos/productos';
import { ProductoDetallePage } from '../pages/producto-detalle/producto-detalle';
import { CuentaPage } from '../pages/cuenta/cuenta';
import { AgregarProductosPage } from '../pages/agregar-productos/agregar-productos';

import { Api } from '../providers/api';
import { CommonFunctions } from '../providers/common-functions';
import { Global } from '../providers/global';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegistroPage,
    DashboardPage,
    TiendaFormPage,
    TiendaForm2Page,
    TiendaForm3Page,
    EmpleadosPage,
    PerfilPage,
    ProductosPage,
    ProductoDetallePage,
    CuentaPage,
    AgregarProductosPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegistroPage,
    DashboardPage,
    TiendaFormPage,
    TiendaForm2Page,
    TiendaForm3Page,
    EmpleadosPage,
    PerfilPage,
    ProductosPage,
    ProductoDetallePage,
    CuentaPage,
    AgregarProductosPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage,
    Api,
    CommonFunctions,
    Global
  ]
})
export class AppModule {}
