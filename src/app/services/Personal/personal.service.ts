import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
import { PersonalInterface } from '../../models/PersonalInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  personalCollection: AngularFirestoreCollection<PersonalInterface>;
  personal: Observable<PersonalInterface[]>;
  personalDocument: AngularFirestoreDocument<PersonalInterface>;

  constructor(public afs: AngularFirestore) {
    this.personal = afs.collection('personal').valueChanges();
  }

  getPersonal() {
    return this.personal;
  }
}
