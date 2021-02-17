import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DepartmentsComponent } from './departments/departments.component';
import { PlacementComponent } from './placement/placement.component';
import { LibraryComponent } from './library/library.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DepartmentsComponent,
    PlacementComponent,
    LibraryComponent,
    LoginComponent,
    PageNotFoundComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
