import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PiedepaginaComponent } from './piedepagina/piedepagina.component';



@NgModule({
  declarations: [
    EncabezadoComponent,
    PiedepaginaComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    EncabezadoComponent,
    PiedepaginaComponent
  ]
})
export class ComponentsModule { }
