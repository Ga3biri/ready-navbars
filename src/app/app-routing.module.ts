import { NavbarTwoComponent } from './navbars/navbar-two/navbar-two.component';
import { NavbarOneComponent } from './navbars/navbar-one/navbar-one.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarThreeComponent } from './navbars/navbar-three/navbar-three.component';

const routes: Routes = [
  {path:'nav-one',component:NavbarOneComponent},
  {path:'nav-two',component:NavbarTwoComponent},
  {path:'nav-three',component:NavbarThreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
