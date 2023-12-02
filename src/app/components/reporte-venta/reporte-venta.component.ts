import { Component , OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/ventas.service';
import { Ventas } from 'src/app/models/ventas';
import { PlatoService } from 'src/app/services/plato.service';

import { Plato } from 'src/app/models/plato';
@Component({
  selector: 'app-reporte-venta',
  templateUrl: './reporte-venta.component.html',
  styleUrls: ['./reporte-venta.component.css']
})
export class ReporteVentaComponent  {
  ventas: Ventas[] = [];


  constructor(private orderService: OrderService
) {

    this.orderService.getVentas().subscribe(res =>{this.ventas=res})
  }



}
