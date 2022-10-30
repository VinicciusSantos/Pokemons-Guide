import { Injectable } from '@angular/core';

const tiers = ['s', 'a', 'b', 'c', 'd', 'e', 'f'];
export interface favorites {
  s: number[];
  a: number[];
  b: number[];
  c: number[];
  d: number[];
  e: number[];
  f: number[];
  none: number[];
}

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  isfavorited(id: number): boolean {
    let favoritos: favorites = this.getFavoritos();
    if (this.findTier(id) != '') return true;
    return false;
  }

  addFavorite(id: number) {
    let favoritos: favorites = this.getFavoritos();
    favoritos['none'].push(id);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }

  removeFavorite(id: number) {
    let favoritos: favorites | any = this.getFavoritos();
    let tierDoId = this.findTier(id);
    favoritos[tierDoId] = favoritos[tierDoId].filter(
      (pok: number) => pok != id
    );
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }

  findTier(id: number): string {
    let retorno = '';
    let favoritos: favorites = this.getFavoritos();
    Object.values(favoritos).forEach((tier, index) => {
      if (tier.includes(id)) retorno = tiers[index];
    });
    return retorno;
  }

  removeAllFaforites() {
    localStorage.removeItem('favoritos');
  }

  changeTier(id: number, tier: string) {
    this.removeFavorite(id);
    let favoritos: favorites | any = this.getFavoritos();
    favoritos[tier].push(id);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }

  changeFavorite(id: number) {
    this.isfavorited(id) ? this.removeFavorite(id) : this.addFavorite(id);
  }

  getFavoritos(): favorites {
    let favoritos: any = localStorage.getItem('favoritos');
    if (!favoritos) {
      const emptyList = {
        s: [],
        a: [],
        b: [],
        c: [],
        d: [],
        e: [],
        f: [],
        none: [],
      };
      localStorage.setItem('favoritos', JSON.stringify(emptyList));
      return emptyList;
    }
    return JSON.parse(favoritos);
  }
}
