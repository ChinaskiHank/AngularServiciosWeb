import { Component } from '@angular/core';
import { Comentario } from 'src/app/models/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-listar-comentarios',
  templateUrl: './listar-comentarios.component.html',
  styleUrls: ['./listar-comentarios.component.css']
})
export class ListarComentariosComponent {
comentarios :Comentario[] =[]

constructor(private comentarioService: ComentarioService) {

  this.comentarioService.getComentario().subscribe(res =>{this.comentarios=res})
}
}
