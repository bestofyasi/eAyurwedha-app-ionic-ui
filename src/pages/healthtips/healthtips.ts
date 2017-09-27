import { TipsTreatmetPage } from './../tips-treatmet/tips-treatmet';
import { TipsMedicinePage } from './../tips-medicine/tips-medicine';
import { TipsGenaralPage } from './../tips-genaral/tips-genaral';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HealthtipsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-healthtips',
  templateUrl: 'healthtips.html',
})
export class HealthtipsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HealthtipsPage');
  }
  ClickGenaral(){
    this.navCtrl.push(TipsGenaralPage);
  }
  ClickMedicine(){
    this.navCtrl.push(TipsMedicinePage);
  }
  ClickTreatment(){
    this.navCtrl.push(TipsTreatmetPage);
  }
}
