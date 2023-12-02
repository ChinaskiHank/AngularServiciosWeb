// category.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url: string = "https://localhost:7281/api/v1/Categoria/GetCategoria";
  private categoriesSubject = new BehaviorSubject<Category[]>([]);
  categories$ = this.categoriesSubject.asObservable();

  private selectedCategorySubject = new BehaviorSubject<Category | null>(null);
  selectedCategory$ = this.selectedCategorySubject.asObservable();

  constructor(private httpClient: HttpClient) {
    this.loadCategories();
  }

  private loadCategories() {
    this.httpClient.get<Category[]>(this.url).subscribe(res => {
      this.categoriesSubject.next(res);
    });
  }

  setSelectedCategory(category: Category | null): void {
    console.log('Categoría seleccionada:', category);
    this.selectedCategorySubject.next(category);
  }
}
