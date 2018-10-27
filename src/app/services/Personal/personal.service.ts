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
    // this.personal = afs.collection('personal').valueChanges();
    this.personalCollection = afs.collection<PersonalInterface>('personal');
  }

  getPersonal() {
    this.personal = this.personalCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as PersonalInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.personal;
  }

  add(personal: PersonalInterface) {
    return this.personalCollection.add(personal);
  }

  update(personal: PersonalInterface) {
    this.personalDocument = this.afs.doc(`/personal/${personal.id}`);
    return this.personalDocument.update(personal);

  }
}
