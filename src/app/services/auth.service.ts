import { Router } from '@angular/router';
import { CryptoService } from './crypto.service';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private cryptoService: CryptoService, private router: Router) {}

  fazLogin(usuario: User): boolean {
    if (usuario.usuario === 'admin' && usuario.senha === 'admin') {
      let token = this.cryptoService.signToken(
        {
          user: usuario.usuario,
          loginDate: new Date(),
        },
        'sei la'
      );
      localStorage.setItem('token', token);
      this.router.navigate(['/pokemons']);
      return true;
    }
    return false;
  }

  fazLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthencticated(): boolean {
    let token = localStorage.getItem('token');
    if (token) return true;
    return false;
  }
}
