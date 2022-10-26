import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Pokemon } from '../../../models/pokemon';
import { PokemonsService } from './../../../services/pokemons.service';
import { TitleService } from './../../../services/title.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  isOpen: boolean = true;
  pokemon!: Pokemon;

  constructor(
    private _pokService: PokemonsService,
    private _titleService: TitleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  PokemonName: string = '';
  subs: Subscription[] = [];

  isClosing = false;
  async changeModal() {
    this.isClosing = true;
    setTimeout(() => {
      this.isOpen = !this.isOpen;
      this.isClosing = false;
      this._titleService.changeTitle('Pokemons', 'pokeball.png');
      this._router.navigate(['/pokemons']);
    }, 500);
  }

  ngOnInit(): void {
    this.subs.push(
      this._route.params.subscribe((params: any) => {
        this.PokemonName = params['name'] || 1;
      })
    );
    this.subs.push(
      this._pokService
        .getOnePokemon(this.PokemonName)
        .subscribe((res: Pokemon) => {
          this.pokemon = res;
          this._titleService.changeTitle(res.name);
          this._titleService.changeFaviconUrl(res.sprites.front_default);
        })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
