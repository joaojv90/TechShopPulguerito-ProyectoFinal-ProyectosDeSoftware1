import { Component } from '@angular/core';
import { ProductosService } from '../service/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  constructor(private servicio: ProductosService) { }

  productos: any = {}

  ngOnInit() {
    this.servicio.getProductos().subscribe(prod => {
      this.productos = prod
    })
  }

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
