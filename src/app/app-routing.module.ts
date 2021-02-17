import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DepartmentsComponent } from './departments/departments.component';
import { GridComponent } from './grid/grid.component';
import { LibraryComponent } from './library/library.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlacementComponent } from './placement/placement.component';

const routes: Routes = [
  {path:'',redirectTo:'/about',pathMatch:'full'},
  {
    path:'about',component:AboutComponent
  },
  { path:'departments',component:DepartmentsComponent},
  {path:'placement', component:PlacementComponent},
  {path:'library',component:LibraryComponent},
  {path:'login',component:LoginComponent},{path:'grid',component:GridComponent},
  {path:"**",component:PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
