import { HeaderModule } from './../../components/header/header.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FavoritosComponent } from './favoritos.component';
import { TierListComponent } from './tier-list/tier-list.component';

@NgModule({
  declarations: [FavoritosComponent, TierListComponent],
  imports: [CommonModule, HeaderModule],
})
export class FavoritosModule {}
