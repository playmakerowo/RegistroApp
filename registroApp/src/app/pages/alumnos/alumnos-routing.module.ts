import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnosPage } from './alumnos.page';



const routes: Routes = [
  {
    path: '',
    component: AlumnosPage
  },
  {
    path: 'add-alumnos',
    loadChildren: () => import('./add-alumnos/add-alumnos.module').then( m => m.AddAlumnosPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnosPageRoutingModule {}
