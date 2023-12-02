import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {

    this.clienteService.getCliente().subscribe(res =>{this.clientes=res})
  }
}
