import { Component, OnInit } from '@angular/core';
import { EstudioInterface } from 'src/app/models/EstudioInterface';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { EstudioService } from 'src/app/services/Estudio/estudio.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material';
import { FileService } from 'src/app/services/File/file.service';
import { LoaderHelper } from 'src/app/utils/LoaderHelper';
import { Upload } from 'src/app/models/Upload';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-form-estudio',
  templateUrl: './form-estudio.component.html',
  styleUrls: ['./form-estudio.component.css']
})
export class FormEstudioComponent implements OnInit {


  ourFile: File; // hold our file
  estudio: EstudioInterface = {
    institucion: '',
    titulo: '',
    imagen: '',
    soporte: '',
    inicio: new Date(),
    fin: new Date(),
    actual: false
  };
  estudioSelect: EstudioInterface = this.estudio;
  loaderHelper: LoaderHelper;
  uploadPercentEstudio: Observable<number>;
  currentUpload: Upload;
  downloadURL: Observable<string>;
  estudios: EstudioInterface[];
  displayedColumns: string[] = ['Imagen', 'Institución', 'Titulo', 'Opciones'];
  dateNow: Date;
  create = true;

  constructor(
    private estudioService: EstudioService,
    private toastr: ToastrService,
    private matDialog: MatDialog,
    private fileService: FileService,
  ) {
    this.loaderHelper = new LoaderHelper(this.matDialog);
   }


  ngOnInit() {
    this.initDataFirebase();
  }

  initDataFirebase() {
    this.estudioService.get().subscribe(estudio => {
      this.estudios = estudio;
    });
  }

  openInput() {
    // your can use ElementRef for this later
    document.getElementById('fileInputEstudio').click();
  }

  onActionForm(form: NgForm) {
    if ( this.create ) {
      this.onGuardarEstudio(form);
    } else {
      this.onUpdate(form);
      this.create = true;
    }
  }


  onGuardarEstudio(form: NgForm) {
    this.loaderHelper.openLoader();
    this.estudio.inicio = new Date(this.estudio.inicio);
    this.estudioService.add(this.estudio).then(
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


  onEdit(estudio: EstudioInterface) {
    this.create = false;
    let inicio: any;
    let fin: any;
    let studioTemp: EstudioInterface;
    try {
        inicio = estudio.inicio.toDate();
    } catch (e) {
        inicio = estudio.inicio;
    }

    try {
        fin = estudio.fin.toDate();
    } catch (e) {
        fin = estudio.fin;
    }
    estudio.inicio = inicio;
    estudio.fin = fin;
    studioTemp = Object.assign(estudio);
    this.estudio = studioTemp;
  }

  onUpdate(form: NgForm) {
    this.loaderHelper.openLoader();
    this.estudioService.update(this.estudio).then(
      (success) => {
        this.loaderHelper.closeLoader();
        this.toastr.success('Se actualizo correctamente', 'OK');
        form.reset();
      },
      (error) => {
        this.loaderHelper.closeLoader();
        this.toastr.error('No se pudo actualizar la información', 'Error');
      }
    );
  }

  resetForm(form: NgForm) {
    form.reset();
  }


  fileChangeEstudio(files: File[]) {
    if (files.length > 0) {
      this.ourFile = files[0];
    }
    this.estudio.imagen = this.ourFile.name;

    const file = this.ourFile;
    this.currentUpload = new Upload(file);
    const task = this.fileService.pushUpload(this.currentUpload);

        // observe percentage changes
        this.uploadPercentEstudio = task.percentageChanges();
        // get notified when the download URL is available
        task.snapshotChanges().pipe(
          finalize(() => {
            this.fileService.getFileRef().getDownloadURL().subscribe(result => {
              this.estudio.imagen = result;
            });
          })
       )
      .subscribe();
  }

}
