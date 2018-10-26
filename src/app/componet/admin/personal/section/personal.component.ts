import { Component, OnInit } from '@angular/core';
import { PersonalInterface } from '../../../../models/PersonalInterface';
import { PersonalService } from '../../../../services/Personal/personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  personal: PersonalInterface = {
    nombre: '',
    ocupacion: '',
    email: '',
    linkedin: '',
    github: '',
    imagen: '',
    presentacion: ''
  };
  personalList: PersonalInterface[];

  constructor(private personalService: PersonalService) { }

  ngOnInit() {
    this.personalService.getPersonal().subscribe(personal => {
      this.personalList = personal;
      if ( this.personalList.length !== 0 ) {
        this.personal = this.personalList[0];
      }
    });
  }

}
