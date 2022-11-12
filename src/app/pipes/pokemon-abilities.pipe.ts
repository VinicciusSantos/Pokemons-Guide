import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonAbilities',
})
export class PokemonAbilitiesPipe implements PipeTransform {
  transform(value: Object, ...args: unknown[]): unknown {
    return Object.values(value)
      .map(v => v.ability.name)
      .join(' | ');
  }
}
