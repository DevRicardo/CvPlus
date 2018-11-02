import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { environment } from '../environments/environment';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatSidenavModule,
  MatDialogModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatDividerModule,
  MatListModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatExpansionModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatTableModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AuthGuard } from './guards/auth.guard';

// New imports to update based on AngularFire2 version 4
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componet/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MenuComponent } from './componet/menu/menu.component';
import { LoginComponent } from './componet/login/login.component';
import { HomeComponent } from './componet/pages/home/home.component';
import { BlogComponent } from './componet/blog/blog.component';
import { DashboardComponent } from './componet/admin/dashboard/dashboard.component';
import { LoginService } from './services/Login/login.service';
import { appRoutes } from './routes.module';
import { PersonalComponent } from './componet/admin/personal/section/personal.component';
import { FormComponent } from './componet/admin/personal/form/form.component';

import { PersonalService } from './services/Personal/personal.service';
import { FileService } from './services/File/file.service';
import { LoaderComponent } from './componet/commons/loader/loader.component';
import { FormPortadaComponent } from './componet/admin/portada/form-portada/form-portada.component';
import { FormHabilidadComponent } from './componet/admin/habilidades/form-habilidad/form-habilidad.component';
import { ItemHabilidadComponent } from './componet/admin/habilidades/item-habilidad/item-habilidad.component';
import { SectionHabilidadComponent } from './componet/admin/habilidades/section-habilidad/section-habilidad.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    BlogComponent,
    DashboardComponent,
    PersonalComponent,
    FormComponent,
    FormPortadaComponent,
    LoaderComponent,
    FormHabilidadComponent,
    ItemHabilidadComponent,
    SectionHabilidadComponent
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
    MatListModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatTabsModule,
    MatTooltipModule,
    FlexLayoutModule,
    HttpClientModule,
    MatDividerModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    AngularFireStorageModule,
    MatTableModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
        },
      },
    })
  ],
  entryComponents: [
    LoginComponent,
    LoaderComponent
  ],
  providers: [LoginService, AuthGuard, PersonalService, FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
