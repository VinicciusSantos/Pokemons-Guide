import { FavoriteService } from './../../services/favorite.service';
import { TitleService } from 'src/app/services/title.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss'],
})
export class FavoritosComponent implements OnInit {
  constructor(
    private _titleService: TitleService,
    private _favoriteService: FavoriteService
  ) {}

  favoritos: any = [];

  ngOnInit(): void {
    this._titleService.changeTitle('Favoritos', 'star.png');
    this.favoritos = this._favoriteService.getFavoritos();
  }
}
