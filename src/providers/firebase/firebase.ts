import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) { }

  getToDoList() {
    return this.afd.list('/toDoList/');
  }

  addItem(name) {

    this.afd.list('/toDoList/').push(name);
  }

  removeItem(id) {
    this.afd.list('/toDoList/').remove(id);
  }


}
