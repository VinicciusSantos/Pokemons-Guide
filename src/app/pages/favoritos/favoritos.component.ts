import { TitleService } from 'src/app/services/title.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss'],
})
export class FavoritosComponent implements OnInit {
  constructor(private _TitleService: TitleService) {}

  ngOnInit(): void {
    this._TitleService.changeTitle('Favoritos', 'star.png');
  }
}
