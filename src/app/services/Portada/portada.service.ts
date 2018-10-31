import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
import { PortadaInterface } from '../../models/PortadaInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortadaService {

  portadaCollection: AngularFirestoreCollection<PortadaInterface>;
  portada: Observable<PortadaInterface[]>;
  portadaDocument: AngularFirestoreDocument<PortadaInterface>;

  constructor(public afs: AngularFirestore) {
    this.portadaCollection = afs.collection<PortadaInterface>('portada');
  }

  get() {
    this.portada = this.portadaCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as PortadaInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.portada;
  }

  add(portada: PortadaInterface) {
    return this.portadaCollection.add(portada);
  }

  update(portada: PortadaInterface) {
    this.portadaDocument = this.afs.doc(`/portada/${portada.id}`);
    return this.portadaDocument.update(portada);

  }
}
