import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

// This is the Login Page where the magic happens, we initialize the angularfireauth and use it to connect to a firebase database where the login information is located -Saku 1700009
export class LoginPage {

  user = {} as User;
 
 
  constructor(private nav: NavController, private afAuth: AngularFireAuth, private alertCtrl: AlertController) { }
// These functions are for the login and register buttons, register pushes us to register page -Saku
  public createAccount() {
    this.nav.push('RegisterPage');
  }
 
  async login(user: User) {
    const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
    if (result) {
      this.nav.setRoot('TabsPage');
    }
  }
 
 
}
