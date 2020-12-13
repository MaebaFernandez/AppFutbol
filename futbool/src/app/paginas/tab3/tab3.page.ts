import { Component } from '@angular/core';
import { FutbolService } from 'src/app/Servicio/Futbol.service';
import {  Response } from '../../modelo/Coachs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  entrenadores : Response[] = [];

  constructor(public futbolServicios: FutbolService) {
    this.entrenador()

   }
   entrenador(){
    this.futbolServicios.getCoach()
     .subscribe((resultado) => {
      
       this.entrenadores.push(...resultado.response)
       console.log(resultado);
     
   });
  }
}
