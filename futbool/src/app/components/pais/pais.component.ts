import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../../modelo/Futbol';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss'],
})
export class PaisComponent implements OnInit {
  @Input() pais:  Pais;

  constructor(private iab: InAppBrowser) { }

  ngOnInit() {}

  mostrarPais(){
    const browser = this.iab.create(this.pais.flag,'_system');
    // console.log("Abriendo noticia", this.noticia.url);
  }
}


