import { Pokemon } from './../../models/pokemon-id/pokemon';
import { PokemonsService } from './../../services/pokemons.service';
import { Component, OnInit } from '@angular/core';
import { types } from 'src/app/models/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private pokemonsService: PokemonsService) {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) this.loadMore();
      });
    });
  }

  offset: number = 0;
  limit: number = 30;

  types: string[] = types;
  initialPokemons: Pokemon[] = [];
  pokemons: Pokemon[] = [];
  search: string = '';

  observer: IntersectionObserver;

  // Função Chamada para filtrar os pokemons pelo nome na searchbar
  filterByName(): void {
    if (this.search === '') {
      this.pokemons = this.initialPokemons;
      return;
    }
    this.pokemons = this.initialPokemons.filter((pok: Pokemon) => {
      return pok.name.toLowerCase().includes(this.search.toLowerCase());
    });
  }

  // Função Responsável por chamar o service para receber os dados da API
  loadPokemons(offset: number, limit: number): void {
    this.pokemonsService.getPokemons(offset, limit).subscribe(res => {
      res.results.forEach(pok => {
        this.pokemonsService.getOnePokemon(pok.name).subscribe(res => {
          this.initialPokemons.push(res);
        });
      });
    });
    this.pokemons = this.initialPokemons;
  }

  // função usada quando é necessário carregar mais um grupo de pokemons na tela
  async loadMore() {
    this.offset += this.limit;
    this.loadPokemons(this.offset, this.limit);
  }

  ngOnInit() {
    const button = document.getElementById('load-more');
    if (button) this.observer.observe(button);
    this.loadPokemons(this.offset, this.limit);
  }
}
