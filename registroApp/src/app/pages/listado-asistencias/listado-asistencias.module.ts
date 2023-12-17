import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoAsistenciasPageRoutingModule } from './listado-asistencias-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { ListadoAsistenciasPage } from './listado-asistencias.page';

import { MatExpansionModule } from '@angular/material/expansion'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoAsistenciasPageRoutingModule,
    ComponentsModule,
    MatExpansionModule
  ],
  declarations: [ListadoAsistenciasPage]
})
export class ListadoAsistenciasPageModule {}
