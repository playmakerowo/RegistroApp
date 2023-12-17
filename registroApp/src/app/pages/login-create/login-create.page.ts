import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-create',
  templateUrl: './login-create.page.html',
  styleUrls: ['./login-create.page.scss'],
})
export class LoginCreatePage implements OnInit {

  crearLogin ="Crear Cuenta"

constructor(private UserService: UsersService, private router: Router, private AlertController: AlertController ) {}

  ngOnInit() {
  }

  async addUser(nombre, pass ,pass2 , estado){

    if (nombre.value != "") {
      if (pass.value != "") {
        if (pass2.value != "") {
        if (pass2.value === pass.value) {
          const alerta = await this.AlertController.create({
            header: 'Agregar User: ' +nombre.value,
            message:'Confirmar agregar',
            buttons:[
              {
                text: 'agregar',
                handler: () => {
                  console.log(nombre.value, pass.value, estado.value)
                  this.UserService.createUser(nombre.value, pass.value, estado.value).subscribe(
                    (res) => {this.router.navigate(['/login']);},
                    (err) => console.log(err)
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
        }else{
          console.log("no")
          const alert = await this.AlertController.create({
            cssClass: 'my-custom-class',
            header: 'Las claves no coinciden',
            buttons: ['Aceptar']
          });
      
          await alert.present();
        }}else{
          console.log("no")
          const alert = await this.AlertController.create({
            cssClass: 'my-custom-class',
            header: 'password 2 en blanco',
            buttons: ['Aceptar']
          });
      
          await alert.present();
        }}else{
          console.log("no")
          const alert = await this.AlertController.create({
            cssClass: 'my-custom-class',
            header: 'password 1 en blanco',
            buttons: ['Aceptar']
          });
      
          await alert.present();
          
        }}else{
          console.log("no")
          const alert = await this.AlertController.create({
            cssClass: 'my-custom-class',
            header: 'Nombre en blanco',
            buttons: ['Aceptar']
          });
      
          await alert.present();
          
    }
  }
}


