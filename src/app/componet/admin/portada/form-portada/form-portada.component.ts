import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { LoaderHelper } from '../../../../utils/LoaderHelper';
import { FileService } from 'src/app/services/File/file.service';
import { Upload } from 'src/app/models/Upload';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-form-portada',
  templateUrl: './form-portada.component.html',
  styleUrls: ['./form-portada.component.css']
})
export class FormPortadaComponent implements OnInit {

  ourFile: File; // hold our file
  selectedFiles: FileList;
  currentUpload: Upload;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  portada: string;
  enablePreeview: boolean;

  constructor(
    private matDialog: MatDialog,
    private fileService: FileService
  ) { }

  ngOnInit() {
    this.portada = '';
    this.enablePreeview = true;
  }


  openInput() {
    // your can use ElementRef for this later
    document.getElementById('fileInput').click();
  }

  fileChange(files: File[]) {
    if (files.length > 0) {
      this.ourFile = files[0];
    }
    this.portada = this.ourFile.name;

    const file = this.ourFile;
    this.currentUpload = new Upload(file);
    const task = this.fileService.pushUpload(this.currentUpload);

        // observe percentage changes
        this.uploadPercent = task.percentageChanges();
        // get notified when the download URL is available
        task.snapshotChanges().pipe(
          finalize(() => {

            this.portada = this.fileService.getFileRef().getDownloadURL().subscribe(result => {
              this.portada = result;
            });
          })
       )
      .subscribe();
  }

}
