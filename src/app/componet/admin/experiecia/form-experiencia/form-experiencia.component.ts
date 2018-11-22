import { Component, OnInit } from '@angular/core';
import { ExperienciaInterface } from 'src/app/models/ExperienciaInterface';
import { LoaderHelper } from 'src/app/utils/LoaderHelper';
import { Observable } from 'rxjs';
import { Upload } from 'src/app/models/Upload';
import { ExperienciaService } from 'src/app/services/Experiencia/experiencia.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material';
import { FileService } from 'src/app/services/File/file.service';
import { NgForm } from '@angular/forms';
import { ConfirmComponent } from 'src/app/componet/commons/confirm/confirm.component';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-form-experiencia',
  templateUrl: './form-experiencia.component.html',
  styleUrls: ['./form-experiencia.component.css']
})
export class FormExperienciaComponent implements OnInit {


  ourFile: File; // hold our file
  experiencia: ExperienciaInterface = {
    empresa: '',
    imagen: '',
    detalles: '',
    inicio: new Date(),
    fin: new Date(),
    actual: false
  };
  experienciaSelect: ExperienciaInterface = this.experiencia;
  loaderHelper: LoaderHelper;
  uploadPercentExperiencia: Observable<number>;
  currentUpload: Upload;
  downloadURL: Observable<string>;
  experiencias: ExperienciaInterface[];
  displayedColumns: string[] = ['Imagen', 'Empresa', 'Funciones', 'Inicio', 'Fin', 'Opciones'];
  dateNow: Date;
  create = true;

  constructor(
    private experienciaService: ExperienciaService,
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
    this.experienciaService.get().subscribe(experiencia => {
      this.experiencias = experiencia;
    });
  }

  openInput() {
    // your can use ElementRef for this later
    document.getElementById('fileInputExperiencia').click();
  }

  onActionForm(form: NgForm) {
    if ( this.create ) {
      this.onGuardarExperiencia(form);
    } else {
      this.onUpdate(form);
      this.create = true;
    }
  }

  onGuardarExperiencia(form: NgForm) {
    this.loaderHelper.openLoader();
    this.experiencia.inicio = new Date(this.experiencia.inicio);
    this.experienciaService.add(this.experiencia).then(
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

  onEdit(experiencia: ExperienciaInterface) {
    this.create = false;
    let inicio: any;
    let fin: any;
    let studioTemp: ExperienciaInterface;
    try {
        inicio = experiencia.inicio.toDate();
    } catch (e) {
        inicio = experiencia.inicio;
    }

    try {
        fin = experiencia.fin.toDate();
    } catch (e) {
        fin = experiencia.fin;
    }
    experiencia.inicio = inicio;
    experiencia.fin = fin;
    studioTemp = Object.assign({}, experiencia);
    this.experiencia = studioTemp;
  }

  onUpdate(form: NgForm) {
    this.loaderHelper.openLoader();
    this.experienciaService.update(this.experiencia).then(
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


  onDelete(experiencia: ExperienciaInterface) {
    const dialogRef = this.matDialog.open(ConfirmComponent, {
      data: {state: false, message: '¿Esta seguro de eliminar la experiencia?'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if ( result.state ) {
        this.delete(experiencia);
      }
    });

  }

  delete(experiencia: ExperienciaInterface) {
    this.loaderHelper.openLoader();
    this.experienciaService.delete(experiencia).then(
      (success) => {
        this.loaderHelper.closeLoader();
        this.toastr.success('Se eliminó correctamente', 'OK');
      },
      (error) => {
        this.loaderHelper.closeLoader();
        this.toastr.error('No se pudo eliminar la información', 'Error');
      }
    );
  }


  fileChangeExperiencia(files: File[]) {
    if (files.length > 0) {
      this.ourFile = files[0];
    }
    this.experiencia.imagen = this.ourFile.name;

    const file = this.ourFile;
    this.currentUpload = new Upload(file);
    const task = this.fileService.pushUpload(this.currentUpload);

        // observe percentage changes
        this.uploadPercentExperiencia = task.percentageChanges();
        // get notified when the download URL is available
        task.snapshotChanges().pipe(
          finalize(() => {
            this.fileService.getFileRef().getDownloadURL().subscribe(result => {
              this.experiencia.imagen = result;
            });
          })
       )
      .subscribe();
  }

  formatDate(timestam: any) {
    return new Date(timestam);
  }

}
