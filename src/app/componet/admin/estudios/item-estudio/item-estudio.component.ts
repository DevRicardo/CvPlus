import { Component, OnInit, Input } from '@angular/core';
import { EstudioInterface } from 'src/app/models/EstudioInterface';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DetalleEstudiosComponent } from '../../detalle-estudios/detalle-estudios.component';

@Component({
  selector: 'app-item-estudio',
  templateUrl: './item-estudio.component.html',
  styleUrls: ['./item-estudio.component.css']
})
export class ItemEstudioComponent implements OnInit {

  private dialogConfig;

  @Input() public estudio: EstudioInterface;

  constructor(
    private matDialog: MatDialog,
  ) {
    this.dialogConfig = new MatDialogConfig();
  }

  ngOnInit() {
  }


  showDetails() {
    this.dialogConfig.disableClose = false;
    this.dialogConfig.autoFocus = true;
    this.dialogConfig.data = this.estudio;
    this.matDialog.open(DetalleEstudiosComponent, this.dialogConfig);
  }

}
