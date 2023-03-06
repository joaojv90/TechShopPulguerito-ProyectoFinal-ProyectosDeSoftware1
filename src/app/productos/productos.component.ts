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

  ingresarProductos(idI: any, imgI: any, nameI: any, marcaI: any, preferenciaI: any, estadoI: any,
    descripI: any, contactI: any, ciudadI: any) {

    const productos =
    {
      id: idI,
      imagen: imgI,
      nombre: nameI,
      marca: marcaI,
      preferencia_de_cambio: preferenciaI,
      estado: estadoI,
      descripcion: descripI,
      contacto: contactI,
      ciudad: ciudadI

    }

    this.servicio.addProductos(productos).subscribe(p => {

    })
  }

  // ACTUALIZACIÓN DE PRODUCTOS

  actualizacionProductos(idP: any, img: any, name: any, marca: any, preferencia: any, estado:any,
    descrip: any, contact: any, ciudad:any) {

    const productos =
    {
      id: idP,
      imagen: img,
      nombre: name,
      marca: marca,
      preferencia_de_cambio: preferencia,
      estado: estado,
      descripcion: descrip,
      contacto: contact,
      ciudad: ciudad
    }

    this.servicio.updateProductos(productos).subscribe(p => {})
  }

  // ELIMINAR PRODUCTOS

  remove(id: any) {
    this.servicio.deleteProductos(id).subscribe(p => {})
    window.location.reload()
  }
}
