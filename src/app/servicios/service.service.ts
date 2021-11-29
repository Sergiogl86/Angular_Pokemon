import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  getpokemon1(): Observable<any> {
    return this.http.get(environment.apiURL1);
  }
  getpokemon2(): Observable<any> {
    return this.http.get(environment.apiURL2);
  }

  postPokemon(pokemon: {}): Observable<any> {
    return this.http.post(environment.apiURL3, pokemon);
  }
}
