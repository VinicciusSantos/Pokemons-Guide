import { CryptoService } from './crypto.service';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private cryptoService: CryptoService) {}

  fazLogin(usuario: User): boolean {
    if (usuario.usuario === 'admin' && usuario.senha === 'admin') {
      let token = this.cryptoService.encodeToken(usuario.usuario);
      localStorage.setItem('token', token);
      return true;
    }
    return false;
  }

  fazLogout() {
    localStorage.removeItem('token');
  }
}
