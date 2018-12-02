import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ExperienciaInterface } from 'src/app/models/ExperienciaInterface';

@Component({
  selector: 'app-detalle-experiencia',
  templateUrl: './detalle-experiencia.component.html',
  styleUrls: ['./detalle-experiencia.component.css']
})
export class DetalleExperienciaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetalleExperienciaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ExperienciaInterface) { }

  ngOnInit() {
  }

  onCancelar(): void {
    this.dialogRef.close(this.data);
  }

}
