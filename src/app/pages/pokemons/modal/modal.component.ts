import { PokemonsService } from './../../../services/pokemons.service';
import { Pokemon } from '../../../models/pokemon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
    private _route: ActivatedRoute,
    private _router: Router,
    private _title: Title
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
    this._title.setTitle('Pokemons');
    this._router.navigate(['/pokemons']);
    this.favIcon.href = '../../../../assets/pokeball.png';
  }

  favIcon: any = document.getElementById('appIcon');

  ngOnInit(): void {
    this._route.params.subscribe((params: any) => {
      this.PokemonName = params['name'] || 1;
    });
    this._title.setTitle(
      this.PokemonName.replace(/\b\w/g, l => l.toUpperCase())
    );
    this._pokService
      .getOnePokemon(this.PokemonName)
      .subscribe((res: Pokemon) => {
        this.pokemon = res;
        this.favIcon.href = res.sprites.front_default;
      });
  }
}
