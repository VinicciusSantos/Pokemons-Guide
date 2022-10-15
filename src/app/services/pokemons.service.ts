import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from '../models/root-response/root-object';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private httpClient: HttpClient) {}
  url: string = 'https://pokeapi.co/api/v2/pokemon';

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'aplications/json',
    }),
  };

  getPokemons(qtd: number | null = 20): Observable<RootObject> {
    return this.httpClient.get<RootObject>(`${this.url}?limit=${qtd}`);
  }
}
