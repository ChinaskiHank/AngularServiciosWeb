import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatoService } from 'src/app/services/plato.service';
import { Plato } from 'src/app/models/plato';
@Component({
  selector: 'app-editar-plato',
  templateUrl: './editar-plato.component.html',
  styleUrls: ['./editar-plato.component.css']
})
export class EditarPlatoComponent implements OnInit {
  platos: Plato[]=[];
  platoId!: number;
  platoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private platoService: PlatoService,
    private route: ActivatedRoute,
    private router: Router
  ) { this.platoService.getPlatos().subscribe(res =>{this.platos=res})}

  ngOnInit(){
    
    // Inicializar el formulario
    this.platoForm = this.formBuilder.group({
      platoId: ['', Validators.required],
      nomPlato: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      categoriaNombre: ['', Validators.required],
      categoria: ['', Validators.required],  // Asegúrate de tener este campo en tu modelo Plato
      imagen: ['', Validators.required],
    });

    // Cargar los datos del plato para editar
    this.platoService.getPlatosById(this.platoId).subscribe((plato: Plato) => {
      this.platoForm.patchValue(plato);
    });
  }
  

  updatePlato() {
    if (this.platoForm.invalid) {
      console.log('Error en el formulario');
      return;
    }
  
    // Actualizar el plato
    this.platoService.updatePlato(this.platoForm.value).subscribe((newPlato) => {
      this.platos.push(newPlato);
      this.platoForm.reset();
      // Redirigir a la lista de platos después de la actualización
      this.router.navigate(['/lista-de-platos']);
    });
  }

}
