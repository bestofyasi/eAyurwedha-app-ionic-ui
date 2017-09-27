import { HealthtipsPage } from './../healthtips/healthtips';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
logout(){
  this.navCtrl.push(LoginPage);
}
ClickHealthTips(){
  this.navCtrl.push(HealthtipsPage);
}
}
