import { FavoriteService } from './../../services/favorite.service';
import { TitleService } from 'src/app/services/title.service';
import { Component, OnInit } from '@angular/core';

export interface classe {
  name: string;
  color: string;
}

const tier_classes: classe[] = [
  { name: 's', color: '#FF7F7F' },
  { name: 'a', color: '#FFBF7F' },
  { name: 'b', color: '#FFFF7F' },
  { name: 'c', color: '#7FFF7F' },
  { name: 'd', color: '#7FBFFF' },
  { name: 'e', color: '#7F7FFF' },
  { name: 'f', color: '#FF7FFF' },
];

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss'],
})
export class FavoritosComponent implements OnInit {
  constructor(private _titleService: TitleService) {}

  favoritos: any = [];
  tiers: any[] = tier_classes;

  ngOnInit(): void {
    this._titleService.changeTitle('Favoritos', 'star.png');
  }
}
