import { Component } from '@angular/core';
import { FutbolService } from '../../Servicio/Futbol.service';
import {  Response } from '../../modelo/Futbol';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  paises : Response[] = [];
   constructor(public futbolServicios: FutbolService) {
    this.Paises()

   }
   Paises(){
     this.futbolServicios.getPaises()
      .subscribe((resultado) => {
        console.log(resultado);
        this.paises.push(...resultado.response)
      
    });
      
}
}

  

