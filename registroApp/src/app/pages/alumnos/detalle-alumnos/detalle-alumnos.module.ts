import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';
import {MatExpansionModule} from '@angular/material/expansion';

import { DetalleAlumnosPageRoutingModule } from './detalle-alumnos-routing.module';

import { DetalleAlumnosPage } from './detalle-alumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAlumnosPageRoutingModule,
    MatExpansionModule,
    ComponentsModule
  ],
  declarations: [DetalleAlumnosPage]
})
export class DetalleAlumnosPageModule {}
