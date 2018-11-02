import { Component, OnInit } from '@angular/core';
import { HabilidadInterface } from 'src/app/models/HabilidadInterface';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material';
import { FileService } from 'src/app/services/File/file.service';
import { LoaderHelper } from 'src/app/utils/LoaderHelper';
import { Observable } from 'rxjs';
import { Upload } from 'src/app/models/Upload';
import { finalize } from 'rxjs/operators';
import { HabilidadService } from 'src/app/services/Habilidad/habilidad.service';
import { NgForm } from '@angular/forms';


const ELEMENT_DATA: HabilidadInterface[] = [
  {imagen: '', nombre: 'Hydrogen', value: 0, descripcion: ''}
];



@Component({
  selector: 'app-form-habilidad',
  templateUrl: './form-habilidad.component.html',
  styleUrls: ['./form-habilidad.component.css']
})
export class FormHabilidadComponent implements OnInit {

  displayedColumns: string[] = ['Imagen', 'Nombre', 'Valor'];

  ourFile: File; // hold our file
  habilidad: HabilidadInterface = {
    nombre: '',
    imagen: '',
    descripcion: '',
    value: 0
  };
  loaderHelper: LoaderHelper;
  uploadPercentHabilidad: Observable<number>;
  currentUpload: Upload;
  downloadURL: Observable<string>;
  habilidades: HabilidadInterface[];

  constructor(
    private toastr: ToastrService,
    private matDialog: MatDialog,
    private fileService: FileService,
    private habilidadService: HabilidadService
    ) {
      this.loaderHelper = new LoaderHelper(this.matDialog);
    }

  ngOnInit() {
    this.initDataFirebase();
  }

  initDataFirebase() {
    this.habilidadService.get().subscribe(habilidad => {
      this.habilidades = habilidad;
    });
  }

  onGuardarHabilidad(form: NgForm) {
    this.loaderHelper.openLoader();
    const dateNow = Date.now();
    this.habilidadService.add(this.habilidad).then(
      (success) => {
        this.loaderHelper.closeLoader();
        this.toastr.success('Se guardo correctamente', 'OK');
        form.reset();
      },
      (error) => {
        this.loaderHelper.closeLoader();
        this.toastr.error('No se pudo guardar la información', 'Error');
      }
    );
  }

  openInput() {
    // your can use ElementRef for this later
    document.getElementById('fileInputHabilidad').click();
  }

  fileChangeHabilidad(files: File[]) {
    if (files.length > 0) {
      this.ourFile = files[0];
    }
    this.habilidad.imagen = this.ourFile.name;

    const file = this.ourFile;
    this.currentUpload = new Upload(file);
    const task = this.fileService.pushUpload(this.currentUpload);

        // observe percentage changes
        this.uploadPercentHabilidad = task.percentageChanges();
        // get notified when the download URL is available
        task.snapshotChanges().pipe(
          finalize(() => {
            this.fileService.getFileRef().getDownloadURL().subscribe(result => {
              this.habilidad.imagen = result;
            });
          })
       )
      .subscribe();
  }

}
