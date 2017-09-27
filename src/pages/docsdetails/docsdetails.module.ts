import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocsdetailsPage } from './docsdetails';

@NgModule({
  declarations: [
    DocsdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DocsdetailsPage),
  ],
})
export class DocsdetailsPageModule {}
