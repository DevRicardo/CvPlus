import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatGridListModule, MatSidenavModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PagesComponent } from './componet/pages/pages.component';
import { NavbarComponent } from './componet/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MenuComponent } from './componet/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    NavbarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
