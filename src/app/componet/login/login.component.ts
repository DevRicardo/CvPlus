import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  description:string;
  clave:string;

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 

      this.description = data.description;
      this.clave = data.clave;
    }

  ngOnInit() {
    this.form = this.fb.group({
      description: [this.description, []],      
      clave:[this.clave,[]]
    });
  }

  
  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
