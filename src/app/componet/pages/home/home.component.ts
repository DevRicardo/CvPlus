import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pictures = [
    {
      id: 1,
      title: 'JavaScript',
      img: '../../../../assets/logos/javascript.svg'
    },
    {
      id: 2,
      title: 'Angular',
      img: '../../../../assets/logos/angular.svg'
    },
    {
      id: 3,
      title: 'Java',
      img: '../../../../assets/logos/java.svg'
    },
    {
      id: 4,
      title: 'Php',
      img: '../../../../assets/logos/php.svg'
    },
    {
      id: 5,
      title: 'Spring Boot',
      img: '../../../../assets/logos/angular.svg'
    },
    {
      id: 6,
      title: 'Groovy',
      img: '../../../../assets/logos/java.svg'
    },
];

  constructor() { }

  ngOnInit() {
  }

}
