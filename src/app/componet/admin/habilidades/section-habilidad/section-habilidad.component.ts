import { Component, OnInit } from '@angular/core';
import { HabilidadInterface } from 'src/app/models/HabilidadInterface';
import { HabilidadService } from 'src/app/services/Habilidad/habilidad.service';

@Component({
  selector: 'app-section-habilidad',
  templateUrl: './section-habilidad.component.html',
  styleUrls: ['./section-habilidad.component.css']
})
export class SectionHabilidadComponent implements OnInit {

  bufferValue = 0;
  demo: HabilidadInterface[] = [];
  habilidades: HabilidadInterface[] = [];
  itemHabilidad: HabilidadInterface = {
    imagen: '',
    value: 0,
    descripcion: ''
  };
  constructor(
    private habilidadService: HabilidadService
    ) {}

  initDataFirebase() {
    this.habilidadService.get().subscribe(habilidad => {
      this.habilidades = habilidad;
    });
  }

  ngOnInit() {
    this.initDataFirebase();
  }

}
