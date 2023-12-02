import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ventas } from '../models/ventas';

@Injectable({
    providedIn: 'root'
  })

  export class OrderService {

    url_base:string = "https://localhost:7089/api/v1/Ventas/ListaVentas";
    urlcreateOrder:string ="https://localhost:7089/api/v1/Ventas/GetVenta"

    constructor(private httpClient:HttpClient) { }
     
  
    createOrder(venta : any):Observable<any>{
        return this.httpClient.post<any>(this.urlcreateOrder,venta);
    }
    getVentas():Observable<Ventas[]>{
      return this.httpClient.get<Ventas[]>(this.url_base);
    }
  }