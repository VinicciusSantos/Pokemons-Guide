import { Pokemon } from './../../models/pokemon-id/pokemon';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss'],
})
export class CardPokemonComponent {
  @Input() pokemon!: Pokemon;
  constructor() {}

  isModalOpen: boolean = false;
  changeModal(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
