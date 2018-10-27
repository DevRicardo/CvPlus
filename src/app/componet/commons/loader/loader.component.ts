import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  message: string;
  constructor(
    private dialogRef: MatDialogRef<LoaderComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.message = data.message;
    }

  ngOnInit() {
  }

}
