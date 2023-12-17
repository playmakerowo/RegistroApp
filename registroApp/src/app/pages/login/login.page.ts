import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsersService } from "../../service/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  tituloLogin = "Iniciar Sesión"
  usuarios: any = [];
 
  constructor(private UsersService: UsersService, private router: Router, private AlertController:AlertController) { }

  cargarLista(){
    this.UsersService.getAll().subscribe(
      ( res ) =>{
        this.usuarios = res;
        console.log(this.usuarios);
      },
      (err) => 
        console.log(err)
      );
  }

  ngOnInit() {
    this.cargarLista()
  }
  ionViewWillEnter(){
    this.cargarLista()
    }


    async validar(nombre1, pass){
      console.log(nombre1.value)
      var bandera = false;
      for (var aux of this.usuarios) {
        console.log('nombre:' + aux.nombre)
        console.log('nombre ingresado:' + nombre1.value)
        console.log('pass:' + aux.contrasenia)
        console.log('pass ingresada:' + pass.value)
        console.log('estado:' + aux.estado)
        
        if (aux.nombre == nombre1.value) {
          if (aux.contrasenia == pass.value) {
            const alert = await this.AlertController.create({
              cssClass: 'my-custom-class',
              header: 'bienvenido: ' + nombre1.value,
              buttons: ['Aceptar']
  
            });
    
            await alert.present();
            
            bandera = true;
  
            if (aux.estado == true) {
            
              this.router.navigate(['/home']);
              console.log("si coinciden alumno")
              console.log('**************************')
            }else{
              this.router.navigate(['/home-docente']);
              console.log("si coinciden docente")
              console.log('**************************')
            }
          }
        }
        
  
    }if(bandera==false){
      console.log("no")
      const alert = await this.AlertController.create({
        cssClass: 'my-custom-class',
        header: 'Error Al Ingresar',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      console.log("no coinciden")
      console.log('**************************')
  
    }
    
  }



}

