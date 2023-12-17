import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAlumnosPageRoutingModule } from './add-alumnos-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { AddAlumnosPage } from './add-alumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAlumnosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AddAlumnosPage]
})
export class AddAlumnosPageModule {}
