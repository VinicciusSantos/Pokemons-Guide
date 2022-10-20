import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PokemonsService } from './pokemons.service';

describe('TesteService', () => {
  let service: PokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a pokemon list', async () => {
    expect(service.getPokemons(0, 20)).not.toBeNull();
  });

  it('should return a pokemon', async () => {
    expect(service.getOnePokemon('pikachu')).not.toBeNull();
  });
});
