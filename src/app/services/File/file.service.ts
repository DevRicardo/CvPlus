import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Upload } from 'src/app/models/Upload';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private basePath = '/uploads';
  storageRef;
  uploadTask;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  fileRef;
  dateUpload: Date;
  constructor(private storage: AngularFireStorage) {
    this.dateUpload = new Date();
  }

  pushUpload(upload: Upload) {

    const sufijo = this.dateUpload.getDate();

    this.fileRef = this.storage.ref(`${this.basePath}/${upload.name}`);

    const task = this.storage.upload(`${this.basePath}/${upload.name}_${sufijo}`, upload.file);

     return task;

  }

  getFileRef() {
    return this.fileRef;
  }
}
