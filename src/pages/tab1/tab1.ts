
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase'
/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {
  username = '';
  email = '';
  toDoList: FirebaseListObservable<any[]>;
  newItem: '';


  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService, public firebaseProvider: FirebaseProvider) {
  
    this.toDoList = this.firebaseProvider.getToDoList();
  }

  addItem() {
    this.firebaseProvider.addItem(this.newItem);
  }
  
  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }



  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot('LoginPage')
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }

}
