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
  initialPokemons: Pokemon[] = [];
  pokemons: Pokemon[] = [];
  search: string = '';

  ngOnInit() {
    this.pokemonsService.getPokemons(this.qtd).subscribe(res => {
      res.results.forEach(pok => {
        this.pokemonsService.getOnePokemon(pok.name).subscribe(res => {
          this.initialPokemons.push(res);
        });
      });
    });
    this.pokemons = this.initialPokemons;
  }

  filterByName(): void {
    if (this.search === '') {
      this.pokemons = this.initialPokemons;
      return;
    }
    this.pokemons = this.initialPokemons.filter((pok: Pokemon) => {
      return pok.name.toLowerCase().includes(this.search.toLowerCase());
    });
  }
}
