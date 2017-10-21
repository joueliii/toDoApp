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
export class LoginPage {

  user = {} as User;
 
 
  constructor(private nav: NavController, private afAuth: AngularFireAuth, private alertCtrl: AlertController) { }
 
  public createAccount() {
    this.nav.push('RegisterPage');
  }
 
  login(user: User) {
    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
  }
 
 
}
