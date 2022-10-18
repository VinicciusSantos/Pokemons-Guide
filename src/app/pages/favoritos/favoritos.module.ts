import { HeaderModule } from './../../components/header/header.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FavoritosComponent } from './favoritos.component';

@NgModule({
  declarations: [FavoritosComponent],
  imports: [CommonModule, HeaderModule],
})
export class FavoritosModule {}
