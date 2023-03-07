import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ModalComponent } from './modal/modal.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'modal', component: ModalComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: Error404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
