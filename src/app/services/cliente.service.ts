import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject  } from 'rxjs';
import { Cliente } from '../models/cliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteGetUrl: string ="https://localhost:7219/api/v1/Cliente/GetClientes";

  selectedClienteSubject = new BehaviorSubject<Cliente | null>(null);

  constructor(private httpClient: HttpClient) {
    this.getCliente();
   }

  getCliente(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.clienteGetUrl);
  }
}

