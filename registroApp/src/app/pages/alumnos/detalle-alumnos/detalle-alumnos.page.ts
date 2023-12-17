import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { alumno } from '../alumnos.model';
import { AlumnosService } from '../../../service/alumnos.service';

@Component({
  selector: 'app-detalle-alumnos',
  templateUrl: './detalle-alumnos.page.html',
  styleUrls: ['./detalle-alumnos.page.scss'],
})
export class DetalleAlumnosPage implements OnInit {

  alumno: alumno;

  
  constructor(private activateRouter: ActivatedRoute, private alumnosService:AlumnosService, private AlertController: AlertController, private router: Router) { }

  ngOnInit() {

  }


  home(){
    this.router.navigate(['/home']);
  }

   }
