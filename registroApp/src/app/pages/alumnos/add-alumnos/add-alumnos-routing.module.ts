import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAlumnosPage } from './add-alumnos.page';

const routes: Routes = [
  {
    path: '',
    component: AddAlumnosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAlumnosPageRoutingModule {}
