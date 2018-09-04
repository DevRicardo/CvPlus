import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClientModule,
    private afAuth: AngularFireAuth
  ) { }

  getUserDetails(usuario: string, clave: string){}

  registerUser(usuario: string, clave: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(usuario, clave)
      .then(
        userData => resolve(userData),
        err => reject(err)
      );
    });
  }


  singIn(usuario: string, clave: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(usuario, clave)
      .then(
        userData => resolve(userData),
        err => reject(err)
      );
    });
  }

  getAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  singOut() {
    return this.afAuth.auth.signOut();
  }
}
