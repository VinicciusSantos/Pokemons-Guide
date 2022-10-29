import { AuthService } from './../../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styles: ['button { display: flex }'],
})
export class LogoutButtonComponent {
  constructor(private authService: AuthService) {}

  logOut() {
    this.authService.fazLogout();
  }
}
