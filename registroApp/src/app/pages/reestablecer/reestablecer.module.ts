import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReestablecerPageRoutingModule } from './reestablecer-routing.module';

import { ReestablecerPage } from './reestablecer.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReestablecerPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ReestablecerPage]
})
export class ReestablecerPageModule {}
