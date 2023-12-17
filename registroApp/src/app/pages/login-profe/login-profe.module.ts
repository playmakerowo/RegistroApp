import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginProfePageRoutingModule } from './login-profe-routing.module';

import { LoginProfePage } from './login-profe.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginProfePageRoutingModule,
    ComponentsModule
  ],
  declarations: [LoginProfePage]
})
export class LoginProfePageModule {}
