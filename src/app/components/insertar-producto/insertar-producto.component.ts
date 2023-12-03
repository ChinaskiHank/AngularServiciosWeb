import { Component, OnChanges, OnInit } from '@angular/core';
import { PlatoService } from 'src/app/services/plato.service';

import { Plato } from 'src/app/models/plato';
import { CategoryService } from 'src/app/services/category.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-insertar-producto',
  templateUrl: './insertar-producto.component.html',
  styleUrls: ['./insertar-producto.component.css']
})
export class InsertarProductoComponent {
  platos: Plato[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  private idToDelete: number | null = null;

  constructor(private platoService: PlatoService,
    private modalService: NgbModal,
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
        this.getAllPlatos();
      }
    });
  }

  // Método para abrir el modal y almacenar el ID del elemento a eliminar
  abrirModalEliminar(id: any, content: any) {
    this.idToDelete = id;
    this.modalService.open(content, { centered: true });
  }
  
  // Método para confirmar la eliminación
  confirmarEliminar() {
    if (this.idToDelete !== null) {
      // Lógica para eliminar el elemento usando el ID (puedes llamar a tu servicio aquí)
      console.log('Eliminar elemento con ID:', this.idToDelete);
      this.platoService.deleteProduct(this.idToDelete).subscribe(() => {
        // Después de eliminar, vuelve a cargar la lista de platos
        this.getAllPlatos();
      });
      // Cerrar el modal después de confirmar
      this.modalService.dismissAll();
    }
  }

  private getAllPlatos() {
    this.platoService.getPlatos().subscribe((res) => {
      this.platos = res;
    });
  }
}



  

