import { FavoriteService } from './../../../services/favorite.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss'],
})
export class CardPokemonComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  constructor(private _favoriteService: FavoriteService) {}

  isFavorited!: boolean;
  changeFavorite(): void {
    this._favoriteService.changeFavorite(this.pokemon.id);
    this.isFavorited = this._favoriteService.isfavorited(this.pokemon.id);
  }

  ngOnInit(): void {
    this.isFavorited = this._favoriteService.isfavorited(this.pokemon.id);
  }
}
