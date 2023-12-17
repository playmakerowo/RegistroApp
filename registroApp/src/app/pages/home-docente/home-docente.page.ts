import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-docente',
  templateUrl: './home-docente.page.html',
  styleUrls: ['./home-docente.page.scss'],
})
export class HomeDocentePage implements OnInit {

  paginaTitulo = "APP QR"

  constructor() { }
  date: string = new Date().toISOString();
  ngOnInit() {
  }

}
