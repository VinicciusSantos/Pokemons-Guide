import { PokemonsService } from './../../../services/pokemons.service';
import { RootObject, Result } from './../../../models/root';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  constructor(private _pokemonsService: PokemonsService) {}
  search: string = '';
  pokemons!: RootObject;
  filterPokemons: any[] = [];

  closeDropdown() {
    this.search = '';
    this.filterPokemons = [];
  }

  changeSeach() {
    if (this.search === '' || !this.search) {
      return this.closeDropdown();
    }
    this.filterPokemons = this.pokemons.results
      .filter((pok: Result) => {
        return pok.name.includes(this.search);
      })
      .map((p: Result) => p.name);
  }

  ngOnInit(): void {
    this._pokemonsService.getPokemons(0, 9999).subscribe((res: RootObject) => {
      this.pokemons = res;
      console.log(res);
    });
  }
}
