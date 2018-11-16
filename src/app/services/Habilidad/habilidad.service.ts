import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { HabilidadInterface } from 'src/app/models/HabilidadInterface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  habilidadCollection: AngularFirestoreCollection<HabilidadInterface>;
  habilidad: Observable<HabilidadInterface[]>;
  habilidadDocument: AngularFirestoreDocument<HabilidadInterface>;

  constructor(public afs: AngularFirestore) {
    this.habilidadCollection = afs.collection<HabilidadInterface>('habilidades');
  }


  get() {
    this.habilidad = this.habilidadCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as HabilidadInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.habilidad;
  }

  add(habilidad: HabilidadInterface) {
    return this.habilidadCollection.add(habilidad);
  }

  update(habilidad: HabilidadInterface) {
    this.habilidadDocument = this.afs.doc(`/habilidades/${habilidad.id}`);
    return this.habilidadDocument.update(habilidad);
  }

  delete(habilidad: HabilidadInterface) {
    this.habilidadDocument = this.afs.doc(`/habilidades/${habilidad.id}`);
    return this.habilidadDocument.delete();
  }
}
