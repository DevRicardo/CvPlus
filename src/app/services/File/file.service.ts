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
  constructor(private storage: AngularFireStorage) {}

  pushUpload(upload: Upload) {
    this.fileRef = this.storage.ref(`${this.basePath}`);

    const task = this.storage.upload(`${this.basePath}/${upload.name}`, upload.file);

     return task;

  }

  getFileRef() {
    return this.fileRef;
  }
}
