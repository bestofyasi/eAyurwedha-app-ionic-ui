import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipsMedicinePage } from './tips-medicine';

@NgModule({
  declarations: [
    TipsMedicinePage,
  ],
  imports: [
    IonicPageModule.forChild(TipsMedicinePage),
  ],
})
export class TipsMedicinePageModule {}
