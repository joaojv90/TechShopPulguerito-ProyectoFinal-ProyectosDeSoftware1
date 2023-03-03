import { Component } from '@angular/core';
import { ProductosService } from '../service/productos.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {

  constructor(private servicio: ProductosService) { }

  productos: any = {}

  ngOnInit() {
    this.servicio.getProductos().subscribe(prod => {
      this.productos = prod
    })

  }
}
