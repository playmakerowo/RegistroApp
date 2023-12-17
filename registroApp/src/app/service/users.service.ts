import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';

interface Usuario{
 nombre: string, contrasenia: string, rol: boolean  
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API = "https://registraapp.herokuapp.com/usuarios"
  constructor( private cliente: HttpClient ) { }



  getAll() {
    //retornando api
    return this.cliente.get(this.API);
   
  }  

  createUser(nombre: string, contrasenia: string, estado: boolean){
      return this.cliente.post(this.API,{nombre, contrasenia, estado})
  }

 

}

