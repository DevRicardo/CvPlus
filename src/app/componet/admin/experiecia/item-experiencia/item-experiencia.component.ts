import { Component, OnInit, Input } from '@angular/core';
import { ExperienciaInterface } from 'src/app/models/ExperienciaInterface';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DetalleExperienciaComponent } from '../../detalle-experiencia/detalle-experiencia.component';

@Component({
  selector: 'app-item-experiencia',
  templateUrl: './item-experiencia.component.html',
  styleUrls: ['./item-experiencia.component.css']
})
export class ItemExperienciaComponent implements OnInit {

  private dialogConfig;

  @Input() public experiencia: ExperienciaInterface;

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
    this.dialogConfig.data = this.experiencia;
    this.matDialog.open(DetalleExperienciaComponent, this.dialogConfig);
  }

}
