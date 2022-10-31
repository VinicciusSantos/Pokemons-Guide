import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleService } from 'src/app/services/title.service';
import { PokemonsService } from '../../services/pokemons.service';
import { types } from 'src/app/models/types';
import { PokemonsComponent } from './pokemons.component';

describe('PokemonsComponent', () => {
  let component: PokemonsComponent;
  let fixture: ComponentFixture<PokemonsComponent>;

  beforeEach(() => {
    const activatedRouteStub = () => ({
      queryParams: { subscribe: (f: (arg0: {}) => any) => f({}) },
    });
    const titleServiceStub = () => ({
      changeTitle: (arg: any, arg1: any) => ({}),
    });
    const pokemonsServiceStub = () => ({
      getPokemons: (offset: any, limit: any) => ({
        subscribe: (f: (arg0: {}) => any) => f({}),
      }),
      getOnePokemon: (name: any) => ({
        subscribe: (f: (arg0: {}) => any) => f({}),
      }),
      getPokemonsByType: (type: any) => ({
        subscribe: (f: (arg0: {}) => any) => f({}),
      }),
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PokemonsComponent],
      imports: [FormsModule],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: TitleService, useFactory: titleServiceStub },
        { provide: PokemonsService, useFactory: pokemonsServiceStub },
      ],
    });
    fixture = TestBed.createComponent(PokemonsComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`offset has default value`, () => {
    expect(component.offset).toEqual(0);
  });

  it(`limit has default value`, () => {
    expect(component.limit).toEqual(30);
  });

  it(`types has default value`, () => {
    expect(component.types).toEqual(types);
  });

  it(`initialPokemons has default value`, () => {
    expect(component.initialPokemons).toEqual([]);
  });

  it(`pokemons has default value`, () => {
    expect(component.pokemons).toEqual([]);
  });

  it(`subs has default value`, () => {
    expect(component.subs).toEqual([]);
  });
});
