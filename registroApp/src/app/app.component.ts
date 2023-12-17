import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  animations:[
    trigger('animacion', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform:'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#ff0000',
        transform:'scale(1.5)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
  ])
  ]
})
export class AppComponent  implements OnInit{
  public state:string = 'inactive';


  constructor() {}

  ngOnInit(){

  }
  toggleBoton(){
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }




  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Asignaturas', url: '/folder/Asignaturas', icon: 'book' },
    { title: 'Notas', url: '/folder/Notas', icon: 'book' },
    { title: 'Asistencia', url: '/folder/Asistencia', icon: 'archive' },
    { title: 'Ajustes', url: '/folder/Ajustes', icon: 'settings' },
    { title: 'Soporte', url: '/folder/Soporte', icon: 'cellphone' },
    { title: 'Cerrar Sesión', url: '/folder/Sesion', icon: 'x' },
  ];
}
