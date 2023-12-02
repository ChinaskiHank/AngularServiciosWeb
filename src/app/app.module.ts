import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AppRoutingModule } from './app-routing.module';
import { InsertarProductoComponent } from './components/insertar-producto/insertar-producto.component';
import { InsertarPlatoComponent } from './components/insertar-producto/insertar-plato/insertar-plato.component';
import { EditarPlatoComponent } from './components/insertar-producto/editar-plato/editar-plato.component';
import { EliminarPlatoComponent } from './components/insertar-producto/eliminar-plato/eliminar-plato.component';
import { ListadoClientesComponent } from './components/listado-clientes/listado-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    CartStatusComponent,
    ProductListComponent,
    InsertarProductoComponent,
    InsertarPlatoComponent,
    EditarPlatoComponent,
    EliminarPlatoComponent,
    ListadoClientesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'',component:ProductListComponent}
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
