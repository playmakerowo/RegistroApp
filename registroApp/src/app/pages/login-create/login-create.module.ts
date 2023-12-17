import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginCreatePageRoutingModule } from './login-create-routing.module';

import { LoginCreatePage } from './login-create.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginCreatePageRoutingModule,
    ComponentsModule
  ],
  declarations: [LoginCreatePage]
})
export class LoginCreatePageModule {}
