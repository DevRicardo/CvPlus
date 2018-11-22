import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ExperienciaInterface } from 'src/app/models/ExperienciaInterface';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  experienciaCollection: AngularFirestoreCollection<ExperienciaInterface>;
  experiencia: Observable<ExperienciaInterface[]>;
  experienciaDocument: AngularFirestoreDocument<ExperienciaInterface>;

  constructor(public afs: AngularFirestore) {
    this.experienciaCollection = this.afs.collection<ExperienciaInterface>('experiencias');
  }

  get() {
    this.experiencia = this.experienciaCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ExperienciaInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.experiencia;
  }

  add(experiencia: ExperienciaInterface) {
    return this.experienciaCollection.add(experiencia);
  }

  update(experiencia: ExperienciaInterface) {
    this.experienciaDocument = this.afs.doc(`/experiencias/${experiencia.id}`);
    return this.experienciaDocument.update(experiencia);

  }

  delete(experiencia: ExperienciaInterface) {
    this.experienciaDocument = this.afs.doc(`/experiencias/${experiencia.id}`);
    return this.experienciaDocument.delete();
  }
}
