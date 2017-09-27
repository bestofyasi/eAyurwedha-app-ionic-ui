import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocspagePage } from './docspage';

@NgModule({
  declarations: [
    DocspagePage,
  ],
  imports: [
    IonicPageModule.forChild(DocspagePage),
  ],
})
export class DocspagePageModule {}
