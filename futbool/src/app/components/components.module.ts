import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisesComponent} from './paises/paises.component';
import { PaisComponent} from './pais/pais.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    PaisComponent,
    PaisesComponent

  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    PaisComponent,
    PaisesComponent

  ]

})
export class ComponentsModule { }
