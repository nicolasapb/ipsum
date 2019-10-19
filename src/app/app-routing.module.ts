import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/pacientes', pathMatch: 'full'},
  {path: 'pacientes', loadChildren: () => import('./pages/pacientes/pacientes.module').then(m => m.PacientesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
