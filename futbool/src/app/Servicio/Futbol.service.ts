import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Respuesta } from '../modelo/Futbol';
import { Respuesta2 } from '../modelo/Coachs';
import { Respuesta3 } from '../modelo/Equipos';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FutbolService {

  constructor(private http: HttpClient) { }
  getPaises(){
    return this.http.get<Respuesta>(`${environment.urlBase}/countries`,{
      headers:{
        "x-rapidapi-key":environment.apiKey,
        "x-rapidapi-host":environment.host
        
      }
    });
  }

  getEquipos(){
    return this.http.get<Respuesta2>(`${environment.urlBase}/teams`,{
      headers:{
        "x-rapidapi-key":environment.apiKey,
        "x-rapidapi-host":environment.host
        
      }
    });
  }
  getCoach(){
    return this.http.get<Respuesta3>(`${environment.urlBase}/coachs`,{
      headers:{
        "x-rapidapi-key":environment.apiKey,
        "x-rapidapi-host":environment.host
        
      }
    });
  }
 
}
