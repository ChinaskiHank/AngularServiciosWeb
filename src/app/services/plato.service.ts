import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject  } from 'rxjs';
import { Plato } from '../models/plato';
@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  platoUrl: string = "https://localhost:7074/api/v1/Plato";
  platopagUrl: String = "https://localhost:7074/api/v1/Plato/GetPlatos/page/0/size/5";
  platoCreateUrl:String ="https://localhost:7074/api/v1/Plato/CrearPlato";
  platoUpdateUrl:String="https://localhost:7074/api/v1/Plato/ActualizarPlato";
  PlatoById:String="https://localhost:7074/api/v1/Plato/GetPlatosById/{id}";
  

  selectedPlatoSubject = new BehaviorSubject<Plato | null>(null);
  selectedPlato$ = this.selectedPlatoSubject.asObservable();

  constructor(private httpClient: HttpClient) {
    
   }

   getPlatos(): Observable<Plato[]>{
    return this.httpClient.get<Plato[]>(`${this.platoUrl}/GetPlatos`);
  }

  getPlatosPaginacion(page : number, size : number): Observable<any> {
    return this.httpClient.get<any>(`${this.platopagUrl}`)
  }
  getPlatosById(id: number): Observable<Plato> {
    const url = `${this.PlatoById}/${id}`; // Asegúrate de tener la URL correcta
    return this.httpClient.get<Plato>(url);
  }
  createPlato(plato : any): Observable<any> {
    return this.httpClient.post<any>(`${this.platoCreateUrl}`,plato)
  }

  updatePlato(plato : any): Observable<any> {
    return this.httpClient.put<any>(`${this.platoUpdateUrl}`, plato)
  }
  deleteProduct(id: any) {
    return this.httpClient.delete<any>(`${this.platoUrl}/api/v1/Plato/EliminarPlato/${id}`)
  }

  // Obtener platos por categoría
  getPlatosByCategory(categoryId: any): Observable<any> {
    return this.httpClient.get<any>(`${this.platoUrl}/GetPlatosByCategoria/${categoryId}`);
  }
}
