import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorarioPageRoutingModule } from './horario-routing.module';

import { HorarioPage } from './horario.page';
import { ComponentsModule } from 'src/app/components/components.module';

import { MatExpansionModule } from '@angular/material/expansion'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorarioPageRoutingModule,
    ComponentsModule,
    MatExpansionModule
  ],
  declarations: [HorarioPage]
})
export class HorarioPageModule {}
