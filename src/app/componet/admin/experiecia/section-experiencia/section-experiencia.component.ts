import { Component, OnInit } from '@angular/core';
import { ExperienciaInterface } from 'src/app/models/ExperienciaInterface';
import { ExperienciaService } from 'src/app/services/Experiencia/experiencia.service';

@Component({
  selector: 'app-section-experiencia',
  templateUrl: './section-experiencia.component.html',
  styleUrls: ['./section-experiencia.component.css']
})
export class SectionExperienciaComponent implements OnInit {

  experiencias: ExperienciaInterface[];


  constructor(
    private experienciaService: ExperienciaService
  ) { }

  ngOnInit() {
    this.initDataFirebase();
  }

  initDataFirebase() {
    this.experienciaService.get().subscribe(experiencia => {
      this.experiencias = experiencia;
    });
  }



}
