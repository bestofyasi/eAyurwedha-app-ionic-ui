import { Component } from '@angular/core';
import {AlertController, IonicPage,  NavController,  NavParams} from 'ionic-angular';

/**
 * Generated class for the ForumPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {
    constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumPage');
  }
  addPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'New Question',
      message: "Enter a title for this new question you're so keen on adding",
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
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
  searchPrompt(){
    let prompt = this.alertCtrl.create({
      title: '',
      message: "",
      inputs: [

        {
          name: 'title',
          placeholder: 'Search'
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
          text: 'Search',
          handler: data => {
            console.log('Search clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}
