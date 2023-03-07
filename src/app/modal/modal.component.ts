import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../service/productos.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(private servicio: ProductosService, private router: Router) { }

  productos: any = {}

  id: number =-1

  ngOnInit() {
    this.servicio.getProductos().subscribe(p => {
      this.productos = p
    })
    const temp = this.router.url.split("/")
    console.log(temp.length)
    if (temp.length > 2) {
      this.id = parseInt(temp[2])
    }
  }

  actualizacionProductos(idP: any, img: any, name: any, marca: any, preferencia: any, estado: any,
    descrip: any, contact: any, ciudad: any) {

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

    this.servicio.updateProductos(productos).subscribe(p => { })
  }

}
