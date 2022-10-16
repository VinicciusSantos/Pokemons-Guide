import { Pokemon } from './../../models/pokemon-id/pokemon';
import { PokemonsService } from './../../services/pokemons.service';
import { Component, OnInit } from '@angular/core';

const types = [
  'normal',
  'fire',
  'water',
  'grass',
  'flying',
  'fighting',
  'poison',
  'electric',
  'ground',
  'rock',
  'psychic',
  'ice',
  'bug',
  'ghost',
  'steel',
  'dragon',
  'dark',
  'fairy',
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private pokemonsService: PokemonsService) {}

  qtd!: number | null;
  types: string[] = types;
  pokemons: Pokemon[] = [];

  ngOnInit() {
    this.pokemonsService.getPokemons(this.qtd).subscribe(res => {
      res.results.forEach(pok => {
        this.pokemonsService.getOnePokemon(pok.name).subscribe(res => {
          this.pokemons.push(res);
        });
      });
    });
  }
}
