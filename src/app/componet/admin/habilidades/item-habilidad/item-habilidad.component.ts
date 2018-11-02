import { Component, OnInit, Input } from '@angular/core';
import { HabilidadInterface } from 'src/app/models/HabilidadInterface';

@Component({
  selector: 'app-item-habilidad',
  templateUrl: './item-habilidad.component.html',
  styleUrls: ['./item-habilidad.component.css']
})
export class ItemHabilidadComponent implements OnInit {

  @Input() public habilidad: HabilidadInterface;

  color = 'warn';
  mode = 'determinate';
  constructor() { }

  ngOnInit() {
  }

}
