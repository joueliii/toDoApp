import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth2: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab3Page');
  }

  public logout() {
    this.afAuth2.auth.signOut().then(succ => {
      this.navCtrl.parent.parent.setRoot('LoginPage')
      //'parent' definition added so that tabs aren't seen when logged out -Joel
    });
  }

}