import { DocsdetailsPage } from './../docsdetails/docsdetails';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the DoctorsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctors',
  templateUrl: 'doctors.html',
})
export class DoctorsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorsPage');
  }
  PromptText() {
    let prompt = this.alertCtrl.create({
      title: 'New Text Message',
      inputs: [

        {
          name: 'title',
          placeholder: 'Title'
        },
        {
          name: 'text',
          placeholder: 'What is your problem?'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  PromptAppoinment() {
    let prompt = this.alertCtrl.create({
      title: 'Make an appoinment',
      inputs: [

        {
          name: 'title',
          placeholder: 'Title'
        },
        {
          name: 'text',
          placeholder: 'Reason ................'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
  ClickDoc(){
    this.navCtrl.push(DocsdetailsPage);
  }
}
