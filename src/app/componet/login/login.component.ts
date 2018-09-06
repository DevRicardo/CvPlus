import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { LoginService } from '../../services/Login/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ResponseConstants } from '../../store/ResponseConstants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  usuario: string;
  clave: string;
  login = true;
  register = false;
  response: ResponseConstants;

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService) {

      this.usuario = data.usuario;
      this.clave = data.clave;
      this.response = new ResponseConstants();

    }

  ngOnInit() {
    this.form = this.fb.group({
      usuario: [this.usuario, []],
      clave: [ this.clave, [ ] ]
    });
  }

  loginUser() {
    this.loginService.singIn(this.usuario, this.clave)
    .then( (success) => {
      this.dialogRef.close(this.form.value);
      this.clave = '';
      this.usuario = '';
      this.router.navigate(['/dashboard']);
    })
    .catch( (err) => {
      this.clave = '';
      this.toastr.error( this.response.getMessage(err), 'Error');
    });
  }

  close() {
    this.dialogRef.close();
  }


  createUser() {
    this.loginService.registerUser(this.usuario, this.clave)
    .then(
      (success) => {
        this.router.navigate(['/dashboard']);
      }
    ).catch(
      (err) => {
        console.log(err);
        this.toastr.error( this.response.getMessage(err), 'Error');
      }
    );
  }





  activeRegister(estado: boolean) {
    if ( estado ) {
      this.register = true;
      this.login = false;
    } else {
      this.register = false;
      this.login = true;
    }
  }

}
