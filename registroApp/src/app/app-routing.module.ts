import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'reestablecer',
    loadChildren: () => import('./pages/reestablecer/reestablecer.module').then( m => m.ReestablecerPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./pages/horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./pages/ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },
  {
    path: 'alumnos',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/alumnos/alumnos.module').then( m => m.AlumnosPageModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./pages/alumnos/detalle-alumnos/detalle-alumnos.module').then( m => m.DetalleAlumnosPageModule)
      }
    ]
    
  },
  {
    path: 'home-docente',
    loadChildren: () => import('./pages/home-docente/home-docente.module').then( m => m.HomeDocentePageModule)
  },
  {
    path: 'QR',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QRPageModule)
  },
  {
    path: 'listado-asistencias',
    loadChildren: () => import('./pages/listado-asistencias/listado-asistencias.module').then( m => m.ListadoAsistenciasPageModule)
  },
  {
    path: 'leer-qr',
    loadChildren: () => import('./pages/leer-qr/leer-qr.module').then( m => m.LeerQrPageModule)
  },
  {
    path: 'add-alumnos',
    loadChildren: () => import('./pages/alumnos/add-alumnos/add-alumnos.module').then( m => m.AddAlumnosPageModule)
  },
  {
    path: 'login-profe',
    loadChildren: () => import('./pages/login-profe/login-profe.module').then( m => m.LoginProfePageModule)
  },
  {
    path: 'modificar',
    loadChildren: () => import('./pages/alumnos/modificar/modificar.module').then( m => m.ModificarPageModule)
  },
  {
    path: 'login-create',
    loadChildren: () => import('./pages/login-create/login-create.module').then( m => m.LoginCreatePageModule)
  },
  {
    path: 'posts/edit/:postId',
    loadChildren: () => import('./pages/alumnos/add-alumnos/add-alumnos.module').then( m => m.AddAlumnosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
