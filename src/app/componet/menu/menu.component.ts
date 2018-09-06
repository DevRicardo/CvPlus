import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../../services/Login/login.service';
import { ResponseConstants } from '../../store/ResponseConstants';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  response: ResponseConstants;
  private isLogin: boolean;
  private nombreUsuario: string;
  private emailUsuario: string;

  constructor(public dialog: MatDialog,
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router) {

      this.response = new ResponseConstants();

    }

  ngOnInit() {
    this.loginService.getAuth().subscribe( auth => {
      if ( auth ) {
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
        this.emailUsuario = auth.email;
      } else {
        this.isLogin = false;
      }
    });
  }

  openFormLogin() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: 'Inicio de sesión'
    };

    const dialogRef = this.dialog.open(LoginComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  singOut() {
    this.loginService.singOut()
    .then( (success) => {
      console.log(success);
      this.router.navigate(['/home']);
    })
    .catch( (err) => {
      console.log(err);
      this.toastr.error('No se puede salir del sistema', 'Error');
    });
  }

}
