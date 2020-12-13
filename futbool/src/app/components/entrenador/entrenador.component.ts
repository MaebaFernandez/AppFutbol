import { Component, Input, OnInit } from '@angular/core';
import {  Response } from '../../modelo/Coachs';

@Component({
  selector: 'app-entrenador',
  templateUrl: './entrenador.component.html',
  styleUrls: ['./entrenador.component.scss'],
})
export class EntrenadorComponent implements OnInit {
  @Input() EntrenadorLista : Response [] = [];

  constructor() { }

  ngOnInit() {}

}
