import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';

import { FavoritosComponent } from './favoritos.component';
import { TierCardComponent } from './tier-list/tier-card/tier-card.component';
import { TierListComponent } from './tier-list/tier-list.component';

@NgModule({
  declarations: [FavoritosComponent, TierListComponent, TierCardComponent],
  imports: [CommonModule, ComponentsModule, DragDropModule],
})
export class FavoritosModule {}
