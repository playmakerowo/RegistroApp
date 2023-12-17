import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeerQrPageRoutingModule } from './leer-qr-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { LeerQrPage } from './leer-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeerQrPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LeerQrPage]
})
export class LeerQrPageModule {}
