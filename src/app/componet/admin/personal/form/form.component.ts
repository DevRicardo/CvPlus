import { Component, OnInit } from '@angular/core';
import { PersonalInterface } from '../../../../models/PersonalInterface';
import { PersonalService } from '../../../../services/Personal/personal.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  ourFile: File; // hold our file
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
        console.log(this.personal);
      }
    });
  }

  /**
   * this is used to trigger the input
   */
  openInput() {
    // your can use ElementRef for this later
    document.getElementById('fileInput').click();
  }

  onGuardarPersonal(form: NgForm) {
    const dateNow = Date.now();
    if ( this.personalList.length === 0 ) {
      this.personalService.add(this.personal);
    } else {
      this.personalService.update(this.personal);
    }
  }

  fileChange(files: File[]) {
    if (files.length > 0) {
      this.ourFile = files[0];
    }
    this.personal.imagen = this.ourFile.name;
  }

}
