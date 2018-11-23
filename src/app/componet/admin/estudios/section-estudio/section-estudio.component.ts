import { Component, OnInit } from '@angular/core';
import { EstudioInterface } from 'src/app/models/EstudioInterface';
import { EstudioService } from 'src/app/services/Estudio/estudio.service';

@Component({
  selector: 'app-section-estudio',
  templateUrl: './section-estudio.component.html',
  styleUrls: ['./section-estudio.component.css']
})
export class SectionEstudioComponent implements OnInit {


  estudios: EstudioInterface[] = [];
  estudio: EstudioInterface = {
    institucion: '',
    imagen: '',
    titulo: '',
    soporte: '',
    inicio: '',
    fin: '',
    actual: true,
  };

  constructor(
    private estudioService: EstudioService
  ) { }

  ngOnInit() {
    this.initDataFirebase();
  }

  initDataFirebase() {
    this.estudioService.get().subscribe(estudio => {
      this.estudios = estudio;
    });
  }

}
