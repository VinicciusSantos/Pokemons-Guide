import { FavoriteService } from './favorite.service';
import { TestBed } from '@angular/core/testing';

describe('FavoriteService', () => {
  let service: FavoriteService;

  function addFavorites(qtd: number) {
    for (let i = 0; i < qtd; i++) {
      service.addFavorite(i);
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
    });
    service = TestBed.inject(FavoriteService);
    localStorage.removeItem('favoritos');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a element in favorites', async () => {
    addFavorites(6);
    expect(service.getFavoritos()).toHaveLength(6);
  });

  it('should return an empty list if there are no favorites', async () => {
    expect(service.getFavoritos()).toStrictEqual([]);
  });

  it('should get return correct elements on getFavorites', async () => {
    addFavorites(6);
    expect(service.getFavoritos()).toStrictEqual([0, 1, 2, 3, 4, 5]);
  });

  it('should remove a favorite', async () => {
    addFavorites(6);
    service.removeFavorite(3);
    expect(service.getFavoritos()).toStrictEqual([0, 1, 2, 4, 5]);
  });

  it('should remove all favorites', async () => {
    addFavorites(6);
    service.removeAllFaforites();
    expect(service.getFavoritos()).toStrictEqual([]);
  });

  it('should show if an element is favorited', async () => {
    let test = 556;
    service.addFavorite(test);
    expect(service.isfavorited(test)).toBeTruthy();
  });

  it('should show if an element is not favorited', async () => {
    let test = Math.random() * 100;
    expect(service.isfavorited(test)).toBeFalsy();
  });

  it('should change favorite', async () => {
    service.changeFavorite(8);
    expect(service.isfavorited(8)).toBeTruthy();
    service.changeFavorite(8);
    expect(service.isfavorited(8)).toBeFalsy();
  });
});
