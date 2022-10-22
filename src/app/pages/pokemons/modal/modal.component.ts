import { TitleService } from './../../../services/title.service';
import { PokemonsService } from './../../../services/pokemons.service';
import { Pokemon } from '../../../models/pokemon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  isOpen: boolean = true;
  pokemon!: Pokemon;

  constructor(
    private _pokService: PokemonsService,
    private _titleService: TitleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  PokemonName: string = '';

  async delay() {
    await Promise.resolve();
  }
  isClosing = false;
  async changeModal() {
    this.isClosing = true;
    await this.delay();
    this.isOpen = !this.isOpen;
    this.isClosing = false;
    this._titleService.changeTitle('Pokemons', 'pokeball.png');
    this._router.navigate(['/pokemons']);
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: any) => {
      this.PokemonName = params['name'] || 1;
    });
    this._pokService
      .getOnePokemon(this.PokemonName)
      .subscribe((res: Pokemon) => {
        this.pokemon = res;
        this._titleService.changeTitle(res.name);
        this._titleService.changeFaviconUrl(res.sprites.front_default);
      });
  }
}
