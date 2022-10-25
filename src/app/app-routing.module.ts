import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"Inicio",component:InicioComponent},
  {path:"Productos",component:ProductosComponent},
  {path:"Contacto",component:ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
