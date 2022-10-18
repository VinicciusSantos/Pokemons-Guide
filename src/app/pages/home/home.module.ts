import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderModule } from './../../components/header/header.module';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';
import { HomeComponent } from './home.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [CommonModule, HeaderModule, NgbModule],
  exports: [],
  declarations: [HomeComponent, CardPokemonComponent, ModalComponent],
})
export class HomeModule {}
