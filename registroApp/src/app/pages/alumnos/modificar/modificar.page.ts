import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnosService } from 'src/app/service/alumnos.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {



  constructor(private alumnosService: AlumnosService,private router: Router,) { }

  ngOnInit() {
  }
          
  }


