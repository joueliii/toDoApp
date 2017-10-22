import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab3',
  templateUrl: 'tab3.html',
})
export class Tab3Page {
  afAuth: any;
  nav: any;
  auth: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab3Page');
  }

  public logout() {
    this.afAuth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }

}