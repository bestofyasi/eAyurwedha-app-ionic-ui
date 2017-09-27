import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppoimentsPage } from './appoiments';

@NgModule({
  declarations: [
    AppoimentsPage,
  ],
  imports: [
    IonicPageModule.forChild(AppoimentsPage),
  ],
})
export class AppoimentsPageModule {}
