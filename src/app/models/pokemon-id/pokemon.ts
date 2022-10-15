import { Sprites } from './sprites';
import { Form } from './form';
import { Ability } from './ability';

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: Form[];
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  past_types: any[];
  species: any;
  sprites: Sprites;
  stats: any[];
  types: any[];
  weight: number;
}
