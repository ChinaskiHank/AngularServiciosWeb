import { Component, OnInit,Input } from '@angular/core';
import { PlatoService } from 'src/app/services/plato.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
import { Plato } from 'src/app/models/plato';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  selectedCategory: Category | null = null;
  platos: Plato[] = [];

  constructor(
    private categoryService: CategoryService,
    private platoService: PlatoService
  ) { }
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
