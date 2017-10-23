import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import * as firebase from "firebase";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private googlePlus: GooglePlus) {

  }
  login(){
    this.googlePlus.login({
      'webClientId':'806510472483-q4gmkrkthp7kqu7e4qi61r8qncbvupkc.apps.googleusercontent.com',
      'offline': true
    })
    .then((res)=>{
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      .then((succ)=>{
        console.log(succ);
        alert('Login Sucess')
      })
      .catch((err)=>{
        alert('Login Err')
        console.error(err);
      })
    })
  }

}
