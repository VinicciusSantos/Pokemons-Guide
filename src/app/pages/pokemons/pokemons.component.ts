import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Pok, PokemonsByTypes } from 'src/app/models/pokemonsByTypes';
import { Result } from 'src/app/models/root';
import { types } from 'src/app/models/types';
import { TitleService } from 'src/app/services/title.service';

import { Pokemon } from '../../models/pokemon';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-home',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit, OnDestroy {
  constructor(
    private pokemonsService: PokemonsService,
    private _titleService: TitleService,
    private route: ActivatedRoute
  ) {}

  offset: number = 0;
  limit: number = 30;

  types: string[] = types;
  initialPokemons: Pokemon[] = [];
  pokemons: Pokemon[] = [];
  search: string = '';

  observer: IntersectionObserver | null = null;

  type: string = '';
  subscription!: Subscription;
  subs: Subscription[] = [];

  // Função Responsável por chamar o service para receber os dados da API quando a tela é scrollada até o fim
  loadPokemons(offset: number, limit: number): void {
    this.subs.push(
      this.pokemonsService.getPokemons(offset, limit).subscribe(res => {
        res.results.forEach((pok: Result) => {
          this.subs.push(
            this.pokemonsService.getOnePokemon(pok.name).subscribe(res => {
              this.initialPokemons.push(res);
            })
          );
        });
      })
    );
    this.pokemons = this.initialPokemons;
  }

  // função usada quando é necessário carregar mais um grupo de pokemons na tela
  async loadMore() {
    if (this.initialPokemons.length > 0) {
      this.offset += this.limit;
      this.loadPokemons(this.offset, this.limit);
    }
  }

  // Função que vai fazer o filtro dos pokemons
  async filterByType() {
    const oldType = this.type;
    // delay para o observador conseguir identificar o query param
    await new Promise(resolve => setTimeout(resolve, 50));

    if (this.type === '' || !this.type) {
      this.loadPokemons(this.offset, this.limit);
      return;
    }

    if (oldType === this.type && this.pokemons.length > 0) return;

    this.initialPokemons = [];
    this.pokemons = [];

    // Atualizando o título e o favicom da página
    this._titleService.changeTitle(
      `${this.type} Pokémons`,
      `/types/${this.type}.png`
    );

    // Buscando pokemons filtrados da api
    this.subs.push(
      this.pokemonsService
        .getPokemonsByType(this.type)
        .subscribe((res: PokemonsByTypes) => {
          res.pokemon.forEach((pok: Pok) => {
            this.subs.push(
              this.pokemonsService
                .getOnePokemon(pok.pokemon.name)
                .subscribe(res => {
                  this.initialPokemons.push(res);
                })
            );
          });
        })
    );
    this.pokemons = this.initialPokemons;
  }

  ngOnInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && (this.type === '' || !this.type))
          this.loadMore();
      });
    });

    // Alterando o titulo do navegador
    this._titleService.changeTitle('Pokemons', 'pokeball.png');

    // Criando observador para implementação do scroll infinito
    const button = document.getElementById('load-more');
    if (button) this.observer.observe(button);

    // Buscando o query do tipo de pokemon na url
    this.subscription = this.route.queryParams.subscribe((queryParams: any) => {
      this.type = queryParams['type'];
    });

    this.filterByType();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
