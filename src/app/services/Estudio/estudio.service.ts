import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EstudioInterface } from 'src/app/models/EstudioInterface';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  estudioCollection: AngularFirestoreCollection<EstudioInterface>;
  estudio: Observable<EstudioInterface[]>;
  estudioDocument: AngularFirestoreDocument<EstudioInterface>;

  constructor(public afs: AngularFirestore) {
    this.estudioCollection = this.afs.collection<EstudioInterface>('estudios');
  }

  get() {
    this.estudio = this.estudioCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as EstudioInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.estudio;
  }

  add(estudio: EstudioInterface) {
    return this.estudioCollection.add(estudio);
  }

  update(estudio: EstudioInterface) {
    this.estudioDocument = this.afs.doc(`/estudios/${estudio.id}`);
    return this.estudioDocument.update(estudio);

  }
}
