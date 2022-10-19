import { Result } from './../models/root-response/root-object';
import { Pokemon } from './../models/pokemon-id/pokemon';
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

  getOnePokemon(name: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${this.url}/${name}`);
  }

  getPokemons(offset: number, limit: number): Observable<RootObject> {
    return this.httpClient.get<RootObject>(
      `${this.url}?offset=${offset}limit=${limit}`
    );
  }
}
