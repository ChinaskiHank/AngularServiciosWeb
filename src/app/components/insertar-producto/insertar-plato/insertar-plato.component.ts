import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Plato } from 'src/app/models/plato';
import { PlatoService } from 'src/app/services/plato.service';

@Component({
  selector: 'app-insertar-plato',
  templateUrl: './insertar-plato.component.html',
  styleUrls: ['./insertar-plato.component.css']
})
export class InsertarPlatoComponent implements OnInit {
  platoForm!: FormGroup;
  inplato: Plato[] = [];

  constructor(
    private platoService: PlatoService,
    private formBuilder: FormBuilder
  ) {
    this.platoForm = this.formBuilder.group({
      nomPlato: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      categoriaNombre: ['', Validators.required],
      categoria: ['', Validators.required],
      imagen: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  createPlato() {
    if (this.platoForm.invalid) {
      console.log("Error");
      return;
    }

    const platoData = this.platoForm.value;
    this.platoService.createPlato(platoData).subscribe((newPlato) => {
      this.inplato.push(newPlato);
      this.platoForm.reset();
    });
  }
}