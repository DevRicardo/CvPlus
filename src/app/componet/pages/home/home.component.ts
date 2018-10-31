import { Component, OnInit } from '@angular/core';
import { PortadaInterface } from 'src/app/models/PortadaInterface';
import { PortadaService } from 'src/app/services/Portada/portada.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  color = 'warn';
  mode = 'determinate';
  bufferValue = 0;

  portada: PortadaInterface = {
    imagen: ''
  };
  portadaList: PortadaInterface[];


  constructor(private portadaService: PortadaService) { }

  ngOnInit() {
    this.portadaService.get().subscribe(personal => {
      this.portadaList = personal;
      if ( this.portadaList.length !== 0 ) {
        this.portada = this.portadaList[0];

        this.portada.imagen = `url(${this.portada.imagen})`;

      }
    });
  }

}
