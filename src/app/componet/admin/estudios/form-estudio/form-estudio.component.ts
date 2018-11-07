import { Component, OnInit } from '@angular/core';
import { EstudioInterface } from 'src/app/models/EstudioInterface';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-estudio',
  templateUrl: './form-estudio.component.html',
  styleUrls: ['./form-estudio.component.css']
})
export class FormEstudioComponent implements OnInit {


  estudio: EstudioInterface = {
    institucion: '',
    titulo: '',
    imagen: '',
    soporte: '',
    inicio: new Date(),
    fin: new Date(),
    actual: false
  };

  uploadPercentEstudio: Observable<number>;

  constructor() { }


  ngOnInit() {
  }

  openInput() {
    // your can use ElementRef for this later
    document.getElementById('fileInputEstudio').click();
  }


  onGuardarEstudio(form: NgForm) {}


  fileChangeEstudio() {}

}
