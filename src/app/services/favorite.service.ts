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

export const emptyList = {
  s: [],
  a: [],
  b: [],
  c: [],
  d: [],
  e: [],
  f: [],
  none: [],
};

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
    favoritos[this.findTier(id)] = favoritos[this.findTier(id)]?.filter(
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

  saveAllChanges(lista: favorites) {
    this.removeAllFaforites();
    localStorage.setItem('favoritos', JSON.stringify(lista));
  }

  getFavoritos(): favorites {
    let favoritos: any = localStorage.getItem('favoritos');
    if (!favoritos) {
      localStorage.setItem('favoritos', JSON.stringify(emptyList));
      return emptyList;
    }
    return JSON.parse(favoritos);
  }
}
