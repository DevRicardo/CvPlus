import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EstudioInterface } from 'src/app/models/EstudioInterface';


@Component({
  selector: 'app-detalle-estudios',
  templateUrl: './detalle-estudios.component.html',
  styleUrls: ['./detalle-estudios.component.css']
})
export class DetalleEstudiosComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetalleEstudiosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EstudioInterface) { }

  ngOnInit() {
  }

  onCancelar(): void {
    this.dialogRef.close(this.data);
  }

}
