import { Component, OnInit,Input } from '@angular/core';
import {  Response } from '../../modelo/Futbol';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss'],
})
export class PaisesComponent implements OnInit {
  @Input() paisesLista : Response [] = [];
  constructor() { }

  ngOnInit() {}

}