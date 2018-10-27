import { LoaderComponent } from 'src/app/componet/commons/loader/loader.component';
import {MatDialogConfig} from '@angular/material';

export class LoaderHelper {

    private dialogConfig;
    private message;

    constructor(public dialog: any) {
        this.dialogConfig = new MatDialogConfig();
        this.message = 'Cargando';
    }

    setMessage(message: string) {
        this.message = message;
    }

    openLoader() {
        this.dialogConfig.disableClose = true;
        this.dialogConfig.autoFocus = true;
        this.dialogConfig.data = {
        message: this.message
        };

        this.dialog.open(LoaderComponent, this.dialogConfig);
    }

    closeLoader() {
        this.dialog.closeAll();
    }
}
