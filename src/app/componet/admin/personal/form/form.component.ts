import { Component, OnInit } from '@angular/core';
import { PersonalInterface } from '../../../../models/PersonalInterface';
import { PersonalService } from '../../../../services/Personal/personal.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ToastrService } from 'ngx-toastr';
import {MatDialog} from '@angular/material';
import { LoaderHelper } from '../../../../utils/LoaderHelper';
import { FileService } from 'src/app/services/File/file.service';
import { Upload } from 'src/app/models/Upload';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  ourFile: File; // hold our file
  personal: PersonalInterface = {
    nombre: '',
    ocupacion: '',
    email: '',
    linkedin: '',
    github: '',
    imagen: '',
    presentacion: ''
  };
  personalList: PersonalInterface[];
  private loaderHelper: LoaderHelper;
  selectedFiles: FileList;
  currentUpload: Upload;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(
    private personalService: PersonalService,
    private toastr: ToastrService,
    private matDialog: MatDialog,
    private fileService: FileService
  ) {
    this.loaderHelper = new LoaderHelper(this.matDialog);
   }

  initDataFirebase() {
    this.personalService.getPersonal().subscribe(personal => {
      this.personalList = personal;
      if ( this.personalList.length !== 0 ) {
        this.personal = this.personalList[0];
      }
    });
  }

  ngOnInit() {
    this.initDataFirebase();
  }

  /**
   * this is used to trigger the input
   */
  openInput() {
    // your can use ElementRef for this later
    document.getElementById('fileInput').click();
  }

  onGuardarPersonal(form: NgForm) {
    this.loaderHelper.openLoader();
    const dateNow = Date.now();
    if ( this.personalList.length === 0 ) {
      this.personalService.add(this.personal).then(
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
      this.personalService.update(this.personal).then(
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

  fileChange(files: File[]) {
    if (files.length > 0) {
      this.ourFile = files[0];
    }
    this.personal.imagen = this.ourFile.name;

    const file = this.ourFile;
    this.currentUpload = new Upload(file);
    const task = this.fileService.pushUpload(this.currentUpload);

        // observe percentage changes
        this.uploadPercent = task.percentageChanges();
        // get notified when the download URL is available
        task.snapshotChanges().pipe(
          finalize(() => {

            this.personal.imagen = this.fileService.getFileRef().getDownloadURL().subscribe(result => {
              this.personal.imagen = result;
            });
          })
       )
      .subscribe();
  }
}
