import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.scss'],
})
export class ToggleThemeComponent implements OnInit {
  isDarkMode!: boolean;

  constructor(private themeService: ThemeService) {}

  toggleDarkMode() {
    this.isDarkMode
      ? this.themeService.update('light-mode')
      : this.themeService.update('dark-mode');
  }

  ngOnInit() {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }
}
