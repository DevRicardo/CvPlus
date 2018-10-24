import { Component, OnInit } from '@angular/core';
import { PersonalInterface } from '../../../../models/PersonalInterface';
import { PersonalService } from '../../../../services/Personal/personal.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  ourFile: File; // hold our file
  nameFile: string;
  markdown: string;

  constructor(private personalService: PersonalService) { }

  ngOnInit() {
    this.personalService.getPersonal().subscribe(personal =>{
      console.log(personal);
    });
  }

  /**
   * this is used to trigger the input
   */
  openInput() {
    // your can use ElementRef for this later
    document.getElementById('fileInput').click();
  }

  fileChange(files: File[]) {
    if (files.length > 0) {
      this.ourFile = files[0];
    }
    this.nameFile = this.ourFile.name;
  }

}
