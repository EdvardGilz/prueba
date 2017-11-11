import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TiendaFormPage } from './tienda-form';

@NgModule({
  declarations: [
    TiendaFormPage,
  ],
  imports: [
    IonicPageModule.forChild(TiendaFormPage),
  ],
})
export class TiendaFormPageModule {}
