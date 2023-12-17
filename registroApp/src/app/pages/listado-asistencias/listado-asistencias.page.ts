import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-asistencias',
  templateUrl: './listado-asistencias.page.html',
  styleUrls: ['./listado-asistencias.page.scss'],
})
export class ListadoAsistenciasPage implements OnInit {

  paginaTitulo = "Asistencias"

  constructor() { }

  ngOnInit() {
  }

}
