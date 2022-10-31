import { HeaderModule } from './../../components/header/header.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { FavoritosComponent } from './favoritos.component';
import { TierListComponent } from './tier-list/tier-list.component';

@NgModule({
  declarations: [FavoritosComponent, TierListComponent],
  imports: [CommonModule, HeaderModule, DragDropModule],
})
export class FavoritosModule {}
