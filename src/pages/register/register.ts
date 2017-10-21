import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import {AngularFireAuth} from "angularfire2/auth";
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
 
  constructor(private nav: NavController, private afAuth: AngularFireAuth, private alertCtrl: AlertController) { }
 


 
  async register(user: User) {

  const result2 = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);

    if (result2) {
      this.nav.setRoot('LoginPage')
    }
  }
  
}
