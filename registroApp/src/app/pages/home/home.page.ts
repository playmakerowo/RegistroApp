import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  paginaTitulo = "Registro App"
  date: string = new Date().toISOString();
  constructor() {}

}
