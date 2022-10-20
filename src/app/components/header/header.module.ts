import { AppZorroModule } from './../../shared/app-zorro/app-zorro.module';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleThemeComponent } from '../toggle-theme/toggle-theme.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, AppZorroModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent, ToggleThemeComponent],
})
export class HeaderModule {}
