import { FavoriteService, emptyList } from './favorite.service';
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
    localStorage.setItem('favoritos', JSON.stringify(emptyList));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a element in favorites', async () => {
    addFavorites(6);
    expect(service.getFavoritos()['none']).toHaveLength(6);
  });

  it('should return an empty list if there are no favorites', async () => {
    expect(service.getFavoritos()).toStrictEqual(emptyList);
  });

  it('should get return correct elements on getFavorites', async () => {
    addFavorites(6);
    expect(service.getFavoritos()).toStrictEqual({
      s: [],
      a: [],
      b: [],
      c: [],
      d: [],
      e: [],
      f: [],
      none: [0, 1, 2, 3, 4, 5],
    });
  });

  it('should remove a favorite', async () => {
    addFavorites(6);
    service.removeFavorite(3);
    setTimeout(
      () =>
        expect(service.getFavoritos()).toStrictEqual({
          s: [],
          a: [],
          b: [],
          c: [],
          d: [],
          e: [],
          f: [],
          none: [0, 1, 2, 4, 5],
        }),
      100
    );
  });

  it('should remove all favorites', async () => {
    addFavorites(6);
    service.removeAllFaforites();
    expect(service.getFavoritos()).toStrictEqual(emptyList);
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

  it('should return empty string if pokemon have no tier', async () => {
    expect(service.findTier(15)).toBe('');
  });

  it('should return the tier of a pokemon', async () => {
    localStorage.setItem(
      'favoritos',
      JSON.stringify({
        s: [],
        a: [],
        b: [15],
        c: [],
        d: [],
        e: [],
        f: [],
        none: [],
      })
    );
    expect(service.findTier(15)).toBe('b');
  });

  it('should change favorite', async () => {
    service.changeFavorite(85);
    setTimeout(() => {
      expect(service.isfavorited(85)).toBeTruthy();
    }, 100);
    service.changeFavorite(85);
    setTimeout(() => {
      expect(service.isfavorited(85)).toBeFalsy();
    }, 100);
  });

  it('should change the tier of a pokemon', async () => {
    localStorage.setItem(
      'favoritos',
      JSON.stringify({
        s: [],
        a: [],
        b: [15],
        c: [],
        d: [],
        e: [],
        f: [],
        none: [],
      })
    );
    service.changeTier(15, 'c');
    expect(service.getFavoritos()).toStrictEqual({
      s: [],
      a: [],
      b: [],
      c: [15],
      d: [],
      e: [],
      f: [],
      none: [],
    });
  });

  it('should save all changes', async () => {
    let newList = {
      s: [8],
      a: [90, 88],
      b: [6],
      c: [4, 26],
      d: [12, 3],
      e: [9],
      f: [5],
      none: [1, 14, 15, 11, 13, 10, 30, 7],
    };
    service.saveAllChanges(newList);
    expect(service.getFavoritos()).toStrictEqual(newList);
  });
});
