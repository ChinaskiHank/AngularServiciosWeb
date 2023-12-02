import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable, BehaviorSubject  } from 'rxjs';
import { Plato } from '../models/plato';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  private url: string = "https://localhost:7281/api/v1/Categoria/GetCategoria";
  private categoriesSubject = new BehaviorSubject<Category[]>([]);
  categories$ = this.categoriesSubject.asObservable();

  // Agregamos un BehaviorSubject para la categoría seleccionada
  private selectedCategorySubject = new BehaviorSubject<Category | null>(null);
  selectedCategory$ = this.selectedCategorySubject.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getCategories();
  }

  private getCategories() {
    this.httpClient.get<Category[]>(this.url).subscribe(res => {
      this.categoriesSubject.next(res);
    });
  }

  
}

  
