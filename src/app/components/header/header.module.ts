import { FormsModule } from '@angular/forms';
import { AppZorroModule } from '../../styles/app-zorro.module';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleThemeComponent } from './toggle-theme/toggle-theme.component';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';

@NgModule({
  imports: [CommonModule, RouterModule, AppZorroModule, FormsModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent, ToggleThemeComponent, SettingsComponent, LogoutButtonComponent],
})
export class HeaderModule {}
