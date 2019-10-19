import { NgModule } from '@angular/core';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { PacienteFormComponent } from './paciente-form/paciente-form.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PacienteFormComponent],
  imports: [
    SharedModule,
    PacientesRoutingModule
  ]
})
export class PacientesModule { }
