import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { LoaderHelper } from '../../../../utils/LoaderHelper';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { FileService } from 'src/app/services/File/file.service';
import { PortadaInterface } from '../../../../models/PortadaInterface';
import { PortadaService } from '../../../../services/Portada/portada.service';
import { ToastrService } from 'ngx-toastr';
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
  portada: PortadaInterface = {
    imagen: ''
  };
  portadaList: PortadaInterface[];
  enablePreeview: boolean;
  private loaderHelper: LoaderHelper;

  constructor(
    private matDialog: MatDialog,
    private fileService: FileService,
    private portadaService: PortadaService,
    private toastr: ToastrService,
  ) {
    this.loaderHelper = new LoaderHelper(this.matDialog);
  }

  ngOnInit() {
    this.enablePreeview = true;
    this.initDataFirebase();
  }

  initDataFirebase() {
    this.portadaService.get().subscribe(portada => {
      this.portadaList = portada;
      if ( this.portadaList.length !== 0 ) {
        this.portada = this.portadaList[0];
      }
    });
  }

  onGuardarPortada(form: NgForm) {
    this.loaderHelper.openLoader();
    const dateNow = Date.now();
    if ( this.portadaList.length === 0 ) {
      this.portadaService.add(this.portada).then(
        (success) => {
          this.loaderHelper.closeLoader();
          this.toastr.success('Se guardo correctamente', 'OK');
        },
        (error) => {
          this.loaderHelper.closeLoader();
          this.toastr.error('No se pudo guardar la información', 'Error');
        }
      );
    } else {
      this.portadaService.update(this.portada).then(
        (success) => {
          this.loaderHelper.closeLoader();
          this.toastr.success('Se guardo correctamente', 'OK');
        },
        (error) => {
          this.loaderHelper.closeLoader();
          this.toastr.error('No se pudo guardar la información', 'Error');
        }
      );
    }
  }


  openInput() {
    // your can use ElementRef for this later
    document.getElementById('fileInput').click();
  }

  fileChange(files: File[]) {
    if (files.length > 0) {
      this.ourFile = files[0];
    }
    this.portada.imagen = this.ourFile.name;

    const file = this.ourFile;
    this.currentUpload = new Upload(file);
    const task = this.fileService.pushUpload(this.currentUpload);

        // observe percentage changes
        this.uploadPercent = task.percentageChanges();
        // get notified when the download URL is available
        task.snapshotChanges().pipe(
          finalize(() => {

            this.fileService.getFileRef().getDownloadURL().subscribe(result => {
              this.portada.imagen = result;
            });
          })
       )
      .subscribe();
  }

}
