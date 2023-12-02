import { Component, OnChanges, OnInit } from '@angular/core';
import { PlatoService } from 'src/app/services/plato.service';

import { Plato } from 'src/app/models/plato';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-insertar-producto',
  templateUrl: './insertar-producto.component.html',
  styleUrls: ['./insertar-producto.component.css']
})
export class InsertarProductoComponent {
  platos: Plato[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private platoService: PlatoService,
    private categoryService: CategoryService,
) {
  }

  ngOnInit(): void {
    this.categoryService.selectedCategory$.subscribe((selectedCategory) => {
      if (selectedCategory) {
        console.log("selectedCategory" + selectedCategory);
        this.platoService.getPlatosByCategory(selectedCategory.categoriaId).subscribe((res) => {
          this.platos = res;
        });
      } else {
        console.log("general");
        this.platoService.getPlatos().subscribe((res) => {
          this.platos = res;
        });
      }
    });
  }
}



  

