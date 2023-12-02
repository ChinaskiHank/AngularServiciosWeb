import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  
  categories:Category[]=[];
  selectedCategory: Category | null = null;
   isHovered: boolean = false;

  constructor(private categoryService: CategoryService) {
    categoryService.categories$.subscribe(res => {
      this.categories = res;
    });
    
  }

  // Función para establecer la categoría seleccionada


}


