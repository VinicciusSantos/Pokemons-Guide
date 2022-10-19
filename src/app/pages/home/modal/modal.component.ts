import { PokemonsService } from './../../../services/pokemons.service';
import { Pokemon } from '../../../models/pokemon-id/pokemon';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface ModalProps {
  isOpen: boolean;
  pokemon: Pokemon;
}

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
    private _router: Router
  ) {}

  PokemonName: string = '';

  isClosing = false;
  async changeModal() {
    this.isClosing = true;
    await new Promise(f => setTimeout(f, 500));
    this.isOpen = !this.isOpen;
    this.isClosing = false;
    this._router.navigate(['/pokemons']);
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: any) => {
      this.PokemonName = params['name'];
    });
    this._pokService
      .getOnePokemon(this.PokemonName)
      .subscribe((res: Pokemon) => (this.pokemon = res));
  }
}
