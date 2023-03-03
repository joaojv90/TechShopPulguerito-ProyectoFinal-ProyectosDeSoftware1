import { getNumberOfCurrencyDigits } from '@angular/common';
import { Component } from '@angular/core';
import { __generator } from 'tslib';
import { ProductosService } from '../service/productos.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {

  constructor(private servicio: ProductosService) { }

  /*nosotros: any = {}

  ngOnInit() {
    this.servicio.getNosotros().subscribe(nos => {
      this.nosotros = nos;
    })
  } */

  // INGRESO / CREACIÓN DE PRODUCTOS

  ingresarProductos(nom: String, genero: string, mail: String) {

    const productos =
    {
      name: nom,
      gender: genero,
      email: mail

    }

    this.servicio.postProductos(productos).subscribe(p => {

    })
  }

  // ACTUALIZACIÓN DE PRODUCTOS

  actualizacionProductos(ide: String, nom: String, mail: String) {

    const productos =
    {
      id: ide,
      name: nom,
      email: mail
    }

    this.servicio.putProductos(productos, ide).subscribe(p => {

    })
  }

  // ELIMINAR PRODUCTOS

  eliminarProductos(id: any) {

    const productos =

      this.servicio.deleteProductos(id).subscribe(p => {

      })
  }
}

