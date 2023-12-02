import { Component, OnChanges, OnInit } from '@angular/core';
import { PlatoService } from 'src/app/services/plato.service';
import { Category } from 'src/app/models/category';
import { Plato } from 'src/app/models/plato';

@Component({
  selector: 'app-insertar-producto',
  templateUrl: './insertar-producto.component.html',
  styleUrls: ['./insertar-producto.component.css']
})
export class InsertarProductoComponent {
  platos: Plato[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private platoService: PlatoService) {

    this.platoService.getPlatos().subscribe(res =>{this.platos=res})
  }
}



  

