import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoAsistenciasPage } from './listado-asistencias.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoAsistenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoAsistenciasPageRoutingModule {}
