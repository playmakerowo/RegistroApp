import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';


export interface Alumno{
  id?: string;
  nombre: string, apellido: string,run: number, estado: string, carrera: string, seccion: string, sede: string, correo:string, telefono: number, dv:string  
}

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {


  API = "https://registraapp.herokuapp.com/alumnos"
  constructor( private cliente: HttpClient ) { }

  
  getAll() {
    //retornando api
    return this.cliente.get(this.API);
  }  
  
  createAlumno(nombre: string, apellido: string,run: number, estado: string, carrera: string, seccion: string, sede: string, correo:string, telefono: number, dv:string) { 
    return this.cliente.post(this.API,{nombre, apellido, run, estado, carrera, seccion, sede, correo, telefono, dv})
  }

  deleteAlumno(id){
    return this.cliente.delete(`${this.API}/${id}`)
  }

  modifyAlumno(id: string, post: Alumno){
    return this.cliente.put(`${this.API}/${id}`, post)
  }
  getPostById(id:string){
    return this.cliente.get<Alumno>(`${this.API}/${id}`)
  }
  updatePost(id: string, post:Alumno){
    return this.cliente.put(`${this.API}/${id}`, post)
  }
}


