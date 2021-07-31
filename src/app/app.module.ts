import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarOneComponent } from './navbars/navbar-one/navbar-one.component';
import { NavbarTwoComponent } from './navbars/navbar-two/navbar-two.component';
import { NavbarThreeComponent } from './navbars/navbar-three/navbar-three.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarOneComponent,
    NavbarTwoComponent,
    NavbarThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
