import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject  } from 'rxjs';
import { Comentario } from '../models/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  comentarioUrl: string = "https://localhost:7103/api/v1/Comentario/GetComentarios";
  constructor(private httpClient: HttpClient) { }

  getComentario(): Observable<Comentario[]>{
    return this.httpClient.get<Comentario[]>(this.comentarioUrl);
  }
}
