import { PokemonsService } from './../../services/pokemons.service';
import { Component, OnInit } from '@angular/core';
import { RootObject } from 'src/app/models/root-response/root-object';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private pokemonsService: PokemonsService) {}

  qtd!: number | null;
  pokemons!: RootObject;
  ngOnInit() {
    this.pokemonsService
      .getPokemons(this.qtd)
      .subscribe(res => (this.pokemons = res));
    console.log(this.pokemons);
  }
}
