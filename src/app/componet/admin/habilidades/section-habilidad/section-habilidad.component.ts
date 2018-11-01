import { Component, OnInit } from '@angular/core';
import { HabilidadInterface } from 'src/app/models/HabilidadInterface';

@Component({
  selector: 'app-section-habilidad',
  templateUrl: './section-habilidad.component.html',
  styleUrls: ['./section-habilidad.component.css']
})
export class SectionHabilidadComponent implements OnInit {

  color = 'warn';
  mode = 'determinate';
  bufferValue = 0;
  demo: HabilidadInterface[] = [];
  habilidades: HabilidadInterface[] = [];
  itemHabilidad: HabilidadInterface = {
    imagen: '',
    value: 0,
    descripcion: ''
  };
  constructor() {
    this.habilidades.push(this.itemHabilidad);
    console.log(this.demo);
  }

  ngOnInit() {
    console.log(this.habilidades);
  }

}
