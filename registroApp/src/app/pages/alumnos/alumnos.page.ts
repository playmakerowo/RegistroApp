import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnosService } from "../../service/alumnos.service";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  //se reciben los arreglos dentro de la variable
  alumnos: any = [];
  paginaTitulo = "Alumnos"
  constructor(private alumnosService: AlumnosService, private router: Router, private AlertController: AlertController ){}
  

  cargarLista(){
    this.alumnosService.getAll().subscribe(
      ( res ) =>{
        console.log(res);  
        this.alumnos = res;
      },
      (err) => 
        console.log(err)
      );
  }

  createAlumno(){
    this.router.navigate(['add-alumnos']);
  }

  ngOnInit() {
    this.cargarLista()
  }
  ionViewWillEnter(){
    this.cargarLista()
    }
  
    async deleteAlumno(id, nombre){

      const alerta = await this.AlertController.create({
        header: 'eliminar alumno: ' + nombre,
        message:'Confirmar eliminar',
        buttons:[
          {
            text: 'Eliminar',
            handler: () => {
              console.log(id)
              this.alumnosService.deleteAlumno(id).subscribe(
                (res)=>{location.reload()},
                (err)=>{console.log(err)}
               );
            }
          },
          {
            text: 'Cancelar',
            role: 'cancel'
          },
        ]
      });
      await alerta.present();
      }
  }




