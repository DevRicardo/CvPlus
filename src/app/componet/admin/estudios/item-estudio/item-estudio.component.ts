import { Component, OnInit, Input } from '@angular/core';
import { EstudioInterface } from 'src/app/models/EstudioInterface';

@Component({
  selector: 'app-item-estudio',
  templateUrl: './item-estudio.component.html',
  styleUrls: ['./item-estudio.component.css']
})
export class ItemEstudioComponent implements OnInit {

  @Input() public estudio: EstudioInterface;

  constructor() { }

  ngOnInit() {
  }

}
