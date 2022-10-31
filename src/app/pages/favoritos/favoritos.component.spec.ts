import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';
import { FavoritosComponent, tier_classes } from './favoritos.component';

describe('FavoritosComponent', () => {
  let component: FavoritosComponent;
  let fixture: ComponentFixture<FavoritosComponent>;

  beforeEach(() => {
    const titleServiceStub = () => ({
      changeTitle: (string: any, string1: any) => ({}),
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FavoritosComponent],
      providers: [{ provide: TitleService, useFactory: titleServiceStub }],
    });
    fixture = TestBed.createComponent(FavoritosComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`favoritos has default value`, () => {
    expect(component.favoritos).toEqual([]);
  });

  it(`tiers has default value`, () => {
    expect(component.tiers).toEqual(tier_classes);
  });
});
