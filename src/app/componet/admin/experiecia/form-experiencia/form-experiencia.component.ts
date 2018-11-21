import { Component, OnInit } from '@angular/core';
import { ExperienciaInterface } from 'src/app/models/ExperienciaInterface';
import { LoaderHelper } from 'src/app/utils/LoaderHelper';
import { Observable } from 'rxjs';
import { Upload } from 'src/app/models/Upload';

@Component({
  selector: 'app-form-experiencia',
  templateUrl: './form-experiencia.component.html',
  styleUrls: ['./form-experiencia.component.css']
})
export class FormExperienciaComponent implements OnInit {


  ourFile: File; // hold our file
  experiencia: ExperienciaInterface = {
    empresa: '',
    detalles: '',
    imagen: '',
    inicio: new Date(),
    fin: new Date(),
    actual: false
  };
  estudioSelect: ExperienciaInterface = this.experiencia;
  loaderHelper: LoaderHelper;
  uploadPercentEstudio: Observable<number>;
  currentUpload: Upload;
  downloadURL: Observable<string>;
  estudios: ExperienciaInterface[];
  displayedColumns: string[] = ['Imagen', 'Empresa', 'Funciones', 'Inicio', 'Fin', 'Opciones'];
  dateNow: Date;
  create = true;

  constructor() { }

  ngOnInit() {
  }

}
