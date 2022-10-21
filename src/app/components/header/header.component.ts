import { AuthService } from './../../services/auth.service';
import { Component, Input } from '@angular/core';

export interface page {
  title: string;
  route: string;
  icon: string;
}

export interface HeaderProps {
  pages: page[];
  image: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  @Input() image?: string = '../../../assets/title.png';
  @Input() pages?: page[] = [
    {
      title: 'Home',
      route: '/pokemons',
      icon: 'home',
    },
    {
      title: 'favoritos',
      route: '/favoritos',
      icon: 'star',
    },
  ];

  logOut() {
    this.authService.fazLogout();
  }
}
