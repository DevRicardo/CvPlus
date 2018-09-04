import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { LoginService } from '../../services/Login/login.service';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private loginService: LoginService,
    private router: Router) {

      console.log(data.title);
      this.usuario = data.usuario;
      this.clave = data.clave;

    }

  ngOnInit() {
    this.form = this.fb.group({
      usuario: [this.usuario, []],
      clave: [ this.clave, [ ] ]
    });
  }

  loginUser() {
    this.dialogRef.close(this.form.value);
    this.loginService.getUserDetails(this.usuario, this.clave);
    console.log(this.usuario + ' //// ' + this.clave);
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
