import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor() {}
  isModalOpen: boolean = false;

  changeModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  ngOnInit(): void {
    console.log('oi');
  }
}
