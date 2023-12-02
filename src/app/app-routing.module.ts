import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { ProductListComponent } from './components/product-list/product-list.component';
import { InsertarProductoComponent } from './components/insertar-producto/insertar-producto.component';
import { InsertarPlatoComponent } from './components/insertar-producto/insertar-plato/insertar-plato.component';
import { EditarPlatoComponent } from './components/insertar-producto/editar-plato/editar-plato.component';
import { EliminarPlatoComponent } from './components/insertar-producto/eliminar-plato/eliminar-plato.component';

const routes: Routes =[
  
  {path: 'product-list',component:ProductListComponent},
  { path: 'insertar-producto', component: InsertarProductoComponent },
  { path: 'insertar-plato', component: InsertarPlatoComponent },
  { path: 'editar-plato', component: EditarPlatoComponent },
  { path: 'eliminar-plato', component: EliminarPlatoComponent }
  
  
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
