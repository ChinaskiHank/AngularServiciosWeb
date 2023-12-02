import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ventas } from '../models/ventas';

@Injectable({
    providedIn: 'root'
  })

  export class OrderService {

    constructor(private httpClient:HttpClient) { }
     url_base:string = "https://localhost:7200";
  
    createOrder():Observable<Ventas[]>{
        return this.httpClient.get<Ventas[]>(`${this.url_base}/api/v1/GetVentas`)
    }
  }