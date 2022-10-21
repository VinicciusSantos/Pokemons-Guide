import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

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
