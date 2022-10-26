import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PokemonsService } from './../../../services/pokemons.service';
import { RootObject, Result } from './../../../models/root';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit, OnDestroy {
  constructor(
    private _pokemonsService: PokemonsService,
    private _router: Router
  ) {}
  search: string = '';
  pokemons!: RootObject;
  filterPokemons: any[] = [];
  subs: Subscription[] = [];

  closeDropdown() {
    this.search = '';
    this.filterPokemons = [];
  }

  onSubmit(): void {
    if (this.filterPokemons.length === 0) return;
    this._router.navigate(['/pokemons', this.filterPokemons[0]]);
    this.closeDropdown();
  }

  changeSeach() {
    if (this.search === '' || !this.search) {
      return this.closeDropdown();
    }
    this.filterPokemons = this.pokemons.results
      .filter((pok: Result) => {
        return pok.name
          .toLowerCase()
          .includes(this.search.trim().toLowerCase());
      })
      .map((p: Result) => p.name);
  }

  ngOnInit(): void {
    this.subs.push(
      this._pokemonsService
        .getPokemons(0, 9999)
        .subscribe((res: RootObject) => {
          this.pokemons = res;
        })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
