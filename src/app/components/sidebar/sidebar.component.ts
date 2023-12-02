// sidebar.component.ts
import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { PlatoService } from 'src/app/services/plato.service';
import { Plato } from 'src/app/models/plato';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  categories: Category[] = [];
  selectedCategory: Category | null = null;
  isHovered: boolean = false;
  platos: Plato[] = [];

  constructor(private categoryService: CategoryService,
    private platoService: PlatoService) {
    categoryService.categories$.subscribe(res => {
      this.categories = res;
    });
  }

  filtrarPorCategoria(categoria: any): void {
    console.log("sidebar:" + categoria);
    this.categoryService.setSelectedCategory(categoria);
  }
}
