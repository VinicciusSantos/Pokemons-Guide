import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  isModalOpen: boolean = false;

  changeModal() {
    this.isModalOpen = !this.isModalOpen;
  }
}
