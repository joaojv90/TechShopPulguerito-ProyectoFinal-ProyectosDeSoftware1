import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InformacionComponent } from './informacion/informacion.component';
import { Error404Component } from './error404/error404.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './productos/productos.component';
import { ContactosComponent } from './contactos/contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    InformacionComponent,
    Error404Component,
    ProductosComponent,
    ContactosComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
