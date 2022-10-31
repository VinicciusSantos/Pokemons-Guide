import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pokemon } from './../models/pokemon';
import { PokemonsByTypes } from './../models/pokemonsByTypes';
import { RootObject } from './../models/root';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private httpClient: HttpClient) {}
  url: string = 'https://pokeapi.co/api/v2';

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'aplications/json',
    }),
  };

  getOnePokemon(name: string | number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${this.url}/pokemon/${name}`);
  }

  getPokemons(offset: number, limit: number): Observable<RootObject> {
    return this.httpClient.get<RootObject>(
      `${this.url}/pokemon?offset=${offset}&limit=${limit}`
    );
  }

  getPokemonsByType(type: string): Observable<PokemonsByTypes> {
    return this.httpClient.get<PokemonsByTypes>(`${this.url}/type/${type}`);
  }
}
