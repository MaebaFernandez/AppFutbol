mport { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//simport { Respuesta } from '../modelos/noticia';
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
 
}
