import { Component, OnInit,Input } from '@angular/core';
import {  Response } from '../../modelo/Equipos';


@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss'],
})
export class EquipoComponent implements OnInit {
  @Input() EquipoLista : Response [] = [];
  constructor() { }

  ngOnInit() {}

}
