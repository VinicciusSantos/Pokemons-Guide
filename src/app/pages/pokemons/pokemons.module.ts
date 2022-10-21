import { AppZorroModule } from '../../styles/app-zorro.module';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './pokemons.routing';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderModule } from '../../components/header/header.module';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';
import { PokemonsComponent } from './pokemons.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    NgbModule,
    RouterModule,
    HomeRoutingModule,
    FormsModule,
    AppZorroModule,
  ],
  declarations: [PokemonsComponent, CardPokemonComponent, ModalComponent],
})
export class PokemonsModule {}