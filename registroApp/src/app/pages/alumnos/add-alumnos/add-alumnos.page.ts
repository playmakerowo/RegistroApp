import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosService, Alumno } from '../../../service/alumnos.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-alumnos',
  templateUrl: './add-alumnos.page.html',
  styleUrls: ['./add-alumnos.page.scss'],
})
export class AddAlumnosPage implements OnInit {

  editing = false;
  alumno : Alumno= {
    nombre: '',
    apellido: '',
    run: 0,
    estado: '',
    carrera: '',
    seccion: '',
    sede: '',
    correo: '',
    telefono: 0,
    dv: '',
    
  }

  paginaTitulo = "Agregar Alumnos"
  //this.alumnosService.createAlumno(nombre.value, apellido.value,run.value, estado.value, carrera.value,seccion.value).subscribe(
  //  (res) => console.log(res),
  //  (err) => console.log(err)
  //);
  

  constructor(private alumnosService: AlumnosService, private router: Router, private AlertController: AlertController, private ActivatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.ActivatedRoute.paramMap.subscribe((paramMap) =>{
      if (paramMap.get('postId')){
        this.editing = true;
        this.alumnosService.getPostById(paramMap.get('postId'))
        .subscribe(res => {
          this.alumno = res;
        });
      }
    })
    }
    updatePost(){
      this.alumnosService.updatePost(this.alumno.id, {
        nombre : this.alumno.nombre,
        apellido : this.alumno.apellido,
        run : this.alumno.run,
        estado : this.alumno.estado,
        carrera : this.alumno.carrera,
        seccion : this.alumno.seccion,
        sede : this.alumno.sede,
        correo : this.alumno.correo,
        telefono : this.alumno.telefono,
        dv : this.alumno.dv
      }).subscribe(res=>{
        this.router.navigate(['/alumnos'])
      })
    }

  async addAlumnos(nombre, apellido,run, estado, carrera,seccion, sede, correo, telefono, dv){

    if (nombre.value != "") {
      if (apellido.value !="") {
        if (run.value !="") {
          if (dv.value != "") {
            if (carrera.value !="") {
              if (seccion.value !="") {
                if (telefono.value != "") {
                  if (correo.value != "") {
                    if (sede.value != "") {
                      const alerta = await this.AlertController.create({
                        header: 'Agregar Alumno: ' +nombre.value,
                        message:'Confirmar agregar',
                        buttons:[
                          {
                            text: 'agregar',
                            handler: () => {
                              console.log(nombre.value, apellido.value,run.value, estado.value, carrera.value,seccion.value, sede.value, correo.value, telefono.value, dv.value)
                              this.alumnosService.createAlumno(nombre.value, apellido.value,run.value, estado.value, carrera.value,seccion.value, sede.value, correo.value, telefono.value, dv.value).subscribe(
                                (res) => {this.router.navigate(['/alumnos']);},
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
                      header: 'Sede en blanco',
                      buttons: ['Aceptar']
                    });
                  
                    await alert.present();
                  }}else{
                  console.log("no")
                  const alert = await this.AlertController.create({
                  cssClass: 'my-custom-class',
                  header: 'Correo en blanco',
                  buttons: ['Aceptar']
                });
              
                await alert.present();
                }}else{  
                  console.log("no")
                  const alert = await this.AlertController.create({
                  cssClass: 'my-custom-class',
                  header: 'Telefono en blanco',
                  buttons: ['Aceptar']
                });
              
                await alert.present();
              }}else{
                console.log("no")
              const alert = await this.AlertController.create({
                cssClass: 'my-custom-class',
                header: 'Seccion en blanco',
                buttons: ['Aceptar']
              });
          
              await alert.present();
            }}else{
              console.log("no")
            const alert = await this.AlertController.create({
              cssClass: 'my-custom-class',
              header: 'Carrera en blanco',
              buttons: ['Aceptar']
            });
        
            await alert.present();
          }}else{
            console.log("no")
            const alert = await this.AlertController.create({
              cssClass: 'my-custom-class',
              header: 'DV en blanco',
              buttons: ['Aceptar']
            });
        
            await alert.present();
        }}else{
          console.log("no")
        const alert = await this.AlertController.create({
          cssClass: 'my-custom-class',
          header: 'RUN en blanco',
          buttons: ['Aceptar']
        });
    
        await alert.present();
      }}else{
        console.log("no")
        const alert = await this.AlertController.create({
          cssClass: 'my-custom-class',
          header: 'Apellido en blanco',
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
