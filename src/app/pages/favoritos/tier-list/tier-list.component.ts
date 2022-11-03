import {
  favorites,
  FavoriteService,
} from './../../../services/favorite.service';
import { PokemonsService } from './../../../services/pokemons.service';
import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { classe } from '../favoritos.component';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tier-list',
  templateUrl: './tier-list.component.html',
  styleUrls: ['./tier-list.component.scss'],
})
export class TierListComponent implements OnInit {
  @Input() classes: classe[] = [];

  constructor(
    private _pokemonsService: PokemonsService,
    private _favoriteService: FavoriteService
  ) {}

  favoritos: favorites | any = {
    s: [],
    a: [],
    b: [],
    c: [],
    d: [],
    e: [],
    f: [],
    none: [],
  };

  drop(event: CdkDragDrop<any[]>) {
    const previousIndex = event.previousContainer.data.findIndex(
      item => item === event.item.data
    );

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, previousIndex, event.currentIndex);
    } else
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        previousIndex,
        event.currentIndex
      );
    let newFavList: any = {};
    Object.entries(this.favoritos).forEach(
      (item: any[]) => (newFavList[item[0]] = item[1].map((i: any) => i.id))
    );
    this._favoriteService.saveAllChanges(newFavList);
  }

  ngOnInit(): void {
    const favList: favorites = this._favoriteService.getFavoritos();
    Object.values(favList).forEach((tier, index) => {
      tier.forEach((fav: any) => {
        this._pokemonsService
          .getOnePokemon(`${fav}`)
          .subscribe((res: Pokemon) =>
            this.favoritos[Object.keys(this.favoritos)[index]].push(res)
          );
      });
    });
  }
}
