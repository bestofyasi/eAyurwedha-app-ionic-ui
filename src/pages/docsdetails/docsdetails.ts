import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the DocsdetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-docsdetails',
  templateUrl: 'docsdetails.html',
})
export class DocsdetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocsdetailsPage');
  }
  PromptReview() {
    let prompt = this.alertCtrl.create({
      title: 'Rate Me',
      message: 'Give a rate out of 5',
      inputs: [

        {
          name: 'rate',
          placeholder: '*****'
        },
        {
          name: 'review',
          placeholder: 'Review'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}
