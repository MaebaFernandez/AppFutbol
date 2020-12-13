import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisesComponent} from './paises/paises.component';
import { IonicModule } from '@ionic/angular';
import { EntrenadorComponent } from './entrenador/entrenador.component';
import { EquipoComponent } from './equipo/equipo.component';




@NgModule({
  declarations: [
    PaisesComponent,
    EntrenadorComponent,
    EquipoComponent

  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    PaisesComponent,
    EntrenadorComponent,
    EquipoComponent

  ]

})
export class ComponentsModule { }
