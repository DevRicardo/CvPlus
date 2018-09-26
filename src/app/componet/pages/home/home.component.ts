import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  color = 'warn';
  mode = 'determinate';
  bufferValue = 0;


  constructor() { }

  ngOnInit() {
  }

}
