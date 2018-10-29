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
    /*this.storageRef = this.app.storage().ref();
    this.uploadTask = this.storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    this.uploadTask.on(this.app.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        
        console.log(error);
      },
      () => {
        
        upload.url = this.uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
      }
    );*/
    
    const task = this.storage.upload(this.basePath, upload.file);

     return task;

  }

  getFileRef() {
    return this.fileRef;
  }
}
