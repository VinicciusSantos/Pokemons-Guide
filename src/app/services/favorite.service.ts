import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  isfavorited(id: number): boolean {
    let favoritos: any[] = this.getFavoritos();
    if (favoritos.includes(id)) return true;
    return false;
  }

  addFavorite(id: number) {
    let favoritos: any[] = this.getFavoritos();
    favoritos.push(id);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }

  removeFavorite(id: number) {
    let favoritos: any[] = this.getFavoritos();
    favoritos = favoritos.filter(fav => fav !== id);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }

  removeAllFaforites() {
    localStorage.removeItem('favoritos');
  }

  changeFavorite(id: number) {
    this.isfavorited(id) ? this.removeFavorite(id) : this.addFavorite(id);
  }

  getFavoritos(): any[] {
    let favoritos: any = localStorage.getItem('favoritos');
    if (!favoritos) {
      localStorage.setItem('favoritos', JSON.stringify([]));
      return [];
    }
    return JSON.parse(favoritos);
  }
}
