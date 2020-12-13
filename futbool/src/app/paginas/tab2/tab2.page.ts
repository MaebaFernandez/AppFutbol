import { Component } from '@angular/core';
import { FutbolService } from 'src/app/Servicio/Futbol.service';
import {  Response } from '../../modelo/Equipos';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  equipos : Response[] = [];
   constructor(public futbolServicios: FutbolService) {
    this.Equipo()

   }
   Equipo(){
     this.futbolServicios.getEquipos()
      .subscribe((resultado) => {
       
        this.equipos.push(...resultado.response)
        console.log(resultado);
      
    });
      
}
}

  
