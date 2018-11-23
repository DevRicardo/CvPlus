import { Component, OnInit, Input } from '@angular/core';
import { ExperienciaInterface } from 'src/app/models/ExperienciaInterface';

@Component({
  selector: 'app-item-experiencia',
  templateUrl: './item-experiencia.component.html',
  styleUrls: ['./item-experiencia.component.css']
})
export class ItemExperienciaComponent implements OnInit {

  @Input() public experiencia: ExperienciaInterface;

  constructor() { }

  ngOnInit() {
  }

}
