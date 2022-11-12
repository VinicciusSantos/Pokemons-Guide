import { PokemonAbilitiesPipe } from './pokemon-abilities.pipe';

describe('PokemonAbilitiesPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonAbilitiesPipe();
    expect(pipe).toBeTruthy();
  });
});
